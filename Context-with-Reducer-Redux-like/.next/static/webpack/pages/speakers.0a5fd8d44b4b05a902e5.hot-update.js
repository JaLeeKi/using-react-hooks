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
      favoriteClickCount = _useContext.favoriteClickCount,
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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: ["Click Count: ", favoriteClickCount]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
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
}, "/CCnw9wEOUGPusziLsLxQyNIMPc="));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJEZXRhaWwuanMiXSwibmFtZXMiOlsiU3BlYWtlckRldGFpbCIsIlJlYWN0Iiwic3BlYWtlclJlYyIsIm9uSGVhcnRGYXZvcml0ZUhhbmRsZXIiLCJpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiYmlvIiwiZmF2b3JpdGUiLCJjb25zb2xlIiwibG9nIiwidXNlQ29udGV4dCIsIkdsb2JhbENvbnRleHQiLCJmYXZvcml0ZUNsaWNrQ291bnQiLCJpbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnQiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxnQkFBR0MsaURBQUEsU0FBVyxnQkFBNEM7QUFBQTs7QUFBQSxNQUF6Q0MsVUFBeUMsUUFBekNBLFVBQXlDO0FBQUEsTUFBN0JDLHNCQUE2QixRQUE3QkEsc0JBQTZCO0FBQUEsTUFDbkVDLEVBRG1FLEdBQ3hCRixVQUR3QixDQUNuRUUsRUFEbUU7QUFBQSxNQUMvREMsU0FEK0QsR0FDeEJILFVBRHdCLENBQy9ERyxTQUQrRDtBQUFBLE1BQ3BEQyxRQURvRCxHQUN4QkosVUFEd0IsQ0FDcERJLFFBRG9EO0FBQUEsTUFDMUNDLEdBRDBDLEdBQ3hCTCxVQUR3QixDQUMxQ0ssR0FEMEM7QUFBQSxNQUNyQ0MsUUFEcUMsR0FDeEJOLFVBRHdCLENBQ3JDTSxRQURxQztBQUUzRUMsU0FBTyxDQUFDQyxHQUFSLHlCQUE2Qk4sRUFBN0IsY0FBbUNDLFNBQW5DLGNBQWdEQyxRQUFoRCxjQUE0REUsUUFBNUQ7O0FBRjJFLG9CQUlmRyxpREFBVSxDQUFDQyx1REFBRCxDQUpLO0FBQUEsTUFJbkVDLGtCQUptRSxlQUluRUEsa0JBSm1FO0FBQUEsTUFJL0NDLDJCQUorQyxlQUkvQ0EsMkJBSitDOztBQU0zRSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBLDRCQUNFLDhEQUFDLHlEQUFEO0FBQ0UsZUFBUyxFQUFDLGNBRFo7QUFFRSxnQkFBVSx3Q0FBaUNWLEVBQWpDLFNBRlo7QUFHRSxrQkFBWSxxQ0FBOEJBLEVBQTlCLFNBSGQ7QUFJRSxTQUFHLEVBQUM7QUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLFlBQWQ7QUFBQSxnQ0FDRTtBQUNFLG1CQUFTLEVBQUVJLFFBQVEsR0FBRyxnQkFBSCxHQUFzQixpQkFEM0M7QUFFRSxpQkFBTyxFQUFFLGlCQUFDTyxDQUFELEVBQU87QUFDZFosa0NBQXNCLENBQUNZLENBQUQsRUFBSWIsVUFBSixDQUF0QjtBQUNBWSx1Q0FBMkI7QUFDNUI7QUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBUUU7QUFBQSxxQkFDR1QsU0FESCxPQUNlQyxRQURmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQWFFO0FBQUEsb0NBQWtCTyxrQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkYsZUFjRTtBQUFBLGtCQUFPTjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQWhDcUIsa0NBQXRCO01BQU1QLGE7QUFrQ04sK0RBQWVBLGFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuMGE1ZmQ4ZDQ0YjRiMDVhOTAyZTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlVG9nZ2xlT25TY3JvbGwgZnJvbSAnLi9JbWFnZVRvZ2dsZU9uU2Nyb2xsJztcbmltcG9ydCB1c2VTcGVha2VyRGF0YU1hbmFnZXIgZnJvbSAnLi91c2VTcGVha2VyRGF0YU1hbmFnZXInO1xuaW1wb3J0IHsgR2xvYmFsQ29udGV4dCB9IGZyb20gJy4vR2xvYmFsU3RhdGUnO1xuXG5jb25zdCBTcGVha2VyRGV0YWlsID0gUmVhY3QubWVtbygoeyBzcGVha2VyUmVjLCBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyIH0pID0+IHtcbiAgY29uc3QgeyBpZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgYmlvLCBmYXZvcml0ZSB9ID0gc3BlYWtlclJlYztcbiAgY29uc29sZS5sb2coYFNwZWFrZXJEZXRhaWw6JHtpZH0gJHtmaXJzdE5hbWV9ICR7bGFzdE5hbWV9ICR7ZmF2b3JpdGV9YCk7XG5cbiAgY29uc3QgeyBmYXZvcml0ZUNsaWNrQ291bnQsIGluY3JlbWVudEZhdm9yaXRlQ2xpY2tDb3VudCB9ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjb2wtNCBjYXJkbWluXCI+XG4gICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbFxuICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIlxuICAgICAgICBwcmltYXJ5SW1nPXtgL3N0YXRpYy9zcGVha2Vycy9idy9TcGVha2VyLSR7aWR9LmpwZ2B9XG4gICAgICAgIHNlY29uZGFyeUltZz17YC9zdGF0aWMvc3BlYWtlcnMvU3BlYWtlci0ke2lkfS5qcGdgfVxuICAgICAgICBhbHQ9XCJ7Zmlyc3ROYW1lfSB7bGFzdE5hbWV9XCJcbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17ZmF2b3JpdGUgPyAnaGVhcnRyZWRidXR0b24nIDogJ2hlYXJ0ZGFya2J1dHRvbid9XG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyKGUsIHNwZWFrZXJSZWMpO1xuICAgICAgICAgICAgICBpbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnQoKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIHtmaXJzdE5hbWV9IHtsYXN0TmFtZX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvaDQ+XG4gICAgICAgIDxoNT5DbGljayBDb3VudDoge2Zhdm9yaXRlQ2xpY2tDb3VudH08L2g1PlxuICAgICAgICA8c3Bhbj57YmlvfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJEZXRhaWw7XG4iXSwic291cmNlUm9vdCI6IiJ9