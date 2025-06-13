<?php

declare(strict_types=1);

namespace App\Http\Controllers\Blog;

use App\Http\Resources\BlogSnippetResource;
use App\Http\Response\Inertia;
use App\Models\Blog;
use Inertia\Response;

class IndexController
{
    public function __invoke(Inertia $inertia): Response
    {
        return $inertia
            ->title('Blogs')
            ->render('Blog/Index', [
                'blogs' => Blog::query()->latest()->get()->mapInto(BlogSnippetResource::class),
            ]);
    }
}
