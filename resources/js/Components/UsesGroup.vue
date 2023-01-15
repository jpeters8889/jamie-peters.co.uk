<script setup lang="ts">
import {defineProps} from "vue";

defineProps({
  title: {
    required: true,
    type: String,
  }
});
</script>

<template>
  <div>
    <h2 class="m-0 mb-3 text-primary font-semibold text-xl" v-text="title" />
    <div class="flex">
      <div class="mx-4 bg-primary w-0.5"/>

      <div class="flex-col">
        <slot />
      </div>
    </div>
  </div>
</template>
