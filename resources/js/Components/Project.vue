<script setup lang="ts">
import { ArrowUpRightIcon } from '@heroicons/vue/24/solid';

defineProps<{
  title: string;
  links: { label: string; url: string }[];
}>();
</script>

<template>
  <article
    class="rounded-2xl border border-primary/10 bg-white p-6 shadow-soft transition-all duration-300 ease-out-soft hover:border-primary/20 hover:shadow-lift sm:p-8"
  >
    <div
      class="mb-6 flex flex-col gap-4 border-b border-primary/10 pb-6 md:flex-row md:items-start md:justify-between"
    >
      <h3
        class="text-xl font-extrabold tracking-tight text-ink sm:text-2xl"
        v-text="title"
      />

      <div class="flex flex-col gap-2">
        <a
          v-for="link in links"
          :key="link.url"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group inline-flex items-center gap-1.5 font-mono text-xs font-medium text-primary transition-colors hover:text-primary-800 md:justify-end"
        >
          <span class="truncate">{{ link.label }}</span>
          <ArrowUpRightIcon
            class="size-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </div>

    <div class="prose">
      <slot />
    </div>
  </article>
</template>
