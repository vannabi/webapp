module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/[...slug].js": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_icons_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Map */ \"@material-ui/icons/Map\");\n/* harmony import */ var _material_ui_icons_Map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Map__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/gleb/Developer/vannabi/components/Header.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  root: {\n    flexGrow: 1\n  },\n  menuButton: {\n    marginRight: theme.spacing(2)\n  },\n  title: {\n    flexGrow: 1\n  }\n}));\nconst Header = () => {\n  const classes = useStyles();\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"AppBar\"], {\n    position: \"static\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Toolbar\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h6\",\n    className: classes.title,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, \"Wanna Be\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"IconButton\"], {\n    \"aria-label\": \"map\",\n    edge: \"end\",\n    color: \"inherit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_icons_Map__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    fontSize: \"inherit\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }))));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci50c3g/ZGRiOCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwidGl0bGUiLCJIZWFkZXIiLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQSxNQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUVDLEtBQUQsS0FBWTtBQUN2Q0MsTUFBSSxFQUFFO0FBQ0pDLFlBQVEsRUFBRTtBQUROLEdBRGlDO0FBSXZDQyxZQUFVLEVBQUU7QUFDVkMsZUFBVyxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBYyxDQUFkO0FBREgsR0FKMkI7QUFPdkNDLE9BQUssRUFBRTtBQUNMSixZQUFRLEVBQUU7QUFETDtBQVBnQyxDQUFaLENBQUQsQ0FBNUI7QUFZTyxNQUFNSyxNQUFVLEdBQUcsTUFBTTtBQUM5QixRQUFNQyxPQUFPLEdBQUdWLFNBQVMsRUFBekI7QUFFQSxTQUNFLE1BQUMsd0RBQUQ7QUFBUSxZQUFRLEVBQUMsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsYUFBUyxFQUFFVSxPQUFPLENBQUNGLEtBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFJRSxNQUFDLDREQUFEO0FBQVksa0JBQVcsS0FBdkI7QUFBNkIsUUFBSSxFQUFDLEtBQWxDO0FBQXdDLFNBQUssRUFBQyxTQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFTLFlBQVEsRUFBQyxTQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixDQURGLENBREY7QUFZRCxDQWZNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwQmFyLCBJY29uQnV0dG9uLCBtYWtlU3R5bGVzLCBUb29sYmFyLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IE1hcEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01hcCc7XG5pbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgfSxcbiAgbWVudUJ1dHRvbjoge1xuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZsZXhHcm93OiAxLFxuICB9LFxufSkpO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxuICAgICAgPFRvb2xiYXI+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XG4gICAgICAgICAgV2FubmEgQmVcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwibWFwXCIgZWRnZT1cImVuZFwiIGNvbG9yPVwiaW5oZXJpdFwiPlxuICAgICAgICAgIDxNYXBJY29uIGZvbnRTaXplPVwiaW5oZXJpdFwiIC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgIDwvVG9vbGJhcj5cbiAgICA8L0FwcEJhcj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.tsx\n");

/***/ }),

/***/ "./pages/[...slug].tsx":
/*!*****************************!*\
  !*** ./pages/[...slug].tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.tsx\");\nvar _jsxFileName = \"/Users/gleb/Developer/vannabi/pages/[...slug].tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"createStyles\"])({\n  root: {\n    flexGrow: 1\n  },\n  media: {\n    height: 140\n  }\n}));\nconst DynamicWiki = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/Wikipedia */ \"./components/Wikipedia.tsx\")).then(mod => mod.Wikipedia), {\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! ../components/Wikipedia */ \"./components/Wikipedia.tsx\")],\n    modules: ['../components/Wikipedia']\n  }\n});\n\nconst Page = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  const slug = router.query.slug || [];\n  const classes = useStyles();\n  const point = slug[slug.length - 1];\n  const subtitle = typeof slug !== 'string' ? slug.slice(0, slug.length - 1).join(', ') : slug;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"Header\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    maxWidth: \"md\",\n    className: classes.root,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    container: true,\n    spacing: 4,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    xs: 12,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardActionArea\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 15\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardMedia\"], {\n    className: classes.media,\n    image: \"/static/images/cards/contemplative-reptile.jpg\",\n    title: \"Contemplative Reptile\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 17\n    }\n  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"CardContent\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 17\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    gutterBottom: true,\n    variant: \"h5\",\n    component: \"h2\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 19\n    }\n  }, point), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    component: \"p\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 19\n    }\n  }, subtitle))))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    xs: 12,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }, __jsx(DynamicWiki, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  })))));\n}; // export const getServerSideProps: GetServerSideProps = async (context) => {\n//   const res = await fetch(\n//     '//en.wikipedia.org/w/api.php?action=query&prop=revisions&titles=Minsk&rvslots=*&rvprop=content&formatversion=2',\n//   );\n//   const data = await res.json();\n//   return { props: { data } };\n// };\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bLi4uc2x1Z10udHN4P2ZmYTgiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImZsZXhHcm93IiwibWVkaWEiLCJoZWlnaHQiLCJEeW5hbWljV2lraSIsImR5bmFtaWMiLCJ0aGVuIiwibW9kIiwiV2lraXBlZGlhIiwiUGFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsInNsdWciLCJxdWVyeSIsImNsYXNzZXMiLCJwb2ludCIsImxlbmd0aCIsInN1YnRpdGxlIiwic2xpY2UiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFhQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUVDLEtBQUQsSUFDM0JDLHNFQUFZLENBQUM7QUFDWEMsTUFBSSxFQUFFO0FBQ0pDLFlBQVEsRUFBRTtBQUROLEdBREs7QUFJWEMsT0FBSyxFQUFFO0FBQ0xDLFVBQU0sRUFBRTtBQURIO0FBSkksQ0FBRCxDQURjLENBQTVCO0FBV0EsTUFBTUMsV0FBVyxHQUFHQyxtREFBTyxDQUFDLE1BQU0sMklBQWtDQyxJQUFsQyxDQUF3Q0MsR0FBRCxJQUFTQSxHQUFHLENBQUNDLFNBQXBELENBQVA7QUFBQTtBQUFBLHdDQUFjLDJEQUFkO0FBQUEsY0FBYyx5QkFBZDtBQUFBO0FBQUEsRUFBM0I7O0FBRUEsTUFBTUMsSUFBYyxHQUFHLE1BQU07QUFDM0IsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU1DLElBQUksR0FBR0YsTUFBTSxDQUFDRyxLQUFQLENBQWFELElBQWIsSUFBcUIsRUFBbEM7QUFDQSxRQUFNRSxPQUFPLEdBQUdsQixTQUFTLEVBQXpCO0FBQ0EsUUFBTW1CLEtBQUssR0FBR0gsSUFBSSxDQUFDQSxJQUFJLENBQUNJLE1BQUwsR0FBYyxDQUFmLENBQWxCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLE9BQU9MLElBQVAsS0FBZ0IsUUFBaEIsR0FBMkJBLElBQUksQ0FBQ00sS0FBTCxDQUFXLENBQVgsRUFBY04sSUFBSSxDQUFDSSxNQUFMLEdBQWMsQ0FBNUIsRUFBK0JHLElBQS9CLENBQW9DLElBQXBDLENBQTNCLEdBQXVFUCxJQUF4RjtBQUVBLFNBQ0UsbUVBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDJEQUFEO0FBQVcsWUFBUSxFQUFDLElBQXBCO0FBQXlCLGFBQVMsRUFBRUUsT0FBTyxDQUFDZCxJQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUNFLGFBQVMsRUFBRWMsT0FBTyxDQUFDWixLQURyQjtBQUVFLFNBQUssRUFBQyxnREFGUjtBQUdFLFNBQUssRUFBQyx1QkFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFNRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQVksZ0JBQVksTUFBeEI7QUFBeUIsV0FBTyxFQUFDLElBQWpDO0FBQXNDLGFBQVMsRUFBQyxJQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dhLEtBREgsQ0FERixFQUlFLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsT0FBcEI7QUFBNEIsU0FBSyxFQUFDLGVBQWxDO0FBQWtELGFBQVMsRUFBQyxHQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dFLFFBREgsQ0FKRixDQU5GLENBREYsQ0FERixDQURGLEVBb0JFLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXBCRixDQURGLENBRkYsQ0FERjtBQStCRCxDQXRDRCxDLENBd0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFZVIsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9bLi4uc2x1Z10udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2FyZCxcbiAgQ2FyZEFjdGlvbkFyZWEsXG4gIENhcmRDb250ZW50LFxuICBDYXJkTWVkaWEsXG4gIENvbnRhaW5lcixcbiAgY3JlYXRlU3R5bGVzLFxuICBHcmlkLFxuICBtYWtlU3R5bGVzLFxuICBUaGVtZSxcbiAgVHlwb2dyYXBoeSxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBmbGV4R3JvdzogMSxcbiAgICB9LFxuICAgIG1lZGlhOiB7XG4gICAgICBoZWlnaHQ6IDE0MCxcbiAgICB9LFxuICB9KSxcbik7XG5cbmNvbnN0IER5bmFtaWNXaWtpID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvV2lraXBlZGlhJykudGhlbigobW9kKSA9PiBtb2QuV2lraXBlZGlhKSk7XG5cbmNvbnN0IFBhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgc2x1ZyA9IHJvdXRlci5xdWVyeS5zbHVnIHx8IFtdO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHBvaW50ID0gc2x1Z1tzbHVnLmxlbmd0aCAtIDFdO1xuICBjb25zdCBzdWJ0aXRsZSA9IHR5cGVvZiBzbHVnICE9PSAnc3RyaW5nJyA/IHNsdWcuc2xpY2UoMCwgc2x1Zy5sZW5ndGggLSAxKS5qb2luKCcsICcpIDogc2x1ZztcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fT5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgPENhcmRBY3Rpb25BcmVhPlxuICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cbiAgICAgICAgICAgICAgICAgIGltYWdlPVwiL3N0YXRpYy9pbWFnZXMvY2FyZHMvY29udGVtcGxhdGl2ZS1yZXB0aWxlLmpwZ1wiXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkNvbnRlbXBsYXRpdmUgUmVwdGlsZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIj5cbiAgICAgICAgICAgICAgICAgICAge3BvaW50fVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxuICAgICAgICAgICAgICAgICAgICB7c3VidGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgPER5bmFtaWNXaWtpIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuLy8gICAgICcvL2VuLndpa2lwZWRpYS5vcmcvdy9hcGkucGhwP2FjdGlvbj1xdWVyeSZwcm9wPXJldmlzaW9ucyZ0aXRsZXM9TWluc2smcnZzbG90cz0qJnJ2cHJvcD1jb250ZW50JmZvcm1hdHZlcnNpb249MicsXG4vLyAgICk7XG4vLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuLy8gICByZXR1cm4geyBwcm9wczogeyBkYXRhIH0gfTtcbi8vIH07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[...slug].tsx\n");

/***/ }),

/***/ 5:
/*!***********************************!*\
  !*** multi ./pages/[...slug].tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gleb/Developer/vannabi/pages/[...slug].tsx */"./pages/[...slug].tsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiP2I2OTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core\n");

/***/ }),

/***/ "@material-ui/icons/Map":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Map\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFwXCI/ZmM2OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01hcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Map\n");

/***/ }),

/***/ "@material-ui/icons/Share":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Share" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Share\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2hhcmVcIj9mMTA0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9pY29ucy9TaGFyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TaGFyZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Share\n");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dynamic\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIj82ZDNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvZHluYW1pYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/dynamic\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });