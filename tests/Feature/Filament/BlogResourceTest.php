<?php

declare(strict_types=1);

namespace Tests\Feature\Filament;

use App\Filament\Resources\Blogs\Pages\CreateBlog;
use App\Filament\Resources\Blogs\Pages\EditBlog;
use App\Filament\Resources\Blogs\Pages\ListBlogs;
use App\Jobs\GenerateBlogOgImage;
use App\Models\Blog;
use App\Models\User;
use Illuminate\Support\Facades\Queue;
use Livewire\Livewire;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class BlogResourceTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();

        // OG image generation runs on Lambda via Sidecar, which isn't available
        // in tests; faking the queue keeps blog saves from invoking it.
        Queue::fake();
    }

    #[Test]
    public function itRedirectsGuestsAwayFromTheAdminPanel(): void
    {
        $this->get('/admin')->assertRedirect();
    }

    #[Test]
    public function itLoadsTheAdminPanelForAuthenticatedUsers(): void
    {
        $this->actingAs(User::factory()->create());

        $this->get('/admin')->assertStatus(200);
    }

    #[Test]
    public function itStoresTheBodyAsRawMarkdown(): void
    {
        $this->actingAs(User::factory()->create());

        Livewire::test(CreateBlog::class)
            ->fillForm([
                'title' => 'A brand new post',
                'description' => 'A short description.',
                'published' => true,
                'external' => false,
                'body' => '# Heading',
            ])
            ->call('create')
            ->assertHasNoFormErrors();

        $blog = Blog::query()->firstOrFail();

        $this->assertSame('# Heading', $blog->getRawOriginal('body'));
    }

    #[Test]
    public function itFillsTheEditorWithRawMarkdownNotRenderedHtml(): void
    {
        $this->actingAs(User::factory()->create());

        $blog = Blog::factory()->create(['body' => '# Raw heading']);

        Livewire::test(EditBlog::class, ['record' => $blog->getRouteKey()])
            ->assertFormSet(['body' => '# Raw heading']);
    }

    #[Test]
    public function itHidesTheBodyAndShowsTheUrlForExternalBlogs(): void
    {
        $this->actingAs(User::factory()->create());

        Livewire::test(CreateBlog::class)
            ->fillForm(['external' => true])
            ->assertFormFieldIsHidden('body')
            ->assertFormFieldIsVisible('redirect_url');
    }

    #[Test]
    public function itQueuesOgImageGenerationWhenCreatingAPublishedBlog(): void
    {
        $this->actingAs(User::factory()->create());

        Livewire::test(CreateBlog::class)
            ->fillForm([
                'title' => 'A brand new post',
                'description' => 'A short description.',
                'published' => true,
                'external' => false,
                'body' => '# Heading',
            ])
            ->call('create')
            ->assertHasNoFormErrors();

        Queue::assertPushed(GenerateBlogOgImage::class, 1);
    }

    #[Test]
    public function itDoesNotQueueOgImageWhenCreatingADraft(): void
    {
        $this->actingAs(User::factory()->create());

        Livewire::test(CreateBlog::class)
            ->fillForm([
                'title' => 'A draft post',
                'description' => 'A short description.',
                'published' => false,
                'external' => false,
                'body' => '# Heading',
            ])
            ->call('create')
            ->assertHasNoFormErrors();

        Queue::assertNotPushed(GenerateBlogOgImage::class);
    }

    #[Test]
    public function itQueuesOgImageGenerationWhenCreatingAPublishedExternalBlog(): void
    {
        $this->actingAs(User::factory()->create());

        Livewire::test(CreateBlog::class)
            ->fillForm([
                'title' => 'An external post',
                'description' => 'A short description.',
                'published' => true,
                'external' => true,
                'redirect_url' => 'https://example.com/post',
            ])
            ->call('create')
            ->assertHasNoFormErrors();

        Queue::assertPushed(GenerateBlogOgImage::class, 1);
    }

    #[Test]
    public function itQueuesOgImageWhenEditingTheTitleOfAPublishedBlog(): void
    {
        $this->actingAs(User::factory()->create());

        $blog = Blog::factory()->create(['published' => true]);

        Livewire::test(EditBlog::class, ['record' => $blog->getRouteKey()])
            ->fillForm(['title' => 'An updated title'])
            ->call('save')
            ->assertHasNoFormErrors();

        Queue::assertPushed(GenerateBlogOgImage::class, 1);
    }

    #[Test]
    public function itDoesNotQueueOgImageWhenEditingLeavesTheTitleAndDescriptionUnchanged(): void
    {
        $this->actingAs(User::factory()->create());

        $blog = Blog::factory()->create(['published' => true]);

        Livewire::test(EditBlog::class, ['record' => $blog->getRouteKey()])
            ->fillForm(['body' => '# Different body'])
            ->call('save')
            ->assertHasNoFormErrors();

        Queue::assertNotPushed(GenerateBlogOgImage::class);
    }

    #[Test]
    public function itQueuesOgImageViaTheTableRecordAction(): void
    {
        $this->actingAs(User::factory()->create());

        $blog = Blog::factory()->create();

        Livewire::test(ListBlogs::class)
            ->callTableAction('generateOgImage', $blog);

        Queue::assertPushed(GenerateBlogOgImage::class, 1);
    }

    #[Test]
    public function itQueuesOgImageForEachRecordViaTheBulkAction(): void
    {
        $this->actingAs(User::factory()->create());

        $blogs = Blog::factory()->count(3)->create();

        Livewire::test(ListBlogs::class)
            ->callTableBulkAction('generateOgImages', $blogs);

        Queue::assertPushed(GenerateBlogOgImage::class, 3);
    }
}
