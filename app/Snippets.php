<?php

namespace App;

use Highlight\Highlighter;
use Illuminate\Support\Str;

class Snippets
{
    private Highlighter $highlighter;

    public function __construct(Highlighter $highlighter)
    {
        $this->highlighter = $highlighter;
    }

    public function __call($what, $params)
    {
        $fileName = Str::kebab($what);

        $file = app_path("stubs/{$fileName}.php.stub");

        if (file_exists($file)) {
            return $this->highlighter->highlight('php', file_get_contents($file))->value;
        }

        return null;
    }
}
