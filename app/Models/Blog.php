<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\BlogFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Blog extends Model
{
    /** @use HasFactory<BlogFactory> */
    use HasFactory;
    use HasSlug;

    protected $casts = ['published' => 'bool'];

    public function getRouteKey()
    {
        return $this->slug;
    }

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug');
    }

    /** @return Attribute<Collection<int, string>, never> */
    public function body(): Attribute
    {
        return Attribute::get(fn (string $body) => Str::of($body)
            ->markdown([
                'renderer' => [
                    'soft_break' => '<br />',
                ],
            ])->replace('<?php', "&lt;?php"));
    }

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
