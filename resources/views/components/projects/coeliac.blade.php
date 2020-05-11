<x-project-item title="Coeliac Sanctuary" url="https://www.coeliacsanctuary.co.uk" text="www.coeliacsanctuary.co.uk">
    <div class="flex flex-col">
        <div class="flex-1">
            <p>
                Coeliac Sanctuary is my fiancee’s business, it was originally started in August 2014 as just
                Gluten Free blog for the Coeliac community, along with recipes, places to eat guide and reviews.
            </p>
            <p>
                Later in 2016 I created an online shop for the website, using raw vanilla PHP and utilising the
                Stripe and PayPal APIs for handling payments.
            </p>
            <p>
                A basic mobile app was created using Phone Gap, primarily for the places to eat section on the
                website, to display places in our database on a map around the users location. The app was
                originally written in basic HTML, SCSS and JQuery.
            </p>
            <p>
                I am currently in the process of a creating new major version of the website, including
                rewriting all the code from scratch using TDD and the Laravel Framework along with Tailwind CSS
                and Vue Components, also creating a new MySQL data structure for the website and writing scripts
                to import and migrate the existing data structure into the new Laravel version.
            </p>
            <!--<p>
                This newest rebuild has seen all images moved onto Amazon S3 for easier storage.
            </p>
            <p>
                The rebuild is currently stored in a private repository,  can be given on request, and dependent on the state of the
                project timeline, the project may be able to be viewed on a development server.
            </p>-->
        </div>

        <x-project-images-wrapper>
            <x-project-image src="{{ asset('assets/images/coeliac-current.png') }}"
                             alt="The current Live version of Coeliac Sanctuary, which is using a custom PHP MVC Framework"></x-project-image>

            <x-project-image src="{{ asset('assets/images/coeliac-new.png') }}"
                             alt="The new version of Coeliac Sanctuary currently in development using Laravel, Tailwind CSS and Vue."></x-project-image>
        </x-project-images-wrapper>
    </div>
</x-project-item>
