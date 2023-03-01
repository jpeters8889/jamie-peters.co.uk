import { defineComponent, resolveComponent, withCtx, createVNode, createTextVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "./Card-f006e24d.mjs";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat.js";
import { Link } from "@inertiajs/vue3";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Home",
  __ssrInlineRender: true,
  props: {
    "articles": {
      required: true,
      type: Array
    }
  },
  setup(__props) {
    dayjs.extend(advancedFormat);
    const date = (date2) => {
      return dayjs(date2).format("Do MMMM YYYY");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Jamie Peters - Laravel / PHP Developer</title><meta property="og:type" content="article"${_scopeId}><meta property="og:locale" content="en_GB"${_scopeId}><meta property="og:site_name" content="Jamie Peters - Laravel Developer"${_scopeId}><meta property="og:description" content="Welcome to my personal website"${_scopeId}><meta property="og:title" content="Jamie Peters - Laravel / PHP Developer"${_scopeId}><meta property="og:image" content="https://jamie-peters.s3.eu-west-2.amazonaws.com/og-image.jpg"${_scopeId}><meta property="og:image:type" content="image/jpeg"${_scopeId}><meta property="og:url" content="https://jamie-peters.co.uk"${_scopeId}><meta name="twitter:card" content="summary_large_image"${_scopeId}><meta name="twitter:description" content="Welcome to my personal website"${_scopeId}><meta name="twitter:title" content="Jamie Peters - Laravel / PHP Developer"${_scopeId}><meta name="twitter:site" content="@jpeters8889"${_scopeId}><meta name="twitter:domain" content="Jamie Peters - Laravel Developer"${_scopeId}><meta name="twitter:image:src" content="https://jamie-peters.s3.eu-west-2.amazonaws.com/og-image.jpg"${_scopeId}><meta name="twitter:creator" content="@jpeters8889"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Jamie Peters - Laravel / PHP Developer"),
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
                content: "Welcome to my personal website"
              }),
              createVNode("meta", {
                property: "og:title",
                content: "Jamie Peters - Laravel / PHP Developer"
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
                content: "https://jamie-peters.co.uk"
              }),
              createVNode("meta", {
                name: "twitter:card",
                content: "summary_large_image"
              }),
              createVNode("meta", {
                name: "twitter:description",
                content: "Welcome to my personal website"
              }),
              createVNode("meta", {
                name: "twitter:title",
                content: "Jamie Peters - Laravel / PHP Developer"
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
            _push2(`<div class="flex flex-col space-y-4 xl:flex-row xl:space-y-0"${_scopeId}><div class="flex-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, null, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Welcome`);
                } else {
                  return [
                    createTextVNode("Welcome")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img src="/images/me.jpg" alt="Jamie Peters - Laravel / PHP Developer" class="xs:hidden max-w-[15rem] m-0 mx-auto my-2"${_scopeId2}><p${_scopeId2}> Thank you for taking the time to visit my personal website, my name is Jamie Peters and I am a passionate, committed and enthusiastic web developer with over 18 years experience in web design and development and I am an enthusiast of the <a href="https://www.laravel.com" target="_blank"${_scopeId2}>Laravel PHP Framework</a>, along with <a href="https://inertiajs.com/" target="_blank"${_scopeId2}>Inertia</a>, <a href="https://vuejs.org/" target="_blank"${_scopeId2}>VueJS</a>, and <a href="https://tailwindcss.com/" target="_blank"${_scopeId2}>Tailwind CSS</a>. </p><p${_scopeId2}>I am originally from South Yorkshire, but now live in South Cheshire.</p>`);
                } else {
                  return [
                    createVNode("img", {
                      src: "/images/me.jpg",
                      alt: "Jamie Peters - Laravel / PHP Developer",
                      class: "xs:hidden max-w-[15rem] m-0 mx-auto my-2"
                    }),
                    createVNode("p", null, [
                      createTextVNode(" Thank you for taking the time to visit my personal website, my name is Jamie Peters and I am a passionate, committed and enthusiastic web developer with over 18 years experience in web design and development and I am an enthusiast of the "),
                      createVNode("a", {
                        href: "https://www.laravel.com",
                        target: "_blank"
                      }, "Laravel PHP Framework"),
                      createTextVNode(", along with "),
                      createVNode("a", {
                        href: "https://inertiajs.com/",
                        target: "_blank"
                      }, "Inertia"),
                      createTextVNode(", "),
                      createVNode("a", {
                        href: "https://vuejs.org/",
                        target: "_blank"
                      }, "VueJS"),
                      createTextVNode(", and "),
                      createVNode("a", {
                        href: "https://tailwindcss.com/",
                        target: "_blank"
                      }, "Tailwind CSS"),
                      createTextVNode(". ")
                    ]),
                    createVNode("p", null, "I am originally from South Yorkshire, but now live in South Cheshire.")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, null, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`My Key Skills`);
                } else {
                  return [
                    createTextVNode("My Key Skills")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<ul${_scopeId2}><li${_scopeId2}> Extensive knowledge of Laravel and PHP, including <ul${_scopeId2}><li${_scopeId2}>Test Driven Development using PHP Unit</li><li${_scopeId2}>Domain Driven Development/Modular Development</li><li${_scopeId2}>Strict Coding Standards with PHP CS Fixer and PHPStan/Larastan</li><li${_scopeId2}>Experience with Vue, Inertia and Tailwind CSS</li></ul></li><li${_scopeId2}>Experience using Laravel Valet, Laravel Forge, Laravel Envoyer, Digital Ocean, Amazon S3 and Amazon SES </li></ul>`);
                } else {
                  return [
                    createVNode("ul", null, [
                      createVNode("li", null, [
                        createTextVNode(" Extensive knowledge of Laravel and PHP, including "),
                        createVNode("ul", null, [
                          createVNode("li", null, "Test Driven Development using PHP Unit"),
                          createVNode("li", null, "Domain Driven Development/Modular Development"),
                          createVNode("li", null, "Strict Coding Standards with PHP CS Fixer and PHPStan/Larastan"),
                          createVNode("li", null, "Experience with Vue, Inertia and Tailwind CSS")
                        ])
                      ]),
                      createVNode("li", null, "Experience using Laravel Valet, Laravel Forge, Laravel Envoyer, Digital Ocean, Amazon S3 and Amazon SES ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="xl:w-1/3 xl:max-w-24"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, null, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Latest Articles`);
                } else {
                  return [
                    createTextVNode("Latest Articles")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<ul class="list-none m-0 p-0"${_scopeId2}><!--[-->`);
                  ssrRenderList(__props.articles, (article) => {
                    _push3(`<li class="p-0 py-2 border-b border-primary/30 last:border-b-0"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Link), {
                      href: `/articles/${article.slug}`
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(article.title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(article.title), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<p class="text-xs mt-0 mb-2"${_scopeId2}>${ssrInterpolate(date(article.created_at))}</p><p class="text-sm m-0"${_scopeId2}>${ssrInterpolate(article.description)}</p>`);
                    _push3(ssrRenderComponent(unref(Link), {
                      href: `/articles/${article.slug}`,
                      class: "text-sm"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Read more...`);
                        } else {
                          return [
                            createTextVNode("Read more...")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</li>`);
                  });
                  _push3(`<!--]--></ul>`);
                  _push3(ssrRenderComponent(unref(Link), { href: "/articles" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`View all Articles...`);
                      } else {
                        return [
                          createTextVNode("View all Articles...")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("ul", { class: "list-none m-0 p-0" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.articles, (article) => {
                        return openBlock(), createBlock("li", {
                          key: article.slug,
                          class: "p-0 py-2 border-b border-primary/30 last:border-b-0"
                        }, [
                          createVNode(unref(Link), {
                            href: `/articles/${article.slug}`
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(article.title), 1)
                            ]),
                            _: 2
                          }, 1032, ["href"]),
                          createVNode("p", {
                            class: "text-xs mt-0 mb-2",
                            textContent: toDisplayString(date(article.created_at))
                          }, null, 8, ["textContent"]),
                          createVNode("p", {
                            class: "text-sm m-0",
                            textContent: toDisplayString(article.description)
                          }, null, 8, ["textContent"]),
                          createVNode(unref(Link), {
                            href: `/articles/${article.slug}`,
                            class: "text-sm"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Read more...")
                            ]),
                            _: 2
                          }, 1032, ["href"])
                        ]);
                      }), 128))
                    ]),
                    createVNode(unref(Link), { href: "/articles" }, {
                      default: withCtx(() => [
                        createTextVNode("View all Articles...")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col space-y-4 xl:flex-row xl:space-y-0" }, [
                createVNode("div", { class: "flex-1" }, [
                  createVNode(_sfc_main$2, null, {
                    title: withCtx(() => [
                      createTextVNode("Welcome")
                    ]),
                    default: withCtx(() => [
                      createVNode("img", {
                        src: "/images/me.jpg",
                        alt: "Jamie Peters - Laravel / PHP Developer",
                        class: "xs:hidden max-w-[15rem] m-0 mx-auto my-2"
                      }),
                      createVNode("p", null, [
                        createTextVNode(" Thank you for taking the time to visit my personal website, my name is Jamie Peters and I am a passionate, committed and enthusiastic web developer with over 18 years experience in web design and development and I am an enthusiast of the "),
                        createVNode("a", {
                          href: "https://www.laravel.com",
                          target: "_blank"
                        }, "Laravel PHP Framework"),
                        createTextVNode(", along with "),
                        createVNode("a", {
                          href: "https://inertiajs.com/",
                          target: "_blank"
                        }, "Inertia"),
                        createTextVNode(", "),
                        createVNode("a", {
                          href: "https://vuejs.org/",
                          target: "_blank"
                        }, "VueJS"),
                        createTextVNode(", and "),
                        createVNode("a", {
                          href: "https://tailwindcss.com/",
                          target: "_blank"
                        }, "Tailwind CSS"),
                        createTextVNode(". ")
                      ]),
                      createVNode("p", null, "I am originally from South Yorkshire, but now live in South Cheshire.")
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$2, null, {
                    title: withCtx(() => [
                      createTextVNode("My Key Skills")
                    ]),
                    default: withCtx(() => [
                      createVNode("ul", null, [
                        createVNode("li", null, [
                          createTextVNode(" Extensive knowledge of Laravel and PHP, including "),
                          createVNode("ul", null, [
                            createVNode("li", null, "Test Driven Development using PHP Unit"),
                            createVNode("li", null, "Domain Driven Development/Modular Development"),
                            createVNode("li", null, "Strict Coding Standards with PHP CS Fixer and PHPStan/Larastan"),
                            createVNode("li", null, "Experience with Vue, Inertia and Tailwind CSS")
                          ])
                        ]),
                        createVNode("li", null, "Experience using Laravel Valet, Laravel Forge, Laravel Envoyer, Digital Ocean, Amazon S3 and Amazon SES ")
                      ])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "xl:w-1/3 xl:max-w-24" }, [
                  createVNode(_sfc_main$2, null, {
                    title: withCtx(() => [
                      createTextVNode("Latest Articles")
                    ]),
                    default: withCtx(() => [
                      createVNode("ul", { class: "list-none m-0 p-0" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.articles, (article) => {
                          return openBlock(), createBlock("li", {
                            key: article.slug,
                            class: "p-0 py-2 border-b border-primary/30 last:border-b-0"
                          }, [
                            createVNode(unref(Link), {
                              href: `/articles/${article.slug}`
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(article.title), 1)
                              ]),
                              _: 2
                            }, 1032, ["href"]),
                            createVNode("p", {
                              class: "text-xs mt-0 mb-2",
                              textContent: toDisplayString(date(article.created_at))
                            }, null, 8, ["textContent"]),
                            createVNode("p", {
                              class: "text-sm m-0",
                              textContent: toDisplayString(article.description)
                            }, null, 8, ["textContent"]),
                            createVNode(unref(Link), {
                              href: `/articles/${article.slug}`,
                              class: "text-sm"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Read more...")
                              ]),
                              _: 2
                            }, 1032, ["href"])
                          ]);
                        }), 128))
                      ]),
                      createVNode(unref(Link), { href: "/articles" }, {
                        default: withCtx(() => [
                          createTextVNode("View all Articles...")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
