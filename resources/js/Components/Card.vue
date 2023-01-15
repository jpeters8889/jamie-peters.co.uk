<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps({
  diminished: {
    type: Boolean,
    default: false,
  }
});

const classes = (): string[] => {
  const base: string[] = ['font-semibold', 'text-primary', 'text-xl', 'text-center', 'xs:text-left', 'm-0'];

  if(!props.diminished) {
    base.push('font-serif', 'text-2xl', 'pb-2', 'mb-2', 'border-b', 'border-primary/30', 'text-shadow');
  }

  return base;
};
</script>

<template>
  <div class="bg-white p-4 mx-2 my-4 shadow overflow-auto prose max-w-none">
    <h1
        v-if="$slots.title"
        :class="classes()"
    >
      <slot name="title" />
    </h1>

    <div class="space-y-3">
      <slot />
    </div>
  </div>
</template>
