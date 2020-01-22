webpackHotUpdate('static/development/pages/views/tasks/edit.js', {
  /***/ './components/shared/markdown-editor/markdown-editor.component.tsx':
    /*!*************************************************************************!*\
  !*** ./components/shared/markdown-editor/markdown-editor.component.tsx ***!
  \*************************************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function() {
          return MarkdownEditorComponent;
        },
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/extends */ './node_modules/@babel/runtime-corejs2/helpers/esm/extends.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_1__,
      );

      var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

      /*
MIT License

Copyright (c) 2017-present Michał Miszczyszyn typeofweb.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

      function MarkdownEditorComponent(props) {
        var input = props.input,
          placeholder = props.placeholder,
          label = props.label;
        var textAreaRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
        var textAreaClassNames =
          'font-mono appearance-none block w-full h-80 bg-white text-gray-700 rounded-l py-3 px-4 leading-tight border-transparent border focus:outline-none focus:border-violet_primary';
        var actionToTokens = {
          BOLD: {
            open: '**',
            close: '**',
          },
          ITALIC: {
            open: '_',
            close: '_',
          },
          HEADING: {
            open: '# ',
            close: '',
          },
          CODEBLOCK: {
            open: '```javascript\n',
            close: '\n```',
          },
          UL: {
            open: '* ',
            close: '',
          },
          OL: {
            open: '1. ',
            close: '',
          },
        };

        var addTokensToTextarea = function addTokensToTextarea(el, tokens) {
          var selectionStart = el.selectionStart,
            selectionEnd = el.selectionEnd,
            value = el.value;
          var startTokenLenths = tokens.open.length;
          var newValue = value;
          newValue =
            newValue.substring(0, selectionEnd) +
            tokens.close +
            newValue.substr(selectionEnd);
          newValue =
            newValue.substring(0, selectionStart) +
            tokens.open +
            newValue.substr(selectionStart);
          el.value = newValue;
          el.setSelectionRange(
            selectionStart + startTokenLenths,
            selectionEnd + startTokenLenths,
          );
        };

        var handleAction = function handleAction(action) {
          return function(e) {
            var _textAreaRef$current;

            e.preventDefault();
            var el = textAreaRef.current;

            if (!el) {
              return;
            }

            var tokens = actionToTokens[action];
            addTokensToTextarea(el, tokens);
            var value = (textAreaRef === null || textAreaRef === void 0
            ? void 0
            : (_textAreaRef$current = textAreaRef.current) === null ||
              _textAreaRef$current === void 0
            ? void 0
            : _textAreaRef$current.value)
              ? textAreaRef.current.value
              : '';
            input.onChange(value);
          };
        };

        return __jsx(
          'div',
          {
            className: 'mb-3',
          },
          __jsx(
            'label',
            {
              className:
                'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2',
              htmlFor: input.name,
            },
            label,
          ),
          __jsx(
            'button',
            {
              className: 'px-2 bg-white w-12',
              type: 'button',
              onClick: handleAction('BOLD'),
              'aria-label': 'wstaw pogrubienie',
              title: 'wstaw pogrubienie',
            },
            'B',
          ),
          __jsx(
            'button',
            {
              className: 'px-2 bg-white w-12 ml-2',
              type: 'button',
              onClick: handleAction('ITALIC'),
              'aria-label': 'wstaw italik',
              title: 'wstaw italik',
            },
            'I',
          ),
          __jsx(
            'button',
            {
              className: 'px-2 bg-white w-12 ml-2',
              type: 'button',
              onClick: handleAction('HEADING'),
              'aria-label': 'wstaw nag\u0142\xF3wek',
              title: 'wstaw nag\u0142\xF3wek',
            },
            'H',
          ),
          __jsx(
            'span',
            {
              className: 'ml-2',
            },
            '|',
          ),
          __jsx(
            'button',
            {
              className: 'px-2 bg-white w-12 ml-2',
              type: 'button',
              onClick: handleAction('CODEBLOCK'),
              'aria-label': 'wstaw blok kodu',
              title: 'wstaw blok kodu',
            },
            'code',
          ),
          __jsx(
            'button',
            {
              className: 'px-2 bg-white w-12 ml-2',
              type: 'button',
              onClick: handleAction('UL'),
              'aria-label': 'wstaw list\u0119 nieuporz\u0105dkowan\u0105',
              title: 'wstaw list\u0119 nieuporz\u0105dkowan\u0105',
            },
            'li',
          ),
          __jsx(
            'button',
            {
              className: 'px-2 bg-white w-12 ml-2',
              type: 'button',
              onClick: handleAction('OL'),
              'aria-label': 'wstaw list\u0119 uporz\u0105dkowan\u0105',
              title: 'wstaw list\u0119 uporz\u0105dkowan\u0105',
            },
            'ol',
          ),
          __jsx(
            'div',
            {
              className: 'mt-2 flex items-stretch',
            },
            __jsx(
              'textarea',
              Object(
                _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                  'default'
                ],
              )(
                {
                  placeholder: placeholder,
                },
                input,
                {
                  className: textAreaClassNames,
                  ref: textAreaRef,
                },
              ),
            ),
          ),
        );
      }

      /***/
    },
});
//# sourceMappingURL=edit.js.02eb0df7d166dc7a3323.hot-update.js.map
