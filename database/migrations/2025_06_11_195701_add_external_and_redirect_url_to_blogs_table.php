<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    public function up(): void
    {
        Schema::table('blogs', function (Blueprint $table): void {
            $table->boolean('external')->default(false)->after('published');
            $table->string('redirect_url')->nullable()->after('external');
            $table->text('body')->nullable()->change();
        });
    }
};
