<script setup lang="ts">
import { BlogSnippet } from '@/types/Blogs';
import Card from '@/Components/Card.vue';
import { Link } from '@inertiajs/vue3';

defineProps<{ blogs: BlogSnippet[] }>();
</script>

<template>
  <Card
    v-for="blog in blogs"
    :key="blog.title"
    class="group relative border-b border-primary/10 from-primary/10 to-transparent to-10% hover:bg-gradient-to-t"
  >
    <component
      :is="blog.external ? 'a' : Link"
      class="absolute h-full w-full"
      :href="blog.link"
      :target="blog.external ? '_blank' : '_self'"
    />

    <h2
      class="text-xl font-semibold text-primary transition group-hover:text-black xs:text-2xl lg:text-3xl"
      v-text="blog.title"
    />

    <div class="flex justify-between">
      <small
        class="text-xs"
        v-text="blog.date"
      />
      <div
        v-if="blog.external"
        class="rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary transition group-hover:bg-primary group-hover:text-white"
      >
        External
      </div>
    </div>

    <p
      class="prose mt-5 mb-10"
      v-text="blog.description"
    />
  </Card>
</template>
