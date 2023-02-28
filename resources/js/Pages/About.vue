<script setup lang="ts">
import Layout from '@/Layouts/Layout.vue';
import Card from '@/Components/Card.vue';
import {Head, Link} from '@inertiajs/vue3'
</script>

<template>
  <Head>
    <title>About Me</title>

    <meta property="og:type" content="article" />
    <meta property="og:locale" content="en_GB"/>
    <meta property="og:site_name" content="Jamie Peters - Laravel Developer"/>
    <meta property="og:description" content="Read all about me"/>
    <meta property="og:title" content="Jamie Peters - About Me"/>
    <meta property="og:image" content="https://jamie-peters.s3.eu-west-2.amazonaws.com/og-image.jpg"/>
    <meta property="og:image:type" content="image/jpeg"/>
    <meta property="og:url" content="https://jamie-peters.co.uk/about"/>

    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:description" content="Read all about me"/>
    <meta name="twitter:title" content="Jamie Peters - About Me"/>
    <meta name="twitter:site" content="@jpeters8889"/>
    <meta name="twitter:domain" content="Jamie Peters - Laravel Developer"/>
    <meta name="twitter:image:src" content="https://jamie-peters.s3.eu-west-2.amazonaws.com/og-image.jpg"/>
    <meta name="twitter:creator" content="@jpeters8889"/>
  </Head>

  <Layout>
    <Card>
      <template #title>About Me</template>

      <p>
        Extensive knowledge of the Laravel PHP Framework and writing Laravel Applications in a test driven
        approach, I have been developing regularly in PHP for over 17 years, and Laravel for 4 years, coupled with
        HTML, MySQL, SCSS/CSS, Tailwind CSS, JavaScript/Typescript, and VueJS
      </p>

      <p>
        All of my personal projects are hosted on Digital Ocean with the aid of Laravel Forge, and some also
        utilise Laravel Envoyer for deployment, and Laravel Horizon for queue management.
      </p>

      <p>
        My preferred tech stack is Laravel, Inertia, Vue and Tailwind, and my IDE of choice is PhpStorm. You can read
        more about my tech stack and setup over on my <Link href="/uses">Uses</Link> page.
      </p>

      <p>
        I have a <a href="https://laracasts.com/@jpeters8889" target="_blank">Laracasts</a> forever subscription
        and regularly access the website and watch all new videos available.
      </p>

      <p>
        I have some small open source contributions to a few open source packages, including some by Spatie and
        Beyond Code.
      </p>
    </Card>
  </Layout>
</template>
