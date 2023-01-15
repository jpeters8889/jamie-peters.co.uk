<?php

namespace App\Http\Controllers;

use Inertia\Response;
use Inertia\ResponseFactory as Inertia;

class AboutController
{
    public function __invoke(Inertia $inertia): Response
    {
        return $inertia->render('About');
    }
}
