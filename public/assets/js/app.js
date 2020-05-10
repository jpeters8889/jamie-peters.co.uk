(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/assets/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Image.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Image.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      "default": ''
    },
    classes: {},
    zoomable: {
      type: Boolean,
      "default": function _default() {
        return true;
      }
    }
  },
  data: function data() {
    return {
      showModal: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$root.$on('modal-closed', function () {
      _this.showModal = false;
    });
  },
  computed: {
    computedClasses: function computedClasses() {
      var classes = this.classes;

      if (!Array.isArray(classes)) {
        classes = classes.split(' ');
      }

      if (this.zoomable) {
        classes.push('cursor-pointer');
      }

      return classes;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Modal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Modal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    name: {
      type: String,
      "default": ''
    },
    modalClasses: {
      type: Array | String,
      "default": function _default() {
        return [];
      }
    },
    small: {
      type: Boolean,
      "default": false
    }
  },
  mounted: function mounted() {
    var _this = this;

    document.querySelector('body').classList.add('overflow-hidden');
    this.$root.$on('close-modal', function (modal) {
      if (!modal || modal === _this.name) {
        _this.close();
      }
    });
  },
  methods: {
    close: function close() {
      document.querySelector('body').classList.remove('overflow-hidden');
      this.$root.$emit('modal-closed', this.name);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Image.vue?vue&type=template&id=ac779ec0&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Image.vue?vue&type=template&id=ac779ec0& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: _vm.computedClasses },
    [
      _c("img", {
        attrs: { src: _vm.src, alt: _vm.alt },
        on: {
          click: function($event) {
            _vm.showModal = true
          }
        }
      }),
      _vm._v(" "),
      _vm.zoomable && _vm.showModal
        ? _c(
            "portal",
            { attrs: { to: "modal" } },
            [
              _c("modal", [
                _vm.alt
                  ? _c(
                      "div",
                      { staticClass: "text-center text-sm mb-2 leading-none" },
                      [_vm._v(_vm._s(_vm.alt))]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("img", {
                  staticClass: "max-w-full max-h-full",
                  attrs: { src: _vm.src, alt: _vm.alt }
                })
              ])
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Modal.vue?vue&type=template&id=5f7088f2&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Modal.vue?vue&type=template&id=5f7088f2& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "z-50 fixed inset-0 w-full h-full bg-black-80 flex justify-center items-center",
      on: {
        click: function($event) {
          if ($event.target !== $event.currentTarget) {
            return null
          }
          return _vm.close()
        }
      }
    },
    [
      _c(
        "div",
        {
          staticClass:
            "h-auto max-h-3/4 shadow p-2 border-2 border-blue-light w-auto max-w-11/12 rounded-lg bg-blue-900 overflow-y-scroll",
          class: _vm.modalClasses,
          attrs: { class: _vm.small ? "max-w-modal-small" : "max-w-modal" }
        },
        [
          _c("div", { staticClass: "h-full relative" }, [
            _c(
              "div",
              {
                staticClass:
                  "sticky ml-auto top-0 right-0 bg-white p-1 -mt-1 -mr-1 leading-none z-50 rounded border border-black cursor-pointer transition-bg",
                staticStyle: { width: "22px" },
                on: {
                  click: function($event) {
                    return _vm.close()
                  }
                }
              },
              [_c("font-awesome-icon", { attrs: { icon: ["fas", "times"] } })],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "h-full w-full bg-white-80 p-2 rounded",
                staticStyle: { "margin-top": "-20px" }
              },
              [_vm._t("default")],
              2
            )
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Application.js":
/*!*************************************!*\
  !*** ./resources/js/Application.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Application; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");
/* harmony import */ var v_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! v-tooltip */ "./node_modules/v-tooltip/dist/v-tooltip.esm.js");
/* harmony import */ var portal_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! portal-vue */ "./node_modules/portal-vue/dist/portal-vue.common.js");
/* harmony import */ var portal_vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(portal_vue__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! turbolinks */ "./node_modules/turbolinks/dist/turbolinks.js");
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(turbolinks__WEBPACK_IMPORTED_MODULE_4__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Application = /*#__PURE__*/function () {
  function Application(config) {
    _classCallCheck(this, Application);

    this.vue = new vue__WEBPACK_IMPORTED_MODULE_0___default.a();
    this.config = config;
  }

  _createClass(Application, [{
    key: "build",
    value: function build() {
      turbolinks__WEBPACK_IMPORTED_MODULE_4___default.a.start();
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('font-awesome-icon', _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"]);
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(v_tooltip__WEBPACK_IMPORTED_MODULE_2__["default"]);
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(portal_vue__WEBPACK_IMPORTED_MODULE_3___default.a);
      this.app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
        el: '#app',
        mounted: function mounted() {//
        }
      });
    }
  }]);

  return Application;
}();



/***/ }),

/***/ "./resources/js/Components/Image.vue":
/*!*******************************************!*\
  !*** ./resources/js/Components/Image.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Image_vue_vue_type_template_id_ac779ec0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image.vue?vue&type=template&id=ac779ec0& */ "./resources/js/Components/Image.vue?vue&type=template&id=ac779ec0&");
/* harmony import */ var _Image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image.vue?vue&type=script&lang=js& */ "./resources/js/Components/Image.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Image_vue_vue_type_template_id_ac779ec0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Image_vue_vue_type_template_id_ac779ec0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Image.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Image.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Components/Image.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Image.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Image.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Image.vue?vue&type=template&id=ac779ec0&":
/*!**************************************************************************!*\
  !*** ./resources/js/Components/Image.vue?vue&type=template&id=ac779ec0& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_template_id_ac779ec0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Image.vue?vue&type=template&id=ac779ec0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Image.vue?vue&type=template&id=ac779ec0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_template_id_ac779ec0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Image_vue_vue_type_template_id_ac779ec0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Components/Modal.vue":
/*!*******************************************!*\
  !*** ./resources/js/Components/Modal.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal_vue_vue_type_template_id_5f7088f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.vue?vue&type=template&id=5f7088f2& */ "./resources/js/Components/Modal.vue?vue&type=template&id=5f7088f2&");
/* harmony import */ var _Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.vue?vue&type=script&lang=js& */ "./resources/js/Components/Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Modal_vue_vue_type_template_id_5f7088f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Modal_vue_vue_type_template_id_5f7088f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Modal.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/Components/Modal.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Modal.vue?vue&type=template&id=5f7088f2&":
/*!**************************************************************************!*\
  !*** ./resources/js/Components/Modal.vue?vue&type=template&id=5f7088f2& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_5f7088f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=template&id=5f7088f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Modal.vue?vue&type=template&id=5f7088f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_5f7088f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_5f7088f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Plugins/icons.js":
/*!***************************************!*\
  !*** ./resources/js/Plugins/icons.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faTwitter */ "./node_modules/@fortawesome/free-brands-svg-icons/faTwitter.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faLinkedinIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faLinkedinIn */ "./node_modules/@fortawesome/free-brands-svg-icons/faLinkedinIn.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faLinkedinIn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faLinkedinIn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faGithub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faGithub */ "./node_modules/@fortawesome/free-brands-svg-icons/faGithub.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faGithub__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faGithub__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faRedditAlien__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faRedditAlien */ "./node_modules/@fortawesome/free-brands-svg-icons/faRedditAlien.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faRedditAlien__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faRedditAlien__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faTimes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faTimes */ "./node_modules/@fortawesome/free-solid-svg-icons/faTimes.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faTimes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faTimes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");







/* harmony default export */ __webpack_exports__["default"] = (function () {
  _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEnvelope"]);
  _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_1__["faTwitter"]);
  _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_brands_svg_icons_faLinkedinIn__WEBPACK_IMPORTED_MODULE_2__["faLinkedinIn"]);
  _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_brands_svg_icons_faRedditAlien__WEBPACK_IMPORTED_MODULE_4__["faRedditAlien"]);
  _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_brands_svg_icons_faGithub__WEBPACK_IMPORTED_MODULE_3__["faGithub"]);
  _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons_faTimes__WEBPACK_IMPORTED_MODULE_5__["faTimes"]);
  _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["dom"].watch();
});

/***/ }),

/***/ "./resources/js/Plugins/index.js":
/*!***************************************!*\
  !*** ./resources/js/Plugins/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons */ "./resources/js/Plugins/icons.js");
 // import axios from "axios";
// import lodash from "lodash";
// import moment from "moment";
//
// window.axios = axios;
// window._ = lodash;
// window.moment = moment;

Object(_icons__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Application */ "./resources/js/Application.js");
/* harmony import */ var _Plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Plugins */ "./resources/js/Plugins/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./resources/js/components.js");



vue__WEBPACK_IMPORTED_MODULE_0___default.a.config.productionTip = false;

(function () {
  this.app = function (config) {
    return new _Application__WEBPACK_IMPORTED_MODULE_1__["default"](config);
  };
}).call(window);

/***/ }),

/***/ "./resources/js/components.js":
/*!************************************!*\
  !*** ./resources/js/components.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Image */ "./resources/js/Components/Image.vue");
/* harmony import */ var _Components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Modal */ "./resources/js/Components/Modal.vue");



vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('jp-image', _Components_Image__WEBPACK_IMPORTED_MODULE_1__["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('modal', _Components_Modal__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./resources/scss/app.scss":
/*!*********************************!*\
  !*** ./resources/scss/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/scss/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /media/jamie/Acer/code/jamie-peters/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /media/jamie/Acer/code/jamie-peters/resources/scss/app.scss */"./resources/scss/app.scss");


/***/ })

},[[0,"/assets/js/manifest","/assets/js/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL0NvbXBvbmVudHMvSW1hZ2UudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvQ29tcG9uZW50cy9Nb2RhbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL0NvbXBvbmVudHMvSW1hZ2UudnVlP2E5ODMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL0NvbXBvbmVudHMvTW9kYWwudnVlPzc3NTUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL0FwcGxpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9Db21wb25lbnRzL0ltYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvQ29tcG9uZW50cy9JbWFnZS52dWU/ZTVkZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvQ29tcG9uZW50cy9JbWFnZS52dWU/NDNkZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvQ29tcG9uZW50cy9Nb2RhbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL0NvbXBvbmVudHMvTW9kYWwudnVlP2M5YTgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL0NvbXBvbmVudHMvTW9kYWwudnVlPzgyZWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL1BsdWdpbnMvaWNvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL1BsdWdpbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Nzcy9hcHAuc2NzcyJdLCJuYW1lcyI6WyJBcHBsaWNhdGlvbiIsImNvbmZpZyIsInZ1ZSIsIlZ1ZSIsIlR1cmJvbGlua3MiLCJzdGFydCIsImNvbXBvbmVudCIsIkZvbnRBd2Vzb21lSWNvbiIsInVzZSIsInZUb29sVGlwIiwiUG9ydGFsVnVlIiwiYXBwIiwiZWwiLCJtb3VudGVkIiwibGlicmFyeSIsImFkZCIsImZhRW52ZWxvcGUiLCJmYVR3aXR0ZXIiLCJmYUxpbmtlZGluSW4iLCJmYVJlZGRpdEFsaWVuIiwiZmFHaXRodWIiLCJmYVRpbWVzIiwiZG9tIiwid2F0Y2giLCJpY29ucyIsInByb2R1Y3Rpb25UaXAiLCJjYWxsIiwid2luZG93IiwiSW1hZ2UiLCJNb2RhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBREE7QUFLQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQUxBO0FBU0EsZUFUQTtBQVVBO0FBQ0EsbUJBREE7QUFFQTtBQUFBO0FBQUE7QUFGQTtBQVZBLEdBREE7QUFpQkE7QUFBQTtBQUNBO0FBREE7QUFBQSxHQWpCQTtBQXFCQSxTQXJCQSxxQkFxQkE7QUFBQTs7QUFDQTtBQUNBO0FBQ0EsS0FGQTtBQUdBLEdBekJBO0FBMkJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFiQTtBQTNCQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNJQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQUtBO0FBQ0EsMEJBREE7QUFFQTtBQUNBO0FBQ0E7QUFKQSxLQUxBO0FBV0E7QUFDQSxtQkFEQTtBQUVBO0FBRkE7QUFYQSxHQURBO0FBa0JBLFNBbEJBLHFCQWtCQTtBQUFBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUpBO0FBS0EsR0ExQkE7QUE0QkE7QUFDQSxTQURBLG1CQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUE1QkEsRzs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssNkJBQTZCO0FBQ2xDO0FBQ0E7QUFDQSxnQkFBZ0IsNkJBQTZCO0FBQzdD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QUNBO0FBRWUsMkVBQU07QUFDakJDLDJFQUFPLENBQUNDLEdBQVIsQ0FBWUMsNEVBQVo7QUFDQUYsMkVBQU8sQ0FBQ0MsR0FBUixDQUFZRSxzRkFBWjtBQUNBSCwyRUFBTyxDQUFDQyxHQUFSLENBQVlHLDRGQUFaO0FBQ0FKLDJFQUFPLENBQUNDLEdBQVIsQ0FBWUksOEZBQVo7QUFDQUwsMkVBQU8sQ0FBQ0MsR0FBUixDQUFZSyxvRkFBWjtBQUVBTiwyRUFBTyxDQUFDQyxHQUFSLENBQVlNLGlGQUFaO0FBRUFDLHVFQUFHLENBQUNDLEtBQUo7QUFDSCxDQVZELEU7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7Q0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUMsc0RBQUssRzs7Ozs7Ozs7Ozs7O0FDVEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUFyQiwwQ0FBRyxDQUFDRixNQUFKLENBQVd3QixhQUFYLEdBQTJCLEtBQTNCO0FBRUE7QUFFQSxDQUFDLFlBQVc7QUFDUixPQUFLZCxHQUFMLEdBQVcsVUFBU1YsTUFBVCxFQUFpQjtBQUN4QixXQUFPLElBQUlELG9EQUFKLENBQWdCQyxNQUFoQixDQUFQO0FBQ0gsR0FGRDtBQUdILENBSkQsRUFJR3lCLElBSkgsQ0FJUUMsTUFKUixFOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUF4QiwwQ0FBRyxDQUFDRyxTQUFKLENBQWMsVUFBZCxFQUEwQnNCLHlEQUExQjtBQUNBekIsMENBQUcsQ0FBQ0csU0FBSixDQUFjLE9BQWQsRUFBdUJ1Qix5REFBdkIsRTs7Ozs7Ozs7Ozs7QUNMQSx5QyIsImZpbGUiOiIvYXNzZXRzL2pzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IDpjbGFzcz1cImNvbXB1dGVkQ2xhc3Nlc1wiPlxuICAgICAgICA8aW1nIDpzcmM9XCJzcmNcIiA6YWx0PVwiYWx0XCIgQGNsaWNrPVwic2hvd01vZGFsID0gdHJ1ZVwiLz5cblxuICAgICAgICA8cG9ydGFsIHRvPVwibW9kYWxcIiB2LWlmPVwiem9vbWFibGUgJiYgc2hvd01vZGFsXCI+XG4gICAgICAgICAgICA8bW9kYWw+XG4gICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiYWx0XCIgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIG1iLTIgbGVhZGluZy1ub25lXCI+e3sgYWx0IH19PC9kaXY+XG4gICAgICAgICAgICAgICAgPGltZyA6c3JjPVwic3JjXCIgOmFsdD1cImFsdFwiIGNsYXNzPVwibWF4LXctZnVsbCBtYXgtaC1mdWxsXCIgLz5cbiAgICAgICAgICAgIDwvbW9kYWw+XG4gICAgICAgIDwvcG9ydGFsPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBzcmM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWx0OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsYXNzZXM6IHt9LFxuICAgICAgICAgICAgem9vbWFibGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHRydWUsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YTogKCkgPT4gKHtcbiAgICAgICAgICBzaG93TW9kYWw6IGZhbHNlLFxuICAgICAgICB9KSxcblxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy4kcm9vdC4kb24oJ21vZGFsLWNsb3NlZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgY29tcHV0ZWRDbGFzc2VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNsYXNzZXMgPSB0aGlzLmNsYXNzZXM7XG5cbiAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2xhc3NlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlcyA9IGNsYXNzZXMuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy56b29tYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLnB1c2goJ2N1cnNvci1wb2ludGVyJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiei01MCBmaXhlZCBpbnNldC0wIHctZnVsbCBoLWZ1bGwgYmctYmxhY2stODAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIiBAY2xpY2suc2VsZj1cImNsb3NlKClcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImgtYXV0byBtYXgtaC0zLzQgc2hhZG93IHAtMiBib3JkZXItMiBib3JkZXItYmx1ZS1saWdodCB3LWF1dG8gbWF4LXctMTEvMTIgcm91bmRlZC1sZyBiZy1ibHVlLTkwMCBvdmVyZmxvdy15LXNjcm9sbFwiXG4gICAgICAgIDpjbGFzcz1cIm1vZGFsQ2xhc3Nlc1wiIHYtYmluZDpjbGFzcz1cInNtYWxsID8gJ21heC13LW1vZGFsLXNtYWxsJyA6ICdtYXgtdy1tb2RhbCdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoLWZ1bGwgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RpY2t5IG1sLWF1dG8gdG9wLTAgcmlnaHQtMCBiZy13aGl0ZSBwLTEgLW10LTEgLW1yLTEgbGVhZGluZy1ub25lIHotNTAgcm91bmRlZCBib3JkZXIgYm9yZGVyLWJsYWNrIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24tYmdcIlxuICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiY2xvc2UoKVwiIHN0eWxlPVwid2lkdGg6IDIycHg7XCI+XG4gICAgICAgICAgICAgICAgICAgIDxmb250LWF3ZXNvbWUtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ3RpbWVzJ11cIj48L2ZvbnQtYXdlc29tZS1pY29uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoLWZ1bGwgdy1mdWxsIGJnLXdoaXRlLTgwIHAtMiByb3VuZGVkXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAtMjBweDtcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGFsQ2xhc3Nlczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5fFN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNtYWxsOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93LWhpZGRlbicpO1xuXG4gICAgICAgICAgICB0aGlzLiRyb290LiRvbignY2xvc2UtbW9kYWwnLCAobW9kYWwpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIW1vZGFsIHx8IG1vZGFsID09PSB0aGlzLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGNsb3NlKCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdy1oaWRkZW4nKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRyb290LiRlbWl0KCdtb2RhbC1jbG9zZWQnLCB0aGlzLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBjbGFzczogX3ZtLmNvbXB1dGVkQ2xhc3NlcyB9LFxuICAgIFtcbiAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uc3JjLCBhbHQ6IF92bS5hbHQgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICBfdm0uc2hvd01vZGFsID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnpvb21hYmxlICYmIF92bS5zaG93TW9kYWxcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiBcIm1vZGFsXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIm1vZGFsXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uYWx0XG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIG1iLTIgbGVhZGluZy1ub25lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uYWx0KSldXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYXgtdy1mdWxsIG1heC1oLWZ1bGxcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLnNyYywgYWx0OiBfdm0uYWx0IH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgXCJ6LTUwIGZpeGVkIGluc2V0LTAgdy1mdWxsIGgtZnVsbCBiZy1ibGFjay04MCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiLFxuICAgICAgb246IHtcbiAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0ICE9PSAkZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIF92bS5jbG9zZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImgtYXV0byBtYXgtaC0zLzQgc2hhZG93IHAtMiBib3JkZXItMiBib3JkZXItYmx1ZS1saWdodCB3LWF1dG8gbWF4LXctMTEvMTIgcm91bmRlZC1sZyBiZy1ibHVlLTkwMCBvdmVyZmxvdy15LXNjcm9sbFwiLFxuICAgICAgICAgIGNsYXNzOiBfdm0ubW9kYWxDbGFzc2VzLFxuICAgICAgICAgIGF0dHJzOiB7IGNsYXNzOiBfdm0uc21hbGwgPyBcIm1heC13LW1vZGFsLXNtYWxsXCIgOiBcIm1heC13LW1vZGFsXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoLWZ1bGwgcmVsYXRpdmVcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJzdGlja3kgbWwtYXV0byB0b3AtMCByaWdodC0wIGJnLXdoaXRlIHAtMSAtbXQtMSAtbXItMSBsZWFkaW5nLW5vbmUgei01MCByb3VuZGVkIGJvcmRlciBib3JkZXItYmxhY2sgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi1iZ1wiLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjIycHhcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2xvc2UoKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW19jKFwiZm9udC1hd2Vzb21lLWljb25cIiwgeyBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJ0aW1lc1wiXSB9IH0pXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImgtZnVsbCB3LWZ1bGwgYmctd2hpdGUtODAgcC0yIHJvdW5kZWRcIixcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi10b3BcIjogXCItMjBweFwiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgICAgICAgICAgICAyXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCB7Rm9udEF3ZXNvbWVJY29ufSBmcm9tIFwiQGZvcnRhd2Vzb21lL3Z1ZS1mb250YXdlc29tZVwiO1xuaW1wb3J0IHZUb29sVGlwIGZyb20gXCJ2LXRvb2x0aXBcIjtcbmltcG9ydCBQb3J0YWxWdWUgZnJvbSBcInBvcnRhbC12dWVcIjtcbmltcG9ydCBUdXJib2xpbmtzIGZyb20gXCJ0dXJib2xpbmtzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcGxpY2F0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICB0aGlzLnZ1ZSA9IG5ldyBWdWUoKTtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgfVxuXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIFR1cmJvbGlua3Muc3RhcnQoKTtcblxuICAgICAgICBWdWUuY29tcG9uZW50KCdmb250LWF3ZXNvbWUtaWNvbicsIEZvbnRBd2Vzb21lSWNvbik7XG4gICAgICAgIFZ1ZS51c2UodlRvb2xUaXApO1xuICAgICAgICBWdWUudXNlKFBvcnRhbFZ1ZSk7XG5cbiAgICAgICAgdGhpcy5hcHAgPSBuZXcgVnVlKHtcbiAgICAgICAgICAgIGVsOiAnI2FwcCcsXG4gICAgICAgICAgICBtb3VudGVkOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JbWFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YWM3NzllYzAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSW1hZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9JbWFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9tZWRpYS9qYW1pZS9BY2VyL2NvZGUvamFtaWUtcGV0ZXJzL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2FjNzc5ZWMwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2FjNzc5ZWMwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2FjNzc5ZWMwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9JbWFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YWM3NzllYzAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYWM3NzllYzAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9Db21wb25lbnRzL0ltYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW1hZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ltYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbWFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YWM3NzllYzAmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL01vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZjcwODhmMiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Nb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL21lZGlhL2phbWllL0FjZXIvY29kZS9qYW1pZS1wZXRlcnMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWY3MDg4ZjInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWY3MDg4ZjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWY3MDg4ZjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZjcwODhmMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1ZjcwODhmMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL0NvbXBvbmVudHMvTW9kYWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Nb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZjcwODhmMiZcIiIsImltcG9ydCB7bGlicmFyeSwgZG9tfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnXG5pbXBvcnQge2ZhVHdpdHRlcn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMvZmFUd2l0dGVyXCI7XG5pbXBvcnQge2ZhTGlua2VkaW5Jbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMvZmFMaW5rZWRpbkluXCI7XG5pbXBvcnQge2ZhR2l0aHVifSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYUdpdGh1YlwiO1xuaW1wb3J0IHtmYVJlZGRpdEFsaWVufSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucy9mYVJlZGRpdEFsaWVuXCI7XG5pbXBvcnQge2ZhVGltZXN9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMvZmFUaW1lc1wiO1xuaW1wb3J0IHtmYUVudmVsb3BlfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBsaWJyYXJ5LmFkZChmYUVudmVsb3BlKTtcbiAgICBsaWJyYXJ5LmFkZChmYVR3aXR0ZXIpO1xuICAgIGxpYnJhcnkuYWRkKGZhTGlua2VkaW5Jbik7XG4gICAgbGlicmFyeS5hZGQoZmFSZWRkaXRBbGllbik7XG4gICAgbGlicmFyeS5hZGQoZmFHaXRodWIpO1xuXG4gICAgbGlicmFyeS5hZGQoZmFUaW1lcyk7XG5cbiAgICBkb20ud2F0Y2goKTtcbn1cbiIsImltcG9ydCBpY29ucyBmcm9tIFwiLi9pY29uc1wiO1xuLy8gaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuLy8gaW1wb3J0IGxvZGFzaCBmcm9tIFwibG9kYXNoXCI7XG4vLyBpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbi8vXG4vLyB3aW5kb3cuYXhpb3MgPSBheGlvcztcbi8vIHdpbmRvdy5fID0gbG9kYXNoO1xuLy8gd2luZG93Lm1vbWVudCA9IG1vbWVudDtcblxuaWNvbnMoKTtcbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBBcHBsaWNhdGlvbiBmcm9tIFwiLi9BcHBsaWNhdGlvblwiO1xuaW1wb3J0ICcuL1BsdWdpbnMnO1xuXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZTtcblxuaW1wb3J0ICcuL2NvbXBvbmVudHMnO1xuXG4oZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hcHAgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBcHBsaWNhdGlvbihjb25maWcpO1xuICAgIH1cbn0pLmNhbGwod2luZG93KTtcbiIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IEltYWdlIGZyb20gXCIuL0NvbXBvbmVudHMvSW1hZ2VcIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi9Db21wb25lbnRzL01vZGFsXCI7XG5cblZ1ZS5jb21wb25lbnQoJ2pwLWltYWdlJywgSW1hZ2UpO1xuVnVlLmNvbXBvbmVudCgnbW9kYWwnLCBNb2RhbCk7XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=