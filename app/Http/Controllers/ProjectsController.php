<?php

namespace App\Http\Controllers;

use App\Snippets;
use Highlight\Highlighter;
use JPeters\PageViewBuilder\PageViewBuilder;

class ProjectsController
{
    public function get(PageViewBuilder $page, Snippets $snippets)
    {
        return $page
            ->setPageTitle('Personal Projects')
            ->render('projects', [
                'architectSnippet' => $snippets->architect(),
                'viewBuilderSnippet' => $snippets->viewBuilder(),
            ]);
    }
}
