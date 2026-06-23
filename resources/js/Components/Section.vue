<script setup lang="ts">
import Container from '@/Components/Container.vue';

withDefaults(
  defineProps<{
    /** Background treatment for the full-bleed section. */
    tone?: 'transparent' | 'white' | 'tint' | 'gradient';
    /** Vertical padding scale. */
    spacing?: 'sm' | 'md' | 'lg';
    /** Inner container width. */
    width?: 'narrow' | 'default' | 'wide';
  }>(),
  { tone: 'transparent', spacing: 'md', width: 'default' },
);
</script>

<template>
  <section
    class="w-full"
    :class="{
      'bg-white': tone === 'white',
      'bg-surface-soft': tone === 'tint',
      'bg-gradient-to-b from-primary-50 to-surface': tone === 'gradient',
      'py-12 sm:py-16': spacing === 'sm',
      'py-16 sm:py-24': spacing === 'md',
      'py-24 sm:py-32': spacing === 'lg',
    }"
  >
    <Container :size="width">
      <slot />
    </Container>
  </section>
</template>
