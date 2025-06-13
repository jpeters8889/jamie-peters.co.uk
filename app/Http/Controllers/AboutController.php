<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Response\Inertia;
use Inertia\Response;

class AboutController
{
    public function __invoke(Inertia $inertia): Response
    {
        return $inertia
            ->title('About Me')
            ->render('About', [
                'me' => asset('images/me-wedding.jpg')
            ]);
    }
}
