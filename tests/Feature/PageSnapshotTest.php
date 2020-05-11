<?php

namespace Tests\Feature;

use Spatie\Snapshots\Drivers\HtmlDriver;
use Spatie\Snapshots\MatchesSnapshots;
use Tests\TestCase;

class PageSnapshotTest extends TestCase
{
    use MatchesSnapshots;

    /** @test */
    public function it_matches_the_homepage_snapshot()
    {
        $content = $this->get('/')->content();

        $this->assertMatchesSnapshot($content, new HtmlDriver());
    }

    /** @test */
    public function it_matches_the_about_snapshot()
    {
        $content = $this->get('/about')->content();

        $this->assertMatchesSnapshot($content, new HtmlDriver());
    }

    /** @test */
    public function it_matches_the_projects_snapshot()
    {
        $content = $this->get('/projects')->content();

        $this->assertMatchesSnapshot($content, new HtmlDriver());
    }
}
