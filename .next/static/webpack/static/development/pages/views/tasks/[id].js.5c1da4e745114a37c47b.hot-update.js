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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_heading_heading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/heading/heading.component */ "./components/shared/heading/heading.component.tsx");
/* harmony import */ var _solution_form_solution_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solution-form/solution-form.component */ "./components/task-detail/content/solution-form/solution-form.component.tsx");
/* harmony import */ var _shared_solutions_solutions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/solutions/solutions.component */ "./components/shared/solutions/solutions.component.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Heading = function Heading(_ref) {
  var children = _ref.children;
  return __jsx(_shared_heading_heading_component__WEBPACK_IMPORTED_MODULE_1__["default"], {
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    solution: false,
    tips: false,
    solutions: false
  }),
      openSections = _useState[0],
      setOpenedSections = _useState[1];

  function toggleSection(section) {}

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", null, __jsx(Heading, null, "Zadanie"), __jsx("p", null, content)), __jsx("section", {
    className: "mt-6"
  }, __jsx(Heading, null, "Twoje rozwi\u0105zanie"), __jsx(_solution_form_solution_form_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
    loading: loading,
    onSubmit: onSubmit
  })), __jsx("section", {
    className: "mt-6"
  }, __jsx(Heading, null, "Wskaz\xF3wki"), __jsx("p", null, content)), __jsx("section", {
    className: "mt-6"
  }, __jsx(Heading, null, "Rozwi\u0105zania"), __jsx(_shared_solutions_solutions_component__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: _shared_solutions_solutions_component__WEBPACK_IMPORTED_MODULE_3__["SolutionType"].WithoutTaskData,
    solutions: solutions
  })));
}

/***/ })

})
//# sourceMappingURL=[id].js.5c1da4e745114a37c47b.hot-update.js.map