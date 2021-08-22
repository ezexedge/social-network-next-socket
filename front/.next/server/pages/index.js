"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext),\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/ezequielgallardo/Documents/social-network-next-socket/front/context/index.js\";\n\n\n\nconst UserContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\n\nconst UserProvider = ({\n  children\n}) => {\n  const {\n    0: state,\n    1: setState\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    user: {},\n    token: \"\"\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    setState(JSON.parse(window.localStorage.getItem(\"auth\")));\n  }, []);\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  const token = state && state.token ? state.token : \"\";\n  (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.baseURL) = \"http://localhost:8000/api\";\n  console.log((axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.baseURL));\n  (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.common.Authorization) = `Bearer ${token}`;\n  console.log((axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.common.Authorization));\n  axios__WEBPACK_IMPORTED_MODULE_2___default().interceptors.response.use(function (response) {\n    // Do something before request is sent\n    return response;\n  }, function (error) {\n    // Do something with request error\n    let res = error.response;\n\n    if (res.status === 401 && res.config && !res.config.__isRetryRequest) {\n      setState(null);\n      window.localStorage.removeItem(\"auth\");\n      router.push(\"/login\");\n    }\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n    value: [state, setState],\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, undefined);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1LLFdBQVcsZ0JBQUdKLG9EQUFhLEVBQWpDOztBQUVBLE1BQU1LLFlBQVksR0FBRyxDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxLQUFrQjtBQUNyQyxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JULCtDQUFRLENBQUM7QUFDakNVLElBQUFBLElBQUksRUFBRSxFQUQyQjtBQUVqQ0MsSUFBQUEsS0FBSyxFQUFFO0FBRjBCLEdBQUQsQ0FBbEM7QUFLQVQsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2RPLElBQUFBLFFBQVEsQ0FBQ0csSUFBSSxDQUFDQyxLQUFMLENBQVdDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsTUFBNUIsQ0FBWCxDQUFELENBQVI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsUUFBTUMsTUFBTSxHQUFHYixzREFBUyxFQUF4QjtBQUVBLFFBQU1PLEtBQUssR0FBR0gsS0FBSyxJQUFJQSxLQUFLLENBQUNHLEtBQWYsR0FBdUJILEtBQUssQ0FBQ0csS0FBN0IsR0FBcUMsRUFBbkQ7QUFDQVIsRUFBQUEsK0RBQUEsR0FBeUJpQiwyQkFBekI7QUFDQUcsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlyQiwrREFBWjtBQUVBQSxFQUFBQSxvRkFBQSxHQUFrRCxVQUFTUSxLQUFNLEVBQWpFO0FBRUFZLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZckIsb0ZBQVo7QUFFQUEsRUFBQUEsc0VBQUEsQ0FDRSxVQUFVeUIsUUFBVixFQUFvQjtBQUNsQjtBQUNBLFdBQU9BLFFBQVA7QUFDRCxHQUpILEVBS0UsVUFBVUUsS0FBVixFQUFpQjtBQUNmO0FBQ0EsUUFBSUMsR0FBRyxHQUFHRCxLQUFLLENBQUNGLFFBQWhCOztBQUNBLFFBQUlHLEdBQUcsQ0FBQ0MsTUFBSixLQUFlLEdBQWYsSUFBc0JELEdBQUcsQ0FBQ0UsTUFBMUIsSUFBb0MsQ0FBQ0YsR0FBRyxDQUFDRSxNQUFKLENBQVdDLGdCQUFwRCxFQUFzRTtBQUNwRXpCLE1BQUFBLFFBQVEsQ0FBQyxJQUFELENBQVI7QUFDQUssTUFBQUEsTUFBTSxDQUFDQyxZQUFQLENBQW9Cb0IsVUFBcEIsQ0FBK0IsTUFBL0I7QUFDQWxCLE1BQUFBLE1BQU0sQ0FBQ21CLElBQVAsQ0FBWSxRQUFaO0FBQ0Q7QUFDRixHQWJIO0FBZ0JBLHNCQUNFLDhEQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRSxDQUFDNUIsS0FBRCxFQUFRQyxRQUFSLENBQTdCO0FBQUEsY0FDR0Y7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQXpDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250Ly4vY29udGV4dC9pbmRleC5qcz8wMjY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuY29uc3QgVXNlclByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICB1c2VyOiB7fSxcbiAgICB0b2tlbjogXCJcIixcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTdGF0ZShKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhcIikpKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHRva2VuID0gc3RhdGUgJiYgc3RhdGUudG9rZW4gPyBzdGF0ZS50b2tlbiA6IFwiXCI7XG4gIGF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUEk7XG4gIGNvbnNvbGUubG9nKGF4aW9zLmRlZmF1bHRzLmJhc2VVUkwpXG5cbiAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJBdXRob3JpemF0aW9uXCJdID0gYEJlYXJlciAke3Rva2VufWA7XG5cbiAgY29uc29sZS5sb2coYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJBdXRob3JpemF0aW9uXCJdKVxuXG4gIGF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXG4gICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAvLyBEbyBzb21ldGhpbmcgYmVmb3JlIHJlcXVlc3QgaXMgc2VudFxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH0sXG4gICAgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCByZXF1ZXN0IGVycm9yXG4gICAgICBsZXQgcmVzID0gZXJyb3IucmVzcG9uc2U7XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAxICYmIHJlcy5jb25maWcgJiYgIXJlcy5jb25maWcuX19pc1JldHJ5UmVxdWVzdCkge1xuICAgICAgICBzZXRTdGF0ZShudWxsKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYXV0aFwiKTtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgICB9XG4gICAgfVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbc3RhdGUsIHNldFN0YXRlXX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IFVzZXJDb250ZXh0LCBVc2VyUHJvdmlkZXIgfTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInVzZVJvdXRlciIsIlVzZXJDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlciIsInRva2VuIiwiSlNPTiIsInBhcnNlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJvdXRlciIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUEkiLCJjb25zb2xlIiwibG9nIiwiaGVhZGVycyIsImNvbW1vbiIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiZXJyb3IiLCJyZXMiLCJzdGF0dXMiLCJjb25maWciLCJfX2lzUmV0cnlSZXF1ZXN0IiwicmVtb3ZlSXRlbSIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n\nvar _jsxFileName = \"/Users/ezequielgallardo/Documents/social-network-next-socket/front/pages/index.js\";\n\n\n\nconst Home = () => {\n  const {\n    0: state,\n    1: setState\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.UserContext);\n  console.log('holaaaa');\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"container\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"row\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          className: \"display-1 text-center\",\n          children: \"Home page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 13\n        }, undefined), JSON.stringify(state), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: \"/images/default.jpeg\",\n          alt: \"image\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 11\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 7\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsTUFBTUUsSUFBSSxHQUFHLE1BQU07QUFFakIsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQW1CSixpREFBVSxDQUFDQyxpREFBRCxDQUFuQztBQUVBSSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0Usc0JBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBQyx1QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUdHQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUwsS0FBZixDQUhILGVBSUU7QUFBSyxhQUFHLEVBQUMsc0JBQVQ7QUFBZ0MsYUFBRyxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVlELENBakJIOztBQW1CRSxpRUFBZUQsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250Ly4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtVc2VyQ29udGV4dH0gZnJvbSAnLi4vY29udGV4dCdcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG5cbiAgY29uc3QgW3N0YXRlLHNldFN0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpXG5cbiAgY29uc29sZS5sb2coJ2hvbGFhYWEnKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS0xIHRleHQtY2VudGVyXCI+SG9tZSBwYWdlPC9oMT5cblxuICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KHN0YXRlKX1cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9kZWZhdWx0LmpwZWdcIiBhbHQ9XCJpbWFnZVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbiAgXG4gIGV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsIkhvbWUiLCJzdGF0ZSIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();