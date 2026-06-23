<script setup lang="ts">
import Section from '@/Components/Section.vue';
import SectionHeading from '@/Components/SectionHeading.vue';
import Reveal from '@/Components/Reveal.vue';
import UsesItem from '@/Components/UsesItem.vue';
import UsesGroup from '@/Components/UsesGroup.vue';
</script>

<template>
  <Section
    tone="gradient"
    spacing="sm"
    width="default"
  >
    <Reveal>
      <SectionHeading
        eyebrow="Uses"
        description="Inspired by the developers I follow and admire, here's the software, hardware and kit I use day to day - though hardware-wise I keep things a lot simpler than most!"
        as="h1"
      >
        My setup
      </SectionHeading>
    </Reveal>
  </Section>

  <Section
    tone="transparent"
    spacing="md"
    width="default"
  >
    <div class="flex flex-col gap-16">
      <Reveal>
        <UsesGroup title="Development">
          <UsesItem title="IDE">
            <p>
              <strong>PhpStorm</strong> has been my IDE of choice since 2014.
              For a long time I just used it with the default dark theme and
              configuration, however in the past couple of years I have
              customised it a little more.
            </p>

            <p>
              I run the <strong>Material Theme UI</strong> plugin with the
              <strong>Atom One Dark</strong> theme. I keep most of the built-in
              toolbars hidden - though a couple stay - and I always work with
              tabs visible and the file browser open in the sidebar, unless I've
              split the workspace to see two files at once.
            </p>
          </UsesItem>

          <UsesItem title="AI">
            <p>
              I came to AI fairly late. I'd been using
              <strong>ChatGPT</strong> since late 2024, but mostly for
              discussions and questions rather than writing code - I enjoy
              writing that part myself.
            </p>

            <p>
              Agentic coding took me even longer to warm to; I didn't get on
              board until early 2026. ChatGPT still handles my day-to-day
              questions, while <strong>Claude Code</strong> and the
              <strong>Opus</strong> models have become part of my daily coding
              workflow - usually run straight from PhpStorm's built-in terminal,
              right alongside the code. I review everything by hand, but I've
              grown to trust it more and more - recently even on my own Coeliac
              Sanctuary codebase.
            </p>
          </UsesItem>

          <UsesItem title="Coding Font">
            <p>
              In PhpStorm I write in <strong>Fira Code</strong> at 16px with a
              1.9 line height and ligatures switched on - easy on the eyes for
              long sessions. I'm far less fussy about the terminal, where I just
              leave Warp on its defaults.
            </p>
          </UsesItem>

          <UsesItem title="Terminal">
            <p>
              Earlier this year I switched from iTerm2 to
              <strong>Warp</strong>, a modern, Rust-based terminal, and its
              polished take on things quickly won me over.
            </p>

            <p>
              Underneath I've kept my familiar setup - <strong>Z Shell</strong>
              with <strong>Oh My Zsh</strong>, a handful of plugins and several
              aliases - and I even brought my old iTerm2 colour theme across, so
              it still feels like home.
            </p>
          </UsesItem>

          <UsesItem title="Database">
            <p>
              For MySQL, <strong>SequelAce</strong> is still my tool of choice -
              clean, fast and exactly what I need.
            </p>

            <p>
              For Postgres (mostly on Laravel Cloud) I switch between
              <strong>PhpStorm's</strong> built-in database tools and the
              occasional bit of <strong>TablePlus</strong>, though I've yet to
              find a Postgres client I like quite as much as SequelAce.
            </p>
          </UsesItem>

          <UsesItem title="Local Development">
            <p>
              <strong>Laravel Herd</strong> is my go-to for local development -
              it's just so seamless. Drop a project into my code folder, head to
              project.test, and it's up and running!
            </p>

            <p>
              And if I need to test calls to an API,
              <strong>Postman</strong> is my default tool.
            </p>
          </UsesItem>

          <UsesItem title="Code Quality">
            <p>
              Clean, consistent code matters a lot to me. I lean on
              <strong>Laravel Pint</strong> for formatting and
              <strong>PHPStan</strong> with <strong>Larastan</strong> for static
              analysis, all enforced through <strong>GitHub Actions</strong> on
              every push.
            </p>

            <p>
              I also run my own <strong>PHPUnit Code Assertions</strong> package
              to keep architecture and naming conventions consistent right
              across a project.
            </p>
          </UsesItem>

          <UsesItem title="Debugging">
            <p>
              I'll be honest - I'm a <strong>dd()</strong> /
              <strong>dump()</strong> kind of developer; nine times out of ten
              it's the quickest way to see what's going on. I've used
              <strong>Xdebug</strong> plenty and it's genuinely worth it for the
              trickier problems, but for day-to-day work a well-placed dump
              usually wins.
            </p>
          </UsesItem>
        </UsesGroup>
      </Reveal>

      <Reveal>
        <UsesGroup title="Apps & System">
          <UsesItem title="Operating System">
            <p>
              I don't customise <strong>macOS</strong> too heavily. I keep most
              apps in full screen and swipe between them, and the dock stays
              hidden - only appearing, with the smallest possible icons, when I
              push my cursor to the bottom of the screen.
            </p>
          </UsesItem>

          <UsesItem title="App Launcher">
            <p>
              Earlier this year I swapped Alfred for <strong>Raycast</strong>,
              bound to the same Option + Space shortcut so the muscle memory
              carried straight over. It's second nature now for launching apps
              and general navigation.
            </p>
          </UsesItem>

          <UsesItem title="Screenshots">
            <p>
              Nothing fancy here - I just use the built-in
              <strong>macOS</strong> screenshot tool, usually launched straight
              from Raycast.
            </p>
          </UsesItem>

          <UsesItem title="Password Manager">
            <p>
              <strong>1Password</strong> handles all my credentials these days.
              I came to it fairly late - only really converting in the last year
              or two after using it at work - but now I wouldn't be without it.
            </p>
          </UsesItem>

          <UsesItem title="Email">
            <p>
              I use <strong>Mimestream</strong> - a fast, native, Gmail-focused
              client I switched to from Spark back in late 2022.
            </p>
          </UsesItem>

          <UsesItem title="Browsers">
            <p>
              <strong>Firefox</strong> is my day-to-day browser, with
              <strong>Chrome</strong> reserved for dev work.
            </p>
          </UsesItem>

          <UsesItem title="Git">
            <p>
              I'm perfectly comfortable with Git on the command line, but for
              day-to-day work I prefer a GUI - <strong>GitKraken</strong> is my
              pick.
            </p>
          </UsesItem>
        </UsesGroup>
      </Reveal>

      <Reveal>
        <UsesGroup title="Web">
          <UsesItem title="Hosting">
            <p>
              For new projects, <strong>Laravel Cloud</strong> is now my default
              - it's fully managed and scales without me having to think about
              servers.
            </p>

            <p>
              My longer-standing projects still run on
              <strong>DigitalOcean</strong> droplets - Coeliac Sanctuary among
              them - where a predictable, fixed monthly cost suits them well.
            </p>
          </UsesItem>

          <UsesItem title="Deployment / Setup">
            <p>
              I'd rather not fiddle with server configs, so on a VPS I lean on
              <strong>Laravel Forge</strong> for provisioning, setup and
              zero-downtime deployments.
            </p>

            <p>
              On <strong>Laravel Cloud</strong> there's even less to do -
              deployment is baked in, so I can just push and let the platform
              handle the rest.
            </p>
          </UsesItem>

          <UsesItem title="Email">
            <p>
              I manage the email addresses for my personal sites with
              <strong>Google Workspace</strong>. Anything automated -
              transactional emails and campaigns - goes out through
              <strong>Amazon SES</strong>, with campaign management and logging
              handled by the fantastic <strong>Mailcoach</strong> from Spatie.
            </p>
          </UsesItem>

          <UsesItem title="Storage">
            <p>
              Whenever I need file storage, I reach for
              <strong>Amazon S3</strong> - it just works. It handles everything
              from image uploads to assets across my projects, Coeliac Sanctuary
              included.
            </p>
          </UsesItem>
        </UsesGroup>
      </Reveal>

      <Reveal>
        <UsesGroup title="Hardware">
          <UsesItem title="MacBook">
            <p>
              Outside of work I like to keep things simple - just me on the
              sofa, or in bed after the little one's gone down, with my MacBook.
            </p>

            <p>
              It's a
              <strong
                >2020 16" MacBook Pro - 2.3GHz 8-core i9, 16GB RAM and a 1TB
                SSD</strong
              >, and it handles everything I throw at it for personal work.
            </p>
          </UsesItem>

          <UsesItem title="Phone">
            <p>
              I've been an Android fan since 2012, and these days I carry a
              <strong>Google Pixel 9 Pro XL</strong>.
            </p>
          </UsesItem>

          <UsesItem title="Smart Watch">
            <p>
              I've worn a Fitbit since 2017, though these days it's the original
              <strong>Google Pixel Watch</strong> - a free gift when I
              pre-ordered the Pixel 7 nearly four years ago. It still pairs
              nicely with Fitbit, and even though it needs charging every day, it
              hasn't left my wrist since.
            </p>
          </UsesItem>
        </UsesGroup>
      </Reveal>

      <Reveal>
        <UsesGroup title="Music">
          <UsesItem title="Guitars">
            <p>
              My main guitar is an <strong>Epiphone Les Paul</strong> - I'd love
              a Gibson one day, but that's a little out of budget for now!
            </p>

            <p>
              Alongside it I keep a cheaper Les Paul copy tuned to
              <strong>E♭</strong> for songs that need it, and a
              <strong>Squier bass</strong> for when I fancy something different.
            </p>
          </UsesItem>

          <UsesItem title="Amp">
            <p>
              Everything runs through an
              <strong>Orange Micro Crush 3</strong> - tiny, but punchy, and more
              than enough for playing at home.
            </p>
          </UsesItem>

          <UsesItem title="Pedals">
            <p>
              My effects all go through a <strong>Boss ME-90</strong>, with each
              of my favourite tones saved and ready to switch between so I can
              play along to whatever I fancy.
            </p>
          </UsesItem>

          <UsesItem title="Keyboard">
            <p>
              For the piano side of things I've got an entry-level
              <strong>Yamaha</strong> keyboard - nothing fancy, but it does the
              job while I learn.
            </p>
          </UsesItem>
        </UsesGroup>
      </Reveal>
    </div>
  </Section>
</template>
