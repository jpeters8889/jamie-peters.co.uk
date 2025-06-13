<script setup lang="ts">
import { BlogSnippet } from '@/types/Blogs';
import { Link } from '@inertiajs/vue3';

defineProps<{ blog: BlogSnippet }>();
</script>

<template>
  <div
    class="group relative -mx-4 border-b border-primary/10 from-primary/10 to-transparent to-10% px-4 transition hover:border-primary hover:bg-gradient-to-t"
  >
    <component
      :is="blog.external ? 'a' : Link"
      class="absolute h-full w-full"
      :href="blog.link"
      :target="blog.external ? '_blank' : '_self'"
    />

    <h3
      class="text-lg font-semibold text-primary transition group-hover:text-black"
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
      class="prose my-5"
      v-text="blog.description"
    />
  </div>
</template>
