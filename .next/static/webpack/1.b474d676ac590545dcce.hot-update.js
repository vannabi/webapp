webpackHotUpdate(1,{

/***/ "./components/Wikipedia.tsx":
/*!**********************************!*\
  !*** ./components/Wikipedia.tsx ***!
  \**********************************/
/*! exports provided: Wikipedia, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wikipedia\", function() { return Wikipedia; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Share */ \"./node_modules/@material-ui/icons/Share.js\");\n/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/gleb/Developer/vannabi/components/Wikipedia.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\nvar Wikipedia = function Wikipedia(_ref) {\n  var data = _ref.data;\n  console.log(data);\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"CardActionArea\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"CardContent\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n    gutterBottom: true,\n    variant: \"h5\",\n    component: \"h2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 11\n    }\n  }, \"Wikipedia\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    component: \"p\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }, data))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"CardActions\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    size: \"small\",\n    color: \"primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, \"Learn more\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"IconButton\"], {\n    \"aria-label\": \"share\",\n    style: {\n      marginLeft: 'auto'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }))));\n};\n_c = Wikipedia;\nvar getServerSideProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {\n    var res, data;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch('https://en.wikipedia.org/w/api.php?action=query&prop=revisions&titles=Minsk&rvslots=*&rvprop=content&formatversion=2');\n\n          case 2:\n            res = _context.sent;\n            console.log(res);\n            _context.next = 6;\n            return res.json();\n\n          case 6:\n            data = _context.sent;\n            return _context.abrupt(\"return\", {\n              props: {\n                data: data\n              }\n            });\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getServerSideProps(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nvar _c;\n\n$RefreshReg$(_c, \"Wikipedia\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1dpa2lwZWRpYS50c3g/ZmJiNSJdLCJuYW1lcyI6WyJXaWtpcGVkaWEiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm1hcmdpbkxlZnQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwiZmV0Y2giLCJyZXMiLCJqc29uIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBUU8sSUFBTUEsU0FBNkIsR0FBRyxTQUFoQ0EsU0FBZ0MsT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUN6REMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFFQSxTQUNFLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBWSxnQkFBWSxNQUF4QjtBQUF5QixXQUFPLEVBQUMsSUFBakM7QUFBc0MsYUFBUyxFQUFDLElBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFJRSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLE9BQXBCO0FBQTRCLFNBQUssRUFBQyxlQUFsQztBQUFrRCxhQUFTLEVBQUMsR0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxJQURILENBSkYsQ0FERixDQURGLEVBV0UsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFRLFFBQUksRUFBQyxPQUFiO0FBQXFCLFNBQUssRUFBQyxTQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBSUUsTUFBQyw0REFBRDtBQUFZLGtCQUFXLE9BQXZCO0FBQStCLFNBQUssRUFBRTtBQUFFRyxnQkFBVSxFQUFFO0FBQWQsS0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsQ0FYRixDQURGO0FBc0JELENBekJNO0tBQU1KLFM7QUEyQk4sSUFBTUssa0JBQXNDO0FBQUEsK0xBQUcsaUJBQU9DLE9BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDbENDLEtBQUssQ0FDckIsc0hBRHFCLENBRDZCOztBQUFBO0FBQzlDQyxlQUQ4QztBQUlwRE4sbUJBQU8sQ0FBQ0MsR0FBUixDQUFZSyxHQUFaO0FBSm9EO0FBQUEsbUJBS2pDQSxHQUFHLENBQUNDLElBQUosRUFMaUM7O0FBQUE7QUFLOUNSLGdCQUw4QztBQUFBLDZDQU83QztBQUFFUyxtQkFBSyxFQUFFO0FBQUVULG9CQUFJLEVBQUpBO0FBQUY7QUFBVCxhQVA2Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUF0Q0ksa0JBQXNDO0FBQUE7QUFBQTtBQUFBLEdBQTVDIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9XaWtpcGVkaWEudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBDYXJkQWN0aW9uQXJlYSwgQ2FyZEFjdGlvbnMsIENhcmRDb250ZW50LCBJY29uQnV0dG9uLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IFNoYXJlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2hhcmUnO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIFdpa2lwZWRpYVByb3BzIHtcbiAgZGF0YTogYW55O1xufVxuXG5leHBvcnQgY29uc3QgV2lraXBlZGlhOiBGQzxXaWtpcGVkaWFQcm9wcz4gPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZD5cbiAgICAgIDxDYXJkQWN0aW9uQXJlYT5cbiAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiPlxuICAgICAgICAgICAgV2lraXBlZGlhXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGNvbXBvbmVudD1cInBcIj5cbiAgICAgICAgICAgIHtkYXRhfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XG4gICAgICA8Q2FyZEFjdGlvbnM+XG4gICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgTGVhcm4gbW9yZVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cInNoYXJlXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogJ2F1dG8nIH19PlxuICAgICAgICAgIDxTaGFyZUljb24gLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3cvYXBpLnBocD9hY3Rpb249cXVlcnkmcHJvcD1yZXZpc2lvbnMmdGl0bGVzPU1pbnNrJnJ2c2xvdHM9KiZydnByb3A9Y29udGVudCZmb3JtYXR2ZXJzaW9uPTInLFxuICApO1xuICBjb25zb2xlLmxvZyhyZXMpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4geyBwcm9wczogeyBkYXRhIH0gfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Wikipedia.tsx\n");

/***/ })

})