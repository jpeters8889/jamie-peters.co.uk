<script setup lang="ts">
import { BlogSnippet } from '@/types/Blogs';
import { Link } from '@inertiajs/vue3';
import Badge from '@/Components/Badge.vue';
import { ArrowUpRightIcon } from '@heroicons/vue/24/solid';

defineProps<{ blog: BlogSnippet }>();
</script>

<template>
  <article
    class="group relative flex h-full flex-col rounded-2xl border border-primary/10 bg-white p-6 shadow-soft transition-all duration-300 ease-out-soft hover:-translate-y-1 hover:border-primary/20 hover:shadow-lift"
  >
    <component
      :is="blog.external ? 'a' : Link"
      class="absolute inset-0 rounded-2xl"
      :href="blog.link"
      :prefetch="blog.external ? undefined : true"
      :target="blog.external ? '_blank' : undefined"
      :rel="blog.external ? 'noopener noreferrer' : undefined"
      :aria-label="blog.title"
    />

    <div class="mb-4 flex items-center justify-between gap-3">
      <span class="font-mono text-xs tracking-tight text-muted">
        {{ blog.date }}
      </span>
      <Badge
        v-if="blog.external"
        variant="soft"
        class="relative"
      >
        External
      </Badge>
    </div>

    <h3
      class="text-lg font-bold text-ink transition-colors duration-200 group-hover:text-primary sm:text-xl"
      v-text="blog.title"
    />

    <p
      class="mt-3 line-clamp-3 text-sm leading-relaxed text-muted"
      v-text="blog.description"
    />

    <span
      class="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-primary"
    >
      Read
      <ArrowUpRightIcon
        class="size-4 transition-transform duration-200 ease-out-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </span>
  </article>
</template>
