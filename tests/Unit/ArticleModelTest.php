<?php

namespace Tests\Unit;

use App\Models\Article;
use Tests\TestCase;

class ArticleModelTest extends TestCase
{
    /** @test */
    public function itCreatesASlugWhenSavingAnArticle(): void
    {
        $article = $this->create(Article::class, ['title' => 'My Article']);

        $this->assertNotNull($article->slug);
        $this->assertEquals('my-article', $article->slug);
    }

    /** @test */
    public function itHasAPublishedScope(): void
    {
        $this->build(Article::class)
            ->count(2)
            ->sequence(['published' => true], ['published' => false])
            ->create();

        $this->assertCount(2, Article::all());

        $this->assertCount(1, Article::query()->published()->get());
    }

    /** @test */
    public function itOnlyReturnsPublishedArticlesInThePublishedScope(): void
    {
        $this->build(Article::class)
            ->count(2)
            ->sequence(['published' => true], ['published' => false])
            ->create();

        $publishedArticles = Article::query()->published()->get();

        $this->assertTrue($publishedArticles->first()->published);
    }
}
