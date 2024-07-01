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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-google-maps/api */ \"(app-pages-browser)/./node_modules/@react-google-maps/api/dist/esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// pages/map.js\n\n\nconst stateCoordinates = {\n    California: [\n        {\n            lat: 32.5121,\n            lng: -117.3397\n        },\n        {\n            lat: 42.0126,\n            lng: -114.1312\n        }\n    ],\n    Texas: [\n        {\n            lat: 25.8371,\n            lng: -106.6456\n        },\n        {\n            lat: 36.5007,\n            lng: -93.5085\n        }\n    ]\n};\nconst BodyMap = ()=>{\n    _s();\n    const [center, setCenter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        lat: 37.0902,\n        lng: -95.7129\n    }); // Center of USA\n    const [zoom, setZoom] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(4);\n    const handleStateClick = (coordinates)=>{\n        // Calculate the center of the state\n        const latitudes = coordinates.map((coord)=>coord.lat);\n        const longitudes = coordinates.map((coord)=>coord.lng);\n        const centerLat = (Math.max(...latitudes) + Math.min(...latitudes)) / 2;\n        const centerLng = (Math.max(...longitudes) + Math.min(...longitudes)) / 2;\n        setCenter({\n            lat: centerLat,\n            lng: centerLng\n        });\n        setZoom(7); // Adjust zoom level as needed\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#fff]  mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.LoadScript, {\n            googleMapsApiKey: \"AIzaSyDb6hutfoAAWbW3_qJAP2leiWpaQjfah0Q\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.GoogleMap, {\n                mapContainerStyle: {\n                    width: \"50%\",\n                    height: \"100vh\",\n                    backgroundColor: \"white\"\n                },\n                center: center,\n                zoom: zoom,\n                children: Object.keys(stateCoordinates).map((state)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__.Polygon, {\n                        paths: stateCoordinates[state],\n                        options: {\n                            fillColor: \"white\",\n                            fillOpacity: 0.1,\n                            strokeColor: \"white\",\n                            strokeOpacity: 0.8,\n                            strokeWeight: 2\n                        },\n                        onClick: ()=>handleStateClick(stateCoordinates[state])\n                    }, state, false, {\n                        fileName: \"/Users/unnathm/Support-App/src/components/BodyMap/BodyMap.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/unnathm/Support-App/src/components/BodyMap/BodyMap.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/unnathm/Support-App/src/components/BodyMap/BodyMap.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/unnathm/Support-App/src/components/BodyMap/BodyMap.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BodyMap, \"HL3e6L3pvodzdR8w/u1fGYtbvwA=\");\n_c = BodyMap;\nconst MapPage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row m-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BodyMap, {}, void 0, false, {\n                fileName: \"/Users/unnathm/Support-App/src/components/BodyMap/BodyMap.tsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/unnathm/Support-App/src/components/BodyMap/BodyMap.tsx\",\n            lineNumber: 72,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/unnathm/Support-App/src/components/BodyMap/BodyMap.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = MapPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MapPage);\nvar _c, _c1;\n$RefreshReg$(_c, \"BodyMap\");\n$RefreshReg$(_c1, \"MapPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0JvZHlNYXAvQm9keU1hcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBLGVBQWU7QUFFeUI7QUFDZ0M7QUFFeEUsTUFBTUssbUJBQW1CO0lBQ3ZCQyxZQUFZO1FBQ1Y7WUFBRUMsS0FBSztZQUFTQyxLQUFLLENBQUM7UUFBUztRQUMvQjtZQUFFRCxLQUFLO1lBQVNDLEtBQUssQ0FBQztRQUFTO0tBRWhDO0lBQ0RDLE9BQU87UUFDTDtZQUFFRixLQUFLO1lBQVNDLEtBQUssQ0FBQztRQUFTO1FBQy9CO1lBQUVELEtBQUs7WUFBU0MsS0FBSyxDQUFDO1FBQVE7S0FFL0I7QUFFSDtBQUVBLE1BQU1FLFVBQVU7O0lBQ2QsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdYLCtDQUFRQSxDQUFDO1FBQUVNLEtBQUs7UUFBU0MsS0FBSyxDQUFDO0lBQVEsSUFBSSxnQkFBZ0I7SUFDdkYsTUFBTSxDQUFDSyxNQUFNQyxRQUFRLEdBQUdiLCtDQUFRQSxDQUFDO0lBRWpDLE1BQU1jLG1CQUFtQixDQUFDQztRQUN4QixvQ0FBb0M7UUFDcEMsTUFBTUMsWUFBWUQsWUFBWUUsR0FBRyxDQUFDLENBQUNDLFFBQVVBLE1BQU1aLEdBQUc7UUFDdEQsTUFBTWEsYUFBYUosWUFBWUUsR0FBRyxDQUFDLENBQUNDLFFBQVVBLE1BQU1YLEdBQUc7UUFDdkQsTUFBTWEsWUFBWSxDQUFDQyxLQUFLQyxHQUFHLElBQUlOLGFBQWFLLEtBQUtFLEdBQUcsSUFBSVAsVUFBUyxJQUFLO1FBQ3RFLE1BQU1RLFlBQVksQ0FBQ0gsS0FBS0MsR0FBRyxJQUFJSCxjQUFjRSxLQUFLRSxHQUFHLElBQUlKLFdBQVUsSUFBSztRQUV4RVIsVUFBVTtZQUFFTCxLQUFLYztZQUFXYixLQUFLaUI7UUFBVTtRQUMzQ1gsUUFBUSxJQUFJLDhCQUE4QjtJQUM1QztJQUVBLHFCQUNFLDhEQUFDWTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDeEIsOERBQVVBO1lBQUN5QixrQkFBaUI7c0JBQzNCLDRFQUFDMUIsNkRBQVNBO2dCQUNSMkIsbUJBQW1CO29CQUNqQkMsT0FBTztvQkFDUEMsUUFBUTtvQkFDUkMsaUJBQWlCO2dCQUNuQjtnQkFDQXJCLFFBQVFBO2dCQUNSRSxNQUFNQTswQkFFTG9CLE9BQU9DLElBQUksQ0FBQzdCLGtCQUFrQmEsR0FBRyxDQUFDLENBQUNpQixzQkFDbEMsOERBQUMvQiwyREFBT0E7d0JBRU5nQyxPQUFPL0IsZ0JBQWdCLENBQUM4QixNQUFNO3dCQUM5QkUsU0FBUzs0QkFDUEMsV0FBVzs0QkFDWEMsYUFBYTs0QkFDYkMsYUFBYTs0QkFDYkMsZUFBZTs0QkFDZkMsY0FBYzt3QkFDaEI7d0JBQ0FDLFNBQVMsSUFBTTVCLGlCQUFpQlYsZ0JBQWdCLENBQUM4QixNQUFNO3VCQVRsREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JuQjtHQTdDTXpCO0tBQUFBO0FBK0NOLE1BQU1rQyxVQUFVO0lBQ2QscUJBQ0UsOERBQUNsQjtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtzQkFDQyw0RUFBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7QUFJVDtNQVJNa0M7QUFVTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Cb2R5TWFwL0JvZHlNYXAudHN4P2I5Y2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbi8vIHBhZ2VzL21hcC5qc1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdvb2dsZU1hcCwgTG9hZFNjcmlwdCwgUG9seWdvbiB9IGZyb20gXCJAcmVhY3QtZ29vZ2xlLW1hcHMvYXBpXCI7XG5cbmNvbnN0IHN0YXRlQ29vcmRpbmF0ZXMgPSB7XG4gIENhbGlmb3JuaWE6IFtcbiAgICB7IGxhdDogMzIuNTEyMSwgbG5nOiAtMTE3LjMzOTcgfSxcbiAgICB7IGxhdDogNDIuMDEyNiwgbG5nOiAtMTE0LjEzMTIgfSxcbiAgICAvLyBBZGQgbW9yZSBwb2ludHMgZm9yIENhbGlmb3JuaWEuLi5cbiAgXSxcbiAgVGV4YXM6IFtcbiAgICB7IGxhdDogMjUuODM3MSwgbG5nOiAtMTA2LjY0NTYgfSxcbiAgICB7IGxhdDogMzYuNTAwNywgbG5nOiAtOTMuNTA4NSB9LFxuICAgIC8vIEFkZCBtb3JlIHBvaW50cyBmb3IgVGV4YXMuLi5cbiAgXSxcbiAgLy8gQWRkIG1vcmUgc3RhdGVzLi4uXG59O1xuXG5jb25zdCBCb2R5TWFwID0gKCkgPT4ge1xuICBjb25zdCBbY2VudGVyLCBzZXRDZW50ZXJdID0gdXNlU3RhdGUoeyBsYXQ6IDM3LjA5MDIsIGxuZzogLTk1LjcxMjkgfSk7IC8vIENlbnRlciBvZiBVU0FcbiAgY29uc3QgW3pvb20sIHNldFpvb21dID0gdXNlU3RhdGUoNCk7XG5cbiAgY29uc3QgaGFuZGxlU3RhdGVDbGljayA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIC8vIENhbGN1bGF0ZSB0aGUgY2VudGVyIG9mIHRoZSBzdGF0ZVxuICAgIGNvbnN0IGxhdGl0dWRlcyA9IGNvb3JkaW5hdGVzLm1hcCgoY29vcmQpID0+IGNvb3JkLmxhdCk7XG4gICAgY29uc3QgbG9uZ2l0dWRlcyA9IGNvb3JkaW5hdGVzLm1hcCgoY29vcmQpID0+IGNvb3JkLmxuZyk7XG4gICAgY29uc3QgY2VudGVyTGF0ID0gKE1hdGgubWF4KC4uLmxhdGl0dWRlcykgKyBNYXRoLm1pbiguLi5sYXRpdHVkZXMpKSAvIDI7XG4gICAgY29uc3QgY2VudGVyTG5nID0gKE1hdGgubWF4KC4uLmxvbmdpdHVkZXMpICsgTWF0aC5taW4oLi4ubG9uZ2l0dWRlcykpIC8gMjtcblxuICAgIHNldENlbnRlcih7IGxhdDogY2VudGVyTGF0LCBsbmc6IGNlbnRlckxuZyB9KTtcbiAgICBzZXRab29tKDcpOyAvLyBBZGp1c3Qgem9vbSBsZXZlbCBhcyBuZWVkZWRcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyNmZmZdICBteC1hdXRvXCI+XG4gICAgICA8TG9hZFNjcmlwdCBnb29nbGVNYXBzQXBpS2V5PVwiQUl6YVN5RGI2aHV0Zm9BQVdiVzNfcUpBUDJsZWlXcGFRamZhaDBRXCI+XG4gICAgICAgIDxHb29nbGVNYXBcbiAgICAgICAgICBtYXBDb250YWluZXJTdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IFwiNTAlXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgY2VudGVyPXtjZW50ZXJ9XG4gICAgICAgICAgem9vbT17em9vbX1cbiAgICAgICAgPlxuICAgICAgICAgIHtPYmplY3Qua2V5cyhzdGF0ZUNvb3JkaW5hdGVzKS5tYXAoKHN0YXRlKSA9PiAoXG4gICAgICAgICAgICA8UG9seWdvblxuICAgICAgICAgICAgICBrZXk9e3N0YXRlfVxuICAgICAgICAgICAgICBwYXRocz17c3RhdGVDb29yZGluYXRlc1tzdGF0ZV19XG4gICAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICBmaWxsQ29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eTogMC4xLFxuICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eTogMC44LFxuICAgICAgICAgICAgICAgIHN0cm9rZVdlaWdodDogMixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU3RhdGVDbGljayhzdGF0ZUNvb3JkaW5hdGVzW3N0YXRlXSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dvb2dsZU1hcD5cbiAgICAgIDwvTG9hZFNjcmlwdD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IE1hcFBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IG0tNVwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPEJvZHlNYXAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFwUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiR29vZ2xlTWFwIiwiTG9hZFNjcmlwdCIsIlBvbHlnb24iLCJzdGF0ZUNvb3JkaW5hdGVzIiwiQ2FsaWZvcm5pYSIsImxhdCIsImxuZyIsIlRleGFzIiwiQm9keU1hcCIsImNlbnRlciIsInNldENlbnRlciIsInpvb20iLCJzZXRab29tIiwiaGFuZGxlU3RhdGVDbGljayIsImNvb3JkaW5hdGVzIiwibGF0aXR1ZGVzIiwibWFwIiwiY29vcmQiLCJsb25naXR1ZGVzIiwiY2VudGVyTGF0IiwiTWF0aCIsIm1heCIsIm1pbiIsImNlbnRlckxuZyIsImRpdiIsImNsYXNzTmFtZSIsImdvb2dsZU1hcHNBcGlLZXkiLCJtYXBDb250YWluZXJTdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiT2JqZWN0Iiwia2V5cyIsInN0YXRlIiwicGF0aHMiLCJvcHRpb25zIiwiZmlsbENvbG9yIiwiZmlsbE9wYWNpdHkiLCJzdHJva2VDb2xvciIsInN0cm9rZU9wYWNpdHkiLCJzdHJva2VXZWlnaHQiLCJvbkNsaWNrIiwiTWFwUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/BodyMap/BodyMap.tsx\n"));

/***/ })

});