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
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().get('/api/speakers');

              case 2:
                result = _context2.sent;
                dispatch({
                  type: 'setSpeakerList',
                  data: result.data
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
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
    toggleSpeakerFavorite: toggleSpeakerFavorite
  };
}

_s(useSpeakerDataManager, "CtCn6i/gAvD38Dhq82TR/wXt3dw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VzZVNwZWFrZXJEYXRhTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJ1c2VTcGVha2VyRGF0YU1hbmFnZXIiLCJ1c2VSZWR1Y2VyIiwic3BlYWtlcnNSZWR1Y2VyIiwiaXNMb2FkaW5nIiwic3BlYWtlckxpc3QiLCJmYXZvcml0ZUNsaWNrQ291bnQiLCJoYXNFcnJvcmVkIiwiZXJyb3IiLCJkaXNwYXRjaCIsImluY3JlbWVudEZhdm9yaXRlQ2xpY2tDb3VudCIsInR5cGUiLCJ0b2dnbGVTcGVha2VyRmF2b3JpdGUiLCJzcGVha2VyUmVjIiwidXBkYXRlRGF0YSIsImF4aW9zIiwiaWQiLCJmYXZvcml0ZSIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsInJlc3VsdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EscUJBQVQsR0FBaUM7QUFBQTs7QUFBQSxvQkFDb0NDLGlEQUFVLENBQUNDLHFEQUFELEVBQWtCO0FBQzdGQyxhQUFTLEVBQUUsSUFEa0Y7QUFFN0ZDLGVBQVcsRUFBRSxFQUZnRjtBQUc3RkMsc0JBQWtCLEVBQUUsQ0FIeUU7QUFJN0ZDLGNBQVUsRUFBRSxLQUppRjtBQUs3RkMsU0FBSyxFQUFFO0FBTHNGLEdBQWxCLENBRDlDO0FBQUE7QUFBQSxNQUN0QkosU0FEc0IsZ0JBQ3RCQSxTQURzQjtBQUFBLE1BQ1hDLFdBRFcsZ0JBQ1hBLFdBRFc7QUFBQSxNQUNFQyxrQkFERixnQkFDRUEsa0JBREY7QUFBQSxNQUN3QkcsUUFEeEI7O0FBUy9CLFdBQVNDLDJCQUFULEdBQXVDO0FBQ3JDRCxZQUFRLENBQUM7QUFBQ0UsVUFBSSxFQUFFO0FBQVAsS0FBRCxDQUFSO0FBQ0Q7O0FBRUQsV0FBU0MscUJBQVQsQ0FBK0JDLFVBQS9CLEVBQTJDO0FBQ3pDLFFBQU1DLFVBQVU7QUFBQSxtY0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCQyxnRUFBQSx5QkFBMkJGLFVBQVUsQ0FBQ0csRUFBdEMsbUNBQ0tILFVBREw7QUFFRUksMEJBQVEsRUFBRSxDQUFDSixVQUFVLENBQUNJO0FBRnhCO0FBSUFKLDBCQUFVLENBQUNJLFFBQVgsS0FBd0IsSUFBeEIsR0FDSVIsUUFBUSxDQUFDO0FBQUVFLHNCQUFJLEVBQUUsWUFBUjtBQUFzQkssb0JBQUUsRUFBRUgsVUFBVSxDQUFDRztBQUFyQyxpQkFBRCxDQURaLEdBRUlQLFFBQVEsQ0FBQztBQUFFRSxzQkFBSSxFQUFFLFVBQVI7QUFBb0JLLG9CQUFFLEVBQUVILFVBQVUsQ0FBQ0c7QUFBbkMsaUJBQUQsQ0FGWjs7QUFMaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVkYsVUFBVTtBQUFBO0FBQUE7QUFBQSxPQUFoQjs7QUFTQUEsY0FBVTtBQUNYOztBQUNESSxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxTQUFTO0FBQUEsb2NBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDR0osZ0RBQUEsQ0FBVSxlQUFWLENBREg7O0FBQUE7QUFDWkssc0JBRFk7QUFFaEJYLHdCQUFRLENBQUM7QUFBRUUsc0JBQUksRUFBRSxnQkFBUjtBQUEwQlUsc0JBQUksRUFBRUQsTUFBTSxDQUFDQztBQUF2QyxpQkFBRCxDQUFSOztBQUZnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFURixTQUFTO0FBQUE7QUFBQTtBQUFBLE9BQWY7O0FBSUFBLGFBQVM7QUFDVCxXQUFPLFlBQU07QUFDWEcsYUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNELEtBRkQ7QUFHRCxHQVRRLEVBU04sRUFUTSxDQUFUO0FBV0EsU0FBTztBQUFFbkIsYUFBUyxFQUFUQSxTQUFGO0FBQWFDLGVBQVcsRUFBWEEsV0FBYjtBQUEwQkMsc0JBQWtCLEVBQWxCQSxrQkFBMUI7QUFBOENJLCtCQUEyQixFQUEzQkEsMkJBQTlDO0FBQTJFRSx5QkFBcUIsRUFBckJBO0FBQTNFLEdBQVA7QUFDRDs7R0FyQ1FYLHFCOztBQXVDVCwrREFBZUEscUJBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuZGU4MGRmNDVjNjg1OGVjOTgyYmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzcGVha2Vyc1JlZHVjZXIgZnJvbSAnLi9zcGVha2Vyc1JlZHVjZXInO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gdXNlU3BlYWtlckRhdGFNYW5hZ2VyKCkge1xuICBjb25zdCBbeyBpc0xvYWRpbmcsIHNwZWFrZXJMaXN0LCBmYXZvcml0ZUNsaWNrQ291bnQgfSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzcGVha2Vyc1JlZHVjZXIsIHtcbiAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgc3BlYWtlckxpc3Q6IFtdLFxuICAgIGZhdm9yaXRlQ2xpY2tDb3VudDogMCxcbiAgICBoYXNFcnJvcmVkOiBmYWxzZSxcbiAgICBlcnJvcjogbnVsbFxuICB9KTtcblxuICBmdW5jdGlvbiBpbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnQoKSB7XG4gICAgZGlzcGF0Y2goe3R5cGU6ICdpbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnQnfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVNwZWFrZXJGYXZvcml0ZShzcGVha2VyUmVjKSB7XG4gICAgY29uc3QgdXBkYXRlRGF0YSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGF4aW9zLnB1dChgL2FwaS9zcGVha2Vycy8ke3NwZWFrZXJSZWMuaWR9YCwge1xuICAgICAgICAuLi5zcGVha2VyUmVjLFxuICAgICAgICBmYXZvcml0ZTogIXNwZWFrZXJSZWMuZmF2b3JpdGUsXG4gICAgICB9KTtcbiAgICAgIHNwZWFrZXJSZWMuZmF2b3JpdGUgPT09IHRydWVcbiAgICAgICAgPyBkaXNwYXRjaCh7IHR5cGU6ICd1bmZhdm9yaXRlJywgaWQ6IHNwZWFrZXJSZWMuaWQgfSlcbiAgICAgICAgOiBkaXNwYXRjaCh7IHR5cGU6ICdmYXZvcml0ZScsIGlkOiBzcGVha2VyUmVjLmlkIH0pO1xuICAgIH07XG4gICAgdXBkYXRlRGF0YSgpO1xuICB9XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9zcGVha2VycycpO1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnc2V0U3BlYWtlckxpc3QnLCBkYXRhOiByZXN1bHQuZGF0YSB9KTtcbiAgICB9O1xuICAgIGZldGNoRGF0YSgpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY2xlYW51cCcpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4geyBpc0xvYWRpbmcsIHNwZWFrZXJMaXN0LCBmYXZvcml0ZUNsaWNrQ291bnQsIGluY3JlbWVudEZhdm9yaXRlQ2xpY2tDb3VudCwgdG9nZ2xlU3BlYWtlckZhdm9yaXRlIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVNwZWFrZXJEYXRhTWFuYWdlcjsiXSwic291cmNlUm9vdCI6IiJ9