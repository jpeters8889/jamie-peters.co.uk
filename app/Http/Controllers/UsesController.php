<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Response\Inertia;
use Inertia\Response;

class UsesController
{
    public function __invoke(Inertia $inertia): Response
    {
        return $inertia
            ->title('Uses')
            ->render('Uses');
    }
}
