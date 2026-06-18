<script setup lang="ts">
import { UsesProps } from '@/types/Uses';

defineProps<UsesProps>();
</script>

<template>
  <div
    class="flex h-full flex-col rounded-2xl border border-primary/10 bg-white p-6 shadow-soft transition-all duration-300 ease-out-soft hover:border-primary/20 hover:shadow-lift"
  >
    <h3
      class="mb-2.5 font-mono text-base font-semibold tracking-tight text-primary"
      v-text="title"
    />

    <div class="prose text-sm">
      <slot />
    </div>
  </div>
</template>
