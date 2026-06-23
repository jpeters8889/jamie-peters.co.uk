<?php

declare(strict_types=1);

namespace App\Jobs;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Storage;
use Wnx\SidecarBrowsershot\BrowsershotLambda;

class GenerateSiteOgImage implements ShouldQueue
{
    use Queueable;

    public function handle(): void
    {
        Storage::disk('s3')->put(
            'og-image.jpg',
            BrowsershotLambda::html(view('default-og-image')->render())
                ->windowSize(1200, 630)
                ->setScreenshotType('jpeg', 100)
                ->screenshot(),
            'public'
        );
    }
}
