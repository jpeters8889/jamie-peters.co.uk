<?php

namespace App\Http\Controllers;

use JPeters\PageViewBuilder\PageViewBuilder;

class AboutController
{
    public function get(PageViewBuilder $page)
    {
        return $page
            ->setPageTitle('About Me')
            ->render('about');
    }
}
