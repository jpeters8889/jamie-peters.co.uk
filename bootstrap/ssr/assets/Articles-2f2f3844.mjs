import { defineComponent, computed, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "./Card-f006e24d.mjs";
import { Head, Link } from "@inertiajs/vue3";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Articles",
  __ssrInlineRender: true,
  props: {
    "articles": {
      required: true,
      type: Object
    }
  },
  setup(__props) {
    const props = __props;
    dayjs.extend(advancedFormat);
    const date = (date2) => {
      return dayjs(date2).format("Do MMMM YYYY");
    };
    const previousPage = computed(() => props.articles.current_page > 1 ? props.articles.current_page - 1 : null);
    const nextPage = computed(() => props.articles.current_page < props.articles.last_page ? props.articles.current_page + 1 : null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Articles</title><meta property="og:type" content="article"${_scopeId}><meta property="og:locale" content="en_GB"${_scopeId}><meta property="og:site_name" content="Jamie Peters - Laravel Developer"${_scopeId}><meta property="og:description" content="Check out my articles"${_scopeId}><meta property="og:title" content="Jamie Peters - Articles"${_scopeId}><meta property="og:image" content="https://jamie-peters.s3.eu-west-2.amazonaws.com/og-image.jpg"${_scopeId}><meta property="og:image:type" content="image/jpeg"${_scopeId}><meta property="og:url" content="https://jamie-peters.co.uk/articless"${_scopeId}><meta name="twitter:card" content="summary_large_image"${_scopeId}><meta name="twitter:description" content="Check out my articles"${_scopeId}><meta name="twitter:title" content="Jamie Peters - Articles"${_scopeId}><meta name="twitter:site" content="@jpeters8889"${_scopeId}><meta name="twitter:domain" content="Jamie Peters - Laravel Developer"${_scopeId}><meta name="twitter:image:src" content="https://jamie-peters.s3.eu-west-2.amazonaws.com/og-image.jpg"${_scopeId}><meta name="twitter:creator" content="@jpeters8889"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Articles"),
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
                content: "Check out my articles"
              }),
              createVNode("meta", {
                property: "og:title",
                content: "Jamie Peters - Articles"
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
                content: "https://jamie-peters.co.uk/articless"
              }),
              createVNode("meta", {
                name: "twitter:card",
                content: "summary_large_image"
              }),
              createVNode("meta", {
                name: "twitter:description",
                content: "Check out my articles"
              }),
              createVNode("meta", {
                name: "twitter:title",
                content: "Jamie Peters - Articles"
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
            _push2(`<!--[-->`);
            ssrRenderList(__props.articles.data, (article) => {
              _push2(ssrRenderComponent(unref(Link), {
                key: article.slug,
                href: `/articles/${article.slug}`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$2, { diminished: "" }, {
                      title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(article.title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(article.title), 1)
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<p class="text-xs text-primary mt-0"${_scopeId3}>${ssrInterpolate(date(article.created_at))}</p><p class="m-0"${_scopeId3}>${ssrInterpolate(article.description)}</p>`);
                          _push4(ssrRenderComponent(unref(Link), {
                            href: `/articles/${article.slug}`,
                            class: "text-primary font-semibold hover:text-black hover:underline"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Read more...`);
                              } else {
                                return [
                                  createTextVNode("Read more...")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode("p", {
                              class: "text-xs text-primary mt-0",
                              textContent: toDisplayString(date(article.created_at))
                            }, null, 8, ["textContent"]),
                            createVNode("p", {
                              textContent: toDisplayString(article.description),
                              class: "m-0"
                            }, null, 8, ["textContent"]),
                            createVNode(unref(Link), {
                              href: `/articles/${article.slug}`,
                              class: "text-primary font-semibold hover:text-black hover:underline"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Read more...")
                              ]),
                              _: 2
                            }, 1032, ["href"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$2, { diminished: "" }, {
                        title: withCtx(() => [
                          createTextVNode(toDisplayString(article.title), 1)
                        ]),
                        default: withCtx(() => [
                          createVNode("p", {
                            class: "text-xs text-primary mt-0",
                            textContent: toDisplayString(date(article.created_at))
                          }, null, 8, ["textContent"]),
                          createVNode("p", {
                            textContent: toDisplayString(article.description),
                            class: "m-0"
                          }, null, 8, ["textContent"]),
                          createVNode(unref(Link), {
                            href: `/articles/${article.slug}`,
                            class: "text-primary font-semibold hover:text-black hover:underline"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Read more...")
                            ]),
                            _: 2
                          }, 1032, ["href"])
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--><ul class="flex justify-center items-center space-x-5"${_scopeId}>`);
            if (unref(previousPage)) {
              _push2(`<li${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: `/articles?page=${unref(previousPage)}`,
                only: ["articles"]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Previous`);
                  } else {
                    return [
                      createTextVNode("Previous")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<li${_scopeId}> Page <strong${_scopeId}>${ssrInterpolate(__props.articles.current_page)}</strong> of <strong${_scopeId}>${ssrInterpolate(__props.articles.last_page)}</strong></li>`);
            if (unref(nextPage)) {
              _push2(`<li${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: `/articles?page=${unref(nextPage)}`,
                only: ["articles"]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Next`);
                  } else {
                    return [
                      createTextVNode("Next")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</ul>`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.articles.data, (article) => {
                return openBlock(), createBlock(unref(Link), {
                  key: article.slug,
                  href: `/articles/${article.slug}`
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$2, { diminished: "" }, {
                      title: withCtx(() => [
                        createTextVNode(toDisplayString(article.title), 1)
                      ]),
                      default: withCtx(() => [
                        createVNode("p", {
                          class: "text-xs text-primary mt-0",
                          textContent: toDisplayString(date(article.created_at))
                        }, null, 8, ["textContent"]),
                        createVNode("p", {
                          textContent: toDisplayString(article.description),
                          class: "m-0"
                        }, null, 8, ["textContent"]),
                        createVNode(unref(Link), {
                          href: `/articles/${article.slug}`,
                          class: "text-primary font-semibold hover:text-black hover:underline"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Read more...")
                          ]),
                          _: 2
                        }, 1032, ["href"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["href"]);
              }), 128)),
              createVNode("ul", { class: "flex justify-center items-center space-x-5" }, [
                unref(previousPage) ? (openBlock(), createBlock("li", { key: 0 }, [
                  createVNode(unref(Link), {
                    href: `/articles?page=${unref(previousPage)}`,
                    only: ["articles"]
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Previous")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])) : createCommentVNode("", true),
                createVNode("li", null, [
                  createTextVNode(" Page "),
                  createVNode("strong", null, toDisplayString(__props.articles.current_page), 1),
                  createTextVNode(" of "),
                  createVNode("strong", null, toDisplayString(__props.articles.last_page), 1)
                ]),
                unref(nextPage) ? (openBlock(), createBlock("li", { key: 1 }, [
                  createVNode(unref(Link), {
                    href: `/articles?page=${unref(nextPage)}`,
                    only: ["articles"]
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Next")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Articles.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
