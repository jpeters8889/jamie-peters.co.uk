<x-project-item
    title="Architect"
    url="https://www.github.com/jpeters8889/architect"
    text="www.github.com/jpeters8889/achitect">

    <div class="flex flex-col">
        <div class="flex-1">
            <p>
                Architect is a Laravel Admin Package I am currently developing as a Vue SPA and using TDD for the
                Laravel / API back end.
            <p>
                Architect is powered using a concept I have created called Blueprints and Plans, a Blueprint links to
                an Eloquent model, and each Plan then links to the columns in the model using text fields and other form
                elements.
            </p>
            <p>
                Below is a basic example of a Blueprint, the Blueprint is for a User Model and includes plans for
                the users name, email, password and the created at timestamp. The password and created at plans also
                have modifiers on them to hide it on the index view, and hide it on the form view respectively.
            </p>
            <p>
                Architect will use this Blueprint and render a tabular list of the users in the application and display
                their name, email and the date they were created, and then the add new and edit forms will render inputs
                for their name, email and password.
            </p>
        </div>

        <x-project-images-wrapper>
            <x-project-image src="{{ asset('assets/images/architect-list.png') }}"
                             alt="The tabular list of all records built from a Blueprint"></x-project-image>

            <x-project-image src="{{ asset('assets/images/architect-form.png') }}"
                             alt="The form generated from a Blueprint to edit a blog."></x-project-image>
        </x-project-images-wrapper>

        <x-code-snippet>{!! $snippet !!}</x-code-snippet>
    </div>
</x-project-item>
