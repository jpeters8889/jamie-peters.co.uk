<script setup lang="ts">
import Card from '@/Components/Card.vue';
import Heading from '@/Components/Heading.vue';
import GithubIcon from '@/Icons/GithubIcon.vue';
import XIcon from '@/Icons/XIcon.vue';
import LinkedInIcon from '@/Icons/LinkedInIcon.vue';
import { Link } from '@inertiajs/vue3';
import { BlogSnippet as BlogSnippetType } from '@/types/Blogs';
import { WorkSnippet as WorkSnippetType } from '@/types/Work';
import BlogSnippet from '@/Components/BlogSnippet.vue';
import WorkSnippet from '@/Components/WorkSnippet.vue';
import { EnvelopeIcon } from '@heroicons/vue/24/solid';

defineProps<{
  blogs: BlogSnippetType[];
  employment: WorkSnippetType[];
  me: string;
}>();
</script>

<template>
  <div
    class="flex flex-col items-center justify-center space-y-8 p-8 xs:flex-row xs:space-y-0 xs:space-x-4 sm:items-start md:space-x-8 lg:space-x-16"
  >
    <div>
      <h1
        class="text-center font-serif text-4xl leading-loose font-semibold text-primary sm:text-left sm:text-5xl lg:text-6xl"
      >
        Hey, I'm Jamie
      </h1>
      <h2
        class="mt-4 text-center text-sm font-semibold sm:text-left lg:text-lg"
      >
        I'm a developer specialising in Laravel, Vue, InertiaJS and Tailwind
        (VILT Stack)
      </h2>

      <div class="mt-5 flex space-x-3 fill-primary text-primary">
        <a
          href="mailto:jamie@jamie-peters.co.uk"
          target="_blank"
        >
          <EnvelopeIcon class="size-8 transition hover:fill-black" />
        </a>
        <a
          href="https://www.github.com/jpeters8889"
          target="_blank"
        >
          <GithubIcon class="size-8 transition hover:fill-black" />
        </a>
        <a
          href="https://www.linkedin.com/in/jpeters8889"
          target="_blank"
        >
          <LinkedInIcon class="size-8 transition hover:fill-black" />
        </a>
        <a
          href="https://www.twitter.com/jpeters8889"
          target="_blank"
        >
          <XIcon class="size-8 transition hover:fill-black" />
        </a>
      </div>
    </div>
    <div class="aspect-square max-w-[270px] overflow-hidden rounded-full">
      <img
        :src="me"
        alt="Me"
      />
    </div>
  </div>

  <Card>
    <Heading>Who am I?</Heading>

    <p class="prose">
      Thank you for taking the time to visit my personal website, my name is
      <strong>Jamie Peters</strong> and I am a passionate, committed and
      enthusiastic web developer with over 20 years experience in web design and
      development. I specialise in modern Laravel application development,
      working extensively with
      <a
        href="https://www.laravel.com"
        target="_blank"
        >Laravel</a
      >,
      <a
        href="https://inertiajs.com/"
        target="_blank"
        >Inertia.js</a
      >,
      <a
        href="https://vuejs.org/"
        target="_blank"
        >Vue.js</a
      >, and
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        >Tailwind CSS</a
      >
      to create fast, clean and scalable web platforms.
    </p>

    <p class="prose">
      I am originally from South Yorkshire, but now live in South Cheshire.
    </p>
  </Card>

  <div class="grid grid-cols-1 md:grid-cols-3">
    <Card class="border-r border-primary/10 md:col-span-2">
      <Heading>My writings</Heading>

      <div class="flex flex-col space-y-5">
        <BlogSnippet
          v-for="blog in blogs"
          :key="blog.title"
          :blog="blog"
        />
      </div>

      <p class="prose my-5">
        <Link href="/blog">See more blogs...</Link>
      </p>
    </Card>

    <Card class="pl-3">
      <Heading>Work</Heading>

      <div class="flex flex-col space-y-5">
        <WorkSnippet
          v-for="work in employment"
          :key="work.startDate"
          :work="work"
        />
      </div>

      <p class="prose my-5">
        <Link href="/work-and-projects">Read more...</Link>
      </p>
    </Card>
  </div>
</template>
