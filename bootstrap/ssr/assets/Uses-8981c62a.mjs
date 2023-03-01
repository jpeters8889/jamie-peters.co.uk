import { defineComponent, useSSRContext, mergeProps, unref, withCtx, createVNode, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$3, a as _sfc_main$4 } from "./Card-f006e24d.mjs";
import { Head } from "@inertiajs/vue3";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "UsesGroup",
  __ssrInlineRender: true,
  props: {
    title: {
      required: true,
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="m-0 mb-3 text-primary font-semibold text-xl">${ssrInterpolate(__props.title)}</h2><div class="flex"><div class="mx-4 bg-primary w-0.5 lg:mr-6"></div><div class="flex-col">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UsesGroup.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UsesItem",
  __ssrInlineRender: true,
  props: {
    title: {
      required: true,
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-1" }, _attrs))}><h3 class="text-primary font-semibold text-lg m-0">${ssrInterpolate(__props.title)}</h3>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UsesItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Uses",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>My Set Up</title><meta property="og:type" content="article"${_scopeId}><meta property="og:locale" content="en_GB"${_scopeId}><meta property="og:site_name" content="Jamie Peters - Laravel Developer"${_scopeId}><meta property="og:description" content="Check out all the tools I use"${_scopeId}><meta property="og:title" content="Jamie Peters - My Set Up"${_scopeId}><meta property="og:image" content="https://jamie-peters.s3.eu-west-2.amazonaws.com/og-image.jpg"${_scopeId}><meta property="og:image:type" content="image/jpeg"${_scopeId}><meta property="og:url" content="https://jamie-peters.co.uk/uses"${_scopeId}><meta name="twitter:card" content="summary_large_image"${_scopeId}><meta name="twitter:description" content="Check out all the tools I use"${_scopeId}><meta name="twitter:title" content="Jamie Peters - My Set Up"${_scopeId}><meta name="twitter:site" content="@jpeters8889"${_scopeId}><meta name="twitter:domain" content="Jamie Peters - Laravel Developer"${_scopeId}><meta name="twitter:image:src" content="https://jamie-peters.s3.eu-west-2.amazonaws.com/og-image.jpg"${_scopeId}><meta name="twitter:creator" content="@jpeters8889"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "My Set Up"),
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
                content: "Check out all the tools I use"
              }),
              createVNode("meta", {
                property: "og:title",
                content: "Jamie Peters - My Set Up"
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
                content: "https://jamie-peters.co.uk/uses"
              }),
              createVNode("meta", {
                name: "twitter:card",
                content: "summary_large_image"
              }),
              createVNode("meta", {
                name: "twitter:description",
                content: "Check out all the tools I use"
              }),
              createVNode("meta", {
                name: "twitter:title",
                content: "Jamie Peters - My Set Up"
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
      _push(ssrRenderComponent(_sfc_main$3, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, null, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`My Setup`);
                } else {
                  return [
                    createTextVNode("My Setup")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p${_scopeId2}> Inspired by the developers I follow on Twitter and admire, I&#39;d thought I&#39;d put together my own &#39;uses&#39; / setup page, though at least hardware wise I work a lot simpler than most, sticking to just using my Mac on its own outside of my employment! </p>`);
                  _push3(ssrRenderComponent(_sfc_main$2, { title: "Software" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$1, { title: "IDE" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p${_scopeId4}><strong${_scopeId4}>PhpStorm</strong> has being my IDE of choice since 2014, for a long time I just used it with the default dark theme and configuration, however in the past couple of years I have customized it a little more. </p><p${_scopeId4}> I use the <strong${_scopeId4}>Material Theme UI</strong> plugin and the <strong${_scopeId4}>Atom One Dark</strong> theme, I have a lot of the built in toolbars disabled, but I still have a couple open, and I prefer working with the tabs visible, I have tried it a few times with them disabled, but I usually end up missing them and turning them back on! I usually work with the side bar open too with the file browser, unless I have the workspace split with two files open at once. </p>`);
                            } else {
                              return [
                                createVNode("p", null, [
                                  createVNode("strong", null, "PhpStorm"),
                                  createTextVNode(" has being my IDE of choice since 2014, for a long time I just used it with the default dark theme and configuration, however in the past couple of years I have customized it a little more. ")
                                ]),
                                createVNode("p", null, [
                                  createTextVNode(" I use the "),
                                  createVNode("strong", null, "Material Theme UI"),
                                  createTextVNode(" plugin and the "),
                                  createVNode("strong", null, "Atom One Dark"),
                                  createTextVNode(" theme, I have a lot of the built in toolbars disabled, but I still have a couple open, and I prefer working with the tabs visible, I have tried it a few times with them disabled, but I usually end up missing them and turning them back on! I usually work with the side bar open too with the file browser, unless I have the workspace split with two files open at once. ")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$1, { title: "Terminal" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p${_scopeId4}> I am a fan of <strong${_scopeId4}>iTerm</strong> used with <strong${_scopeId4}>Z Shell</strong> and <strong${_scopeId4}>Oh My Zsh</strong>, I have a few plugins installed (Which I really need to document more!) and several aliases </p>`);
                            } else {
                              return [
                                createVNode("p", null, [
                                  createTextVNode(" I am a fan of "),
                                  createVNode("strong", null, "iTerm"),
                                  createTextVNode(" used with "),
                                  createVNode("strong", null, "Z Shell"),
                                  createTextVNode(" and "),
                                  createVNode("strong", null, "Oh My Zsh"),
                                  createTextVNode(", I have a few plugins installed (Which I really need to document more!) and several aliases ")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$1, { title: "Database" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p${_scopeId4}> I use <strong${_scopeId4}>SequelAce</strong> for managing and connecting to MySQL Databases. </p>`);
                            } else {
                              return [
                                createVNode("p", null, [
                                  createTextVNode(" I use "),
                                  createVNode("strong", null, "SequelAce"),
                                  createTextVNode(" for managing and connecting to MySQL Databases. ")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$1, { title: "Local Development" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p${_scopeId4}> I use <strong${_scopeId4}>Laravel Valet</strong> for all local development work, it&#39;s just so easy been able to create a project in my code folder and then go to folder-name.test in the browser and it&#39;s just there! </p><p${_scopeId4}> For local email testing I use <strong${_scopeId4}>HELO</strong> by Beyond Code, a great thing that just works with a couple of env changes. </p><p${_scopeId4}> If I need to test any calls to an API, then <strong${_scopeId4}>Postman</strong> is my go to. </p>`);
                            } else {
                              return [
                                createVNode("p", null, [
                                  createTextVNode(" I use "),
                                  createVNode("strong", null, "Laravel Valet"),
                                  createTextVNode(" for all local development work, it's just so easy been able to create a project in my code folder and then go to folder-name.test in the browser and it's just there! ")
                                ]),
                                createVNode("p", null, [
                                  createTextVNode(" For local email testing I use "),
                                  createVNode("strong", null, "HELO"),
                                  createTextVNode(" by Beyond Code, a great thing that just works with a couple of env changes. ")
                                ]),
                                createVNode("p", null, [
                                  createTextVNode(" If I need to test any calls to an API, then "),
                                  createVNode("strong", null, "Postman"),
                                  createTextVNode(" is my go to. ")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$1, { title: "Graphics/Photo Editing" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p${_scopeId4}> For photo editing when I&#39;ve been out with my camera, <strong${_scopeId4}>Adobe Lightroom</strong> is my go to, and occasionally <strong${_scopeId4}>Photoshop</strong> too. </p><p${_scopeId4}> I&#39;ve also used <strong${_scopeId4}>Adobe InDesign</strong> and <strong${_scopeId4}>Illustrator</strong> in the past when required, but it&#39;s rare I use them much these days. </p>`);
                            } else {
                              return [
                                createVNode("p", null, [
                                  createTextVNode(" For photo editing when I've been out with my camera, "),
                                  createVNode("strong", null, "Adobe Lightroom"),
                                  createTextVNode(" is my go to, and occasionally "),
                                  createVNode("strong", null, "Photoshop"),
                                  createTextVNode(" too. ")
                                ]),
                                createVNode("p", null, [
                                  createTextVNode(" I've also used "),
                                  createVNode("strong", null, "Adobe InDesign"),
                                  createTextVNode(" and "),
                                  createVNode("strong", null, "Illustrator"),
                                  createTextVNode(" in the past when required, but it's rare I use them much these days. ")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$1, { title: "Operating System" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p${_scopeId4}> I don&#39;t customise MacOS too much, but I do tend to have most apps open in full screen all the time and swipe between them, I have the dock hidden unless I move my cursor to the bottom of the screen and then it only shows apps that are open with the smallest possible icons. </p><p${_scopeId4}> To open apps and use my Mac I typically use Alfred, I have it bound to Option + Space, so it&#39;s just muscle memory for opening an App, I very rarely, if ever use the built in Mac app browser. </p><p class="font-semibold"${_scopeId4}> Additional Apps I use daily </p><ul${_scopeId4}><li${_scopeId4}> For email I use <strong${_scopeId4}>Mimestream</strong>, until late 2022 I was using Spark, but made the switch to Mimestream. </li><li${_scopeId4}> I use both <strong${_scopeId4}>Firefox</strong> and <strong${_scopeId4}>Chrome</strong> regularly, Firefox I tend to use more for day to day non work related browsing, and Chrome for any development work. </li><li${_scopeId4}> I prefer using a GUI for Git and my favourite is <strong${_scopeId4}>GitKraken</strong>, I can get by with most commands on the terminal, but for some stuff, you can&#39;t beat a GUI! </li></ul>`);
                            } else {
                              return [
                                createVNode("p", null, " I don't customise MacOS too much, but I do tend to have most apps open in full screen all the time and swipe between them, I have the dock hidden unless I move my cursor to the bottom of the screen and then it only shows apps that are open with the smallest possible icons. "),
                                createVNode("p", null, " To open apps and use my Mac I typically use Alfred, I have it bound to Option + Space, so it's just muscle memory for opening an App, I very rarely, if ever use the built in Mac app browser. "),
                                createVNode("p", { class: "font-semibold" }, " Additional Apps I use daily "),
                                createVNode("ul", null, [
                                  createVNode("li", null, [
                                    createTextVNode(" For email I use "),
                                    createVNode("strong", null, "Mimestream"),
                                    createTextVNode(", until late 2022 I was using Spark, but made the switch to Mimestream. ")
                                  ]),
                                  createVNode("li", null, [
                                    createTextVNode(" I use both "),
                                    createVNode("strong", null, "Firefox"),
                                    createTextVNode(" and "),
                                    createVNode("strong", null, "Chrome"),
                                    createTextVNode(" regularly, Firefox I tend to use more for day to day non work related browsing, and Chrome for any development work. ")
                                  ]),
                                  createVNode("li", null, [
                                    createTextVNode(" I prefer using a GUI for Git and my favourite is "),
                                    createVNode("strong", null, "GitKraken"),
                                    createTextVNode(", I can get by with most commands on the terminal, but for some stuff, you can't beat a GUI! ")
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$1, { title: "IDE" }, {
                            default: withCtx(() => [
                              createVNode("p", null, [
                                createVNode("strong", null, "PhpStorm"),
                                createTextVNode(" has being my IDE of choice since 2014, for a long time I just used it with the default dark theme and configuration, however in the past couple of years I have customized it a little more. ")
                              ]),
                              createVNode("p", null, [
                                createTextVNode(" I use the "),
                                createVNode("strong", null, "Material Theme UI"),
                                createTextVNode(" plugin and the "),
                                createVNode("strong", null, "Atom One Dark"),
                                createTextVNode(" theme, I have a lot of the built in toolbars disabled, but I still have a couple open, and I prefer working with the tabs visible, I have tried it a few times with them disabled, but I usually end up missing them and turning them back on! I usually work with the side bar open too with the file browser, unless I have the workspace split with two files open at once. ")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$1, { title: "Terminal" }, {
                            default: withCtx(() => [
                              createVNode("p", null, [
                                createTextVNode(" I am a fan of "),
                                createVNode("strong", null, "iTerm"),
                                createTextVNode(" used with "),
                                createVNode("strong", null, "Z Shell"),
                                createTextVNode(" and "),
                                createVNode("strong", null, "Oh My Zsh"),
                                createTextVNode(", I have a few plugins installed (Which I really need to document more!) and several aliases ")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$1, { title: "Database" }, {
                            default: withCtx(() => [
                              createVNode("p", null, [
                                createTextVNode(" I use "),
                                createVNode("strong", null, "SequelAce"),
                                createTextVNode(" for managing and connecting to MySQL Databases. ")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$1, { title: "Local Development" }, {
                            default: withCtx(() => [
                              createVNode("p", null, [
                                createTextVNode(" I use "),
                                createVNode("strong", null, "Laravel Valet"),
                                createTextVNode(" for all local development work, it's just so easy been able to create a project in my code folder and then go to folder-name.test in the browser and it's just there! ")
                              ]),
                              createVNode("p", null, [
                                createTextVNode(" For local email testing I use "),
                                createVNode("strong", null, "HELO"),
                                createTextVNode(" by Beyond Code, a great thing that just works with a couple of env changes. ")
                              ]),
                              createVNode("p", null, [
                                createTextVNode(" If I need to test any calls to an API, then "),
                                createVNode("strong", null, "Postman"),
                                createTextVNode(" is my go to. ")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$1, { title: "Graphics/Photo Editing" }, {
                            default: withCtx(() => [
                              createVNode("p", null, [
                                createTextVNode(" For photo editing when I've been out with my camera, "),
                                createVNode("strong", null, "Adobe Lightroom"),
                                createTextVNode(" is my go to, and occasionally "),
                                createVNode("strong", null, "Photoshop"),
                                createTextVNode(" too. ")
                              ]),
                              createVNode("p", null, [
                                createTextVNode(" I've also used "),
                                createVNode("strong", null, "Adobe InDesign"),
                                createTextVNode(" and "),
                                createVNode("strong", null, "Illustrator"),
                                createTextVNode(" in the past when required, but it's rare I use them much these days. ")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$1, { title: "Operating System" }, {
                            default: withCtx(() => [
                              createVNode("p", null, " I don't customise MacOS too much, but I do tend to have most apps open in full screen all the time and swipe between them, I have the dock hidden unless I move my cursor to the bottom of the screen and then it only shows apps that are open with the smallest possible icons. "),
                              createVNode("p", null, " To open apps and use my Mac I typically use Alfred, I have it bound to Option + Space, so it's just muscle memory for opening an App, I very rarely, if ever use the built in Mac app browser. "),
                              createVNode("p", { class: "font-semibold" }, " Additional Apps I use daily "),
                              createVNode("ul", null, [
                                createVNode("li", null, [
                                  createTextVNode(" For email I use "),
                                  createVNode("strong", null, "Mimestream"),
                                  createTextVNode(", until late 2022 I was using Spark, but made the switch to Mimestream. ")
                                ]),
                                createVNode("li", null, [
                                  createTextVNode(" I use both "),
                                  createVNode("strong", null, "Firefox"),
                                  createTextVNode(" and "),
                                  createVNode("strong", null, "Chrome"),
                                  createTextVNode(" regularly, Firefox I tend to use more for day to day non work related browsing, and Chrome for any development work. ")
                                ]),
                                createVNode("li", null, [
                                  createTextVNode(" I prefer using a GUI for Git and my favourite is "),
                                  createVNode("strong", null, "GitKraken"),
                                  createTextVNode(", I can get by with most commands on the terminal, but for some stuff, you can't beat a GUI! ")
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$2, { title: "Web" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$1, { title: "Hosting" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p${_scopeId4}> All of my personal projects are hosted on <strong${_scopeId4}>Digital Ocean</strong> droplets. </p>`);
                            } else {
                              return [
                                createVNode("p", null, [
                                  createTextVNode(" All of my personal projects are hosted on "),
                                  createVNode("strong", null, "Digital Ocean"),
                                  createTextVNode(" droplets. ")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$1, { title: "Deployment / Setup" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p${_scopeId4}> I am not a fan of configuring servers or infrastructure, so I rely on <strong${_scopeId4}>Laravel Forge</strong> to work that magic for me! On simpler websites Forge also handles deployments, but for larger ones, such as Coeliac Sanctuary, they&#39;re deployed through <strong${_scopeId4}>Laravel Envoyer</strong> for zero down-time deployments. </p>`);
                            } else {
                              return [
                                createVNode("p", null, [
                                  createTextVNode(" I am not a fan of configuring servers or infrastructure, so I rely on "),
                                  createVNode("strong", null, "Laravel Forge"),
                                  createTextVNode(" to work that magic for me! On simpler websites Forge also handles deployments, but for larger ones, such as Coeliac Sanctuary, they're deployed through "),
                                  createVNode("strong", null, "Laravel Envoyer"),
                                  createTextVNode(" for zero down-time deployments. ")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$1, { title: "Email" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p${_scopeId4}> I use <strong${_scopeId4}>Google Workspaces</strong> to manage email addresses needed for any of my personal websites. </p><p${_scopeId4}> For any automatic sending of email, such as transactional or from a campaign is done through <strong${_scopeId4}>Amazon SES</strong>. </p><p${_scopeId4}> Email Campaign Management and logging of transactional emails is done through the fantastic <strong${_scopeId4}>Mailcoach</strong> by Spatie. </p>`);
                            } else {
                              return [
                                createVNode("p", null, [
                                  createTextVNode(" I use "),
                                  createVNode("strong", null, "Google Workspaces"),
                                  createTextVNode(" to manage email addresses needed for any of my personal websites. ")
                                ]),
                                createVNode("p", null, [
                                  createTextVNode(" For any automatic sending of email, such as transactional or from a campaign is done through "),
                                  createVNode("strong", null, "Amazon SES"),
                                  createTextVNode(". ")
                                ]),
                                createVNode("p", null, [
                                  createTextVNode(" Email Campaign Management and logging of transactional emails is done through the fantastic "),
                                  createVNode("strong", null, "Mailcoach"),
                                  createTextVNode(" by Spatie. ")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$1, { title: "Storage" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p${_scopeId4}> Most of my projects just store files in the main filesystem, however on Coeliac Sanctuary all images are stored on <strong${_scopeId4}>Amazon S3</strong>. </p>`);
                            } else {
                              return [
                                createVNode("p", null, [
                                  createTextVNode(" Most of my projects just store files in the main filesystem, however on Coeliac Sanctuary all images are stored on "),
                                  createVNode("strong", null, "Amazon S3"),
                                  createTextVNode(". ")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$1, { title: "Hosting" }, {
                            default: withCtx(() => [
                              createVNode("p", null, [
                                createTextVNode(" All of my personal projects are hosted on "),
                                createVNode("strong", null, "Digital Ocean"),
                                createTextVNode(" droplets. ")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$1, { title: "Deployment / Setup" }, {
                            default: withCtx(() => [
                              createVNode("p", null, [
                                createTextVNode(" I am not a fan of configuring servers or infrastructure, so I rely on "),
                                createVNode("strong", null, "Laravel Forge"),
                                createTextVNode(" to work that magic for me! On simpler websites Forge also handles deployments, but for larger ones, such as Coeliac Sanctuary, they're deployed through "),
                                createVNode("strong", null, "Laravel Envoyer"),
                                createTextVNode(" for zero down-time deployments. ")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$1, { title: "Email" }, {
                            default: withCtx(() => [
                              createVNode("p", null, [
                                createTextVNode(" I use "),
                                createVNode("strong", null, "Google Workspaces"),
                                createTextVNode(" to manage email addresses needed for any of my personal websites. ")
                              ]),
                              createVNode("p", null, [
                                createTextVNode(" For any automatic sending of email, such as transactional or from a campaign is done through "),
                                createVNode("strong", null, "Amazon SES"),
                                createTextVNode(". ")
                              ]),
                              createVNode("p", null, [
                                createTextVNode(" Email Campaign Management and logging of transactional emails is done through the fantastic "),
                                createVNode("strong", null, "Mailcoach"),
                                createTextVNode(" by Spatie. ")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$1, { title: "Storage" }, {
                            default: withCtx(() => [
                              createVNode("p", null, [
                                createTextVNode(" Most of my projects just store files in the main filesystem, however on Coeliac Sanctuary all images are stored on "),
                                createVNode("strong", null, "Amazon S3"),
                                createTextVNode(". ")
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$2, { title: "Hardware" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$1, { title: "Macbook" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p${_scopeId4}> When working on personal projects and anything outside of work I tend to keep it simple, I&#39;m just sat on the sofa with my Macbook working away. </p><p${_scopeId4}> I have a <strong${_scopeId4}>2020 16&quot; Macbook pro, 2.3ghz 8-Core i9, 16gb RAM and 1tb SSD.</strong></p><p${_scopeId4}> I have a desk space for when I&#39;m working in my employment, but I try to keep my personal work and employment work separate and do not sit at my desk outside of work hours. </p>`);
                            } else {
                              return [
                                createVNode("p", null, " When working on personal projects and anything outside of work I tend to keep it simple, I'm just sat on the sofa with my Macbook working away. "),
                                createVNode("p", null, [
                                  createTextVNode(" I have a "),
                                  createVNode("strong", null, '2020 16" Macbook pro, 2.3ghz 8-Core i9, 16gb RAM and 1tb SSD.')
                                ]),
                                createVNode("p", null, " I have a desk space for when I'm working in my employment, but I try to keep my personal work and employment work separate and do not sit at my desk outside of work hours. ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$1, { title: "Phone" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p${_scopeId4}> I have been an Android fan since I got my first one in 2012, my current phone is the <strong${_scopeId4}>Google Pixel 7 Pro</strong>. </p>`);
                            } else {
                              return [
                                createVNode("p", null, [
                                  createTextVNode(" I have been an Android fan since I got my first one in 2012, my current phone is the "),
                                  createVNode("strong", null, "Google Pixel 7 Pro"),
                                  createTextVNode(". ")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$1, { title: "Smart Watch" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<p${_scopeId4}> I have owned a Fitbit device since 2017, most recently was the Versa 2, but when I pre-ordered the new Pixel 7 Pro prior to release, the free gift was the new <strong${_scopeId4}>Google Pixel watch</strong>, which also integrates perfectly with Fitbit, the only downside is having to charge it daily (I tend to put it on at night before bed while I&#39;m reading) - but I&#39;ve got used to it now! </p>`);
                            } else {
                              return [
                                createVNode("p", null, [
                                  createTextVNode(" I have owned a Fitbit device since 2017, most recently was the Versa 2, but when I pre-ordered the new Pixel 7 Pro prior to release, the free gift was the new "),
                                  createVNode("strong", null, "Google Pixel watch"),
                                  createTextVNode(", which also integrates perfectly with Fitbit, the only downside is having to charge it daily (I tend to put it on at night before bed while I'm reading) - but I've got used to it now! ")
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$1, { title: "Macbook" }, {
                            default: withCtx(() => [
                              createVNode("p", null, " When working on personal projects and anything outside of work I tend to keep it simple, I'm just sat on the sofa with my Macbook working away. "),
                              createVNode("p", null, [
                                createTextVNode(" I have a "),
                                createVNode("strong", null, '2020 16" Macbook pro, 2.3ghz 8-Core i9, 16gb RAM and 1tb SSD.')
                              ]),
                              createVNode("p", null, " I have a desk space for when I'm working in my employment, but I try to keep my personal work and employment work separate and do not sit at my desk outside of work hours. ")
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$1, { title: "Phone" }, {
                            default: withCtx(() => [
                              createVNode("p", null, [
                                createTextVNode(" I have been an Android fan since I got my first one in 2012, my current phone is the "),
                                createVNode("strong", null, "Google Pixel 7 Pro"),
                                createTextVNode(". ")
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$1, { title: "Smart Watch" }, {
                            default: withCtx(() => [
                              createVNode("p", null, [
                                createTextVNode(" I have owned a Fitbit device since 2017, most recently was the Versa 2, but when I pre-ordered the new Pixel 7 Pro prior to release, the free gift was the new "),
                                createVNode("strong", null, "Google Pixel watch"),
                                createTextVNode(", which also integrates perfectly with Fitbit, the only downside is having to charge it daily (I tend to put it on at night before bed while I'm reading) - but I've got used to it now! ")
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("p", null, " Inspired by the developers I follow on Twitter and admire, I'd thought I'd put together my own 'uses' / setup page, though at least hardware wise I work a lot simpler than most, sticking to just using my Mac on its own outside of my employment! "),
                    createVNode(_sfc_main$2, { title: "Software" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$1, { title: "IDE" }, {
                          default: withCtx(() => [
                            createVNode("p", null, [
                              createVNode("strong", null, "PhpStorm"),
                              createTextVNode(" has being my IDE of choice since 2014, for a long time I just used it with the default dark theme and configuration, however in the past couple of years I have customized it a little more. ")
                            ]),
                            createVNode("p", null, [
                              createTextVNode(" I use the "),
                              createVNode("strong", null, "Material Theme UI"),
                              createTextVNode(" plugin and the "),
                              createVNode("strong", null, "Atom One Dark"),
                              createTextVNode(" theme, I have a lot of the built in toolbars disabled, but I still have a couple open, and I prefer working with the tabs visible, I have tried it a few times with them disabled, but I usually end up missing them and turning them back on! I usually work with the side bar open too with the file browser, unless I have the workspace split with two files open at once. ")
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$1, { title: "Terminal" }, {
                          default: withCtx(() => [
                            createVNode("p", null, [
                              createTextVNode(" I am a fan of "),
                              createVNode("strong", null, "iTerm"),
                              createTextVNode(" used with "),
                              createVNode("strong", null, "Z Shell"),
                              createTextVNode(" and "),
                              createVNode("strong", null, "Oh My Zsh"),
                              createTextVNode(", I have a few plugins installed (Which I really need to document more!) and several aliases ")
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$1, { title: "Database" }, {
                          default: withCtx(() => [
                            createVNode("p", null, [
                              createTextVNode(" I use "),
                              createVNode("strong", null, "SequelAce"),
                              createTextVNode(" for managing and connecting to MySQL Databases. ")
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$1, { title: "Local Development" }, {
                          default: withCtx(() => [
                            createVNode("p", null, [
                              createTextVNode(" I use "),
                              createVNode("strong", null, "Laravel Valet"),
                              createTextVNode(" for all local development work, it's just so easy been able to create a project in my code folder and then go to folder-name.test in the browser and it's just there! ")
                            ]),
                            createVNode("p", null, [
                              createTextVNode(" For local email testing I use "),
                              createVNode("strong", null, "HELO"),
                              createTextVNode(" by Beyond Code, a great thing that just works with a couple of env changes. ")
                            ]),
                            createVNode("p", null, [
                              createTextVNode(" If I need to test any calls to an API, then "),
                              createVNode("strong", null, "Postman"),
                              createTextVNode(" is my go to. ")
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$1, { title: "Graphics/Photo Editing" }, {
                          default: withCtx(() => [
                            createVNode("p", null, [
                              createTextVNode(" For photo editing when I've been out with my camera, "),
                              createVNode("strong", null, "Adobe Lightroom"),
                              createTextVNode(" is my go to, and occasionally "),
                              createVNode("strong", null, "Photoshop"),
                              createTextVNode(" too. ")
                            ]),
                            createVNode("p", null, [
                              createTextVNode(" I've also used "),
                              createVNode("strong", null, "Adobe InDesign"),
                              createTextVNode(" and "),
                              createVNode("strong", null, "Illustrator"),
                              createTextVNode(" in the past when required, but it's rare I use them much these days. ")
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$1, { title: "Operating System" }, {
                          default: withCtx(() => [
                            createVNode("p", null, " I don't customise MacOS too much, but I do tend to have most apps open in full screen all the time and swipe between them, I have the dock hidden unless I move my cursor to the bottom of the screen and then it only shows apps that are open with the smallest possible icons. "),
                            createVNode("p", null, " To open apps and use my Mac I typically use Alfred, I have it bound to Option + Space, so it's just muscle memory for opening an App, I very rarely, if ever use the built in Mac app browser. "),
                            createVNode("p", { class: "font-semibold" }, " Additional Apps I use daily "),
                            createVNode("ul", null, [
                              createVNode("li", null, [
                                createTextVNode(" For email I use "),
                                createVNode("strong", null, "Mimestream"),
                                createTextVNode(", until late 2022 I was using Spark, but made the switch to Mimestream. ")
                              ]),
                              createVNode("li", null, [
                                createTextVNode(" I use both "),
                                createVNode("strong", null, "Firefox"),
                                createTextVNode(" and "),
                                createVNode("strong", null, "Chrome"),
                                createTextVNode(" regularly, Firefox I tend to use more for day to day non work related browsing, and Chrome for any development work. ")
                              ]),
                              createVNode("li", null, [
                                createTextVNode(" I prefer using a GUI for Git and my favourite is "),
                                createVNode("strong", null, "GitKraken"),
                                createTextVNode(", I can get by with most commands on the terminal, but for some stuff, you can't beat a GUI! ")
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_sfc_main$2, { title: "Web" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$1, { title: "Hosting" }, {
                          default: withCtx(() => [
                            createVNode("p", null, [
                              createTextVNode(" All of my personal projects are hosted on "),
                              createVNode("strong", null, "Digital Ocean"),
                              createTextVNode(" droplets. ")
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$1, { title: "Deployment / Setup" }, {
                          default: withCtx(() => [
                            createVNode("p", null, [
                              createTextVNode(" I am not a fan of configuring servers or infrastructure, so I rely on "),
                              createVNode("strong", null, "Laravel Forge"),
                              createTextVNode(" to work that magic for me! On simpler websites Forge also handles deployments, but for larger ones, such as Coeliac Sanctuary, they're deployed through "),
                              createVNode("strong", null, "Laravel Envoyer"),
                              createTextVNode(" for zero down-time deployments. ")
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$1, { title: "Email" }, {
                          default: withCtx(() => [
                            createVNode("p", null, [
                              createTextVNode(" I use "),
                              createVNode("strong", null, "Google Workspaces"),
                              createTextVNode(" to manage email addresses needed for any of my personal websites. ")
                            ]),
                            createVNode("p", null, [
                              createTextVNode(" For any automatic sending of email, such as transactional or from a campaign is done through "),
                              createVNode("strong", null, "Amazon SES"),
                              createTextVNode(". ")
                            ]),
                            createVNode("p", null, [
                              createTextVNode(" Email Campaign Management and logging of transactional emails is done through the fantastic "),
                              createVNode("strong", null, "Mailcoach"),
                              createTextVNode(" by Spatie. ")
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$1, { title: "Storage" }, {
                          default: withCtx(() => [
                            createVNode("p", null, [
                              createTextVNode(" Most of my projects just store files in the main filesystem, however on Coeliac Sanctuary all images are stored on "),
                              createVNode("strong", null, "Amazon S3"),
                              createTextVNode(". ")
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_sfc_main$2, { title: "Hardware" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$1, { title: "Macbook" }, {
                          default: withCtx(() => [
                            createVNode("p", null, " When working on personal projects and anything outside of work I tend to keep it simple, I'm just sat on the sofa with my Macbook working away. "),
                            createVNode("p", null, [
                              createTextVNode(" I have a "),
                              createVNode("strong", null, '2020 16" Macbook pro, 2.3ghz 8-Core i9, 16gb RAM and 1tb SSD.')
                            ]),
                            createVNode("p", null, " I have a desk space for when I'm working in my employment, but I try to keep my personal work and employment work separate and do not sit at my desk outside of work hours. ")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$1, { title: "Phone" }, {
                          default: withCtx(() => [
                            createVNode("p", null, [
                              createTextVNode(" I have been an Android fan since I got my first one in 2012, my current phone is the "),
                              createVNode("strong", null, "Google Pixel 7 Pro"),
                              createTextVNode(". ")
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$1, { title: "Smart Watch" }, {
                          default: withCtx(() => [
                            createVNode("p", null, [
                              createTextVNode(" I have owned a Fitbit device since 2017, most recently was the Versa 2, but when I pre-ordered the new Pixel 7 Pro prior to release, the free gift was the new "),
                              createVNode("strong", null, "Google Pixel watch"),
                              createTextVNode(", which also integrates perfectly with Fitbit, the only downside is having to charge it daily (I tend to put it on at night before bed while I'm reading) - but I've got used to it now! ")
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$4, null, {
                title: withCtx(() => [
                  createTextVNode("My Setup")
                ]),
                default: withCtx(() => [
                  createVNode("p", null, " Inspired by the developers I follow on Twitter and admire, I'd thought I'd put together my own 'uses' / setup page, though at least hardware wise I work a lot simpler than most, sticking to just using my Mac on its own outside of my employment! "),
                  createVNode(_sfc_main$2, { title: "Software" }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$1, { title: "IDE" }, {
                        default: withCtx(() => [
                          createVNode("p", null, [
                            createVNode("strong", null, "PhpStorm"),
                            createTextVNode(" has being my IDE of choice since 2014, for a long time I just used it with the default dark theme and configuration, however in the past couple of years I have customized it a little more. ")
                          ]),
                          createVNode("p", null, [
                            createTextVNode(" I use the "),
                            createVNode("strong", null, "Material Theme UI"),
                            createTextVNode(" plugin and the "),
                            createVNode("strong", null, "Atom One Dark"),
                            createTextVNode(" theme, I have a lot of the built in toolbars disabled, but I still have a couple open, and I prefer working with the tabs visible, I have tried it a few times with them disabled, but I usually end up missing them and turning them back on! I usually work with the side bar open too with the file browser, unless I have the workspace split with two files open at once. ")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$1, { title: "Terminal" }, {
                        default: withCtx(() => [
                          createVNode("p", null, [
                            createTextVNode(" I am a fan of "),
                            createVNode("strong", null, "iTerm"),
                            createTextVNode(" used with "),
                            createVNode("strong", null, "Z Shell"),
                            createTextVNode(" and "),
                            createVNode("strong", null, "Oh My Zsh"),
                            createTextVNode(", I have a few plugins installed (Which I really need to document more!) and several aliases ")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$1, { title: "Database" }, {
                        default: withCtx(() => [
                          createVNode("p", null, [
                            createTextVNode(" I use "),
                            createVNode("strong", null, "SequelAce"),
                            createTextVNode(" for managing and connecting to MySQL Databases. ")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$1, { title: "Local Development" }, {
                        default: withCtx(() => [
                          createVNode("p", null, [
                            createTextVNode(" I use "),
                            createVNode("strong", null, "Laravel Valet"),
                            createTextVNode(" for all local development work, it's just so easy been able to create a project in my code folder and then go to folder-name.test in the browser and it's just there! ")
                          ]),
                          createVNode("p", null, [
                            createTextVNode(" For local email testing I use "),
                            createVNode("strong", null, "HELO"),
                            createTextVNode(" by Beyond Code, a great thing that just works with a couple of env changes. ")
                          ]),
                          createVNode("p", null, [
                            createTextVNode(" If I need to test any calls to an API, then "),
                            createVNode("strong", null, "Postman"),
                            createTextVNode(" is my go to. ")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$1, { title: "Graphics/Photo Editing" }, {
                        default: withCtx(() => [
                          createVNode("p", null, [
                            createTextVNode(" For photo editing when I've been out with my camera, "),
                            createVNode("strong", null, "Adobe Lightroom"),
                            createTextVNode(" is my go to, and occasionally "),
                            createVNode("strong", null, "Photoshop"),
                            createTextVNode(" too. ")
                          ]),
                          createVNode("p", null, [
                            createTextVNode(" I've also used "),
                            createVNode("strong", null, "Adobe InDesign"),
                            createTextVNode(" and "),
                            createVNode("strong", null, "Illustrator"),
                            createTextVNode(" in the past when required, but it's rare I use them much these days. ")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$1, { title: "Operating System" }, {
                        default: withCtx(() => [
                          createVNode("p", null, " I don't customise MacOS too much, but I do tend to have most apps open in full screen all the time and swipe between them, I have the dock hidden unless I move my cursor to the bottom of the screen and then it only shows apps that are open with the smallest possible icons. "),
                          createVNode("p", null, " To open apps and use my Mac I typically use Alfred, I have it bound to Option + Space, so it's just muscle memory for opening an App, I very rarely, if ever use the built in Mac app browser. "),
                          createVNode("p", { class: "font-semibold" }, " Additional Apps I use daily "),
                          createVNode("ul", null, [
                            createVNode("li", null, [
                              createTextVNode(" For email I use "),
                              createVNode("strong", null, "Mimestream"),
                              createTextVNode(", until late 2022 I was using Spark, but made the switch to Mimestream. ")
                            ]),
                            createVNode("li", null, [
                              createTextVNode(" I use both "),
                              createVNode("strong", null, "Firefox"),
                              createTextVNode(" and "),
                              createVNode("strong", null, "Chrome"),
                              createTextVNode(" regularly, Firefox I tend to use more for day to day non work related browsing, and Chrome for any development work. ")
                            ]),
                            createVNode("li", null, [
                              createTextVNode(" I prefer using a GUI for Git and my favourite is "),
                              createVNode("strong", null, "GitKraken"),
                              createTextVNode(", I can get by with most commands on the terminal, but for some stuff, you can't beat a GUI! ")
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$2, { title: "Web" }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$1, { title: "Hosting" }, {
                        default: withCtx(() => [
                          createVNode("p", null, [
                            createTextVNode(" All of my personal projects are hosted on "),
                            createVNode("strong", null, "Digital Ocean"),
                            createTextVNode(" droplets. ")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$1, { title: "Deployment / Setup" }, {
                        default: withCtx(() => [
                          createVNode("p", null, [
                            createTextVNode(" I am not a fan of configuring servers or infrastructure, so I rely on "),
                            createVNode("strong", null, "Laravel Forge"),
                            createTextVNode(" to work that magic for me! On simpler websites Forge also handles deployments, but for larger ones, such as Coeliac Sanctuary, they're deployed through "),
                            createVNode("strong", null, "Laravel Envoyer"),
                            createTextVNode(" for zero down-time deployments. ")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$1, { title: "Email" }, {
                        default: withCtx(() => [
                          createVNode("p", null, [
                            createTextVNode(" I use "),
                            createVNode("strong", null, "Google Workspaces"),
                            createTextVNode(" to manage email addresses needed for any of my personal websites. ")
                          ]),
                          createVNode("p", null, [
                            createTextVNode(" For any automatic sending of email, such as transactional or from a campaign is done through "),
                            createVNode("strong", null, "Amazon SES"),
                            createTextVNode(". ")
                          ]),
                          createVNode("p", null, [
                            createTextVNode(" Email Campaign Management and logging of transactional emails is done through the fantastic "),
                            createVNode("strong", null, "Mailcoach"),
                            createTextVNode(" by Spatie. ")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$1, { title: "Storage" }, {
                        default: withCtx(() => [
                          createVNode("p", null, [
                            createTextVNode(" Most of my projects just store files in the main filesystem, however on Coeliac Sanctuary all images are stored on "),
                            createVNode("strong", null, "Amazon S3"),
                            createTextVNode(". ")
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$2, { title: "Hardware" }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$1, { title: "Macbook" }, {
                        default: withCtx(() => [
                          createVNode("p", null, " When working on personal projects and anything outside of work I tend to keep it simple, I'm just sat on the sofa with my Macbook working away. "),
                          createVNode("p", null, [
                            createTextVNode(" I have a "),
                            createVNode("strong", null, '2020 16" Macbook pro, 2.3ghz 8-Core i9, 16gb RAM and 1tb SSD.')
                          ]),
                          createVNode("p", null, " I have a desk space for when I'm working in my employment, but I try to keep my personal work and employment work separate and do not sit at my desk outside of work hours. ")
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$1, { title: "Phone" }, {
                        default: withCtx(() => [
                          createVNode("p", null, [
                            createTextVNode(" I have been an Android fan since I got my first one in 2012, my current phone is the "),
                            createVNode("strong", null, "Google Pixel 7 Pro"),
                            createTextVNode(". ")
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$1, { title: "Smart Watch" }, {
                        default: withCtx(() => [
                          createVNode("p", null, [
                            createTextVNode(" I have owned a Fitbit device since 2017, most recently was the Versa 2, but when I pre-ordered the new Pixel 7 Pro prior to release, the free gift was the new "),
                            createVNode("strong", null, "Google Pixel watch"),
                            createTextVNode(", which also integrates perfectly with Fitbit, the only downside is having to charge it daily (I tend to put it on at night before bed while I'm reading) - but I've got used to it now! ")
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Uses.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
