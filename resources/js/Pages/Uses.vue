<script setup lang="ts">
import Layout from '@/Layouts/Layout.vue';
import Card from '@/Components/Card.vue';
import UsesGroup from '@/Components/UsesGroup.vue';
import UsesItem from '@/Components/UsesItem.vue';
import {Head} from '@inertiajs/vue3'
</script>

<template>
  <Head>
    <title>My Set Up</title>

    <meta property="og:type" content="article" />
    <meta property="og:locale" content="en_GB"/>
    <meta property="og:site_name" content="Jamie Peters - Laravel Developer"/>
    <meta property="og:description" content="Check out all the tools I use"/>
    <meta property="og:title" content="Jamie Peters - My Set Up"/>
    <meta property="og:image" content="https://jamie-peters.s3.eu-west-2.amazonaws.com/og-image.jpg"/>
    <meta property="og:image:type" content="image/jpeg"/>
    <meta property="og:url" content="https://jamie-peters.co.uk/uses"/>

    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:description" content="Check out all the tools I use"/>
    <meta name="twitter:title" content="Jamie Peters - My Set Up"/>
    <meta name="twitter:site" content="@jpeters8889"/>
    <meta name="twitter:domain" content="Jamie Peters - Laravel Developer"/>
    <meta name="twitter:image:src" content="https://jamie-peters.s3.eu-west-2.amazonaws.com/og-image.jpg"/>
    <meta name="twitter:creator" content="@jpeters8889"/>
  </Head>
  <Layout>
    <Card>
      <template #title>My Setup</template>

      <p>
        Inspired by the developers I follow on Twitter and admire, I'd thought I'd put together my own 'uses' / setup
        page, though at least hardware wise I work a lot simpler than most, sticking to just using my Mac on its own
        outside of my employment!
      </p>

      <UsesGroup title="Software">
        <UsesItem title="IDE">
          <p>
            <strong>PhpStorm</strong> has being my IDE of choice since 2014, for a long time I just used it with the
            default dark theme and configuration, however in the past couple of years I have customized it a little
            more.
          </p>

          <p>
            I use the <strong>Material Theme UI</strong> plugin and the <strong>Atom One Dark</strong> theme, I have a
            lot of the built in toolbars disabled, but I still have a couple open, and I prefer working with the tabs
            visible, I have tried it a few times with them disabled, but I usually end up missing them and turning them
            back on! I usually work with the side bar open too with the file browser, unless I have the workspace split
            with two files open at once.
          </p>
        </UsesItem>

        <UsesItem title="Terminal">
          <p>
            I am a fan of <strong>iTerm</strong> used with <strong>Z Shell</strong> and <strong>Oh My Zsh</strong>, I
            have a few plugins installed (Which I really need to document more!) and several aliases
          </p>
        </UsesItem>

        <UsesItem title="Database">
          <p>
            I use <strong>SequelAce</strong> for managing and connecting to MySQL Databases.
          </p>
        </UsesItem>

        <UsesItem title="Local Development">
          <p>
            I use <strong>Laravel Valet</strong> for all local development work, it's just so easy been able to create a
            project in my code folder and then go to folder-name.test in the browser and it's just there!
          </p>
          <p>
            For local email testing I use <strong>HELO</strong> by Beyond Code, a great thing that just works with a
            couple of env changes.
          </p>
          <p>
            If I need to test any calls to an API, then <strong>Postman</strong> is my go to.
          </p>
        </UsesItem>

        <UsesItem title="Graphics/Photo Editing">
          <p>
            For photo editing when I've been out with my camera, <strong>Adobe Lightroom</strong> is my go to, and
            occasionally <strong>Photoshop</strong> too.
          </p>

          <p>
            I've also used <strong>Adobe InDesign</strong> and <strong>Illustrator</strong> in the past when required,
            but it's rare I use them much these days.
          </p>
        </UsesItem>

        <UsesItem title="Operating System">
          <p>
            I don't customise MacOS too much, but I do tend to have most apps open in full screen all the time and
            swipe between them, I have the dock hidden unless I move my cursor to the bottom of the screen and then it
            only shows apps that are open with the smallest possible icons.
          </p>

          <p>
            To open apps and use my Mac I typically use Alfred, I have it bound to Option + Space, so it's just muscle
            memory for opening an App, I very rarely, if ever use the built in Mac app browser.
          </p>

          <p class="font-semibold">
            Additional Apps I use daily
          </p>

          <ul>
            <li>
              For email I use <strong>Mimestream</strong>, until late 2022 I was using Spark, but made the switch to
              Mimestream.
            </li>
            <li>
              I use both <strong>Firefox</strong> and <strong>Chrome</strong> regularly, Firefox I tend to use more
              for day to day non work related browsing, and Chrome for any development work.
            </li>
            <li>
              I prefer using a GUI for Git and my favourite is <strong>GitKraken</strong>, I can get by with most
              commands on the terminal, but for some stuff, you can't beat a GUI!
            </li>
          </ul>
        </UsesItem>
      </UsesGroup>

      <UsesGroup title="Web">
        <UsesItem title="Hosting">
          <p>
            All of my personal projects are hosted on <strong>Digital Ocean</strong> droplets.
          </p>
        </UsesItem>

        <UsesItem title="Deployment / Setup">
          <p>
            I am not a fan of configuring servers or infrastructure, so I rely on <strong>Laravel Forge</strong> to work
            that magic for me! On simpler websites Forge also handles deployments, but for larger ones, such as Coeliac
            Sanctuary, they're deployed through <strong>Laravel Envoyer</strong> for zero down-time deployments.
          </p>
        </UsesItem>

        <UsesItem title="Email">
          <p>
            I use <strong>Google Workspaces</strong> to manage email addresses needed for any of my personal websites.
          </p>

          <p>
            For any automatic sending of email, such as transactional or from a campaign is done through <strong>Amazon
            SES</strong>.
          </p>

          <p>
            Email Campaign Management and logging of transactional emails is done through the fantastic <strong>Mailcoach</strong>
            by Spatie.
          </p>
        </UsesItem>

        <UsesItem title="Storage">
          <p>
            Most of my projects just store files in the main filesystem, however on Coeliac Sanctuary all images are
            stored on <strong>Amazon S3</strong>.
          </p>
        </UsesItem>
      </UsesGroup>

      <UsesGroup title="Hardware">
        <UsesItem title="Macbook">
          <p>
            When working on personal projects and anything outside of work I tend to keep it simple, I'm just sat on the
            sofa with my Macbook working away.
          </p>

          <p>
            I have a <strong>2020 16" Macbook pro, 2.3ghz 8-Core i9, 16gb RAM and 1tb SSD.</strong>
          </p>

          <p>
            I have a desk space for when I'm working in my employment, but I try to keep my personal work and employment
            work separate and do not sit at my desk outside of work hours.
          </p>
        </UsesItem>

        <UsesItem title="Phone">
          <p>
            I have been an Android fan since I got my first one in 2012, my current phone is the <strong>Google Pixel 7
            Pro</strong>.
          </p>
        </UsesItem>

        <UsesItem title="Smart Watch">
          <p>
            I have owned a Fitbit device since 2017, most recently was the Versa 2, but when I pre-ordered the new Pixel
            7 Pro prior to release, the free gift was the new <strong>Google Pixel watch</strong>, which also integrates
            perfectly with Fitbit, the only downside is having to charge it daily (I tend to put it on at night before
            bed while I'm reading) - but I've got used to it now!
          </p>
        </UsesItem>
      </UsesGroup>
    </Card>
  </Layout>
</template>
