webpackHotUpdate("static/development/pages/views/tasks.js",{

/***/ "./components/task-list/task-item/task-item.component.tsx":
/*!****************************************************************!*\
  !*** ./components/task-list/task-item/task-item.component.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TaskItemComponent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function BadgeComponent(_ref) {
  var children = _ref.children;
  return __jsx("span", {
    className: "inline-block mr-1 bg-pink-200 text-pink-700 text-xs px-1 rounded"
  }, "#", children);
}

function TaskItemComponent(_ref2) {
  var task = _ref2.task;
  return __jsx("div", {
    className: "w-full my-4 sm:px-2 sm:w-1/2 md:w-1/3 lg:w-1/3"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '/tasks/[id]',
    as: "/tasks/".concat(task._id.toString())
  }, __jsx("a", null, __jsx("div", {
    className: "relative pb-5/6 "
  }, __jsx("img", {
    className: "absolute h-full w-full object-cover rounded-lg overflow-hidden shadow-md",
    src: task.images[0],
    alt: task.title
  })), __jsx("div", {
    className: "relative -mt-16"
  }, __jsx("div", {
    className: "bg-white p-6 rounded-lg shadow-lg"
  }, __jsx("div", {
    className: "text-gray-600 text-xs font-semibold uppercase tracking-widest"
  }, task._user.login), __jsx("h4", {
    className: "font-semibold text-lg leading-tight"
  }, task.title), task.tags && __jsx("div", {
    className: "mt-1"
  }, task.tags.map(function (t, index) {
    return __jsx(BadgeComponent, {
      key: index
    }, t);
  })), __jsx("div", {
    className: "mt-4 flex items-center text-xs"
  }, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array(5)).map(function (_, index) {
    return __jsx("svg", {
      key: index,
      className: "w-4 h4 fill-current text-pink__accent",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, __jsx("path", {
      d: "M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
    }));
  }), ' ', task.reviewCount && __jsx("span", {
    className: "text-xs text-gray-600 ml-2"
  }, "(", task.reviewCount, " g\u0142os\xF3w)")))))));
}

/***/ })

})
//# sourceMappingURL=tasks.js.cd144e62c8d519e08a61.hot-update.js.map