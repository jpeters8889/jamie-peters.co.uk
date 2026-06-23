<script setup lang="ts">
import { UsesProps } from '@/types/Uses';

defineProps<UsesProps>();
</script>

<template>
  <div>
    <div class="mb-6 flex items-center gap-4">
      <h2
        class="text-2xl font-extrabold tracking-tight text-ink"
        v-text="title"
      />
      <span class="h-px flex-1 bg-primary/10" />
    </div>

    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
      <slot />
    </div>
  </div>
</template>
