<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'App\Http\Controllers';

    /**
     * The path to the "home" route for your application.
     *
     * @var string
     */
    public const HOME = '/';

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        /** @var Router $router */
        $router = app(Router::class);

        $router->middleware('web')
            ->namespace($this->namespace)

            ->group(function () {
                require base_path('routes/web.php');
            });
    }
}
