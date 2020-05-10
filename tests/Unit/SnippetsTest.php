<?php

namespace Tests\Unit;

use App\Snippets;
use Tests\TestCase;

class SnippetsTest extends TestCase
{
    private Snippets $snippets;

    protected function setUp(): void
    {
        parent::setUp();

        $this->snippets = resolve(Snippets::class);
    }

    /** @test */
    public function it_loads_a_snippet_that_exists_in_the_snippet_directory_from_a_magic_method()
    {
        $check = $this->snippets->architect();

        $this->assertNotNull($check);
    }

    /** @test */
    public function it_returns_null_when_calling_a_snippet_that_doesnt_exist()
    {
        $check = $this->snippets->foo();

        $this->assertNull($check);
    }

    /** @test */
    public function it_returns_highlighted_data()
    {
        $check = $this->snippets->architect();

        $this->assertStringContainsString('hljs-', $check);
    }
}
