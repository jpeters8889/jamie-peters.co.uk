import './bootstrap';
import '../css/app.css';
import {Component, createApp, h} from 'vue';
import {createInertiaApp} from '@inertiajs/vue3';
import {InertiaPage} from '@/types/Core';
import {getTitle} from '@/helpers';
import Layout from "@/Layouts/Layout.vue";

void createInertiaApp({
    title: getTitle,

    progress: {
        color: '#4B5563',
    },

    resolve: async (name) => {
        // @ts-ignore
        const pages: Record<string, () => Promise<() => InertiaPage>> =
            import.meta.glob('./Pages/**/*.vue');

        // @ts-ignore
        const page: InertiaPage = await pages[`./Pages/${name}.vue`]();

        page.default.layout = page.default.layout || (Layout as Component);

        return page;
    },

    setup({ el, App, props, plugin }) {
        createApp({render: () => h(App, props)}).use(plugin).mount(el);
    },
});
