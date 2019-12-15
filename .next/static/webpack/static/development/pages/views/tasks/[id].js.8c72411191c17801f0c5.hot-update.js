webpackHotUpdate("static/development/pages/views/tasks/[id].js",{

/***/ "./components/task-detail/task-detail.component.tsx":
/*!**********************************************************!*\
  !*** ./components/task-detail/task-detail.component.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TaskDetailComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel/carousel.component */ "./components/task-detail/carousel/carousel.component.tsx");
/* harmony import */ var _aside_aside_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aside/aside.component */ "./components/task-detail/aside/aside.component.tsx");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content/content.component */ "./components/task-detail/content/content.component.tsx");
/* harmony import */ var _shared_heading_heading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/heading/heading.component */ "./components/shared/heading/heading.component.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function TaskDetailComponent(_ref) {
  var images = _ref.images,
      title = _ref.title,
      content = _ref.content,
      createdAt = _ref.createdAt,
      _user = _ref._user,
      difficulty = _ref.difficulty,
      tags = _ref.tags,
      repo = _ref.repo,
      _solutions = _ref._solutions,
      _id = _ref._id,
      updateTaskData = _ref.updateTaskData;

  var handleOnSubmitSolution = function handleOnSubmitSolution(_ref2) {
    var repo = _ref2.repo,
        demo = _ref2.demo,
        comment = _ref2.comment;
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/solutions', {
      repo: repo,
      demo: demo,
      comment: comment,
      taskId: _id,
      phase: 'review'
    }).then(function () {
      return updateTaskData();
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "mb-5"
  }, __jsx(_shared_heading_heading_component__WEBPACK_IMPORTED_MODULE_5__["default"], {
    orientation: "left",
    size: "normal"
  }, title)), __jsx("article", {
    className: "task-detail__wrapper"
  }, __jsx("section", {
    className: "task-detail__carousel sm:p-2"
  }, __jsx(_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
    images: images
  })), __jsx("section", {
    className: "task-detail__aside sm:pl-12"
  }, __jsx(_aside_aside_component__WEBPACK_IMPORTED_MODULE_3__["default"], {
    createdAt: createdAt,
    author: _user.login,
    tags: tags,
    difficulty: difficulty,
    repo: repo
  })), __jsx("section", {
    className: "task-detail__content sm:p-2"
  }, __jsx(_content_content_component__WEBPACK_IMPORTED_MODULE_4__["default"], {
    content: content,
    solutions: _solutions,
    onSubmit: handleOnSubmitSolution
  }))));
}

/***/ }),

/***/ "./pages/views/tasks/[id].tsx":
/*!************************************!*\
  !*** ./pages/views/tasks/[id].tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_providers_user_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/providers/user.provider */ "./components/providers/user.provider.tsx");
/* harmony import */ var _lib_hostname_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/hostname.config */ "./lib/hostname.config.ts");
/* harmony import */ var _components_shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/shared/layout/layout.component */ "./components/shared/layout/layout.component.tsx");
/* harmony import */ var _components_task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/task-detail/task-detail.component */ "./components/task-detail/task-detail.component.tsx");
/* harmony import */ var _public_static_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../public/static/style.css */ "./public/static/style.css");
/* harmony import */ var _public_static_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_static_style_css__WEBPACK_IMPORTED_MODULE_8__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






 // todo: string[] do naprawy typ, error handling

function fetchTask(id) {
  var res, task;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function fetchTask$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("".concat(_lib_hostname_config__WEBPACK_IMPORTED_MODULE_5__["HOSTNAME"], "/api/tasks/").concat(id)));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(res.json());

        case 5:
          task = _context.sent;
          return _context.abrupt("return", {
            task: task
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}

var TaskPage = function TaskPage(_ref) {
  var task = _ref.task;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_components_providers_user_provider__WEBPACK_IMPORTED_MODULE_4__["UserContext"]),
      user = _useContext.user;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(task),
      currentTask = _useState[0],
      setCurrentTask = _useState[1];

  function refresh() {
    var refreshedProps;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function refresh$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(fetchTask(task._id));

          case 2:
            refreshedProps = _context2.sent;
            setCurrentTask(refreshedProps.task);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  }

  return __jsx(_components_shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["default"], {
    user: user
  }, __jsx(_components_task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    updateTaskData: refresh
  }, currentTask)));
};

TaskPage.getInitialProps = function _callee(_ref2) {
  var id;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = _ref2.query.id;
          return _context3.abrupt("return", fetchTask(id));

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TaskPage);

/***/ })

})
//# sourceMappingURL=[id].js.8c72411191c17801f0c5.hot-update.js.map