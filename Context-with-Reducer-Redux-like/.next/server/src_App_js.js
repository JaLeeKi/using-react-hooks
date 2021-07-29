exports.id = "src_App_js";
exports.ids = ["src_App_js"];
exports.modules = {

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigContext": function() { return /* binding */ ConfigContext; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ "./src/Home.js");
/* harmony import */ var _Speakers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Speakers */ "./src/Speakers.js");
/* harmony import */ var _GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GlobalState */ "./src/GlobalState.js");
/* harmony import */ var _FavoriteClickCountContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FavoriteClickCountContext */ "./src/FavoriteClickCountContext.js");

var _jsxFileName = "C:\\Users\\jadek\\DevMtn\\Week3\\Demos\\using-react-hooks\\Context-with-Reducer-Redux-like\\clip3-Convert-Hook-To-Global-Context\\src\\App.js";





const ConfigContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext();

const pageToShow = pageName => {
  if (pageName === 'Home') return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Home__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 35
  }, undefined);
  if (pageName === 'Speakers') return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speakers__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 39
  }, undefined);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Not Found"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 10
  }, undefined);
};

const configValue = {
  showSignMeUp: true,
  showSpeakerSpeakingDays: true
};

const App = ({
  pageName
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConfigContext.Provider, {
    value: configValue,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GlobalState__WEBPACK_IMPORTED_MODULE_4__.GlobalProvider, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FavoriteClickCountContext__WEBPACK_IMPORTED_MODULE_5__.FavoriteClickCountProvider, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: pageToShow(pageName)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/FavoriteClickCountContext.js":
/*!******************************************!*\
  !*** ./src/FavoriteClickCountContext.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoriteClickCountContext": function() { return /* binding */ FavoriteClickCountContext; },
/* harmony export */   "FavoriteClickCountProvider": function() { return /* binding */ FavoriteClickCountProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GlobalState */ "./src/GlobalState.js");

var _jsxFileName = "C:\\Users\\jadek\\DevMtn\\Week3\\Demos\\using-react-hooks\\Context-with-Reducer-Redux-like\\clip3-Convert-Hook-To-Global-Context\\src\\FavoriteClickCountContext.js";


const FavoriteClickCountContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const FavoriteClickCountProvider = ({
  children
}) => {
  const {
    incrementFavoriteClickCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_GlobalState__WEBPACK_IMPORTED_MODULE_2__.GlobalContext); // const provider = { incrementFavoriteClickCount };

  const provider = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return {
      incrementFavoriteClickCount
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FavoriteClickCountContext.Provider, {
    value: provider,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./src/GlobalState.js":
/*!****************************!*\
  !*** ./src/GlobalState.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalContext": function() { return /* binding */ GlobalContext; },
/* harmony export */   "GlobalProvider": function() { return /* binding */ GlobalProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useSpeakerDataManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useSpeakerDataManager */ "./src/useSpeakerDataManager.js");

var _jsxFileName = "C:\\Users\\jadek\\DevMtn\\Week3\\Demos\\using-react-hooks\\Context-with-Reducer-Redux-like\\clip3-Convert-Hook-To-Global-Context\\src\\GlobalState.js";


const GlobalContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext();
const GlobalProvider = ({
  children
}) => {
  const {
    isLoading,
    speakerList,
    favoriteClickCount,
    toggleSpeakerFavorite,
    incrementFavoriteClickCount,
    hasErrored,
    error,
    imageRerenderIdentifier,
    forceImageRerender
  } = (0,_useSpeakerDataManager__WEBPACK_IMPORTED_MODULE_2__.default)();
  const provider = {
    isLoading,
    speakerList,
    favoriteClickCount,
    toggleSpeakerFavorite,
    incrementFavoriteClickCount,
    hasErrored,
    error,
    imageRerenderIdentifier,
    forceImageRerender
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {
    value: provider,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/Header.js":
/*!***********************!*\
  !*** ./src/Header.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SignMeUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignMeUp */ "./src/SignMeUp.js");
/* harmony import */ var _GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GlobalState */ "./src/GlobalState.js");

var _jsxFileName = "C:\\Users\\jadek\\DevMtn\\Week3\\Demos\\using-react-hooks\\Context-with-Reducer-Redux-like\\clip3-Convert-Hook-To-Global-Context\\src\\Header.js";



const Header = () => {
  const signupCallback = email => {
    return console.log(`sign up called with email ${email}`);
  };

  const {
    favoriteClickCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_GlobalState__WEBPACK_IMPORTED_MODULE_3__.GlobalContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "jumbotron jumbotronheight",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-12 col-sm-4 text-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          className: "text-uppercase",
          children: "October 19-20\xA0\xA02019"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          className: "text-uppercase",
          children: "San Jose, California"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: ["Click Count ", favoriteClickCount]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-12 col-sm-8 text-lg-right",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/static/SVCClogo.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: "Silicon Valley Code Camp 2019"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row col-12 text-lg-right",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignMeUp__WEBPACK_IMPORTED_MODULE_2__.default, {
            signupCallback: signupCallback
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/Header */ "./src/Header.js");
/* harmony import */ var _src_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Menu */ "./src/Menu.js");

var _jsxFileName = "C:\\Users\\jadek\\DevMtn\\Week3\\Demos\\using-react-hooks\\Context-with-Reducer-Redux-like\\clip3-Convert-Hook-To-Global-Context\\src\\Home.js";




function index() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_Menu__WEBPACK_IMPORTED_MODULE_3__.Menu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col margintopbottom",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
            className: "margintopbottom20",
            children: "Code Camp is a community event where developers learn from fellow developers. We also have developer related topics that include software branding, legal issues around software as well as other topics developers are interested in hearing about."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GlobalState */ "./src/GlobalState.js");

var _jsxFileName = "C:\\Users\\jadek\\DevMtn\\Week3\\Demos\\using-react-hooks\\Context-with-Reducer-Redux-like\\clip3-Convert-Hook-To-Global-Context\\src\\ImageToggleOnScroll.js";



const ImageToggleOnScroll = ({
  primaryImg,
  secondaryImg
}) => {
  const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    imageRerenderIdentifier
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_GlobalState__WEBPACK_IMPORTED_MODULE_2__.GlobalContext);
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const {
    0: inView,
    1: setInView
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setIsLoading(false);
    setInView(isInView());
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [imageRerenderIdentifier]);

  const scrollHandler = () => {
    setInView(isInView());
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    src: isLoading ? 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==' // 1x1gif
    : inView ? secondaryImg : primaryImg,
    alt: "",
    ref: imageRef,
    width: "200",
    height: "200"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOnScroll);

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": function() { return /* binding */ Menu; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\jadek\\DevMtn\\Week3\\Demos\\using-react-hooks\\Context-with-Reducer-Redux-like\\clip3-Convert-Hook-To-Global-Context\\src\\Menu.js";


const Menu = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
    className: "navbar navbar-expand-sm bg-dark navbar-dark",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "navbar",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "navbar-nav",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "nav-link",
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/speakers",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "nav-link",
              children: "Speakers"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/SignMeUp.js":
/*!*************************!*\
  !*** ./src/SignMeUp.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");

var _jsxFileName = "C:\\Users\\jadek\\DevMtn\\Week3\\Demos\\using-react-hooks\\Context-with-Reducer-Redux-like\\clip3-Convert-Hook-To-Global-Context\\src\\SignMeUp.js";



const SignMeUp = ({
  signupCallback
}) => {
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_App__WEBPACK_IMPORTED_MODULE_2__.ConfigContext);
  return context.showSignMeUp === false ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "content",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          placeholder: "Enter Email",
          type: "email",
          name: "email",
          value: email,
          onChange: e => {
            setEmail(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined), "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          disabled: !email.includes('@'),
          onClick: () => {
            signupCallback(email);
            setEmail('');
            alert('signup confirmed');
          },
          className: "btn",
          type: "submit",
          children: "Get Updates"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SignMeUp);

/***/ }),

/***/ "./src/SpeakerDetail.js":
/*!******************************!*\
  !*** ./src/SpeakerDetail.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageToggleOnScroll */ "./src/ImageToggleOnScroll.js");
/* harmony import */ var _useSpeakerDataManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useSpeakerDataManager */ "./src/useSpeakerDataManager.js");
/* harmony import */ var _FavoriteClickCountContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FavoriteClickCountContext */ "./src/FavoriteClickCountContext.js");

var _jsxFileName = "C:\\Users\\jadek\\DevMtn\\Week3\\Demos\\using-react-hooks\\Context-with-Reducer-Redux-like\\clip3-Convert-Hook-To-Global-Context\\src\\SpeakerDetail.js";




const SpeakerDetail = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(({
  speakerRec,
  onHeartFavoriteHandler
}) => {
  const {
    id,
    firstName,
    lastName,
    bio,
    favorite
  } = speakerRec;
  console.log(`SpeakerDetail:${id} ${firstName} ${lastName} ${favorite}`);
  const {
    incrementFavoriteClickCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_FavoriteClickCountContext__WEBPACK_IMPORTED_MODULE_4__.FavoriteClickCountContext);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "card col-4 cardmin",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__.default, {
      className: "card-img-top",
      primaryImg: `/static/speakers/bw/Speaker-${id}.jpg`,
      secondaryImg: `/static/speakers/Speaker-${id}.jpg`,
      alt: "{firstName} {lastName}"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card-body",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        className: "card-title",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: favorite ? 'heartredbutton' : 'heartdarkbutton',
          onClick: e => {
            onHeartFavoriteHandler(e, speakerRec);
            incrementFavoriteClickCount();
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [firstName, " ", lastName]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
});
/* harmony default export */ __webpack_exports__["default"] = (SpeakerDetail);

/***/ }),

/***/ "./src/Speakers.js":
/*!*************************!*\
  !*** ./src/Speakers.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./src/Header.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ "./src/Menu.js");
/* harmony import */ var _SpeakerDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpeakerDetail */ "./src/SpeakerDetail.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _GlobalState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GlobalState */ "./src/GlobalState.js");

var _jsxFileName = "C:\\Users\\jadek\\DevMtn\\Week3\\Demos\\using-react-hooks\\Context-with-Reducer-Redux-like\\clip3-Convert-Hook-To-Global-Context\\src\\Speakers.js";







const Speakers = ({}) => {
  const {
    0: speakingSaturday,
    1: setSpeakingSaturday
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: speakingSunday,
    1: setSpeakingSunday
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_App__WEBPACK_IMPORTED_MODULE_5__.ConfigContext);
  const {
    isLoading,
    speakerList,
    toggleSpeakerFavorite,
    hasErrored,
    error,
    forceImageRerender
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_GlobalState__WEBPACK_IMPORTED_MODULE_6__.GlobalContext);

  const handleChangeSaturday = () => {
    forceImageRerender();
    setSpeakingSaturday(!speakingSaturday);
  };

  const handleChangeSunday = () => {
    forceImageRerender();
    setSpeakingSunday(!speakingSunday);
  };

  const heartFavoriteHandler = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e, speakerRec) => {
    e.preventDefault();
    toggleSpeakerFavorite(speakerRec);
  }, []);
  const newSpeakerList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => speakerList.filter(({
    sat,
    sun
  }) => speakingSaturday && sat || speakingSunday && sun).sort(function (a, b) {
    if (a.firstName < b.firstName) {
      return -1;
    }

    if (a.firstName > b.firstName) {
      return 1;
    }

    return 0;
  }), [speakingSaturday, speakingSunday, speakerList]);
  const speakerListFiltered = isLoading ? [] : newSpeakerList;
  if (hasErrored === true) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: ["Error: ", error.message]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 34
  }, undefined);
  if (isLoading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 25
  }, undefined);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_3__.Menu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "btn-toolbar  margintopbottom5 checkbox-bigger",
        children: context.showSpeakerSpeakingDays === false ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "hide",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-check-inline",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "form-check-label",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "checkbox",
                className: "form-check-input",
                onChange: handleChangeSaturday,
                checked: speakingSaturday
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 19
              }, undefined), "Saturday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-check-inline",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              className: "form-check-label",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "checkbox",
                className: "form-check-input",
                onChange: handleChangeSunday,
                checked: speakingSunday
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 19
              }, undefined), "Sunday Speakers"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card-deck",
          children: speakerListFiltered.map(speakerRec => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerDetail__WEBPACK_IMPORTED_MODULE_4__.default, {
              speakerRec: speakerRec,
              onHeartFavoriteHandler: heartFavoriteHandler
            }, speakerRec.id, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 17
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Speakers);

/***/ }),

/***/ "./src/speakersReducer.js":
/*!********************************!*\
  !*** ./src/speakersReducer.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const speakersReducer = (state, action) => {
  function updateFavorite(favoriteValue) {
    return state.speakerList.map((item, index) => {
      if (item.id === action.id) {
        return _objectSpread(_objectSpread({}, item), {}, {
          favorite: favoriteValue
        });
      }

      return item;
    });
  }

  switch (action.type) {
    case 'setSpeakerList':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          speakerList: action.data,
          isLoading: false,
          hasErrored: false
        });
      }

    case 'forceImageRerender':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          imageRerenderIdentifier: new Date().getTime()
        });
      }

    case 'favorite':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          speakerList: updateFavorite(true)
        });
      }

    case 'unfavorite':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          speakerList: updateFavorite(false)
        });
      }

    case 'incrementFavoriteClickCount':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          favoriteClickCount: state.favoriteClickCount + 1
        });
      }

    case 'errored':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          hasErrored: true,
          error: action.error
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (speakersReducer);

/***/ }),

/***/ "./src/useSpeakerDataManager.js":
/*!**************************************!*\
  !*** ./src/useSpeakerDataManager.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _speakersReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speakersReducer */ "./src/speakersReducer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function useSpeakerDataManager() {
  const {
    0: {
      isLoading,
      speakerList,
      favoriteClickCount,
      hasErrored,
      error,
      imageRerenderIdentifier
    },
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(_speakersReducer__WEBPACK_IMPORTED_MODULE_0__.default, {
    isLoading: true,
    speakerList: [],
    favoriteClickCount: 0,
    hasErrored: false,
    error: null,
    imageRerenderIdentifier: 0
  });

  function incrementFavoriteClickCount() {
    dispatch({
      type: 'incrementFavoriteClickCount'
    });
  }

  function forecImageRerender() {
    dispatch({
      type: 'forceImageRerender'
    });
  }

  function toggleSpeakerFavorite(speakerRec) {
    const updateData = async function () {
      axios__WEBPACK_IMPORTED_MODULE_1___default().put(`/api/speakers/${speakerRec.id}`, _objectSpread(_objectSpread({}, speakerRec), {}, {
        favorite: !speakerRec.favorite
      }));
      speakerRec.favorite === true ? dispatch({
        type: 'unfavorite',
        id: speakerRec.id
      }) : dispatch({
        type: 'favorite',
        id: speakerRec.id
      });
    };

    updateData();
  }

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const fetchData = async function () {
      try {
        let result = await axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/speakers');
        dispatch({
          type: 'setSpeakerList',
          data: result.data
        });
      } catch (e) {
        dispatch({
          type: 'errored',
          error: e
        });
      }
    };

    fetchData();
    return () => {
      console.log('cleanup');
    };
  }, []);
  return {
    isLoading,
    speakerList,
    favoriteClickCount,
    incrementFavoriteClickCount,
    toggleSpeakerFavorite,
    hasErrored,
    error,
    forecImageRerender,
    imageRerenderIdentifier
  };
}

/* harmony default export */ __webpack_exports__["default"] = (useSpeakerDataManager);

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvQXBwLmpzIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC8uL3NyYy9GYXZvcml0ZUNsaWNrQ291bnRDb250ZXh0LmpzIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC8uL3NyYy9HbG9iYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvSGVhZGVyLmpzIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC8uL3NyYy9Ib21lLmpzIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC8uL3NyYy9JbWFnZVRvZ2dsZU9uU2Nyb2xsLmpzIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC8uL3NyYy9NZW51LmpzIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC8uL3NyYy9TaWduTWVVcC5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvU3BlYWtlckRldGFpbC5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvU3BlYWtlcnMuanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0Ly4vc3JjL3NwZWFrZXJzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9zcmMvdXNlU3BlYWtlckRhdGFNYW5hZ2VyLmpzIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC9pZ25vcmVkfEM6XFxVc2Vyc1xcamFkZWtcXERldk10blxcV2VlazNcXERlbW9zXFx1c2luZy1yZWFjdC1ob29rc1xcQ29udGV4dC13aXRoLVJlZHVjZXItUmVkdXgtbGlrZVxcY2xpcDMtQ29udmVydC1Ib29rLVRvLUdsb2JhbC1Db250ZXh0XFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQ29uZmlnQ29udGV4dCIsIlJlYWN0IiwicGFnZVRvU2hvdyIsInBhZ2VOYW1lIiwiY29uZmlnVmFsdWUiLCJzaG93U2lnbk1lVXAiLCJzaG93U3BlYWtlclNwZWFraW5nRGF5cyIsIkFwcCIsIkZhdm9yaXRlQ2xpY2tDb3VudENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiRmF2b3JpdGVDbGlja0NvdW50UHJvdmlkZXIiLCJjaGlsZHJlbiIsImluY3JlbWVudEZhdm9yaXRlQ2xpY2tDb3VudCIsInVzZUNvbnRleHQiLCJHbG9iYWxDb250ZXh0IiwicHJvdmlkZXIiLCJ1c2VNZW1vIiwiR2xvYmFsUHJvdmlkZXIiLCJpc0xvYWRpbmciLCJzcGVha2VyTGlzdCIsImZhdm9yaXRlQ2xpY2tDb3VudCIsInRvZ2dsZVNwZWFrZXJGYXZvcml0ZSIsImhhc0Vycm9yZWQiLCJlcnJvciIsImltYWdlUmVyZW5kZXJJZGVudGlmaWVyIiwiZm9yY2VJbWFnZVJlcmVuZGVyIiwidXNlU3BlYWtlckRhdGFNYW5hZ2VyIiwiSGVhZGVyIiwic2lnbnVwQ2FsbGJhY2siLCJlbWFpbCIsImNvbnNvbGUiLCJsb2ciLCJpbmRleCIsIkltYWdlVG9nZ2xlT25TY3JvbGwiLCJwcmltYXJ5SW1nIiwic2Vjb25kYXJ5SW1nIiwiaW1hZ2VSZWYiLCJ1c2VSZWYiLCJzZXRJc0xvYWRpbmciLCJ1c2VTdGF0ZSIsImlzSW5WaWV3IiwicmVjdCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJib3R0b20iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImluVmlldyIsInNldEluVmlldyIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk1lbnUiLCJTaWduTWVVcCIsInNldEVtYWlsIiwiY29udGV4dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImluY2x1ZGVzIiwiYWxlcnQiLCJTcGVha2VyRGV0YWlsIiwic3BlYWtlclJlYyIsIm9uSGVhcnRGYXZvcml0ZUhhbmRsZXIiLCJpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiYmlvIiwiZmF2b3JpdGUiLCJTcGVha2VycyIsInNwZWFraW5nU2F0dXJkYXkiLCJzZXRTcGVha2luZ1NhdHVyZGF5Iiwic3BlYWtpbmdTdW5kYXkiLCJzZXRTcGVha2luZ1N1bmRheSIsImhhbmRsZUNoYW5nZVNhdHVyZGF5IiwiaGFuZGxlQ2hhbmdlU3VuZGF5IiwiaGVhcnRGYXZvcml0ZUhhbmRsZXIiLCJ1c2VDYWxsYmFjayIsInByZXZlbnREZWZhdWx0IiwibmV3U3BlYWtlckxpc3QiLCJmaWx0ZXIiLCJzYXQiLCJzdW4iLCJzb3J0IiwiYSIsImIiLCJzcGVha2VyTGlzdEZpbHRlcmVkIiwibWVzc2FnZSIsIm1hcCIsInNwZWFrZXJzUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidXBkYXRlRmF2b3JpdGUiLCJmYXZvcml0ZVZhbHVlIiwiaXRlbSIsInR5cGUiLCJkYXRhIiwiRGF0ZSIsImdldFRpbWUiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJmb3JlY0ltYWdlUmVyZW5kZXIiLCJ1cGRhdGVEYXRhIiwiYXhpb3MiLCJmZXRjaERhdGEiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTUEsYUFBYSxnQkFBR0MsMERBQUEsRUFBdEI7O0FBRVAsTUFBTUMsVUFBVSxHQUFJQyxR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bmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSc7XG5pbXBvcnQgU3BlYWtlcnMgZnJvbSAnLi9TcGVha2Vycyc7XG5pbXBvcnQgeyBHbG9iYWxQcm92aWRlciB9IGZyb20gJy4vR2xvYmFsU3RhdGUnO1xuaW1wb3J0IHsgRmF2b3JpdGVDbGlja0NvdW50UHJvdmlkZXIgfSBmcm9tICcuL0Zhdm9yaXRlQ2xpY2tDb3VudENvbnRleHQnO1xuXG5leHBvcnQgY29uc3QgQ29uZmlnQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuY29uc3QgcGFnZVRvU2hvdyA9IChwYWdlTmFtZSkgPT4ge1xuICBpZiAocGFnZU5hbWUgPT09ICdIb21lJykgcmV0dXJuIDxIb21lIC8+O1xuICBpZiAocGFnZU5hbWUgPT09ICdTcGVha2VycycpIHJldHVybiA8U3BlYWtlcnMgLz47XG4gIHJldHVybiA8ZGl2Pk5vdCBGb3VuZDwvZGl2Pjtcbn07XG5cbmNvbnN0IGNvbmZpZ1ZhbHVlID0ge1xuICBzaG93U2lnbk1lVXA6IHRydWUsXG4gIHNob3dTcGVha2VyU3BlYWtpbmdEYXlzOiB0cnVlLFxufTtcblxuY29uc3QgQXBwID0gKHsgcGFnZU5hbWUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDb25maWdDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb25maWdWYWx1ZX0+XG4gICAgICA8R2xvYmFsUHJvdmlkZXI+XG4gICAgICAgIDxGYXZvcml0ZUNsaWNrQ291bnRQcm92aWRlcj5cbiAgICAgICAgICA8ZGl2PntwYWdlVG9TaG93KHBhZ2VOYW1lKX08L2Rpdj5cbiAgICAgICAgPC9GYXZvcml0ZUNsaWNrQ291bnRQcm92aWRlcj5cbiAgICAgIDwvR2xvYmFsUHJvdmlkZXI+XG4gICAgPC9Db25maWdDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gXCIuL0dsb2JhbFN0YXRlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRmF2b3JpdGVDbGlja0NvdW50Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBGYXZvcml0ZUNsaWNrQ291bnRQcm92aWRlciA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgICBjb25zdCB7IGluY3JlbWVudEZhdm9yaXRlQ2xpY2tDb3VudCB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuICAgIC8vIGNvbnN0IHByb3ZpZGVyID0geyBpbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnQgfTtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgaW5jcmVtZW50RmF2b3JpdGVDbGlja0NvdW50IH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxGYXZvcml0ZUNsaWNrQ291bnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwcm92aWRlcn0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0Zhdm9yaXRlQ2xpY2tDb3VudENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU3BlYWtlckRhdGFNYW5hZ2VyIGZyb20gJy4vdXNlU3BlYWtlckRhdGFNYW5hZ2VyJztcblxuZXhwb3J0IGNvbnN0IEdsb2JhbENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBHbG9iYWxQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlzTG9hZGluZyxcbiAgICBzcGVha2VyTGlzdCxcbiAgICBmYXZvcml0ZUNsaWNrQ291bnQsXG4gICAgdG9nZ2xlU3BlYWtlckZhdm9yaXRlLFxuICAgIGluY3JlbWVudEZhdm9yaXRlQ2xpY2tDb3VudCxcbiAgICBoYXNFcnJvcmVkLFxuICAgIGVycm9yLFxuICAgIGltYWdlUmVyZW5kZXJJZGVudGlmaWVyLFxuICAgIGZvcmNlSW1hZ2VSZXJlbmRlclxuICB9ID0gdXNlU3BlYWtlckRhdGFNYW5hZ2VyKCk7XG5cbiAgY29uc3QgcHJvdmlkZXIgPSB7XG4gICAgaXNMb2FkaW5nLFxuICAgIHNwZWFrZXJMaXN0LFxuICAgIGZhdm9yaXRlQ2xpY2tDb3VudCxcbiAgICB0b2dnbGVTcGVha2VyRmF2b3JpdGUsXG4gICAgaW5jcmVtZW50RmF2b3JpdGVDbGlja0NvdW50LFxuICAgIGhhc0Vycm9yZWQsXG4gICAgZXJyb3IsXG4gICAgaW1hZ2VSZXJlbmRlcklkZW50aWZpZXIsXG4gICAgZm9yY2VJbWFnZVJlcmVuZGVyXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8R2xvYmFsQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17cHJvdmlkZXJ9PntjaGlsZHJlbn08L0dsb2JhbENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2lnbk1lVXAgZnJvbSAnLi9TaWduTWVVcCc7XG5pbXBvcnQgeyBHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi9HbG9iYWxTdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHNpZ251cENhbGxiYWNrID0gKGVtYWlsKSA9PiB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKGBzaWduIHVwIGNhbGxlZCB3aXRoIGVtYWlsICR7ZW1haWx9YCk7XG4gIH07XG5cbiAgY29uc3QgeyBmYXZvcml0ZUNsaWNrQ291bnQgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImp1bWJvdHJvbiBqdW1ib3Ryb25oZWlnaHRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlXCI+T2N0b2JlciAxOS0yMCZuYnNwOyZuYnNwOzIwMTk8L2g2PlxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZVwiPlNhbiBKb3NlLCBDYWxpZm9ybmlhPC9oNj5cbiAgICAgICAgICA8aDM+Q2xpY2sgQ291bnQge2Zhdm9yaXRlQ2xpY2tDb3VudH08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTggdGV4dC1sZy1yaWdodFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvU1ZDQ2xvZ28ucG5nXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDI+U2lsaWNvbiBWYWxsZXkgQ29kZSBDYW1wIDIwMTk8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvbC0xMiB0ZXh0LWxnLXJpZ2h0XCI+XG4gICAgICAgICAgICA8U2lnbk1lVXAgc2lnbnVwQ2FsbGJhY2s9e3NpZ251cENhbGxiYWNrfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9zcmMvSGVhZGVyJztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuLi9zcmMvTWVudSc7XG5cbmZ1bmN0aW9uIGluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8TWVudSAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIG1hcmdpbnRvcGJvdHRvbVwiPlxuICAgICAgICAgICAgPGgyPkhvbWU8L2gyPlxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm1hcmdpbnRvcGJvdHRvbTIwXCI+XG4gICAgICAgICAgICAgIENvZGUgQ2FtcCBpcyBhIGNvbW11bml0eSBldmVudCB3aGVyZSBkZXZlbG9wZXJzIGxlYXJuIGZyb20gZmVsbG93XG4gICAgICAgICAgICAgIGRldmVsb3BlcnMuIFdlIGFsc28gaGF2ZSBkZXZlbG9wZXIgcmVsYXRlZCB0b3BpY3MgdGhhdCBpbmNsdWRlXG4gICAgICAgICAgICAgIHNvZnR3YXJlIGJyYW5kaW5nLCBsZWdhbCBpc3N1ZXMgYXJvdW5kIHNvZnR3YXJlIGFzIHdlbGwgYXMgb3RoZXJcbiAgICAgICAgICAgICAgdG9waWNzIGRldmVsb3BlcnMgYXJlIGludGVyZXN0ZWQgaW4gaGVhcmluZyBhYm91dC5cbiAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuL0dsb2JhbFN0YXRlJztcblxuY29uc3QgSW1hZ2VUb2dnbGVPblNjcm9sbCA9ICh7IHByaW1hcnlJbWcsIHNlY29uZGFyeUltZyB9KSA9PiB7XG4gIGNvbnN0IGltYWdlUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IHsgaW1hZ2VSZXJlbmRlcklkZW50aWZpZXIgfSA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XG5cbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGlzSW5WaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSBpbWFnZVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiByZWN0LnRvcCA+PSAwICYmIHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgfTtcblxuICBjb25zdCBbaW5WaWV3LCBzZXRJblZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICBzZXRJblZpZXcoaXNJblZpZXcoKSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEhhbmRsZXIpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsSGFuZGxlcik7XG4gICAgfTtcbiAgfSwgW2ltYWdlUmVyZW5kZXJJZGVudGlmaWVyXSk7XG5cbiAgY29uc3Qgc2Nyb2xsSGFuZGxlciA9ICgpID0+IHtcbiAgICBzZXRJblZpZXcoaXNJblZpZXcoKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8aW1nXG4gICAgICBzcmM9e1xuICAgICAgICBpc0xvYWRpbmdcbiAgICAgICAgICA/ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFQLy8vd0FBQUNINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQ1JBRUFPdz09JyAvLyAxeDFnaWZcbiAgICAgICAgICA6IGluVmlld1xuICAgICAgICAgID8gc2Vjb25kYXJ5SW1nXG4gICAgICAgICAgOiBwcmltYXJ5SW1nXG4gICAgICB9XG4gICAgICBhbHQ9XCJcIlxuICAgICAgcmVmPXtpbWFnZVJlZn1cbiAgICAgIHdpZHRoPVwiMjAwXCJcbiAgICAgIGhlaWdodD1cIjIwMFwiXG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlVG9nZ2xlT25TY3JvbGw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZXhwb3J0IGNvbnN0IE1lbnUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1zbSBiZy1kYXJrIG5hdmJhci1kYXJrXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Ib21lPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3NwZWFrZXJzXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+U3BlYWtlcnM8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tICcuL0FwcCc7XG5cbmNvbnN0IFNpZ25NZVVwID0gKHsgc2lnbnVwQ2FsbGJhY2sgfSkgPT4ge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbnRleHQuc2hvd1NpZ25NZVVwID09PSBmYWxzZSA/IG51bGwgOiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFbWFpbFwiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFlbWFpbC5pbmNsdWRlcygnQCcpfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzaWdudXBDYWxsYmFjayhlbWFpbCk7XG4gICAgICAgICAgICAgIHNldEVtYWlsKCcnKTtcbiAgICAgICAgICAgICAgYWxlcnQoJ3NpZ251cCBjb25maXJtZWQnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgR2V0IFVwZGF0ZXNcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25NZVVwO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2VUb2dnbGVPblNjcm9sbCBmcm9tICcuL0ltYWdlVG9nZ2xlT25TY3JvbGwnO1xuaW1wb3J0IHVzZVNwZWFrZXJEYXRhTWFuYWdlciBmcm9tICcuL3VzZVNwZWFrZXJEYXRhTWFuYWdlcic7XG5pbXBvcnQgeyBGYXZvcml0ZUNsaWNrQ291bnRDb250ZXh0IH0gZnJvbSAnLi9GYXZvcml0ZUNsaWNrQ291bnRDb250ZXh0JztcblxuY29uc3QgU3BlYWtlckRldGFpbCA9IFJlYWN0Lm1lbW8oKHsgc3BlYWtlclJlYywgb25IZWFydEZhdm9yaXRlSGFuZGxlciB9KSA9PiB7XG4gIGNvbnN0IHsgaWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGJpbywgZmF2b3JpdGUgfSA9IHNwZWFrZXJSZWM7XG4gIGNvbnNvbGUubG9nKGBTcGVha2VyRGV0YWlsOiR7aWR9ICR7Zmlyc3ROYW1lfSAke2xhc3ROYW1lfSAke2Zhdm9yaXRlfWApO1xuXG4gIGNvbnN0IHsgaW5jcmVtZW50RmF2b3JpdGVDbGlja0NvdW50IH0gPSB1c2VDb250ZXh0KEZhdm9yaXRlQ2xpY2tDb3VudENvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNvbC00IGNhcmRtaW5cIj5cbiAgICAgIDxJbWFnZVRvZ2dsZU9uU2Nyb2xsXG4gICAgICAgIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiXG4gICAgICAgIHByaW1hcnlJbWc9e2Avc3RhdGljL3NwZWFrZXJzL2J3L1NwZWFrZXItJHtpZH0uanBnYH1cbiAgICAgICAgc2Vjb25kYXJ5SW1nPXtgL3N0YXRpYy9zcGVha2Vycy9TcGVha2VyLSR7aWR9LmpwZ2B9XG4gICAgICAgIGFsdD1cIntmaXJzdE5hbWV9IHtsYXN0TmFtZX1cIlxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtmYXZvcml0ZSA/ICdoZWFydHJlZGJ1dHRvbicgOiAnaGVhcnRkYXJrYnV0dG9uJ31cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIG9uSGVhcnRGYXZvcml0ZUhhbmRsZXIoZSwgc3BlYWtlclJlYyk7XG4gICAgICAgICAgICAgIGluY3JlbWVudEZhdm9yaXRlQ2xpY2tDb3VudCgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAge2ZpcnN0TmFtZX0ge2xhc3ROYW1lfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9oND5cbiAgICAgICAgPHNwYW4+e2Jpb308L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyRGV0YWlsO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4vTWVudSc7XG5pbXBvcnQgU3BlYWtlckRldGFpbCBmcm9tICcuL1NwZWFrZXJEZXRhaWwnO1xuaW1wb3J0IHsgQ29uZmlnQ29udGV4dCB9IGZyb20gJy4vQXBwJztcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuL0dsb2JhbFN0YXRlJztcblxuY29uc3QgU3BlYWtlcnMgPSAoe30pID0+IHtcbiAgY29uc3QgW3NwZWFraW5nU2F0dXJkYXksIHNldFNwZWFraW5nU2F0dXJkYXldID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtzcGVha2luZ1N1bmRheSwgc2V0U3BlYWtpbmdTdW5kYXldID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpO1xuXG4gIGNvbnN0IHsgaXNMb2FkaW5nLCBzcGVha2VyTGlzdCwgdG9nZ2xlU3BlYWtlckZhdm9yaXRlLCBoYXNFcnJvcmVkLCBlcnJvciwgZm9yY2VJbWFnZVJlcmVuZGVyIH0gPSB1c2VDb250ZXh0KFxuICAgIEdsb2JhbENvbnRleHQsXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlU2F0dXJkYXkgPSAoKSA9PiB7XG4gICAgZm9yY2VJbWFnZVJlcmVuZGVyKCk7XG4gICAgc2V0U3BlYWtpbmdTYXR1cmRheSghc3BlYWtpbmdTYXR1cmRheSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUNoYW5nZVN1bmRheSA9ICgpID0+IHtcbiAgICBmb3JjZUltYWdlUmVyZW5kZXIoKTtcbiAgICBzZXRTcGVha2luZ1N1bmRheSghc3BlYWtpbmdTdW5kYXkpO1xuICB9O1xuICBjb25zdCBoZWFydEZhdm9yaXRlSGFuZGxlciA9IHVzZUNhbGxiYWNrKChlLCBzcGVha2VyUmVjKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRvZ2dsZVNwZWFrZXJGYXZvcml0ZShzcGVha2VyUmVjKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG5ld1NwZWFrZXJMaXN0ID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgc3BlYWtlckxpc3RcbiAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAoeyBzYXQsIHN1biB9KSA9PlxuICAgICAgICAgICAgKHNwZWFraW5nU2F0dXJkYXkgJiYgc2F0KSB8fCAoc3BlYWtpbmdTdW5kYXkgJiYgc3VuKSxcbiAgICAgICAgKVxuICAgICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgIGlmIChhLmZpcnN0TmFtZSA8IGIuZmlyc3ROYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhLmZpcnN0TmFtZSA+IGIuZmlyc3ROYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pLFxuICAgIFtzcGVha2luZ1NhdHVyZGF5LCBzcGVha2luZ1N1bmRheSwgc3BlYWtlckxpc3RdLFxuICApO1xuXG4gIGNvbnN0IHNwZWFrZXJMaXN0RmlsdGVyZWQgPSBpc0xvYWRpbmcgPyBbXSA6IG5ld1NwZWFrZXJMaXN0O1xuXG4gIGlmKGhhc0Vycm9yZWQgPT09IHRydWUpIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2Rpdj47XG5cbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8TWVudSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tdG9vbGJhciAgbWFyZ2ludG9wYm90dG9tNSBjaGVja2JveC1iaWdnZXJcIj5cbiAgICAgICAgICB7Y29udGV4dC5zaG93U3BlYWtlclNwZWFraW5nRGF5cyA9PT0gZmFsc2UgPyBudWxsIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU2F0dXJkYXl9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NwZWFraW5nU2F0dXJkYXl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgU2F0dXJkYXkgU3BlYWtlcnNcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTdW5kYXl9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NwZWFraW5nU3VuZGF5fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIFN1bmRheSBTcGVha2Vyc1xuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRlY2tcIj5cbiAgICAgICAgICAgIHtzcGVha2VyTGlzdEZpbHRlcmVkLm1hcCgoc3BlYWtlclJlYykgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxTcGVha2VyRGV0YWlsXG4gICAgICAgICAgICAgICAgICBrZXk9e3NwZWFrZXJSZWMuaWR9XG4gICAgICAgICAgICAgICAgICBzcGVha2VyUmVjPXtzcGVha2VyUmVjfVxuICAgICAgICAgICAgICAgICAgb25IZWFydEZhdm9yaXRlSGFuZGxlcj17aGVhcnRGYXZvcml0ZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnM7XG4iLCJjb25zdCBzcGVha2Vyc1JlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBmdW5jdGlvbiB1cGRhdGVGYXZvcml0ZShmYXZvcml0ZVZhbHVlKSB7XG4gICAgcmV0dXJuIHN0YXRlLnNwZWFrZXJMaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpdGVtLmlkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgZmF2b3JpdGU6IGZhdm9yaXRlVmFsdWUgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pO1xuICB9XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdzZXRTcGVha2VyTGlzdCc6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzcGVha2VyTGlzdDogYWN0aW9uLmRhdGEsIGlzTG9hZGluZzogZmFsc2UsIGhhc0Vycm9yZWQ6IGZhbHNlIH07XG4gICAgfVxuICAgIGNhc2UgJ2ZvcmNlSW1hZ2VSZXJlbmRlcic6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpbWFnZVJlcmVuZGVySWRlbnRpZmllcjogbmV3IERhdGUoKS5nZXRUaW1lKCkgfTtcbiAgICB9XG4gICAgY2FzZSAnZmF2b3JpdGUnOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc3BlYWtlckxpc3Q6IHVwZGF0ZUZhdm9yaXRlKHRydWUpIH07XG4gICAgfVxuICAgIGNhc2UgJ3VuZmF2b3JpdGUnOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc3BlYWtlckxpc3Q6IHVwZGF0ZUZhdm9yaXRlKGZhbHNlKSB9O1xuICAgIH1cbiAgICBjYXNlICdpbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnQnOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZmF2b3JpdGVDbGlja0NvdW50OiBzdGF0ZS5mYXZvcml0ZUNsaWNrQ291bnQgKyAxfTtcbiAgICB9XG4gICAgY2FzZSAnZXJyb3JlZCc6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBoYXNFcnJvcmVkOiB0cnVlLCBlcnJvcjogYWN0aW9uLmVycm9yIH07XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBzcGVha2Vyc1JlZHVjZXI7XG4iLCJpbXBvcnQgc3BlYWtlcnNSZWR1Y2VyIGZyb20gJy4vc3BlYWtlcnNSZWR1Y2VyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIHVzZVNwZWFrZXJEYXRhTWFuYWdlcigpIHtcbiAgY29uc3QgW3sgaXNMb2FkaW5nLCBzcGVha2VyTGlzdCwgZmF2b3JpdGVDbGlja0NvdW50LCBoYXNFcnJvcmVkLCBlcnJvciwgaW1hZ2VSZXJlbmRlcklkZW50aWZpZXIgfSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzcGVha2Vyc1JlZHVjZXIsIHtcbiAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgc3BlYWtlckxpc3Q6IFtdLFxuICAgIGZhdm9yaXRlQ2xpY2tDb3VudDogMCxcbiAgICBoYXNFcnJvcmVkOiBmYWxzZSxcbiAgICBlcnJvcjogbnVsbCxcbiAgICBpbWFnZVJlcmVuZGVySWRlbnRpZmllcjogMFxuICB9KTtcblxuICBmdW5jdGlvbiBpbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnQoKSB7XG4gICAgZGlzcGF0Y2goe3R5cGU6ICdpbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnQnfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcmVjSW1hZ2VSZXJlbmRlcigpIHtcbiAgICBkaXNwYXRjaCh7dHlwZTogJ2ZvcmNlSW1hZ2VSZXJlbmRlcid9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVNwZWFrZXJGYXZvcml0ZShzcGVha2VyUmVjKSB7XG4gICAgY29uc3QgdXBkYXRlRGF0YSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGF4aW9zLnB1dChgL2FwaS9zcGVha2Vycy8ke3NwZWFrZXJSZWMuaWR9YCwge1xuICAgICAgICAuLi5zcGVha2VyUmVjLFxuICAgICAgICBmYXZvcml0ZTogIXNwZWFrZXJSZWMuZmF2b3JpdGUsXG4gICAgICB9KTtcbiAgICAgIHNwZWFrZXJSZWMuZmF2b3JpdGUgPT09IHRydWVcbiAgICAgICAgPyBkaXNwYXRjaCh7IHR5cGU6ICd1bmZhdm9yaXRlJywgaWQ6IHNwZWFrZXJSZWMuaWQgfSlcbiAgICAgICAgOiBkaXNwYXRjaCh7IHR5cGU6ICdmYXZvcml0ZScsIGlkOiBzcGVha2VyUmVjLmlkIH0pO1xuICAgIH07XG4gICAgdXBkYXRlRGF0YSgpO1xuICB9XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9zcGVha2VycycpO1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdzZXRTcGVha2VyTGlzdCcsIGRhdGE6IHJlc3VsdC5kYXRhIH0pO1xuICAgICAgfWNhdGNoKGUpIHtcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdlcnJvcmVkJywgZXJyb3I6IGV9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2NsZWFudXAnKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHsgaXNMb2FkaW5nLCBzcGVha2VyTGlzdCwgZmF2b3JpdGVDbGlja0NvdW50LCBpbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnQsIHRvZ2dsZVNwZWFrZXJGYXZvcml0ZSwgaGFzRXJyb3JlZCwgZXJyb3IsIGZvcmVjSW1hZ2VSZXJlbmRlciwgaW1hZ2VSZXJlbmRlcklkZW50aWZpZXIgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlU3BlYWtlckRhdGFNYW5hZ2VyOyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=