import { defineComponent, ref, mergeProps, useSSRContext, unref, withCtx, createVNode, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./Card-f006e24d.mjs";
import { Head } from "@inertiajs/vue3";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProjectItem",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    github: {
      type: String,
      required: false,
      default: () => false
    }
  },
  setup(__props) {
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col bg-primary/10 p-2 mb-4 shadow" }, _attrs))}><div class="mb-3 text-primary font-semibold border-b border-primary pb-2 text-center xs:text-left"><h2 class="text-2xl text-primary m-0 font-semibold">${ssrInterpolate(__props.title)}</h2><h3 class="text-sm m-0"><a${ssrRenderAttr("href", __props.url)} target="_blank" class="text-black hover:text-primary break-words">${ssrInterpolate(__props.url)}</a></h3>`);
      if (__props.github) {
        _push(`<h3 class="text-sm m-0"><a${ssrRenderAttr("href", __props.github)} target="_blank" class="text-black hover:text-primary break-words">${ssrInterpolate(__props.github)}</a></h3>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!isOpen.value) {
        _push(`<div class="bg-white rounded p-2 font-semibold">`);
        ssrRenderSlot(_ctx.$slots, "intro", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div>`);
      if (!isOpen.value) {
        _push(`<button class="bg-primary mt-3 bg-opacity-50 rounded px-2 py-1 hover:bg-opacity-70 text-white font-semibold transition">Read More...</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (isOpen.value) {
        _push(`<div class="space-y-3">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        if (isOpen.value) {
          _push(`<button class="bg-primary mt-3 bg-opacity-50 rounded px-2 py-1 hover:bg-opacity-70 text-white font-semibold transition">Read Less</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ProjectItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Projects",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Projects</title><meta property="og:type" content="article"${_scopeId}><meta property="og:locale" content="en_GB"${_scopeId}><meta property="og:site_name" content="Jamie Peters - Laravel Developer"${_scopeId}><meta property="og:description" content="Check out some of my projects"${_scopeId}><meta property="og:title" content="Jamie Peters - Projects"${_scopeId}><meta property="og:image" content="https://jamie-peters.s3.eu-west-2.amazonaws.com/og-image.jpg"${_scopeId}><meta property="og:image:type" content="image/jpeg"${_scopeId}><meta property="og:url" content="https://jamie-peters.co.uk/projects"${_scopeId}><meta name="twitter:card" content="summary_large_image"${_scopeId}><meta name="twitter:description" content="Check out some of my projects"${_scopeId}><meta name="twitter:title" content="Jamie Peters - Projects"${_scopeId}><meta name="twitter:site" content="@jpeters8889"${_scopeId}><meta name="twitter:domain" content="Jamie Peters - Laravel Developer"${_scopeId}><meta name="twitter:image:src" content="https://jamie-peters.s3.eu-west-2.amazonaws.com/og-image.jpg"${_scopeId}><meta name="twitter:creator" content="@jpeters8889"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Projects"),
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
                content: "Check out some of my projects"
              }),
              createVNode("meta", {
                property: "og:title",
                content: "Jamie Peters - Projects"
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
                content: "https://jamie-peters.co.uk/projects"
              }),
              createVNode("meta", {
                name: "twitter:card",
                content: "summary_large_image"
              }),
              createVNode("meta", {
                name: "twitter:description",
                content: "Check out some of my projects"
              }),
              createVNode("meta", {
                name: "twitter:title",
                content: "Jamie Peters - Projects"
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
      _push(ssrRenderComponent(_sfc_main$2, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, null, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Projects`);
                } else {
                  return [
                    createTextVNode("Projects")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p${_scopeId2}> Below are a few examples of personal projects I have done. </p>`);
                  _push3(ssrRenderComponent(_sfc_main$1, {
                    title: "Coeliac Sanctuary",
                    url: "https://www.coeliacsanctuary.co.uk",
                    github: "https://www.github.com/jpeters8889/coeliacsanctuary.co.uk"
                  }, {
                    intro: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="mt-0"${_scopeId3}> Written in Laravel using a TDD and DDD methodology, current front end stack is Blade with additional Vue Components and TailwindCSS, but there are plans being made to refactor to InertiaJS. </p><p class="mb-0"${_scopeId3}> I have also created an app using React Native which is available on Google Play and Apple Stores. </p>`);
                      } else {
                        return [
                          createVNode("p", { class: "mt-0" }, " Written in Laravel using a TDD and DDD methodology, current front end stack is Blade with additional Vue Components and TailwindCSS, but there are plans being made to refactor to InertiaJS. "),
                          createVNode("p", { class: "mb-0" }, " I have also created an app using React Native which is available on Google Play and Apple Stores. ")
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="m-0"${_scopeId3}> Coeliac Sanctuary is my fiancees business. It was originally started in August 2014 as just Gluten Free blog for the Coeliac community, along with recipes, eating out guide and reviews. </p><p${_scopeId3}> Later in 2016 I created an online shop for the website, utilising the Stripe and PayPal APIs for handling payments. </p><p${_scopeId3}> A basic mobile app was created using Apache Cordova in 2017, primarily linking to the eating out guide section on the website. The app was used to display eateries in the database on an embedded Google map around the users location. The app was originally written in basic HTML, SCSS and JQuery. </p><p${_scopeId3}> In 2020 a brand new version of the website launched, completely rewritten from the ground up in Laravel using a test driven approach and a fresh new data structure using laravel migrations and custom built commands to transform the old legacy data structure and values into the new structure. </p><p${_scopeId3}> This new version took over 12 months to make in my spare time outside of work, but was a very rewarding project and still continues to be so to this day. </p><p${_scopeId3}> The website is now styled using Tailwind CSS with a customised configuration file for custom colours, sizes and breakpoints. </p><p${_scopeId3}> The website makes heavy use of Vue components, but is primarily a Blade powered website, but key parts of the website rely heavily on Vue. </p><p${_scopeId3}> All images on the website are hosted on Amazon S3, and all emails, transactional, and newsletters, are sent through Amazon SES, with the newsletter managed by Spatie&#39;s Mailcoach. </p><p${_scopeId3}> In early 2021 a brand new version of the mobile app was released, completely rewritten in React Native, the app is currently available on the Google Play and Apple stores, called Coeliac Sanctuary - On the Go. </p><p${_scopeId3}> I have plans to begin a rebuild of the website using InertiaJS from February 2023 when Laravel V10 is released, and this will also give me the opportunity to refactor parts of the website and improve code with additional things I have learnt over the years and implement additional strict code standards using PHP CS Fixer and Larastan. </p><p${_scopeId3}> The website is hosted on Digital Ocean, linked with Laravel Forge and deployed with Laravel Envoyer. </p>`);
                      } else {
                        return [
                          createVNode("p", { class: "m-0" }, " Coeliac Sanctuary is my fiancees business. It was originally started in August 2014 as just Gluten Free blog for the Coeliac community, along with recipes, eating out guide and reviews. "),
                          createVNode("p", null, " Later in 2016 I created an online shop for the website, utilising the Stripe and PayPal APIs for handling payments. "),
                          createVNode("p", null, " A basic mobile app was created using Apache Cordova in 2017, primarily linking to the eating out guide section on the website. The app was used to display eateries in the database on an embedded Google map around the users location. The app was originally written in basic HTML, SCSS and JQuery. "),
                          createVNode("p", null, " In 2020 a brand new version of the website launched, completely rewritten from the ground up in Laravel using a test driven approach and a fresh new data structure using laravel migrations and custom built commands to transform the old legacy data structure and values into the new structure. "),
                          createVNode("p", null, " This new version took over 12 months to make in my spare time outside of work, but was a very rewarding project and still continues to be so to this day. "),
                          createVNode("p", null, " The website is now styled using Tailwind CSS with a customised configuration file for custom colours, sizes and breakpoints. "),
                          createVNode("p", null, " The website makes heavy use of Vue components, but is primarily a Blade powered website, but key parts of the website rely heavily on Vue. "),
                          createVNode("p", null, " All images on the website are hosted on Amazon S3, and all emails, transactional, and newsletters, are sent through Amazon SES, with the newsletter managed by Spatie's Mailcoach. "),
                          createVNode("p", null, " In early 2021 a brand new version of the mobile app was released, completely rewritten in React Native, the app is currently available on the Google Play and Apple stores, called Coeliac Sanctuary - On the Go. "),
                          createVNode("p", null, " I have plans to begin a rebuild of the website using InertiaJS from February 2023 when Laravel V10 is released, and this will also give me the opportunity to refactor parts of the website and improve code with additional things I have learnt over the years and implement additional strict code standards using PHP CS Fixer and Larastan. "),
                          createVNode("p", null, " The website is hosted on Digital Ocean, linked with Laravel Forge and deployed with Laravel Envoyer. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$1, {
                    title: "This Website",
                    url: "https://www.github.com/jpeters8889/jamie-peters.co.uk"
                  }, {
                    intro: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="my-0"${_scopeId3}> Written in Laravel using a TDD, my first major project using InertiaJS. </p>`);
                      } else {
                        return [
                          createVNode("p", { class: "my-0" }, " Written in Laravel using a TDD, my first major project using InertiaJS. ")
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<p class="m-0"${_scopeId3}> This website started life as a simple Laravel and Blade app with a couple of Vue components for additional functionality. </p><p${_scopeId3}> In the latest update (January 2023) it has being rewritten to use InertiaJS and Vue, with TailwindCSS for styling. </p><p${_scopeId3}> This is my first major dive into using InertiaJS outside of local experiments, and I am looking forward to using it more going forward. </p>`);
                      } else {
                        return [
                          createVNode("p", { class: "m-0" }, " This website started life as a simple Laravel and Blade app with a couple of Vue components for additional functionality. "),
                          createVNode("p", null, " In the latest update (January 2023) it has being rewritten to use InertiaJS and Vue, with TailwindCSS for styling. "),
                          createVNode("p", null, " This is my first major dive into using InertiaJS outside of local experiments, and I am looking forward to using it more going forward. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("p", null, " Below are a few examples of personal projects I have done. "),
                    createVNode(_sfc_main$1, {
                      title: "Coeliac Sanctuary",
                      url: "https://www.coeliacsanctuary.co.uk",
                      github: "https://www.github.com/jpeters8889/coeliacsanctuary.co.uk"
                    }, {
                      intro: withCtx(() => [
                        createVNode("p", { class: "mt-0" }, " Written in Laravel using a TDD and DDD methodology, current front end stack is Blade with additional Vue Components and TailwindCSS, but there are plans being made to refactor to InertiaJS. "),
                        createVNode("p", { class: "mb-0" }, " I have also created an app using React Native which is available on Google Play and Apple Stores. ")
                      ]),
                      default: withCtx(() => [
                        createVNode("p", { class: "m-0" }, " Coeliac Sanctuary is my fiancees business. It was originally started in August 2014 as just Gluten Free blog for the Coeliac community, along with recipes, eating out guide and reviews. "),
                        createVNode("p", null, " Later in 2016 I created an online shop for the website, utilising the Stripe and PayPal APIs for handling payments. "),
                        createVNode("p", null, " A basic mobile app was created using Apache Cordova in 2017, primarily linking to the eating out guide section on the website. The app was used to display eateries in the database on an embedded Google map around the users location. The app was originally written in basic HTML, SCSS and JQuery. "),
                        createVNode("p", null, " In 2020 a brand new version of the website launched, completely rewritten from the ground up in Laravel using a test driven approach and a fresh new data structure using laravel migrations and custom built commands to transform the old legacy data structure and values into the new structure. "),
                        createVNode("p", null, " This new version took over 12 months to make in my spare time outside of work, but was a very rewarding project and still continues to be so to this day. "),
                        createVNode("p", null, " The website is now styled using Tailwind CSS with a customised configuration file for custom colours, sizes and breakpoints. "),
                        createVNode("p", null, " The website makes heavy use of Vue components, but is primarily a Blade powered website, but key parts of the website rely heavily on Vue. "),
                        createVNode("p", null, " All images on the website are hosted on Amazon S3, and all emails, transactional, and newsletters, are sent through Amazon SES, with the newsletter managed by Spatie's Mailcoach. "),
                        createVNode("p", null, " In early 2021 a brand new version of the mobile app was released, completely rewritten in React Native, the app is currently available on the Google Play and Apple stores, called Coeliac Sanctuary - On the Go. "),
                        createVNode("p", null, " I have plans to begin a rebuild of the website using InertiaJS from February 2023 when Laravel V10 is released, and this will also give me the opportunity to refactor parts of the website and improve code with additional things I have learnt over the years and implement additional strict code standards using PHP CS Fixer and Larastan. "),
                        createVNode("p", null, " The website is hosted on Digital Ocean, linked with Laravel Forge and deployed with Laravel Envoyer. ")
                      ]),
                      _: 1
                    }),
                    createVNode(_sfc_main$1, {
                      title: "This Website",
                      url: "https://www.github.com/jpeters8889/jamie-peters.co.uk"
                    }, {
                      intro: withCtx(() => [
                        createVNode("p", { class: "my-0" }, " Written in Laravel using a TDD, my first major project using InertiaJS. ")
                      ]),
                      default: withCtx(() => [
                        createVNode("p", { class: "m-0" }, " This website started life as a simple Laravel and Blade app with a couple of Vue components for additional functionality. "),
                        createVNode("p", null, " In the latest update (January 2023) it has being rewritten to use InertiaJS and Vue, with TailwindCSS for styling. "),
                        createVNode("p", null, " This is my first major dive into using InertiaJS outside of local experiments, and I am looking forward to using it more going forward. ")
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
              createVNode(_sfc_main$3, null, {
                title: withCtx(() => [
                  createTextVNode("Projects")
                ]),
                default: withCtx(() => [
                  createVNode("p", null, " Below are a few examples of personal projects I have done. "),
                  createVNode(_sfc_main$1, {
                    title: "Coeliac Sanctuary",
                    url: "https://www.coeliacsanctuary.co.uk",
                    github: "https://www.github.com/jpeters8889/coeliacsanctuary.co.uk"
                  }, {
                    intro: withCtx(() => [
                      createVNode("p", { class: "mt-0" }, " Written in Laravel using a TDD and DDD methodology, current front end stack is Blade with additional Vue Components and TailwindCSS, but there are plans being made to refactor to InertiaJS. "),
                      createVNode("p", { class: "mb-0" }, " I have also created an app using React Native which is available on Google Play and Apple Stores. ")
                    ]),
                    default: withCtx(() => [
                      createVNode("p", { class: "m-0" }, " Coeliac Sanctuary is my fiancees business. It was originally started in August 2014 as just Gluten Free blog for the Coeliac community, along with recipes, eating out guide and reviews. "),
                      createVNode("p", null, " Later in 2016 I created an online shop for the website, utilising the Stripe and PayPal APIs for handling payments. "),
                      createVNode("p", null, " A basic mobile app was created using Apache Cordova in 2017, primarily linking to the eating out guide section on the website. The app was used to display eateries in the database on an embedded Google map around the users location. The app was originally written in basic HTML, SCSS and JQuery. "),
                      createVNode("p", null, " In 2020 a brand new version of the website launched, completely rewritten from the ground up in Laravel using a test driven approach and a fresh new data structure using laravel migrations and custom built commands to transform the old legacy data structure and values into the new structure. "),
                      createVNode("p", null, " This new version took over 12 months to make in my spare time outside of work, but was a very rewarding project and still continues to be so to this day. "),
                      createVNode("p", null, " The website is now styled using Tailwind CSS with a customised configuration file for custom colours, sizes and breakpoints. "),
                      createVNode("p", null, " The website makes heavy use of Vue components, but is primarily a Blade powered website, but key parts of the website rely heavily on Vue. "),
                      createVNode("p", null, " All images on the website are hosted on Amazon S3, and all emails, transactional, and newsletters, are sent through Amazon SES, with the newsletter managed by Spatie's Mailcoach. "),
                      createVNode("p", null, " In early 2021 a brand new version of the mobile app was released, completely rewritten in React Native, the app is currently available on the Google Play and Apple stores, called Coeliac Sanctuary - On the Go. "),
                      createVNode("p", null, " I have plans to begin a rebuild of the website using InertiaJS from February 2023 when Laravel V10 is released, and this will also give me the opportunity to refactor parts of the website and improve code with additional things I have learnt over the years and implement additional strict code standards using PHP CS Fixer and Larastan. "),
                      createVNode("p", null, " The website is hosted on Digital Ocean, linked with Laravel Forge and deployed with Laravel Envoyer. ")
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$1, {
                    title: "This Website",
                    url: "https://www.github.com/jpeters8889/jamie-peters.co.uk"
                  }, {
                    intro: withCtx(() => [
                      createVNode("p", { class: "my-0" }, " Written in Laravel using a TDD, my first major project using InertiaJS. ")
                    ]),
                    default: withCtx(() => [
                      createVNode("p", { class: "m-0" }, " This website started life as a simple Laravel and Blade app with a couple of Vue components for additional functionality. "),
                      createVNode("p", null, " In the latest update (January 2023) it has being rewritten to use InertiaJS and Vue, with TailwindCSS for styling. "),
                      createVNode("p", null, " This is my first major dive into using InertiaJS outside of local experiments, and I am looking forward to using it more going forward. ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
