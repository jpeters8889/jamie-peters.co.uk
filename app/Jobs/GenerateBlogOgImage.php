<?php

declare(strict_types=1);

namespace App\Jobs;

use App\Models\Blog;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Storage;
use Wnx\SidecarBrowsershot\BrowsershotLambda;

class GenerateBlogOgImage implements ShouldQueue
{
    use Queueable;

    public function __construct(public Blog $blog)
    {
    }

    public function handle(): void
    {
        Storage::disk('s3')->put(
            "{$this->blog->slug}.jpg",
            BrowsershotLambda::html(view('og-image', ['blog' => $this->blog])->render())
                ->windowSize(1200, 630)
                ->setScreenshotType('jpeg', 100)
                ->screenshot(),
            'public'
        );
    }
}
