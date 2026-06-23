<?php

declare(strict_types=1);

namespace App\Filament\Resources\Blogs\Tables;

use App\Jobs\GenerateBlogOgImage;
use App\Models\Blog;
use Filament\Actions\Action;
use Filament\Actions\BulkAction;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Notifications\Notification;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\TernaryFilter;
use Filament\Tables\Table;
use Illuminate\Support\Collection;

class BlogsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')
                    ->searchable(),
                IconColumn::make('published')
                    ->boolean(),
                IconColumn::make('external')
                    ->boolean(),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->defaultSort('created_at', 'desc')
            ->filters([
                TernaryFilter::make('published'),
                TernaryFilter::make('external'),
            ])
            ->recordActions([
                EditAction::make(),
                Action::make('generateOgImage')
                    ->label('Generate OG image')
                    ->icon(Heroicon::OutlinedPhoto)
                    ->action(function (Blog $record): void {
                        GenerateBlogOgImage::dispatch($record);

                        Notification::make()
                            ->title('OG image generation queued')
                            ->success()
                            ->send();
                    }),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    BulkAction::make('generateOgImages')
                        ->label('Generate OG images')
                        ->icon(Heroicon::OutlinedPhoto)
                        ->action(function (Collection $records): void {
                            $records->each(fn (Blog $blog) => GenerateBlogOgImage::dispatch($blog));

                            Notification::make()
                                ->title('OG image generation queued')
                                ->success()
                                ->send();
                        })
                        ->deselectRecordsAfterCompletion(),
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
