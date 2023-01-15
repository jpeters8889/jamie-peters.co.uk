<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Inertia\Response;
use Inertia\ResponseFactory as Inertia;

class ArticleController
{
    public function index(Inertia $inertia): Response
    {
        return $inertia->render('Articles', [
            'articles' => Article::query()
                ->published()
                ->latest()
                ->paginate(5, ['slug', 'title', 'description', 'created_at']),
        ]);
    }

    public function show(Inertia $inertia, Article $article): Response
    {
        return $inertia->render('Article', [
            'article' => $article,
        ]);
    }
}
