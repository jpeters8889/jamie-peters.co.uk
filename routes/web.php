<?php

declare(strict_types=1);

use App\Http\Controllers\AboutController;
use App\Http\Controllers\Blog\IndexController as BlogIndexController;
use App\Http\Controllers\Blog\ShowController as BlogShowController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SpeakingController;
use App\Http\Controllers\UsesController;
use App\Http\Controllers\WorkController;
use App\Models\Blog;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Spatie\Browsershot\Browsershot;

Route::get('/', HomeController::class)->name('home');
Route::get('about', AboutController::class)->name('about');
Route::prefix('blog')->name('blog.')->group(function (): void {
    Route::get('/', BlogIndexController::class)->name('index');
    Route::get('/{blog}', BlogShowController::class)->name('show');
    Route::get('/{blog}/og-image', function (Blog $blog) {
        if (config('app.env') !== 'local') {
            abort(404);
        }

        return view('og-image', compact('blog'));
    })->name('og-image');

    Route::get('make-og-image', function (Blog $blog) {
        if (config('app.env') !== 'local') {
            abort(404);
        }

        Storage::disk('s3')->put(
            "{$blog->slug}.jpg",
            Browsershot::url(route('blog.og-image', $blog))
                ->windowSize(1200, 630)
                ->setScreenshotType('jpeg', 100)
                ->screenshot()
        );

        return ['done' => 'ok'];
    });
});

Route::get('speaking', SpeakingController::class)->name('speaking');
Route::get('uses', UsesController::class)->name('uses');
Route::get('work-and-projects', WorkController::class)->name('work');

Route::get('og-image', function () {
    if (config('app.env') !== 'local') {
        abort(404);
    }

    return view('default-og-image');
})->name('og-image');

Route::get('make-og-image', function () {
    if (config('app.env') !== 'local') {
        abort(404);
    }

    Storage::disk('s3')->put(
        'og-image.jpg',
        Browsershot::url(route('og-image'))
            ->windowSize(1200, 630)
            ->setScreenshotType('jpeg', 100)
            ->screenshot()
    );

    return ['done' => 'ok'];
});
