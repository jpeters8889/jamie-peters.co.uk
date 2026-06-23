<?php

declare(strict_types=1);

namespace App\Filament\Resources\Blogs\Schemas;

use App\Models\Blog;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Schemas\Schema;

class BlogForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Intro')
                    ->description('The headline details shown in listings.')
                    ->columnSpanFull()
                    ->schema([
                        TextInput::make('title')
                            ->required()
                            ->columnSpanFull(),
                        Textarea::make('description')
                            ->required()
                            ->columnSpanFull(),
                        Toggle::make('published')
                            ->default(true),
                    ]),
                Section::make('Content')
                    ->description('Write the post here, or link out to an external article.')
                    ->columnSpanFull()
                    ->schema([
                        Toggle::make('external')
                            ->live(),
                        TextInput::make('redirect_url')
                            ->label('Redirect URL')
                            ->url()
                            ->visible(fn (Get $get): bool => (bool) $get('external'))
                            ->required(fn (Get $get): bool => (bool) $get('external'))
                            ->columnSpanFull(),
                        Textarea::make('body')
                            ->rows(20)
                            ->visible(fn (Get $get): bool => ! $get('external'))
                            ->required(fn (Get $get): bool => ! $get('external'))
                            ->formatStateUsing(fn (?Blog $record): ?string => $record?->getRawOriginal('body'))
                            ->columnSpanFull(),
                    ]),
            ]);
    }
}
