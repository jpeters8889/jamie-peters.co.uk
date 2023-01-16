<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Support\Str;
use Inertia\Response;
use Inertia\ResponseFactory as Inertia;

class HomeController
{
    public function __invoke(Inertia $inertia): Response
    {
        return $inertia->render('Home', [
            'articles' => Article::query()
                ->published()
                ->latest()
                ->take(3)
                ->get(['slug', 'title', 'description', 'created_at'])
                ->map(fn(Article $article) => [...$article->toArray(), 'description' => Str::limit($article->description)]),
        ]);
    }
}
