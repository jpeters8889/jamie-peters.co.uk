<script setup lang="ts">
import { Blog } from '@/types/Blogs';
import Card from '@/Components/Card.vue';
import { Link } from '@inertiajs/vue3';
import Heading from '@/Components/Heading.vue';

defineProps<{ blog: Blog }>();
</script>

<template>
  <Card>
    <Heading>{{ blog.title }}</Heading>

    <p
      v-for="(text, index) in blog.body"
      :key="index"
      class="prose"
      v-html="text"
    />
  </Card>
</template>
