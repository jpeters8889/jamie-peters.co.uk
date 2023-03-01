import { defineComponent, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "./Card-f006e24d.mjs";
import { Head, Link } from "@inertiajs/vue3";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>About Me</title><meta property="og:type" content="article"${_scopeId}><meta property="og:locale" content="en_GB"${_scopeId}><meta property="og:site_name" content="Jamie Peters - Laravel Developer"${_scopeId}><meta property="og:description" content="Read all about me"${_scopeId}><meta property="og:title" content="Jamie Peters - About Me"${_scopeId}><meta property="og:image" content="https://jamie-peters.s3.eu-west-2.amazonaws.com/og-image.jpg"${_scopeId}><meta property="og:image:type" content="image/jpeg"${_scopeId}><meta property="og:url" content="https://jamie-peters.co.uk/about"${_scopeId}><meta name="twitter:card" content="summary_large_image"${_scopeId}><meta name="twitter:description" content="Read all about me"${_scopeId}><meta name="twitter:title" content="Jamie Peters - About Me"${_scopeId}><meta name="twitter:site" content="@jpeters8889"${_scopeId}><meta name="twitter:domain" content="Jamie Peters - Laravel Developer"${_scopeId}><meta name="twitter:image:src" content="https://jamie-peters.s3.eu-west-2.amazonaws.com/og-image.jpg"${_scopeId}><meta name="twitter:creator" content="@jpeters8889"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "About Me"),
              createVNode("meta", {
                property: "og:type",
                content: "article"
              }),
              createVNode("meta", {
                property: "og:locale",
                content: "en_GB"
              }),
              createVNode("meta", {
                property: "og:site_name",
                content: "Jamie Peters - Laravel Developer"
              }),
              createVNode("meta", {
                property: "og:description",
                content: "Read all about me"
              }),
              createVNode("meta", {
                property: "og:title",
                content: "Jamie Peters - About Me"
              }),
              createVNode("meta", {
                property: "og:image",
                content: "https://jamie-peters.s3.eu-west-2.amazonaws.com/og-image.jpg"
              }),
              createVNode("meta", {
                property: "og:image:type",
                content: "image/jpeg"
              }),
              createVNode("meta", {
                property: "og:url",
                content: "https://jamie-peters.co.uk/about"
              }),
              createVNode("meta", {
                name: "twitter:card",
                content: "summary_large_image"
              }),
              createVNode("meta", {
                name: "twitter:description",
                content: "Read all about me"
              }),
              createVNode("meta", {
                name: "twitter:title",
                content: "Jamie Peters - About Me"
              }),
              createVNode("meta", {
                name: "twitter:site",
                content: "@jpeters8889"
              }),
              createVNode("meta", {
                name: "twitter:domain",
                content: "Jamie Peters - Laravel Developer"
              }),
              createVNode("meta", {
                name: "twitter:image:src",
                content: "https://jamie-peters.s3.eu-west-2.amazonaws.com/og-image.jpg"
              }),
              createVNode("meta", {
                name: "twitter:creator",
                content: "@jpeters8889"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, null, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`About Me`);
                } else {
                  return [
                    createTextVNode("About Me")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p${_scopeId2}> Extensive knowledge of the Laravel PHP Framework and writing Laravel Applications in a test driven approach, I have been developing regularly in PHP for over 17 years, and Laravel for 4 years, coupled with HTML, MySQL, SCSS/CSS, Tailwind CSS, JavaScript/Typescript, and VueJS </p><p${_scopeId2}> All of my personal projects are hosted on Digital Ocean with the aid of Laravel Forge, and some also utilise Laravel Envoyer for deployment, and Laravel Horizon for queue management. </p><p${_scopeId2}> My preferred tech stack is Laravel, Inertia, Vue and Tailwind, and my IDE of choice is PhpStorm. You can read more about my tech stack and setup over on my `);
                  _push3(ssrRenderComponent(unref(Link), { href: "/uses" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Uses`);
                      } else {
                        return [
                          createTextVNode("Uses")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(` page. </p><p${_scopeId2}> I have a <a href="https://laracasts.com/@jpeters8889" target="_blank"${_scopeId2}>Laracasts</a> forever subscription and regularly access the website and watch all new videos available. </p><p${_scopeId2}> I have some small open source contributions to a few open source packages, including some by Spatie and Beyond Code. </p>`);
                } else {
                  return [
                    createVNode("p", null, " Extensive knowledge of the Laravel PHP Framework and writing Laravel Applications in a test driven approach, I have been developing regularly in PHP for over 17 years, and Laravel for 4 years, coupled with HTML, MySQL, SCSS/CSS, Tailwind CSS, JavaScript/Typescript, and VueJS "),
                    createVNode("p", null, " All of my personal projects are hosted on Digital Ocean with the aid of Laravel Forge, and some also utilise Laravel Envoyer for deployment, and Laravel Horizon for queue management. "),
                    createVNode("p", null, [
                      createTextVNode(" My preferred tech stack is Laravel, Inertia, Vue and Tailwind, and my IDE of choice is PhpStorm. You can read more about my tech stack and setup over on my "),
                      createVNode(unref(Link), { href: "/uses" }, {
                        default: withCtx(() => [
                          createTextVNode("Uses")
                        ]),
                        _: 1
                      }),
                      createTextVNode(" page. ")
                    ]),
                    createVNode("p", null, [
                      createTextVNode(" I have a "),
                      createVNode("a", {
                        href: "https://laracasts.com/@jpeters8889",
                        target: "_blank"
                      }, "Laracasts"),
                      createTextVNode(" forever subscription and regularly access the website and watch all new videos available. ")
                    ]),
                    createVNode("p", null, " I have some small open source contributions to a few open source packages, including some by Spatie and Beyond Code. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, null, {
                title: withCtx(() => [
                  createTextVNode("About Me")
                ]),
                default: withCtx(() => [
                  createVNode("p", null, " Extensive knowledge of the Laravel PHP Framework and writing Laravel Applications in a test driven approach, I have been developing regularly in PHP for over 17 years, and Laravel for 4 years, coupled with HTML, MySQL, SCSS/CSS, Tailwind CSS, JavaScript/Typescript, and VueJS "),
                  createVNode("p", null, " All of my personal projects are hosted on Digital Ocean with the aid of Laravel Forge, and some also utilise Laravel Envoyer for deployment, and Laravel Horizon for queue management. "),
                  createVNode("p", null, [
                    createTextVNode(" My preferred tech stack is Laravel, Inertia, Vue and Tailwind, and my IDE of choice is PhpStorm. You can read more about my tech stack and setup over on my "),
                    createVNode(unref(Link), { href: "/uses" }, {
                      default: withCtx(() => [
                        createTextVNode("Uses")
                      ]),
                      _: 1
                    }),
                    createTextVNode(" page. ")
                  ]),
                  createVNode("p", null, [
                    createTextVNode(" I have a "),
                    createVNode("a", {
                      href: "https://laracasts.com/@jpeters8889",
                      target: "_blank"
                    }, "Laracasts"),
                    createTextVNode(" forever subscription and regularly access the website and watch all new videos available. ")
                  ]),
                  createVNode("p", null, " I have some small open source contributions to a few open source packages, including some by Spatie and Beyond Code. ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
