<script setup lang="ts">
import Card from '@/Components/Card.vue';
import Heading from '@/Components/Heading.vue';

defineProps<{me: string}>();
</script>

<template>
  <Card>
    <Heading>All about me...</Heading>

    <p class="prose">
      <div class="float-right w-1/3 max-w-[270px] rounded-full aspect-square overflow-hidden ml-5 mb-5">
        <img :src="me" alt="Me" />
      </div>
      I have deep, hand on experience with <strong>Laravel and PHP</strong>,
      having worked with the framework daily for many years. I follow a
      <strong>test-driven development</strong> approach, writing thorough test
      suites with <strong>PHPUnit</strong> to ensure the reliability and
      maintainability of every feature I build.
    </p>
    <p class="prose">
      Code quality is a key focus of mine. I maintain strict coding standards
      and integrate tools like
      <strong>Laravel Pint, PHP CS Fixer, PHPStan</strong>, and
      <strong>Larastan</strong>
      into my workflows to enforce consistency and catch issues early.
    </p>
    <p class="prose">
      On the frontend, I work primarily with <strong>Vue.js</strong>, using
      <strong>Inertia.js</strong> to deliver modern, single-page application
      experiences while keeping the power and simplicity of Laravel behind the
      scenes. I build UIs with <strong>Tailwind CSS</strong>, which allows me to
      prototype rapidly while keeping designs consistent and polished.
    </p>
    <p class="prose">
      My deployment stack typically involves
      <strong>Laravel Forge</strong> and <strong>Laravel Envoyer</strong>,
      managing infrastructure hosted on <strong>DigitalOcean</strong>. I’ve also
      used <strong>Laravel Cloud</strong> as a managed hosting solution where
      appropriate. I'm comfortable working directly over
      <strong>SSH</strong> when needed and regularly integrate with a range of
      common <strong>AWS services</strong>. While I have experience with
      <strong>Docker</strong>, I prefer using <strong>Laravel Herd</strong> for
      fast, streamlined local development.
    </p>
    <p class="prose">
      I first started learning <strong>PHP in 2005</strong> and never looked
      back. Watching the language evolve over the past 20 years has been
      amazing. I discovered <strong>Laravel in 2018</strong>, and it completely
      changed how I write my web apps.
    </p>
    <p class="prose">
      Outside of development, I'm a keen amateur musician, I've been playing
      guitar since 2009 and love to play along to some of my favourite songs. In
      2025, I also started to learn to play keyboard, expanding my love of music
      even further.
    </p>
    <p class="prose">
      Most importantly, I also love spending time with my wife and our little
      girl who was born in 2024.
    </p>
  </Card>
</template>
