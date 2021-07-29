(function() {
var exports = {};
exports.id = 591;
exports.ids = [591];
exports.modules = {

/***/ 5339:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5622);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5747);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
//import speakerData from '../../../src/SpeakerData';



const {
  promisify
} = __webpack_require__(1669);

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

/***/ 5747:
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 5622:
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ 1669:
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
var __webpack_exports__ = (__webpack_exec__(5339));
module.exports = __webpack_exports__;

})();