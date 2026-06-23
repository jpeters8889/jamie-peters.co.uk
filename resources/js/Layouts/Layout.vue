<script setup lang="ts">
import { MetaProps } from '@/types/DefaultProps';
import Header from '@/Layouts/Components/Header.vue';
import Footer from '@/Layouts/Components/Footer.vue';

defineProps<{ meta: MetaProps }>();
</script>

<template>
  <div class="flex min-h-screen flex-col bg-surface">
    <Header :metas="meta" />

    <main class="flex-1">
      <slot />
    </main>

    <Footer />
  </div>
</template>
