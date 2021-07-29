self["webpackHotUpdate_N_E"]("pages/index",{

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
      incrementFavoriteClickCount = _useSpeakerDataManage.incrementFavoriteClickCount,
      hasErrored = _useSpeakerDataManage.hasErrored,
      error = _useSpeakerDataManage.error,
      imageRerenderIdentifier = _useSpeakerDataManage.imageRerenderIdentifier,
      forceImageRerender = _useSpeakerDataManage.forceImageRerender;

  var provider = {
    isLoading: isLoading,
    speakerList: speakerList,
    favoriteClickCount: favoriteClickCount,
    toggleSpeakerFavorite: toggleSpeakerFavorite,
    incrementFavoriteClickCount: incrementFavoriteClickCount,
    hasErrored: hasErrored,
    error: error,
    imageRerenderIdentifier: imageRerenderIdentifier,
    forceImageRerender: forceImageRerender
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {
    value: provider,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, _this);
};

_s(GlobalProvider, "ZqbzKZt02lo+waM+nRFrhOyw6RM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0dsb2JhbFN0YXRlLmpzIl0sIm5hbWVzIjpbIkdsb2JhbENvbnRleHQiLCJSZWFjdCIsIkdsb2JhbFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTcGVha2VyRGF0YU1hbmFnZXIiLCJpc0xvYWRpbmciLCJzcGVha2VyTGlzdCIsImZhdm9yaXRlQ2xpY2tDb3VudCIsInRvZ2dsZVNwZWFrZXJGYXZvcml0ZSIsImluY3JlbWVudEZhdm9yaXRlQ2xpY2tDb3VudCIsImhhc0Vycm9yZWQiLCJlcnJvciIsImltYWdlUmVyZW5kZXJJZGVudGlmaWVyIiwiZm9yY2VJbWFnZVJlcmVuZGVyIiwicHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLGFBQWEsZ0JBQUdDLDBEQUFBLEVBQXRCO0FBRUEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSw4QkFXMUNDLCtEQUFxQixFQVhxQjtBQUFBLE1BRTVDQyxTQUY0Qyx5QkFFNUNBLFNBRjRDO0FBQUEsTUFHNUNDLFdBSDRDLHlCQUc1Q0EsV0FINEM7QUFBQSxNQUk1Q0Msa0JBSjRDLHlCQUk1Q0Esa0JBSjRDO0FBQUEsTUFLNUNDLHFCQUw0Qyx5QkFLNUNBLHFCQUw0QztBQUFBLE1BTTVDQywyQkFONEMseUJBTTVDQSwyQkFONEM7QUFBQSxNQU81Q0MsVUFQNEMseUJBTzVDQSxVQVA0QztBQUFBLE1BUTVDQyxLQVI0Qyx5QkFRNUNBLEtBUjRDO0FBQUEsTUFTNUNDLHVCQVQ0Qyx5QkFTNUNBLHVCQVQ0QztBQUFBLE1BVTVDQyxrQkFWNEMseUJBVTVDQSxrQkFWNEM7O0FBYTlDLE1BQU1DLFFBQVEsR0FBRztBQUNmVCxhQUFTLEVBQVRBLFNBRGU7QUFFZkMsZUFBVyxFQUFYQSxXQUZlO0FBR2ZDLHNCQUFrQixFQUFsQkEsa0JBSGU7QUFJZkMseUJBQXFCLEVBQXJCQSxxQkFKZTtBQUtmQywrQkFBMkIsRUFBM0JBLDJCQUxlO0FBTWZDLGNBQVUsRUFBVkEsVUFOZTtBQU9mQyxTQUFLLEVBQUxBLEtBUGU7QUFRZkMsMkJBQXVCLEVBQXZCQSx1QkFSZTtBQVNmQyxzQkFBa0IsRUFBbEJBO0FBVGUsR0FBakI7QUFZQSxzQkFDRSw4REFBQyxhQUFELENBQWUsUUFBZjtBQUF3QixTQUFLLEVBQUVDLFFBQS9CO0FBQUEsY0FBMENYO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUdELENBNUJNOztHQUFNRCxjO1VBV1BFLDJEOzs7S0FYT0YsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lM2Q2M2E2ZjNkZjNhM2FkY2VjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VTcGVha2VyRGF0YU1hbmFnZXIgZnJvbSAnLi91c2VTcGVha2VyRGF0YU1hbmFnZXInO1xuXG5leHBvcnQgY29uc3QgR2xvYmFsQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IEdsb2JhbFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCB7XG4gICAgaXNMb2FkaW5nLFxuICAgIHNwZWFrZXJMaXN0LFxuICAgIGZhdm9yaXRlQ2xpY2tDb3VudCxcbiAgICB0b2dnbGVTcGVha2VyRmF2b3JpdGUsXG4gICAgaW5jcmVtZW50RmF2b3JpdGVDbGlja0NvdW50LFxuICAgIGhhc0Vycm9yZWQsXG4gICAgZXJyb3IsXG4gICAgaW1hZ2VSZXJlbmRlcklkZW50aWZpZXIsXG4gICAgZm9yY2VJbWFnZVJlcmVuZGVyXG4gIH0gPSB1c2VTcGVha2VyRGF0YU1hbmFnZXIoKTtcblxuICBjb25zdCBwcm92aWRlciA9IHtcbiAgICBpc0xvYWRpbmcsXG4gICAgc3BlYWtlckxpc3QsXG4gICAgZmF2b3JpdGVDbGlja0NvdW50LFxuICAgIHRvZ2dsZVNwZWFrZXJGYXZvcml0ZSxcbiAgICBpbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnQsXG4gICAgaGFzRXJyb3JlZCxcbiAgICBlcnJvcixcbiAgICBpbWFnZVJlcmVuZGVySWRlbnRpZmllcixcbiAgICBmb3JjZUltYWdlUmVyZW5kZXJcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwcm92aWRlcn0+e2NoaWxkcmVufTwvR2xvYmFsQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9