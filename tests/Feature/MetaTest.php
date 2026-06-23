<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Blog;
use Illuminate\Support\Facades\Storage;
use Inertia\Testing\AssertableInertia as Assert;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class MetaTest extends TestCase
{
    #[Test]
    public function itSharesTheDefaultMetaOnPagesWithoutOverrides(): void
    {
        $this->get(route('home'))
            ->assertStatus(200)
            ->assertInertia(
                fn (Assert $page): Assert => $page
                    ->where('meta.title', config('metas.title'))
                    ->where('meta.baseUrl', config('app.url'))
                    ->where('meta.image', Storage::disk('s3')->url('og-image.jpg'))
                    ->where('meta.currentUrl', route('home'))
                    ->missing('meta.description')
            );
    }

    #[Test]
    public function itOverridesTheTitlePerPage(): void
    {
        $this->get(route('about'))
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page): Assert => $page->where('meta.title', 'About Me'));
    }

    #[Test]
    public function itSharesTheBlogTitleDescriptionAndImageOnTheShowPage(): void
    {
        $blog = Blog::factory()->create([
            'title' => 'A Published Post',
            'description' => 'A short summary of the post.',
            'published' => true,
        ]);

        $this->get(route('blog.show', $blog))
            ->assertStatus(200)
            ->assertInertia(
                fn (Assert $page): Assert => $page
                    ->where('meta.title', 'A Published Post')
                    ->where('meta.description', 'A short summary of the post.')
                    ->where('meta.image', Storage::disk('s3')->url("{$blog->slug}.jpg"))
            );
    }
}
