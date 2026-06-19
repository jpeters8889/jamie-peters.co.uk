<script setup lang="ts">
import Sidebar from '@/Components/Overlays/Sidebar.vue';
import MobileNavItem from '@/Layouts/Components/MobileNavItem.vue';
import SocialLinks from '@/Components/SocialLinks.vue';
import Button from '@/Components/Button.vue';
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
    <div class="flex h-full flex-col bg-surface">
      <div class="border-b border-primary/10 px-8 py-6">
        <span
          class="flex items-center gap-2.5 text-lg font-extrabold tracking-tight text-ink"
        >
          <span
            class="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-extrabold text-white"
            >
            JP
          </span>

          Jamie Peters
        </span>
      </div>

      <nav class="flex-1 px-6 py-6">
        <ul class="flex flex-col gap-1">
          <MobileNavItem
            v-for="item in menuItems()"
            :key="item.label"
            :href="item.href"
            :active="
              $page.url === item.href || $page.url.startsWith(`${item.href}/`)
            "
            @click="$emit('close')"
          >
            {{ item.label }}
          </MobileNavItem>
        </ul>
      </nav>

      <div class="flex flex-col gap-5 border-t border-primary/10 px-8 py-6">
        <Button
          href="mailto:jamie@jamie-peters.co.uk"
          external
        >
          Get in touch
        </Button>

        <SocialLinks size="sm" />
      </div>
    </div>
  </Sidebar>
</template>
