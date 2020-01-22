webpackHotUpdate('static/development/pages/views/tasks/edit.js', {
  /***/ './components/new-task/new-task.component.tsx':
    /*!****************************************************!*\
  !*** ./components/new-task/new-task.component.tsx ***!
  \****************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function() {
          return NewTaskComponent;
        },
      );
      /* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @babel/runtime-corejs2/core-js/object/define-property */ './node_modules/@babel/runtime-corejs2/core-js/object/define-property.js',
      );
      /* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @babel/runtime-corejs2/core-js/object/define-properties */ './node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js',
      );
      /* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ './node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js',
      );
      /* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__,
      );
      /* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ './node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js',
      );
      /* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__,
      );
      /* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ './node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js',
      );
      /* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__,
      );
      /* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! @babel/runtime-corejs2/core-js/object/keys */ './node_modules/@babel/runtime-corejs2/core-js/object/keys.js',
      );
      /* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__,
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/defineProperty */ './node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js',
      );
      /* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! @babel/runtime-corejs2/regenerator */ './node_modules/@babel/runtime-corejs2/regenerator/index.js',
      );
      /* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_8__,
      );
      /* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! react-final-form */ './node_modules/react-final-form/dist/react-final-form.es.js',
      );
      /* harmony import */ var react_final_form_arrays__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! react-final-form-arrays */ './node_modules/react-final-form-arrays/dist/react-final-form-arrays.es.js',
      );
      /* harmony import */ var final_form_arrays__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        /*! final-form-arrays */ './node_modules/final-form-arrays/dist/final-form-arrays.es.js',
      );
      /* harmony import */ var _shared_form_wrapper_form_wrapper_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
        /*! ../shared/form-wrapper/form-wrapper.component */ './components/shared/form-wrapper/form-wrapper.component.tsx',
      );
      /* harmony import */ var _shared_input_input_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
        /*! ../shared/input/input.component */ './components/shared/input/input.component.tsx',
      );
      /* harmony import */ var _utils_map_form_to_new_task_form_util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
        /*! ./utils/map-form-to-new-task-form.util */ './components/new-task/utils/map-form-to-new-task-form.util.ts',
      );
      /* harmony import */ var _heading_heading_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
        /*! ./heading/heading.component */ './components/new-task/heading/heading.component.tsx',
      );
      /* harmony import */ var _field_array_field_array_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
        /*! ./field-array/field-array.component */ './components/new-task/field-array/field-array.component.tsx',
      );
      /* harmony import */ var _shared_markdown_editor_markdown_editor_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
        /*! ../shared/markdown-editor/markdown-editor.component */ './components/shared/markdown-editor/markdown-editor.component.tsx',
      );
      /* harmony import */ var _shared_markdown_view_markdown_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
        /*! ../shared/markdown-view/markdown-view.component */ './components/shared/markdown-view/markdown-view.component.tsx',
      );
      /* harmony import */ var _utils_task_mapper_util__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
        /*! ./utils/task-mapper.util */ './components/new-task/utils/task-mapper.util.ts',
      );

      var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

      function ownKeys(object, enumerableOnly) {
        var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(
          object,
        );
        if (
          _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a
        ) {
          var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(
            object,
          );
          if (enumerableOnly)
            symbols = symbols.filter(function(sym) {
              return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(
                object,
                sym,
              ).enumerable;
            });
          keys.push.apply(keys, symbols);
        }
        return keys;
      }

      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
              Object(
                _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[
                  'default'
                ],
              )(target, key, source[key]);
            });
          } else if (
            _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a
          ) {
            _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(
              target,
              _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(
                source,
              ),
            );
          } else {
            ownKeys(Object(source)).forEach(function(key) {
              _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(
                target,
                key,
                _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(
                  source,
                  key,
                ),
              );
            });
          }
        }
        return target;
      }

      // const required = (value: string) => (value ? undefined : "Required");

      function NewTaskComponent(_ref) {
        var task = _ref.task,
          onSubmit = _ref.onSubmit;

        // todo: investigate why values argument doesnt work with NewTaskForm type
        function onFormSubmit(values) {
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(
            function onFormSubmit$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    if (onSubmit) {
                      onSubmit(
                        Object(
                          _utils_map_form_to_new_task_form_util__WEBPACK_IMPORTED_MODULE_14__[
                            'default'
                          ],
                        )(values),
                      );
                    }

                  case 1:
                  case 'end':
                    return _context.stop();
                }
              }
            },
          );
        }

        return __jsx(
          react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment,
          null,
          __jsx(
            _heading_heading_component__WEBPACK_IMPORTED_MODULE_15__['default'],
            null,
            'Kreator zada\u0144',
          ),
          __jsx(
            _shared_form_wrapper_form_wrapper_component__WEBPACK_IMPORTED_MODULE_12__[
              'default'
            ],
            null,
            __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_9__['Form'], {
              onSubmit: onFormSubmit,
              mutators: _objectSpread(
                {},
                final_form_arrays__WEBPACK_IMPORTED_MODULE_11__['default'],
              ),
              initialValues: task
                ? Object(
                    _utils_task_mapper_util__WEBPACK_IMPORTED_MODULE_19__[
                      'default'
                    ],
                  )(task)
                : {},
              render: function render(_ref2) {
                var handleSubmit = _ref2.handleSubmit,
                  values = _ref2.values;
                return __jsx(
                  'form',
                  {
                    onSubmit: handleSubmit,
                  },
                  __jsx(
                    react_final_form__WEBPACK_IMPORTED_MODULE_9__['Field'],
                    {
                      name: 'title',
                      label: 'Tytu\u0142',
                      component:
                        _shared_input_input_component__WEBPACK_IMPORTED_MODULE_13__[
                          'default'
                        ],
                      placeholder: 'np. Super cool formularz',
                    },
                  ),
                  __jsx(
                    react_final_form__WEBPACK_IMPORTED_MODULE_9__['Field'],
                    {
                      name: 'repo',
                      label: 'Link do zadania na Github',
                      component:
                        _shared_input_input_component__WEBPACK_IMPORTED_MODULE_13__[
                          'default'
                        ],
                      placeholder: 'https://github.com/kodifaj',
                    },
                  ),
                  __jsx(
                    react_final_form__WEBPACK_IMPORTED_MODULE_9__['Field'],
                    {
                      name: 'tags',
                      label: 'Tagi',
                      component:
                        _shared_input_input_component__WEBPACK_IMPORTED_MODULE_13__[
                          'default'
                        ],
                      placeholder: 'html, js, css',
                    },
                  ),
                  __jsx(
                    react_final_form_arrays__WEBPACK_IMPORTED_MODULE_10__[
                      'FieldArray'
                    ],
                    {
                      name: 'tips',
                    },
                    function(_ref3) {
                      var fields = _ref3.fields,
                        meta = _ref3.meta;
                      return __jsx(
                        _field_array_field_array_component__WEBPACK_IMPORTED_MODULE_16__[
                          'default'
                        ],
                        {
                          fields: fields,
                          meta: meta,
                          recordName: 'tip',
                          label: 'Wskaz\xF3wki',
                          placeholder: 'Nowa wskaz\xF3wka',
                        },
                      );
                    },
                  ),
                  __jsx(
                    react_final_form_arrays__WEBPACK_IMPORTED_MODULE_10__[
                      'FieldArray'
                    ],
                    {
                      name: 'images',
                    },
                    function(_ref4) {
                      var fields = _ref4.fields,
                        meta = _ref4.meta;
                      return __jsx(
                        _field_array_field_array_component__WEBPACK_IMPORTED_MODULE_16__[
                          'default'
                        ],
                        {
                          fields: fields,
                          meta: meta,
                          recordName: 'image',
                          label: 'Obrazy',
                          placeholder: 'Nowy obraz max 10kb',
                        },
                      );
                    },
                  ),
                  __jsx(
                    react_final_form__WEBPACK_IMPORTED_MODULE_9__['Field'],
                    {
                      name: 'content',
                      label: 'Tre\u015B\u0107',
                      component:
                        _shared_markdown_editor_markdown_editor_component__WEBPACK_IMPORTED_MODULE_17__[
                          'default'
                        ],
                      placeholder: 'Na czym polega zadanie?',
                    },
                  ),
                  __jsx(
                    'span',
                    {
                      className:
                        'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2',
                    },
                    'Preview',
                  ),
                  __jsx(
                    'div',
                    {
                      className: 'bg-white p-2 my-2 rounded',
                    },
                    __jsx(
                      _shared_markdown_view_markdown_view_component__WEBPACK_IMPORTED_MODULE_18__[
                        'MarkdownViewComponent'
                      ],
                      {
                        source: values.content,
                      },
                    ),
                  ),
                  __jsx(
                    'div',
                    {
                      className: 'mt-4 flex flex-row-reverse',
                    },
                    __jsx(
                      'button',
                      {
                        className:
                          'bg-gradient-button text-white px-4 py-2 rounded tracking-wide',
                        type: 'submit',
                      },
                      'zapisz zadanie',
                    ),
                  ),
                );
              },
            }),
          ),
        );
      }

      /***/
    },
});
//# sourceMappingURL=edit.js.77a2aa671c8bdca46b1b.hot-update.js.map
