import { defineComponent, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "./Card-f006e24d.mjs";
import { Head, Link } from "@inertiajs/vue3";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Article",
  __ssrInlineRender: true,
  props: {
    "article": {
      required: true,
      type: Object
    }
  },
  setup(__props) {
    dayjs.extend(advancedFormat);
    const date = (date2) => {
      return dayjs(date2).format("Do MMMM YYYY");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>${ssrInterpolate(__props.article.title)} - Articles</title><meta property="og:type" content="article"${_scopeId}><meta property="og:locale" content="en_GB"${_scopeId}><meta property="og:site_name" content="Jamie Peters - Laravel Developer"${_scopeId}><meta property="og:description"${ssrRenderAttr("content", __props.article.description)}${_scopeId}><meta property="og:title"${ssrRenderAttr("content", `${__props.article.title} - Articles`)}${_scopeId}><meta property="og:image"${ssrRenderAttr("content", __props.article.ogImage)}${_scopeId}><meta property="og:image:type" content="image/jpeg"${_scopeId}><meta property="og:url"${ssrRenderAttr("content", `https://jamie-peters.co.uk/articles/${__props.article.slug}`)}${_scopeId}><meta name="twitter:card" content="summary_large_image"${_scopeId}><meta name="twitter:description"${ssrRenderAttr("content", __props.article.description)}${_scopeId}><meta name="twitter:title"${ssrRenderAttr("content", `${__props.article.title} - Articles`)}${_scopeId}><meta name="twitter:site" content="@jpeters8889"${_scopeId}><meta name="twitter:domain" content="Jamie Peters - Laravel Developer"${_scopeId}><meta name="twitter:image:src"${ssrRenderAttr("content", __props.article.ogImage)}${_scopeId}><meta name="twitter:creator" content="@jpeters8889"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, toDisplayString(__props.article.title) + " - Articles", 1),
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
                content: __props.article.description
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:title",
                content: `${__props.article.title} - Articles`
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:image",
                content: __props.article.ogImage
              }, null, 8, ["content"]),
              createVNode("meta", {
                property: "og:image:type",
                content: "image/jpeg"
              }),
              createVNode("meta", {
                property: "og:url",
                content: `https://jamie-peters.co.uk/articles/${__props.article.slug}`
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:card",
                content: "summary_large_image"
              }),
              createVNode("meta", {
                name: "twitter:description",
                content: __props.article.description
              }, null, 8, ["content"]),
              createVNode("meta", {
                name: "twitter:title",
                content: `${__props.article.title} - Articles`
              }, null, 8, ["content"]),
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
                content: __props.article.ogImage
              }, null, 8, ["content"]),
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
                  _push3(`${ssrInterpolate(__props.article.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.article.title), 1)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}><p class="text-sm font-semibold text-primary mt-0"${_scopeId2}>${ssrInterpolate(date(__props.article.created_at))}</p></div><div${_scopeId2}><p${_scopeId2}>${__props.article.body}</p></div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Link), {
                    href: "/articles",
                    class: "text-sm"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Back to all Articles`);
                      } else {
                        return [
                          createTextVNode("Back to all Articles")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("p", {
                        class: "text-sm font-semibold text-primary mt-0",
                        textContent: toDisplayString(date(__props.article.created_at))
                      }, null, 8, ["textContent"])
                    ]),
                    createVNode("div", null, [
                      createVNode("p", {
                        innerHTML: __props.article.body
                      }, null, 8, ["innerHTML"])
                    ]),
                    createVNode("div", null, [
                      createVNode(unref(Link), {
                        href: "/articles",
                        class: "text-sm"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Back to all Articles")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, null, {
                title: withCtx(() => [
                  createTextVNode(toDisplayString(__props.article.title), 1)
                ]),
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("p", {
                      class: "text-sm font-semibold text-primary mt-0",
                      textContent: toDisplayString(date(__props.article.created_at))
                    }, null, 8, ["textContent"])
                  ]),
                  createVNode("div", null, [
                    createVNode("p", {
                      innerHTML: __props.article.body
                    }, null, 8, ["innerHTML"])
                  ]),
                  createVNode("div", null, [
                    createVNode(unref(Link), {
                      href: "/articles",
                      class: "text-sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Back to all Articles")
                      ]),
                      _: 1
                    })
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Article.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
