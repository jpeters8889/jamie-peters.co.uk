<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\BlogFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Support\Stringable;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;
use Override;

class Blog extends Model
{
    /** @use HasFactory<BlogFactory> */
    use HasFactory;
    use HasSlug;

    /** @return array<string, string> */
    #[Override]
    protected function casts(): array
    {
        return [
            'published' => 'bool',
            'external' => 'bool',
        ];
    }

    #[Override]
    public function getRouteKey(): string
    {
        return $this->slug;
    }

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug');
    }

    /** @return Attribute<Stringable, never> */
    public function body(): Attribute
    {
        return Attribute::get(fn (string $body) => Str::of($body)
            ->markdown([
                'renderer' => [
                    'soft_break' => '<br />',
                ],
            ])
            ->replace('<?php', '&lt;?php')
            // Collapse whitespace between <pre> and <code> so the first line of
            // a code block isn't indented by the source HTML's formatting.
            ->replaceMatches('/(<pre[^>]*>)\s+(<code)/', '$1$2'));
    }

    #[Override]
    public function resolveRouteBinding($value, $field = null): self
    {
        return $this->newQuery()->where('slug', $value)
            ->published()
            ->firstOrFail();
    }

    /**
     * @param  Builder<self>  $query
     * @return Builder<self>
     */
    public function scopePublished(Builder $query): Builder
    {
        return $query->where('published', true);
    }
}
