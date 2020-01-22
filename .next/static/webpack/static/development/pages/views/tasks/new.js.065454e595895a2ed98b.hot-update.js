webpackHotUpdate('static/development/pages/views/tasks/new.js', {
  /***/ './components/new-task/field-array/field-array.component.tsx':
    /*!*******************************************************************!*\
  !*** ./components/new-task/field-array/field-array.component.tsx ***!
  \*******************************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function() {
          return FieldArrayComponent;
        },
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/defineProperty */ './node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js',
      );
      /* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! react-final-form */ './node_modules/react-final-form/dist/react-final-form.es.js',
      );
      /* harmony import */ var _shared_input_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../../shared/input/input.component */ './components/shared/input/input.component.tsx',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_3__,
      );

      var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

      function FieldArrayComponent(_ref) {
        var recordName = _ref.recordName,
          label = _ref.label,
          fields = _ref.fields,
          placeholder = _ref.placeholder;
        return __jsx(
          'div',
          {
            className: 'mb-4',
          },
          __jsx(
            'label',
            {
              className:
                'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2',
            },
            label,
          ),
          fields.map(function(name, index) {
            return __jsx(
              'div',
              {
                key: name,
              },
              __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_1__['Field'], {
                name: ''.concat(name, '.').concat(recordName),
                label: '',
                component:
                  _shared_input_input_component__WEBPACK_IMPORTED_MODULE_2__[
                    'default'
                  ],
                placeholder: placeholder,
                inputButton: __jsx(
                  'button',
                  {
                    type: 'button',
                    className:
                      'h-full pl-1 w-16 max-w-full rounded-r  text-white text-xs font-semibold',
                    onClick: function onClick() {
                      return fields.remove(index);
                    },
                  },
                  __jsx(
                    'svg',
                    {
                      className: 'text-white',
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 24 24',
                      width: '32',
                      height: '32',
                    },
                    __jsx('path', {
                      className: 'heroicon-ui',
                      d:
                        'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v14h14V5H5zm11 7a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1z',
                    }),
                  ),
                ),
              }),
            );
          }),
          __jsx(
            'button',
            {
              title: 'dodaj wskaz\xF3wk\u0119',
              type: 'button',
              onClick: function onClick() {
                return fields.push(
                  Object(
                    _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[
                      'default'
                    ],
                  )({}, recordName, ''),
                );
              },
            },
            __jsx(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                width: '32',
                height: '32',
              },
              __jsx('path', {
                className: 'heroicon-ui',
                d:
                  'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v14h14V5H5zm8 6h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2z',
              }),
            ),
          ),
        );
      }

      /***/
    },
});
//# sourceMappingURL=new.js.065454e595895a2ed98b.hot-update.js.map
