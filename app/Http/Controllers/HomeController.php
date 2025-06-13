<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Actions\GetWorkHistoryAction;
use App\Http\Resources\BlogSnippetResource;
use App\Http\Response\Inertia;
use App\Models\Blog;
use Inertia\Response;

class HomeController
{
    public function __invoke(Inertia $inertia, GetWorkHistoryAction $getWorkHistoryAction): Response
    {
        return $inertia->render('Home', [
            'blogs' => Blog::query()->latest()->take(3)->get()->mapInto(BlogSnippetResource::class),
            'employment' => $getWorkHistoryAction->handle(),
            'me' => asset('images/me-vilt.jpg'),
        ]);
    }
}
