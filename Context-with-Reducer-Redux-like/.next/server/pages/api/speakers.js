(function() {
var exports = {};
exports.id = "pages/api/speakers";
exports.ids = ["pages/api/speakers"];
exports.modules = {

/***/ "./pages/api/speakers/index.js":
/*!*************************************!*\
  !*** ./pages/api/speakers/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
//import speakerData from '../../../src/SpeakerData';



const {
  promisify
} = __webpack_require__(/*! util */ "util");

const readFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().readFile));

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function handler(req, res) {
  //res.status(200).send(JSON.stringify(speakerData,null,2));
  const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve('./', 'db.json');

  try {
    const readFileData = await readFile(jsonFile);
    await delay(1000);
    const speakers = JSON.parse(readFileData).speakers;

    if (!speakers) {
      res.status(404).send('Error: Request failed with status code 404');
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).send(JSON.stringify(speakers, null, 2));
      console.log('GET /api/speakers  status: 200');
    }
  } catch (e) {
    console.log('/api/speakers error:', e);
  }
}

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("util");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/speakers/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9wYWdlcy9hcGkvc3BlYWtlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0L2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0L2V4dGVybmFsIFwidXRpbFwiIl0sIm5hbWVzIjpbInByb21pc2lmeSIsInJlcXVpcmUiLCJyZWFkRmlsZSIsImZzIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJqc29uRmlsZSIsInBhdGgiLCJyZWFkRmlsZURhdGEiLCJzcGVha2VycyIsIkpTT04iLCJwYXJzZSIsInN0YXR1cyIsInNlbmQiLCJzZXRIZWFkZXIiLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLE1BQU07QUFBRUE7QUFBRixJQUFnQkMsbUJBQU8sQ0FBQyxrQkFBRCxDQUE3Qjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdGLFNBQVMsQ0FBQ0csb0RBQUQsQ0FBMUI7O0FBQ0EsTUFBTUMsS0FBSyxHQUFJQyxFQUFELElBQVEsSUFBSUMsT0FBSixDQUFhQyxPQUFELElBQWFDLFVBQVUsQ0FBQ0QsT0FBRCxFQUFVRixFQUFWLENBQW5DLENBQXRCOztBQUVlLGVBQWVJLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUM5QztBQUVBLFFBQU1DLFFBQVEsR0FBR0MsbURBQUEsQ0FBYSxJQUFiLEVBQW1CLFNBQW5CLENBQWpCOztBQUNBLE1BQUk7QUFDRixVQUFNQyxZQUFZLEdBQUcsTUFBTVosUUFBUSxDQUFDVSxRQUFELENBQW5DO0FBQ0EsVUFBTVIsS0FBSyxDQUFDLElBQUQsQ0FBWDtBQUNBLFVBQU1XLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILFlBQVgsRUFBeUJDLFFBQTFDOztBQUNBLFFBQUksQ0FBQ0EsUUFBTCxFQUFlO0FBQ2JKLFNBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLDRDQUFyQjtBQUNELEtBRkQsTUFFTztBQUNMUixTQUFHLENBQUNTLFNBQUosQ0FBYyxjQUFkLEVBQThCLGtCQUE5QjtBQUNBVCxTQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkgsSUFBSSxDQUFDSyxTQUFMLENBQWVOLFFBQWYsRUFBeUIsSUFBekIsRUFBK0IsQ0FBL0IsQ0FBckI7QUFDQU8sYUFBTyxDQUFDQyxHQUFSLENBQVksZ0NBQVo7QUFDRDtBQUNGLEdBWEQsQ0FXRSxPQUFPQyxDQUFQLEVBQVU7QUFDVkYsV0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVosRUFBb0NDLENBQXBDO0FBQ0Q7QUFDRixDOzs7Ozs7Ozs7OztBQzNCRCxnQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9hcGkvc3BlYWtlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBzcGVha2VyRGF0YSBmcm9tICcuLi8uLi8uLi9zcmMvU3BlYWtlckRhdGEnO1xuXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5cbmNvbnN0IHsgcHJvbWlzaWZ5IH0gPSByZXF1aXJlKCd1dGlsJyk7XG5jb25zdCByZWFkRmlsZSA9IHByb21pc2lmeShmcy5yZWFkRmlsZSk7XG5jb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAvL3Jlcy5zdGF0dXMoMjAwKS5zZW5kKEpTT04uc3RyaW5naWZ5KHNwZWFrZXJEYXRhLG51bGwsMikpO1xuXG4gIGNvbnN0IGpzb25GaWxlID0gcGF0aC5yZXNvbHZlKCcuLycsICdkYi5qc29uJyk7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVhZEZpbGVEYXRhID0gYXdhaXQgcmVhZEZpbGUoanNvbkZpbGUpO1xuICAgIGF3YWl0IGRlbGF5KDEwMDApO1xuICAgIGNvbnN0IHNwZWFrZXJzID0gSlNPTi5wYXJzZShyZWFkRmlsZURhdGEpLnNwZWFrZXJzO1xuICAgIGlmICghc3BlYWtlcnMpIHtcbiAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKCdFcnJvcjogUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSA0MDQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKEpTT04uc3RyaW5naWZ5KHNwZWFrZXJzLCBudWxsLCAyKSk7XG4gICAgICBjb25zb2xlLmxvZygnR0VUIC9hcGkvc3BlYWtlcnMgIHN0YXR1czogMjAwJyk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coJy9hcGkvc3BlYWtlcnMgZXJyb3I6JywgZSk7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dGlsXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9