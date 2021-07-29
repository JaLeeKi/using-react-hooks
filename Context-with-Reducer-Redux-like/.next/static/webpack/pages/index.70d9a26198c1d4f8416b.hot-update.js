self["webpackHotUpdate_N_E"]("pages/index",{

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
          isLoading: false,
          hasErrored: false
        });
      }

    case 'forceImageRerender':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          imageRerenderIdentifier: new Date().getTime()
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

    case 'errored':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          hasErrored: true,
          error: action.error
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NwZWFrZXJzUmVkdWNlci5qcyJdLCJuYW1lcyI6WyJzcGVha2Vyc1JlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInVwZGF0ZUZhdm9yaXRlIiwiZmF2b3JpdGVWYWx1ZSIsInNwZWFrZXJMaXN0IiwibWFwIiwiaXRlbSIsImluZGV4IiwiaWQiLCJmYXZvcml0ZSIsInR5cGUiLCJkYXRhIiwiaXNMb2FkaW5nIiwiaGFzRXJyb3JlZCIsImltYWdlUmVyZW5kZXJJZGVudGlmaWVyIiwiRGF0ZSIsImdldFRpbWUiLCJmYXZvcml0ZUNsaWNrQ291bnQiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDekMsV0FBU0MsY0FBVCxDQUF3QkMsYUFBeEIsRUFBdUM7QUFDckMsV0FBT0gsS0FBSyxDQUFDSSxXQUFOLENBQWtCQyxHQUFsQixDQUFzQixVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDNUMsVUFBSUQsSUFBSSxDQUFDRSxFQUFMLEtBQVlQLE1BQU0sQ0FBQ08sRUFBdkIsRUFBMkI7QUFDekIsK0NBQVlGLElBQVo7QUFBa0JHLGtCQUFRLEVBQUVOO0FBQTVCO0FBQ0Q7O0FBQ0QsYUFBT0csSUFBUDtBQUNELEtBTE0sQ0FBUDtBQU1EOztBQUNELFVBQVFMLE1BQU0sQ0FBQ1MsSUFBZjtBQUNFLFNBQUssZ0JBQUw7QUFBdUI7QUFDckIsK0NBQVlWLEtBQVo7QUFBbUJJLHFCQUFXLEVBQUVILE1BQU0sQ0FBQ1UsSUFBdkM7QUFBNkNDLG1CQUFTLEVBQUUsS0FBeEQ7QUFBK0RDLG9CQUFVLEVBQUU7QUFBM0U7QUFDRDs7QUFDRCxTQUFLLG9CQUFMO0FBQTJCO0FBQ3pCLCtDQUFZYixLQUFaO0FBQW1CYyxpQ0FBdUIsRUFBRSxJQUFJQyxJQUFKLEdBQVdDLE9BQVg7QUFBNUM7QUFDRDs7QUFDRCxTQUFLLFVBQUw7QUFBaUI7QUFDZiwrQ0FBWWhCLEtBQVo7QUFBbUJJLHFCQUFXLEVBQUVGLGNBQWMsQ0FBQyxJQUFEO0FBQTlDO0FBQ0Q7O0FBQ0QsU0FBSyxZQUFMO0FBQW1CO0FBQ2pCLCtDQUFZRixLQUFaO0FBQW1CSSxxQkFBVyxFQUFFRixjQUFjLENBQUMsS0FBRDtBQUE5QztBQUNEOztBQUNELFNBQUssNkJBQUw7QUFBb0M7QUFDbEMsK0NBQVlGLEtBQVo7QUFBbUJpQiw0QkFBa0IsRUFBRWpCLEtBQUssQ0FBQ2lCLGtCQUFOLEdBQTJCO0FBQWxFO0FBQ0Q7O0FBQ0QsU0FBSyxTQUFMO0FBQWdCO0FBQ2QsK0NBQVlqQixLQUFaO0FBQW1CYSxvQkFBVSxFQUFFLElBQS9CO0FBQXFDSyxlQUFLLEVBQUVqQixNQUFNLENBQUNpQjtBQUFuRDtBQUNEOztBQUNEO0FBQ0UsYUFBT2xCLEtBQVA7QUFwQko7QUFzQkQsQ0EvQkQ7O0FBZ0NBLCtEQUFlRCxlQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjcwZDlhMjYxOThjMWQ0Zjg0MTZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzcGVha2Vyc1JlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBmdW5jdGlvbiB1cGRhdGVGYXZvcml0ZShmYXZvcml0ZVZhbHVlKSB7XG4gICAgcmV0dXJuIHN0YXRlLnNwZWFrZXJMaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpdGVtLmlkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgZmF2b3JpdGU6IGZhdm9yaXRlVmFsdWUgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pO1xuICB9XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdzZXRTcGVha2VyTGlzdCc6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzcGVha2VyTGlzdDogYWN0aW9uLmRhdGEsIGlzTG9hZGluZzogZmFsc2UsIGhhc0Vycm9yZWQ6IGZhbHNlIH07XG4gICAgfVxuICAgIGNhc2UgJ2ZvcmNlSW1hZ2VSZXJlbmRlcic6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpbWFnZVJlcmVuZGVySWRlbnRpZmllcjogbmV3IERhdGUoKS5nZXRUaW1lKCkgfTtcbiAgICB9XG4gICAgY2FzZSAnZmF2b3JpdGUnOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc3BlYWtlckxpc3Q6IHVwZGF0ZUZhdm9yaXRlKHRydWUpIH07XG4gICAgfVxuICAgIGNhc2UgJ3VuZmF2b3JpdGUnOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc3BlYWtlckxpc3Q6IHVwZGF0ZUZhdm9yaXRlKGZhbHNlKSB9O1xuICAgIH1cbiAgICBjYXNlICdpbmNyZW1lbnRGYXZvcml0ZUNsaWNrQ291bnQnOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZmF2b3JpdGVDbGlja0NvdW50OiBzdGF0ZS5mYXZvcml0ZUNsaWNrQ291bnQgKyAxfTtcbiAgICB9XG4gICAgY2FzZSAnZXJyb3JlZCc6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBoYXNFcnJvcmVkOiB0cnVlLCBlcnJvcjogYWN0aW9uLmVycm9yIH07XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBzcGVha2Vyc1JlZHVjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9