<script setup lang="ts">
import Section from '@/Components/Section.vue';
import SectionHeading from '@/Components/SectionHeading.vue';
import Reveal from '@/Components/Reveal.vue';
import Badge from '@/Components/Badge.vue';

defineProps<{ me: string }>();

const skills = [
  'Laravel',
  'PHP',
  'Vue.js',
  'Inertia.js',
  'Tailwind CSS',
  'React Native',
  'React',
  'Filament',
  'PHPUnit / TDD',
  'Pest',
  'PHPStan',
  'Laravel Pint',
  'AWS',
  'Laravel Cloud',
  'Laravel Forge',
];
</script>

<template>
  <Section
    tone="gradient"
    spacing="md"
    width="default"
  >
    <Reveal>
      <SectionHeading
        eyebrow="About me"
        description="Developer, musician, husband and dad - here's a little more about who I am."
        as="h1"
      >
        All about me
      </SectionHeading>
    </Reveal>
  </Section>

  <Section
    tone="transparent"
    spacing="sm"
    width="default"
  >
    <div class="grid grid-cols-1 gap-12 md:grid-cols-[260px_1fr] lg:gap-16">
      <Reveal class="md:sticky md:top-28 md:self-start">
        <div
          class="aspect-square w-full max-w-[260px] overflow-hidden rounded-3xl shadow-soft ring-1 ring-primary/10"
        >
          <img
            :src="me"
            alt="Jamie Peters"
            class="size-full object-cover"
          />
        </div>

        <div class="mt-6 flex flex-wrap gap-2">
          <Badge
            v-for="skill in skills"
            :key="skill"
            variant="soft"
          >
            {{ skill }}
          </Badge>
        </div>
      </Reveal>

      <Reveal :delay="120">
        <div class="prose max-w-none">
          <p>
            I have deep, hands-on experience with
            <strong>Laravel and PHP</strong>, having worked with the framework
            daily for many years. I follow a
            <strong>test-driven development</strong> approach, writing thorough
            test suites with <strong>PHPUnit</strong> - and
            <strong>Pest</strong> where a project calls for it - to ensure the
            reliability and maintainability of every feature I build.
          </p>

          <p>
            Code quality is a key focus of mine. I maintain strict coding
            standards and integrate tools like
            <strong>Laravel Pint, PHP CS Fixer, PHPStan</strong>, and
            <strong>Larastan</strong> into my workflows to enforce consistency
            and catch issues early.
          </p>

          <p>
            On the frontend, I work primarily with <strong>Vue.js</strong>,
            using <strong>Inertia.js</strong> to deliver modern, single-page
            application experiences while keeping the power and simplicity of
            Laravel behind the scenes. I build UIs with
            <strong>Tailwind CSS</strong>, which allows me to prototype rapidly
            while keeping designs consistent and polished.
          </p>

          <p>
            While the VILT stack is where I feel most at home, I'm comfortable
            working beyond it. I've built and shipped a full production mobile
            app with <strong>React Native</strong> and <strong>Expo</strong>,
            and I'm happy working in existing <strong>React</strong> codebases -
            many of the concepts carry over naturally from Vue. More recently
            I've become a big fan of <strong>Filament</strong>, which I reach for
            when building polished admin panels and internal tools.
          </p>

          <p>
            For deployment, <strong>Laravel Cloud</strong> has become my
            default for new projects - as it's matured it's proven a genuinely
            compelling, fully-managed option that scales comfortably where a
            traditional VPS would start to struggle, and it pairs brilliantly
            with its new managed queues. I now run a growing number of apps on
            it, including this very site. <strong>Laravel Forge</strong> is
            still very much in my toolkit, particularly for existing apps and
            where a predictable, fixed-cost <strong>DigitalOcean</strong> droplet
            makes sense. I'm comfortable working directly over
            <strong>SSH</strong> when needed and regularly integrate with a range
            of common <strong>AWS services</strong>. While I have experience with
            <strong>Docker</strong>, I prefer using <strong>Laravel Herd</strong>
            for fast, streamlined local development.
          </p>

          <blockquote>
            I first started learning <strong>PHP in 2005</strong> and never
            looked back. Watching the language evolve over the past 20 years has
            been amazing. I discovered <strong>Laravel in 2018</strong>, and it
            completely changed how I write my web apps.
          </blockquote>

          <p>
            Outside of development, I'm a keen amateur musician. I've been
            playing guitar since 2009 and love to play along to some of my
            favourite songs. In 2025, I also started to learn to play keyboard,
            expanding my love of music even further.
          </p>

          <p>
            Most importantly, I also love spending time with my wife and our
            little girl who was born in 2024.
          </p>
        </div>
      </Reveal>
    </div>
  </Section>
</template>
