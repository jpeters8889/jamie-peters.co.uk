<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { MenuItemProps } from '@/types/Core';
withDefaults(defineProps<MenuItemProps>(), {
  active: false,
});
</script>

<template>
  <li
    class="border-b border-primary/10 py-4 text-center text-xl font-semibold last:border-0"
    :class="{
      'text-primary': active,
    }"
  >
    <Link :href="href">
      <slot />
    </Link>
  </li>
</template>
