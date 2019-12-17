webpackHotUpdate("static/development/pages/views/users/[id].js",{

/***/ "./components/user-detail/user-detail.component.tsx":
/*!**********************************************************!*\
  !*** ./components/user-detail/user-detail.component.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserDetailComponent; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info/info.component */ "./components/user-detail/info/info.component.tsx");
/* harmony import */ var _shared_heading_heading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/heading/heading.component */ "./components/shared/heading/heading.component.tsx");
/* harmony import */ var _shared_solutions_solutions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/solutions/solutions.component */ "./components/shared/solutions/solutions.component.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Heading = function Heading(_ref) {
  var children = _ref.children;
  return __jsx(_shared_heading_heading_component__WEBPACK_IMPORTED_MODULE_3__["default"], {
    orientation: "left",
    size: "2xl",
    font: "thin",
    tracking: "wide"
  }, children);
};

function UserDetailComponent(_ref2) {
  var user = _ref2.user;
  return __jsx("div", {
    className: "flex flex-wrap -mx-1 overflow-hidden"
  }, __jsx("div", {
    className: "my-1 px-1 w-full overflow-hidden sm:w-1/4 sm:order-last"
  }, __jsx(_info_info_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
    user: user
  })), __jsx("div", {
    className: "my-1 px-1 w-full overflow-hidden sm:w-3/4 sm:order-first"
  }, __jsx(Heading, null, "Twoje rozwi\u0105zania"), __jsx(_shared_solutions_solutions_component__WEBPACK_IMPORTED_MODULE_4__["default"], {
    solutions: user._solutions
  }), __jsx(Heading, null, "Twoje zadania"), __jsx("pre", null, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(user._tasks, null, 2))));
}

/***/ })

})
//# sourceMappingURL=[id].js.d1b5d061516775ea8f64.hot-update.js.map