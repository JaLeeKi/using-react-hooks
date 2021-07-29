self["webpackHotUpdate_N_E"]("pages/speakers",{

/***/ "./src/useSpeakerDataManager.js":
/*!**************************************!*\
  !*** ./src/useSpeakerDataManager.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_jadek_DevMtn_Week3_Demos_using_react_hooks_Context_with_Reducer_Redux_like_clip3_Convert_Hook_To_Global_Context_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_jadek_DevMtn_Week3_Demos_using_react_hooks_Context_with_Reducer_Redux_like_clip3_Convert_Hook_To_Global_Context_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_jadek_DevMtn_Week3_Demos_using_react_hooks_Context_with_Reducer_Redux_like_clip3_Convert_Hook_To_Global_Context_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_jadek_DevMtn_Week3_Demos_using_react_hooks_Context_with_Reducer_Redux_like_clip3_Convert_Hook_To_Global_Context_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_jadek_DevMtn_Week3_Demos_using_react_hooks_Context_with_Reducer_Redux_like_clip3_Convert_Hook_To_Global_Context_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _speakersReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./speakersReducer */ "./src/speakersReducer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_jadek_DevMtn_Week3_Demos_using_react_hooks_Context_with_Reducer_Redux_like_clip3_Convert_Hook_To_Global_Context_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function useSpeakerDataManager() {
  _s();

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_5__.useReducer)(_speakersReducer__WEBPACK_IMPORTED_MODULE_3__.default, {
    isLoading: true,
    speakerList: [],
    favoriteClickCount: 0,
    hasErrored: false,
    error: null
  }),
      _useReducer$ = _useReducer[0],
      isLoading = _useReducer$.isLoading,
      speakerList = _useReducer$.speakerList,
      favoriteClickCount = _useReducer$.favoriteClickCount,
      hasErrored = _useReducer$.hasErrored,
      error = _useReducer$.error,
      dispatch = _useReducer[1];

  function incrementFavoriteClickCount() {
    dispatch({
      type: 'incrementFavoriteClickCount'
    });
  }

  function toggleSpeakerFavorite(speakerRec) {
    var updateData = /*#__PURE__*/function () {
      var _ref = (0,C_Users_jadek_DevMtn_Week3_Demos_using_react_hooks_Context_with_Reducer_Redux_like_clip3_Convert_Hook_To_Global_Context_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_jadek_DevMtn_Week3_Demos_using_react_hooks_Context_with_Reducer_Redux_like_clip3_Convert_Hook_To_Global_Context_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return C_Users_jadek_DevMtn_Week3_Demos_using_react_hooks_Context_with_Reducer_Redux_like_clip3_Convert_Hook_To_Global_Context_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                axios__WEBPACK_IMPORTED_MODULE_4___default().put("/api/speakers/".concat(speakerRec.id), _objectSpread(_objectSpread({}, speakerRec), {}, {
                  favorite: !speakerRec.favorite
                }));
                speakerRec.favorite === true ? dispatch({
                  type: 'unfavorite',
                  id: speakerRec.id
                }) : dispatch({
                  type: 'favorite',
                  id: speakerRec.id
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function updateData() {
        return _ref.apply(this, arguments);
      };
    }();

    updateData();
  }

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_jadek_DevMtn_Week3_Demos_using_react_hooks_Context_with_Reducer_Redux_like_clip3_Convert_Hook_To_Global_Context_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_jadek_DevMtn_Week3_Demos_using_react_hooks_Context_with_Reducer_Redux_like_clip3_Convert_Hook_To_Global_Context_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var result;
        return C_Users_jadek_DevMtn_Week3_Demos_using_react_hooks_Context_with_Reducer_Redux_like_clip3_Convert_Hook_To_Global_Context_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().get('/api/speakers');

              case 3:
                result = _context2.sent;
                dispatch({
                  type: 'setSpeakerList',
                  data: result.data
                });
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                dispatch({
                  type: 'errored',
                  error: _context2.t0
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      return function fetchData() {
        return _ref2.apply(this, arguments);
      };
    }();

    fetchData();
    return function () {
      console.log('cleanup');
    };
  }, []);
  return {
    isLoading: isLoading,
    speakerList: speakerList,
    favoriteClickCount: favoriteClickCount,
    incrementFavoriteClickCount: incrementFavoriteClickCount,
    toggleSpeakerFavorite: toggleSpeakerFavorite,
    hasErrored: hasErrored,
    error: error
  };
}

_s(useSpeakerDataManager, "frFGXMUlnDG4a8I4mMc3vTuq/e8=");

/* harmony default export */ __webpack_exports__["default"] = (useSpeakerDataManager);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VzZVNwZWFrZXJEYXRhTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJ1c2VTcGVha2VyRGF0YU1hbmFnZXIiLCJ1c2VSZWR1Y2VyIiwic3BlYWtlcnNSZWR1Y2VyIiwiaXNMb2FkaW5nIiwic3BlYWtlckxpc3QiLCJmYXZvcml0ZUNsaWNrQ291bnQiLCJoYXNFcnJvcmVkIiwiZXJyb3IiLCJkaXNwYXRjaCIsImluY3JlbWVudEZhdm9yaXRlQ2xpY2tDb3VudCIsInR5cGUiLCJ0b2dnbGVTcGVha2VyRmF2b3JpdGUiLCJzcGVha2VyUmVjIiwidXBkYXRlRGF0YSIsImF4aW9zIiwiaWQiLCJmYXZvcml0ZSIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsInJlc3VsdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EscUJBQVQsR0FBaUM7QUFBQTs7QUFBQSxvQkFDdURDLGlEQUFVLENBQUNDLHFEQUFELEVBQWtCO0FBQ2hIQyxhQUFTLEVBQUUsSUFEcUc7QUFFaEhDLGVBQVcsRUFBRSxFQUZtRztBQUdoSEMsc0JBQWtCLEVBQUUsQ0FINEY7QUFJaEhDLGNBQVUsRUFBRSxLQUpvRztBQUtoSEMsU0FBSyxFQUFFO0FBTHlHLEdBQWxCLENBRGpFO0FBQUE7QUFBQSxNQUN0QkosU0FEc0IsZ0JBQ3RCQSxTQURzQjtBQUFBLE1BQ1hDLFdBRFcsZ0JBQ1hBLFdBRFc7QUFBQSxNQUNFQyxrQkFERixnQkFDRUEsa0JBREY7QUFBQSxNQUNzQkMsVUFEdEIsZ0JBQ3NCQSxVQUR0QjtBQUFBLE1BQ2tDQyxLQURsQyxnQkFDa0NBLEtBRGxDO0FBQUEsTUFDMkNDLFFBRDNDOztBQVMvQixXQUFTQywyQkFBVCxHQUF1QztBQUNyQ0QsWUFBUSxDQUFDO0FBQUNFLFVBQUksRUFBRTtBQUFQLEtBQUQsQ0FBUjtBQUNEOztBQUVELFdBQVNDLHFCQUFULENBQStCQyxVQUEvQixFQUEyQztBQUN6QyxRQUFNQyxVQUFVO0FBQUEsbWNBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNqQkMsZ0VBQUEseUJBQTJCRixVQUFVLENBQUNHLEVBQXRDLG1DQUNLSCxVQURMO0FBRUVJLDBCQUFRLEVBQUUsQ0FBQ0osVUFBVSxDQUFDSTtBQUZ4QjtBQUlBSiwwQkFBVSxDQUFDSSxRQUFYLEtBQXdCLElBQXhCLEdBQ0lSLFFBQVEsQ0FBQztBQUFFRSxzQkFBSSxFQUFFLFlBQVI7QUFBc0JLLG9CQUFFLEVBQUVILFVBQVUsQ0FBQ0c7QUFBckMsaUJBQUQsQ0FEWixHQUVJUCxRQUFRLENBQUM7QUFBRUUsc0JBQUksRUFBRSxVQUFSO0FBQW9CSyxvQkFBRSxFQUFFSCxVQUFVLENBQUNHO0FBQW5DLGlCQUFELENBRlo7O0FBTGlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVZGLFVBQVU7QUFBQTtBQUFBO0FBQUEsT0FBaEI7O0FBU0FBLGNBQVU7QUFDWDs7QUFDREksa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsU0FBUztBQUFBLG9jQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFS0osZ0RBQUEsQ0FBVSxlQUFWLENBRkw7O0FBQUE7QUFFVkssc0JBRlU7QUFHZFgsd0JBQVEsQ0FBQztBQUFFRSxzQkFBSSxFQUFFLGdCQUFSO0FBQTBCVSxzQkFBSSxFQUFFRCxNQUFNLENBQUNDO0FBQXZDLGlCQUFELENBQVI7QUFIYztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUtkWix3QkFBUSxDQUFDO0FBQUNFLHNCQUFJLEVBQUUsU0FBUDtBQUFrQkgsdUJBQUs7QUFBdkIsaUJBQUQsQ0FBUjs7QUFMYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFUVyxTQUFTO0FBQUE7QUFBQTtBQUFBLE9BQWY7O0FBU0FBLGFBQVM7QUFFVCxXQUFPLFlBQU07QUFDWEcsYUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNELEtBRkQ7QUFHRCxHQWZRLEVBZU4sRUFmTSxDQUFUO0FBaUJBLFNBQU87QUFBRW5CLGFBQVMsRUFBVEEsU0FBRjtBQUFhQyxlQUFXLEVBQVhBLFdBQWI7QUFBMEJDLHNCQUFrQixFQUFsQkEsa0JBQTFCO0FBQThDSSwrQkFBMkIsRUFBM0JBLDJCQUE5QztBQUEyRUUseUJBQXFCLEVBQXJCQSxxQkFBM0U7QUFBa0dMLGNBQVUsRUFBVkEsVUFBbEc7QUFBOEdDLFNBQUssRUFBTEE7QUFBOUcsR0FBUDtBQUNEOztHQTNDUVAscUI7O0FBNkNULCtEQUFlQSxxQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zcGVha2Vycy42Mzc1YmE1ZGVkZGJkMGNjOTgxZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNwZWFrZXJzUmVkdWNlciBmcm9tICcuL3NwZWFrZXJzUmVkdWNlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiB1c2VTcGVha2VyRGF0YU1hbmFnZXIoKSB7XG4gIGNvbnN0IFt7IGlzTG9hZGluZywgc3BlYWtlckxpc3QsIGZhdm9yaXRlQ2xpY2tDb3VudCwgaGFzRXJyb3JlZCwgZXJyb3IgfSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzcGVha2Vyc1JlZHVjZXIsIHtcbiAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgc3BlYWtlckxpc3Q6IFtdLFxuICAgIGZhdm9yaXRlQ2xpY2tDb3VudDogMCxcbiAgICBoYXNFcnJvcmVkOiBmYWxzZSxcbiAgICBlcnJvcjogbnVsbFxuICB9KTtcblxuICBmdW5jdGlvbiBpbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnQoKSB7XG4gICAgZGlzcGF0Y2goe3R5cGU6ICdpbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnQnfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVNwZWFrZXJGYXZvcml0ZShzcGVha2VyUmVjKSB7XG4gICAgY29uc3QgdXBkYXRlRGF0YSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGF4aW9zLnB1dChgL2FwaS9zcGVha2Vycy8ke3NwZWFrZXJSZWMuaWR9YCwge1xuICAgICAgICAuLi5zcGVha2VyUmVjLFxuICAgICAgICBmYXZvcml0ZTogIXNwZWFrZXJSZWMuZmF2b3JpdGUsXG4gICAgICB9KTtcbiAgICAgIHNwZWFrZXJSZWMuZmF2b3JpdGUgPT09IHRydWVcbiAgICAgICAgPyBkaXNwYXRjaCh7IHR5cGU6ICd1bmZhdm9yaXRlJywgaWQ6IHNwZWFrZXJSZWMuaWQgfSlcbiAgICAgICAgOiBkaXNwYXRjaCh7IHR5cGU6ICdmYXZvcml0ZScsIGlkOiBzcGVha2VyUmVjLmlkIH0pO1xuICAgIH07XG4gICAgdXBkYXRlRGF0YSgpO1xuICB9XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9zcGVha2VycycpO1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdzZXRTcGVha2VyTGlzdCcsIGRhdGE6IHJlc3VsdC5kYXRhIH0pO1xuICAgICAgfWNhdGNoKGUpIHtcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdlcnJvcmVkJywgZXJyb3I6IGV9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2NsZWFudXAnKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHsgaXNMb2FkaW5nLCBzcGVha2VyTGlzdCwgZmF2b3JpdGVDbGlja0NvdW50LCBpbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnQsIHRvZ2dsZVNwZWFrZXJGYXZvcml0ZSwgaGFzRXJyb3JlZCwgZXJyb3IgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlU3BlYWtlckRhdGFNYW5hZ2VyOyJdLCJzb3VyY2VSb290IjoiIn0=