<x-project-item
    title="Coeliac Sanctuary"
    url="https://www.coeliacsanctuary.co.uk"
    text="www.coeliacsanctuary.co.uk"
    github="https://www.github.com/jpeters8889/coeliacsanctuary.co.uk"
>
    <div class="flex flex-col">
        <div class="flex-1">
            <p>
                Coeliac Sanctuary is my fiancees business. It was originally started in August 2014 as just
                Gluten Free blog for the Coeliac community, along with recipes, places to eat guide and reviews.
            </p>
            <p>
                Later in 2016 I created an online shop for the website, still using raw vanilla PHP and utilising the
                Stripe and PayPal APIs for handling payments.
            </p>
            <p>
                A basic mobile app was created using Apache Cordova in 2017, primarily linking to the eating out guide
                section on the website. The app is used to display eateries in the database on an embedded Google map
                around the users location. The app was originally written in basic HTML, SCSS and JQuery.
            </p>
            <p>
                In 2020 a brand new version launched, completely rewritten from the ground up in Laravel using a test
                driven approach and a fresh new data structure using laravel migrations and custom built commands to
                transform the old legacy data structure and values into the new structure.
            </p>
            <p>
                The website is now styled using Tailwind CSS with a customised configuration file for custom colours,
                sizes and breakpoints.
            </p>
            <p>
                The website makes heavy use of Vue components, but is primarily a Blade powered website, but key parts
                of the website rely heavily on Vue.
            </p>
            <p>
                All images on the website are hosted on Amazon S3, and all emails, transactional, and newsletters, are
                sent through Amazon SES, with the newsletter managed by Spatie's Mailcoach.
            </p>
            <p>
                The website is hosted on Digital Ocean, linked with Laravel Forge and Laravel Envoyer.
            </p>
        </div>
    </div>
</x-project-item>
