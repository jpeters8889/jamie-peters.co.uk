<?php

namespace Feature;

use App\Models\Article;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class ArticlesPagesTest extends TestCase
{
    /** @test */
    public function itLoadsTheArticlesList()
    {
        $this->get('articles')
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page
                ->component('Articles')
                ->has('articles')
            );
    }

    /** @test */
    public function itErrorsIfGoingToAnArticleThatDoesntExist(): void
    {
        $this->get('articles/foo')->assertNotFound();
    }

    /** @test */
    public function itErrorsGoingToAnArticleNotPublished(): void
    {
        $article = $this->create(Article::class, ['published' => false]);

        $this->get("articles/{$article->slug}")->assertNotFound();
    }

    /** @test */
    public function itItLoadsAPublishedArticle(): void
    {
        $article = $this->create(Article::class);

        $this->get("articles/{$article->slug}")
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page->component('Article'));
    }
}
