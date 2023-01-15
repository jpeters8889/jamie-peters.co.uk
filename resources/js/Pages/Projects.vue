<script setup lang="ts">
import Layout from '@/Layouts/Layout.vue';
import Card from '@/Components/Card.vue';
import ProjectItem from '@/Components/ProjectItem.vue';
import {Head} from '@inertiajs/vue3'
</script>

<template>
  <Head title="Projects"/>

  <Layout>
    <Card>
      <template #title>Projects</template>

      <p>
        Below are a few examples of personal projects I have done.
      </p>

      <ProjectItem
          title="Coeliac Sanctuary"
          url="https://www.coeliacsanctuary.co.uk"
          github="https://www.github.com/jpeters8889/coeliacsanctuary.co.uk"
      >
        <template #intro>
          <p class="mt-0">
            Written in Laravel using a TDD and DDD methodology, current front end stack is Blade with additional Vue
            Components and TailwindCSS, but there are plans being made to refactor to InertiaJS.
          </p>
          <p class="mb-0">
            I have also created an app using React Native which is available on Google Play and Apple Stores.
          </p>
        </template>

        <p class="m-0">
          Coeliac Sanctuary is my fiancees business. It was originally started in August 2014 as just
          Gluten Free blog for the Coeliac community, along with recipes, eating out guide and reviews.
        </p>
        <p>
          Later in 2016 I created an online shop for the website, utilising the Stripe and PayPal APIs for handling
          payments.
        </p>
        <p>
          A basic mobile app was created using Apache Cordova in 2017, primarily linking to the eating out guide
          section on the website. The app was used to display eateries in the database on an embedded Google map
          around the users location. The app was originally written in basic HTML, SCSS and JQuery.
        </p>
        <p>
          In 2020 a brand new version of the website launched, completely rewritten from the ground up in Laravel
          using a test driven approach and a fresh new data structure using laravel migrations and custom built
          commands to transform the old legacy data structure and values into the new structure.
        </p>
        <p>
          This new version took over 12 months to make in my spare time outside of work, but was a very rewarding
          project and still continues to be so to this day.
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
          In early 2021 a brand new version of the mobile app was released, completely rewritten in React Native, the
          app is currently available on the Google Play and Apple stores, called Coeliac Sanctuary - On the Go.
        </p>
        <p>
          I have plans to begin a rebuild of the website using InertiaJS from February 2023 when Laravel V10 is
          released, and this will also give me the opportunity to refactor parts of the website and improve code with
          additional things I have learnt over the years and implement additional strict code standards using PHP CS
          Fixer and Larastan.
        </p>
        <p>
          The website is hosted on Digital Ocean, linked with Laravel Forge and deployed with Laravel Envoyer.
        </p>
      </ProjectItem>

      <ProjectItem
          title="This Website"
          url="https://www.github.com/jpeters8889/jamie-peters.co.uk"
      >
        <template #intro>
          <p class="my-0">
            Written in Laravel using a TDD, my first major project using InertiaJS.
          </p>
        </template>
        <p class="m-0">
          This website started life as a simple Laravel and Blade app with a couple of Vue components for additional
          functionality.
        </p>
        <p>
          In the latest update (January 2023) it has being rewritten to use InertiaJS and Vue, with TailwindCSS for
          styling.
        </p>
        <p>
          This is my first major dive into using InertiaJS outside of local experiments, and I am looking forward to
          using it more going forward.
        </p>
      </ProjectItem>
    </Card>
  </Layout>
</template>
