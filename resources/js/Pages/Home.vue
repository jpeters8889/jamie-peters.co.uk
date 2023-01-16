<script setup lang="ts">
import Layout from '@/Layouts/Layout.vue';
import Card from '@/Components/Card.vue';
import dayjs from 'dayjs';
import advancedFormat from "dayjs/plugin/advancedFormat";
import {Article} from "../models/article";
import {defineProps} from "vue";
import {Link} from '@inertiajs/vue3'

dayjs.extend(advancedFormat)

const date = (date: string): string => {
  return dayjs(date).format('Do MMMM YYYY');
}

const props = defineProps({
  'articles': {
    required: true,
    type: Array as () => Article[],
  },
});
</script>

<template>
  <Layout>
    <div class="flex flex-col space-y-4 xl:flex-row xl:space-y-0">
      <div class="flex-1">
        <Card>
          <template #title>Welcome</template>

          <img src="/images/me.jpg" alt="Jamie Peters - Laravel / PHP Developer"
               class="xs:hidden max-w-[15rem] m-0 mx-auto my-2"/>
          <p>
            Thank you for taking the time to visit my personal website, my name is Jamie Peters and I am a passionate,
            committed and enthusiastic web developer with over 18 years experience in web design and development and I
            am an
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

            <li>Experience using Laravel Valet, Laravel Forge, Laravel Envoyer, Digital Ocean, Amazon S3 and Amazon
              SES
            </li>
          </ul>
        </Card>
      </div>

      <div class="xl:w-1/3 xl:max-w-24">
        <Card>
          <template #title>Latest Articles</template>

          <ul class="list-none m-0 p-0">
            <li v-for="article in articles" :key="article.slug" class="p-0 py-2 border-b border-primary/30 last:border-b-0">
              <Link :href="`/articles/${article.slug}`">{{ article.title }}</Link>
              <p class="text-xs mt-0 mb-2" v-text="date(article.created_at)"/>
              <p class="text-sm m-0" v-text="article.description" />
              <Link :href="`/articles/${article.slug}`" class="text-sm">Read more...</Link>
            </li>
          </ul>

          <Link href="/articles">View all Articles...</Link>
        </Card>
      </div>
    </div>
  </Layout>
</template>
