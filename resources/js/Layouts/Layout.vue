<script setup lang="ts">
import MainHeader from '@/Components/MainHeader.vue';
import MainFooter from '@/Components/MainFooter.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <MainHeader />

    <div class="w-full mx-auto max-w-wrapper flex-1">
      <slot/>
    </div>

    <MainFooter />
  </div>
</template>
