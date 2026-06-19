<script setup lang="ts">
import { BlogSnippet as BlogSnippetType } from '@/types/Blogs';
import { WorkSnippet as WorkSnippetType } from '@/types/Work';
import Container from '@/Components/Container.vue';
import Section from '@/Components/Section.vue';
import SectionHeading from '@/Components/SectionHeading.vue';
import Reveal from '@/Components/Reveal.vue';
import Button from '@/Components/Button.vue';
import Badge from '@/Components/Badge.vue';
import SocialLinks from '@/Components/SocialLinks.vue';
import BlogSnippet from '@/Components/BlogSnippet.vue';
import WorkSnippet from '@/Components/WorkSnippet.vue';
import { ArrowRightIcon } from '@heroicons/vue/24/solid';

defineProps<{
  blogs: BlogSnippetType[];
  employment: WorkSnippetType[];
  me: string;
}>();

const coreStack = ['Laravel', 'Vue', 'Inertia', 'Tailwind'];

const toolbox = [
  {
    name: 'React Native',
    detail:
      'Built and shipped a full production app with React Native and Expo, live on both app stores.',
  },
  {
    name: 'React',
    detail:
      'Comfortable working in existing React codebases - the concepts carry over nicely from Vue.',
  },
  {
    name: 'Filament',
    detail:
      'Capable with Filament for building polished admin panels and internal tools.',
  },
];
</script>

<template>
  <!-- Hero -->
  <section
    class="relative overflow-hidden bg-gradient-to-b from-primary-50 to-surface"
  >
    <div
      class="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-primary/10 blur-3xl"
      aria-hidden="true"
    />

    <Container size="wide">
      <div
        class="grid grid-cols-1 items-center gap-12 py-20 sm:py-28 md:grid-cols-[1.3fr_1fr]"
      >
        <div class="flex flex-col items-start">
          <Badge
            variant="outline"
            mono
            class="mb-6"
          >
            <span class="size-1.5 rounded-full bg-primary" />
            Senior Laravel Developer
          </Badge>

          <h1
            class="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Hey, I'm
            <span class="text-primary">Jamie</span>
          </h1>

          <p class="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            A senior full-stack developer specialising in
            <strong class="font-semibold text-ink">Laravel</strong>,
            <strong class="font-semibold text-ink">Vue</strong>,
            <strong class="font-semibold text-ink">Inertia</strong> and
            <strong class="font-semibold text-ink">Tailwind</strong> - building
            fast, clean and scalable web platforms.
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-3">
            <Button
              href="mailto:jamie@jamie-peters.co.uk"
              external
            >
              Get in touch
              <ArrowRightIcon class="size-4" />
            </Button>
            <Button
              href="/work-and-projects"
              variant="ghost"
            >
              View my work
            </Button>
          </div>

          <div class="mt-8">
            <SocialLinks />
          </div>
        </div>

        <div class="relative justify-self-center md:justify-self-end">
          <div
            class="pointer-events-none absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-full bg-primary/15 blur-2xl"
            aria-hidden="true"
          />

          <div
            class="aspect-square w-56 overflow-hidden rounded-full ring-4 ring-white sm:w-72 lg:w-80"
          >
            <img
              :src="me"
              alt="Jamie Peters"
              class="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  </section>

  <!-- What I work with -->
  <Section
    tone="tint"
    spacing="md"
    width="default"
  >
    <Reveal>
      <SectionHeading eyebrow="Toolbox">What I work with</SectionHeading>
    </Reveal>

    <Reveal :delay="80">
      <div class="mt-10">
        <p
          class="font-mono text-xs font-medium tracking-[0.2em] text-primary-500 uppercase"
        >
          My core stack
        </p>

        <div class="mt-4 flex flex-wrap gap-3">
          <span
            v-for="tech in coreStack"
            :key="tech"
            class="rounded-xl border border-primary/15 bg-primary/5 px-5 py-3 text-base font-bold tracking-tight text-primary"
            v-text="tech"
          />
        </div>

        <p class="mt-3 text-sm text-muted">
          The VILT stack - my day to day, and what I reach for first.
        </p>
      </div>
    </Reveal>

    <Reveal :delay="160">
      <div class="mt-10">
        <p
          class="font-mono text-xs font-medium tracking-[0.2em] text-primary-500 uppercase"
        >
          Also in my toolbox
        </p>

        <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div
            v-for="tool in toolbox"
            :key="tool.name"
            class="rounded-2xl border border-primary/10 bg-white p-5 shadow-soft"
          >
            <h3
              class="font-bold text-ink"
              v-text="tool.name"
            />

            <p
              class="mt-1.5 text-sm leading-relaxed text-muted"
              v-text="tool.detail"
            />
          </div>
        </div>
      </div>
    </Reveal>
  </Section>

  <!-- Intro -->
  <Section
    tone="transparent"
    spacing="md"
    width="default"
  >
    <Reveal>
      <SectionHeading
        eyebrow="About"
        description="A passionate, committed web developer with over 20 years of experience."
      >
        Who am I?
      </SectionHeading>

      <div class="prose mt-8 max-w-3xl">
        <p>
          Thank you for taking the time to visit my personal website. My name is
          <strong>Jamie Peters</strong> and I am a passionate, committed and
          enthusiastic web developer with over 20 years experience in web design
          and development. I specialise in modern Laravel application
          development, working extensively with
          <a
            href="https://www.laravel.com"
            target="_blank"
            >Laravel</a
          >,
          <a
            href="https://inertiajs.com/"
            target="_blank"
            >Inertia.js</a
          >,
          <a
            href="https://vuejs.org/"
            target="_blank"
            >Vue.js</a
          >, and
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            >Tailwind CSS</a
          >
          to create fast, clean and scalable web platforms.
        </p>

        <p>
          I am originally from South Yorkshire, but now live in South Cheshire.
        </p>
      </div>
    </Reveal>
  </Section>

  <!-- Latest writing -->
  <Section
    tone="white"
    spacing="md"
    width="wide"
  >
    <Reveal>
      <div class="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow="Blog">My writings</SectionHeading>

        <Button
          href="/blog"
          variant="ghost"
          size="sm"
        >
          See all blogs
          <ArrowRightIcon class="size-4" />
        </Button>
      </div>
    </Reveal>

    <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
      <Reveal
        v-for="(blog, index) in blogs"
        :key="blog.title"
        :delay="index * 80"
      >
        <BlogSnippet :blog="blog" />
      </Reveal>
    </div>
  </Section>

  <!-- Work -->
  <Section
    tone="transparent"
    spacing="md"
    width="default"
  >
    <Reveal>
      <div class="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow="Career">Where I've worked</SectionHeading>

        <Button
          href="/work-and-projects"
          variant="ghost"
          size="sm"
        >
          Work &amp; projects
          <ArrowRightIcon class="size-4" />
        </Button>
      </div>
    </Reveal>

    <div class="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Reveal
        v-for="(work, index) in employment"
        :key="work.startDate"
        :delay="index * 80"
      >
        <WorkSnippet :work="work" />
      </Reveal>
    </div>
  </Section>

  <!-- Contact CTA -->
  <Section
    tone="transparent"
    spacing="md"
    width="default"
  >
    <Reveal>
      <div
        class="relative overflow-hidden rounded-3xl bg-primary px-8 py-14 text-center shadow-lift sm:px-16"
      >
        <div
          class="pointer-events-none absolute -top-16 -right-16 size-64 rounded-full bg-white/10 blur-3xl"
          aria-hidden="true"
        />

        <h2
          class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
        >
          Thanks for stopping by
        </h2>

        <p class="mx-auto mt-4 max-w-xl text-primary-100">
          Feel free to look around, read the blog, or drop me a line - it's
          always nice to hear from people.
        </p>

        <div class="mt-8 flex justify-center">
          <Button
            href="mailto:jamie@jamie-peters.co.uk"
            external
            variant="ghost"
          >
            Get in touch
            <ArrowRightIcon class="size-4" />
          </Button>
        </div>
      </div>
    </Reveal>
  </Section>
</template>
