<?php

declare(strict_types=1);

namespace Tests\Feature;

use Inertia\Testing\AssertableInertia as Assert;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class PageLoadTest extends TestCase
{
    #[Test]
    public function it_loads_the_homepage(): void
    {
        $this->get(route('home'))
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page): Assert => $page->component('Home'));
    }

    #[Test]
    public function it_passes_the_employment_history_and_photo_to_the_homepage(): void
    {
        $this->get(route('home'))
            ->assertStatus(200)
            ->assertInertia(
                fn (Assert $page): Assert => $page
                    ->component('Home')
                    ->has('employment', 3)
                    ->where('employment.0.company', 'Jump24')
                    ->has('me')
            );
    }

    #[Test]
    public function it_loads_the_about_page(): void
    {
        $this->get(route('about'))
            ->assertStatus(200)
            ->assertInertia(
                fn (Assert $page): Assert => $page
                    ->component('About')
                    ->has('me')
            );
    }

    #[Test]
    public function it_loads_the_projects_page(): void
    {
        $this->get(route('work'))
            ->assertStatus(200)
            ->assertInertia(
                fn (Assert $page): Assert => $page
                    ->component('Work')
                    ->has('employment', 3)
            );
    }

    #[Test]
    public function it_loads_the_uses_page(): void
    {
        $this->get(route('uses'))
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page): Assert => $page->component('Uses'));
    }

    #[Test]
    public function it_loads_the_speaking_page(): void
    {
        $this->get(route('speaking'))
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page): Assert => $page->component('Speaking'));
    }
}
