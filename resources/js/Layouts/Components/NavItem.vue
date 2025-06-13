<script setup lang="ts">
import { MenuItemProps } from '@/types/Core';
import { Link } from '@inertiajs/vue3';

withDefaults(defineProps<MenuItemProps>(), { active: false });
</script>

<template>
  <li
    class="border-b-4 font-semibold transition-all"
    :class="{
      'border-primary': active,
      'border-transparent hover:border-primary/10': !active,
    }"
  >
    <Link
      class="inline-block px-4 py-2"
      :href="href"
    >
      <slot />
    </Link>
  </li>
</template>
