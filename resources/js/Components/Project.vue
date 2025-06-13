<script setup lang="ts">
defineProps<{
  title: string;
  links: { label: string; url: string }[];
}>();
</script>

<template>
  <div class="w-full rounded-xl border border-primary/10 p-4 sm:p-8">
    <div
      class="flex flex-col border-primary/10 md:mb-4 md:flex-row md:items-end md:justify-between md:border-b md:pb-4"
    >
      <h2
        class="text-xl font-semibold text-primary sm:text-2xl"
        v-text="title"
      />

      <div
        class="my-4 inline-flex w-auto flex-col space-y-1 rounded-lg bg-primary/10 px-4 py-2 font-semibold text-primary *:hover:text-black md:my-0"
      >
        <a
          v-for="link in links"
          :key="link.url"
          :href="link.url"
          target="_blank"
          class="truncate"
          v-text="link.label"
        />
      </div>
    </div>

    <slot />
  </div>
</template>
