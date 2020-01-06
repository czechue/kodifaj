webpackHotUpdate("static/development/pages/views/users/[id].js",{

/***/ "./pages/views/users/[id].tsx":
/*!************************************!*\
  !*** ./pages/views/users/[id].tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_hostname_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/hostname.config */ "./lib/hostname.config.ts");
/* harmony import */ var _components_providers_user_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/providers/user.provider */ "./components/providers/user.provider.tsx");
/* harmony import */ var _components_shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/shared/layout/layout.component */ "./components/shared/layout/layout.component.tsx");
/* harmony import */ var _public_static_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../public/static/style.css */ "./public/static/style.css");
/* harmony import */ var _public_static_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_static_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/user-detail/user-detail.component */ "./components/user-detail/user-detail.component.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var UserPage = function UserPage(_ref) {
  var userProfile = _ref.userProfile;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_providers_user_provider__WEBPACK_IMPORTED_MODULE_4__["UserContext"]),
      user = _useContext.user;

  return __jsx(_components_shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["default"], {
    user: user
  }, __jsx(_components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_7__["default"], {
    userProfile: userProfile
  }));
};

UserPage.getInitialProps = function _callee(_ref2) {
  var id, res, userProfile;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = _ref2.query.id;
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()("".concat(_lib_hostname_config__WEBPACK_IMPORTED_MODULE_3__["HOSTNAME"], "/api/users/").concat(id)));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 6:
          userProfile = _context.sent;
          return _context.abrupt("return", {
            userProfile: userProfile
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (UserPage);

/***/ })

})
//# sourceMappingURL=[id].js.4482b6a1baf8ff0c6de5.hot-update.js.map