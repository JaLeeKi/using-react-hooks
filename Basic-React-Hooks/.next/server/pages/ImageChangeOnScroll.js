(function() {
var exports = {};
exports.id = "pages/ImageChangeOnScroll";
exports.ids = ["pages/ImageChangeOnScroll"];
exports.modules = {

/***/ "./pages/ImageChangeOnScroll.js":
/*!**************************************!*\
  !*** ./pages/ImageChangeOnScroll.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ImageToggleOnScroll */ "./src/ImageToggleOnScroll.js");

var _jsxFileName = "C:\\Users\\jadek\\DevMtn\\Week3\\Assignments\\react-hooks\\pages\\ImageChangeOnScroll.js";



const ImageChangeOnScroll = () => {
  const {
    0: currentSpeakerId,
    1: setCurrentSpeakerId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: mouseEventCnt,
    1: setMouseEventCnt
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    window.document.title = `SpeakerId: ${currentSpeakerId}`;
    console.log(`useEffect: setting title to ${currentSpeakerId}`);
  }, [currentSpeakerId]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: ["mouseEventCnt: $", mouseEventCnt]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined), [1124, 187, 823, 1269, 1530].map(speakerId => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        onMouseOver: () => {
          setCurrentSpeakerId(speakerId);
          setMouseEventCnt(mouseEventCnt + 1);
          console.log(`onMouseOver:${speakerId}`);
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__.default, {
          primaryImg: `speakers/bw/Speaker-${speakerId}.jpg`,
          secondaryImg: `speakers/Speaker-${speakerId}.jpg`,
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 25
        }, undefined)
      }, speakerId, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }, undefined);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ImageChangeOnScroll);

/***/ }),

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\jadek\\DevMtn\\Week3\\Assignments\\react-hooks\\src\\ImageToggleOnScroll.js";


const ImageToggleOnScroll = ({
  primaryImg,
  secondaryImg
}) => {
  const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const {
    0: inView,
    1: setInView
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setIsLoading(false);
    setInView(isInView());
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    setInView(isInView());
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    src: isLoading ? 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==' // 1x1gif
    : inView ? secondaryImg : primaryImg,
    alt: "",
    ref: imageRef
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ImageToggleOnScroll);

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
var __webpack_exports__ = (__webpack_exec__("./pages/ImageChangeOnScroll.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1ob29rcy8uL3BhZ2VzL0ltYWdlQ2hhbmdlT25TY3JvbGwuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtaG9va3MvLi9zcmMvSW1hZ2VUb2dnbGVPblNjcm9sbC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1ob29rcy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcmVhY3QtaG9va3MvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJJbWFnZUNoYW5nZU9uU2Nyb2xsIiwiY3VycmVudFNwZWFrZXJJZCIsInNldEN1cnJlbnRTcGVha2VySWQiLCJ1c2VTdGF0ZSIsIm1vdXNlRXZlbnRDbnQiLCJzZXRNb3VzZUV2ZW50Q250IiwidXNlRWZmZWN0Iiwid2luZG93IiwiZG9jdW1lbnQiLCJ0aXRsZSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJzcGVha2VySWQiLCJJbWFnZVRvZ2dsZU9uU2Nyb2xsIiwicHJpbWFyeUltZyIsInNlY29uZGFyeUltZyIsImltYWdlUmVmIiwidXNlUmVmIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaXNJblZpZXciLCJyZWN0IiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImJvdHRvbSIsImlubmVySGVpZ2h0IiwiaW5WaWV3Iiwic2V0SW5WaWV3IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLG1CQUFtQixHQUFHLE1BQU07QUFDOUIsUUFBTTtBQUFBLE9BQUNDLGdCQUFEO0FBQUEsT0FBbUJDO0FBQW5CLE1BQTBDQywrQ0FBUSxDQUFDLENBQUQsQ0FBeEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsYUFBRDtBQUFBLE9BQWdCQztBQUFoQixNQUFvQ0YsK0NBQVEsQ0FBQyxDQUFELENBQWxEO0FBRUFHLGtEQUFTLENBQUMsTUFBTTtBQUNaQyxVQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLEtBQWhCLEdBQXlCLGNBQWFSLGdCQUFpQixFQUF2RDtBQUNBUyxXQUFPLENBQUNDLEdBQVIsQ0FBYSwrQkFBOEJWLGdCQUFpQixFQUE1RDtBQUNILEdBSFEsRUFHTixDQUFDQSxnQkFBRCxDQUhNLENBQVQ7QUFLQSxzQkFDSTtBQUFBLDRCQUNJO0FBQUEscUNBQXVCRyxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUFFSyxDQUFDLElBQUQsRUFBTyxHQUFQLEVBQVksR0FBWixFQUFpQixJQUFqQixFQUF1QixJQUF2QixFQUE2QlEsR0FBN0IsQ0FBa0NDLFNBQUQsSUFBZTtBQUM3QywwQkFDSTtBQUNJLG1CQUFXLEVBQUksTUFBTTtBQUNqQlgsNkJBQW1CLENBQUNXLFNBQUQsQ0FBbkI7QUFDQVIsMEJBQWdCLENBQUNELGFBQWEsR0FBRyxDQUFqQixDQUFoQjtBQUNBTSxpQkFBTyxDQUFDQyxHQUFSLENBQWEsZUFBY0UsU0FBVSxFQUFyQztBQUNILFNBTEw7QUFBQSwrQkFPSSw4REFBQyw2REFBRDtBQUNJLG9CQUFVLEVBQUcsdUJBQXNCQSxTQUFVLE1BRGpEO0FBRUksc0JBQVksRUFBRyxvQkFBbUJBLFNBQVUsTUFGaEQ7QUFHSSxhQUFHLEVBQUM7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEosU0FBVUEsU0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKO0FBZUgsS0FoQkEsQ0FGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQXNCSCxDQS9CRDs7QUFpQ0EsK0RBQWViLG1CQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTs7QUFFQSxNQUFNYyxtQkFBbUIsR0FBRyxDQUFDO0FBQUVDLFlBQUY7QUFBY0M7QUFBZCxDQUFELEtBQWtDO0FBQzFELFFBQU1DLFFBQVEsR0FBR0MsNkNBQU0sQ0FBQyxJQUFELENBQXZCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCakIsK0NBQVEsQ0FBQyxJQUFELENBQTFDOztBQUNBLFFBQU1rQixRQUFRLEdBQUcsTUFBTTtBQUNuQixVQUFNQyxJQUFJLEdBQUdMLFFBQVEsQ0FBQ00sT0FBVCxDQUFpQkMscUJBQWpCLEVBQWI7QUFDQSxXQUFPRixJQUFJLENBQUNHLEdBQUwsSUFBWSxDQUFaLElBQWlCSCxJQUFJLENBQUNJLE1BQUwsSUFBZW5CLE1BQU0sQ0FBQ29CLFdBQTlDO0FBQ0gsR0FIRDs7QUFJQSxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0IxQiwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEM7QUFFQUcsa0RBQVMsQ0FBQyxNQUFNO0FBQ1pjLGdCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FTLGFBQVMsQ0FBQ1IsUUFBUSxFQUFULENBQVQ7QUFDQWQsVUFBTSxDQUFDdUIsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NDLGFBQWxDO0FBQ0EsV0FBTyxNQUFNO0FBQ1R4QixZQUFNLENBQUN5QixtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0QsYUFBckM7QUFDSCxLQUZEO0FBR0gsR0FQUSxFQU9OLEVBUE0sQ0FBVDs7QUFTQSxRQUFNQSxhQUFhLEdBQUcsTUFBTTtBQUN4QkYsYUFBUyxDQUFDUixRQUFRLEVBQVQsQ0FBVDtBQUNILEdBRkQ7O0FBSUEsc0JBQ0k7QUFDSSxPQUFHLEVBQ0NGLFNBQVMsR0FDUCxvRkFETyxDQUM4RTtBQUQ5RSxNQUVQUyxNQUFNLEdBQ05aLFlBRE0sR0FFTkQsVUFOVjtBQVFJLE9BQUcsRUFBQyxFQVJSO0FBU0ksT0FBRyxFQUFFRTtBQVRUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWFILENBbkNEOztBQXFDQSwrREFBZUgsbUJBQWYsRTs7Ozs7Ozs7Ozs7QUN2Q0EsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvSW1hZ2VDaGFuZ2VPblNjcm9sbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZVRvZ2dsZU9uU2Nyb2xsIGZyb20gXCIuLi9zcmMvSW1hZ2VUb2dnbGVPblNjcm9sbFwiO1xyXG5cclxuY29uc3QgSW1hZ2VDaGFuZ2VPblNjcm9sbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtjdXJyZW50U3BlYWtlcklkLCBzZXRDdXJyZW50U3BlYWtlcklkXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW21vdXNlRXZlbnRDbnQsIHNldE1vdXNlRXZlbnRDbnRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQudGl0bGUgPSBgU3BlYWtlcklkOiAke2N1cnJlbnRTcGVha2VySWR9YDtcclxuICAgICAgICBjb25zb2xlLmxvZyhgdXNlRWZmZWN0OiBzZXR0aW5nIHRpdGxlIHRvICR7Y3VycmVudFNwZWFrZXJJZH1gKTtcclxuICAgIH0sIFtjdXJyZW50U3BlYWtlcklkXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj5tb3VzZUV2ZW50Q250OiAke21vdXNlRXZlbnRDbnR9PC9zcGFuPlxyXG4gICAgICAgICAgICB7WzExMjQsIDE4NywgODIzLCAxMjY5LCAxNTMwXS5tYXAoKHNwZWFrZXJJZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17c3BlYWtlcklkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlT3ZlciA9IHsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50U3BlYWtlcklkKHNwZWFrZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNb3VzZUV2ZW50Q250KG1vdXNlRXZlbnRDbnQgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBvbk1vdXNlT3Zlcjoke3NwZWFrZXJJZH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUltZz17YHNwZWFrZXJzL2J3L1NwZWFrZXItJHtzcGVha2VySWR9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlJbWc9e2BzcGVha2Vycy9TcGVha2VyLSR7c3BlYWtlcklkfS5qcGdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlQ2hhbmdlT25TY3JvbGw7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSW1hZ2VUb2dnbGVPblNjcm9sbCA9ICh7IHByaW1hcnlJbWcsIHNlY29uZGFyeUltZyB9KSA9PiB7XHJcbiAgICBjb25zdCBpbWFnZVJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IGlzSW5WaWV3ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlY3QgPSBpbWFnZVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHJldHVybiByZWN0LnRvcCA+PSAwICYmIHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIH07XHJcbiAgICBjb25zdCBbaW5WaWV3LCBzZXRJblZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRJblZpZXcoaXNJblZpZXcoKSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsSGFuZGxlcik7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsSGFuZGxlcik7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBzY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEluVmlldyhpc0luVmlldygpKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmdcclxuICAgICAgICAgICAgICAgID8gJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQVAvLy93QUFBQ0g1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlDUkFFQU93PT0nIC8vIDF4MWdpZlxyXG4gICAgICAgICAgICAgICAgOiBpblZpZXdcclxuICAgICAgICAgICAgICAgID8gc2Vjb25kYXJ5SW1nXHJcbiAgICAgICAgICAgICAgICA6IHByaW1hcnlJbWdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICByZWY9e2ltYWdlUmVmfVxyXG4gICAgICAgIC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VUb2dnbGVPblNjcm9sbDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9