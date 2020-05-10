<x-project-item
    title="Laravel Page View Builder"
    url="https://github.com/jpeters8889/laravel-page-builder"
    text="www.github.com/jpeters8889/laravel-page-builder">
    <p>
        A simple package I originally created for Coeliac Sanctuary and extracted out into a package when I started
        using the same functionality in other projects.
    </p>
    <p>
        The idea is to be able to dependency inject the Page Builder class into the controller, and then the class can
        be used to specify a page title, meta information etc and then return a fully rendered blade view in the
        response with the appropriate data.
    </p>
    <p>
        Below is a code sample from a Controller, specifying a page title and meta description and returning a welcome
        view.
    </p>
    <x-code-snippet>{!! $snippet !!}</x-code-snippet>
</x-project-item>
