<!DOCTYPE html>
<html lang="en" class="min-h-screen">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    @include('page-view-builder::header')

    <link rel="stylesheet" href="{{ mix('assets/css/app.css') }}"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atelier-heath-dark.min.css" />

    <script src="{{ mix('/assets/js/manifest.js') }}"></script>
    <script src="{{ mix('/assets/js/vendor.js') }}"></script>
    <script src="{{ mix('/assets/js/app.js') }}"></script>
</head>
<body class="bg-gray-300 min-h-screen">

<div id="app" class="flex flex-col min-h-screen">
    <x-page-header />

    <div class="main-wrapper flex-1">
        @yield('content')
    </div>

    <x-page-footer />

    <portal-target name="modal"></portal-target>
</div>

<script>
    app().build();
</script>

</body>
</html>
