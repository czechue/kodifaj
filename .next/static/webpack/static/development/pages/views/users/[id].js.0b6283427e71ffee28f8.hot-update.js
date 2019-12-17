webpackHotUpdate("static/development/pages/views/users/[id].js",{

/***/ "./components/shared/solution-item/solution-item.component.tsx":
/*!*********************************************************************!*\
  !*** ./components/shared/solution-item/solution-item.component.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SolutionItemComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function BadgeComponent(_ref) {
  var children = _ref.children;
  return __jsx("span", {
    className: "inline-block mr-1 bg-pink-200 text-pink-700 text-xs px-1 rounded"
  }, "#", children);
}

function LinkComponent(_ref2) {
  var children = _ref2.children,
      url = _ref2.url;
  return __jsx("a", {
    className: "block text-violet_primary hover:text-gray-800 underline font-semibold w-full text-center",
    href: url
  }, children);
}

function SolutionItemComponent(_ref3) {
  var solution = _ref3.solution;
  return __jsx("section", {
    className: "w-full h-48 p-2 rounded text-sm shadow hover:shadow-md"
  }, __jsx(BadgeComponent, null, solution.phase), solution._user.photo && __jsx("img", {
    src: solution._user.photo,
    className: "my-2 w-16 h-16 mx-auto rounded-full",
    alt: "solution card"
  }), __jsx("span", {
    className: "block mb-2 text-sm text-gray-600 w-full text-center"
  }, solution._user.login), __jsx(LinkComponent, {
    url: solution.repo
  }, "GitHub"), __jsx(LinkComponent, {
    url: solution.demo
  }, "Live"));
}

/***/ })

})
//# sourceMappingURL=[id].js.0b6283427e71ffee28f8.hot-update.js.map