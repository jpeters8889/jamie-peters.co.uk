<script setup lang="ts">
import { defineProps } from 'vue';
import { UsesProps } from '@/types/Uses';

defineProps<UsesProps>();
</script>

<template>
  <div>
    <h2
      class="m-0 mb-3 text-xl font-semibold text-primary"
      v-text="title"
    />
    <div class="flex">
      <div class="mx-4 w-0.5 bg-primary/10 lg:mr-6" />

      <div class="flex-col space-y-4">
        <slot />
      </div>
    </div>
  </div>
</template>
