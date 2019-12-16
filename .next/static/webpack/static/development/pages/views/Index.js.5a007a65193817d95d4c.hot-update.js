webpackHotUpdate("static/development/pages/views/Index.js",{

/***/ "./components/navbar/account-dropdown/account-dropdown.component.tsx":
/*!***************************************************************************!*\
  !*** ./components/navbar/account-dropdown/account-dropdown.component.tsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AccountDropdownComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function AccountDropdownComponent(_ref) {
  var user = _ref.user,
      classNames = _ref.classNames;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var handleEscape = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (event) {
    if (event.key === 'Escape' || event.key === 'Esc') {
      setIsOpen(false);
    }
  }, []);

  var handleOnLayerClick = function handleOnLayerClick() {
    console.log('click');
    setIsOpen(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.addEventListener('keydown', handleEscape, false);
    return function () {
      document.removeEventListener('keydown', handleEscape, false);
    };
  }, []);
  return __jsx("div", {
    className: "relative ml-1 ".concat(classNames)
  }, __jsx("button", {
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    className: "relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-violet_primary focus:outline-none focus:border-white"
  }, __jsx("img", {
    className: "h-full w-full object-cover",
    src: user.photo,
    alt: "user photo"
  })), isOpen && __jsx("button", {
    onClick: function onClick() {
      return handleOnLayerClick();
    },
    tabIndex: -1,
    className: "fixed inset-0 w-full h-full bg-black opacity-50 cursor-default z-10"
  }), isOpen && __jsx("div", {
    className: "absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-20"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/users/".concat(user._id)
  }, __jsx("a", {
    className: "block px-4 py-2 text-gray-800 hover:bg-violet_primary hover:text-white"
  }, "Twoje konto")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/tasks/new"
  }, __jsx("a", {
    className: "block px-4 py-2 text-gray-800 hover:bg-violet_primary hover:text-white"
  }, "Dodaj zadanie")), __jsx("a", {
    href: "/auth/logout",
    className: "block px-4 py-2 text-gray-800 hover:bg-violet_primary hover:text-white"
  }, "Wyloguj si\u0119")));
}

/***/ })

})
//# sourceMappingURL=Index.js.5a007a65193817d95d4c.hot-update.js.map