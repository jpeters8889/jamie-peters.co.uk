<template>
    <div class="z-50 fixed inset-0 w-full h-full bg-black-80 flex justify-center items-center" @click.self="close()">
        <div class="h-auto max-h-3/4 shadow p-2 border-2 border-blue-light w-auto max-w-11/12 rounded-lg bg-blue-900 overflow-y-scroll"
        :class="modalClasses" v-bind:class="small ? 'max-w-modal-small' : 'max-w-modal'">
            <div class="h-full relative">
                <div class="sticky ml-auto top-0 right-0 bg-white p-1 -mt-1 -mr-1 leading-none z-50 rounded border border-black cursor-pointer transition-bg"
                     @click="close()" style="width: 22px;">
                    <font-awesome-icon :icon="['fas', 'times']"></font-awesome-icon>
                </div>
                <div class="h-full w-full bg-white-80 p-2 rounded" style="margin-top: -20px;">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                default: '',
            },
            modalClasses: {
                type: Array|String,
                default: () => {
                    return [];
                },
            },
            small: {
                type: Boolean,
                default: false,
            }
        },

        mounted() {
            document.querySelector('body').classList.add('overflow-hidden');

            this.$root.$on('close-modal', (modal) => {
                if (!modal || modal === this.name) {
                    this.close();
                }
            });
        },

        methods: {
            close() {
                document.querySelector('body').classList.remove('overflow-hidden');
                this.$root.$emit('modal-closed', this.name);
            }
        }
    }
</script>
