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
}
