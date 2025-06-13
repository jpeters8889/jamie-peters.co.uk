<?php

declare(strict_types=1);

namespace App\Actions;

use App\Dto\WorkHistory;
use Illuminate\Support\Collection;

class GetWorkHistoryAction
{
    /** @return Collection<int, WorkHistory> */
    public function handle(): Collection
    {
        return collect([
            new WorkHistory(
                'Jump24',
                asset('images/articles/work/jump-24.svg'),
                'Full Stack Developer',
                'Laravel Partner agency delivering new apps, legacy rescues, and team support. I contribute to clean, testable Laravel codebases across a variety of client projects.',
                'May 2023',
                'Present',
            ),
            new WorkHistory(
                'Click Dealer',
                asset('images/articles/work/click-dealer.svg'),
                'Senior Software Engineer',
                'Laravel Partner agency delivering new apps, legacy rescues, and team support. I contribute to clean, testable Laravel codebases across a variety of client projects.',
                'Jan 2018',
                'May 2023',
            ),
            new WorkHistory(
                'Coeliac Sanctuary',
                asset('images/articles/work/coeliac-sanctuary.svg'),
                'Lead Developer',
                'A UK gluten free blog and shop run by my wife. I build and maintain the backend, infrastructure, and all new features for the platform.',
                'Aug 2014',
                'Present',
            ),
        ]);
    }
}
