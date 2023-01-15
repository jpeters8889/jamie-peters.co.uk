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
  <Head :title="`${article.title} - Articles`" />

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
