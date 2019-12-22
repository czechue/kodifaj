webpackHotUpdate("static/development/pages/views/users/[id].js",{

/***/ "./components/shared/solutions/solution-item/without-user-data.component.tsx":
/*!***********************************************************************************!*\
  !*** ./components/shared/solutions/solution-item/without-user-data.component.tsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WithoutUserDataComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solution_badge_solution_badge_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../solution-badge/solution-badge.component */ "./components/shared/solutions/solution-badge/solution-badge.component.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import SolutionLinkComponent from '../solution-link/solution-link.component';

function WithoutUserDataComponent(_ref) {
  var solution = _ref.solution;
  return __jsx("section", {
    className: "w-full h-48 rounded text-sm shadow hover:shadow-md"
  }, __jsx("div", {
    className: "relative pb-11/12 solution-item"
  }, __jsx("img", {
    className: "absolute h-full w-full object-cover rounded overflow-hidden shadow-md",
    src: solution._task.images[0],
    alt: solution._task.title
  })), __jsx("div", {
    className: "flex justify-center pt-3"
  }, __jsx(_solution_badge_solution_badge_component__WEBPACK_IMPORTED_MODULE_1__["default"], null, solution.phase)));
}

/***/ })

})
//# sourceMappingURL=[id].js.d101c1f1de0f8609d98f.hot-update.js.map