module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/EVp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadingComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function HeadingComponent({
  CustomTag = 'h1',
  color = 'violet_primary',
  orientation = 'center',
  size = 'lg',
  font = 'normal',
  tracking = 'normal',
  classNames,
  children
}) {
  const headingClassNames = clsx__WEBPACK_IMPORTED_MODULE_1___default()('block', {
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
    'tracking-wide': tracking === 'wide'
  }, classNames);
  return __jsx(CustomTag, {
    className: headingClassNames
  }, children);
}

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Ruf+");


/***/ }),

/***/ "71IU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function InputComponent(props) {
  const {
    input,
    placeholder,
    label,
    fieldType,
    inputButton = null
  } = props;
  const Component = fieldType ? fieldType : 'input';
  const inputClassNames = clsx__WEBPACK_IMPORTED_MODULE_1___default()('font-mono appearance-none block w-full bg-white text-gray-700 rounded-l py-3 px-4 leading-tight border-transparent border focus:outline-none focus:border-violet_primary', {
    'rounded-r': !inputButton
  });
  return __jsx("div", {
    className: "mb-3"
  }, __jsx("label", {
    className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    htmlFor: input.name
  }, label), __jsx("div", {
    className: "flex items-stretch"
  }, __jsx(Component, _extends({
    placeholder: placeholder
  }, input, {
    className: inputClassNames
  })), inputButton ? __jsx("div", {
    className: "w-10"
  }, inputButton) : null));
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
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

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "Aio7":
/***/ (function(module, exports) {



/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "JaQg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HOSTNAME; });
const HOSTNAME = true ? "https://kodifaj.pl" : undefined;

/***/ }),

/***/ "Ruf+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// EXTERNAL MODULE: ./components/providers/user.provider.tsx
var user_provider = __webpack_require__("w68O");

// EXTERNAL MODULE: ./lib/hostname.config.ts
var hostname_config = __webpack_require__("JaQg");

// EXTERNAL MODULE: ./components/shared/layout/layout.component.tsx + 5 modules
var layout_component = __webpack_require__("WxVa");

// EXTERNAL MODULE: external "nuka-carousel"
var external_nuka_carousel_ = __webpack_require__("X5vA");
var external_nuka_carousel_default = /*#__PURE__*/__webpack_require__.n(external_nuka_carousel_);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// CONCATENATED MODULE: ./components/task-detail/carousel/carousel.component.tsx
var __jsx = external_react_default.a.createElement;




const CarouselButton = ({
  slide,
  right = false
}) => {
  const buttonClassNames = external_clsx_default()('flex justify-center h-12 w-12 rounded bg-white opacity-50 hover:opacity-75', {
    'ml-2': !right,
    'mr-2': right
  });
  return __jsx("button", {
    className: buttonClassNames,
    onClick: slide
  }, __jsx("img", {
    src: right ? '/static/images/chevron-thin-right.svg' : '/static/images/chevron-thin-left.svg',
    className: "h-8",
    alt: "carousel button"
  }));
};

class carousel_component_CarouselComponent extends external_react_["Component"] {
  render() {
    const {
      images
    } = this.props;
    return __jsx(external_nuka_carousel_default.a, {
      renderCenterLeftControls: ({
        previousSlide
      }) => __jsx(CarouselButton, {
        slide: previousSlide
      }),
      renderCenterRightControls: ({
        nextSlide
      }) => __jsx(CarouselButton, {
        slide: nextSlide,
        right: true
      }),
      renderBottomCenterControls: null,
      heightMode: 'max',
      slidesToShow: 1.5,
      cellAlign: 'center',
      cellSpacing: 8,
      wrapAround: true
    }, images.map((image, i) => __jsx("div", {
      key: i,
      className: "relative pb-5/6 md:pb-3/5 "
    }, __jsx("img", {
      className: "absolute h-full w-full object-cover rounded-lg overflow-hidden shadow-md",
      src: image,
      alt: "task pic"
    }))));
  }

}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/task-detail/aside/aside.component.tsx
var aside_component_jsx = external_react_default.a.createElement;



const Title = ({
  children
}) => aside_component_jsx("span", {
  className: "block mb-2 text-sm font-semibold tracking-wider text-violet_primary"
}, children);

const LabeledValue = ({
  value,
  label
}) => aside_component_jsx("div", {
  className: "text-sm text-gray-600"
}, label, ":", aside_component_jsx("span", {
  className: "text-gray-800 ml-2"
}, value));

const HelpLink = ({
  href,
  image,
  children
}) => aside_component_jsx(link_default.a, {
  href: href
}, aside_component_jsx("a", {
  className: "group flex items-center"
}, aside_component_jsx("img", {
  src: image,
  className: "h-4 opacity-50 group-hover:opacity-100",
  alt: "help"
}), aside_component_jsx("span", {
  className: "ml-2 text-sm text-gray-600 group-hover:text-gray-800"
}, children)));

function AsideComponent({
  createdAt,
  author,
  tags,
  difficulty,
  repo
}) {
  const difficultyVal = difficulty ? `${difficulty.toString()} / 5` : '3/5';
  return aside_component_jsx(external_react_default.a.Fragment, null, aside_component_jsx("section", null, aside_component_jsx(Title, null, "\u0179r\xF3d\u0142a"), aside_component_jsx("a", {
    href: repo
  }, aside_component_jsx("img", {
    src: "/static/images/github-icon.svg",
    className: "mt-3 opacity-50 hover:opacity-100",
    alt: "github icon"
  }))), aside_component_jsx("section", {
    className: "mt-6"
  }, aside_component_jsx(Title, null, "Informacje o zadaniu"), aside_component_jsx("div", {
    className: "mt-3"
  }, aside_component_jsx(LabeledValue, {
    value: createdAt,
    label: "Data"
  })), aside_component_jsx("div", {
    className: "mt-2"
  }, aside_component_jsx(LabeledValue, {
    value: author,
    label: "Autor"
  })), aside_component_jsx("div", {
    className: "mt-2"
  }, aside_component_jsx(LabeledValue, {
    value: tags.join(', '),
    label: "Tagi"
  })), aside_component_jsx("div", {
    className: "mt-2"
  }, aside_component_jsx(LabeledValue, {
    value: difficultyVal,
    label: "Skala trudno\u015Bci"
  }))), aside_component_jsx("section", {
    className: "mt-6"
  }, aside_component_jsx(Title, null, "Potrzebujesz pomocy?"), aside_component_jsx("div", {
    className: "mt-3"
  }, aside_component_jsx(HelpLink, {
    href: "/faq",
    image: "/static/images/help.svg"
  }, "Jak zacz\u0105\u0107?")), aside_component_jsx("div", {
    className: "mt-2"
  }, aside_component_jsx(HelpLink, {
    href: "#",
    image: "/static/images/lock.svg"
  }, "Wskaz\xF3wki")), aside_component_jsx("div", {
    className: "mt-2"
  }, aside_component_jsx(HelpLink, {
    href: "#",
    image: "/static/images/lock.svg"
  }, "Rozwi\u0105zania"))));
}
// EXTERNAL MODULE: ./components/shared/heading/heading.component.tsx
var heading_component = __webpack_require__("/EVp");

// CONCATENATED MODULE: ./components/task-detail/heading/task-heading.component.tsx
var task_heading_component_jsx = external_react_default.a.createElement;


const TaskHeading = ({
  children
}) => task_heading_component_jsx(heading_component["a" /* default */], {
  CustomTag: "h2",
  orientation: "left",
  size: "2xl",
  font: "thin",
  tracking: "wide"
}, children);
// EXTERNAL MODULE: external "react-final-form"
var external_react_final_form_ = __webpack_require__("amB/");

// EXTERNAL MODULE: ./components/shared/input/input.component.tsx
var input_component = __webpack_require__("71IU");

// CONCATENATED MODULE: ./components/task-detail/content/solution-form/solution-form.component.tsx
var solution_form_component_jsx = external_react_default.a.createElement;



function SolutionFormComponent({
  onSubmit,
  loading
}) {
  return solution_form_component_jsx("div", {
    className: "bg-pink_bg w-full rounded p-4"
  }, solution_form_component_jsx(external_react_final_form_["Form"], {
    onSubmit: onSubmit,
    render: ({
      handleSubmit
    }) => solution_form_component_jsx("form", {
      onSubmit: handleSubmit
    }, solution_form_component_jsx(external_react_final_form_["Field"], {
      name: "repo",
      label: "Link do repo",
      component: input_component["a" /* default */],
      placeholder: "https://github.com/czechue/zadanie1"
    }), solution_form_component_jsx(external_react_final_form_["Field"], {
      name: "demo",
      label: "Link do wersji live",
      component: input_component["a" /* default */],
      placeholder: "https://zadanie1.github.io"
    }), solution_form_component_jsx(external_react_final_form_["Field"], {
      name: "comment",
      label: "Tw\xF3j komentarz",
      component: input_component["a" /* default */],
      placeholder: "Moje wra\u017Cenia",
      fieldType: "textarea"
    }), solution_form_component_jsx("div", {
      className: "w-full flex justify-end mt-5"
    }, solution_form_component_jsx("button", {
      type: "submit",
      disabled: loading,
      className: "px-8 py-2 bg-gradient-button text-white rounded hover:opacity-75"
    }, loading ? 'WAIT' : 'WYŚLIJ')))
  }));
}
// EXTERNAL MODULE: ./components/shared/solutions/solutions.component.tsx + 4 modules
var solutions_component = __webpack_require__("mUGe");

// EXTERNAL MODULE: ./components/shared/markdown-view/markdown-view.component.tsx + 1 modules
var markdown_view_component = __webpack_require__("iOK0");

// CONCATENATED MODULE: ./components/task-detail/content/content.component.tsx
var content_component_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const SectionToggleIcon = ({
  isOpen
}) => content_component_jsx("img", {
  className: "mx-2 h-4 w-4",
  src: isOpen ? '/static/images/chevron-thin-right.svg' : '/static/images/chevron-thin-down.svg',
  alt: "section toggler"
});

function ContentComponent({
  content,
  solutions = [],
  tips = [],
  onSubmit,
  loading
}) {
  const {
    0: openSections,
    1: setOpenedSections
  } = Object(external_react_["useState"])({
    solution: false,
    tips: false,
    solutions: false
  });

  function toggleSection(section) {
    setOpenedSections(prevState => _objectSpread({}, prevState, {
      [section]: !prevState[section]
    }));
  }

  return content_component_jsx(external_react_default.a.Fragment, null, content_component_jsx("section", null, content_component_jsx(TaskHeading, null, "Zadanie"), content_component_jsx(markdown_view_component["a" /* MarkdownViewComponent */], {
    source: content
  })), content_component_jsx("section", {
    className: "mt-6"
  }, content_component_jsx("div", {
    className: "flex"
  }, content_component_jsx(TaskHeading, null, "Dodaj rozwi\u0105zanie"), content_component_jsx("button", {
    onClick: () => toggleSection(OpenableSections.SOLUTION)
  }, content_component_jsx(SectionToggleIcon, {
    isOpen: openSections.solution
  }))), openSections.solution && content_component_jsx("div", {
    className: "my-2"
  }, content_component_jsx(SolutionFormComponent, {
    loading: loading,
    onSubmit: onSubmit
  }))), content_component_jsx("section", null, content_component_jsx("div", {
    className: "flex"
  }, content_component_jsx(TaskHeading, null, "Wskaz\xF3wki"), content_component_jsx("button", {
    onClick: () => toggleSection(OpenableSections.TIPS)
  }, content_component_jsx(SectionToggleIcon, {
    isOpen: openSections.tips
  }))), openSections.tips && content_component_jsx("p", {
    className: "my-2"
  }, tips.join(','))), content_component_jsx("section", null, content_component_jsx("div", {
    className: "flex"
  }, content_component_jsx(TaskHeading, null, "Rozwi\u0105zania"), content_component_jsx("button", {
    onClick: () => toggleSection(OpenableSections.SOLITIONS)
  }, content_component_jsx(SectionToggleIcon, {
    isOpen: openSections.solutions
  }))), openSections.solutions && content_component_jsx("div", {
    className: "my-2"
  }, content_component_jsx(solutions_component["b" /* default */], {
    type: solutions_component["a" /* SolutionType */].WithoutTaskData,
    solutions: solutions
  }))));
}
var OpenableSections;

(function (OpenableSections) {
  OpenableSections["SOLUTION"] = "solution";
  OpenableSections["TIPS"] = "tips";
  OpenableSections["SOLITIONS"] = "solutions";
})(OpenableSections || (OpenableSections = {}));
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./components/task-detail/utils/add-solution.util.ts


function addSolution({
  repo,
  demo,
  comment,
  taskId
}) {
  return external_axios_default.a.post(`${hostname_config["a" /* HOSTNAME */]}/api/solutions`, {
    repo,
    demo,
    comment,
    taskId,
    phase: 'review'
  });
}
// CONCATENATED MODULE: ./components/task-detail/task-detail.component.tsx
var task_detail_component_jsx = external_react_default.a.createElement;







function TaskDetailComponent({
  images,
  title,
  content,
  createdAt,
  difficulty,
  tags,
  tips,
  repo,
  updateSolutions,
  _solutions,
  _user,
  _id
}) {
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);

  function handleOnSubmitSolution({
    repo,
    demo,
    comment
  }) {
    setLoading(true);
    addSolution({
      repo,
      demo,
      comment,
      taskId: _id
    }).then(({
      data
    }) => {
      updateSolutions(data);
    }).finally(() => setLoading(false));
  }

  return task_detail_component_jsx(external_react_default.a.Fragment, null, task_detail_component_jsx("div", {
    className: "py-8 px-4"
  }, task_detail_component_jsx("div", {
    className: "mb-5"
  }, task_detail_component_jsx(heading_component["a" /* default */], {
    orientation: "left",
    size: "normal"
  }, title)), task_detail_component_jsx("article", {
    className: "task-detail__wrapper"
  }, task_detail_component_jsx("section", {
    className: "task-detail__carousel sm:p-2"
  }, task_detail_component_jsx(TaskHeading, null, "Screeny"), task_detail_component_jsx(carousel_component_CarouselComponent, {
    images: images
  })), task_detail_component_jsx("section", {
    className: "task-detail__aside sm:pl-12"
  }, task_detail_component_jsx(AsideComponent, {
    createdAt: createdAt,
    author: _user.login,
    tags: tags,
    difficulty: difficulty,
    repo: repo
  })), task_detail_component_jsx("section", {
    className: "task-detail__content sm:p-2"
  }, task_detail_component_jsx(ContentComponent, {
    content: content,
    solutions: _solutions,
    tips: tips,
    onSubmit: handleOnSubmitSolution,
    loading: loading
  })))));
}
// EXTERNAL MODULE: ./public/static/style.css
var style = __webpack_require__("Aio7");

// CONCATENATED MODULE: ./pages/views/tasks/[id].tsx
var _id_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _id_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _id_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _id_ownKeys(Object(source), true).forEach(function (key) { _id_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _id_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _id_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const TaskPage = ({
  task
}) => {
  const {
    user
  } = Object(external_react_["useContext"])(user_provider["a" /* UserContext */]);
  const {
    0: currentTask,
    1: setCurrentTask
  } = Object(external_react_["useState"])(task);

  function updateSolutions(solutions) {
    setCurrentTask(_id_objectSpread({}, currentTask, {
      _solutions: solutions
    }));
  }

  return _id_jsx(layout_component["a" /* default */], {
    user: user
  }, _id_jsx(TaskDetailComponent, _extends({
    updateSolutions: updateSolutions
  }, currentTask)));
};

TaskPage.getInitialProps = async ({
  query: {
    id
  }
}) => {
  const res = await external_isomorphic_unfetch_default()(`${hostname_config["a" /* HOSTNAME */]}/api/tasks/${id}`);
  const task = await res.json();
  return {
    task
  };
};

/* harmony default export */ var _id_ = __webpack_exports__["default"] = (TaskPage);

/***/ }),

/***/ "RyM3":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ "WxVa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ LayoutComponent; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// CONCATENATED MODULE: ./components/navbar/mobile-button/mobile-button.component.tsx
var __jsx = external_react_default.a.createElement;

function MobileButtonComponent({
  isOpen,
  onToggle
}) {
  return __jsx("button", {
    className: "block text-gray-300 hover:text-white focus:text-white focus:outline-none",
    onClick: onToggle
  }, __jsx("svg", {
    className: "fill-current w-6 h-6",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, isOpen ? __jsx("path", {
    d: "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
  }) : __jsx("path", {
    d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
  })));
}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/navbar/navigation-link/navigation-link.component.tsx
var navigation_link_component_jsx = external_react_default.a.createElement;


function NavigationLinkComponent({
  children,
  url,
  routerLink = false,
  classNames = ''
}) {
  const className = `block mb-1 px-2 py-1 text-gray-200 font-semibold hover:bg-violet_primary sm:uppercase sm:font-normal sm:text-xs sm:mb-0 ${classNames}`;

  const href = navigation_link_component_jsx("a", {
    href: url,
    className: className
  }, children);

  const link = navigation_link_component_jsx(link_default.a, {
    href: url
  }, navigation_link_component_jsx("a", {
    className: className
  }, children));

  return routerLink ? link : href;
}
// EXTERNAL MODULE: ./public/static/style.css
var style = __webpack_require__("Aio7");

// CONCATENATED MODULE: ./components/navbar/account-dropdown/account-dropdown.component.tsx
var account_dropdown_component_jsx = external_react_default.a.createElement;


function AccountDropdownComponent({
  user,
  classNames
}) {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(external_react_["useState"])(false);
  const handleEscape = Object(external_react_["useCallback"])(event => {
    if (event.key === 'Escape' || event.key === 'Esc') {
      setIsOpen(false);
    }
  }, []);
  Object(external_react_["useEffect"])(() => {
    document.addEventListener('keydown', handleEscape, false);
    return () => {
      document.removeEventListener('keydown', handleEscape, false);
    };
  }, []);
  return account_dropdown_component_jsx("div", {
    className: `relative ml-1 ${classNames}`
  }, account_dropdown_component_jsx("button", {
    onClick: () => setIsOpen(!isOpen),
    className: "relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-violet_primary focus:outline-none focus:border-white"
  }, account_dropdown_component_jsx("img", {
    className: "h-full w-full object-cover",
    src: user.photo,
    alt: "user photo"
  })), account_dropdown_component_jsx("button", {
    onClick: () => setIsOpen(false),
    tabIndex: -1,
    className: `fixed inset-0 w-full h-full bg-black opacity-50 cursor-default z-10 ${isOpen ? 'block' : 'hidden'}`
  }), isOpen && account_dropdown_component_jsx("div", {
    className: "absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-20"
  }, account_dropdown_component_jsx(link_default.a, {
    href: `/users/${user._id}`
  }, account_dropdown_component_jsx("a", {
    className: "block px-4 py-2 text-gray-800 hover:bg-violet_primary hover:text-white"
  }, "Twoje konto")), account_dropdown_component_jsx(link_default.a, {
    href: "/tasks/new"
  }, account_dropdown_component_jsx("a", {
    className: "block px-4 py-2 text-gray-800 hover:bg-violet_primary hover:text-white"
  }, "Dodaj zadanie")), account_dropdown_component_jsx("a", {
    href: "/auth/logout",
    className: "block px-4 py-2 text-gray-800 hover:bg-violet_primary hover:text-white"
  }, "Wyloguj si\u0119")));
}
// EXTERNAL MODULE: ./components/shared/heading/heading.component.tsx
var heading_component = __webpack_require__("/EVp");

// CONCATENATED MODULE: ./components/navbar/hero/hero.component.tsx
var hero_component_jsx = external_react_default.a.createElement;


const bgImage = {
  backgroundImage: `url(/static/images/Objects.svg)`,
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat'
};
function HeroComponent() {
  return hero_component_jsx("div", {
    className: "hidden sm:flex justify-center flex-col h-100 bg-local",
    style: bgImage
  }, hero_component_jsx(heading_component["a" /* default */], {
    color: "white",
    size: "normal",
    classNames: "opacity-50"
  }, "Najlepsze zadania z web dev"), hero_component_jsx(heading_component["a" /* default */], {
    color: "white",
    font: "bold",
    size: "xlg"
  }, "od Juniora do Mentora"));
}
// CONCATENATED MODULE: ./components/navbar/navbar.component.tsx
var navbar_component_jsx = external_react_default.a.createElement;








function NavbarComponent({
  user,
  withHero = false
}) {
  const {
    0: isMobileMenuOpen,
    1: setIsMobileMenuOpen
  } = Object(external_react_["useState"])(false);
  const mobileLinksContainerClassName = external_clsx_default()({
    block: isMobileMenuOpen,
    hidden: !isMobileMenuOpen
  }, 'sm:flex');

  const navLinks = navbar_component_jsx(external_react_default.a.Fragment, null, navbar_component_jsx(NavigationLinkComponent, {
    classNames: "sm:mr-4",
    url: "/tasks",
    routerLink: true
  }, "Zadania"), navbar_component_jsx(NavigationLinkComponent, {
    classNames: "sm:mr-4",
    url: "/ranking",
    routerLink: true
  }, "Ranking"), navbar_component_jsx(NavigationLinkComponent, {
    classNames: "sm:mr-4",
    url: "/faq",
    routerLink: true
  }, "Pomoc"), navbar_component_jsx("span", {
    className: "hidden sm:block sm:mr-4 text-white"
  }, "|"));

  return navbar_component_jsx("div", {
    className: "bg-gradient-navbar"
  }, navbar_component_jsx("header", {
    className: "sm:flex sm:justify-between sm:items-center sm:max-w-6xl sm:ml-auto sm:mr-auto"
  }, navbar_component_jsx("div", {
    className: "flex items-center justify-between p-4 h-20"
  }, navbar_component_jsx("span", null), navbar_component_jsx(link_default.a, {
    href: "/"
  }, navbar_component_jsx("a", null, navbar_component_jsx("span", {
    className: "text-white text-2xl"
  }, "Kodifaj"))), navbar_component_jsx("div", {
    className: "sm:hidden"
  }, navbar_component_jsx(MobileButtonComponent, {
    isOpen: isMobileMenuOpen,
    onToggle: () => setIsMobileMenuOpen(!isMobileMenuOpen)
  }))), !user && navbar_component_jsx("nav", {
    className: mobileLinksContainerClassName
  }, navbar_component_jsx("div", {
    className: "px-2 pb-2 sm:flex sm:items-center sm:bg-transparent sm:pb-0"
  }, navLinks, navbar_component_jsx(NavigationLinkComponent, {
    url: "/auth/github"
  }, navbar_component_jsx("button", {
    className: "flex items-center"
  }, navbar_component_jsx("span", {
    className: "pr-2 font-semibold sm:uppercase sm:font-normal sm:text-xs"
  }, "Rejestracja"), navbar_component_jsx("img", {
    src: "/static/images/github-icon.svg",
    alt: "github icon",
    className: "w-5 opacity-50"
  }))))), user && navbar_component_jsx("nav", {
    className: mobileLinksContainerClassName
  }, navbar_component_jsx("div", {
    className: "px-2 pb-2 sm:flex sm:items-center sm:bg-transparent sm:pb-0"
  }, navLinks, navbar_component_jsx(AccountDropdownComponent, {
    classNames: "hidden sm:block sm:ml-6",
    user: user
  })), navbar_component_jsx("div", {
    className: "px-4 py-5 border-t border-pink__accent sm:hidden"
  }, navbar_component_jsx("div", {
    className: "flex justify-center items-center"
  }, navbar_component_jsx("img", {
    className: "h-8 w-8 border-2 rounded-full object-cover",
    src: user.photo,
    alt: "user photo"
  }), navbar_component_jsx("span", {
    className: "ml-3 font-semibold text-white"
  }, user.login)), navbar_component_jsx("div", {
    className: "mt-4"
  }, navbar_component_jsx(link_default.a, {
    href: `/users/${user._id}`
  }, navbar_component_jsx("a", {
    className: "block text-white hover:text-violet_primary"
  }, "Twoje konto")), navbar_component_jsx(link_default.a, {
    href: "/tasks/new"
  }, navbar_component_jsx("a", {
    href: "#",
    className: "mt-2 block text-white hover:text-violet_primary"
  }, "Dodaj zadanie")), navbar_component_jsx("a", {
    href: "/auth/logout",
    className: "mt-2 block text-white hover:text-violet_primary"
  }, "Wyloguj si\u0119"))))), withHero && navbar_component_jsx(HeroComponent, null));
}
// CONCATENATED MODULE: ./components/shared/layout/layout.component.tsx
var layout_component_jsx = external_react_default.a.createElement;


function LayoutComponent({
  user,
  withHero,
  children
}) {
  return layout_component_jsx("div", {
    className: "antialiased text-gray-900"
  }, layout_component_jsx(NavbarComponent, {
    user: user,
    withHero: withHero
  }), layout_component_jsx("main", {
    className: "container mx-auto"
  }, children));
}

/***/ }),

/***/ "X5vA":
/***/ (function(module, exports) {

module.exports = require("nuka-carousel");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "amB/":
/***/ (function(module, exports) {

module.exports = require("react-final-form");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("g/15");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
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
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
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

  return observer = new IntersectionObserver(entries => {
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
  }, {
    rootMargin: '200px'
  });
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
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

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

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
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
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
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
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
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
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
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
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
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
      __N_SSP: mod.__N_SSP
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


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

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

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

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
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
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
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
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
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
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
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
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

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
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
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
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
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "iOK0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ MarkdownViewComponent; });

// EXTERNAL MODULE: external "react-markdown"
var external_react_markdown_ = __webpack_require__("id0+");
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-syntax-highlighter"
var external_react_syntax_highlighter_ = __webpack_require__("RyM3");
var external_react_syntax_highlighter_default = /*#__PURE__*/__webpack_require__.n(external_react_syntax_highlighter_);

// CONCATENATED MODULE: ./components/shared/code-block/code-block.component.tsx
var __jsx = external_react_default.a.createElement;

 // import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class code_block_component_CodeBlockComponent extends external_react_default.a.PureComponent {
  render() {
    const {
      language = 'javascript',
      value = ''
    } = this.props;
    return __jsx(external_react_syntax_highlighter_default.a, {
      language: language
    }, value);
  }

}
// CONCATENATED MODULE: ./components/shared/markdown-view/markdown-view.component.tsx
var markdown_view_component_jsx = external_react_default.a.createElement;



function MarkdownViewComponent({
  source
}) {
  return markdown_view_component_jsx("div", {
    className: "markdown-view"
  }, markdown_view_component_jsx(external_react_markdown_default.a, {
    renderers: {
      code: code_block_component_CodeBlockComponent
    },
    source: source
  }));
}

/***/ }),

/***/ "id0+":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "mUGe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ SolutionsComponent; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ SolutionType; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/shared/solutions/solution-badge/solution-badge.component.tsx
var __jsx = external_react_default.a.createElement;

function SolutionBadgeComponent({
  children
}) {
  return __jsx("span", {
    className: " flex-initial block mr-1 bg-pink-200 text-pink-700 text-xs px-1 rounded"
  }, "#", children);
}
// CONCATENATED MODULE: ./components/shared/solutions/solution-link/solution-link.component.tsx

var solution_link_component_jsx = external_react_default.a.createElement;
function SolutionLinkComponent({
  children,
  url
}) {
  return solution_link_component_jsx("a", {
    className: "block text-violet_primary hover:text-gray-800 underline font-semibold",
    href: url
  }, children);
}
// CONCATENATED MODULE: ./components/shared/solutions/solution-item/without-task-data.component.tsx
var without_task_data_component_jsx = external_react_default.a.createElement;



function WithoutTaskDataComponent({
  solution
}) {
  const date = new Date(solution.createdAt);
  return without_task_data_component_jsx("section", {
    className: "w-full px-3 py-4 rounded text-sm shadow hover:shadow-md"
  }, without_task_data_component_jsx("div", {
    className: "flex items-center"
  }, without_task_data_component_jsx("img", {
    className: "h-8 w-8 rounded overflow-hidden shadow-md",
    src: solution._user.photo,
    alt: "solution image"
  }), without_task_data_component_jsx("span", {
    className: "pl-2"
  }, solution._user.login)), without_task_data_component_jsx("span", {
    className: "text-gray-600 text-xs"
  }, date.toDateString()), without_task_data_component_jsx("div", {
    className: "mt-2 flex items-center"
  }, without_task_data_component_jsx(SolutionBadgeComponent, null, solution.phase), without_task_data_component_jsx("div", {
    className: "ml-3"
  }, without_task_data_component_jsx(SolutionLinkComponent, {
    url: solution.repo
  }, "GitHub")), without_task_data_component_jsx("div", {
    className: "ml-3"
  }, without_task_data_component_jsx(SolutionLinkComponent, {
    url: solution.demo
  }, "Live"))));
}
// CONCATENATED MODULE: ./components/shared/solutions/solution-item/without-user-data.component.tsx
var without_user_data_component_jsx = external_react_default.a.createElement;


 // import SolutionLinkComponent from '../solution-link/solution-link.component';

function WithoutUserDataComponent({
  solution
}) {
  const date = new Date(solution.createdAt);
  return without_user_data_component_jsx("section", {
    className: "w-full px-3 py-4 rounded text-sm shadow hover:shadow-md"
  }, without_user_data_component_jsx("div", {
    className: "flex items-center"
  }, without_user_data_component_jsx("img", {
    className: "h-8 w-8 rounded overflow-hidden shadow-md",
    src: solution._task.images[0],
    alt: "solution image"
  }), without_user_data_component_jsx("span", {
    className: "pl-2"
  }, solution._task.title)), without_user_data_component_jsx("span", {
    className: "text-gray-600 text-xs"
  }, date.toDateString()), without_user_data_component_jsx("div", {
    className: "mt-2 flex items-center"
  }, without_user_data_component_jsx(SolutionBadgeComponent, null, solution.phase), without_user_data_component_jsx("div", {
    className: "ml-3"
  }, without_user_data_component_jsx(SolutionLinkComponent, {
    url: solution.repo
  }, "GitHub")), without_user_data_component_jsx("div", {
    className: "ml-3"
  }, without_user_data_component_jsx(SolutionLinkComponent, {
    url: solution.demo
  }, "Live"))));
}
// CONCATENATED MODULE: ./components/shared/solutions/solutions.component.tsx
var solutions_component_jsx = external_react_default.a.createElement;



function SolutionsComponent({
  solutions,
  type
}) {
  if (!solutions.length) {
    return null;
  }

  if (type === SolutionType.WithoutTaskData) {
    return solutions_component_jsx("div", {
      className: "w-full flex justify-between flex-wrap flex-list__container"
    }, solutions.map(solution => solutions_component_jsx("div", {
      key: solution._id,
      className: "w-full px-2 mb-2 md:w-1/2"
    }, solutions_component_jsx(WithoutTaskDataComponent, {
      solution: solution
    }))));
  }

  return solutions_component_jsx("div", {
    className: "w-full flex justify-between flex-wrap flex-list__container"
  }, solutions.map(solution => solutions_component_jsx("div", {
    key: solution._id,
    className: "w-full px-2 mb-2 md:w-1/2"
  }, solutions_component_jsx(WithoutUserDataComponent, {
    solution: solution
  }))));
}
let SolutionType;

(function (SolutionType) {
  SolutionType[SolutionType["WithoutUserData"] = 0] = "WithoutUserData";
  SolutionType[SolutionType["WithoutTaskData"] = 1] = "WithoutTaskData";
})(SolutionType || (SolutionType = {}));

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

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
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
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
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
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
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "w68O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_hostname_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JaQg");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const UserContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  user: {
    _id: '',
    githubId: '',
    login: '',
    photo: ''
  },
  login: () => {},
  logout: () => {}
});
function UserProvider({
  children,
  user
}) {
  const {
    0: userState,
    1: setUserState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(user);

  function login() {
    setUserState(user);
  } // todo: use this logout function instead of href


  function logout() {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_lib_hostname_config__WEBPACK_IMPORTED_MODULE_2__[/* HOSTNAME */ "a"]}/api/logout`);
  }

  const context = {
    user: userState,
    login,
    logout
  };
  return __jsx(UserContext.Provider, {
    value: context
  }, children);
}

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });