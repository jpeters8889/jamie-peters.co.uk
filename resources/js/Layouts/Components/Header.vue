<script setup lang="ts">
import { MetaProps } from '@/types/DefaultProps';
import Metas from '@/Layouts/Components/Metas.vue';
import MainMenu from '@/Layouts/Components/MainMenu.vue';

defineProps<{ metas: MetaProps }>();
</script>

<template>
  <Metas :metas="metas" />

  <div class="mx-auto w-full max-w-5xl">
    <MainMenu />
  </div>
</template>
