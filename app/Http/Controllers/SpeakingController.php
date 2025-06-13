<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Response\Inertia;
use Inertia\Response;

class SpeakingController
{
    public function __invoke(Inertia $inertia): Response
    {
        return $inertia
            ->title('Speaking')
            ->render('Speaking');
    }
}
