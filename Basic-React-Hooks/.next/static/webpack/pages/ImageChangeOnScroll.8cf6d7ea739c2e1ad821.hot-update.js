self["webpackHotUpdate_N_E"]("pages/ImageChangeOnScroll",{

/***/ "./pages/ImageChangeOnScroll.js":
/*!**************************************!*\
  !*** ./pages/ImageChangeOnScroll.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ImageToggleOnScroll */ "./src/ImageToggleOnScroll.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\jadek\\DevMtn\\Week3\\Assignments\\react-hooks\\pages\\ImageChangeOnScroll.js",
    _this = undefined,
    _s = $RefreshSig$();




var ImageChangeOnScroll = function ImageChangeOnScroll() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      currentSpeakerId = _useState[0],
      setCurrentSpeakerId = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      mouseEventCnt = _useState2[0],
      setMouseEventCnt = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    window.document.title = "SpeakerId: ".concat(currentSpeakerId);
    console.log("useEffect: setting title to ".concat(currentSpeakerId));
  }, [currentSpeakerId]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: ["mouseEventCnt: $", mouseEventCnt]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, _this), [1124, 187, 823, 1269, 1530].map(function (speakerId) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onMouseOver: function onMouseOver() {
          setCurrentSpeakerId(speakerId);
          setMouseEventCnt(mouseEventCnt + 1);
          console.log("onMouseOver:".concat(speakerId));
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__.default, {
          primaryImg: "speakers/bw/Speaker-".concat(speakerId, ".jpg"),
          secondaryImg: "speakers/Speaker-".concat(speakerId, ".jpg"),
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 25
        }, _this)
      }, speakerId, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, _this);
};

_s(ImageChangeOnScroll, "XDXVveCh0mFDHA6S/A4AclRGIAU=");

_c = ImageChangeOnScroll;
/* harmony default export */ __webpack_exports__["default"] = (ImageChangeOnScroll);

var _c;

$RefreshReg$(_c, "ImageChangeOnScroll");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvSW1hZ2VDaGFuZ2VPblNjcm9sbC5qcyJdLCJuYW1lcyI6WyJJbWFnZUNoYW5nZU9uU2Nyb2xsIiwidXNlU3RhdGUiLCJjdXJyZW50U3BlYWtlcklkIiwic2V0Q3VycmVudFNwZWFrZXJJZCIsIm1vdXNlRXZlbnRDbnQiLCJzZXRNb3VzZUV2ZW50Q250IiwidXNlRWZmZWN0Iiwid2luZG93IiwiZG9jdW1lbnQiLCJ0aXRsZSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJzcGVha2VySWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUFBOztBQUFBLGtCQUNrQkMsK0NBQVEsQ0FBQyxDQUFELENBRDFCO0FBQUEsTUFDdkJDLGdCQUR1QjtBQUFBLE1BQ0xDLG1CQURLOztBQUFBLG1CQUVZRiwrQ0FBUSxDQUFDLENBQUQsQ0FGcEI7QUFBQSxNQUV2QkcsYUFGdUI7QUFBQSxNQUVSQyxnQkFGUTs7QUFJOUJDLGtEQUFTLENBQUMsWUFBTTtBQUNaQyxVQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLEtBQWhCLHdCQUFzQ1AsZ0JBQXRDO0FBQ0FRLFdBQU8sQ0FBQ0MsR0FBUix1Q0FBMkNULGdCQUEzQztBQUNILEdBSFEsRUFHTixDQUFDQSxnQkFBRCxDQUhNLENBQVQ7QUFLQSxzQkFDSTtBQUFBLDRCQUNJO0FBQUEscUNBQXVCRSxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQUVLLENBQUMsSUFBRCxFQUFPLEdBQVAsRUFBWSxHQUFaLEVBQWlCLElBQWpCLEVBQXVCLElBQXZCLEVBQTZCUSxHQUE3QixDQUFpQyxVQUFDQyxTQUFELEVBQWU7QUFDN0MsMEJBQ0k7QUFDSSxtQkFBVyxFQUFJLHVCQUFNO0FBQ2pCViw2QkFBbUIsQ0FBQ1UsU0FBRCxDQUFuQjtBQUNBUiwwQkFBZ0IsQ0FBQ0QsYUFBYSxHQUFHLENBQWpCLENBQWhCO0FBQ0FNLGlCQUFPLENBQUNDLEdBQVIsdUJBQTJCRSxTQUEzQjtBQUNILFNBTEw7QUFBQSwrQkFPSSw4REFBQyw2REFBRDtBQUNJLG9CQUFVLGdDQUF5QkEsU0FBekIsU0FEZDtBQUVJLHNCQUFZLDZCQUFzQkEsU0FBdEIsU0FGaEI7QUFHSSxhQUFHLEVBQUM7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEosU0FBVUEsU0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFlSCxLQWhCQSxDQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBc0JILENBL0JEOztHQUFNYixtQjs7S0FBQUEsbUI7QUFpQ04sK0RBQWVBLG1CQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0ltYWdlQ2hhbmdlT25TY3JvbGwuOGNmNmQ3ZWE3MzljMmUxYWQ4MjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZVRvZ2dsZU9uU2Nyb2xsIGZyb20gXCIuLi9zcmMvSW1hZ2VUb2dnbGVPblNjcm9sbFwiO1xyXG5cclxuY29uc3QgSW1hZ2VDaGFuZ2VPblNjcm9sbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtjdXJyZW50U3BlYWtlcklkLCBzZXRDdXJyZW50U3BlYWtlcklkXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW21vdXNlRXZlbnRDbnQsIHNldE1vdXNlRXZlbnRDbnRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQudGl0bGUgPSBgU3BlYWtlcklkOiAke2N1cnJlbnRTcGVha2VySWR9YDtcclxuICAgICAgICBjb25zb2xlLmxvZyhgdXNlRWZmZWN0OiBzZXR0aW5nIHRpdGxlIHRvICR7Y3VycmVudFNwZWFrZXJJZH1gKTtcclxuICAgIH0sIFtjdXJyZW50U3BlYWtlcklkXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj5tb3VzZUV2ZW50Q250OiAke21vdXNlRXZlbnRDbnR9PC9zcGFuPlxyXG4gICAgICAgICAgICB7WzExMjQsIDE4NywgODIzLCAxMjY5LCAxNTMwXS5tYXAoKHNwZWFrZXJJZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17c3BlYWtlcklkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3ZlciA9IHsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50U3BlYWtlcklkKHNwZWFrZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNb3VzZUV2ZW50Q250KG1vdXNlRXZlbnRDbnQgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBvbk1vdXNlT3Zlcjoke3NwZWFrZXJJZH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUltZz17YHNwZWFrZXJzL2J3L1NwZWFrZXItJHtzcGVha2VySWR9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlJbWc9e2BzcGVha2Vycy9TcGVha2VyLSR7c3BlYWtlcklkfS5qcGdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlQ2hhbmdlT25TY3JvbGw7Il0sInNvdXJjZVJvb3QiOiIifQ==