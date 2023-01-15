<script setup lang="ts">
import {defineProps, defineEmits, onMounted} from "vue";

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  modalClasses: {
    type: [Array, String],
    default: () => {
      return [];
    },
  },
  small: {
    type: Boolean,
    default: false,
  }
});

const emit = defineEmits(['close']);

onMounted(() => {
  document.querySelector('body').classList.add('overflow-hidden');
});

const close = () => {
  document.querySelector('body').classList.remove('overflow-hidden');

  emit('close', props.name);
};
</script>

<template>
    <div
        class="z-50 fixed inset-0 w-full h-full bg-black/80 flex justify-center items-center"
        @click.self="close()"
    >
        <div
            class="h-auto max-h-3/4 shadow w-auto rounded-lg overflow-y-scroll"
            :class="modalClasses"
            v-bind:class="small ? 'max-w-2xl' : 'max-w-5xl'"
        >
            <div class="h-full relative h-full w-full bg-white/80 rounded-lg overflow-hidden">
                <div
                    class="absolute w-6 h-6 top-3 right-3 bg-white/20 hover:bg-white/80 leading-none z-50 rounded cursor-pointer transition"
                    @click="close()"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>

                <slot />
            </div>
        </div>
    </div>
</template>
