<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\UsesController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class);
Route::get('about', AboutController::class);
Route::get('projects', ProjectsController::class);
Route::get('uses', UsesController::class);
Route::get('articles', [ArticleController::class, 'index']);
Route::get('articles/{article}', [ArticleController::class, 'show']);
