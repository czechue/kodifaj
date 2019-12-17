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
  }, __jsx(BadgeComponent, null, solution.phase), __jsx("img", {
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

/***/ }),

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
/* harmony import */ var _shared_solution_item_solution_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/solution-item/solution-item.component */ "./components/shared/solution-item/solution-item.component.tsx");

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
  }, __jsx(Heading, null, "Twoje rozwi\u0105zania"), user._solutions.map(function (solution) {
    return __jsx(_shared_solution_item_solution_item_component__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: solution._id,
      solution: solution
    });
  }), __jsx(Heading, null, "Twoje zadania"), __jsx("pre", null, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(user._tasks, null, 2))));
}

/***/ })

})
//# sourceMappingURL=[id].js.9d852ca89ebbd83cb775.hot-update.js.map