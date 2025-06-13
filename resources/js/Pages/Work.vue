<script setup lang="ts">
import Card from '@/Components/Card.vue';
import Heading from '@/Components/Heading.vue';
import { WorkSnippet as WorkSnippetType } from '@/types/Work';
import Project from '@/Components/Project.vue';

defineProps<{ employment: WorkSnippetType[] }>();
</script>

<template>
  <Card>
    <Heading>Work</Heading>

    <div
      class="mx-auto w-full max-w-2xl rounded-2xl border border-primary/10 p-4 md:p-8"
    >
      <div
        v-for="(work, index) in employment"
        :key="work.startDate"
        class="flex justify-between"
      >
        <div class="flex w-16 flex-col sm:w-24">
          <div
            class="mr-8 flex size-12 flex-shrink-0 items-center justify-center rounded-full border border-primary/10 p-2 sm:size-16"
          >
            <img
              :src="work.logo"
              :alt="`${work.company} logo`"
            />
          </div>
          <div
            class="h-full w-6 border-primary/10 sm:w-8"
            :class="{ 'border-r': index < employment.length - 1 }"
          />
        </div>
        <div class="flex flex-1 flex-col">
          <div
            class="flex flex-col border-primary/10 sm:flex-row sm:items-end sm:justify-between sm:border-b sm:pb-1"
          >
            <h2
              class="text-xl font-semibold text-primary md:text-2xl"
              v-text="work.company"
            />
            <small
              class="font-semibold text-gray-700"
              v-text="`${work.startDate} - ${work.endDate}`"
            />
          </div>
          <h3
            class="mt-2 font-semibold sm:text-lg md:text-xl"
            v-text="work.role"
          />
          <p
            class="prose mt-6"
            :class="{ 'mb-12': index < employment.length - 1 }"
            v-text="work.description"
          />
        </div>
      </div>
    </div>
  </Card>

  <Card>
    <Heading>Personal Projects</Heading>

    <div class="flex w-full flex-col space-y-5">
      <Project
        title="Coeliac Sanctuary"
        :links="[
          {
            label: 'www.coeliacsanctuary.co.uk',
            url: 'https://www.coeliacsanctuary.co.uk',
          },
          {
            label: 'www.github.com/coeliacsanctuary/coeliacsanctuary.co.uk',
            url: 'https://www.github.com/coeliacsanctuary/coeliacsanctuary.co.uk',
          },
        ]"
      >
        <p class="prose">
          Coeliac Sanctuary is a blog/business owned by my wife, it serves the
          Coeliac community in the UK (People who can’t eat gluten) while she
          looks after content, marketing and social media. I am responsible for
          the entire backend, infrastructure, hosting, and constantly creating
          new features.
        </p>
        <p class="prose">
          It started as a Vanilla PHP website but was rewritten in Laravel and
          the current version was launched in 2020.
        </p>
        <p class="prose">
          The website includes blogs, recipes, eating out guide with the ability
          for visitors to the website to leave reviews on different eateries
          around the UK, and an online shop that utilises APIs from Stripe and
          PayPal to handle payments.
        </p>
        <p class="prose">
          In late 2021 a mobile app launched, developed in React Native, the app
          is used to show places to eat from the eating out guide, on a map
          around a users location, the app is available on the Google Play store
          and Apple Store, and the app code is available on
          <a
            href="https://github.com/coeliacsanctuary/coeliac-sanctuary-on-the-go-3"
            target="_blank"
          >
            Github </a
          >.
        </p>
        <p class="prose">
          Over the past couple of years in my spare time I have been rebuilding
          the application from the ground up as a full Laravel, Inertia and Vue
          app with SSR and SEO in mind, including a heavily customised
          TailwindCSS configuration, and custom Inertia request handler for
          adding convenience methods to easily add things like page titles, meta
          content, etc.
        </p>
        <p class="prose">
          The code base for the new website can be explored in the Github link
          above.
        </p>
      </Project>

      <Project
        title="PHPUnit Code Assertions"
        :links="[
          {
            label: 'www.github.com/jpeters8889/phpunit-code-assertions',
            url: 'https://www.github.com/jpeters8889/phpunit-code-assertions',
          },
        ]"
      >
        <p class="prose">
          Inspired by the PestPHP Arch Testing plugin, I wanted to explore ways
          to perform similar tests in a PHPUnit test suite, including ways to
          check for forgotten debug statements, ensure class structure and
          naming, and various over project level rules.
        </p>

        <p class="prose">
          While you can get a similar result with various different PHPStan or
          PHP CS Fixer rules, there was nothing to write an expressive test on
          code quality like in PestPHP.
        </p>

        <p class="prose">
          You can see the package being used in
          <a
            href="https://github.com/coeliacsanctuary/coeliacsanctuary.co.uk/blob/main/tests/Code/CodeArchitectureTest.php"
            target="_blank"
          >
            this test
          </a>
          within the new Coeliac Sanctuary codebase.
        </p>
      </Project>

      <Project
        title="This website"
        :links="[
          {
            label: 'www.github.com/jpeters8889/jamie-peters.co.uk',
            url: 'https://www.github.com/jpeters8889/jamie-peters.co.uk',
          },
        ]"
      >
        <p class="prose">
          This website is also a small VILT app hosted on Laravel Cloud, while
          it's not as big or as comprehensive as some of my other apps past and
          present, it still sticks to the tech stack that brings me so much joy.
        </p>
      </Project>
    </div>
  </Card>
</template>
