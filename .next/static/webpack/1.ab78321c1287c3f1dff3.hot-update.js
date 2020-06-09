webpackHotUpdate(1,{

/***/ "./components/Wikipedia.tsx":
/*!**********************************!*\
  !*** ./components/Wikipedia.tsx ***!
  \**********************************/
/*! exports provided: Wikipedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wikipedia\", function() { return Wikipedia; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Share */ \"./node_modules/@material-ui/icons/Share.js\");\n/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/Users/gleb/Developer/vannabi/components/Wikipedia.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nfunction Wikipedia() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      data = _useState[0],\n      setData = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var res, _data;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return fetch(\"https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=revisions&titles=\".concat(_data, \"&rvslots=*&rvprop=content&formatversion=2&format=json\"));\n\n              case 3:\n                res = _context.sent;\n                _context.next = 6;\n                return res.json();\n\n              case 6:\n                _data = _context.sent;\n                setData(_data.query.pages[0].revisions[0].slots.main.content);\n                _context.next = 13;\n                break;\n\n              case 10:\n                _context.prev = 10;\n                _context.t0 = _context[\"catch\"](0);\n                console.error(_context.t0);\n\n              case 13:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 10]]);\n      }));\n\n      return function fetchData() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchData();\n  }, []);\n  return data && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"CardActionArea\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"CardContent\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n    gutterBottom: true,\n    variant: \"h5\",\n    component: \"h2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, \"Wikipedia\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    component: \"p\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, data))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"CardActions\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    size: \"small\",\n    color: \"primary\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }, \"Learn more\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"IconButton\"], {\n    \"aria-label\": \"share\",\n    style: {\n      marginLeft: 'auto'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  }))));\n}\n\n_s(Wikipedia, \"fQZRxy/+nAZ7NLS1X4dVhrlp8Go=\");\n\n_c = Wikipedia;\n\nvar _c;\n\n$RefreshReg$(_c, \"Wikipedia\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dpa2lwZWRpYS50c3g/ZmJiNSJdLCJuYW1lcyI6WyJXaWtpcGVkaWEiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwicXVlcnkiLCJwYWdlcyIsInJldmlzaW9ucyIsInNsb3RzIiwibWFpbiIsImNvbnRlbnQiLCJjb25zb2xlIiwiZXJyb3IiLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUEsa0JBQ0ZDLHNEQUFRLENBQUMsSUFBRCxDQUROO0FBQUEsTUFDbkJDLElBRG1CO0FBQUEsTUFDYkMsT0FEYTs7QUFHMUJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFNBQVM7QUFBQSxrTUFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUVJQyxLQUFLLDBGQUM2REosS0FEN0QsMkRBRlQ7O0FBQUE7QUFFUkssbUJBRlE7QUFBQTtBQUFBLHVCQUtLQSxHQUFHLENBQUNDLElBQUosRUFMTDs7QUFBQTtBQUtSTixxQkFMUTtBQU1kQyx1QkFBTyxDQUFDRCxLQUFJLENBQUNPLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQixDQUFqQixFQUFvQkMsU0FBcEIsQ0FBOEIsQ0FBOUIsRUFBaUNDLEtBQWpDLENBQXVDQyxJQUF2QyxDQUE0Q0MsT0FBN0MsQ0FBUDtBQU5jO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBUWRDLHVCQUFPLENBQUNDLEtBQVI7O0FBUmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVFgsU0FBUztBQUFBO0FBQUE7QUFBQSxPQUFmOztBQVlBQSxhQUFTO0FBQ1YsR0FkUSxFQWNOLEVBZE0sQ0FBVDtBQWdCQSxTQUNFSCxJQUFJLElBQ0YsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLGdCQUFZLE1BQXhCO0FBQXlCLFdBQU8sRUFBQyxJQUFqQztBQUFzQyxhQUFTLEVBQUMsSUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUlFLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsT0FBcEI7QUFBNEIsU0FBSyxFQUFDLGVBQWxDO0FBQWtELGFBQVMsRUFBQyxHQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLElBREgsQ0FKRixDQURGLENBREYsRUFXRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQVEsUUFBSSxFQUFDLE9BQWI7QUFBcUIsU0FBSyxFQUFDLFNBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFJRSxNQUFDLDREQUFEO0FBQVksa0JBQVcsT0FBdkI7QUFBK0IsU0FBSyxFQUFFO0FBQUVlLGdCQUFVLEVBQUU7QUFBZCxLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixDQVhGLENBRko7QUF3QkQ7O0dBM0NlakIsUzs7S0FBQUEsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvV2lraXBlZGlhLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgQ2FyZEFjdGlvbkFyZWEsIENhcmRBY3Rpb25zLCBDYXJkQ29udGVudCwgSWNvbkJ1dHRvbiwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBTaGFyZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NoYXJlJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBXaWtpcGVkaWEoKSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgYGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93L2FwaS5waHA/b3JpZ2luPSomYWN0aW9uPXF1ZXJ5JnByb3A9cmV2aXNpb25zJnRpdGxlcz0ke2RhdGF9JnJ2c2xvdHM9KiZydnByb3A9Y29udGVudCZmb3JtYXR2ZXJzaW9uPTImZm9ybWF0PWpzb25gLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgc2V0RGF0YShkYXRhLnF1ZXJ5LnBhZ2VzWzBdLnJldmlzaW9uc1swXS5zbG90cy5tYWluLmNvbnRlbnQpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgZGF0YSAmJiAoXG4gICAgICA8Q2FyZD5cbiAgICAgICAgPENhcmRBY3Rpb25BcmVhPlxuICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiPlxuICAgICAgICAgICAgICBXaWtpcGVkaWFcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGNvbXBvbmVudD1cInBcIj5cbiAgICAgICAgICAgICAge2RhdGF9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cbiAgICAgICAgPENhcmRBY3Rpb25zPlxuICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICBMZWFybiBtb3JlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNoYXJlXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogJ2F1dG8nIH19PlxuICAgICAgICAgICAgPFNoYXJlSWNvbiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgIDwvQ2FyZD5cbiAgICApXG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Wikipedia.tsx\n");

/***/ })

})