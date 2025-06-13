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
            ->assertInertia(fn (Assert $page) => $page->component('Home'));
    }

    #[Test]
    public function it_loads_the_about_page(): void
    {
        $this->get(route('about'))
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page->component('About'));
    }

    #[Test]
    public function it_loads_the_projects_page(): void
    {
        $this->get(route('work'))
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page->component('Work'));
    }

    #[Test]
    public function it_loads_the_uses_page(): void
    {
        $this->get(route('uses'))
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page->component('Uses'));
    }

    #[Test]
    public function it_loads_the_speaking_page(): void
    {
        $this->get(route('speaking'))
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page->component('Speaking'));
    }
}
