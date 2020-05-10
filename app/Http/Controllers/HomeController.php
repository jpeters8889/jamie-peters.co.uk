<?php

namespace App\Http\Controllers;

use JPeters\PageViewBuilder\PageViewBuilder;

class HomeController
{
    public function get(PageViewBuilder $page)
    {
        return $page->render('home');
    }
}
