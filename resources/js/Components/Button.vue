<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    href?: string;
    /** Render as an external anchor (new tab) rather than an Inertia link. */
    external?: boolean;
    variant?: 'primary' | 'ghost' | 'soft';
    size?: 'sm' | 'md';
  }>(),
  { variant: 'primary', size: 'md', external: false },
);

const component = computed(() => {
  if (!props.href) {
    return 'button';
  }

  return props.external ? 'a' : Link;
});
</script>

<template>
  <component
    :is="component"
    :href="href"
    :prefetch="href && !external ? true : undefined"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    class="group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-out-soft focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none"
    :class="{
      'px-5 py-2.5 text-sm': size === 'md',
      'px-4 py-2 text-xs': size === 'sm',
      'bg-primary text-white shadow-soft hover:-translate-y-0.5 hover:bg-primary-800 hover:shadow-lift':
        variant === 'primary',
      'border border-primary/15 bg-white text-primary hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-soft':
        variant === 'ghost',
      'bg-primary/10 text-primary hover:bg-primary/15': variant === 'soft',
    }"
  >
    <slot />
  </component>
</template>
