(function() {
var exports = {};
exports.id = "pages/ImageChangeOnMouseOver";
exports.ids = ["pages/ImageChangeOnMouseOver"];
exports.modules = {

/***/ "./pages/ImageChangeOnMouseOver.js":
/*!*****************************************!*\
  !*** ./pages/ImageChangeOnMouseOver.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ImageToggleOnMouseOver */ "./src/ImageToggleOnMouseOver.js");

var _jsxFileName = "C:\\Users\\jadek\\DevMtn\\Week3\\Assignments\\react-hooks\\pages\\ImageChangeOnMouseOver.js";



const ImageChangeOnMouseOver = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_2__.default, {
      primaryImg: "/speakers/bw/Speaker-187.jpg",
      secondaryImg: "/speakers/Speaker-187.jpg",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined), "\xA0\xA0\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_ImageToggleOnMouseOver__WEBPACK_IMPORTED_MODULE_2__.default, {
      primaryImg: "/speakers/bw/Speaker-1124.jpg",
      secondaryImg: "/speakers/Speaker-1124.jpg",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ImageChangeOnMouseOver);

/***/ }),

/***/ "./src/ImageToggleOnMouseOver.js":
/*!***************************************!*\
  !*** ./src/ImageToggleOnMouseOver.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\jadek\\DevMtn\\Week3\\Assignments\\react-hooks\\src\\ImageToggleOnMouseOver.js";


const ImageToggleOnMouseOver = ({
  primaryImg,
  secondaryImg
}) => {
  const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    onMouseOver: () => {
      imageRef.current.src = secondaryImg;
    },
    onMouseOut: () => {
      imageRef.current.src = primaryImg;
    },
    src: primaryImg,
    alt: "",
    ref: imageRef
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOnMouseOver);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/ImageChangeOnMouseOver.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1ob29rcy8uL3BhZ2VzL0ltYWdlQ2hhbmdlT25Nb3VzZU92ZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtaG9va3MvLi9zcmMvSW1hZ2VUb2dnbGVPbk1vdXNlT3Zlci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1ob29rcy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcmVhY3QtaG9va3MvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJJbWFnZUNoYW5nZU9uTW91c2VPdmVyIiwiSW1hZ2VUb2dnbGVPbk1vdXNlT3ZlciIsInByaW1hcnlJbWciLCJzZWNvbmRhcnlJbWciLCJpbWFnZVJlZiIsInVzZVJlZiIsImN1cnJlbnQiLCJzcmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsc0JBQXNCLEdBQUcsTUFBTTtBQUNqQyxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLGdFQUFEO0FBQ0ksZ0JBQVUsRUFBQyw4QkFEZjtBQUVJLGtCQUFZLEVBQUMsMkJBRmpCO0FBR0ksU0FBRyxFQUFDO0FBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESiwrQkFPSSw4REFBQyxnRUFBRDtBQUNJLGdCQUFVLEVBQUMsK0JBRGY7QUFFSSxrQkFBWSxFQUFDLDRCQUZqQjtBQUdJLFNBQUcsRUFBQztBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFlSCxDQWhCRDs7QUFrQkEsK0RBQWVBLHNCQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTs7QUFFQSxNQUFNQyxzQkFBc0IsR0FBRyxDQUFDO0FBQUVDLFlBQUY7QUFBY0M7QUFBZCxDQUFELEtBQWtDO0FBQzdELFFBQU1DLFFBQVEsR0FBR0MsNkNBQU0sQ0FBQyxJQUFELENBQXZCO0FBRUEsc0JBQ0k7QUFDSSxlQUFXLEVBQUUsTUFBTTtBQUNmRCxjQUFRLENBQUNFLE9BQVQsQ0FBaUJDLEdBQWpCLEdBQXVCSixZQUF2QjtBQUNILEtBSEw7QUFJSSxjQUFVLEVBQUUsTUFBTTtBQUNkQyxjQUFRLENBQUNFLE9BQVQsQ0FBaUJDLEdBQWpCLEdBQXVCTCxVQUF2QjtBQUNILEtBTkw7QUFPSSxPQUFHLEVBQUVBLFVBUFQ7QUFRSSxPQUFHLEVBQUMsRUFSUjtBQVNJLE9BQUcsRUFBRUU7QUFUVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFhSCxDQWhCRDs7QUFrQkEsK0RBQWVILHNCQUFmLEU7Ozs7Ozs7Ozs7O0FDcEJBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL0ltYWdlQ2hhbmdlT25Nb3VzZU92ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZVRvZ2dsZU9uTW91c2VPdmVyIGZyb20gXCIuLi9zcmMvSW1hZ2VUb2dnbGVPbk1vdXNlT3ZlclwiO1xyXG5cclxuY29uc3QgSW1hZ2VDaGFuZ2VPbk1vdXNlT3ZlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEltYWdlVG9nZ2xlT25Nb3VzZU92ZXIgXHJcbiAgICAgICAgICAgICAgICBwcmltYXJ5SW1nPVwiL3NwZWFrZXJzL2J3L1NwZWFrZXItMTg3LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICBzZWNvbmRhcnlJbWc9XCIvc3BlYWtlcnMvU3BlYWtlci0xODcuanBnXCIgXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIiBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgIDxJbWFnZVRvZ2dsZU9uTW91c2VPdmVyIFxyXG4gICAgICAgICAgICAgICAgcHJpbWFyeUltZz1cIi9zcGVha2Vycy9idy9TcGVha2VyLTExMjQuanBnXCJcclxuICAgICAgICAgICAgICAgIHNlY29uZGFyeUltZz1cIi9zcGVha2Vycy9TcGVha2VyLTExMjQuanBnXCIgXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIiBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNoYW5nZU9uTW91c2VPdmVyOyIsImltcG9ydCBSZWFjdCwge3VzZVJlZn0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBJbWFnZVRvZ2dsZU9uTW91c2VPdmVyID0gKHsgcHJpbWFyeUltZywgc2Vjb25kYXJ5SW1nIH0pID0+IHtcclxuICAgIGNvbnN0IGltYWdlUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VSZWYuY3VycmVudC5zcmMgPSBzZWNvbmRhcnlJbWc7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uTW91c2VPdXQ9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGltYWdlUmVmLmN1cnJlbnQuc3JjID0gcHJpbWFyeUltZztcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3JjPXtwcmltYXJ5SW1nfVxyXG4gICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICByZWY9e2ltYWdlUmVmfVxyXG4gICAgICAgIC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VUb2dnbGVPbk1vdXNlT3ZlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9