<script setup lang="ts">
import Sidebar from '@/Components/Overlays/Sidebar.vue';
import MobileNavItem from '@/Layouts/Components/MobileNavItem.vue';
import { menuItems } from '@/helpers';

defineProps<{ open: boolean }>();

defineEmits(['close']);
</script>

<template>
  <Sidebar
    :open="open"
    side="right"
    @close="$emit('close')"
  >
    <div class="h-full bg-white">
      <ul class="flex flex-col p-8">
        <MobileNavItem
          v-for="item in menuItems()"
          :key="item.label"
          :href="item.href"
          :active="$page.url === item.href"
        >
          {{ item.label }}
        </MobileNavItem>
      </ul>
    </div>
  </Sidebar>
</template>

<style scoped></style>
