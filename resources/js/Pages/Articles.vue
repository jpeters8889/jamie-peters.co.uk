<script setup lang="ts">
import Layout from '@/Layouts/Layout.vue';
import Card from '@/Components/Card.vue';
import {Head, Link} from '@inertiajs/vue3'
import {Article} from "../models/article";
import {PaginatedCollection} from "../models/paginatedCollection";
import {computed, ComputedRef} from "vue";
import dayjs from 'dayjs';
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat)

const props = defineProps({
  'articles': {
    required: true,
    type: Object as () => PaginatedCollection<Article>,
  },
});

const date = (date: string): string => {
  return dayjs(date).format('Do MMMM YYYY');
}

const previousPage: ComputedRef<number | null> = computed(() => props.articles.current_page > 1 ? props.articles.current_page - 1 : null);
const nextPage: ComputedRef<number | null> = computed(() => props.articles.current_page < props.articles.last_page ? props.articles.current_page + 1 : null);
</script>

<template>
  <Head title="Articles"/>

  <Layout>
    <Link v-for="article in articles.data" :key="article.slug" :href="`/articles/${article.slug}`">
      <Card diminished>
        <template #title>{{ article.title }}</template>
        <p class="text-xs text-primary mt-0" v-text="date(article.created_at)" />
        <p v-text="article.description" class="m-0"/>
        <Link :href="`/articles/${article.slug}`" class="text-primary font-semibold hover:text-black hover:underline">Read more...</Link>
      </Card>
    </Link>

    <ul class="flex justify-center items-center space-x-5">
      <li v-if="previousPage">
        <Link :href="`/articles?page=${previousPage}`" :only="['articles']">Previous</Link>
      </li>
      <li>
        Page <strong>{{ articles.current_page }}</strong> of <strong>{{ articles.last_page }}</strong>
      </li>
      <li v-if="nextPage">
        <Link :href="`/articles?page=${nextPage}`" :only="['articles']">Next</Link>
      </li>
    </ul>
  </Layout>
</template>
