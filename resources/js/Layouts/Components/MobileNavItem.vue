<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { MenuItemProps } from '@/types/Core';

withDefaults(defineProps<MenuItemProps>(), {
  active: false,
});
</script>

<template>
  <li>
    <Link
      :href="href"
      class="block rounded-xl px-4 py-3 text-lg font-semibold transition-colors duration-200"
      :class="
        active
          ? 'bg-primary/10 text-primary'
          : 'text-ink hover:bg-primary/5 hover:text-primary'
      "
    >
      <slot />
    </Link>
  </li>
</template>
