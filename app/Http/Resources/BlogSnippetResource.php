<?php

declare(strict_types=1);

namespace App\Http\Resources;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin Blog */
class BlogSnippetResource extends JsonResource
{
    /** @return array<string, mixed> */
    public function toArray(Request $request): array
    {
        return [
            'title' => $this->title,
            'description' => $this->description,
            'date' => $this->created_at?->format('jS M Y'),
            'link' => route('blog.show', $this->resource),
            'external' => $this->external,
        ];
    }
}
