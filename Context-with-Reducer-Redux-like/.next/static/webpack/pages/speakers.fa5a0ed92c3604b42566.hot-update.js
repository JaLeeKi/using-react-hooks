self["webpackHotUpdate_N_E"]("pages/speakers",{

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
/* harmony import */ var _GlobalState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GlobalState */ "./src/GlobalState.js");
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

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_GlobalState__WEBPACK_IMPORTED_MODULE_4__.GlobalContext),
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
      lineNumber: 15,
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
          lineNumber: 23,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [firstName, " ", lastName]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJEZXRhaWwuanMiXSwibmFtZXMiOlsiU3BlYWtlckRldGFpbCIsIlJlYWN0Iiwic3BlYWtlclJlYyIsIm9uSGVhcnRGYXZvcml0ZUhhbmRsZXIiLCJpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiYmlvIiwiZmF2b3JpdGUiLCJjb25zb2xlIiwibG9nIiwidXNlQ29udGV4dCIsIkdsb2JhbENvbnRleHQiLCJpbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnQiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxnQkFBR0MsaURBQUEsU0FBVyxnQkFBNEM7QUFBQTs7QUFBQSxNQUF6Q0MsVUFBeUMsUUFBekNBLFVBQXlDO0FBQUEsTUFBN0JDLHNCQUE2QixRQUE3QkEsc0JBQTZCO0FBQUEsTUFDbkVDLEVBRG1FLEdBQ3hCRixVQUR3QixDQUNuRUUsRUFEbUU7QUFBQSxNQUMvREMsU0FEK0QsR0FDeEJILFVBRHdCLENBQy9ERyxTQUQrRDtBQUFBLE1BQ3BEQyxRQURvRCxHQUN4QkosVUFEd0IsQ0FDcERJLFFBRG9EO0FBQUEsTUFDMUNDLEdBRDBDLEdBQ3hCTCxVQUR3QixDQUMxQ0ssR0FEMEM7QUFBQSxNQUNyQ0MsUUFEcUMsR0FDeEJOLFVBRHdCLENBQ3JDTSxRQURxQztBQUUzRUMsU0FBTyxDQUFDQyxHQUFSLHlCQUE2Qk4sRUFBN0IsY0FBbUNDLFNBQW5DLGNBQWdEQyxRQUFoRCxjQUE0REUsUUFBNUQ7O0FBRjJFLG9CQUluQ0csaURBQVUsQ0FBQ0MsdURBQUQsQ0FKeUI7QUFBQSxNQUluRUMsMkJBSm1FLGVBSW5FQSwyQkFKbUU7O0FBTTNFLHNCQUNFO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUEsNEJBQ0UsOERBQUMseURBQUQ7QUFDRSxlQUFTLEVBQUMsY0FEWjtBQUVFLGdCQUFVLHdDQUFpQ1QsRUFBakMsU0FGWjtBQUdFLGtCQUFZLHFDQUE4QkEsRUFBOUIsU0FIZDtBQUlFLFNBQUcsRUFBQztBQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU9FO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsWUFBZDtBQUFBLGdDQUNFO0FBQ0UsbUJBQVMsRUFBRUksUUFBUSxHQUFHLGdCQUFILEdBQXNCLGlCQUQzQztBQUVFLGlCQUFPLEVBQUUsaUJBQUNNLENBQUQsRUFBTztBQUNkWCxrQ0FBc0IsQ0FBQ1csQ0FBRCxFQUFJWixVQUFKLENBQXRCO0FBQ0FXLHVDQUEyQjtBQUM1QjtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFRRTtBQUFBLHFCQUNHUixTQURILE9BQ2VDLFFBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBYUU7QUFBQSxrQkFBT0M7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5QkQsQ0EvQnFCLGtDQUF0QjtNQUFNUCxhO0FBaUNOLCtEQUFlQSxhQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLmZhNWEwZWQ5MmMzNjA0YjQyNTY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZVRvZ2dsZU9uU2Nyb2xsIGZyb20gJy4vSW1hZ2VUb2dnbGVPblNjcm9sbCc7XG5pbXBvcnQgdXNlU3BlYWtlckRhdGFNYW5hZ2VyIGZyb20gJy4vdXNlU3BlYWtlckRhdGFNYW5hZ2VyJztcbmltcG9ydCB7IEdsb2JhbENvbnRleHQgfSBmcm9tICcuL0dsb2JhbFN0YXRlJztcblxuY29uc3QgU3BlYWtlckRldGFpbCA9IFJlYWN0Lm1lbW8oKHsgc3BlYWtlclJlYywgb25IZWFydEZhdm9yaXRlSGFuZGxlciB9KSA9PiB7XG4gIGNvbnN0IHsgaWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGJpbywgZmF2b3JpdGUgfSA9IHNwZWFrZXJSZWM7XG4gIGNvbnNvbGUubG9nKGBTcGVha2VyRGV0YWlsOiR7aWR9ICR7Zmlyc3ROYW1lfSAke2xhc3ROYW1lfSAke2Zhdm9yaXRlfWApO1xuXG4gIGNvbnN0IHsgaW5jcmVtZW50RmF2b3JpdGVDbGlja0NvdW50IH0gPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNvbC00IGNhcmRtaW5cIj5cbiAgICAgIDxJbWFnZVRvZ2dsZU9uU2Nyb2xsXG4gICAgICAgIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiXG4gICAgICAgIHByaW1hcnlJbWc9e2Avc3RhdGljL3NwZWFrZXJzL2J3L1NwZWFrZXItJHtpZH0uanBnYH1cbiAgICAgICAgc2Vjb25kYXJ5SW1nPXtgL3N0YXRpYy9zcGVha2Vycy9TcGVha2VyLSR7aWR9LmpwZ2B9XG4gICAgICAgIGFsdD1cIntmaXJzdE5hbWV9IHtsYXN0TmFtZX1cIlxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtmYXZvcml0ZSA/ICdoZWFydHJlZGJ1dHRvbicgOiAnaGVhcnRkYXJrYnV0dG9uJ31cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIG9uSGVhcnRGYXZvcml0ZUhhbmRsZXIoZSwgc3BlYWtlclJlYyk7XG4gICAgICAgICAgICAgIGluY3JlbWVudEZhdm9yaXRlQ2xpY2tDb3VudCgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAge2ZpcnN0TmFtZX0ge2xhc3ROYW1lfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9oND5cbiAgICAgICAgPHNwYW4+e2Jpb308L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyRGV0YWlsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==