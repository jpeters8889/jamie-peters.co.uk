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
                'A Laravel Premier Partner agency building new applications, modernising existing platforms, and augmenting client teams. I deliver production Laravel across a range of projects, working flexibly across Blade, Inertia + Vue, React SPAs and Filament, with a strong focus on maintainable, well-tested code.',
                'May 2023',
                'Present',
            ),
            new WorkHistory(
                'Click Dealer',
                asset('images/articles/work/click-dealer.svg'),
                'Senior Software Engineer',
                'A B2B SaaS company serving the UK automotive industry. Over five years I progressed from maintaining legacy PHP to leading development on new Laravel services and AWS-based microservices, building JSON APIs and tooling across a large platform.',
                'Jan 2018',
                'May 2023',
            ),
            new WorkHistory(
                'Coeliac Sanctuary',
                asset('images/articles/work/coeliac-sanctuary.svg'),
                'Lead Developer',
                'A UK website and mobile app serving the coeliac community, run by my wife. I own the entire technical platform — backend, infrastructure, hosting and ongoing feature development — most recently rebuilding it from the ground up on a modern VILT stack.',
                'Aug 2014',
                'Present',
            ),
        ]);
    }
}
