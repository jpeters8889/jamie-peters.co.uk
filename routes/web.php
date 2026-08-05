<?php

declare(strict_types=1);

use App\Http\Controllers\AboutController;
use App\Http\Controllers\Blog\IndexController as BlogIndexController;
use App\Http\Controllers\Blog\ShowController as BlogShowController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SpeakingController;
use App\Http\Controllers\UsesController;
use App\Http\Controllers\WorkController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');
Route::get('about', AboutController::class)->name('about');
Route::prefix('blog')->name('blog.')->group(function (): void {
    Route::get('/', BlogIndexController::class)->name('index');
    Route::get('/{blog}', BlogShowController::class)->name('show');
});

Route::permanentRedirect('articles', '/blog');
Route::permanentRedirect('articles/{slug}', '/blog/{slug}');

Route::get('speaking', SpeakingController::class)->name('speaking');
Route::get('uses', UsesController::class)->name('uses');
Route::get('work-and-projects', WorkController::class)->name('work');
