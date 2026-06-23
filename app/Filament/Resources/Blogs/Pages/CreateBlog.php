<?php

declare(strict_types=1);

namespace App\Filament\Resources\Blogs\Pages;

use App\Filament\Resources\Blogs\BlogResource;
use App\Jobs\GenerateBlogOgImage;
use App\Models\Blog;
use Filament\Resources\Pages\CreateRecord;

class CreateBlog extends CreateRecord
{
    protected static string $resource = BlogResource::class;

    protected function afterCreate(): void
    {
        /** @var Blog $blog */
        $blog = $this->record;

        if ($blog->published) {
            GenerateBlogOgImage::dispatch($blog);
        }
    }
}
