@extends('layouts.app')

@section('content')
    <x-content-section>
        <x-slot name="title">
            Personal Projects
        </x-slot>

        <x-slot name="content">
            <p>
                Below are a few examples of personal projects I have done outside of employment.
            </p>
            <div class="flex flex-col">
                <x-projects.coeliac></x-projects.coeliac>

                <x-projects.architect snippet="{!! $architectSnippet !!}"></x-projects.architect>

                <x-projects.view-builder snippet="{!! $viewBuilderSnippet !!}"></x-projects.view-builder>

                <x-projects.website></x-projects.website>
            </div>
        </x-slot>
    </x-content-section>

@endsection
