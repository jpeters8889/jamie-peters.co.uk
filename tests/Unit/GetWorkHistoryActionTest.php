<?php

declare(strict_types=1);

namespace Tests\Unit;

use App\Actions\GetWorkHistoryAction;
use App\Dto\WorkHistory;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class GetWorkHistoryActionTest extends TestCase
{
    #[Test]
    public function itReturnsTheWorkHistoryAsWorkHistoryDtos(): void
    {
        $history = new GetWorkHistoryAction()->handle();

        $this->assertCount(3, $history);
        $this->assertContainsOnlyInstancesOf(WorkHistory::class, $history);
        $this->assertSame('Jump24', $history->first()->company);
    }

    #[Test]
    public function theWorkHistoryDtoExposesAllFieldsWhenArrayed(): void
    {
        $history = new GetWorkHistoryAction()->handle();

        $this->assertSame(
            ['company', 'logo', 'role', 'description', 'startDate', 'endDate'],
            array_keys($history->first()->toArray()),
        );
    }
}
