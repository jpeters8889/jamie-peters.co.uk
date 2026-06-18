<script setup lang="ts">
import { WorkSnippet as WorkSnippetType } from '@/types/Work';
import { Link } from '@inertiajs/vue3';
import Section from '@/Components/Section.vue';
import SectionHeading from '@/Components/SectionHeading.vue';
import Reveal from '@/Components/Reveal.vue';
import Project from '@/Components/Project.vue';

defineProps<{ employment: WorkSnippetType[] }>();
</script>

<template>
  <Section
    tone="gradient"
    spacing="sm"
    width="default"
  >
    <Reveal>
      <SectionHeading
        eyebrow="Work &amp; projects"
        description="My career so far, plus a few personal projects I build in my spare time."
        as="h1"
      >
        What I've built
      </SectionHeading>
    </Reveal>
  </Section>

  <!-- Career timeline -->
  <Section
    tone="transparent"
    spacing="md"
    width="default"
  >
    <Reveal>
      <SectionHeading eyebrow="Career">Where I've worked</SectionHeading>
    </Reveal>

    <div class="mt-12 flex flex-col">
      <Reveal
        v-for="(work, index) in employment"
        :key="work.startDate"
        class="relative flex gap-5 pb-12 last:pb-0 sm:gap-8"
      >
        <!-- Timeline rail -->
        <div
          v-if="index < employment.length - 1"
          class="absolute top-14 bottom-0 left-7 w-px -translate-x-1/2 bg-primary/15 sm:top-16 sm:left-8"
          aria-hidden="true"
        />
        <div class="flex flex-col items-center">
          <div
            class="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-primary/10 bg-white p-2.5 shadow-soft sm:size-16"
          >
            <img
              :src="work.logo"
              :alt="`${work.company} logo`"
              class="max-h-full max-w-full"
            />
          </div>
        </div>

        <div class="flex-1 pb-2">
          <div
            class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between"
          >
            <h3
              class="text-xl font-extrabold tracking-tight text-ink sm:text-2xl"
              v-text="work.company"
            />
            <span class="font-mono text-xs tracking-tight text-primary-500">
              {{ work.startDate }} – {{ work.endDate }}
            </span>
          </div>
          <p
            class="mt-1 font-semibold text-primary"
            v-text="work.role"
          />
          <p
            class="prose mt-4"
            v-text="work.description"
          />
        </div>
      </Reveal>
    </div>
  </Section>

  <!-- Personal projects -->
  <Section
    tone="white"
    spacing="md"
    width="default"
  >
    <Reveal>
      <SectionHeading eyebrow="Side projects">Personal projects</SectionHeading>
    </Reveal>

    <div class="mt-10 flex flex-col gap-6">
      <Reveal>
        <Project
          title="Coeliac Sanctuary"
          :links="[
            {
              label: 'www.coeliacsanctuary.co.uk',
              url: 'https://www.coeliacsanctuary.co.uk',
            },
            {
              label: 'github.com/coeliacsanctuary/coeliacsanctuary.co.uk',
              url: 'https://github.com/coeliacsanctuary/coeliacsanctuary.co.uk',
            },
            {
              label: 'github.com/coeliacsanctuary/gluten-free-on-the-go',
              url: 'https://github.com/coeliacsanctuary/gluten-free-on-the-go',
            },
          ]"
        >
          <p>
            Coeliac Sanctuary is a UK website and mobile app serving the coeliac
            community. While my wife looks after content, marketing and social
            media, I'm responsible for the entire technical platform — backend
            development, infrastructure, hosting and ongoing feature
            development.
          </p>
          <p>
            Originally launched in 2014 as a vanilla PHP website, the platform
            has been through several major rewrites over the years. The current
            version is a full rebuild on a modern VILT stack — Laravel, Inertia,
            Vue and Tailwind — with server-side rendering and a heavily
            customised Tailwind configuration. It launched in August 2025.
          </p>
          <p>
            The site includes blogs, recipes, an eating out guide where visitors
            can review gluten-free eateries across the UK, and an online shop
            powered by Stripe. It receives anywhere from 1,000 to
            1,500 visitors a day — mostly using the eating out guide and map —
            so performance, query optimisation and efficient rendering are
            central to the architecture.
          </p>
          <p>
            Rebuilding it from scratch became a labour of love spread across
            roughly two and a half years of spare time — time that grew a lot
            scarcer once I became a first-time father in 2024 — and it pushed me
            to explore Laravel far more deeply than most projects ever call for. The result leans on features many apps barely
            scratch the surface of: Laravel pipelines power the entire eating out
            section, a dynamic,
            <Link
              href="/blog/self-clearing-static-cache-in-laravel"
              prefetch
              >self-clearing cache</Link
            >
            keeps everything fast, and a
            <Link
              href="/blog/the-inertiajs-response-handler-you-didnt-know-you-needed-until-now"
              prefetch
              >custom Inertia response handler</Link
            >
            gives every page a consistent layout.
          </p>
          <p>
            Alongside the website I've built a React Native mobile app —
            released in October 2025 and powered by versioned APIs — that lets
            users find places to eat on a map around their location. It's
            available on both the
            <a
              href="https://apps.apple.com/gb/app/gluten-free-on-the-go/id1608694621"
              target="_blank"
              >App Store</a
            >
            and
            <a
              href="https://play.google.com/store/apps/details?id=com.coeliacsanctuary.onthego"
              target="_blank"
              >Google Play</a
            >.
          </p>
          <p>
            Behind the scenes it runs on DigitalOcean managed with Laravel
            Forge, with a custom-built admin panel, background processing
            via Laravel Horizon, object storage on Amazon S3, and transactional
            email and newsletters handled through Amazon SES and a Spatie
            Mailcoach instance hosted on Laravel Cloud.
          </p>
        </Project>
      </Reveal>

      <Reveal>
        <Project
          title="PHPUnit Code Assertions"
          :links="[
            {
              label: 'github.com/jpeters8889/phpunit-code-assertions',
              url: 'https://github.com/jpeters8889/phpunit-code-assertions',
            },
            {
              label: 'packagist.org/packages/jpeters8889/phpunit-code-assertions',
              url: 'https://packagist.org/packages/jpeters8889/phpunit-code-assertions',
            },
          ]"
        >
          <p>
            PestPHP's architecture testing is genuinely brilliant — but I prefer
            to stay in PHPUnit, so I built my own. It's a package of fluent,
            expressive code and architecture assertions for a PHPUnit test
            suite: you extend a base test case and chain readable rules over a
            directory of code. Under the hood it parses each file into an
            abstract syntax tree with <code>nikic/php-parser</code>, so the
            assertions inspect real code structure rather than matching text.
          </p>
          <p>
            It covers both code-level checks — banning stray
            <code>dd()</code> / <code>dump()</code> calls or enforcing strict
            types — and class-level rules, asserting that classes are
            <code>final</code>, <code>abstract</code> or <code>readonly</code>,
            implement the right interfaces and traits, are invokable, or follow
            naming conventions such as a required <code>Controller</code> suffix.
          </p>
          <p>
            I've never really promoted it, but it's become a quiet staple
            across several of my own projects. On Coeliac Sanctuary alone it
            <a
              href="https://github.com/coeliacsanctuary/coeliacsanctuary.co.uk/blob/main/tests/Code/CodeArchitectureTest.php"
              target="_blank"
              >enforces consistent conventions right across the codebase</a
            >
            — actions, controllers, jobs, resources, pipeline steps, mailables
            and far more — and after the best part of a year in production it's
            caught more than a few issues before they reached deployment.
          </p>
        </Project>
      </Reveal>

      <Reveal>
        <Project
          title="This website"
          :links="[
            {
              label: 'github.com/jpeters8889/jamie-peters.co.uk',
              url: 'https://github.com/jpeters8889/jamie-peters.co.uk',
            },
          ]"
        >
          <p>
            This very site is a small VILT app — Laravel, Inertia, Vue and
            Tailwind — with server-side rendering, hosted on Laravel Cloud. It's
            deliberately lightweight, but it's a fun playground for the stack I
            love, with a markdown-driven blog, syntax-highlighted code samples,
            and a recent ground-up redesign.
          </p>
          <p>
            The full source is on GitHub if you'd like a look under the hood.
          </p>
        </Project>
      </Reveal>
    </div>
  </Section>
</template>
