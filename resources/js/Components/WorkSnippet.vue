<script setup lang="ts">
import { WorkSnippet } from '@/types/Work';

defineProps<{ work: WorkSnippet }>();
</script>

<template>
  <div
    class="flex items-center gap-4 rounded-2xl border border-primary/10 bg-white p-4 transition-all duration-300 ease-out-soft hover:border-primary/20 hover:shadow-soft"
  >
    <div
      class="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/10 bg-surface p-2"
    >
      <img
        :src="work.logo"
        :alt="`${work.company} logo`"
        class="max-h-full max-w-full"
      />
    </div>
    <div class="min-w-0">
      <h3
        class="truncate font-bold text-ink"
        v-text="work.company"
      />
      <p
        class="truncate text-sm text-muted"
        v-text="work.role"
      />
      <p class="mt-0.5 font-mono text-xs tracking-tight text-primary-500">
        {{ work.startDate }} – {{ work.endDate }}
      </p>
    </div>
  </div>
</template>
