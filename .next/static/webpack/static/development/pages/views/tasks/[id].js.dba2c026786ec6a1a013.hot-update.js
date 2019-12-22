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
  return __jsx("section", {
    className: "w-full px-3 py-4 rounded text-sm shadow hover:shadow-md"
  }, __jsx("div", {
    className: "flex items-center"
  }, __jsx("img", {
    className: "h-8 w-8 rounded overflow-hidden shadow-md",
    src: solution._task.images[0],
    alt: "solution image"
  }), __jsx("span", {
    className: "pl-2"
  }, solution._task.title)), __jsx("span", {
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
  }, "Live"))));
}

/***/ }),

/***/ "./components/shared/solutions/solutions.component.tsx":
/*!*************************************************************!*\
  !*** ./components/shared/solutions/solutions.component.tsx ***!
  \*************************************************************/
/*! exports provided: default, SolutionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SolutionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionType", function() { return SolutionType; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solution_item_without_task_data_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solution-item/without-task-data.component */ "./components/shared/solutions/solution-item/without-task-data.component.tsx");
/* harmony import */ var _solution_item_without_user_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solution-item/without-user-data.component */ "./components/shared/solutions/solution-item/without-user-data.component.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function SolutionsComponent(_ref) {
  var solutions = _ref.solutions,
      type = _ref.type;

  if (!solutions.length) {
    return null;
  }

  if (type === SolutionType.WithoutTaskData) {
    return __jsx("div", {
      className: "w-full flex justify-between flex-wrap flex-list__container"
    }, solutions.map(function (solution) {
      return __jsx("div", {
        key: solution._id,
        className: "w-1/2 px-2 mb-2 md:w-1/3 lg:w-1/4"
      }, __jsx(_solution_item_without_task_data_component__WEBPACK_IMPORTED_MODULE_1__["default"], {
        solution: solution
      }));
    }));
  }

  return __jsx("div", {
    className: "w-full flex justify-between flex-wrap flex-list__container"
  }, solutions.map(function (solution) {
    return __jsx("div", {
      key: solution._id,
      className: "w-full px-2 mb-2 md:w-1/2"
    }, __jsx(_solution_item_without_user_data_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
      solution: solution
    }));
  }));
}
var SolutionType;

(function (SolutionType) {
  SolutionType[SolutionType["WithoutUserData"] = 0] = "WithoutUserData";
  SolutionType[SolutionType["WithoutTaskData"] = 1] = "WithoutTaskData";
})(SolutionType || (SolutionType = {}));

/***/ })

})
//# sourceMappingURL=[id].js.dba2c026786ec6a1a013.hot-update.js.map