<x-project-item
    title="Architect"
    url="https://www.github.com/jpeters8889/architect"
    text="www.github.com/jpeters8889/achitect">
    <p>
        <jp-image src="{{ asset('assets/images/architect-list.png') }}"
                  alt="The tabular list of all records built from a Blueprint"
                  classes="w-1/2 max-w-200px float-left mr-2 my-2"></jp-image>
        Architect is a Laravel Admin Package I am currently developing as a Vue SPA and using TDD for the Laravel/API
        side. Architect was originally created as an admin panel for the new Coeliac Sanctuary rebuild, since other
        Laravel admin packages didn’t quite suit my needs I decided to create my own but as an Open Source package.
    </p>
    <p>
        Architect is controlled using a concept I have created called Blueprints and Plans, a Blueprint links to a
        model, and each Plan then links to the columns in the model using text fields and other form elements.
    </p>
    <p>
        <jp-image src="{{ asset('assets/images/architect-form.png') }}"
                  alt="The form generated from a Blueprint to edit a blog."
                  classes="w-1/2 max-w-200px float-right ml-2 my-2"></jp-image>
        Below is a basic example of a Blueprint, the Blueprint is for a User Model and includes for plans for the users
        name, email, password and created at timestamp. The password and created at plans also have modifiers on them to
        hide it on the index view, and hide it on the form view respectively.
    </p>
    <p>
        Architect will use this Blueprint and render a tabular list of the users in the application and display their
        name, email and the date they were created, and then the and edit forms will render inputs for their name, email
        and password.
    </p>
    <x-code-snippet>{!! $snippet !!}</x-code-snippet>
</x-project-item>
