@props(['title' => 'Project Images'])

<div class="border border-blue-900-20 bg-blue-900-05 mt-2 flex flex-col pb-0 shadow">
    @if($title !== '')
        <h2 class="m-2 mb-0 font-semibold text-2xl text-blue-900 leading-none">{{ $title }}</h2>
        <p class="m-2 -mb-2 leading-none" style="margin-bottom: -0.25rem;">
            Below are some images related to this project, images can be clicked to enlarge them.
        </p>
    @endif
    <div class="flex flex-wrap">
        {{ $slot }}
    </div>
</div>
