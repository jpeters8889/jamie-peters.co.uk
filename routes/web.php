<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\UsesController;
use App\Models\Article;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Spatie\Browsershot\Browsershot;

Route::get('/', HomeController::class);
Route::get('about', AboutController::class);
Route::get('projects', ProjectsController::class);
Route::get('uses', UsesController::class);
Route::get('articles', [ArticleController::class, 'index']);
Route::get('articles/{article}', [ArticleController::class, 'show']);
Route::get('articles/{article}/og-image', function (Article $article) {
    if(config('app.env') !== 'local') {
        abort(404);
    }

    return view('og-image', compact('article'));
})->name('articleImage');

Route::get('articles/{article}/make-og-image', function(Article $article) {
    if(config('app.env') !== 'local') {
        abort(404);
    }

    Storage::disk('s3')->put("{$article->slug}.jpg",
        Browsershot::url(route('articleImage', ['article' => $article->slug]))
        ->windowSize(1200, 630)
        ->setScreenshotType('jpeg', 100)
        ->screenshot());

    return ['done' => 'ok'];
});


Route::get('og-image', function () {
    if(config('app.env') !== 'local') {
        abort(404);
    }

    return view('default-og-image');
})->name('og-image');

Route::get('make-og-image', function() {
    if(config('app.env') !== 'local') {
        abort(404);
    }

    Storage::disk('s3')->put("og-image.jpg",
        Browsershot::url(route('og-image'))
            ->windowSize(1200, 630)
            ->setScreenshotType('jpeg', 100)
            ->screenshot());

    return ['done' => 'ok'];
});
