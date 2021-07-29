self["webpackHotUpdate_N_E"]("pages/speakers",{

/***/ "./src/useSpeakerDataManager.js":
/*!**************************************!*\
  !*** ./src/useSpeakerDataManager.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_jadek_DevMtn_Week3_Demos_using_react_hooks_Combing_React_Hooks_clip10_server_side_rendering_with_no_useEffect_hook_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_jadek_DevMtn_Week3_Demos_using_react_hooks_Combing_React_Hooks_clip10_server_side_rendering_with_no_useEffect_hook_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_jadek_DevMtn_Week3_Demos_using_react_hooks_Combing_React_Hooks_clip10_server_side_rendering_with_no_useEffect_hook_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_jadek_DevMtn_Week3_Demos_using_react_hooks_Combing_React_Hooks_clip10_server_side_rendering_with_no_useEffect_hook_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_jadek_DevMtn_Week3_Demos_using_react_hooks_Combing_React_Hooks_clip10_server_side_rendering_with_no_useEffect_hook_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _speakersReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./speakersReducer */ "./src/speakersReducer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pages_speakers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/speakers */ "./pages/speakers.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_jadek_DevMtn_Week3_Demos_using_react_hooks_Combing_React_Hooks_clip10_server_side_rendering_with_no_useEffect_hook_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function useSpeakerDataManager() {
  _s();

  var initialSpeakersData = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_pages_speakers__WEBPACK_IMPORTED_MODULE_6__.InitialSpeakersDataContext);

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_5__.useReducer)(_speakersReducer__WEBPACK_IMPORTED_MODULE_3__.default, {
    isLoading: false,
    speakerList: initialSpeakersData
  }),
      _useReducer$ = _useReducer[0],
      isLoading = _useReducer$.isLoading,
      speakerList = _useReducer$.speakerList,
      dispatch = _useReducer[1];

  function toggleSpeakerFavorite(speakerRec) {
    var updateData = /*#__PURE__*/function () {
      var _ref = (0,C_Users_jadek_DevMtn_Week3_Demos_using_react_hooks_Combing_React_Hooks_clip10_server_side_rendering_with_no_useEffect_hook_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_jadek_DevMtn_Week3_Demos_using_react_hooks_Combing_React_Hooks_clip10_server_side_rendering_with_no_useEffect_hook_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return C_Users_jadek_DevMtn_Week3_Demos_using_react_hooks_Combing_React_Hooks_clip10_server_side_rendering_with_no_useEffect_hook_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
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
      var _ref2 = (0,C_Users_jadek_DevMtn_Week3_Demos_using_react_hooks_Combing_React_Hooks_clip10_server_side_rendering_with_no_useEffect_hook_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_jadek_DevMtn_Week3_Demos_using_react_hooks_Combing_React_Hooks_clip10_server_side_rendering_with_no_useEffect_hook_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var result;
        return C_Users_jadek_DevMtn_Week3_Demos_using_react_hooks_Combing_React_Hooks_clip10_server_side_rendering_with_no_useEffect_hook_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
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
    toggleSpeakerFavorite: toggleSpeakerFavorite
  };
}

_s(useSpeakerDataManager, "8rPPeoIn1v0YVuCrputaIBp4j5M=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3VzZVNwZWFrZXJEYXRhTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJ1c2VTcGVha2VyRGF0YU1hbmFnZXIiLCJpbml0aWFsU3BlYWtlcnNEYXRhIiwidXNlQ29udGV4dCIsIkluaXRpYWxTcGVha2Vyc0RhdGFDb250ZXh0IiwidXNlUmVkdWNlciIsInNwZWFrZXJzUmVkdWNlciIsImlzTG9hZGluZyIsInNwZWFrZXJMaXN0IiwiZGlzcGF0Y2giLCJ0b2dnbGVTcGVha2VyRmF2b3JpdGUiLCJzcGVha2VyUmVjIiwidXBkYXRlRGF0YSIsImF4aW9zIiwiaWQiLCJmYXZvcml0ZSIsInR5cGUiLCJ1c2VFZmZlY3QiLCJmZXRjaERhdGEiLCJyZXN1bHQiLCJkYXRhIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLHFCQUFULEdBQWlDO0FBQUE7O0FBQy9CLE1BQU1DLG1CQUFtQixHQUFHQyxpREFBVSxDQUFDQyx1RUFBRCxDQUF0Qzs7QUFEK0Isb0JBR2dCQyxpREFBVSxDQUFDQyxxREFBRCxFQUFrQjtBQUN6RUMsYUFBUyxFQUFFLEtBRDhEO0FBRXpFQyxlQUFXLEVBQUVOO0FBRjRELEdBQWxCLENBSDFCO0FBQUE7QUFBQSxNQUd0QkssU0FIc0IsZ0JBR3RCQSxTQUhzQjtBQUFBLE1BR1hDLFdBSFcsZ0JBR1hBLFdBSFc7QUFBQSxNQUdJQyxRQUhKOztBQVEvQixXQUFTQyxxQkFBVCxDQUErQkMsVUFBL0IsRUFBMkM7QUFDekMsUUFBTUMsVUFBVTtBQUFBLHljQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakJDLGdFQUFBLHlCQUEyQkYsVUFBVSxDQUFDRyxFQUF0QyxtQ0FDS0gsVUFETDtBQUVFSSwwQkFBUSxFQUFFLENBQUNKLFVBQVUsQ0FBQ0k7QUFGeEI7QUFJQUosMEJBQVUsQ0FBQ0ksUUFBWCxLQUF3QixJQUF4QixHQUNJTixRQUFRLENBQUM7QUFBRU8sc0JBQUksRUFBRSxZQUFSO0FBQXNCRixvQkFBRSxFQUFFSCxVQUFVLENBQUNHO0FBQXJDLGlCQUFELENBRFosR0FFSUwsUUFBUSxDQUFDO0FBQUVPLHNCQUFJLEVBQUUsVUFBUjtBQUFvQkYsb0JBQUUsRUFBRUgsVUFBVSxDQUFDRztBQUFuQyxpQkFBRCxDQUZaOztBQUxpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFWRixVQUFVO0FBQUE7QUFBQTtBQUFBLE9BQWhCOztBQVNBQSxjQUFVO0FBQ1g7O0FBRURLLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFNBQVM7QUFBQSwwY0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNHTCxnREFBQSxDQUFVLGVBQVYsQ0FESDs7QUFBQTtBQUNaTSxzQkFEWTtBQUVoQlYsd0JBQVEsQ0FBQztBQUFFTyxzQkFBSSxFQUFFLGdCQUFSO0FBQTBCSSxzQkFBSSxFQUFFRCxNQUFNLENBQUNDO0FBQXZDLGlCQUFELENBQVI7O0FBRmdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVRGLFNBQVM7QUFBQTtBQUFBO0FBQUEsT0FBZjs7QUFJQUEsYUFBUztBQUNULFdBQU8sWUFBTTtBQUNYRyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0QsS0FGRDtBQUdELEdBVFEsRUFTTixFQVRNLENBQVQ7QUFVQSxTQUFPO0FBQUVmLGFBQVMsRUFBVEEsU0FBRjtBQUFhQyxlQUFXLEVBQVhBLFdBQWI7QUFBMEJFLHlCQUFxQixFQUFyQkE7QUFBMUIsR0FBUDtBQUNEOztHQWhDUVQscUI7O0FBa0NULCtEQUFlQSxxQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zcGVha2Vycy5hZjVmM2U2ZjFhNTA3NThlYjdhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNwZWFrZXJzUmVkdWNlciBmcm9tICcuL3NwZWFrZXJzUmVkdWNlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBJbml0aWFsU3BlYWtlcnNEYXRhQ29udGV4dCB9IGZyb20gJy4uL3BhZ2VzL3NwZWFrZXJzJztcblxuZnVuY3Rpb24gdXNlU3BlYWtlckRhdGFNYW5hZ2VyKCkge1xuICBjb25zdCBpbml0aWFsU3BlYWtlcnNEYXRhID0gdXNlQ29udGV4dChJbml0aWFsU3BlYWtlcnNEYXRhQ29udGV4dCk7XG5cbiAgY29uc3QgW3sgaXNMb2FkaW5nLCBzcGVha2VyTGlzdCB9LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHNwZWFrZXJzUmVkdWNlciwge1xuICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgc3BlYWtlckxpc3Q6IGluaXRpYWxTcGVha2Vyc0RhdGEsXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZVNwZWFrZXJGYXZvcml0ZShzcGVha2VyUmVjKSB7XG4gICAgY29uc3QgdXBkYXRlRGF0YSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgIGF4aW9zLnB1dChgL2FwaS9zcGVha2Vycy8ke3NwZWFrZXJSZWMuaWR9YCwge1xuICAgICAgICAuLi5zcGVha2VyUmVjLFxuICAgICAgICBmYXZvcml0ZTogIXNwZWFrZXJSZWMuZmF2b3JpdGUsXG4gICAgICB9KTtcbiAgICAgIHNwZWFrZXJSZWMuZmF2b3JpdGUgPT09IHRydWVcbiAgICAgICAgPyBkaXNwYXRjaCh7IHR5cGU6ICd1bmZhdm9yaXRlJywgaWQ6IHNwZWFrZXJSZWMuaWQgfSlcbiAgICAgICAgOiBkaXNwYXRjaCh7IHR5cGU6ICdmYXZvcml0ZScsIGlkOiBzcGVha2VyUmVjLmlkIH0pO1xuICAgIH07XG4gICAgdXBkYXRlRGF0YSgpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3NwZWFrZXJzJyk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdzZXRTcGVha2VyTGlzdCcsIGRhdGE6IHJlc3VsdC5kYXRhIH0pO1xuICAgIH07XG4gICAgZmV0Y2hEYXRhKCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdjbGVhbnVwJyk7XG4gICAgfTtcbiAgfSwgW10pO1xuICByZXR1cm4geyBpc0xvYWRpbmcsIHNwZWFrZXJMaXN0LCB0b2dnbGVTcGVha2VyRmF2b3JpdGUgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlU3BlYWtlckRhdGFNYW5hZ2VyOyJdLCJzb3VyY2VSb290IjoiIn0=