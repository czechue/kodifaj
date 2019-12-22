webpackHotUpdate("static/development/pages/views/tasks.js",{

/***/ "./components/task-list/task-list.component.tsx":
/*!******************************************************!*\
  !*** ./components/task-list/task-list.component.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TaskListComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _task_item_task_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-item/task-item.component */ "./components/task-list/task-item/task-item.component.tsx");
/* harmony import */ var _shared_heading_heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/heading/heading.component */ "./components/shared/heading/heading.component.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function TaskListComponent(_ref) {
  var tasks = _ref.tasks;

  if (!tasks) {
    return null;
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "mb-4"
  }, __jsx(_shared_heading_heading_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
    CustomTag: "span",
    size: "xsm",
    color: "pink_primary"
  }, "Sprawd\u017A i rozwi\u0105\u017C..."), __jsx(_shared_heading_heading_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
    CustomTag: "h2"
  }, "Najnowsze Zadania")), __jsx("div", {
    className: "flex flex-wrap md:-mx-2 flex-list__container"
  }, tasks.length && tasks.map(function (task) {
    return __jsx(_task_item_task_item_component__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: task._id,
      task: task
    });
  })));
}

/***/ })

})
//# sourceMappingURL=tasks.js.94fc1a39726ced285fe6.hot-update.js.map