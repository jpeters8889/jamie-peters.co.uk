<script setup lang="ts">
import Card from '@/Components/Card.vue';
import Heading from '@/Components/Heading.vue';
</script>

<template>
  <Card>
    <Heading>Speaking</Heading>

    <div class="mx-auto w-full rounded-2xl border border-primary/10 p-4 md:p-8">
      <div class="flex flex-col">
        <div class="flex flex-col justify-between xs:flex-row">
          <div
            class="aspect-video h-fit w-full flex-shrink overflow-hidden rounded-xl border border-primary/10 shadow xs:mr-4 xs:max-w-[200px]"
          >
            <img :src="'/images/speaking/php-stoke.jpg'" />
          </div>
          <div class="flex flex-1 flex-col">
            <div
              class="flex flex-col border-primary/10 sm:flex-row sm:items-end sm:justify-between sm:border-b sm:pb-1"
            >
              <div class="flex flex-col">
                <h2 class="text-xl font-semibold text-primary md:text-2xl">
                  PHP Stoke
                </h2>

                <h3 class="mt-2 font-semibold sm:text-lg md:text-xl">
                  Benefits of writing clean, maintainable code
                </h3>
              </div>

              <small class="font-semibold text-gray-700"> October 2024 </small>
            </div>
          </div>
        </div>
        <p class="prose mt-4">
          In October 2024, I gave a talk at the PHP Stoke meetup on writing
          clean, maintainable code - covering everything from variable naming
          and early returns to code style, readability, and practical
          refactoring tips. The event was organised by Laravel’s Head of
          Engineering, James Brooks.
        </p>
      </div>
    </div>

    <div class="mx-auto mt-8 max-w-xl rounded-xl bg-primary/10 p-4">
      <p class="prose">
        I am interested in speaking at other local Laravel and/or PHP meetups in
        the UK, please
        <a href="mailto:jamie@jamie-peters.co.uk">get in touch</a> if you want
        to know more.
      </p>
    </div>
  </Card>
</template>
