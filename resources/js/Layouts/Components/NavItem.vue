<script setup lang="ts">
import { MenuItemProps } from '@/types/Core';
import { Link } from '@inertiajs/vue3';

withDefaults(defineProps<MenuItemProps>(), { active: false });
</script>

<template>
  <li>
    <Link
      :href="href"
      prefetch
      class="relative inline-flex items-center rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ease-out-soft"
      :class="active ? 'text-primary' : 'text-muted hover:text-ink'"
    >
      <span
        class="absolute inset-0 rounded-full bg-primary/10 transition-all duration-300 ease-out-soft"
        :class="active ? 'scale-100 opacity-100' : 'scale-90 opacity-0'"
      />

      <span class="relative">
        <slot />
      </span>
    </Link>
  </li>
</template>
