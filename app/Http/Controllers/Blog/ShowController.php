<?php

declare(strict_types=1);

namespace App\Http\Controllers\Blog;

use App\Http\Resources\BlogResource;
use App\Http\Response\Inertia;
use App\Models\Blog;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Inertia\Response;

class ShowController
{
    public function __invoke(Blog $blog, Inertia $inertia): RedirectResponse | Response
    {
        if ($blog->external) {
            return new RedirectResponse((string) $blog->redirect_url);
        }

        return $inertia
            ->title($blog->title)
            ->metaDescription($blog->description)
            ->metaImage(Storage::disk('s3')->url("{$blog->slug}.jpg"))
            ->render('Blog/Show', [
                'blog' => new BlogResource($blog),
            ]);
    }
}
