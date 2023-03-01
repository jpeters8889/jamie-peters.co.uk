import { createSSRApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const app = "";
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    // @ts-ignore
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, /* @__PURE__ */ Object.assign({ "./Pages/About.vue": () => import("./assets/About-b7649241.mjs"), "./Pages/Article.vue": () => import("./assets/Article-760e9252.mjs"), "./Pages/Articles.vue": () => import("./assets/Articles-2f2f3844.mjs"), "./Pages/Home.vue": () => import("./assets/Home-26023ce0.mjs"), "./Pages/Projects.vue": () => import("./assets/Projects-3e243693.mjs"), "./Pages/Uses.vue": () => import("./assets/Uses-8981c62a.mjs") })),
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h(App, props) }).use(plugin);
    }
  })
);
