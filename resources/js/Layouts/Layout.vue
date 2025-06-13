<script setup lang="ts">
import { MetaProps } from '@/types/DefaultProps';
import Header from '@/Layouts/Components/Header.vue';
import Footer from '@/Layouts/Components/Footer.vue';

defineProps<{ meta: MetaProps }>();
</script>

<template>
  <div
    class="relative mx-auto flex min-h-screen max-w-5xl flex-col bg-white shadow-md"
  >
    <Header :metas="meta" />

    <div class="mt-10 flex flex-1 flex-col space-y-10">
      <slot />
    </div>

    <Footer />
  </div>
</template>
