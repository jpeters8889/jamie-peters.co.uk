@extends('layouts.app')

@section('content')
    <x-content-section>
        <x-slot name="title">
            Welcome
        </x-slot>

        <x-slot name="content">
            <p>
                Thank you for taking the time to visit my personal website and portfolio. I am a passionate,
                committed and enthusiastic web developer with 18 years experience in web design and development. I am an
                enthusiast of the <a href="https://www.laravel.com" target="_blank">Laravel PHP Framework</a>, along
                with <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a> and
                <a href="https://vuejs.org/" target="_blank">VueJS</a>.
            </p>
        </x-slot>
    </x-content-section>

    <x-content-section>
        <x-slot name="title">
            My Key Skills
        </x-slot>

        <x-slot name="content">
            <p>
                Extensive knowledge of the Laravel PHP Framework and writing Laravel Applications in a test driven
                approach, I have been developing regularly in PHP for 6 years, and Laravel for 4 years, coupled with
                HTML, MySQL, SCSS/CSS, Tailwind CSS, JavaScript, Vue, Typescript, Node.
            </p>

            <p>
                Along side my Laravel I also have experience in using AWS features including SQS, SNS, SES, S3, Lambda
                and API Gateway alongside the Serverless Framework, basic experience using Docker, creating mobile apps
                using React Native, and knowledge of using Adobe CC product line, Including Photoshop, InDesign,
                Illustrator, Lightroom.
            </p>

            <p>
                All of my personal projects are hosted on Digital Ocean with the aid of Laravel Forge, and some also
                utilise Laravel Envoyer for deployment and, and Laravel Horizon for queue management.
            </p>

            <p>
                My preferred tech stack is Laravel with Tailwind CSS and Vue, and my IDE of choice is PhpStorm.
            </p>

            <p>
                I have a <a href="https://laracasts.com/@jpeters8889" target="_blank">Laracasts</a> forever subscription
                and regularly access the website and watch all new videos available.
            </p>

            <p>
                I have some small open source contributions to a few open source packages, including some by Spatie and
                Beyond Code.
            </p>
        </x-slot>
    </x-content-section>
@endsection
