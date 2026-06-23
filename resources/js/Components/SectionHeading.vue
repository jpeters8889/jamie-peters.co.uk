<script setup lang="ts">
withDefaults(
  defineProps<{
    /** Small mono kicker above the title. */
    eyebrow?: string;
    /** Optional supporting copy below the title. */
    description?: string;
    /** Heading level for correct document outline. */
    as?: 'h1' | 'h2';
    align?: 'left' | 'center';
  }>(),
  { as: 'h2', align: 'left' },
);
</script>

<template>
  <div
    class="flex flex-col gap-3"
    :class="{ 'items-center text-center': align === 'center' }"
  >
    <span
      v-if="eyebrow"
      class="font-mono text-xs font-medium tracking-[0.2em] text-primary-500 uppercase"
      v-text="eyebrow"
    />

    <component
      :is="as"
      class="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
    >
      <slot />
    </component>

    <p
      v-if="description"
      class="max-w-2xl text-base text-muted sm:text-lg"
      :class="{ 'mx-auto': align === 'center' }"
      v-text="description"
    />
  </div>
</template>
