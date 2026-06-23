<script setup lang="ts">
import { useReveal } from '@/Composables/useReveal';

withDefaults(
  defineProps<{
    /** Stagger entrance by this many milliseconds. */
    delay?: number;
    /** Element/tag to render as the wrapper. */
    as?: string;
  }>(),
  { delay: 0, as: 'div' },
);

const { el, isVisible } = useReveal();
</script>

<template>
  <component
    :is="as"
    ref="el"
    class="reveal"
    :class="{ 'is-visible': isVisible }"
    :style="delay ? { transitionDelay: `${delay}ms` } : undefined"
  >
    <slot />
  </component>
</template>
