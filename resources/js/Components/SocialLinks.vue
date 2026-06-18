<script setup lang="ts">
import GithubIcon from '@/Icons/GithubIcon.vue';
import XIcon from '@/Icons/XIcon.vue';
import LinkedInIcon from '@/Icons/LinkedInIcon.vue';
import { EnvelopeIcon } from '@heroicons/vue/24/solid';

withDefaults(defineProps<{ size?: 'sm' | 'md' }>(), { size: 'md' });

const links = [
  {
    label: 'Email',
    href: 'mailto:jamie@jamie-peters.co.uk',
    icon: EnvelopeIcon,
  },
  {
    label: 'GitHub',
    href: 'https://www.github.com/jpeters8889',
    icon: GithubIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jpeters8889',
    icon: LinkedInIcon,
  },
  {
    label: 'Twitter / X',
    href: 'https://www.twitter.com/jpeters8889',
    icon: XIcon,
  },
];
</script>

<template>
  <ul class="flex items-center gap-2">
    <li
      v-for="link in links"
      :key="link.label"
    >
      <a
        :href="link.href"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="link.label"
        class="flex items-center justify-center rounded-full border border-primary/10 bg-white fill-primary text-primary transition-all duration-200 ease-out-soft hover:-translate-y-0.5 hover:border-primary/30 hover:fill-primary-800 hover:text-primary-800 hover:shadow-soft"
        :class="size === 'md' ? 'size-11' : 'size-9'"
      >
        <component
          :is="link.icon"
          :class="size === 'md' ? 'size-5' : 'size-4'"
        />
      </a>
    </li>
  </ul>
</template>
