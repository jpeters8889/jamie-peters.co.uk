<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
</script>

<template>
  <nav class="bg-black bg-opacity-20">
    <ul class="flex justify-center text-sm font-semibold lg:text-base space-x-1 xs:space-x-4">
      <li>
        <Link class="p-2 flex hover:bg-primary transition-bg" href="/">Home</Link>
      </li>
      <li>
        <Link class="p-2 flex hover:bg-primary transition-bg"
           href="/about">About</Link>
      </li>
      <li>
        <Link class="p-2 flex hover:bg-primary transition-bg"
           href="/projects">Projects</Link>
      </li>
      <li>
        <Link class="p-2 flex hover:bg-primary transition-bg"
           href="/articles">Articles</Link>
      </li>
      <li>
        <Link class="p-2 flex hover:bg-primary transition-bg"
           href="/uses">Uses</Link>
      </li>
    </ul>
  </nav>
</template>
