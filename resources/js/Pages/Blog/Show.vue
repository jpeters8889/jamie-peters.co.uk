<script setup lang="ts">
import { Blog } from '@/types/Blogs';
import Card from '@/Components/Card.vue';
import Heading from '@/Components/Heading.vue';
import { onMounted } from 'vue';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-php';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

defineProps<{ blog: Blog }>();

onMounted(() => {
  Prism.highlightAll();
});
</script>

<template>
  <Card>
    <Heading>{{ blog.title }}</Heading>

    <div
      class="prose"
      v-html="blog.body"
    />
  </Card>
</template>

<style>
.line-numbers .line-numbers-rows {
  left: -6em;
}
</style>
