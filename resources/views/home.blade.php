@extends('layouts.app')

@section('content')
    <x-content-section>
        <x-slot name="title">
            Welcome
        </x-slot>

        <x-slot name="content">
            <p>
                Thank you for taking the time to visit my personal website and only portfolio. I am a passionate,
                committed and enthusiastic web developer with 17 years experience in web design and development. I am an
                enthusiast of the <a href="https://www.laravel.com" target="_blank">Laravel PHP Framework</a>, along
                with<a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a> and<a href="https://vuejs.org/"
                                                                                              target="_blank">Vue</a>.
            </p>
        </x-slot>
    </x-content-section>

    <x-content-section>
        <x-slot name="title">
            My Key Skills
        </x-slot>

        <x-slot name="content">
            <p>
                I have extensive knowledge of the Laravel framework and I have been developing regularly in PHP for
                almost 15 years and have an understanding of traditional procedural code and more modern OOP practices
                and MVC conventions.
            </p>
            <p>
                Along with PHP I have extensive knowledge in GIT, MySQL, HTML, SCSS/CSS, Tailwind CSS, JavaScript, and
                Vue.
            </p>
            <p>
                I have some experience in Docker, HTML5 App Development, Adobe Suite (Including Photoshop, InDesign,
                Illustrator, Lightroom), writing and consuming JSON APIs, and Amazon S3 file storage.
            </p>
            <p>
                My preferred tech stack is Laravel with Tailwind CSS and Vue, and my IDE of choice is PhpStorm.
            </p>
            <p>
                I am always eager to learn more, and I plan expand my knowledge by learning AWS and the use of Laravel Vapor.
                I am intending to look into Laravel Livewire, and hopefully to start contributing to open source
                software more.
            </p>
            <p>
                I have a Laracasts subscription and regularly access the website and watch all new videos available.
            </p>
        </x-slot>
    </x-content-section>
@endsection
