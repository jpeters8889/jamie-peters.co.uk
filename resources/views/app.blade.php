<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
    <meta charset="utf-8" />
    <script>document.documentElement.classList.replace('no-js', 'js');</script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon"/>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">

    @vite('resources/js/app.ts')
    @inertiaHead
</head>
<body class="min-h-screen bg-surface font-sans text-ink antialiased">
    @inertia

    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-110429316-1"></script>
    <script>
         if (typeof window !== 'undefined') {
           window.dataLayer = window.dataLayer || [];

          function gtag() {
            dataLayer.push(arguments);
          }

          gtag('js', new Date());

          gtag('config', 'UA-110429316-1');
        }
    </script>
</body>
</html>
