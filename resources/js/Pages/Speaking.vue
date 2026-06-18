<script setup lang="ts">
import Section from '@/Components/Section.vue';
import SectionHeading from '@/Components/SectionHeading.vue';
import Reveal from '@/Components/Reveal.vue';
import Badge from '@/Components/Badge.vue';
</script>

<template>
  <Section
    tone="gradient"
    spacing="sm"
    width="default"
  >
    <Reveal>
      <SectionHeading
        eyebrow="Speaking"
        description="Sharing what I've learned with the wider Laravel and PHP community."
        as="h1"
      >
        Talks &amp; meetups
      </SectionHeading>
    </Reveal>
  </Section>

  <Section
    tone="transparent"
    spacing="md"
    width="default"
  >
    <Reveal>
      <article
        class="overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-soft transition-all duration-300 ease-out-soft hover:shadow-lift md:flex"
      >
        <div
          class="aspect-video w-full shrink-0 overflow-hidden md:aspect-auto md:w-72"
        >
          <img
            :src="'/images/speaking/php-stoke.jpg'"
            alt="PHP Stoke talk"
            class="size-full object-cover"
          />
        </div>

        <div class="flex flex-1 flex-col p-6 sm:p-8">
          <div class="flex items-center justify-between gap-4">
            <Badge
              variant="soft"
              mono
              >PHP Stoke</Badge
            >
            <span class="font-mono text-xs tracking-tight text-muted">
              October 2024
            </span>
          </div>

          <h2
            class="mt-4 text-xl font-extrabold tracking-tight text-ink sm:text-2xl"
          >
            Benefits of writing clean, maintainable code
          </h2>

          <p class="prose mt-5">
            In October 2024, I gave a talk at the PHP Stoke meetup on writing
            clean, maintainable code — covering everything from variable naming
            and early returns to code style, readability, and practical
            refactoring tips. The event was organised by Laravel's Head of
            Engineering, James Brooks.
          </p>
        </div>
      </article>
    </Reveal>

    <Reveal :delay="120">
      <div
        class="mt-8 rounded-2xl border border-primary/15 bg-primary/5 p-6 text-center sm:p-8"
      >
        <p class="prose mx-auto max-w-xl">
          I'm interested in speaking at other local Laravel and/or PHP meetups
          in the UK — please
          <a href="mailto:jamie@jamie-peters.co.uk">get in touch</a> if you'd
          like to know more.
        </p>
      </div>
    </Reveal>
  </Section>
</template>
