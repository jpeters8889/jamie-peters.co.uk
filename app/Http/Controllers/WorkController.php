<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Actions\GetWorkHistoryAction;
use App\Http\Response\Inertia;
use Inertia\Response;

class WorkController
{
    public function __invoke(Inertia $inertia, GetWorkHistoryAction $getWorkHistoryAction): Response
    {
        return $inertia
            ->title('Work and Projects')
            ->render('Work', [
                'employment' => $getWorkHistoryAction->handle(),
            ]);
    }
}
