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
                fn (Assert $page): Assert => $page
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
                fn (Assert $page): Assert => $page
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
                fn (Assert $page): Assert => $page
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
            ->assertInertia(fn (Assert $page): Assert => $page->component('Blog/Show'));
    }

    #[Test]
    public function itShapesTheBlogSnippetForTheList(): void
    {
        $blog = Blog::factory()->create([
            'title' => 'Snippet Post',
            'published' => true,
            'created_at' => '2026-01-02 09:00:00',
        ]);

        $this->get(route('blog.index'))
            ->assertInertia(
                fn (Assert $page): Assert => $page
                    ->where('blogs.0.title', 'Snippet Post')
                    ->where('blogs.0.date', '2nd Jan 2026')
                    ->where('blogs.0.external', false)
                    ->where('blogs.0.link', route('blog.show', $blog))
            );
    }

    #[Test]
    public function itRendersTheBodyMarkdownAsHtmlOnTheShowPage(): void
    {
        $blog = Blog::factory()->create([
            'published' => true,
            'body' => '# A Heading',
        ]);

        $this->get(route('blog.show', $blog))
            ->assertInertia(
                fn (Assert $page): Assert => $page
                    ->where('blog.body', fn (string $body): bool => str_contains($body, '<h1>A Heading</h1>'))
                    ->where('blog.link', route('blog.show', $blog))
            );
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

    #[Test]
    public function itRedirectsTheLegacyArticlesIndexToTheBlogIndex(): void
    {
        $response = $this->get('/articles')
            ->assertStatus(301)
            ->assertRedirect(route('blog.index'));

        $this->assertSame('/blog', $response->headers->get('Location'));
    }

    #[Test]
    public function itRedirectsALegacyArticleUrlToTheBlogUrl(): void
    {
        $blog = Blog::factory()->create();

        $response = $this->get("/articles/{$blog->slug}")
            ->assertStatus(301)
            ->assertRedirect(route('blog.show', $blog));

        $this->assertSame("/blog/{$blog->slug}", $response->headers->get('Location'));
    }

    #[Test]
    public function itFollowsALegacyArticleRedirectThroughToTheBlogPost(): void
    {
        $blog = Blog::factory()->create();

        $this->followingRedirects()
            ->get("/articles/{$blog->slug}")
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page): Assert => $page->component('Blog/Show'));
    }
}
