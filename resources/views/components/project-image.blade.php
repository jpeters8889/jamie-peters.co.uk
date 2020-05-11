@props(['src', 'alt', 'text'])

<div class="flex flex-col p-2 max-w-300px">
    <div class="bg-white-60 p-2 shadow">
        <jp-image src="{{ $src }}"
                  alt="{{ $alt }}"></jp-image>

        <p class="text-center text-sm leading-tight mt-2 text-gray-800">{{ $alt }}</p>
    </div>
</div>
