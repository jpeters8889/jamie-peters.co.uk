<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Blog;
use Inertia\Testing\AssertableInertia as Assert;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class BlogPagesTest extends TestCase
{
    #[Test]
    public function itLoadsTheBlogsList(): void
    {
        $this->get(route('blog.index'))
            ->assertStatus(200)
            ->assertInertia(
                fn (Assert $page) => $page
                    ->component('Blog/Index')
                    ->has('blogs')
            );
    }

    #[Test]
    public function itHidesUnpublishedBlogsFromTheList(): void
    {
        Blog::factory()->create(['published' => true]);
        Blog::factory()->create(['published' => false]);

        $this->get(route('blog.index'))
            ->assertStatus(200)
            ->assertInertia(
                fn (Assert $page) => $page
                    ->component('Blog/Index')
                    ->has('blogs', 1)
            );
    }

    #[Test]
    public function itHidesUnpublishedBlogsFromTheHomepage(): void
    {
        Blog::factory()->create(['published' => true]);
        Blog::factory()->create(['published' => false]);

        $this->get(route('home'))
            ->assertStatus(200)
            ->assertInertia(
                fn (Assert $page) => $page
                    ->component('Home')
                    ->has('blogs', 1)
            );
    }

    #[Test]
    public function itErrorsIfGoingToAnBlogThatDoesntExist(): void
    {
        $this->get(route('blog.show', ['blog' => 'foo']))->assertNotFound();
    }

    #[Test]
    public function itErrorsGoingToAnBlogNotPublished(): void
    {
        $blog = Blog::factory()->create(['published' => false]);

        $this->get(route('blog.show', $blog))->assertNotFound();
    }

    #[Test]
    public function itItLoadsAPublishedBlog(): void
    {
        $blog = Blog::factory()->create();

        $this->get(route('blog.show', $blog))
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page->component('Blog/Show'));
    }

    #[Test]
    public function itRedirectsToTheExternalUrlForAnExternalBlog(): void
    {
        $blog = Blog::factory()->create([
            'external' => true,
            'redirect_url' => 'https://example.com/external-post',
        ]);

        $this->get(route('blog.show', $blog))
            ->assertRedirect('https://example.com/external-post');
    }
}
