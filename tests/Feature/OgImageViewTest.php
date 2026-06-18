<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Blog;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class OgImageViewTest extends TestCase
{
    #[Test]
    public function theBlogOgImageRendersTheBlogTitleAndDescription(): void
    {
        $blog = Blog::factory()->make([
            'title' => 'A Memorable Headline',
            'description' => 'The description that sells the post.',
        ]);

        $html = view('og-image', ['blog' => $blog])->render();

        $this->assertStringContainsString('A Memorable Headline', $html);
        $this->assertStringContainsString('The description that sells the post.', $html);
    }

    #[Test]
    public function theDefaultSiteOgImageRenders(): void
    {
        $html = view('default-og-image')->render();

        $this->assertStringContainsString('Jamie Peters', $html);
    }
}
