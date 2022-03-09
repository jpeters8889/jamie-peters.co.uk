@props(['title', 'url', 'github' => '', 'text'])

<div class="flex flex-col bg-blue-900-05 p-2 mb-4 shadow">
    <div class="mb-3 text-blue-900 font-semibold border-b border-blue-900 pb-2 text-center sm:text-left">
        <h2 class="text-2xl">{{ $title }}</h2>
        <h3>
            <a href="{{ $url }}" target="_blank"
               class="text-black hover:text-blue-900 break-words">{{ $text }}</a>
        </h3>
        @if($github)
            <h3>
                <a href="{{ $github }}" target="_blank"
                   class="text-black hover:text-blue-900 break-words">{{ $github }}</a>
            </h3>
        @endif
    </div>
    <div>
        {{ $slot }}
    </div>
</div>
