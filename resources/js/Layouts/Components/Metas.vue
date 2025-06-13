<script setup lang="ts">
import { MetaProps } from '@/types/DefaultProps';
import { Head } from '@inertiajs/vue3';

defineProps<{ metas: MetaProps }>();
</script>

<template>
  <Head>
    <title>{{ metas.title }}</title>

    <meta
      name="description"
      :content="metas.description"
    />

    <link
      rel="canonical"
      :href="metas.currentUrl"
    />

    <meta
      property="og:type"
      content="article"
    />
    <meta
      property="og:locale"
      content="en_GB"
    />
    <meta
      property="og:site_name"
      content="jamie-peters.co.uk"
    />
    <meta
      property="og:description"
      :content="metas.description"
    />
    <meta
      property="og:title"
      :content="metas.title"
    />
    <meta
      property="og:image"
      :content="metas.image"
    />
    <meta
      property="og:image:type"
      content="image/jpeg"
    />
    <meta
      property="og:url"
      :content="metas.currentUrl"
    />

    <meta
      name="twitter:card"
      content="summary_large_image"
    />
    <meta
      name="twitter:description"
      :content="metas.description"
    />
    <meta
      name="twitter:title"
      :content="metas.title"
    />
    <meta
      name="twitter:site"
      content="@jpeters8889"
    />
    <meta
      name="twitter:domain"
      content="jamie-peters.co.uk"
    />
    <meta
      name="twitter:image:src"
      :content="metas.image"
    />
    <meta
      name="twitter:creator"
      content="@jpeters8889"
    />
  </Head>
</template>
