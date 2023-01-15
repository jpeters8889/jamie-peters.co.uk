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
  <div class="flex-1">
    <h3 class="text-primary font-semibold text-lg m-0" v-text="title" />

    <slot />
  </div>
</template>
