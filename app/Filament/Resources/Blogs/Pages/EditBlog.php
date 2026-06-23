<?php

declare(strict_types=1);

namespace App\Filament\Resources\Blogs\Pages;

use App\Filament\Resources\Blogs\BlogResource;
use App\Jobs\GenerateBlogOgImage;
use App\Models\Blog;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;
use Override;

class EditBlog extends EditRecord
{
    protected static string $resource = BlogResource::class;

    #[Override]
    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }

    protected function afterSave(): void
    {
        /** @var Blog $blog */
        $blog = $this->record;

        if ($blog->published && $blog->wasChanged(['title', 'description'])) {
            GenerateBlogOgImage::dispatch($blog);
        }
    }
}
