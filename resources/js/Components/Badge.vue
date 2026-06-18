<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'soft' | 'solid' | 'outline';
    /** Use the monospace face — good for dates and labels. */
    mono?: boolean;
  }>(),
  { variant: 'soft', mono: false },
);
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap"
    :class="{
      'bg-primary/10 text-primary': variant === 'soft',
      'bg-primary text-white': variant === 'solid',
      'border border-primary/20 text-primary': variant === 'outline',
      'font-mono tracking-tight': mono,
    }"
  >
    <slot />
  </span>
</template>
