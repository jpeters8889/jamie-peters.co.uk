<script setup lang="ts">
withDefaults(
  defineProps<{
    /** Enable a hover lift - use for interactive/linked cards. */
    hover?: boolean;
    padding?: 'none' | 'sm' | 'md' | 'lg';
  }>(),
  { hover: false, padding: 'md' },
);
</script>

<template>
  <div
    class="rounded-2xl border border-primary/10 bg-white shadow-soft transition-all duration-300 ease-out-soft"
    :class="{
      'p-5 sm:p-6': padding === 'sm',
      'p-6 sm:p-8': padding === 'md',
      'p-8 sm:p-12': padding === 'lg',
      'hover:-translate-y-1 hover:border-primary/20 hover:shadow-lift': hover,
    }"
  >
    <slot />
  </div>
</template>
