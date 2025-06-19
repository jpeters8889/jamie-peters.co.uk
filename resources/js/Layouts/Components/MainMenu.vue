<script setup lang="ts">
import NavItem from '@/Layouts/Components/NavItem.vue';
import { Bars3Icon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';
import MobileNav from '@/Layouts/Components/MobileNav.vue';
import { menuItems } from '@/helpers';

const sidebarOpen = ref(false);
</script>

<template>
  <nav class="mt-4 flex w-full justify-end">
    <div
      class="mr-4 cursor-pointer rounded-2xl border border-primary/10 p-2 transition-all hover:border-primary hover:text-primary hover:shadow xs:hidden"
      @click="sidebarOpen = true"
    >
      <Bars3Icon class="size-8 transition-all" />
    </div>

    <ul class="hidden w-full justify-end border-b border-primary/10 xs:flex">
      <NavItem
        v-for="item in menuItems()"
        :key="item.label"
        :href="item.href"
        :active="$page.url === item.href || $page.url.startsWith(`${item.href}/`)"
      >
        {{ item.label }}
      </NavItem>
    </ul>
  </nav>

  <MobileNav
    :open="sidebarOpen"
    @close="sidebarOpen = false"
  />
</template>
