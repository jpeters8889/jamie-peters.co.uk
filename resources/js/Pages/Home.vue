<script setup lang="ts">
import Layout from '@/Layouts/Layout.vue';
import Card from '@/Components/Card.vue';
</script>

<template>
  <Layout>
    <Card>
      <template #title>Welcome</template>

      <img src="/images/me.jpg" alt="Jamie Peters - Laravel / PHP Developer"
           class="xs:hidden max-w-[15rem] m-0 mx-auto my-2"/>
      <p>
        Thank you for taking the time to visit my personal website, my name is Jamie Peters and I am a passionate,
        committed and enthusiastic web developer with over 18 years experience in web design and development and I am an
        enthusiast of the <a href="https://www.laravel.com" target="_blank">Laravel PHP Framework</a>, along with
        <a href="https://inertiajs.com/" target="_blank">Inertia</a>,
        <a href="https://vuejs.org/" target="_blank">VueJS</a>, and
        <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>.
      </p>

      <p>I am originally from South Yorkshire, but now live in South Cheshire.</p>
    </Card>

    <Card>
      <template #title>My Key Skills</template>

      <ul>
        <li>
          Extensive knowledge of Laravel and PHP, including
          <ul>
            <li>Test Driven Development using PHP Unit</li>
            <li>Domain Driven Development/Modular Development</li>
            <li>Strict Coding Standards with PHP CS Fixer and PHPStan/Larastan</li>
            <li>Experience with Vue, Inertia and Tailwind CSS</li>
          </ul>
        </li>

        <li>Experience using Laravel Valet, Laravel Forge, Laravel Envoyer, Digital Ocean, Amazon S3 and Amazon SES</li>
      </ul>
    </Card>
  </Layout>
</template>
