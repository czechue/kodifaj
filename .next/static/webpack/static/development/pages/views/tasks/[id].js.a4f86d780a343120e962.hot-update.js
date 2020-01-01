webpackHotUpdate("static/development/pages/views/tasks/[id].js",{

/***/ "./components/task-detail/content/content.component.tsx":
/*!**************************************************************!*\
  !*** ./components/task-detail/content/content.component.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentComponent; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_heading_heading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/heading/heading.component */ "./components/shared/heading/heading.component.tsx");
/* harmony import */ var _solution_form_solution_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./solution-form/solution-form.component */ "./components/task-detail/content/solution-form/solution-form.component.tsx");
/* harmony import */ var _shared_solutions_solutions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/solutions/solutions.component */ "./components/shared/solutions/solutions.component.tsx");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }






var Heading = function Heading(_ref) {
  var children = _ref.children;
  return __jsx(_shared_heading_heading_component__WEBPACK_IMPORTED_MODULE_8__["default"], {
    CustomTag: "h2",
    orientation: "left",
    size: "2xl",
    font: "thin",
    tracking: "wide",
    classNames: "mb-2"
  }, children);
};

function ContentComponent(_ref2) {
  var content = _ref2.content,
      _ref2$solutions = _ref2.solutions,
      solutions = _ref2$solutions === void 0 ? [] : _ref2$solutions,
      onSubmit = _ref2.onSubmit,
      loading = _ref2.loading;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])({
    solution: false,
    tips: false,
    solutions: false
  }),
      openSections = _useState[0],
      setOpenedSections = _useState[1];

  function toggleSection(section) {
    setOpenedSections(function (prevState) {
      return _objectSpread({}, prevState, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, section, !prevState[section]));
    });
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("section", null, __jsx(Heading, null, "Zadanie"), __jsx("p", null, content)), __jsx("section", {
    className: "mt-6"
  }, __jsx("div", {
    className: "flex"
  }, __jsx(Heading, null, "Dodaj rozwi\u0105zanie"), __jsx("button", {
    onClick: function onClick() {
      return toggleSection(OpenableSections.SOLUTION);
    }
  }, __jsx("img", {
    className: "mx-1 h-4 w-4",
    src: openSections.solution ? '/static/images/chevron-thin-right.svg' : '/static/images/chevron-thin-down.svg',
    alt: "section toggler"
  }))), openSections.solution && __jsx(_solution_form_solution_form_component__WEBPACK_IMPORTED_MODULE_9__["default"], {
    loading: loading,
    onSubmit: onSubmit
  })), __jsx("section", {
    className: "mt-6"
  }, __jsx(Heading, null, "Wskaz\xF3wki"), __jsx("p", null, content)), __jsx("section", {
    className: "mt-6"
  }, __jsx(Heading, null, "Rozwi\u0105zania"), __jsx(_shared_solutions_solutions_component__WEBPACK_IMPORTED_MODULE_10__["default"], {
    type: _shared_solutions_solutions_component__WEBPACK_IMPORTED_MODULE_10__["SolutionType"].WithoutTaskData,
    solutions: solutions
  })));
}
var OpenableSections;

(function (OpenableSections) {
  OpenableSections["SOLUTION"] = "solution";
  OpenableSections["TIPS"] = "tips";
  OpenableSections["SOLITIONS"] = "solutions";
})(OpenableSections || (OpenableSections = {}));

/***/ })

})
//# sourceMappingURL=[id].js.a4f86d780a343120e962.hot-update.js.map