<script setup lang="ts">
import {defineProps, ref} from "vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: false,
    default: () => false,
  }
});

const isOpen = ref(false);
</script>

<template>
  <div class="flex flex-col bg-primary/10 p-2 mb-4 shadow">
    <div class="mb-3 text-primary font-semibold border-b border-primary pb-2 text-center xs:text-left">
      <h2
          class="text-2xl text-primary m-0 font-semibold"
          v-text="title"
      />

      <h3 class="text-sm m-0">
        <a
            :href="url"
            target="_blank"
            class="text-black hover:text-primary break-words"
            v-text="url"
        />
      </h3>

      <h3
          v-if="github"
          class="text-sm m-0"
      >
        <a
            :href="github"
            target="_blank"
            class="text-black hover:text-primary break-words"
            v-text="github"
        />
      </h3>
    </div>

    <div class="bg-white rounded p-2 font-semibold" v-if="!isOpen">
      <slot name="intro" />
    </div>

    <div>
    <button @click="isOpen = true" v-if="!isOpen" class="bg-primary mt-3 bg-opacity-50 rounded px-2 py-1 hover:bg-opacity-70 text-white font-semibold transition">Read More...</button>
    </div>

    <div class="space-y-3" v-if="isOpen">
      <slot />

      <button @click="isOpen = false" v-if="isOpen" class="bg-primary mt-3 bg-opacity-50 rounded px-2 py-1 hover:bg-opacity-70 text-white font-semibold transition">Read Less</button>
    </div>
  </div>
</template>
