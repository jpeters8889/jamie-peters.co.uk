<script setup lang="ts">
import { Blog } from '@/types/Blogs';
import Section from '@/Components/Section.vue';
import { Link } from '@inertiajs/vue3';
import { ArrowLeftIcon } from '@heroicons/vue/24/solid';
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
  <Section
    tone="transparent"
    spacing="sm"
    width="narrow"
  >
    <Link
      href="/blog"
      prefetch
      class="group inline-flex items-center gap-1.5 font-mono text-xs font-medium tracking-tight text-muted transition-colors hover:text-primary"
    >
      <ArrowLeftIcon
        class="size-3.5 transition-transform duration-200 group-hover:-translate-x-0.5"
      />
      All articles
    </Link>

    <header class="mt-8 border-b border-primary/10 pb-8">
      <p
        v-if="blog.date"
        class="font-mono text-xs tracking-[0.2em] text-primary-500 uppercase"
      >
        {{ blog.date }}
      </p>

      <h1
        class="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
        v-text="blog.title"
      />
    </header>

    <article
      class="prose mt-10"
      v-html="blog.body"
    />
  </Section>
</template>

