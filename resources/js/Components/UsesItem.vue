<script setup lang="ts">
import { defineProps } from 'vue';
import { UsesProps } from '@/types/Uses';

defineProps<UsesProps>();
</script>

<template>
  <div class="flex-1">
    <h3
      class="m-0 text-lg font-semibold text-primary"
      v-text="title"
    />

    <slot />
  </div>
</template>
