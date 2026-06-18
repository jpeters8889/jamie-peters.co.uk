<?php

declare(strict_types=1);

namespace App\Filament\Pages;

use App\Jobs\GenerateSiteOgImage;
use Filament\Actions\Action;
use Filament\Notifications\Notification;
use Filament\Pages\Dashboard as BaseDashboard;
use Filament\Support\Icons\Heroicon;

class Dashboard extends BaseDashboard
{
    /** @return array<Action> */
    protected function getHeaderActions(): array
    {
        return [
            Action::make('generateSiteOgImage')
                ->label('Regenerate site OG image')
                ->icon(Heroicon::OutlinedPhoto)
                ->requiresConfirmation()
                ->action(function (): void {
                    GenerateSiteOgImage::dispatch();

                    Notification::make()
                        ->title('Site OG image generation queued')
                        ->success()
                        ->send();
                }),
        ];
    }
}
