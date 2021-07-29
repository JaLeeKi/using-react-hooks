self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/SpeakerDetail.js":
/*!******************************!*\
  !*** ./src/SpeakerDetail.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageToggleOnScroll */ "./src/ImageToggleOnScroll.js");
/* harmony import */ var _useSpeakerDataManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useSpeakerDataManager */ "./src/useSpeakerDataManager.js");
/* harmony import */ var _FavoriteClickCountContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FavoriteClickCountContext */ "./src/FavoriteClickCountContext.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\jadek\\DevMtn\\Week3\\Demos\\using-react-hooks\\Context-with-Reducer-Redux-like\\clip3-Convert-Hook-To-Global-Context\\src\\SpeakerDetail.js",
    _this = undefined,
    _s = $RefreshSig$();





var SpeakerDetail = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(_c = _s(function (_ref) {
  _s();

  var speakerRec = _ref.speakerRec,
      onHeartFavoriteHandler = _ref.onHeartFavoriteHandler;
  var id = speakerRec.id,
      firstName = speakerRec.firstName,
      lastName = speakerRec.lastName,
      bio = speakerRec.bio,
      favorite = speakerRec.favorite;
  console.log("SpeakerDetail:".concat(id, " ").concat(firstName, " ").concat(lastName, " ").concat(favorite));

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_FavoriteClickCountContext__WEBPACK_IMPORTED_MODULE_4__.FavoriteClickCountContext),
      incrementFavoriteClickCount = _useContext.incrementFavoriteClickCount;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "card col-4 cardmin",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__.default, {
      className: "card-img-top",
      primaryImg: "/static/speakers/bw/Speaker-".concat(id, ".jpg"),
      secondaryImg: "/static/speakers/Speaker-".concat(id, ".jpg"),
      alt: "{firstName} {lastName}"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card-body",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        className: "card-title",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: favorite ? 'heartredbutton' : 'heartdarkbutton',
          onClick: function onClick(e) {
            onHeartFavoriteHandler(e, speakerRec);
            incrementFavoriteClickCount();
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [firstName, " ", lastName]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, _this);
}, "mK+Hd0H2VH3Ls6ENgXjLwJO7atI="));
_c2 = SpeakerDetail;
/* harmony default export */ __webpack_exports__["default"] = (SpeakerDetail);

var _c, _c2;

$RefreshReg$(_c, "SpeakerDetail$React.memo");
$RefreshReg$(_c2, "SpeakerDetail");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJEZXRhaWwuanMiXSwibmFtZXMiOlsiU3BlYWtlckRldGFpbCIsIlJlYWN0Iiwic3BlYWtlclJlYyIsIm9uSGVhcnRGYXZvcml0ZUhhbmRsZXIiLCJpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiYmlvIiwiZmF2b3JpdGUiLCJjb25zb2xlIiwibG9nIiwidXNlQ29udGV4dCIsIkZhdm9yaXRlQ2xpY2tDb3VudENvbnRleHQiLCJpbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnQiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsZ0JBQUdDLGlEQUFBLFNBQVcsZ0JBQTRDO0FBQUE7O0FBQUEsTUFBekNDLFVBQXlDLFFBQXpDQSxVQUF5QztBQUFBLE1BQTdCQyxzQkFBNkIsUUFBN0JBLHNCQUE2QjtBQUFBLE1BQ25FQyxFQURtRSxHQUN4QkYsVUFEd0IsQ0FDbkVFLEVBRG1FO0FBQUEsTUFDL0RDLFNBRCtELEdBQ3hCSCxVQUR3QixDQUMvREcsU0FEK0Q7QUFBQSxNQUNwREMsUUFEb0QsR0FDeEJKLFVBRHdCLENBQ3BESSxRQURvRDtBQUFBLE1BQzFDQyxHQUQwQyxHQUN4QkwsVUFEd0IsQ0FDMUNLLEdBRDBDO0FBQUEsTUFDckNDLFFBRHFDLEdBQ3hCTixVQUR3QixDQUNyQ00sUUFEcUM7QUFFM0VDLFNBQU8sQ0FBQ0MsR0FBUix5QkFBNkJOLEVBQTdCLGNBQW1DQyxTQUFuQyxjQUFnREMsUUFBaEQsY0FBNERFLFFBQTVEOztBQUYyRSxvQkFJbkNHLGlEQUFVLENBQUNDLGlGQUFELENBSnlCO0FBQUEsTUFJbkVDLDJCQUptRSxlQUluRUEsMkJBSm1FOztBQU0zRSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBLDRCQUNFLDhEQUFDLHlEQUFEO0FBQ0UsZUFBUyxFQUFDLGNBRFo7QUFFRSxnQkFBVSx3Q0FBaUNULEVBQWpDLFNBRlo7QUFHRSxrQkFBWSxxQ0FBOEJBLEVBQTlCLFNBSGQ7QUFJRSxTQUFHLEVBQUM7QUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLFlBQWQ7QUFBQSxnQ0FDRTtBQUNFLG1CQUFTLEVBQUVJLFFBQVEsR0FBRyxnQkFBSCxHQUFzQixpQkFEM0M7QUFFRSxpQkFBTyxFQUFFLGlCQUFDTSxDQUFELEVBQU87QUFDZFgsa0NBQXNCLENBQUNXLENBQUQsRUFBSVosVUFBSixDQUF0QjtBQUNBVyx1Q0FBMkI7QUFDNUI7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBUUU7QUFBQSxxQkFDR1IsU0FESCxPQUNlQyxRQURmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQWFFO0FBQUEsa0JBQU9DO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBeUJELENBL0JxQixrQ0FBdEI7TUFBTVAsYTtBQWlDTiwrREFBZUEsYUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44ZTU5MzE2ZDk1YTM0YzZmNjhmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2VUb2dnbGVPblNjcm9sbCBmcm9tICcuL0ltYWdlVG9nZ2xlT25TY3JvbGwnO1xuaW1wb3J0IHVzZVNwZWFrZXJEYXRhTWFuYWdlciBmcm9tICcuL3VzZVNwZWFrZXJEYXRhTWFuYWdlcic7XG5pbXBvcnQgeyBGYXZvcml0ZUNsaWNrQ291bnRDb250ZXh0IH0gZnJvbSAnLi9GYXZvcml0ZUNsaWNrQ291bnRDb250ZXh0JztcblxuY29uc3QgU3BlYWtlckRldGFpbCA9IFJlYWN0Lm1lbW8oKHsgc3BlYWtlclJlYywgb25IZWFydEZhdm9yaXRlSGFuZGxlciB9KSA9PiB7XG4gIGNvbnN0IHsgaWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGJpbywgZmF2b3JpdGUgfSA9IHNwZWFrZXJSZWM7XG4gIGNvbnNvbGUubG9nKGBTcGVha2VyRGV0YWlsOiR7aWR9ICR7Zmlyc3ROYW1lfSAke2xhc3ROYW1lfSAke2Zhdm9yaXRlfWApO1xuXG4gIGNvbnN0IHsgaW5jcmVtZW50RmF2b3JpdGVDbGlja0NvdW50IH0gPSB1c2VDb250ZXh0KEZhdm9yaXRlQ2xpY2tDb3VudENvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNvbC00IGNhcmRtaW5cIj5cbiAgICAgIDxJbWFnZVRvZ2dsZU9uU2Nyb2xsXG4gICAgICAgIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiXG4gICAgICAgIHByaW1hcnlJbWc9e2Avc3RhdGljL3NwZWFrZXJzL2J3L1NwZWFrZXItJHtpZH0uanBnYH1cbiAgICAgICAgc2Vjb25kYXJ5SW1nPXtgL3N0YXRpYy9zcGVha2Vycy9TcGVha2VyLSR7aWR9LmpwZ2B9XG4gICAgICAgIGFsdD1cIntmaXJzdE5hbWV9IHtsYXN0TmFtZX1cIlxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtmYXZvcml0ZSA/ICdoZWFydHJlZGJ1dHRvbicgOiAnaGVhcnRkYXJrYnV0dG9uJ31cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIG9uSGVhcnRGYXZvcml0ZUhhbmRsZXIoZSwgc3BlYWtlclJlYyk7XG4gICAgICAgICAgICAgIGluY3JlbWVudEZhdm9yaXRlQ2xpY2tDb3VudCgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAge2ZpcnN0TmFtZX0ge2xhc3ROYW1lfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9oND5cbiAgICAgICAgPHNwYW4+e2Jpb308L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyRGV0YWlsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==