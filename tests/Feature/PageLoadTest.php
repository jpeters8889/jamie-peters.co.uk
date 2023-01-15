<?php

namespace Tests\Feature;

use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class PageLoadTest extends TestCase
{
    /** @test */
    public function it_loads_the_homepage()
    {
        $this->get('/')
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page->component('Home'));
    }

    /** @test */
    public function it_loads_the_about_page()
    {
        $this->get('/about')
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page->component('About'));
    }

    /** @test */
    public function it_loads_the_projects_page()
    {
        $this->get('/projects')
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page->component('Projects'));
    }

    /** @test */
    public function it_loads_the_uses_page(): void
    {
        $this->get('/uses')
            ->assertStatus(200)
            ->assertInertia(fn (Assert $page) => $page->component('Uses'));
    }
}
