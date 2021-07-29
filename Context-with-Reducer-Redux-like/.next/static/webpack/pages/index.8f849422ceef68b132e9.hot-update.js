self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigContext": function() { return /* binding */ ConfigContext; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ "./src/Home.js");
/* harmony import */ var _Speakers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Speakers */ "./src/Speakers.js");
/* harmony import */ var _GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GlobalState */ "./src/GlobalState.js");
/* harmony import */ var _FavoriteClickCountContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FavoriteClickCountContext */ "./src/FavoriteClickCountContext.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\jadek\\DevMtn\\Week3\\Demos\\using-react-hooks\\Context-with-Reducer-Redux-like\\clip3-Convert-Hook-To-Global-Context\\src\\App.js",
    _this = undefined;






var ConfigContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext();

var pageToShow = function pageToShow(pageName) {
  if (pageName === 'Home') return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Home__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 35
  }, _this);
  if (pageName === 'Speakers') return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speakers__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 39
  }, _this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Not Found"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 10
  }, _this);
};

var configValue = {
  showSignMeUp: true,
  showSpeakerSpeakingDays: true
};

var App = function App(_ref) {
  var pageName = _ref.pageName;
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
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this);
};

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/FavoriteClickCountContext.js":
/*!******************************************!*\
  !*** ./src/FavoriteClickCountContext.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoriteClickCountContext": function() { return /* binding */ FavoriteClickCountContext; },
/* harmony export */   "FavoriteClickCountProvider": function() { return /* binding */ FavoriteClickCountProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GlobalState */ "./src/GlobalState.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\jadek\\DevMtn\\Week3\\Demos\\using-react-hooks\\Context-with-Reducer-Redux-like\\clip3-Convert-Hook-To-Global-Context\\src\\FavoriteClickCountContext.js",
    _this = undefined,
    _s = $RefreshSig$();



var FavoriteClickCountContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
var FavoriteClickCountProvider = function FavoriteClickCountProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_GlobalState__WEBPACK_IMPORTED_MODULE_2__.GlobalContext),
      incrementFavoriteClickCount = _useContext.incrementFavoriteClickCount;

  var provider = {
    incrementFavoriteClickCount: incrementFavoriteClickCount
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FavoriteClickCountContext.Provider, {
    value: provider,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, _this);
};

_s(FavoriteClickCountProvider, "mK+Hd0H2VH3Ls6ENgXjLwJO7atI=");

_c = FavoriteClickCountProvider;

var _c;

$RefreshReg$(_c, "FavoriteClickCountProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0Zhdm9yaXRlQ2xpY2tDb3VudENvbnRleHQuanMiXSwibmFtZXMiOlsiQ29uZmlnQ29udGV4dCIsIlJlYWN0IiwicGFnZVRvU2hvdyIsInBhZ2VOYW1lIiwiY29uZmlnVmFsdWUiLCJzaG93U2lnbk1lVXAiLCJzaG93U3BlYWtlclNwZWFraW5nRGF5cyIsIkFwcCIsIkZhdm9yaXRlQ2xpY2tDb3VudENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiRmF2b3JpdGVDbGlja0NvdW50UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZUNvbnRleHQiLCJHbG9iYWxDb250ZXh0IiwiaW5jcmVtZW50RmF2b3JpdGVDbGlja0NvdW50IiwicHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxhQUFhLGdCQUFHQywwREFBQSxFQUF0Qjs7QUFFUCxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxRQUFELEVBQWM7QUFDL0IsTUFBSUEsUUFBUSxLQUFLLE1BQWpCLEVBQXlCLG9CQUFPLDhEQUFDLDBDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUN6QixNQUFJQSxRQUFRLEtBQUssVUFBakIsRUFBNkIsb0JBQU8sOERBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQzdCLHNCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDRCxDQUpEOztBQU1BLElBQU1DLFdBQVcsR0FBRztBQUNsQkMsY0FBWSxFQUFFLElBREk7QUFFbEJDLHlCQUF1QixFQUFFO0FBRlAsQ0FBcEI7O0FBS0EsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBa0I7QUFBQSxNQUFmSixRQUFlLFFBQWZBLFFBQWU7QUFDNUIsc0JBQ0UsOERBQUMsYUFBRCxDQUFlLFFBQWY7QUFBd0IsU0FBSyxFQUFFQyxXQUEvQjtBQUFBLDJCQUNFLDhEQUFDLHdEQUFEO0FBQUEsNkJBQ0UsOERBQUMsa0ZBQUQ7QUFBQSwrQkFDRTtBQUFBLG9CQUFNRixVQUFVLENBQUNDLFFBQUQ7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0FWRDs7S0FBTUksRztBQVlOLCtEQUFlQSxHQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFFTyxJQUFNQyx5QkFBeUIsZ0JBQUdDLG9EQUFhLEVBQS9DO0FBRUEsSUFBTUMsMEJBQTBCLEdBQUcsU0FBN0JBLDBCQUE2QixPQUFnQjtBQUFBOztBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYzs7QUFBQSxvQkFDZEMsaURBQVUsQ0FBQ0MsdURBQUQsQ0FESTtBQUFBLE1BQzlDQywyQkFEOEMsZUFDOUNBLDJCQUQ4Qzs7QUFFdEQsTUFBTUMsUUFBUSxHQUFHO0FBQUVELCtCQUEyQixFQUEzQkE7QUFBRixHQUFqQjtBQUVBLHNCQUNJLDhEQUFDLHlCQUFELENBQTJCLFFBQTNCO0FBQW9DLFNBQUssRUFBRUMsUUFBM0M7QUFBQSxjQUNLSjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQUtILENBVE07O0dBQU1ELDBCOztLQUFBQSwwQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44Zjg0OTQyMmNlZWY2OGIxMzJlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSc7XG5pbXBvcnQgU3BlYWtlcnMgZnJvbSAnLi9TcGVha2Vycyc7XG5pbXBvcnQgeyBHbG9iYWxQcm92aWRlciB9IGZyb20gJy4vR2xvYmFsU3RhdGUnO1xuaW1wb3J0IHsgRmF2b3JpdGVDbGlja0NvdW50UHJvdmlkZXIgfSBmcm9tICcuL0Zhdm9yaXRlQ2xpY2tDb3VudENvbnRleHQnO1xuXG5leHBvcnQgY29uc3QgQ29uZmlnQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuY29uc3QgcGFnZVRvU2hvdyA9IChwYWdlTmFtZSkgPT4ge1xuICBpZiAocGFnZU5hbWUgPT09ICdIb21lJykgcmV0dXJuIDxIb21lIC8+O1xuICBpZiAocGFnZU5hbWUgPT09ICdTcGVha2VycycpIHJldHVybiA8U3BlYWtlcnMgLz47XG4gIHJldHVybiA8ZGl2Pk5vdCBGb3VuZDwvZGl2Pjtcbn07XG5cbmNvbnN0IGNvbmZpZ1ZhbHVlID0ge1xuICBzaG93U2lnbk1lVXA6IHRydWUsXG4gIHNob3dTcGVha2VyU3BlYWtpbmdEYXlzOiB0cnVlLFxufTtcblxuY29uc3QgQXBwID0gKHsgcGFnZU5hbWUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDb25maWdDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb25maWdWYWx1ZX0+XG4gICAgICA8R2xvYmFsUHJvdmlkZXI+XG4gICAgICAgIDxGYXZvcml0ZUNsaWNrQ291bnRQcm92aWRlcj5cbiAgICAgICAgICA8ZGl2PntwYWdlVG9TaG93KHBhZ2VOYW1lKX08L2Rpdj5cbiAgICAgICAgPC9GYXZvcml0ZUNsaWNrQ291bnRQcm92aWRlcj5cbiAgICAgIDwvR2xvYmFsUHJvdmlkZXI+XG4gICAgPC9Db25maWdDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gXCIuL0dsb2JhbFN0YXRlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRmF2b3JpdGVDbGlja0NvdW50Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBGYXZvcml0ZUNsaWNrQ291bnRQcm92aWRlciA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgICBjb25zdCB7IGluY3JlbWVudEZhdm9yaXRlQ2xpY2tDb3VudCB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0geyBpbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnQgfTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEZhdm9yaXRlQ2xpY2tDb3VudENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3Byb3ZpZGVyfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvRmF2b3JpdGVDbGlja0NvdW50Q29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==