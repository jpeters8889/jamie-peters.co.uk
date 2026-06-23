<?php

declare(strict_types=1);

namespace Tests\Feature\Filament;

use App\Filament\Pages\Dashboard;
use App\Jobs\GenerateSiteOgImage;
use App\Models\User;
use Illuminate\Support\Facades\Queue;
use Livewire\Livewire;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class DashboardTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();

        // OG image generation runs on Lambda via Sidecar, which isn't available
        // in tests; faking the queue keeps the action from invoking it.
        Queue::fake();
    }

    #[Test]
    public function itQueuesSiteOgImageGenerationFromTheDashboardAction(): void
    {
        $this->actingAs(User::factory()->create());

        Livewire::test(Dashboard::class)
            ->callAction('generateSiteOgImage');

        Queue::assertPushed(GenerateSiteOgImage::class, 1);
    }
}
