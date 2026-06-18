<script setup lang="ts">
import { BlogSnippet as BlogSnippetType } from '@/types/Blogs';
import Section from '@/Components/Section.vue';
import SectionHeading from '@/Components/SectionHeading.vue';
import Reveal from '@/Components/Reveal.vue';
import BlogSnippet from '@/Components/BlogSnippet.vue';

defineProps<{ blogs: BlogSnippetType[] }>();
</script>

<template>
  <Section
    tone="gradient"
    spacing="sm"
    width="wide"
  >
    <Reveal>
      <SectionHeading
        eyebrow="Blog"
        description="Thoughts, tutorials and notes on Laravel, the VILT stack and life as a developer."
        as="h1"
      >
        Writing &amp; articles
      </SectionHeading>
    </Reveal>
  </Section>

  <Section
    tone="transparent"
    spacing="md"
    width="wide"
  >
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Reveal
        v-for="(blog, index) in blogs"
        :key="blog.title"
        :delay="(index % 3) * 80"
      >
        <BlogSnippet :blog="blog" />
      </Reveal>
    </div>
  </Section>
</template>
