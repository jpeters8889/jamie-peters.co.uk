<script setup lang="ts">
import { WorkSnippet } from '@/types/Work';

defineProps<{ work: WorkSnippet }>();
</script>

<template>
  <div class="flex w-full space-x-5 rounded-xl border border-primary/10 p-2">
    <div class="w-12">
      <div
        class="flex size-12 flex-shrink-0 items-center justify-center rounded-full border border-primary/10 p-2"
      >
        <img
          :src="work.logo"
          :alt="`${work.company} logo`"
        />
      </div>
    </div>
    <div>
      <h3
        class="text-lg font-semibold text-primary"
        v-text="work.company"
      />
      <p v-text="work.role" />
      <small>{{ work.startDate }} - {{ work.endDate }}</small>
    </div>
  </div>
</template>
