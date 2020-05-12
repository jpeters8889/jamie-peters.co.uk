@extends('layouts.app')

@section('content')
    <x-content-section>
        <x-slot name="title">
            About Me
        </x-slot>

        <x-slot name="content">
            <div class="flex flex-col">
                <div>
                    <p>
                        Web Design has been my main interest since 2001/2002 when as a young twelve or thirteen year old
                        I frequented one of the early Harry Potter fansites and wanted to make my own, my first websites
                        were rubbish, but I never gave up, over the next year or so I started learning HTML and the then
                        traditional table based layouts. Later, after I had turned 15, I did my Work Experience through
                        school with a home PHP Developer, and from there I started learning PHP and MySQL, when table
                        layouts started dying out in the mid-to-late 2000s I started learning CSS and making my first
                        DIV based layouts, and since then I have always kept learning.
                    </p>
                    <p>
                        <jp-image src="{{ asset('assets/images/laravel-logo.png') }}" alt="Laravel" :zoomable="false"
                                  classes="w-1/3 max-w-200px float-right ml-2 my-2"></jp-image>
                        Within the past 5 years or so I started learning more Object Orientated PHP and applying that
                        methodology to to my projects, and later within the last couple of years I started learning and
                        using Laravel more, which I have now become a bit of an enthusiast for, and it is my go to for
                        new projects, including using TDD where I can.
                    </p>
                    <p>
                        Coupled with learning Laravel I have also started using Tailwind CSS more instead of writing my
                        own traditional CSS files, and I have learnt the Vue Javascript framework and started
                        adopting this into my own projects too.
                    </p>
                    <p>
                        Over the past few years I've come to the conclusion that I prefer the development side of Web
                        Applications, writing the code that powers the software behind the scenes rather than the front
                        end and the look and feel, but I am capable of working on the front end too, but my passion is
                        as a back end developer.
                    </p>
                    <p>
                        Outside of Web Development my other main interests include photography, whenever I am out with
                        my Fiancee and her family I always have my camera with me, I use a combination of Adobe
                        Lightroom and Adobe Photoshop to post-process my photos, then the very best end up on my
                        <a href="http://www.flickr.com/photos/jpeters8889/sets" target="_blank">Flickr Stream</a>.
                    </p>
                    <p>
                        I love to travel, which helps with my photography, and I am a little bit of an adrenaline
                        junkie, I love roller coasters and thrill rides. In May 2019 I completed the <a
                            href="https://www.zipworld.co.uk/adventure/velocity" target="_blank">Velocity 2</a> zip wire
                        at Penrhyn Quarry in North Wales, along with my mother in law. Velocity 2 is the fastest
                        zipslide in the world at over 100mph, and the longest in Europe, in the process we raised over
                        £1,600 for the Critical Care Unit at Royal Stoke Hospital after my father in law spent a
                        considerable amount of time there following a severe Stroke. One of my goals for a few years now
                        has been to do a bungee jump or skydive, but unfortunately I have never had the opportunity...
                        <strong> yet</strong>.
                    </p>
                    <p>
                        I am a music lover, particularly rock and the punk/pop punk sub genres, I have been playing
                        guitar since Christmas 2009 and attend a lot of concerts to see my favourite bands live, which
                        also comes into the love of travelling as I have attended concerts up and down the country and
                        have followed my favourite bands around on tour in the past.
                    </p>
                </div>

                <x-project-images-wrapper title="">
                    <x-project-image src="{{ asset('assets/images/zipslide.jpg') }}"
                                     alt="Me (With arms raised) on the zipslide"></x-project-image>

                    <x-project-image src="{{ asset('assets/images/zipslide-cheque.jpg') }}"
                                     alt="My partner (far left), me, and my mother in law (middle) with staff in the Critical Care ward at Royal Stoke Hospital handing a cheque over for over £1600"></x-project-image>
                </x-project-images-wrapper>
            </div>
        </x-slot>
    </x-content-section>
@endsection
