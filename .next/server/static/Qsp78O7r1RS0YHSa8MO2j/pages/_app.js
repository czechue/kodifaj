module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require('../../../ssr-module-cache.js'); // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ var threw = true;
    /******/ try {
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__,
      );
      /******/ threw = false;
      /******/
    } finally {
      /******/ if (threw) delete installedModules[moduleId];
      /******/
    } // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module',
      });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode,
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key),
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ 0: /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__('cha2');

      /***/
    },

    /***/ '8Bbg': /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__('B5Ud');

      /***/
    },

    /***/ AroE: /***/ function(module, exports) {
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule
          ? obj
          : {
              default: obj,
            };
      }

      module.exports = _interopRequireDefault;

      /***/
    },

    /***/ B5Ud: /***/ function(module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__('AroE');

      exports.__esModule = true;
      exports.Container = Container;
      exports.createUrl = createUrl;
      exports.default = void 0;

      var _react = _interopRequireDefault(__webpack_require__('cDcd'));

      var _utils = __webpack_require__('g/15');

      exports.AppInitialProps = _utils.AppInitialProps;
      /**
       * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
       * This allows for keeping state between navigation, custom error handling, injecting additional data.
       */

      async function appGetInitialProps(_ref) {
        var { Component, ctx } = _ref;
        var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
        return {
          pageProps,
        };
      }

      class App extends _react.default.Component {
        // Kept here for backwards compatibility.
        // When someone ended App they could call `super.componentDidCatch`.
        // @deprecated This method is no longer needed. Errors are caught at the top level
        componentDidCatch(error, _errorInfo) {
          throw error;
        }

        render() {
          var { router, Component, pageProps, __N_SSG, __N_SSP } = this.props;
          return _react.default.createElement(
            Component,
            Object.assign(
              {},
              pageProps, // we don't add the legacy URL prop if it's using non-legacy
              // methods like getStaticProps and getServerSideProps
              !(__N_SSG || __N_SSP)
                ? {
                    url: createUrl(router),
                  }
                : {},
            ),
          );
        }
      }

      exports.default = App;
      App.origGetInitialProps = appGetInitialProps;
      App.getInitialProps = appGetInitialProps;
      var warnContainer;
      var warnUrl;

      if (false) {
      } // @deprecated noop for now until removal

      function Container(p) {
        if (false) {
        }
        return p.children;
      }

      function createUrl(router) {
        // This is to make sure we don't references the router object at call time
        var { pathname, asPath, query } = router;
        return {
          get query() {
            if (false) {
            }
            return query;
          },

          get pathname() {
            if (false) {
            }
            return pathname;
          },

          get asPath() {
            if (false) {
            }
            return asPath;
          },

          back: () => {
            if (false) {
            }
            router.back();
          },
          push: (url, as) => {
            if (false) {
            }
            return router.push(url, as);
          },
          pushTo: (href, as) => {
            if (false) {
            }
            var pushRoute = as ? href : '';
            var pushUrl = as || href;
            return router.push(pushRoute, pushUrl);
          },
          replace: (url, as) => {
            if (false) {
            }
            return router.replace(url, as);
          },
          replaceTo: (href, as) => {
            if (false) {
            }
            var replaceRoute = as ? href : '';
            var replaceUrl = as || href;
            return router.replace(replaceRoute, replaceUrl);
          },
        };
      }

      /***/
    },

    /***/ JaQg: /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'a',
        function() {
          return HOSTNAME;
        },
      );
      const HOSTNAME = true ? 'https://kodifaj.pl' : undefined;

      /***/
    },

    /***/ bzos: /***/ function(module, exports) {
      module.exports = require('url');

      /***/
    },

    /***/ cDcd: /***/ function(module, exports) {
      module.exports = require('react');

      /***/
    },

    /***/ cha2: /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__('cDcd');
      var external_react_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_,
      );

      // EXTERNAL MODULE: ./node_modules/next/app.js
      var app = __webpack_require__('8Bbg');
      var app_default = /*#__PURE__*/ __webpack_require__.n(app);

      // EXTERNAL MODULE: ./components/providers/user.provider.tsx
      var user_provider = __webpack_require__('w68O');

      // CONCATENATED MODULE: ./components/error-boundary/error-boundary.component.tsx
      var __jsx = external_react_default.a.createElement;

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      class error_boundary_component_ErrorBoundary extends external_react_default
        .a.Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, 'state', {
            hasError: false,
          });
        }

        componentDidCatch(error, errorInfo) {
          // Display fallback UI
          this.setState({
            hasError: true,
          }); // You can also log the error to an error reporting service

          console.warn(error, errorInfo);
        }

        render() {
          if (this.state.hasError) {
            // You can render any custom fallback UI
            return __jsx(
              'h1',
              null,
              'Dziwne, wcze\u015Bniej dzia\u0142a\u0142o...',
            );
          }

          return this.props.children;
        }
      }
      // CONCATENATED MODULE: ./pages/_app.tsx

      var _app_jsx = external_react_default.a.createElement;

      class _app_MyApp extends app_default.a {
        static async getInitialProps({ Component, ctx }) {
          let pageProps = {
            user: '',
          };

          if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
          }

          if (ctx.req) {
            const request = ctx.req;

            if (request && request.session && request.session.passport) {
              pageProps.user = request.session._ctx.user;
            }
          }

          return {
            pageProps,
          };
        }

        render() {
          const { Component, pageProps } = this.props;
          return _app_jsx(
            error_boundary_component_ErrorBoundary,
            null,
            _app_jsx(
              user_provider['b' /* default */],
              {
                user: pageProps.user,
              },
              _app_jsx(Component, pageProps),
            ),
          );
        }
      }

      /* harmony default export */ var _app = (__webpack_exports__[
        'default'
      ] = _app_MyApp);

      /***/
    },

    /***/ 'g/15': /***/ function(module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      const url_1 = __webpack_require__('bzos');
      /**
       * Utils
       */

      function execOnce(fn) {
        let used = false;
        let result = null;
        return (...args) => {
          if (!used) {
            used = true;
            result = fn.apply(this, args);
          }

          return result;
        };
      }

      exports.execOnce = execOnce;

      function getLocationOrigin() {
        const { protocol, hostname, port } = window.location;
        return `${protocol}//${hostname}${port ? ':' + port : ''}`;
      }

      exports.getLocationOrigin = getLocationOrigin;

      function getURL() {
        const { href } = window.location;
        const origin = getLocationOrigin();
        return href.substring(origin.length);
      }

      exports.getURL = getURL;

      function getDisplayName(Component) {
        return typeof Component === 'string'
          ? Component
          : Component.displayName || Component.name || 'Unknown';
      }

      exports.getDisplayName = getDisplayName;

      function isResSent(res) {
        return res.finished || res.headersSent;
      }

      exports.isResSent = isResSent;

      async function loadGetInitialProps(App, ctx) {
        var _a;

        if (false) {
        } // when called from _app `ctx` is nested in `ctx`

        const res = ctx.res || (ctx.ctx && ctx.ctx.res);

        if (!App.getInitialProps) {
          if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
              pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx),
            };
          }

          return {};
        }

        const props = await App.getInitialProps(ctx);

        if (res && isResSent(res)) {
          return props;
        }

        if (!props) {
          const message = `"${getDisplayName(
            App,
          )}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
          throw new Error(message);
        }

        if (false) {
        }

        return props;
      }

      exports.loadGetInitialProps = loadGetInitialProps;
      exports.urlObjectKeys = [
        'auth',
        'hash',
        'host',
        'hostname',
        'href',
        'path',
        'pathname',
        'port',
        'protocol',
        'query',
        'search',
        'slashes',
      ];

      function formatWithValidation(url, options) {
        if (false) {
        }

        return url_1.format(url, options);
      }

      exports.formatWithValidation = formatWithValidation;
      exports.SP = typeof performance !== 'undefined';
      exports.ST =
        exports.SP &&
        typeof performance.mark === 'function' &&
        typeof performance.measure === 'function';

      /***/
    },

    /***/ w68O: /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'a',
        function() {
          return UserContext;
        },
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'b',
        function() {
          return UserProvider;
        },
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        'cDcd',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        'zr5I',
      );
      /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        axios__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var _lib_hostname_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        'JaQg',
      );
      var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

      const UserContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(
        {
          user: {
            _id: '',
            githubId: '',
            login: '',
            photo: '',
          },
          login: () => {},
          logout: () => {},
        },
      );
      function UserProvider({ children, user }) {
        const { 0: userState, 1: setUserState } = Object(
          react__WEBPACK_IMPORTED_MODULE_0__['useState'],
        )(user);

        function login() {
          setUserState(user);
        } // todo: use this logout function instead of href

        function logout() {
          axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(
            `${_lib_hostname_config__WEBPACK_IMPORTED_MODULE_2__[/* HOSTNAME */ 'a']}/api/logout`,
          );
        }

        const context = {
          user: userState,
          login,
          logout,
        };
        return __jsx(
          UserContext.Provider,
          {
            value: context,
          },
          children,
        );
      }

      /***/
    },

    /***/ zr5I: /***/ function(module, exports) {
      module.exports = require('axios');

      /***/
    },

    /******/
  },
);
