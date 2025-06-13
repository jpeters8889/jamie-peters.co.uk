<?php

declare(strict_types=1);

namespace App\Http\Response;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia as BaseInertia;
use Inertia\Response;

class Inertia
{
    public function __construct()
    {
        BaseInertia::share('meta.baseUrl', config('app.url'));
        BaseInertia::share('meta.title', config('metas.title'));
        BaseInertia::share('meta.image', Storage::disk('s3')->url('og-image.jpg'));
        BaseInertia::share('meta.currentUrl', request()->url());
    }

    public function title(string $title): self
    {
        BaseInertia::share('meta.title', $title);

        return $this;
    }

    public function metaDescription(string $description): self
    {
        BaseInertia::share('meta.description', $description);

        return $this;
    }

    public function metaImage(string $image): self
    {
        BaseInertia::share('meta.image', $image);

        return $this;
    }

    /** @param array<string, mixed> | Arrayable<string, mixed> $props */
    public function render(string $component, array|Arrayable $props = []): Response
    {
        return BaseInertia::render($component, $props);
    }
}
