<?php

/** @var Router $router */

use App\Http\Controllers\AboutController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProjectsController;
use Illuminate\Routing\Router;

$router->get('/', [HomeController::class, 'get']);
$router->get('/about', [AboutController::class, 'get']);
$router->get('/projects', [ProjectsController::class, 'get']);

