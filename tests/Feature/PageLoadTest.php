<?php

namespace Tests\Feature;

use Tests\TestCase;

class PageLoadTest extends TestCase
{
    /** @test */
    public function it_loads_the_homepage()
    {
        $this->get('/')->assertStatus(200);
    }

    /** @test */
    public function it_loads_the_about_page()
    {
        $this->get('/about')->assertStatus(200);
    }

    /** @test */
    public function it_loads_the_projects_page()
    {
        $this->get('/projects')->assertStatus(200);
    }
}
