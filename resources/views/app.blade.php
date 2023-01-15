<!DOCTYPE html>
<html lang="en" class="min-h-screen">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon"/>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Rock+Salt&display=swap" rel="stylesheet">

    @vite(['resources/js/app.ts', "resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead
</head>
<body class="bg-gray-300 min-h-screen">
@inertia

<script async src="https://www.googletagmanager.com/gtag/js?id=UA-110429316-1"></script>
<script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }

    gtag('js', new Date());

    gtag('config', 'UA-110429316-1');
</script>
</body>
</html>
