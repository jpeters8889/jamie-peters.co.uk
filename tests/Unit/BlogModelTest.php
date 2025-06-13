<?php

declare(strict_types=1);

namespace Tests\Unit;

use App\Models\Blog;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class BlogModelTest extends TestCase
{
    #[Test]
    public function itCreatesASlugWhenSavingAnBlog(): void
    {
        $article = Blog::factory()->create(['title' => 'My Blog']);

        $this->assertNotNull($article->slug);
        $this->assertEquals('my-blog', $article->slug);
    }

    #[Test]
    public function itHasAPublishedScope(): void
    {
        Blog::factory()
            ->count(2)
            ->sequence(['published' => true], ['published' => false])
            ->create();

        $this->assertCount(2, Blog::all());

        $this->assertCount(1, Blog::query()->published()->get());
    }

    #[Test]
    public function itOnlyReturnsPublishedBlogsInThePublishedScope(): void
    {
        Blog::factory()
            ->count(2)
            ->sequence(['published' => true], ['published' => false])
            ->create();

        $publishedBlogs = Blog::query()->published()->get();

        $this->assertTrue($publishedBlogs->first()->published);
    }
}
