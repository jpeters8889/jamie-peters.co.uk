<html>
<head>
    @vite(['resources/js/app.ts'])
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Rock+Salt&display=swap"
          rel="stylesheet">
</head>
<body>
<div class="w-[1200px] h-[630px]">
    <div class="rounded shadow h-full w-full flex flex-col">
        <div class="bg-primary flex items-center justify-center h-1/2">
            <div class="w-full flex justify-center max-w-wrapper mx-auto items-center">
                <div class="flex flex-1 flex-col p-2 mx-auto px-4 text-center -mt-8">
                    <h1 class="font-serif text-white text-5xl text-shadow-md tracking-wider mb-5">
                        Jamie Peters
                    </h1>
                    <h2 class="text-xl text-black font-semibold">
                        Laravel / PHP / JavaScript Developer
                    </h2>
                </div>
            </div>
        </div>

        <div class="flex flex-1 flex-col relative">
            <div class="flex justify-around">
                <div class="block w-48 h-48 rounded-full overflow-hidden border-8 border-white absolute top-[-6rem] left-auto right-auto">
                    <img src="/images/me.jpg" alt="Jamie Peters - Laravel / PHP Developer"/>
                </div>
            </div>

            <div class="p-4 text-center mt-4 flex-1 justify-end flex flex-col pb-12">
                <h1 class="text-4xl">
                    {{ $article->title }}
                </h1>

                <p class="mt-4 text-lg">
                    {{ $article->description }}
                </p>
            </div>
        </div>
    </div>
</div>
</body>
</html>
