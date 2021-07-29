self["webpackHotUpdate_N_E"]("pages/speakers",{

/***/ "./src/speakersReducer.js":
/*!********************************!*\
  !*** ./src/speakersReducer.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_jadek_DevMtn_Week3_Demos_using_react_hooks_Context_with_Reducer_Redux_like_clip3_Convert_Hook_To_Global_Context_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_jadek_DevMtn_Week3_Demos_using_react_hooks_Context_with_Reducer_Redux_like_clip3_Convert_Hook_To_Global_Context_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var speakersReducer = function speakersReducer(state, action) {
  function updateFavorite(favoriteValue) {
    return state.speakerList.map(function (item, index) {
      if (item.id === action.id) {
        return _objectSpread(_objectSpread({}, item), {}, {
          favorite: favoriteValue
        });
      }

      return item;
    });
  }

  switch (action.type) {
    case 'setSpeakerList':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          speakerList: action.data,
          isLoading: false
        });
      }

    case 'favorite':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          speakerList: updateFavorite(true)
        });
      }

    case 'unfavorite':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          speakerList: updateFavorite(false)
        });
      }

    case 'incrementFavoriteClickCount':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          favoriteClickCount: state.favoriteClickCount + 1
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (speakersReducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NwZWFrZXJzUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJzcGVha2Vyc1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInVwZGF0ZUZhdm9yaXRlIiwiZmF2b3JpdGVWYWx1ZSIsInNwZWFrZXJMaXN0IiwibWFwIiwiaXRlbSIsImluZGV4IiwiaWQiLCJmYXZvcml0ZSIsInR5cGUiLCJkYXRhIiwiaXNMb2FkaW5nIiwiZmF2b3JpdGVDbGlja0NvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUN6QyxXQUFTQyxjQUFULENBQXdCQyxhQUF4QixFQUF1QztBQUNyQyxXQUFPSCxLQUFLLENBQUNJLFdBQU4sQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUM1QyxVQUFJRCxJQUFJLENBQUNFLEVBQUwsS0FBWVAsTUFBTSxDQUFDTyxFQUF2QixFQUEyQjtBQUN6QiwrQ0FBWUYsSUFBWjtBQUFrQkcsa0JBQVEsRUFBRU47QUFBNUI7QUFDRDs7QUFDRCxhQUFPRyxJQUFQO0FBQ0QsS0FMTSxDQUFQO0FBTUQ7O0FBQ0QsVUFBUUwsTUFBTSxDQUFDUyxJQUFmO0FBQ0UsU0FBSyxnQkFBTDtBQUF1QjtBQUNyQiwrQ0FBWVYsS0FBWjtBQUFtQkkscUJBQVcsRUFBRUgsTUFBTSxDQUFDVSxJQUF2QztBQUE2Q0MsbUJBQVMsRUFBRTtBQUF4RDtBQUNEOztBQUNELFNBQUssVUFBTDtBQUFpQjtBQUNmLCtDQUFZWixLQUFaO0FBQW1CSSxxQkFBVyxFQUFFRixjQUFjLENBQUMsSUFBRDtBQUE5QztBQUNEOztBQUNELFNBQUssWUFBTDtBQUFtQjtBQUNqQiwrQ0FBWUYsS0FBWjtBQUFtQkkscUJBQVcsRUFBRUYsY0FBYyxDQUFDLEtBQUQ7QUFBOUM7QUFDRDs7QUFDRCxTQUFLLDZCQUFMO0FBQW9DO0FBQ2xDLCtDQUFZRixLQUFaO0FBQW1CYSw0QkFBa0IsRUFBRWIsS0FBSyxDQUFDYSxrQkFBTixHQUEyQjtBQUFsRTtBQUNEOztBQUNEO0FBQ0UsYUFBT2IsS0FBUDtBQWRKO0FBZ0JELENBekJEOztBQTBCQSwrREFBZUQsZUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zcGVha2Vycy4zY2JhNGVkNmJmNTNiYzYxZDg3Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3BlYWtlcnNSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgZnVuY3Rpb24gdXBkYXRlRmF2b3JpdGUoZmF2b3JpdGVWYWx1ZSkge1xuICAgIHJldHVybiBzdGF0ZS5zcGVha2VyTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaXRlbS5pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiB7IC4uLml0ZW0sIGZhdm9yaXRlOiBmYXZvcml0ZVZhbHVlIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9KTtcbiAgfVxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnc2V0U3BlYWtlckxpc3QnOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc3BlYWtlckxpc3Q6IGFjdGlvbi5kYXRhLCBpc0xvYWRpbmc6IGZhbHNlIH07XG4gICAgfVxuICAgIGNhc2UgJ2Zhdm9yaXRlJzoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNwZWFrZXJMaXN0OiB1cGRhdGVGYXZvcml0ZSh0cnVlKSB9O1xuICAgIH1cbiAgICBjYXNlICd1bmZhdm9yaXRlJzoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNwZWFrZXJMaXN0OiB1cGRhdGVGYXZvcml0ZShmYWxzZSkgfTtcbiAgICB9XG4gICAgY2FzZSAnaW5jcmVtZW50RmF2b3JpdGVDbGlja0NvdW50Jzoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGZhdm9yaXRlQ2xpY2tDb3VudDogc3RhdGUuZmF2b3JpdGVDbGlja0NvdW50ICsgMX07XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBzcGVha2Vyc1JlZHVjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9