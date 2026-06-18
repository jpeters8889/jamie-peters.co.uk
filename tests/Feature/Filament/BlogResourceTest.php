<?php

declare(strict_types=1);

namespace Tests\Feature\Filament;

use App\Filament\Resources\Blogs\Pages\CreateBlog;
use App\Filament\Resources\Blogs\Pages\EditBlog;
use App\Models\Blog;
use App\Models\User;
use Livewire\Livewire;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class BlogResourceTest extends TestCase
{
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
}
