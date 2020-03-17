module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require('../../../../../ssr-module-cache.js'); // The require function
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
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 8));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ '/EVp': /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'a',
        function() {
          return HeadingComponent;
        },
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        'cDcd',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        'dYMV',
      );
      /* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        clsx__WEBPACK_IMPORTED_MODULE_1__,
      );
      var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

      function HeadingComponent({
        CustomTag = 'h1',
        color = 'violet_primary',
        orientation = 'center',
        size = 'lg',
        font = 'normal',
        tracking = 'normal',
        classNames,
        children,
      }) {
        const headingClassNames = clsx__WEBPACK_IMPORTED_MODULE_1___default()(
          'block',
          {
            'text-base': size === 'xsm',
            'text-lg': size === 'normal',
            'text-2xl': size === '2xl',
            'text-4xl': size === 'lg',
            'text-6xl': size === 'xlg',
            'text-center': orientation === 'center',
            'text-left': orientation === 'left',
            'text-violet_primary': color === 'violet_primary',
            'text-pink_primary': color === 'pink_primary',
            'text-white': color === 'white',
            'font-bold': font === 'bold',
            'font-thin': font === 'thin',
            'tracking-wide': tracking === 'wide',
          },
          classNames,
        );
        return __jsx(
          CustomTag,
          {
            className: headingClassNames,
          },
          children,
        );
      }

      /***/
    },

    /***/ '/jkW': /***/ function(module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      }); // Identify /[param]/ in route string

      const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

      function isDynamicRoute(route) {
        return TEST_ROUTE.test(route);
      }

      exports.isDynamicRoute = isDynamicRoute;

      /***/
    },

    /***/ '0Bsm': /***/ function(module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__('AroE');

      exports.__esModule = true;
      exports.default = withRouter;

      var _react = _interopRequireDefault(__webpack_require__('cDcd'));

      var _router = __webpack_require__('nOHt');

      function withRouter(ComposedComponent) {
        function WithRouterWrapper(props) {
          return _react.default.createElement(
            ComposedComponent,
            Object.assign(
              {
                router: (0, _router.useRouter)(),
              },
              props,
            ),
          );
        }

        WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps; // This is needed to allow checking for custom getInitialProps in _app
        WithRouterWrapper.origGetInitialProps =
          ComposedComponent.origGetInitialProps;

        if (false) {
          var name;
        }

        return WithRouterWrapper;
      }

      /***/
    },

    /***/ '3+wp': /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        'zr5I',
      );
      /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        axios__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        'cDcd',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_1__,
      );
      /* harmony import */ var _components_providers_user_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        'w68O',
      );
      /* harmony import */ var _components_shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        'WxVa',
      );
      /* harmony import */ var _components_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        'XXXT',
      );
      /* harmony import */ var _lib_hostname_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        'JaQg',
      );
      var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

      const TaskNewPage = () => {
        const { user } = Object(
          react__WEBPACK_IMPORTED_MODULE_1__['useContext'],
        )(
          _components_providers_user_provider__WEBPACK_IMPORTED_MODULE_2__[
            /* UserContext */ 'a'
          ],
        );

        const onSubmit = task => {
          return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(
            `${_lib_hostname_config__WEBPACK_IMPORTED_MODULE_5__[/* HOSTNAME */ 'a']}/api/tasks`,
            task,
          );
        };

        return __jsx(
          _components_shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__[
            /* default */ 'a'
          ],
          {
            user: user,
          },
          __jsx(
            _components_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_4__[
              /* default */ 'a'
            ],
            {
              onSubmit: onSubmit,
            },
          ),
        );
      };

      /* harmony default export */ __webpack_exports__['default'] = TaskNewPage;

      /***/
    },

    /***/ '71IU': /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'a',
        function() {
          return InputComponent;
        },
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        'cDcd',
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_0__,
      );
      /* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        'dYMV',
      );
      /* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        clsx__WEBPACK_IMPORTED_MODULE_1__,
      );
      var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

      function _extends() {
        _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
        return _extends.apply(this, arguments);
      }

      function InputComponent(props) {
        const {
          input,
          placeholder,
          label,
          fieldType,
          inputButton = null,
        } = props;
        const Component = fieldType ? fieldType : 'input';
        const inputClassNames = clsx__WEBPACK_IMPORTED_MODULE_1___default()(
          'font-mono appearance-none block w-full bg-white text-gray-700 rounded-l py-3 px-4 leading-tight border-transparent border focus:outline-none focus:border-violet_primary',
          {
            'rounded-r': !inputButton,
          },
        );
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
            'div',
            {
              className: 'flex items-stretch',
            },
            __jsx(
              Component,
              _extends(
                {
                  placeholder: placeholder,
                },
                input,
                {
                  className: inputClassNames,
                },
              ),
            ),
            inputButton
              ? __jsx(
                  'div',
                  {
                    className: 'w-10',
                  },
                  inputButton,
                )
              : null,
          ),
        );
      }

      /***/
    },

    /***/ '7KCV': /***/ function(module, exports, __webpack_require__) {
      var _typeof = __webpack_require__('C+bE');

      function _getRequireWildcardCache() {
        if (typeof WeakMap !== 'function') return null;
        var cache = new WeakMap();

        _getRequireWildcardCache = function _getRequireWildcardCache() {
          return cache;
        };

        return cache;
      }

      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        }

        if (
          obj === null ||
          (_typeof(obj) !== 'object' && typeof obj !== 'function')
        ) {
          return {
            default: obj,
          };
        }

        var cache = _getRequireWildcardCache();

        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }

        var newObj = {};
        var hasPropertyDescriptor =
          Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor
              ? Object.getOwnPropertyDescriptor(obj, key)
              : null;

            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }

        newObj['default'] = obj;

        if (cache) {
          cache.set(obj, newObj);
        }

        return newObj;
      }

      module.exports = _interopRequireWildcard;

      /***/
    },

    /***/ 8: /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__('3+wp');

      /***/
    },

    /***/ Aio7: /***/ function(module, exports) {
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

    /***/ 'C+bE': /***/ function(module, exports) {
      function _typeof2(obj) {
        if (
          typeof Symbol === 'function' &&
          typeof Symbol.iterator === 'symbol'
        ) {
          _typeof2 = function _typeof2(obj) {
            return typeof obj;
          };
        } else {
          _typeof2 = function _typeof2(obj) {
            return obj &&
              typeof Symbol === 'function' &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          };
        }
        return _typeof2(obj);
      }

      function _typeof(obj) {
        if (
          typeof Symbol === 'function' &&
          _typeof2(Symbol.iterator) === 'symbol'
        ) {
          module.exports = _typeof = function _typeof(obj) {
            return _typeof2(obj);
          };
        } else {
          module.exports = _typeof = function _typeof(obj) {
            return obj &&
              typeof Symbol === 'function' &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : _typeof2(obj);
          };
        }

        return _typeof(obj);
      }

      module.exports = _typeof;

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

    /***/ OwZz: /***/ function(module, exports) {
      module.exports = require('react-final-form-arrays');

      /***/
    },

    /***/ RyM3: /***/ function(module, exports) {
      module.exports = require('react-syntax-highlighter');

      /***/
    },

    /***/ VKoO: /***/ function(module, exports) {
      module.exports = require('final-form-arrays');

      /***/
    },

    /***/ WxVa: /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return /* binding */ LayoutComponent;
      });

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__('cDcd');
      var external_react_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_,
      );

      // EXTERNAL MODULE: external "clsx"
      var external_clsx_ = __webpack_require__('dYMV');
      var external_clsx_default = /*#__PURE__*/ __webpack_require__.n(
        external_clsx_,
      );

      // CONCATENATED MODULE: ./components/navbar/mobile-button/mobile-button.component.tsx
      var __jsx = external_react_default.a.createElement;

      function MobileButtonComponent({ isOpen, onToggle }) {
        return __jsx(
          'button',
          {
            className:
              'block text-gray-300 hover:text-white focus:text-white focus:outline-none',
            onClick: onToggle,
          },
          __jsx(
            'svg',
            {
              className: 'fill-current w-6 h-6',
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 20 20',
            },
            isOpen
              ? __jsx('path', {
                  d:
                    'M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z',
                })
              : __jsx('path', {
                  d: 'M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z',
                }),
          ),
        );
      }
      // EXTERNAL MODULE: ./node_modules/next/link.js
      var next_link = __webpack_require__('YFqc');
      var link_default = /*#__PURE__*/ __webpack_require__.n(next_link);

      // CONCATENATED MODULE: ./components/navbar/navigation-link/navigation-link.component.tsx
      var navigation_link_component_jsx =
        external_react_default.a.createElement;

      function NavigationLinkComponent({
        children,
        url,
        routerLink = false,
        classNames = '',
      }) {
        const className = `block mb-1 px-2 py-1 text-gray-200 font-semibold hover:bg-violet_primary sm:uppercase sm:font-normal sm:text-xs sm:mb-0 ${classNames}`;

        const href = navigation_link_component_jsx(
          'a',
          {
            href: url,
            className: className,
          },
          children,
        );

        const link = navigation_link_component_jsx(
          link_default.a,
          {
            href: url,
          },
          navigation_link_component_jsx(
            'a',
            {
              className: className,
            },
            children,
          ),
        );

        return routerLink ? link : href;
      }
      // EXTERNAL MODULE: ./public/static/style.css
      var style = __webpack_require__('Aio7');

      // CONCATENATED MODULE: ./components/navbar/account-dropdown/account-dropdown.component.tsx
      var account_dropdown_component_jsx =
        external_react_default.a.createElement;

      function AccountDropdownComponent({ user, classNames }) {
        const { 0: isOpen, 1: setIsOpen } = Object(external_react_['useState'])(
          false,
        );
        const handleEscape = Object(external_react_['useCallback'])(event => {
          if (event.key === 'Escape' || event.key === 'Esc') {
            setIsOpen(false);
          }
        }, []);
        Object(external_react_['useEffect'])(() => {
          document.addEventListener('keydown', handleEscape, false);
          return () => {
            document.removeEventListener('keydown', handleEscape, false);
          };
        }, []);
        return account_dropdown_component_jsx(
          'div',
          {
            className: `relative ml-1 ${classNames}`,
          },
          account_dropdown_component_jsx(
            'button',
            {
              onClick: () => setIsOpen(!isOpen),
              className:
                'relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-violet_primary focus:outline-none focus:border-white',
            },
            account_dropdown_component_jsx('img', {
              className: 'h-full w-full object-cover',
              src: user.photo,
              alt: 'user photo',
            }),
          ),
          account_dropdown_component_jsx('button', {
            onClick: () => setIsOpen(false),
            tabIndex: -1,
            className: `fixed inset-0 w-full h-full bg-black opacity-50 cursor-default z-10 ${
              isOpen ? 'block' : 'hidden'
            }`,
          }),
          isOpen &&
            account_dropdown_component_jsx(
              'div',
              {
                className:
                  'absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-20',
              },
              account_dropdown_component_jsx(
                link_default.a,
                {
                  href: `/users/${user._id}`,
                },
                account_dropdown_component_jsx(
                  'a',
                  {
                    className:
                      'block px-4 py-2 text-gray-800 hover:bg-violet_primary hover:text-white',
                  },
                  'Twoje konto',
                ),
              ),
              account_dropdown_component_jsx(
                link_default.a,
                {
                  href: '/tasks/new',
                },
                account_dropdown_component_jsx(
                  'a',
                  {
                    className:
                      'block px-4 py-2 text-gray-800 hover:bg-violet_primary hover:text-white',
                  },
                  'Dodaj zadanie',
                ),
              ),
              account_dropdown_component_jsx(
                'a',
                {
                  href: '/auth/logout',
                  className:
                    'block px-4 py-2 text-gray-800 hover:bg-violet_primary hover:text-white',
                },
                'Wyloguj si\u0119',
              ),
            ),
        );
      }
      // EXTERNAL MODULE: ./components/shared/heading/heading.component.tsx
      var heading_component = __webpack_require__('/EVp');

      // CONCATENATED MODULE: ./components/navbar/hero/hero.component.tsx
      var hero_component_jsx = external_react_default.a.createElement;

      const bgImage = {
        backgroundImage: `url(/static/images/Objects.svg)`,
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
      };
      function HeroComponent() {
        return hero_component_jsx(
          'div',
          {
            className: 'hidden sm:flex justify-center flex-col h-100 bg-local',
            style: bgImage,
          },
          hero_component_jsx(
            heading_component['a' /* default */],
            {
              color: 'white',
              size: 'normal',
              classNames: 'opacity-50',
            },
            'Najlepsze zadania z web dev',
          ),
          hero_component_jsx(
            heading_component['a' /* default */],
            {
              color: 'white',
              font: 'bold',
              size: 'xlg',
            },
            'od Juniora do Mentora',
          ),
        );
      }
      // CONCATENATED MODULE: ./components/navbar/navbar.component.tsx
      var navbar_component_jsx = external_react_default.a.createElement;

      function NavbarComponent({ user, withHero = false }) {
        const { 0: isMobileMenuOpen, 1: setIsMobileMenuOpen } = Object(
          external_react_['useState'],
        )(false);
        const mobileLinksContainerClassName = external_clsx_default()(
          {
            block: isMobileMenuOpen,
            hidden: !isMobileMenuOpen,
          },
          'sm:flex',
        );

        const navLinks = navbar_component_jsx(
          external_react_default.a.Fragment,
          null,
          navbar_component_jsx(
            NavigationLinkComponent,
            {
              classNames: 'sm:mr-4',
              url: '/tasks',
              routerLink: true,
            },
            'Zadania',
          ),
          navbar_component_jsx(
            NavigationLinkComponent,
            {
              classNames: 'sm:mr-4',
              url: '/ranking',
              routerLink: true,
            },
            'Ranking',
          ),
          navbar_component_jsx(
            NavigationLinkComponent,
            {
              classNames: 'sm:mr-4',
              url: '/faq',
              routerLink: true,
            },
            'Pomoc',
          ),
          navbar_component_jsx(
            'span',
            {
              className: 'hidden sm:block sm:mr-4 text-white',
            },
            '|',
          ),
        );

        return navbar_component_jsx(
          'div',
          {
            className: 'bg-gradient-navbar',
          },
          navbar_component_jsx(
            'header',
            {
              className:
                'sm:flex sm:justify-between sm:items-center sm:max-w-6xl sm:ml-auto sm:mr-auto',
            },
            navbar_component_jsx(
              'div',
              {
                className: 'flex items-center justify-between p-4 h-20',
              },
              navbar_component_jsx('span', null),
              navbar_component_jsx(
                link_default.a,
                {
                  href: '/',
                },
                navbar_component_jsx(
                  'a',
                  null,
                  navbar_component_jsx(
                    'span',
                    {
                      className: 'text-white text-2xl',
                    },
                    'Kodifaj',
                  ),
                ),
              ),
              navbar_component_jsx(
                'div',
                {
                  className: 'sm:hidden',
                },
                navbar_component_jsx(MobileButtonComponent, {
                  isOpen: isMobileMenuOpen,
                  onToggle: () => setIsMobileMenuOpen(!isMobileMenuOpen),
                }),
              ),
            ),
            !user &&
              navbar_component_jsx(
                'nav',
                {
                  className: mobileLinksContainerClassName,
                },
                navbar_component_jsx(
                  'div',
                  {
                    className:
                      'px-2 pb-2 sm:flex sm:items-center sm:bg-transparent sm:pb-0',
                  },
                  navLinks,
                  navbar_component_jsx(
                    NavigationLinkComponent,
                    {
                      url: '/auth/github',
                    },
                    navbar_component_jsx(
                      'button',
                      {
                        className: 'flex items-center',
                      },
                      navbar_component_jsx(
                        'span',
                        {
                          className:
                            'pr-2 font-semibold sm:uppercase sm:font-normal sm:text-xs',
                        },
                        'Rejestracja',
                      ),
                      navbar_component_jsx('img', {
                        src: '/static/images/github-icon.svg',
                        alt: 'github icon',
                        className: 'w-5 opacity-50',
                      }),
                    ),
                  ),
                ),
              ),
            user &&
              navbar_component_jsx(
                'nav',
                {
                  className: mobileLinksContainerClassName,
                },
                navbar_component_jsx(
                  'div',
                  {
                    className:
                      'px-2 pb-2 sm:flex sm:items-center sm:bg-transparent sm:pb-0',
                  },
                  navLinks,
                  navbar_component_jsx(AccountDropdownComponent, {
                    classNames: 'hidden sm:block sm:ml-6',
                    user: user,
                  }),
                ),
                navbar_component_jsx(
                  'div',
                  {
                    className:
                      'px-4 py-5 border-t border-pink__accent sm:hidden',
                  },
                  navbar_component_jsx(
                    'div',
                    {
                      className: 'flex justify-center items-center',
                    },
                    navbar_component_jsx('img', {
                      className: 'h-8 w-8 border-2 rounded-full object-cover',
                      src: user.photo,
                      alt: 'user photo',
                    }),
                    navbar_component_jsx(
                      'span',
                      {
                        className: 'ml-3 font-semibold text-white',
                      },
                      user.login,
                    ),
                  ),
                  navbar_component_jsx(
                    'div',
                    {
                      className: 'mt-4',
                    },
                    navbar_component_jsx(
                      link_default.a,
                      {
                        href: `/users/${user._id}`,
                      },
                      navbar_component_jsx(
                        'a',
                        {
                          className:
                            'block text-white hover:text-violet_primary',
                        },
                        'Twoje konto',
                      ),
                    ),
                    navbar_component_jsx(
                      link_default.a,
                      {
                        href: '/tasks/new',
                      },
                      navbar_component_jsx(
                        'a',
                        {
                          href: '#',
                          className:
                            'mt-2 block text-white hover:text-violet_primary',
                        },
                        'Dodaj zadanie',
                      ),
                    ),
                    navbar_component_jsx(
                      'a',
                      {
                        href: '/auth/logout',
                        className:
                          'mt-2 block text-white hover:text-violet_primary',
                      },
                      'Wyloguj si\u0119',
                    ),
                  ),
                ),
              ),
          ),
          withHero && navbar_component_jsx(HeroComponent, null),
        );
      }
      // CONCATENATED MODULE: ./components/shared/layout/layout.component.tsx
      var layout_component_jsx = external_react_default.a.createElement;

      function LayoutComponent({ user, withHero, children }) {
        return layout_component_jsx(
          'div',
          {
            className: 'antialiased text-gray-900',
          },
          layout_component_jsx(NavbarComponent, {
            user: user,
            withHero: withHero,
          }),
          layout_component_jsx(
            'main',
            {
              className: 'container mx-auto',
            },
            children,
          ),
        );
      }

      /***/
    },

    /***/ XXXT: /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return /* binding */ NewTaskComponent;
      });

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__('cDcd');
      var external_react_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_,
      );

      // EXTERNAL MODULE: external "react-final-form"
      var external_react_final_form_ = __webpack_require__('amB/');

      // EXTERNAL MODULE: external "react-final-form-arrays"
      var external_react_final_form_arrays_ = __webpack_require__('OwZz');

      // EXTERNAL MODULE: external "final-form-arrays"
      var external_final_form_arrays_ = __webpack_require__('VKoO');
      var external_final_form_arrays_default = /*#__PURE__*/ __webpack_require__.n(
        external_final_form_arrays_,
      );

      // CONCATENATED MODULE: ./components/shared/form-wrapper/form-wrapper.component.tsx
      var __jsx = external_react_default.a.createElement;

      function FormWrapperComponent({ children }) {
        return __jsx(
          'div',
          {
            className:
              'flex flex-wrap -mx-1 overflow-hidden max-w-3xl ml-auto mr-auto',
          },
          __jsx(
            'div',
            {
              className:
                'py-4 px-4 bg-gray-800 my-1 px-1 w-full rounded sm:rounded-r-none overflow-hidden sm:w-3/4 bg-pink_bg',
            },
            children,
          ),
          __jsx(
            'div',
            {
              className:
                'hidden bg-yellow-800 my-1 px-1 w-full sm:rounded-r overflow-hidden sm:block sm:w-1/4 bg-gradient-navbar relative',
            },
            __jsx('img', {
              src: '/static/images/object.svg',
              alt: 'object',
              className: 'absolute right-0 min-w-full',
              style: {
                top: '50px',
              },
            }),
          ),
        );
      }
      // EXTERNAL MODULE: ./components/shared/input/input.component.tsx
      var input_component = __webpack_require__('71IU');

      // CONCATENATED MODULE: ./components/new-task/utils/map-form-to-new-task-form.util.ts
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly)
            symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
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
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source),
            );
          } else {
            ownKeys(Object(source)).forEach(function(key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key),
              );
            });
          }
        }
        return target;
      }

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

      function mapFormToNewTaskFormat(task) {
        var _task$tips, _task$images;

        return _objectSpread({}, task, {
          tips: ((_task$tips = task.tips) === null || _task$tips === void 0
          ? void 0
          : _task$tips.length)
            ? task.tips.map(tip => tip.tip)
            : [],
          images: ((_task$images = task.images) === null ||
          _task$images === void 0
          ? void 0
          : _task$images.length)
            ? task.images.map(image => image.image)
            : [],
          tags: task.tags ? task.tags.split(',').map(s => s.trim()) : [],
        });
      }
      // EXTERNAL MODULE: ./components/shared/heading/heading.component.tsx
      var heading_component = __webpack_require__('/EVp');

      // CONCATENATED MODULE: ./components/new-task/heading/heading.component.tsx
      var heading_component_jsx = external_react_default.a.createElement;

      function NewTaskHeading({ children }) {
        return heading_component_jsx(
          heading_component['a' /* default */],
          {
            CustomTag: 'h2',
            orientation: 'left',
            size: '2xl',
            font: 'thin',
            tracking: 'wide',
          },
          children,
        );
      }
      // CONCATENATED MODULE: ./components/new-task/field-array/field-array.component.tsx
      var field_array_component_jsx = external_react_default.a.createElement;

      function FieldArrayComponent({ recordName, label, fields, placeholder }) {
        return field_array_component_jsx(
          'div',
          {
            className: 'mb-4',
          },
          field_array_component_jsx(
            'label',
            {
              className:
                'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2',
            },
            label,
          ),
          fields.map((name, index) =>
            field_array_component_jsx(
              'div',
              {
                key: name,
              },
              field_array_component_jsx(external_react_final_form_['Field'], {
                name: `${name}.${recordName}`,
                label: '',
                component: input_component['a' /* default */],
                placeholder: placeholder,
                inputButton: field_array_component_jsx(
                  'button',
                  {
                    type: 'button',
                    className:
                      'h-full pl-1 w-16 max-w-full rounded-r  text-white text-xs font-semibold',
                    onClick: () => fields.remove(index),
                  },
                  field_array_component_jsx(
                    'svg',
                    {
                      className: 'text-white',
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 24 24',
                      width: '32',
                      height: '32',
                    },
                    field_array_component_jsx('path', {
                      className: 'heroicon-ui',
                      d:
                        'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v14h14V5H5zm11 7a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1z',
                    }),
                  ),
                ),
              }),
            ),
          ),
          field_array_component_jsx(
            'button',
            {
              title: 'dodaj wskaz\xF3wk\u0119',
              type: 'button',
              onClick: () =>
                fields.push({
                  [recordName]: '',
                }),
            },
            field_array_component_jsx(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                width: '32',
                height: '32',
              },
              field_array_component_jsx('path', {
                className: 'heroicon-ui',
                d:
                  'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v14h14V5H5zm8 6h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2z',
              }),
            ),
          ),
        );
      }
      // CONCATENATED MODULE: ./components/shared/markdown-editor/markdown-editor.component.tsx
      var markdown_editor_component_jsx =
        external_react_default.a.createElement;

      function _extends() {
        _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
        return _extends.apply(this, arguments);
      }

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
        const { input, placeholder, label } = props;
        const textAreaRef = external_react_default.a.createRef();
        const textAreaClassNames =
          'font-mono appearance-none block w-full h-80 bg-white text-gray-700 rounded-l py-3 px-4 leading-tight border-transparent border focus:outline-none focus:border-violet_primary';
        const actionToTokens = {
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

        const addTokensToTextarea = (el, tokens) => {
          const { selectionStart, selectionEnd, value } = el;
          const startTokenLenths = tokens.open.length;
          let newValue = value;
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

        const handleAction = action => e => {
          var _textAreaRef$current;

          e.preventDefault();
          const el = textAreaRef.current;

          if (!el) {
            return;
          }

          const tokens = actionToTokens[action];
          addTokensToTextarea(el, tokens);
          const value = (textAreaRef === null || textAreaRef === void 0
          ? void 0
          : (_textAreaRef$current = textAreaRef.current) === null ||
            _textAreaRef$current === void 0
          ? void 0
          : _textAreaRef$current.value)
            ? textAreaRef.current.value
            : '';
          input.onChange(value);
        };

        return markdown_editor_component_jsx(
          'div',
          {
            className: 'mb-3',
          },
          markdown_editor_component_jsx(
            'label',
            {
              className:
                'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2',
              htmlFor: input.name,
            },
            label,
          ),
          markdown_editor_component_jsx(
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
          markdown_editor_component_jsx(
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
          markdown_editor_component_jsx(
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
          markdown_editor_component_jsx(
            'span',
            {
              className: 'ml-2',
            },
            '|',
          ),
          markdown_editor_component_jsx(
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
          markdown_editor_component_jsx(
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
          markdown_editor_component_jsx(
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
          markdown_editor_component_jsx(
            'div',
            {
              className: 'mt-2 flex items-stretch',
            },
            markdown_editor_component_jsx(
              'textarea',
              _extends(
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
      // EXTERNAL MODULE: ./components/shared/markdown-view/markdown-view.component.tsx + 1 modules
      var markdown_view_component = __webpack_require__('iOK0');

      // CONCATENATED MODULE: ./components/new-task/utils/task-mapper.util.ts
      function taskMapper(task) {
        return {
          content: task.content,
          repo: task.repo,
          images: task.images.map(image => ({
            image,
          })),
          tips: task.tips.map(tip => ({
            tip,
          })),
          title: task.title,
          tags: task.tags.join(','),
        };
      }
      // CONCATENATED MODULE: ./components/new-task/new-task.component.tsx
      var new_task_component_jsx = external_react_default.a.createElement;

      function new_task_component_ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly)
            symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          keys.push.apply(keys, symbols);
        }
        return keys;
      }

      function new_task_component_objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            new_task_component_ownKeys(Object(source), true).forEach(function(
              key,
            ) {
              new_task_component_defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source),
            );
          } else {
            new_task_component_ownKeys(Object(source)).forEach(function(key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key),
              );
            });
          }
        }
        return target;
      }

      function new_task_component_defineProperty(obj, key, value) {
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

      // const required = (value: string) => (value ? undefined : "Required");

      function NewTaskComponent({ task, onSubmit }) {
        // todo: investigate why values argument doesnt work with NewTaskForm type
        async function onFormSubmit(values) {
          if (onSubmit) {
            onSubmit(mapFormToNewTaskFormat(values));
          }
        }

        return new_task_component_jsx(
          external_react_default.a.Fragment,
          null,
          new_task_component_jsx(NewTaskHeading, null, 'Kreator zada\u0144'),
          new_task_component_jsx(
            FormWrapperComponent,
            null,
            new_task_component_jsx(external_react_final_form_['Form'], {
              onSubmit: onFormSubmit,
              mutators: new_task_component_objectSpread(
                {},
                external_final_form_arrays_default.a,
              ),
              initialValues: task ? taskMapper(task) : {},
              render: ({ handleSubmit, values }) =>
                new_task_component_jsx(
                  'form',
                  {
                    onSubmit: handleSubmit,
                  },
                  new_task_component_jsx(external_react_final_form_['Field'], {
                    name: 'title',
                    label: 'Tytu\u0142',
                    component: input_component['a' /* default */],
                    placeholder: 'np. Super cool formularz',
                  }),
                  new_task_component_jsx(external_react_final_form_['Field'], {
                    name: 'repo',
                    label: 'Link do zadania na Github',
                    component: input_component['a' /* default */],
                    placeholder: 'https://github.com/kodifaj',
                  }),
                  new_task_component_jsx(external_react_final_form_['Field'], {
                    name: 'tags',
                    label: 'Tagi',
                    component: input_component['a' /* default */],
                    placeholder: 'html, js, css',
                  }),
                  new_task_component_jsx(
                    external_react_final_form_arrays_['FieldArray'],
                    {
                      name: 'tips',
                    },
                    ({ fields, meta }) =>
                      new_task_component_jsx(FieldArrayComponent, {
                        fields: fields,
                        meta: meta,
                        recordName: 'tip',
                        label: 'Wskaz\xF3wki',
                        placeholder: 'Nowa wskaz\xF3wka',
                      }),
                  ),
                  new_task_component_jsx(
                    external_react_final_form_arrays_['FieldArray'],
                    {
                      name: 'images',
                    },
                    ({ fields, meta }) =>
                      new_task_component_jsx(FieldArrayComponent, {
                        fields: fields,
                        meta: meta,
                        recordName: 'image',
                        label: 'Obrazy',
                        placeholder: 'Nowy obraz max 10kb',
                      }),
                  ),
                  new_task_component_jsx(external_react_final_form_['Field'], {
                    name: 'content',
                    label: 'Tre\u015B\u0107',
                    component: MarkdownEditorComponent,
                    placeholder: 'Na czym polega zadanie?',
                  }),
                  new_task_component_jsx(
                    'span',
                    {
                      className:
                        'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2',
                    },
                    'Preview',
                  ),
                  new_task_component_jsx(
                    'div',
                    {
                      className: 'bg-white p-2 my-2 rounded',
                    },
                    new_task_component_jsx(
                      markdown_view_component['a' /* MarkdownViewComponent */],
                      {
                        source: values.content,
                      },
                    ),
                  ),
                  new_task_component_jsx(
                    'div',
                    {
                      className: 'mt-6 flex flex-row-reverse',
                    },
                    new_task_component_jsx(
                      'button',
                      {
                        className:
                          'bg-gradient-button text-white px-4 py-2 rounded tracking-wide',
                        type: 'submit',
                      },
                      'zapisz zadanie',
                    ),
                  ),
                ),
            }),
          ),
        );
      }

      /***/
    },

    /***/ YFqc: /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__('cTJO');

      /***/
    },

    /***/ YTqd: /***/ function(module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      function getRouteRegex(normalizedRoute) {
        // Escape all characters that could be considered RegEx
        const escapedRoute = (
          normalizedRoute.replace(/\/$/, '') || '/'
        ).replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
        const groups = {};
        let groupIndex = 1;
        const parameterizedRoute = escapedRoute.replace(
          /\/\\\[([^/]+?)\\\](?=\/|$)/g,
          (_, $1) => {
            const isCatchAll = /^(\\\.){3}/.test($1);
            groups[
              $1 // Un-escape key
                .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')
                .replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
            ] = {
              pos: groupIndex++,
              repeat: isCatchAll,
            };
            return isCatchAll ? '/(.+?)' : '/([^/]+?)';
          },
        );
        return {
          re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
          groups,
        };
      }

      exports.getRouteRegex = getRouteRegex;

      /***/
    },

    /***/ 'amB/': /***/ function(module, exports) {
      module.exports = require('react-final-form');

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

    /***/ cTJO: /***/ function(module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireDefault = __webpack_require__('AroE');

      var _interopRequireWildcard = __webpack_require__('7KCV');

      exports.__esModule = true;
      exports.default = void 0;

      var _react = _interopRequireWildcard(__webpack_require__('cDcd'));

      var _url = __webpack_require__('bzos');

      var _utils = __webpack_require__('g/15');

      var _router = _interopRequireDefault(__webpack_require__('nOHt'));

      function isLocal(href) {
        var url = (0, _url.parse)(href, false, true);
        var origin = (0, _url.parse)(
          (0, _utils.getLocationOrigin)(),
          false,
          true,
        );
        return (
          !url.host ||
          (url.protocol === origin.protocol && url.host === origin.host)
        );
      }

      function memoizedFormatUrl(formatFunc) {
        var lastHref = null;
        var lastAs = null;
        var lastResult = null;
        return (href, as) => {
          if (lastResult && href === lastHref && as === lastAs) {
            return lastResult;
          }

          var result = formatFunc(href, as);
          lastHref = href;
          lastAs = as;
          lastResult = result;
          return result;
        };
      }

      function formatUrl(url) {
        return url && typeof url === 'object'
          ? (0, _utils.formatWithValidation)(url)
          : url;
      }

      var observer;
      var listeners = new Map();
      var IntersectionObserver = false ? undefined : null;
      var prefetched = {};

      function getObserver() {
        // Return shared instance of IntersectionObserver if already created
        if (observer) {
          return observer;
        } // Only create shared IntersectionObserver if supported in browser

        if (!IntersectionObserver) {
          return undefined;
        }

        return (observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (!listeners.has(entry.target)) {
                return;
              }

              var cb = listeners.get(entry.target);

              if (entry.isIntersecting || entry.intersectionRatio > 0) {
                observer.unobserve(entry.target);
                listeners.delete(entry.target);
                cb();
              }
            });
          },
          {
            rootMargin: '200px',
          },
        ));
      }

      var listenToIntersections = (el, cb) => {
        var observer = getObserver();

        if (!observer) {
          return () => {};
        }

        observer.observe(el);
        listeners.set(el, cb);
        return () => {
          try {
            observer.unobserve(el);
          } catch (err) {
            console.error(err);
          }

          listeners.delete(el);
        };
      };

      class Link extends _react.Component {
        constructor(props) {
          super(props);
          this.p = void 0;

          this.cleanUpListeners = () => {};

          this.formatUrls = memoizedFormatUrl((href, asHref) => {
            return {
              href: formatUrl(href),
              as: asHref ? formatUrl(asHref) : asHref,
            };
          });

          this.linkClicked = e => {
            var { nodeName, target } = e.currentTarget;

            if (
              nodeName === 'A' &&
              ((target && target !== '_self') ||
                e.metaKey ||
                e.ctrlKey ||
                e.shiftKey ||
                (e.nativeEvent && e.nativeEvent.which === 2))
            ) {
              // ignore click for new tab / new window behavior
              return;
            }

            var { href, as } = this.formatUrls(this.props.href, this.props.as);

            if (!isLocal(href)) {
              // ignore click if it's outside our scope (e.g. https://google.com)
              return;
            }

            var { pathname } = window.location;
            href = (0, _url.resolve)(pathname, href);
            as = as ? (0, _url.resolve)(pathname, as) : href;
            e.preventDefault(); //  avoid scroll for urls with anchor refs

            var { scroll } = this.props;

            if (scroll == null) {
              scroll = as.indexOf('#') < 0;
            } // replace state instead of push if prop is present

            _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
              shallow: this.props.shallow,
            }).then(success => {
              if (!success) return;

              if (scroll) {
                window.scrollTo(0, 0);
                document.body.focus();
              }
            });
          };

          if (false) {
          }

          this.p = props.prefetch !== false;
        }

        componentWillUnmount() {
          this.cleanUpListeners();
        }

        getPaths() {
          var { pathname } = window.location;
          var { href: parsedHref, as: parsedAs } = this.formatUrls(
            this.props.href,
            this.props.as,
          );
          var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
          return [
            resolvedHref,
            parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref,
          ];
        }

        handleRef(ref) {
          if (this.p && IntersectionObserver && ref && ref.tagName) {
            this.cleanUpListeners();
            var isPrefetched =
              prefetched[
                this.getPaths().join(
                  // Join on an invalid URI character
                  '%',
                )
              ];

            if (!isPrefetched) {
              this.cleanUpListeners = listenToIntersections(ref, () => {
                this.prefetch();
              });
            }
          }
        } // The function is memoized so that no extra lifecycles are needed
        // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

        prefetch(options) {
          if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

          var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
          // loading with priority which can reject but we don't
          // want to force navigation since this is only a prefetch

          _router.default
            .prefetch(
              paths[/* href */
              0],
              paths[/* asPath */
              1],
              options,
            )
            .catch(err => {
              if (false) {
              }
            });

          prefetched[
            paths.join(
              // Join on an invalid URI character
              '%',
            )
          ] = true;
        }

        render() {
          var { children } = this.props;
          var { href, as } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

          if (typeof children === 'string') {
            children = _react.default.createElement('a', null, children);
          } // This will return the first child, if multiple are provided it will throw an error

          var child = _react.Children.only(children);

          var props = {
            ref: el => {
              this.handleRef(el);

              if (child && typeof child === 'object' && child.ref) {
                if (typeof child.ref === 'function') child.ref(el);
                else if (typeof child.ref === 'object') {
                  child.ref.current = el;
                }
              }
            },
            onMouseEnter: e => {
              if (
                child.props &&
                typeof child.props.onMouseEnter === 'function'
              ) {
                child.props.onMouseEnter(e);
              }

              this.prefetch({
                priority: true,
              });
            },
            onClick: e => {
              if (child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
              }

              if (!e.defaultPrevented) {
                this.linkClicked(e);
              }
            },
          }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
          // defined, we specify the current 'href', so that repetition is not needed by the user

          if (
            this.props.passHref ||
            (child.type === 'a' && !('href' in child.props))
          ) {
            props.href = as || href;
          } // Add the ending slash to the paths. So, we can serve the
          // "<page>/index.html" directly.

          if (false) {
            var rewriteUrlForNextExport;
          }

          return _react.default.cloneElement(child, props);
        }
      }

      if (false) {
        var exact, PropTypes, warn;
      }

      var _default = Link;
      exports.default = _default;

      /***/
    },

    /***/ dYMV: /***/ function(module, exports) {
      module.exports = require('clsx');

      /***/
    },

    /***/ dZ6Y: /***/ function(module, exports, __webpack_require__) {
      'use strict';

      /*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      function mitt() {
        const all = Object.create(null);
        return {
          on(type, handler) {
            (all[type] || (all[type] = [])).push(handler);
          },

          off(type, handler) {
            if (all[type]) {
              // tslint:disable-next-line:no-bitwise
              all[type].splice(all[type].indexOf(handler) >>> 0, 1);
            }
          },

          emit(type, ...evts) {
            // eslint-disable-next-line array-callback-return
            (all[type] || []).slice().map(handler => {
              handler(...evts);
            });
          },
        };
      }

      exports.default = mitt;

      /***/
    },

    /***/ elyg: /***/ function(module, exports, __webpack_require__) {
      'use strict';

      var __importDefault =
        (this && this.__importDefault) ||
        function(mod) {
          return mod && mod.__esModule
            ? mod
            : {
                default: mod,
              };
        };

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      const url_1 = __webpack_require__('bzos');

      const mitt_1 = __importDefault(__webpack_require__('dZ6Y'));

      const utils_1 = __webpack_require__('g/15');

      const is_dynamic_1 = __webpack_require__('/jkW');

      const route_matcher_1 = __webpack_require__('gguc');

      const route_regex_1 = __webpack_require__('YTqd');

      function addBasePath(path) {
        // variable is always a string
        const p = '';
        return path.indexOf(p) !== 0 ? p + path : path;
      }

      function toRoute(path) {
        return path.replace(/\/$/, '') || '/';
      }

      const prepareRoute = path =>
        toRoute(!path || path === '/' ? '/index' : path);

      function fetchNextData(pathname, query, isServerRender, cb) {
        let attempts = isServerRender ? 3 : 1;

        function getResponse() {
          return fetch(
            utils_1.formatWithValidation({
              // @ts-ignore __NEXT_DATA__
              pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
              query,
            }),
            {
              // Cookies are required to be present for Next.js' SSG "Preview Mode".
              // Cookies may also be required for `getServerSideProps`.
              //
              // > `fetch` won’t send cookies, unless you set the credentials init
              // > option.
              // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
              //
              // > For maximum browser compatibility when it comes to sending &
              // > receiving cookies, always supply the `credentials: 'same-origin'`
              // > option instead of relying on the default.
              // https://github.com/github/fetch#caveats
              credentials: 'same-origin',
            },
          ).then(res => {
            if (!res.ok) {
              if (--attempts > 0 && res.status >= 500) {
                return getResponse();
              }

              throw new Error(`Failed to load static props`);
            }

            return res.json();
          });
        }

        return getResponse()
          .then(data => {
            return cb ? cb(data) : data;
          })
          .catch(err => {
            // We should only trigger a server-side transition if this was caused
            // on a client-side transition. Otherwise, we'd get into an infinite
            // loop.
            if (!isServerRender) {
              err.code = 'PAGE_LOAD_ERROR';
            }

            throw err;
          });
      }

      class Router {
        constructor(
          pathname,
          query,
          as,
          {
            initialProps,
            pageLoader,
            App,
            wrapApp,
            Component,
            err,
            subscription,
            isFallback,
          },
        ) {
          // Static Data Cache
          this.sdc = {};

          this.onPopState = e => {
            if (!e.state) {
              // We get state as undefined for two reasons.
              //  1. With older safari (< 8) and older chrome (< 34)
              //  2. When the URL changed with #
              //
              // In the both cases, we don't need to proceed and change the route.
              // (as it's already changed)
              // But we can simply replace the state with the new changes.
              // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
              // So, doing the following for (1) does no harm.
              const { pathname, query } = this;
              this.changeState(
                'replaceState',
                utils_1.formatWithValidation({
                  pathname,
                  query,
                }),
                utils_1.getURL(),
              );
              return;
            } // Make sure we don't re-render on initial load,
            // can be caused by navigating back from an external site

            if (
              e.state &&
              this.isSsr &&
              e.state.as === this.asPath &&
              url_1.parse(e.state.url).pathname === this.pathname
            ) {
              return;
            } // If the downstream application returns falsy, return.
            // They will then be responsible for handling the event.

            if (this._bps && !this._bps(e.state)) {
              return;
            }

            const { url, as, options } = e.state;

            if (false) {
            }

            this.replace(url, as, options);
          };

          this._getStaticData = asPath => {
            const pathname = prepareRoute(url_1.parse(asPath).pathname);
            return true && this.sdc[pathname]
              ? Promise.resolve(this.sdc[pathname])
              : fetchNextData(
                  pathname,
                  null,
                  this.isSsr,
                  data => (this.sdc[pathname] = data),
                );
          };

          this._getServerData = asPath => {
            let { pathname, query } = url_1.parse(asPath, true);
            pathname = prepareRoute(pathname);
            return fetchNextData(pathname, query, this.isSsr);
          }; // represents the current component key

          this.route = toRoute(pathname); // set up the component cache (by route keys)

          this.components = {}; // We should not keep the cache, if there's an error
          // Otherwise, this cause issues when when going back and
          // come again to the errored page.

          if (pathname !== '/_error') {
            this.components[this.route] = {
              Component,
              props: initialProps,
              err,
              __N_SSG: initialProps && initialProps.__N_SSG,
              __N_SSP: initialProps && initialProps.__N_SSP,
            };
          }

          this.components['/_app'] = {
            Component: App,
          }; // Backwards compat for Router.router.events
          // TODO: Should be remove the following major version as it was never documented

          this.events = Router.events;
          this.pageLoader = pageLoader;
          this.pathname = pathname;
          this.query = query; // if auto prerendered and dynamic route wait to update asPath
          // until after mount to prevent hydration mismatch

          this.asPath = // @ts-ignore this is temporarily global (attached to window)
            is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport
              ? pathname
              : as;
          this.sub = subscription;
          this.clc = null;
          this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
          // back from external site

          this.isSsr = true;
          this.isFallback = isFallback;

          if (false) {
          }
        } // @deprecated backwards compatibility even though it's a private method.

        static _rewriteUrlForNextExport(url) {
          if (false) {
          } else {
            return url;
          }
        }

        update(route, mod) {
          const Component = mod.default || mod;
          const data = this.components[route];

          if (!data) {
            throw new Error(`Cannot update unavailable route: ${route}`);
          }

          const newData = Object.assign(Object.assign({}, data), {
            Component,
            __N_SSG: mod.__N_SSG,
            __N_SSP: mod.__N_SSP,
          });
          this.components[route] = newData; // pages/_app.js updated

          if (route === '/_app') {
            this.notify(this.components[this.route]);
            return;
          }

          if (route === this.route) {
            this.notify(newData);
          }
        }

        reload() {
          window.location.reload();
        }
        /**
         * Go back in history
         */

        back() {
          window.history.back();
        }
        /**
         * Performs a `pushState` with arguments
         * @param url of the route
         * @param as masks `url` for the browser
         * @param options object you can define `shallow` and other options
         */

        push(url, as = url, options = {}) {
          return this.change('pushState', url, as, options);
        }
        /**
         * Performs a `replaceState` with arguments
         * @param url of the route
         * @param as masks `url` for the browser
         * @param options object you can define `shallow` and other options
         */

        replace(url, as = url, options = {}) {
          return this.change('replaceState', url, as, options);
        }

        change(method, _url, _as, options) {
          return new Promise((resolve, reject) => {
            if (!options._h) {
              this.isSsr = false;
            } // marking route changes as a navigation start entry

            if (utils_1.ST) {
              performance.mark('routeChange');
            } // If url and as provided as an object representation,
            // we'll format them into the string version here.

            const url =
              typeof _url === 'object'
                ? utils_1.formatWithValidation(_url)
                : _url;
            let as =
              typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
            // "<page>/index.html" directly for the SSR page.

            if (false) {
            }

            this.abortComponentLoad(as); // If the url change is only related to a hash change
            // We should not proceed. We should only change the state.
            // WARNING: `_h` is an internal option for handing Next.js client-side
            // hydration. Your app should _never_ use this property. It may change at
            // any time without notice.

            if (!options._h && this.onlyAHashChange(as)) {
              this.asPath = as;
              Router.events.emit('hashChangeStart', as);
              this.changeState(method, url, addBasePath(as), options);
              this.scrollToHash(as);
              Router.events.emit('hashChangeComplete', as);
              return resolve(true);
            }

            const { pathname, query, protocol } = url_1.parse(url, true);

            if (!pathname || protocol) {
              if (false) {
              }

              return resolve(false);
            } // If asked to change the current URL we should reload the current page
            // (not location.reload() but reload getInitialProps and other Next.js stuffs)
            // We also need to set the method = replaceState always
            // as this should not go into the history (That's how browsers work)
            // We should compare the new asPath to the current asPath, not the url

            if (!this.urlIsNew(as)) {
              method = 'replaceState';
            }

            const route = toRoute(pathname);
            const { shallow = false } = options;

            if (is_dynamic_1.isDynamicRoute(route)) {
              const { pathname: asPathname } = url_1.parse(as);
              const routeRegex = route_regex_1.getRouteRegex(route);
              const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(
                asPathname,
              );

              if (!routeMatch) {
                const missingParams = Object.keys(routeRegex.groups).filter(
                  param => !query[param],
                );

                if (missingParams.length > 0) {
                  if (false) {
                  }

                  return reject(
                    new Error(
                      `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` +
                        `Read more: https://err.sh/zeit/next.js/incompatible-href-as`,
                    ),
                  );
                }
              } else {
                // Merge params into `query`, overwriting any specified in search
                Object.assign(query, routeMatch);
              }
            }

            Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

            this.getRouteInfo(route, pathname, query, as, shallow).then(
              routeInfo => {
                const { error } = routeInfo;

                if (error && error.cancelled) {
                  return resolve(false);
                }

                Router.events.emit('beforeHistoryChange', as);
                this.changeState(method, url, addBasePath(as), options);

                if (false) {
                }

                this.set(route, pathname, query, as, routeInfo);

                if (error) {
                  Router.events.emit('routeChangeError', error, as);
                  throw error;
                }

                Router.events.emit('routeChangeComplete', as);
                return resolve(true);
              },
              reject,
            );
          });
        }

        changeState(method, url, as, options = {}) {
          if (false) {
          }

          if (method !== 'pushState' || utils_1.getURL() !== as) {
            window.history[method](
              {
                url,
                as,
                options,
              }, // Most browsers currently ignores this parameter, although they may use it in the future.
              // Passing the empty string here should be safe against future changes to the method.
              // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
              '',
              as,
            );
          }
        }

        getRouteInfo(route, pathname, query, as, shallow = false) {
          const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
          // If the route is already rendered on the screen.

          if (shallow && cachedRouteInfo && this.route === route) {
            return Promise.resolve(cachedRouteInfo);
          }

          const handleError = (err, loadErrorFail) => {
            return new Promise(resolve => {
              if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
                // If we can't load the page it could be one of following reasons
                //  1. Page doesn't exists
                //  2. Page does exist in a different zone
                //  3. Internal error while loading the page
                // So, doing a hard reload is the proper way to deal with this.
                window.location.href = as; // Changing the URL doesn't block executing the current code path.
                // So, we need to mark it as a cancelled error and stop the routing logic.

                err.cancelled = true; // @ts-ignore TODO: fix the control flow here

                return resolve({
                  error: err,
                });
              }

              if (err.cancelled) {
                // @ts-ignore TODO: fix the control flow here
                return resolve({
                  error: err,
                });
              }

              resolve(
                this.fetchComponent('/_error')
                  .then(res => {
                    const { page: Component } = res;
                    const routeInfo = {
                      Component,
                      err,
                    };
                    return new Promise(resolve => {
                      this.getInitialProps(Component, {
                        err,
                        pathname,
                        query,
                      }).then(
                        props => {
                          routeInfo.props = props;
                          routeInfo.error = err;
                          resolve(routeInfo);
                        },
                        gipErr => {
                          console.error(
                            'Error in error page `getInitialProps`: ',
                            gipErr,
                          );
                          routeInfo.error = err;
                          routeInfo.props = {};
                          resolve(routeInfo);
                        },
                      );
                    });
                  })
                  .catch(err => handleError(err, true)),
              );
            });
          };

          return new Promise((resolve, reject) => {
            if (cachedRouteInfo) {
              return resolve(cachedRouteInfo);
            }

            this.fetchComponent(route).then(
              res =>
                resolve({
                  Component: res.page,
                  __N_SSG: res.mod.__N_SSG,
                  __N_SSP: res.mod.__N_SSP,
                }),
              reject,
            );
          })
            .then(routeInfo => {
              const { Component, __N_SSG, __N_SSP } = routeInfo;

              if (false) {
              }

              return this._getData(() =>
                __N_SSG
                  ? this._getStaticData(as)
                  : __N_SSP
                  ? this._getServerData(as)
                  : this.getInitialProps(
                      Component, // we provide AppTree later so this needs to be `any`
                      {
                        pathname,
                        query,
                        asPath: as,
                      },
                    ),
              ).then(props => {
                routeInfo.props = props;
                this.components[route] = routeInfo;
                return routeInfo;
              });
            })
            .catch(handleError);
        }

        set(route, pathname, query, as, data) {
          this.isFallback = false;
          this.route = route;
          this.pathname = pathname;
          this.query = query;
          this.asPath = as;
          this.notify(data);
        }
        /**
         * Callback to execute before replacing router state
         * @param cb callback to be executed
         */

        beforePopState(cb) {
          this._bps = cb;
        }

        onlyAHashChange(as) {
          if (!this.asPath) return false;
          const [oldUrlNoHash, oldHash] = this.asPath.split('#');
          const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

          if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
            return true;
          } // If the urls are change, there's more than a hash change

          if (oldUrlNoHash !== newUrlNoHash) {
            return false;
          } // If the hash has changed, then it's a hash only change.
          // This check is necessary to handle both the enter and
          // leave hash === '' cases. The identity case falls through
          // and is treated as a next reload.

          return oldHash !== newHash;
        }

        scrollToHash(as) {
          const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

          if (hash === '') {
            window.scrollTo(0, 0);
            return;
          } // First we check if the element by id is found

          const idEl = document.getElementById(hash);

          if (idEl) {
            idEl.scrollIntoView();
            return;
          } // If there's no element with the id, we check the `name` property
          // To mirror browsers

          const nameEl = document.getElementsByName(hash)[0];

          if (nameEl) {
            nameEl.scrollIntoView();
          }
        }

        urlIsNew(asPath) {
          return this.asPath !== asPath;
        }
        /**
         * Prefetch page code, you may wait for the data during page rendering.
         * This feature only works in production!
         * @param url the href of prefetched page
         * @param asPath the as path of the prefetched page
         */

        prefetch(url, asPath = url, options = {}) {
          return new Promise((resolve, reject) => {
            const { pathname, protocol } = url_1.parse(url);

            if (!pathname || protocol) {
              if (false) {
              }

              return;
            } // Prefetch is not supported in development mode because it would trigger on-demand-entries

            if (false) {
            }

            Promise.all([
              this.pageLoader.prefetchData(url, asPath),
              this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](
                toRoute(pathname),
              ),
            ]).then(() => resolve(), reject);
          });
        }

        async fetchComponent(route) {
          let cancelled = false;

          const cancel = (this.clc = () => {
            cancelled = true;
          });

          const componentResult = await this.pageLoader.loadPage(route);

          if (cancelled) {
            const error = new Error(
              `Abort fetching component for route: "${route}"`,
            );
            error.cancelled = true;
            throw error;
          }

          if (cancel === this.clc) {
            this.clc = null;
          }

          return componentResult;
        }

        _getData(fn) {
          let cancelled = false;

          const cancel = () => {
            cancelled = true;
          };

          this.clc = cancel;
          return fn().then(data => {
            if (cancel === this.clc) {
              this.clc = null;
            }

            if (cancelled) {
              const err = new Error('Loading initial props cancelled');
              err.cancelled = true;
              throw err;
            }

            return data;
          });
        }

        getInitialProps(Component, ctx) {
          const { Component: App } = this.components['/_app'];

          const AppTree = this._wrapApp(App);

          ctx.AppTree = AppTree;
          return utils_1.loadGetInitialProps(App, {
            AppTree,
            Component,
            router: this,
            ctx,
          });
        }

        abortComponentLoad(as) {
          if (this.clc) {
            const e = new Error('Route Cancelled');
            e.cancelled = true;
            Router.events.emit('routeChangeError', e, as);
            this.clc();
            this.clc = null;
          }
        }

        notify(data) {
          this.sub(data, this.components['/_app'].Component);
        }
      }

      exports.default = Router;
      Router.events = mitt_1.default();

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

    /***/ gguc: /***/ function(module, exports, __webpack_require__) {
      'use strict';

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      function getRouteMatcher(routeRegex) {
        const { re, groups } = routeRegex;
        return pathname => {
          const routeMatch = re.exec(pathname);

          if (!routeMatch) {
            return false;
          }

          const decode = decodeURIComponent;
          const params = {};
          Object.keys(groups).forEach(slugName => {
            const g = groups[slugName];
            const m = routeMatch[g.pos];

            if (m !== undefined) {
              params[slugName] = ~m.indexOf('/')
                ? m.split('/').map(entry => decode(entry))
                : g.repeat
                ? [decode(m)]
                : decode(m);
            }
          });
          return params;
        };
      }

      exports.getRouteMatcher = getRouteMatcher;

      /***/
    },

    /***/ iOK0: /***/ function(
      module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      'use strict';

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return /* binding */ MarkdownViewComponent;
      });

      // EXTERNAL MODULE: external "react-markdown"
      var external_react_markdown_ = __webpack_require__('id0+');
      var external_react_markdown_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_markdown_,
      );

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__('cDcd');
      var external_react_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_,
      );

      // EXTERNAL MODULE: external "react-syntax-highlighter"
      var external_react_syntax_highlighter_ = __webpack_require__('RyM3');
      var external_react_syntax_highlighter_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_syntax_highlighter_,
      );

      // CONCATENATED MODULE: ./components/shared/code-block/code-block.component.tsx
      var __jsx = external_react_default.a.createElement;

      // import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

      class code_block_component_CodeBlockComponent extends external_react_default
        .a.PureComponent {
        render() {
          const { language = 'javascript', value = '' } = this.props;
          return __jsx(
            external_react_syntax_highlighter_default.a,
            {
              language: language,
            },
            value,
          );
        }
      }
      // CONCATENATED MODULE: ./components/shared/markdown-view/markdown-view.component.tsx
      var markdown_view_component_jsx = external_react_default.a.createElement;

      function MarkdownViewComponent({ source }) {
        return markdown_view_component_jsx(
          'div',
          {
            className: 'markdown-view',
          },
          markdown_view_component_jsx(external_react_markdown_default.a, {
            renderers: {
              code: code_block_component_CodeBlockComponent,
            },
            source: source,
          }),
        );
      }

      /***/
    },

    /***/ 'id0+': /***/ function(module, exports) {
      module.exports = require('react-markdown');

      /***/
    },

    /***/ nOHt: /***/ function(module, exports, __webpack_require__) {
      'use strict';

      var _interopRequireWildcard = __webpack_require__('7KCV');

      var _interopRequireDefault = __webpack_require__('AroE');

      exports.__esModule = true;
      exports.useRouter = useRouter;
      exports.makePublicRouterInstance = makePublicRouterInstance;
      exports.createRouter = exports.withRouter = exports.default = void 0;

      var _react = _interopRequireDefault(__webpack_require__('cDcd'));

      var _router2 = _interopRequireWildcard(__webpack_require__('elyg'));

      exports.Router = _router2.default;
      exports.NextRouter = _router2.NextRouter;

      var _routerContext = __webpack_require__('qOIg');

      var _withRouter = _interopRequireDefault(__webpack_require__('0Bsm'));

      exports.withRouter = _withRouter.default;
      /* global window */

      var singletonRouter = {
        router: null,
        // holds the actual router instance
        readyCallbacks: [],

        ready(cb) {
          if (this.router) return cb();

          if (false) {
          }
        },
      }; // Create public properties and methods of the router in the singletonRouter

      var urlPropertyFields = [
        'pathname',
        'route',
        'query',
        'asPath',
        'components',
        'isFallback',
      ];
      var routerEvents = [
        'routeChangeStart',
        'beforeHistoryChange',
        'routeChangeComplete',
        'routeChangeError',
        'hashChangeStart',
        'hashChangeComplete',
      ];
      var coreMethodFields = [
        'push',
        'replace',
        'reload',
        'back',
        'prefetch',
        'beforePopState',
      ]; // Events is a static property on the router, the router doesn't have to be initialized to use it

      Object.defineProperty(singletonRouter, 'events', {
        get() {
          return _router2.default.events;
        },
      });
      urlPropertyFields.forEach(field => {
        // Here we need to use Object.defineProperty because, we need to return
        // the property assigned to the actual router
        // The value might get changed as we change routes and this is the
        // proper way to access it
        Object.defineProperty(singletonRouter, field, {
          get() {
            var router = getRouter();
            return router[field];
          },
        });
      });
      coreMethodFields.forEach(field => {
        // We don't really know the types here, so we add them later instead
        singletonRouter[field] = function() {
          var router = getRouter();
          return router[field](...arguments);
        };
      });
      routerEvents.forEach(event => {
        singletonRouter.ready(() => {
          _router2.default.events.on(event, function() {
            var eventField =
              'on' + event.charAt(0).toUpperCase() + event.substring(1);
            var _singletonRouter = singletonRouter;

            if (_singletonRouter[eventField]) {
              try {
                _singletonRouter[eventField](...arguments);
              } catch (err) {
                // tslint:disable-next-line:no-console
                console.error(
                  'Error when running the Router event: ' + eventField,
                ); // tslint:disable-next-line:no-console

                console.error(err.message + '\n' + err.stack);
              }
            }
          });
        });
      });

      function getRouter() {
        if (!singletonRouter.router) {
          var message =
            'No router instance found.\n' +
            'You should only use "next/router" inside the client side of your app.\n';
          throw new Error(message);
        }

        return singletonRouter.router;
      } // Export the singletonRouter and this is the public API.

      var _default = singletonRouter; // Reexport the withRoute HOC

      exports.default = _default;

      function useRouter() {
        return _react.default.useContext(_routerContext.RouterContext);
      } // INTERNAL APIS
      // -------------
      // (do not use following exports inside the app)
      // Create a router and assign it as the singleton instance.
      // This is used in client side when we are initilizing the app.
      // This should **not** use inside the server.

      var createRouter = function createRouter() {
        for (
          var _len = arguments.length, args = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          args[_key] = arguments[_key];
        }

        singletonRouter.router = new _router2.default(...args);
        singletonRouter.readyCallbacks.forEach(cb => cb());
        singletonRouter.readyCallbacks = [];
        return singletonRouter.router;
      }; // This function is used to create the `withRouter` router instance

      exports.createRouter = createRouter;

      function makePublicRouterInstance(router) {
        var _router = router;
        var instance = {};

        for (var property of urlPropertyFields) {
          if (typeof _router[property] === 'object') {
            instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

            continue;
          }

          instance[property] = _router[property];
        } // Events is a static property on the router, the router doesn't have to be initialized to use it

        instance.events = _router2.default.events;
        coreMethodFields.forEach(field => {
          instance[field] = function() {
            return _router[field](...arguments);
          };
        });
        return instance;
      }

      /***/
    },

    /***/ qOIg: /***/ function(module, exports, __webpack_require__) {
      'use strict';

      var __importStar =
        (this && this.__importStar) ||
        function(mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null)
            for (var k in mod)
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
          result['default'] = mod;
          return result;
        };

      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      const React = __importStar(__webpack_require__('cDcd'));

      exports.RouterContext = React.createContext(null);

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
