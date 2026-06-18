<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    @vite(['resources/js/app.ts'])
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet">
</head>
<body>
<div class="relative flex h-[630px] w-[1200px] flex-col justify-between overflow-hidden bg-gradient-to-br from-primary-50 to-surface px-20 py-16 font-sans">
    <div class="pointer-events-none absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-primary/10 blur-3xl"></div>

    <div class="relative flex items-center gap-4">
        <span class="flex size-14 items-center justify-center rounded-full bg-primary text-xl font-extrabold text-white">JP</span>
        <div class="flex flex-col leading-tight">
            <span class="text-xl font-extrabold text-ink">Jamie Peters</span>
            <span class="font-mono text-sm tracking-[0.2em] text-primary-500 uppercase">jamie-peters.co.uk</span>
        </div>
    </div>

    <div class="relative">
        <span class="font-mono text-base tracking-[0.25em] text-primary-500 uppercase">Article</span>
        <h1 class="mt-4 line-clamp-3 text-6xl leading-tight font-extrabold tracking-tight text-ink">
            {{ $blog->title }}
        </h1>
        <p class="mt-6 line-clamp-2 max-w-4xl text-2xl leading-relaxed text-muted">
            {{ $blog->description }}
        </p>
    </div>

    <div class="relative flex items-center gap-3">
        <span class="h-1 w-16 rounded-full bg-primary"></span>
        <span class="text-lg font-semibold text-muted">Laravel · Vue · Inertia · Tailwind</span>
    </div>
</div>
</body>
</html>
