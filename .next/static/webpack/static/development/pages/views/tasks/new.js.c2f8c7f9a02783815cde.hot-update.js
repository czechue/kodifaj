webpackHotUpdate('static/development/pages/views/tasks/new.js', {
  /***/ './components/new-task/utils/map-form-to-new-task-form.util.ts':
    /*!*********************************************************************!*\
  !*** ./components/new-task/utils/map-form-to-new-task-form.util.ts ***!
  \*********************************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function() {
          return mapFormToNewTaskFormat;
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

      function mapFormToNewTaskFormat(task) {
        var _task$tips, _task$images;

        return _objectSpread({}, task, {
          tips: ((_task$tips = task.tips) === null || _task$tips === void 0
          ? void 0
          : _task$tips.length)
            ? task.tips.map(function(tip) {
                return tip.tip;
              })
            : [],
          images: ((_task$images = task.images) === null ||
          _task$images === void 0
          ? void 0
          : _task$images.length)
            ? task.images.map(function(image) {
                return image.image;
              })
            : [],
          tags: task.tags
            ? task.tags.split(',').map(function(s) {
                return s.trim();
              })
            : [],
        });
      }

      /***/
    },
});
//# sourceMappingURL=new.js.c2f8c7f9a02783815cde.hot-update.js.map
