<?php

declare(strict_types=1);

namespace App\Http\Resources;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin Blog */
class BlogResource extends JsonResource
{
    /** @return array<string, mixed> */
    public function toArray(Request $request): array
    {
        return [
            'title' => $this->title,
            'slug' => $this->slug,
            'link' => route('blog.show', $this->resource),
            'description' => $this->description,
            'body' => $this->body,
            'created_at' => $this->created_at,
        ];
    }
}
