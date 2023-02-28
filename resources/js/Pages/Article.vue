<script setup lang="ts">
import Layout from '@/Layouts/Layout.vue';
import Card from '@/Components/Card.vue';
import { Head, Link } from '@inertiajs/vue3'
import {Article} from "../models/article";
import dayjs from 'dayjs';
import advancedFormat from "dayjs/plugin/advancedFormat";

defineProps({
  'article': {
    required: true,
    type: Object as () => Article,
  },
});
dayjs.extend(advancedFormat)

const date = (date: string): string => {
  return dayjs(date).format('Do MMMM YYYY');
}
</script>

<template>
  <Head>
    <title>{{ article.title}} - Articles</title>

    <meta property="og:type" content="article" />
    <meta property="og:locale" content="en_GB"/>
    <meta property="og:site_name" content="Jamie Peters - Laravel Developer"/>
    <meta property="og:description" :content="article.description"/>
    <meta property="og:title" :content="`${article.title} - Articles`"/>
    <meta property="og:image" :content="article.ogImage"/>
    <meta property="og:image:type" content="image/jpeg"/>
    <meta property="og:url" :content="`https://jamie-peters.co.uk/articles/${article.slug}`"/>

    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:description" :content="article.description"/>
    <meta name="twitter:title" :content="`${article.title} - Articles`"/>
    <meta name="twitter:site" content="@jpeters8889"/>
    <meta name="twitter:domain" content="Jamie Peters - Laravel Developer"/>
    <meta name="twitter:image:src" :content="article.ogImage"/>
    <meta name="twitter:creator" content="@jpeters8889"/>

  </Head>

  <Layout>
    <Card>
      <template #title>{{ article.title }}</template>

      <div>
        <p class="text-sm font-semibold text-primary mt-0" v-text="date(article.created_at)" />
      </div>

      <div>
        <p v-html="article.body "/>
      </div>

      <div>
        <Link href="/articles" class="text-sm">Back to all Articles</Link>
      </div>
    </Card>
  </Layout>
</template>
