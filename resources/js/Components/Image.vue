<template>
    <div :class="computedClasses">
        <img :src="src" :alt="alt" @click="showModal = true"/>

        <portal to="modal" v-if="zoomable && showModal">
            <modal>
                <div v-if="alt" class="text-center text-sm mb-2 leading-none">{{ alt }}</div>
                <img :src="src" :alt="alt" class="max-w-full max-h-full" />
            </modal>
        </portal>
    </div>
</template>

<script>
    export default {
        props: {
            src: {
                type: String,
                required: true,
            },
            alt: {
                type: String,
                default: '',
            },
            classes: {},
            zoomable: {
                type: Boolean,
                default: () => true,
            }
        },

        data: () => ({
          showModal: false,
        }),

        mounted() {
            this.$root.$on('modal-closed', () => {
               this.showModal = false;
            });
        },

        computed: {
            computedClasses: function () {
                let classes = this.classes;

                if (!Array.isArray(classes)) {
                    classes = classes.split(' ');
                }

                if (this.zoomable) {
                    classes.push('cursor-pointer');
                }

                return classes;
            }
        }
    }
</script>
