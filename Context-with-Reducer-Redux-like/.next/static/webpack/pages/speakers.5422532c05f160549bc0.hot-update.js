self["webpackHotUpdate_N_E"]("pages/speakers",{

/***/ "./src/GlobalState.js":
/*!****************************!*\
  !*** ./src/GlobalState.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalContext": function() { return /* binding */ GlobalContext; },
/* harmony export */   "GlobalProvider": function() { return /* binding */ GlobalProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useSpeakerDataManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useSpeakerDataManager */ "./src/useSpeakerDataManager.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\jadek\\DevMtn\\Week3\\Demos\\using-react-hooks\\Context-with-Reducer-Redux-like\\clip3-Convert-Hook-To-Global-Context\\src\\GlobalState.js",
    _this = undefined,
    _s = $RefreshSig$();



var GlobalContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext();
var GlobalProvider = function GlobalProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useSpeakerDataManage = (0,_useSpeakerDataManager__WEBPACK_IMPORTED_MODULE_2__.default)(),
      isLoading = _useSpeakerDataManage.isLoading,
      speakerList = _useSpeakerDataManage.speakerList,
      favoriteClickCount = _useSpeakerDataManage.favoriteClickCount,
      toggleSpeakerFavorite = _useSpeakerDataManage.toggleSpeakerFavorite,
      incrementFavoriteClickCount = _useSpeakerDataManage.incrementFavoriteClickCount;

  var provider = {
    isLoading: isLoading,
    speakerList: speakerList,
    favoriteClickCount: favoriteClickCount,
    toggleSpeakerFavorite: toggleSpeakerFavorite,
    incrementFavoriteClickCount: incrementFavoriteClickCount
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {
    value: provider,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, _this);
};

_s(GlobalProvider, "gyO1d5YayHk/lA3/C1gBwHmAapQ=", false, function () {
  return [_useSpeakerDataManager__WEBPACK_IMPORTED_MODULE_2__.default];
});

_c = GlobalProvider;

var _c;

$RefreshReg$(_c, "GlobalProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0dsb2JhbFN0YXRlLmpzIl0sIm5hbWVzIjpbIkdsb2JhbENvbnRleHQiLCJSZWFjdCIsIkdsb2JhbFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTcGVha2VyRGF0YU1hbmFnZXIiLCJpc0xvYWRpbmciLCJzcGVha2VyTGlzdCIsImZhdm9yaXRlQ2xpY2tDb3VudCIsInRvZ2dsZVNwZWFrZXJGYXZvcml0ZSIsImluY3JlbWVudEZhdm9yaXRlQ2xpY2tDb3VudCIsInByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxhQUFhLGdCQUFHQywwREFBQSxFQUF0QjtBQUVBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsOEJBTzFDQywrREFBcUIsRUFQcUI7QUFBQSxNQUU1Q0MsU0FGNEMseUJBRTVDQSxTQUY0QztBQUFBLE1BRzVDQyxXQUg0Qyx5QkFHNUNBLFdBSDRDO0FBQUEsTUFJNUNDLGtCQUo0Qyx5QkFJNUNBLGtCQUo0QztBQUFBLE1BSzVDQyxxQkFMNEMseUJBSzVDQSxxQkFMNEM7QUFBQSxNQU01Q0MsMkJBTjRDLHlCQU01Q0EsMkJBTjRDOztBQVM5QyxNQUFNQyxRQUFRLEdBQUc7QUFDZkwsYUFBUyxFQUFUQSxTQURlO0FBRWZDLGVBQVcsRUFBWEEsV0FGZTtBQUdmQyxzQkFBa0IsRUFBbEJBLGtCQUhlO0FBSWZDLHlCQUFxQixFQUFyQkEscUJBSmU7QUFLZkMsK0JBQTJCLEVBQTNCQTtBQUxlLEdBQWpCO0FBUUEsc0JBQ0UsOERBQUMsYUFBRCxDQUFlLFFBQWY7QUFBd0IsU0FBSyxFQUFFQyxRQUEvQjtBQUFBLGNBQTBDUDtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFHRCxDQXBCTTs7R0FBTUQsYztVQU9QRSwyRDs7O0tBUE9GLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuNTQyMjUzMmMwNWYxNjA1NDliYzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU3BlYWtlckRhdGFNYW5hZ2VyIGZyb20gJy4vdXNlU3BlYWtlckRhdGFNYW5hZ2VyJztcblxuZXhwb3J0IGNvbnN0IEdsb2JhbENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBHbG9iYWxQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlzTG9hZGluZyxcbiAgICBzcGVha2VyTGlzdCxcbiAgICBmYXZvcml0ZUNsaWNrQ291bnQsXG4gICAgdG9nZ2xlU3BlYWtlckZhdm9yaXRlLFxuICAgIGluY3JlbWVudEZhdm9yaXRlQ2xpY2tDb3VudFxuICB9ID0gdXNlU3BlYWtlckRhdGFNYW5hZ2VyKCk7XG5cbiAgY29uc3QgcHJvdmlkZXIgPSB7XG4gICAgaXNMb2FkaW5nLFxuICAgIHNwZWFrZXJMaXN0LFxuICAgIGZhdm9yaXRlQ2xpY2tDb3VudCxcbiAgICB0b2dnbGVTcGVha2VyRmF2b3JpdGUsXG4gICAgaW5jcmVtZW50RmF2b3JpdGVDbGlja0NvdW50XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8R2xvYmFsQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17cHJvdmlkZXJ9PntjaGlsZHJlbn08L0dsb2JhbENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==