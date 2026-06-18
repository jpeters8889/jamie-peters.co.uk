<script setup lang="ts">
import NavItem from '@/Layouts/Components/NavItem.vue';
import { Bars3Icon } from '@heroicons/vue/24/outline';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { Link } from '@inertiajs/vue3';
import MobileNav from '@/Layouts/Components/MobileNav.vue';
import Button from '@/Components/Button.vue';
import Container from '@/Components/Container.vue';
import { menuItems } from '@/helpers';

const sidebarOpen = ref(false);
const scrolled = ref(false);

const onScroll = () => {
  scrolled.value = window.scrollY > 12;
};

onMounted(() => {
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>

<template>
  <header
    class="sticky top-0 z-40 w-full transition-all duration-300 ease-out-soft"
    :class="
      scrolled
        ? 'border-b border-primary/10 bg-surface/80 backdrop-blur-md'
        : 'border-b border-transparent'
    "
  >
    <Container size="wide">
      <nav class="flex h-16 items-center justify-between gap-4 sm:h-20">
        <Link
          href="/"
          aria-label="Jamie Peters — home"
          class="group flex items-center"
        >
          <span
            class="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-extrabold text-white transition-colors group-hover:bg-primary-800"
            >JP</span
          >
        </Link>

        <ul class="hidden items-center gap-1 xs:flex">
          <NavItem
            v-for="item in menuItems()"
            :key="item.label"
            :href="item.href"
            :active="
              $page.url === item.href || $page.url.startsWith(`${item.href}/`)
            "
          >
            {{ item.label }}
          </NavItem>
        </ul>

        <div class="flex items-center gap-2">
          <Button
            href="mailto:jamie@jamie-peters.co.uk"
            external
            size="sm"
            class="hidden xs:inline-flex"
          >
            Get in touch
          </Button>

          <button
            type="button"
            aria-label="Open menu"
            class="flex items-center justify-center rounded-xl border border-primary/10 bg-white p-2 text-primary transition-all hover:border-primary/30 hover:shadow-soft xs:hidden"
            @click="sidebarOpen = true"
          >
            <Bars3Icon class="size-6" />
          </button>
        </div>
      </nav>
    </Container>
  </header>

  <MobileNav
    :open="sidebarOpen"
    @close="sidebarOpen = false"
  />
</template>
