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

  var _useSpeakerDataManage = (0,_useSpeakerDataManager__WEBPACK_IMPORTED_MODULE_3__.default)(),
      favoriteClickCount = _useSpeakerDataManage.favoriteClickCount,
      incrementFavoriteClickCount = _useSpeakerDataManage.incrementFavoriteClickCount;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "card col-4 cardmin",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__.default, {
      className: "card-img-top",
      primaryImg: "/static/speakers/bw/Speaker-".concat(id, ".jpg"),
      secondaryImg: "/static/speakers/Speaker-".concat(id, ".jpg"),
      alt: "{firstName} {lastName}"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
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
          lineNumber: 21,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [firstName, " ", lastName]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: ["Click Count: ", favoriteClickCount]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
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
      lineNumber: 19,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, _this);
}, "87q3qzLNCAlC/fNeKElN2RdpjFo=", false, function () {
  return [_useSpeakerDataManager__WEBPACK_IMPORTED_MODULE_3__.default];
}));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJEZXRhaWwuanMiXSwibmFtZXMiOlsiU3BlYWtlckRldGFpbCIsIlJlYWN0Iiwic3BlYWtlclJlYyIsIm9uSGVhcnRGYXZvcml0ZUhhbmRsZXIiLCJpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiYmlvIiwiZmF2b3JpdGUiLCJjb25zb2xlIiwibG9nIiwidXNlU3BlYWtlckRhdGFNYW5hZ2VyIiwiZmF2b3JpdGVDbGlja0NvdW50IiwiaW5jcmVtZW50RmF2b3JpdGVDbGlja0NvdW50IiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLGdCQUFHQyxpREFBQSxTQUFXLGdCQUE0QztBQUFBOztBQUFBLE1BQXpDQyxVQUF5QyxRQUF6Q0EsVUFBeUM7QUFBQSxNQUE3QkMsc0JBQTZCLFFBQTdCQSxzQkFBNkI7QUFBQSxNQUNuRUMsRUFEbUUsR0FDeEJGLFVBRHdCLENBQ25FRSxFQURtRTtBQUFBLE1BQy9EQyxTQUQrRCxHQUN4QkgsVUFEd0IsQ0FDL0RHLFNBRCtEO0FBQUEsTUFDcERDLFFBRG9ELEdBQ3hCSixVQUR3QixDQUNwREksUUFEb0Q7QUFBQSxNQUMxQ0MsR0FEMEMsR0FDeEJMLFVBRHdCLENBQzFDSyxHQUQwQztBQUFBLE1BQ3JDQyxRQURxQyxHQUN4Qk4sVUFEd0IsQ0FDckNNLFFBRHFDO0FBRTNFQyxTQUFPLENBQUNDLEdBQVIseUJBQTZCTixFQUE3QixjQUFtQ0MsU0FBbkMsY0FBZ0RDLFFBQWhELGNBQTRERSxRQUE1RDs7QUFGMkUsOEJBSWZHLCtEQUFxQixFQUpOO0FBQUEsTUFJbkVDLGtCQUptRSx5QkFJbkVBLGtCQUptRTtBQUFBLE1BSS9DQywyQkFKK0MseUJBSS9DQSwyQkFKK0M7O0FBTTNFLHNCQUNFO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUEsNEJBQ0UsOERBQUMseURBQUQ7QUFDRSxlQUFTLEVBQUMsY0FEWjtBQUVFLGdCQUFVLHdDQUFpQ1QsRUFBakMsU0FGWjtBQUdFLGtCQUFZLHFDQUE4QkEsRUFBOUIsU0FIZDtBQUlFLFNBQUcsRUFBQztBQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU9FO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsWUFBZDtBQUFBLGdDQUNFO0FBQ0UsbUJBQVMsRUFBRUksUUFBUSxHQUFHLGdCQUFILEdBQXNCLGlCQUQzQztBQUVFLGlCQUFPLEVBQUUsaUJBQUNNLENBQUQsRUFBTztBQUNkWCxrQ0FBc0IsQ0FBQ1csQ0FBRCxFQUFJWixVQUFKLENBQXRCO0FBQ0FXLHVDQUEyQjtBQUM1QjtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFRRTtBQUFBLHFCQUNHUixTQURILE9BQ2VDLFFBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBYUU7QUFBQSxvQ0FBa0JNLGtCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRixlQWNFO0FBQUEsa0JBQU9MO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMEJELENBaENxQjtBQUFBLFVBSXdDSSwyREFKeEM7QUFBQSxHQUF0QjtNQUFNWCxhO0FBa0NOLCtEQUFlQSxhQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLjViMDVhMjVkMDE4MWNkOTE0NWI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlVG9nZ2xlT25TY3JvbGwgZnJvbSAnLi9JbWFnZVRvZ2dsZU9uU2Nyb2xsJztcbmltcG9ydCB1c2VTcGVha2VyRGF0YU1hbmFnZXIgZnJvbSAnLi91c2VTcGVha2VyRGF0YU1hbmFnZXInO1xuXG5jb25zdCBTcGVha2VyRGV0YWlsID0gUmVhY3QubWVtbygoeyBzcGVha2VyUmVjLCBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyIH0pID0+IHtcbiAgY29uc3QgeyBpZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgYmlvLCBmYXZvcml0ZSB9ID0gc3BlYWtlclJlYztcbiAgY29uc29sZS5sb2coYFNwZWFrZXJEZXRhaWw6JHtpZH0gJHtmaXJzdE5hbWV9ICR7bGFzdE5hbWV9ICR7ZmF2b3JpdGV9YCk7XG5cbiAgY29uc3QgeyBmYXZvcml0ZUNsaWNrQ291bnQsIGluY3JlbWVudEZhdm9yaXRlQ2xpY2tDb3VudCB9ID0gdXNlU3BlYWtlckRhdGFNYW5hZ2VyKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY29sLTQgY2FyZG1pblwiPlxuICAgICAgPEltYWdlVG9nZ2xlT25TY3JvbGxcbiAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCJcbiAgICAgICAgcHJpbWFyeUltZz17YC9zdGF0aWMvc3BlYWtlcnMvYncvU3BlYWtlci0ke2lkfS5qcGdgfVxuICAgICAgICBzZWNvbmRhcnlJbWc9e2Avc3RhdGljL3NwZWFrZXJzL1NwZWFrZXItJHtpZH0uanBnYH1cbiAgICAgICAgYWx0PVwie2ZpcnN0TmFtZX0ge2xhc3ROYW1lfVwiXG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Zhdm9yaXRlID8gJ2hlYXJ0cmVkYnV0dG9uJyA6ICdoZWFydGRhcmtidXR0b24nfVxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgb25IZWFydEZhdm9yaXRlSGFuZGxlcihlLCBzcGVha2VyUmVjKTtcbiAgICAgICAgICAgICAgaW5jcmVtZW50RmF2b3JpdGVDbGlja0NvdW50KCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICB7Zmlyc3ROYW1lfSB7bGFzdE5hbWV9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2g0PlxuICAgICAgICA8aDU+Q2xpY2sgQ291bnQ6IHtmYXZvcml0ZUNsaWNrQ291bnR9PC9oNT5cbiAgICAgICAgPHNwYW4+e2Jpb308L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyRGV0YWlsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==