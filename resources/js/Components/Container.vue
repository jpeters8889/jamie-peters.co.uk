<script setup lang="ts">
withDefaults(
  defineProps<{
    /** Max content width. */
    size?: 'narrow' | 'default' | 'wide';
  }>(),
  { size: 'default' },
);
</script>

<template>
  <div
    class="mx-auto w-full px-5 sm:px-8"
    :class="{
      'max-w-3xl': size === 'narrow',
      'max-w-5xl': size === 'default',
      'max-w-6xl': size === 'wide',
    }"
  >
    <slot />
  </div>
</template>
