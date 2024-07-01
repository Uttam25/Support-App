"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/BodyMap/BodyMap.tsx":
/*!********************************************!*\
  !*** ./src/components/BodyMap/BodyMap.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-google-maps/api */ \"(app-pages-browser)/./node_modules/@react-google-maps/api/dist/esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// pages/map.js\n\n\nconst stateCoordinates = {\n    California: [\n        {\n            lat: 32.5121,\n            lng: -117.3397\n        },\n        {\n            lat: 42.0126,\n            lng: -114.1312\n        }\n    ],\n    Texas: [\n        {\n            lat: 25.8371,\n            lng: -106.6456\n        },\n        {\n            lat: 36.5007,\n            lng: -93.5085\n        }\n    ]\n};\nconst BodyMap = ()=>{\n    _s();\n    const [center, setCenter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        lat: 37.0902,\n        lng: -95.7129\n    }); // Center of USA\n    const [zoom, setZoom] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(4);\n    const handleStateClick = (coordinates)=>{\n        // Calculate the center of the state\n        const latitudes = coordinates.map((coord)=>coord.lat);\n        const longitudes = coordinates.map((coord)=>coord.lng);\n        const centerLat = (Math.max(...latitudes) + Math.min(...latitudes)) / 2;\n        const centerLng = (Math.max(...longitudes) + Math.min(...longitudes)) / 2;\n        setCenter({\n            lat: centerLat,\n            lng: centerLng\n        });\n        setZoom(7); // Adjust zoom level as needed\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#fff]  mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.LoadScript, {\n            googleMapsApiKey: \"AIzaSyDb6hutfoAAWbW3_qJAP2leiWpaQjfah0Q\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.GoogleMap, {\n                mapContainerStyle: {\n                    width: \"50%\",\n                    height: \"100vh\",\n                    backgroundColor: \"white\"\n                },\n                center: center,\n                zoom: zoom,\n                children: Object.keys(stateCoordinates).map((state)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Polygon, {\n                        paths: stateCoordinates[state],\n                        options: {\n                            fillColor: \"white\",\n                            fillOpacity: 0.1,\n                            strokeColor: \"white\",\n                            strokeOpacity: 0.8,\n                            strokeWeight: 2\n                        },\n                        onClick: ()=>handleStateClick(stateCoordinates[state])\n                    }, state, false, {\n                        fileName: \"/Users/unnathm/Support-App/src/components/BodyMap/BodyMap.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/unnathm/Support-App/src/components/BodyMap/BodyMap.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/unnathm/Support-App/src/components/BodyMap/BodyMap.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/unnathm/Support-App/src/components/BodyMap/BodyMap.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BodyMap, \"HL3e6L3pvodzdR8w/u1fGYtbvwA=\");\n_c = BodyMap;\nconst MapPage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row m-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"m-5\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BodyMap, {}, void 0, false, {\n                fileName: \"/Users/unnathm/Support-App/src/components/BodyMap/BodyMap.tsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/unnathm/Support-App/src/components/BodyMap/BodyMap.tsx\",\n            lineNumber: 72,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/unnathm/Support-App/src/components/BodyMap/BodyMap.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = MapPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MapPage);\nvar _c, _c1;\n$RefreshReg$(_c, \"BodyMap\");\n$RefreshReg$(_c1, \"MapPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0JvZHlNYXAvQm9keU1hcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBLGVBQWU7QUFFeUI7QUFDZ0M7QUFFeEUsTUFBTUssbUJBQW1CO0lBQ3ZCQyxZQUFZO1FBQ1Y7WUFBRUMsS0FBSztZQUFTQyxLQUFLLENBQUM7UUFBUztRQUMvQjtZQUFFRCxLQUFLO1lBQVNDLEtBQUssQ0FBQztRQUFTO0tBRWhDO0lBQ0RDLE9BQU87UUFDTDtZQUFFRixLQUFLO1lBQVNDLEtBQUssQ0FBQztRQUFTO1FBQy9CO1lBQUVELEtBQUs7WUFBU0MsS0FBSyxDQUFDO1FBQVE7S0FFL0I7QUFFSDtBQUVBLE1BQU1FLFVBQVU7O0lBQ2QsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdYLCtDQUFRQSxDQUFDO1FBQUVNLEtBQUs7UUFBU0MsS0FBSyxDQUFDO0lBQVEsSUFBSSxnQkFBZ0I7SUFDdkYsTUFBTSxDQUFDSyxNQUFNQyxRQUFRLEdBQUdiLCtDQUFRQSxDQUFDO0lBRWpDLE1BQU1jLG1CQUFtQixDQUFDQztRQUN4QixvQ0FBb0M7UUFDcEMsTUFBTUMsWUFBWUQsWUFBWUUsR0FBRyxDQUFDLENBQUNDLFFBQVVBLE1BQU1aLEdBQUc7UUFDdEQsTUFBTWEsYUFBYUosWUFBWUUsR0FBRyxDQUFDLENBQUNDLFFBQVVBLE1BQU1YLEdBQUc7UUFDdkQsTUFBTWEsWUFBWSxDQUFDQyxLQUFLQyxHQUFHLElBQUlOLGFBQWFLLEtBQUtFLEdBQUcsSUFBSVAsVUFBUyxJQUFLO1FBQ3RFLE1BQU1RLFlBQVksQ0FBQ0gsS0FBS0MsR0FBRyxJQUFJSCxjQUFjRSxLQUFLRSxHQUFHLElBQUlKLFdBQVUsSUFBSztRQUV4RVIsVUFBVTtZQUFFTCxLQUFLYztZQUFXYixLQUFLaUI7UUFBVTtRQUMzQ1gsUUFBUSxJQUFJLDhCQUE4QjtJQUM1QztJQUVBLHFCQUNFLDhEQUFDWTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDeEIsOERBQVVBO1lBQUN5QixrQkFBaUI7c0JBQzNCLDRFQUFDMUIsNkRBQVNBO2dCQUNSMkIsbUJBQW1CO29CQUNqQkMsT0FBTztvQkFDUEMsUUFBUTtvQkFDUkMsaUJBQWlCO2dCQUNuQjtnQkFDQXJCLFFBQVFBO2dCQUNSRSxNQUFNQTswQkFFTG9CLE9BQU9DLElBQUksQ0FBQzdCLGtCQUFrQmEsR0FBRyxDQUFDLENBQUNpQixzQkFDbEMsOERBQUMvQiwyREFBT0E7d0JBRU5nQyxPQUFPL0IsZ0JBQWdCLENBQUM4QixNQUFNO3dCQUM5QkUsU0FBUzs0QkFDUEMsV0FBVzs0QkFDWEMsYUFBYTs0QkFDYkMsYUFBYTs0QkFDYkMsZUFBZTs0QkFDZkMsY0FBYzt3QkFDaEI7d0JBQ0FDLFNBQVMsSUFBTTVCLGlCQUFpQlYsZ0JBQWdCLENBQUM4QixNQUFNO3VCQVRsREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JuQjtHQTdDTXpCO0tBQUFBO0FBK0NOLE1BQU1rQyxVQUFVO0lBQ2QscUJBQ0UsOERBQUNsQjtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDakI7Ozs7Ozs7Ozs7Ozs7OztBQUlUO01BUk1rQztBQVVOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0JvZHlNYXAvQm9keU1hcC50c3g/YjljZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuLy8gcGFnZXMvbWFwLmpzXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR29vZ2xlTWFwLCBMb2FkU2NyaXB0LCBQb2x5Z29uIH0gZnJvbSBcIkByZWFjdC1nb29nbGUtbWFwcy9hcGlcIjtcblxuY29uc3Qgc3RhdGVDb29yZGluYXRlcyA9IHtcbiAgQ2FsaWZvcm5pYTogW1xuICAgIHsgbGF0OiAzMi41MTIxLCBsbmc6IC0xMTcuMzM5NyB9LFxuICAgIHsgbGF0OiA0Mi4wMTI2LCBsbmc6IC0xMTQuMTMxMiB9LFxuICAgIC8vIEFkZCBtb3JlIHBvaW50cyBmb3IgQ2FsaWZvcm5pYS4uLlxuICBdLFxuICBUZXhhczogW1xuICAgIHsgbGF0OiAyNS44MzcxLCBsbmc6IC0xMDYuNjQ1NiB9LFxuICAgIHsgbGF0OiAzNi41MDA3LCBsbmc6IC05My41MDg1IH0sXG4gICAgLy8gQWRkIG1vcmUgcG9pbnRzIGZvciBUZXhhcy4uLlxuICBdLFxuICAvLyBBZGQgbW9yZSBzdGF0ZXMuLi5cbn07XG5cbmNvbnN0IEJvZHlNYXAgPSAoKSA9PiB7XG4gIGNvbnN0IFtjZW50ZXIsIHNldENlbnRlcl0gPSB1c2VTdGF0ZSh7IGxhdDogMzcuMDkwMiwgbG5nOiAtOTUuNzEyOSB9KTsgLy8gQ2VudGVyIG9mIFVTQVxuICBjb25zdCBbem9vbSwgc2V0Wm9vbV0gPSB1c2VTdGF0ZSg0KTtcblxuICBjb25zdCBoYW5kbGVTdGF0ZUNsaWNrID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBjZW50ZXIgb2YgdGhlIHN0YXRlXG4gICAgY29uc3QgbGF0aXR1ZGVzID0gY29vcmRpbmF0ZXMubWFwKChjb29yZCkgPT4gY29vcmQubGF0KTtcbiAgICBjb25zdCBsb25naXR1ZGVzID0gY29vcmRpbmF0ZXMubWFwKChjb29yZCkgPT4gY29vcmQubG5nKTtcbiAgICBjb25zdCBjZW50ZXJMYXQgPSAoTWF0aC5tYXgoLi4ubGF0aXR1ZGVzKSArIE1hdGgubWluKC4uLmxhdGl0dWRlcykpIC8gMjtcbiAgICBjb25zdCBjZW50ZXJMbmcgPSAoTWF0aC5tYXgoLi4ubG9uZ2l0dWRlcykgKyBNYXRoLm1pbiguLi5sb25naXR1ZGVzKSkgLyAyO1xuXG4gICAgc2V0Q2VudGVyKHsgbGF0OiBjZW50ZXJMYXQsIGxuZzogY2VudGVyTG5nIH0pO1xuICAgIHNldFpvb20oNyk7IC8vIEFkanVzdCB6b29tIGxldmVsIGFzIG5lZWRlZFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI2ZmZl0gIG14LWF1dG9cIj5cbiAgICAgIDxMb2FkU2NyaXB0IGdvb2dsZU1hcHNBcGlLZXk9XCJBSXphU3lEYjZodXRmb0FBV2JXM19xSkFQMmxlaVdwYVFqZmFoMFFcIj5cbiAgICAgICAgPEdvb2dsZU1hcFxuICAgICAgICAgIG1hcENvbnRhaW5lclN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogXCI1MCVcIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBjZW50ZXI9e2NlbnRlcn1cbiAgICAgICAgICB6b29tPXt6b29tfVxuICAgICAgICA+XG4gICAgICAgICAge09iamVjdC5rZXlzKHN0YXRlQ29vcmRpbmF0ZXMpLm1hcCgoc3RhdGUpID0+IChcbiAgICAgICAgICAgIDxQb2x5Z29uXG4gICAgICAgICAgICAgIGtleT17c3RhdGV9XG4gICAgICAgICAgICAgIHBhdGhzPXtzdGF0ZUNvb3JkaW5hdGVzW3N0YXRlXX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAwLjEsXG4gICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICBzdHJva2VPcGFjaXR5OiAwLjgsXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2VpZ2h0OiAyLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdGF0ZUNsaWNrKHN0YXRlQ29vcmRpbmF0ZXNbc3RhdGVdKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR29vZ2xlTWFwPlxuICAgICAgPC9Mb2FkU2NyaXB0PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgTWFwUGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgbS01XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tNVwiPlxuICAgICAgICA8Qm9keU1hcCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXBQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJHb29nbGVNYXAiLCJMb2FkU2NyaXB0IiwiUG9seWdvbiIsInN0YXRlQ29vcmRpbmF0ZXMiLCJDYWxpZm9ybmlhIiwibGF0IiwibG5nIiwiVGV4YXMiLCJCb2R5TWFwIiwiY2VudGVyIiwic2V0Q2VudGVyIiwiem9vbSIsInNldFpvb20iLCJoYW5kbGVTdGF0ZUNsaWNrIiwiY29vcmRpbmF0ZXMiLCJsYXRpdHVkZXMiLCJtYXAiLCJjb29yZCIsImxvbmdpdHVkZXMiLCJjZW50ZXJMYXQiLCJNYXRoIiwibWF4IiwibWluIiwiY2VudGVyTG5nIiwiZGl2IiwiY2xhc3NOYW1lIiwiZ29vZ2xlTWFwc0FwaUtleSIsIm1hcENvbnRhaW5lclN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJPYmplY3QiLCJrZXlzIiwic3RhdGUiLCJwYXRocyIsIm9wdGlvbnMiLCJmaWxsQ29sb3IiLCJmaWxsT3BhY2l0eSIsInN0cm9rZUNvbG9yIiwic3Ryb2tlT3BhY2l0eSIsInN0cm9rZVdlaWdodCIsIm9uQ2xpY2siLCJNYXBQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/BodyMap/BodyMap.tsx\n"));

/***/ })

});