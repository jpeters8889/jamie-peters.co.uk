<script setup lang="ts">
import Card from '@/Components/Card.vue';
import Heading from '@/Components/Heading.vue';
import UsesItem from '@/Components/UsesItem.vue';
import UsesGroup from '@/Components/UsesGroup.vue';
</script>

<template>
  <Card>
    <Heading>My Setup</Heading>

    <p class="prose mb-5">
      Inspired by the developers I follow on Twitter and admire, I'd thought I'd
      put together my own 'uses' / setup page, though at least hardware wise I
      work a lot simpler than most, sticking to just using my Mac on its own
      outside of my employment!
    </p>

    <div class="flex flex-col space-y-10">
      <UsesGroup title="Software">
        <UsesItem title="IDE">
          <p class="prose">
            <strong>PhpStorm</strong> has been my IDE of choice since 2014, for
            a long time I just used it with the default dark theme and
            configuration, however in the past couple of years I have customized
            it a little more.
          </p>

          <p class="prose">
            I use the <strong>Material Theme UI</strong> plugin and the
            <strong>Atom One Dark</strong> theme, I have a lot of the built in
            toolbars disabled, but I still have a couple open, and I prefer
            working with the tabs visible, I have tried it a few times with them
            disabled, but I usually end up missing them and turning them back
            on! I usually work with the side bar open too with the file browser,
            unless I have the workspace split with two files open at once.
          </p>
        </UsesItem>

        <UsesItem title="Terminal">
          <p class="prose">
            I am a fan of <strong>iTerm2</strong> with
            <strong>Z Shell</strong> and <strong>Oh My Zsh</strong>, I have a
            few plugins installed (Which I really need to document more!) and
            several aliases
          </p>
        </UsesItem>

        <UsesItem title="Database">
          <p class="prose">
            I use <strong>SequelAce</strong> to manage and connecting to MySQL
            Databases.
          </p>
        </UsesItem>

        <UsesItem title="Local Development">
          <p class="prose">
            <strong>Laravel Herd</strong> is my go to for local development
            work, it’s just so seamless. Drop a project in my code folder, head
            to project.test, and it’s up and running!
          </p>
          <p class="prose">
            If I need to test any calls to an API, then
            <strong>Postman</strong> is my default tool.
          </p>
        </UsesItem>

        <UsesItem title="Operating System">
          <p class="prose">
            I don’t customise <strong>macOS</strong> too heavily. I usually keep
            most apps in full screen and swipe between them. The dock is hidden
            by default, only showing open apps with the smallest possible icons
            when I move my cursor to the bottom.
          </p>

          <p class="prose">
            For app launching and general navigation, I use
            <strong>Alfred</strong>, bound to Option + Space — it’s second
            nature at this point. I almost never use the built-in app browser.
          </p>

          <p class="font-semibold">Other daily apps</p>

          <p class="prose">
            Email - I use <strong>Mimestream</strong>, having switched from
            Spark in late 2022.
          </p>

          <p class="prose">
            Browsers - I use both <strong>Firefox</strong> and
            <strong>Chrome</strong> - Firefox for general day to day browsing,
            and Chrome for dev work.
          </p>

          <p class="prose">
            Git - I prefer a GUI and use <strong>GitKraken</strong>. I’m
            comfortable with the terminal, but for certain things, a GUI is just
            easier.
          </p>
        </UsesItem>
      </UsesGroup>

      <UsesGroup title="Web">
        <UsesItem title="Hosting">
          <p class="prose">
            Most of my personal projects are hosted on
            <strong>Digital Ocean</strong> droplets, but one are two are now
            also on <strong>Laravel Cloud</strong>
          </p>
        </UsesItem>

        <UsesItem title="Deployment / Setup">
          <p class="prose">
            I’m not a big fan of fiddling with server configs, so I use
            <strong>Laravel Forge</strong> to handle provisioning and setup. For
            simple projects, Forge also handles deployment, but larger sites
            like Coeliac Sanctuary use <strong>Laravel Envoyer</strong> for
            zero-downtime deploys.
          </p>
        </UsesItem>

        <UsesItem title="Email">
          <p class="prose">
            I use <strong>Google Workspaces</strong> to manage email addresses
            needed for any of my personal websites.
          </p>

          <p class="prose">
            For any automatic sending of email, such as transactional or from a
            campaign is done through <strong>Amazon SES</strong>.
          </p>

          <p class="prose">
            Email Campaign Management and logging of transactional emails is
            done through the fantastic <strong>Mailcoach</strong>
            by Spatie.
          </p>
        </UsesItem>

        <UsesItem title="Storage">
          <p class="prose">
            Most of my projects just store files in the main filesystem, however
            on Coeliac Sanctuary all images are stored on
            <strong>Amazon S3</strong>.
          </p>
        </UsesItem>
      </UsesGroup>

      <UsesGroup title="Hardware">
        <UsesItem title="Macbook">
          <p class="prose">
            I like to keep things simple outside of work - just me on the sofa,
            or sat in bed after the little one has gone to sleep, with my
            MacBook.
          </p>

          <p class="prose">
            I use a
            <strong
              >2020 16" Macbook pro, 2.3ghz 8-Core i9, 16gb RAM and 1tb
              SSD.</strong
            >
            for all my personal work.
          </p>

          <p class="prose">
            I have a desk space and dedicated equipment when working during my
            employment, but I try to keep my personal work and employment work
            separate and do not sit at my desk outside of work hours.
          </p>
        </UsesItem>

        <UsesItem title="Phone">
          <p class="prose">
            I have been an Android fan since 2012. My current phone is the
            <strong>Google Pixel 9 Pro XL</strong>.
          </p>
        </UsesItem>

        <UsesItem title="Smart Watch">
          <p class="prose">
            I have owned a Fitbit device since 2017, most recently was the Versa
            2, but when I pre-ordered the new Pixel 7 Pro prior to release, the
            free gift was the new <strong>Google Pixel watch</strong>, which
            also integrates perfectly with Fitbit, the only downside is having
            to charge it daily (I tend to put it on at night before bed while
            I'm reading) - but I've got used to it now!
          </p>
        </UsesItem>
      </UsesGroup>
    </div>
  </Card>
</template>
