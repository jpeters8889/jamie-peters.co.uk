<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Blog;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Blog::factory()->count(5)->create();
    }
}
