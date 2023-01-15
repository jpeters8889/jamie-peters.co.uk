<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

/**
 * @property string $title
 * @property string $slug
 * @property string $description
 * @property string $body
 * @property Carbon $created_at
 */
class Article extends Model
{
    use HasSlug;

    protected $casts = ['published' => 'bool'];

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug');
    }

    public function getBodyAttribute(string $body): string
    {
        return Str::of($body)
            ->prepend('<p>')
            ->replace(PHP_EOL, '</p><p>')
            ->append('</p>')
            ->toString();
    }

    public function resolveRouteBinding($value, $field = null): self
    {
        return $this->newQuery()->where('slug', $value)
            ->published()
            ->firstOrFail();
    }

    /**
     * @param Builder<self> $query
     * @return Builder<self>
     */
    public function scopePublished(Builder $query): Builder
    {
        return $query->where('published', true);
    }
}
