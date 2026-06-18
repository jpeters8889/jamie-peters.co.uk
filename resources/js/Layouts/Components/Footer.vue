<script setup lang="ts">
import Container from '@/Components/Container.vue';
import SocialLinks from '@/Components/SocialLinks.vue';
import { Link } from '@inertiajs/vue3';
import { menuItems } from '@/helpers';
</script>

<template>
  <footer class="mt-auto border-t border-primary/10 bg-white">
    <Container size="wide">
      <div
        class="flex flex-col gap-10 py-12 md:flex-row md:items-start md:justify-between"
      >
        <div class="max-w-sm">
          <Link
            href="/"
            class="flex items-center gap-2.5 text-lg font-extrabold tracking-tight text-ink"
          >
            <span
              class="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-extrabold text-white"
              >JP</span
            >
            Jamie Peters
          </Link>
          <p class="mt-3 text-sm text-muted">
            Full-stack developer specialising in the VILT stack — Laravel, Vue,
            Inertia &amp; Tailwind.
          </p>
          <div class="mt-5">
            <SocialLinks size="sm" />
          </div>
        </div>

        <nav class="grid grid-cols-2 gap-x-12 gap-y-2">
          <Link
            v-for="item in menuItems()"
            :key="item.label"
            :href="item.href"
            prefetch
            class="text-sm font-semibold text-muted transition-colors hover:text-primary"
          >
            {{ item.label }}
          </Link>
        </nav>
      </div>

      <div
        class="flex flex-col gap-2 border-t border-primary/10 py-6 text-center text-xs text-muted sm:flex-row sm:justify-between sm:text-left"
      >
        <p>
          Built with <strong class="font-semibold text-ink">Laravel</strong>,
          <strong class="font-semibold text-ink">Vue</strong> &amp;
          <strong class="font-semibold text-ink">Inertia</strong>, styled with
          <strong class="font-semibold text-ink">Tailwind CSS</strong>.
        </p>
        <p>
          Proudly hosted on
          <strong class="font-semibold text-ink">Laravel Cloud</strong>.
        </p>
      </div>
    </Container>
  </footer>
</template>
