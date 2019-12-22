webpackHotUpdate("static/development/pages/views/tasks/[id].js",{

/***/ "./components/shared/solutions/solution-item/without-task-data.component.tsx":
false,

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
/* harmony import */ var _solution_item_without_user_data_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solution-item/without-user-data.component */ "./components/shared/solutions/solution-item/without-user-data.component.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

// import WithoutTaskDataComponent from './solution-item/without-task-data.component';

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
        className: "w-full px-2 mb-2 md:w-1/2"
      }, __jsx(_solution_item_without_user_data_component__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
    }, __jsx(_solution_item_without_user_data_component__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
//# sourceMappingURL=[id].js.e4f4bd2ba3d424dda150.hot-update.js.map