(function() {
var exports = {};
exports.id = "pages/api/speakers/[id]";
exports.ids = ["pages/api/speakers/[id]"];
exports.modules = {

/***/ "./pages/api/speakers/[id].js":
/*!************************************!*\
  !*** ./pages/api/speakers/[id].js ***!
  \************************************/
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
const writeFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().writeFile));

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function handler(req, res) {
  const method = req === null || req === void 0 ? void 0 : req.method;
  const id = parseInt(req === null || req === void 0 ? void 0 : req.query.id);
  const recordFromBody = req === null || req === void 0 ? void 0 : req.body;

  if (method != 'PUT') {
    res.send(501).send(`Method ${method} not implemented`);
  } else {
    const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve('./', 'db.json');

    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);
      const speakers = JSON.parse(readFileData).speakers;

      if (!speakers) {
        res.status(404).send('Error: Request failed with status code 404');
      } else {
        const newSpeakersArray = speakers.map(function (rec) {
          return rec.id === id ? recordFromBody : rec;
        });
        writeFile(jsonFile, JSON.stringify({
          speakers: newSpeakersArray
        }, null, 2));
        res.status(200).json(recordFromBody);
        console.log(`PUT /api/speakers/${id} status: 200`);
      }
    } catch (e) {
      console.log(`/api/speakers/${id} error:`, e);
    }
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/speakers/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9wYWdlcy9hcGkvc3BlYWtlcnMvW2lkXS5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvZXh0ZXJuYWwgXCJ1dGlsXCIiXSwibmFtZXMiOlsicHJvbWlzaWZ5IiwicmVxdWlyZSIsInJlYWRGaWxlIiwiZnMiLCJ3cml0ZUZpbGUiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImlkIiwicGFyc2VJbnQiLCJxdWVyeSIsInJlY29yZEZyb21Cb2R5IiwiYm9keSIsInNlbmQiLCJqc29uRmlsZSIsInBhdGgiLCJyZWFkRmlsZURhdGEiLCJzcGVha2VycyIsIkpTT04iLCJwYXJzZSIsInN0YXR1cyIsIm5ld1NwZWFrZXJzQXJyYXkiLCJtYXAiLCJyZWMiLCJzdHJpbmdpZnkiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFFQSxNQUFNO0FBQUVBO0FBQUYsSUFBZ0JDLG1CQUFPLENBQUMsa0JBQUQsQ0FBN0I7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHRixTQUFTLENBQUNHLG9EQUFELENBQTFCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHSixTQUFTLENBQUNHLHFEQUFELENBQTNCOztBQUNBLE1BQU1FLEtBQUssR0FBSUMsRUFBRCxJQUFRLElBQUlDLE9BQUosQ0FBYUMsT0FBRCxJQUFhQyxVQUFVLENBQUNELE9BQUQsRUFBVUYsRUFBVixDQUFuQyxDQUF0Qjs7QUFFZSxlQUFlSSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDOUMsUUFBTUMsTUFBTSxHQUFHRixHQUFILGFBQUdBLEdBQUgsdUJBQUdBLEdBQUcsQ0FBRUUsTUFBcEI7QUFDQSxRQUFNQyxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0osR0FBRCxhQUFDQSxHQUFELHVCQUFDQSxHQUFHLENBQUVLLEtBQUwsQ0FBV0YsRUFBWixDQUFuQjtBQUNBLFFBQU1HLGNBQWMsR0FBR04sR0FBSCxhQUFHQSxHQUFILHVCQUFHQSxHQUFHLENBQUVPLElBQTVCOztBQUVBLE1BQUlMLE1BQU0sSUFBSSxLQUFkLEVBQXFCO0FBQ25CRCxPQUFHLENBQUNPLElBQUosQ0FBUyxHQUFULEVBQWNBLElBQWQsQ0FBb0IsVUFBU04sTUFBTyxrQkFBcEM7QUFDRCxHQUZELE1BRU87QUFDTCxVQUFNTyxRQUFRLEdBQUdDLG1EQUFBLENBQWEsSUFBYixFQUFtQixTQUFuQixDQUFqQjs7QUFDQSxRQUFJO0FBQ0YsWUFBTUMsWUFBWSxHQUFHLE1BQU1wQixRQUFRLENBQUNrQixRQUFELENBQW5DO0FBQ0EsWUFBTWYsS0FBSyxDQUFDLElBQUQsQ0FBWDtBQUNBLFlBQU1rQixRQUFRLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxZQUFYLEVBQXlCQyxRQUExQzs7QUFDQSxVQUFJLENBQUNBLFFBQUwsRUFBZTtBQUNiWCxXQUFHLENBQUNjLE1BQUosQ0FBVyxHQUFYLEVBQWdCUCxJQUFoQixDQUFxQiw0Q0FBckI7QUFDRCxPQUZELE1BRU87QUFDTCxjQUFNUSxnQkFBZ0IsR0FBR0osUUFBUSxDQUFDSyxHQUFULENBQWEsVUFBVUMsR0FBVixFQUFlO0FBQ25ELGlCQUFPQSxHQUFHLENBQUNmLEVBQUosS0FBV0EsRUFBWCxHQUFnQkcsY0FBaEIsR0FBaUNZLEdBQXhDO0FBQ0QsU0FGd0IsQ0FBekI7QUFHQXpCLGlCQUFTLENBQ1BnQixRQURPLEVBRVBJLElBQUksQ0FBQ00sU0FBTCxDQUFlO0FBQUVQLGtCQUFRLEVBQUVJO0FBQVosU0FBZixFQUErQyxJQUEvQyxFQUFxRCxDQUFyRCxDQUZPLENBQVQ7QUFJQWYsV0FBRyxDQUFDYyxNQUFKLENBQVcsR0FBWCxFQUFnQkssSUFBaEIsQ0FBcUJkLGNBQXJCO0FBQ0FlLGVBQU8sQ0FBQ0MsR0FBUixDQUFhLHFCQUFvQm5CLEVBQUcsY0FBcEM7QUFDRDtBQUNGLEtBakJELENBaUJFLE9BQU9vQixDQUFQLEVBQVU7QUFDVkYsYUFBTyxDQUFDQyxHQUFSLENBQWEsaUJBQWdCbkIsRUFBRyxTQUFoQyxFQUEwQ29CLENBQTFDO0FBQ0Q7QUFDRjtBQUNGLEM7Ozs7Ozs7Ozs7O0FDeENELGdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2FwaS9zcGVha2Vycy9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgc3BlYWtlckRhdGEgZnJvbSAnLi4vLi4vLi4vc3JjL1NwZWFrZXJEYXRhJztcblxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuXG5jb25zdCB7IHByb21pc2lmeSB9ID0gcmVxdWlyZSgndXRpbCcpO1xuY29uc3QgcmVhZEZpbGUgPSBwcm9taXNpZnkoZnMucmVhZEZpbGUpO1xuY29uc3Qgd3JpdGVGaWxlID0gcHJvbWlzaWZ5KGZzLndyaXRlRmlsZSk7XG5jb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCBtZXRob2QgPSByZXE/Lm1ldGhvZDtcbiAgY29uc3QgaWQgPSBwYXJzZUludChyZXE/LnF1ZXJ5LmlkKTtcbiAgY29uc3QgcmVjb3JkRnJvbUJvZHkgPSByZXE/LmJvZHk7XG5cbiAgaWYgKG1ldGhvZCAhPSAnUFVUJykge1xuICAgIHJlcy5zZW5kKDUwMSkuc2VuZChgTWV0aG9kICR7bWV0aG9kfSBub3QgaW1wbGVtZW50ZWRgKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBqc29uRmlsZSA9IHBhdGgucmVzb2x2ZSgnLi8nLCAnZGIuanNvbicpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZWFkRmlsZURhdGEgPSBhd2FpdCByZWFkRmlsZShqc29uRmlsZSk7XG4gICAgICBhd2FpdCBkZWxheSgxMDAwKTtcbiAgICAgIGNvbnN0IHNwZWFrZXJzID0gSlNPTi5wYXJzZShyZWFkRmlsZURhdGEpLnNwZWFrZXJzO1xuICAgICAgaWYgKCFzcGVha2Vycykge1xuICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCgnRXJyb3I6IFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgNDA0Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdTcGVha2Vyc0FycmF5ID0gc3BlYWtlcnMubWFwKGZ1bmN0aW9uIChyZWMpIHtcbiAgICAgICAgICByZXR1cm4gcmVjLmlkID09PSBpZCA/IHJlY29yZEZyb21Cb2R5IDogcmVjO1xuICAgICAgICB9KTtcbiAgICAgICAgd3JpdGVGaWxlKFxuICAgICAgICAgIGpzb25GaWxlLFxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgc3BlYWtlcnM6IG5ld1NwZWFrZXJzQXJyYXkgfSwgbnVsbCwgMiksXG4gICAgICAgICk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlY29yZEZyb21Cb2R5KTtcbiAgICAgICAgY29uc29sZS5sb2coYFBVVCAvYXBpL3NwZWFrZXJzLyR7aWR9IHN0YXR1czogMjAwYCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coYC9hcGkvc3BlYWtlcnMvJHtpZH0gZXJyb3I6YCwgZSk7XG4gICAgfVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==