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
<div class="relative flex h-[630px] w-[1200px] items-center overflow-hidden bg-gradient-to-br from-primary-50 to-surface font-sans">
    <div class="pointer-events-none absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-primary/10 blur-3xl"></div>
    <div class="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-primary/5 blur-3xl"></div>

    <div class="relative flex flex-1 flex-col justify-center pr-10 pl-20">
        <div class="mb-10 flex items-center gap-4">
            <span class="flex size-14 items-center justify-center rounded-full bg-primary text-xl font-extrabold text-white">JP</span>
            <span class="font-mono text-base tracking-[0.25em] text-primary-500 uppercase">jamie-peters.co.uk</span>
        </div>

        <h1 class="text-7xl leading-none font-extrabold tracking-tight text-ink">Jamie Peters</h1>

        <p class="mt-6 max-w-xl text-2xl leading-relaxed text-muted">
            Senior developer specialising in Laravel, Vue, Inertia &amp; Tailwind.
        </p>

        <div class="mt-10 flex gap-3">
            @foreach (['Laravel', 'Vue', 'Inertia', 'Tailwind'] as $tech)
                <span class="rounded-xl border border-primary/15 bg-primary/5 px-5 py-2.5 text-lg font-bold text-primary">{{ $tech }}</span>
            @endforeach
        </div>
    </div>

    <div class="relative flex shrink-0 items-center pr-24">
        <div class="aspect-square w-[380px] overflow-hidden rounded-full shadow-2xl ring-[10px] ring-white">
            <img src="{{ asset('images/me-vilt.jpg') }}"
                 alt="Jamie Peters"
                 class="h-full w-full object-cover"/>
        </div>
    </div>
</div>
</body>
</html>
