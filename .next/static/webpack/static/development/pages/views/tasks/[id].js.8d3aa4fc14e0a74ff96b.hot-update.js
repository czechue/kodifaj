webpackHotUpdate("static/development/pages/views/tasks/[id].js",{

/***/ "./components/shared/solutions/solution-item/without-task-data.component.tsx":
/*!***********************************************************************************!*\
  !*** ./components/shared/solutions/solution-item/without-task-data.component.tsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WithoutTaskDataComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solution_badge_solution_badge_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../solution-badge/solution-badge.component */ "./components/shared/solutions/solution-badge/solution-badge.component.tsx");
/* harmony import */ var _solution_link_solution_link_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../solution-link/solution-link.component */ "./components/shared/solutions/solution-link/solution-link.component.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function WithoutTaskDataComponent(_ref) {
  var solution = _ref.solution;
  var date = new Date(solution.createdAt);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
    className: "w-full px-3 py-4 rounded text-sm shadow hover:shadow-md"
  }, __jsx("div", {
    className: "flex items-center"
  }, __jsx("img", {
    className: "h-8 w-8 rounded overflow-hidden shadow-md",
    src: solution._user.photo,
    alt: "solution image"
  }), __jsx("span", {
    className: "pl-2"
  }, solution._user.login)), __jsx("span", {
    className: "text-gray-600 text-xs"
  }, date.toDateString()), __jsx("div", {
    className: "mt-2 flex items-center"
  }, __jsx(_solution_badge_solution_badge_component__WEBPACK_IMPORTED_MODULE_1__["default"], null, solution.phase), __jsx("div", {
    className: "ml-3"
  }, __jsx(_solution_link_solution_link_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
    url: solution.repo
  }, "GitHub")), __jsx("div", {
    className: "ml-3"
  }, __jsx(_solution_link_solution_link_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
    url: solution.demo
  }, "Live")))));
}

/***/ })

})
//# sourceMappingURL=[id].js.8d3aa4fc14e0a74ff96b.hot-update.js.map