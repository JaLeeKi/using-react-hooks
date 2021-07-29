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
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\jadek\\DevMtn\\Week3\\Demos\\using-react-hooks\\More-React-Hooks\\src\\SpeakerDetail.js",
    _this = undefined;



var SpeakerDetail = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(_c = function _c(_ref) {
  var id = _ref.id,
      firstName = _ref.firstName,
      lastName = _ref.lastName,
      favorite = _ref.favorite,
      bio = _ref.bio,
      onHeartFavoriteHandler = _ref.onHeartFavoriteHandler;
  console.log("SpeakerDetail:".concat(id, " ").concat(firstName, " ").concat(lastName, " ").concat(favorite));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "card col-4 cardmin",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__.default, {
      className: "card-img-top",
      primaryImg: "/static/speakers/bw/Speaker-".concat(id, ".jpg"),
      secondaryImg: "/static/speakers/Speaker-".concat(id, ".jpg"),
      alt: "".concat(firstName, "  ").concat(lastName)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card-body",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        className: "card-title",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          "data-sessionid": id,
          className: favorite ? 'heartredbutton' : 'heartdarkbutton',
          onClick: function onClick(e) {
            onHeartFavoriteHandler(e, !favorite);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: [firstName, " ", lastName]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJEZXRhaWwuanMiXSwibmFtZXMiOlsiU3BlYWtlckRldGFpbCIsIlJlYWN0IiwiaWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImZhdm9yaXRlIiwiYmlvIiwib25IZWFydEZhdm9yaXRlSGFuZGxlciIsImNvbnNvbGUiLCJsb2ciLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxnQkFBR0MsaURBQUEsTUFBVyxrQkFPM0I7QUFBQSxNQU5KQyxFQU1JLFFBTkpBLEVBTUk7QUFBQSxNQUxKQyxTQUtJLFFBTEpBLFNBS0k7QUFBQSxNQUpKQyxRQUlJLFFBSkpBLFFBSUk7QUFBQSxNQUhKQyxRQUdJLFFBSEpBLFFBR0k7QUFBQSxNQUZKQyxHQUVJLFFBRkpBLEdBRUk7QUFBQSxNQURKQyxzQkFDSSxRQURKQSxzQkFDSTtBQUVKQyxTQUFPLENBQUNDLEdBQVIseUJBQTZCUCxFQUE3QixjQUFtQ0MsU0FBbkMsY0FBZ0RDLFFBQWhELGNBQTREQyxRQUE1RDtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUEsNEJBQ0UsOERBQUMseURBQUQ7QUFDRSxlQUFTLEVBQUMsY0FEWjtBQUVFLGdCQUFVLHdDQUFpQ0gsRUFBakMsU0FGWjtBQUdFLGtCQUFZLHFDQUE4QkEsRUFBOUIsU0FIZDtBQUlFLFNBQUcsWUFBS0MsU0FBTCxlQUFtQkMsUUFBbkI7QUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFPRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLFlBQWQ7QUFBQSxnQ0FDRTtBQUNFLDRCQUFnQkYsRUFEbEI7QUFFRSxtQkFBUyxFQUFFRyxRQUFRLEdBQUcsZ0JBQUgsR0FBc0IsaUJBRjNDO0FBR0UsaUJBQU8sRUFBRSxpQkFBQ0ssQ0FBRCxFQUFPO0FBQ2RILGtDQUFzQixDQUFDRyxDQUFELEVBQUksQ0FBQ0wsUUFBTCxDQUF0QjtBQUNEO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVFFO0FBQUEscUJBQ0dGLFNBREgsT0FDZUMsUUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFhRTtBQUFBLGtCQUFPRTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlCRCxDQXBDcUIsQ0FBdEI7TUFBTU4sYTtBQXNDTiwrREFBZUEsYUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hYmU1NzBjNzVkODUxMzk4OTQ4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlVG9nZ2xlT25TY3JvbGwgZnJvbSAnLi9JbWFnZVRvZ2dsZU9uU2Nyb2xsJztcblxuY29uc3QgU3BlYWtlckRldGFpbCA9IFJlYWN0Lm1lbW8oKHtcbiAgaWQsXG4gIGZpcnN0TmFtZSxcbiAgbGFzdE5hbWUsXG4gIGZhdm9yaXRlLFxuICBiaW8sXG4gIG9uSGVhcnRGYXZvcml0ZUhhbmRsZXIsXG59KSA9PiB7XG5cbiAgY29uc29sZS5sb2coYFNwZWFrZXJEZXRhaWw6JHtpZH0gJHtmaXJzdE5hbWV9ICR7bGFzdE5hbWV9ICR7ZmF2b3JpdGV9YCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY29sLTQgY2FyZG1pblwiPlxuICAgICAgPEltYWdlVG9nZ2xlT25TY3JvbGxcbiAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCJcbiAgICAgICAgcHJpbWFyeUltZz17YC9zdGF0aWMvc3BlYWtlcnMvYncvU3BlYWtlci0ke2lkfS5qcGdgfVxuICAgICAgICBzZWNvbmRhcnlJbWc9e2Avc3RhdGljL3NwZWFrZXJzL1NwZWFrZXItJHtpZH0uanBnYH1cbiAgICAgICAgYWx0PXtgJHtmaXJzdE5hbWV9ICAke2xhc3ROYW1lfWB9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBkYXRhLXNlc3Npb25pZD17aWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Zhdm9yaXRlID8gJ2hlYXJ0cmVkYnV0dG9uJyA6ICdoZWFydGRhcmtidXR0b24nfVxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgb25IZWFydEZhdm9yaXRlSGFuZGxlcihlLCAhZmF2b3JpdGUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAge2ZpcnN0TmFtZX0ge2xhc3ROYW1lfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9oND5cbiAgICAgICAgPHNwYW4+e2Jpb308L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyRGV0YWlsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==