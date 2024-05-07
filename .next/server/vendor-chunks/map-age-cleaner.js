"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/map-age-cleaner";
exports.ids = ["vendor-chunks/map-age-cleaner"];
exports.modules = {

/***/ "(ssr)/./node_modules/map-age-cleaner/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/map-age-cleaner/dist/index.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst p_defer_1 = __importDefault(__webpack_require__(/*! p-defer */ \"(ssr)/./node_modules/p-defer/index.js\"));\nfunction mapAgeCleaner(map, property = 'maxAge') {\n    let processingKey;\n    let processingTimer;\n    let processingDeferred;\n    const cleanup = () => __awaiter(this, void 0, void 0, function* () {\n        if (processingKey !== undefined) {\n            // If we are already processing an item, we can safely exit\n            return;\n        }\n        const setupTimer = (item) => __awaiter(this, void 0, void 0, function* () {\n            processingDeferred = p_defer_1.default();\n            const delay = item[1][property] - Date.now();\n            if (delay <= 0) {\n                // Remove the item immediately if the delay is equal to or below 0\n                map.delete(item[0]);\n                processingDeferred.resolve();\n                return;\n            }\n            // Keep track of the current processed key\n            processingKey = item[0];\n            processingTimer = setTimeout(() => {\n                // Remove the item when the timeout fires\n                map.delete(item[0]);\n                if (processingDeferred) {\n                    processingDeferred.resolve();\n                }\n            }, delay);\n            // tslint:disable-next-line:strict-type-predicates\n            if (typeof processingTimer.unref === 'function') {\n                // Don't hold up the process from exiting\n                processingTimer.unref();\n            }\n            return processingDeferred.promise;\n        });\n        try {\n            for (const entry of map) {\n                yield setupTimer(entry);\n            }\n        }\n        catch (_a) {\n            // Do nothing if an error occurs, this means the timer was cleaned up and we should stop processing\n        }\n        processingKey = undefined;\n    });\n    const reset = () => {\n        processingKey = undefined;\n        if (processingTimer !== undefined) {\n            clearTimeout(processingTimer);\n            processingTimer = undefined;\n        }\n        if (processingDeferred !== undefined) { // tslint:disable-line:early-exit\n            processingDeferred.reject(undefined);\n            processingDeferred = undefined;\n        }\n    };\n    const originalSet = map.set.bind(map);\n    map.set = (key, value) => {\n        if (map.has(key)) {\n            // If the key already exist, remove it so we can add it back at the end of the map.\n            map.delete(key);\n        }\n        // Call the original `map.set`\n        const result = originalSet(key, value);\n        // If we are already processing a key and the key added is the current processed key, stop processing it\n        if (processingKey && processingKey === key) {\n            reset();\n        }\n        // Always run the cleanup method in case it wasn't started yet\n        cleanup(); // tslint:disable-line:no-floating-promises\n        return result;\n    };\n    cleanup(); // tslint:disable-line:no-floating-promises\n    return map;\n}\nexports[\"default\"] = mapAgeCleaner;\n// Add support for CJS\nmodule.exports = mapAgeCleaner;\nmodule.exports[\"default\"] = mapAgeCleaner;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWFwLWFnZS1jbGVhbmVyL2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjtBQUNBO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDLGlFQUFpRSx3QkFBd0I7QUFDekg7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQ0FBa0MsbUJBQU8sQ0FBQyxzREFBUztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0Esa0JBQWU7QUFDZjtBQUNBO0FBQ0EseUJBQXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3VwcG9ydC1hcHAvLi9ub2RlX21vZHVsZXMvbWFwLWFnZS1jbGVhbmVyL2Rpc3QvaW5kZXguanM/MGI3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcF9kZWZlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJwLWRlZmVyXCIpKTtcbmZ1bmN0aW9uIG1hcEFnZUNsZWFuZXIobWFwLCBwcm9wZXJ0eSA9ICdtYXhBZ2UnKSB7XG4gICAgbGV0IHByb2Nlc3NpbmdLZXk7XG4gICAgbGV0IHByb2Nlc3NpbmdUaW1lcjtcbiAgICBsZXQgcHJvY2Vzc2luZ0RlZmVycmVkO1xuICAgIGNvbnN0IGNsZWFudXAgPSAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmIChwcm9jZXNzaW5nS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGFyZSBhbHJlYWR5IHByb2Nlc3NpbmcgYW4gaXRlbSwgd2UgY2FuIHNhZmVseSBleGl0XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2V0dXBUaW1lciA9IChpdGVtKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBwcm9jZXNzaW5nRGVmZXJyZWQgPSBwX2RlZmVyXzEuZGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgZGVsYXkgPSBpdGVtWzFdW3Byb3BlcnR5XSAtIERhdGUubm93KCk7XG4gICAgICAgICAgICBpZiAoZGVsYXkgPD0gMCkge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgaXRlbSBpbW1lZGlhdGVseSBpZiB0aGUgZGVsYXkgaXMgZXF1YWwgdG8gb3IgYmVsb3cgMFxuICAgICAgICAgICAgICAgIG1hcC5kZWxldGUoaXRlbVswXSk7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc2luZ0RlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBLZWVwIHRyYWNrIG9mIHRoZSBjdXJyZW50IHByb2Nlc3NlZCBrZXlcbiAgICAgICAgICAgIHByb2Nlc3NpbmdLZXkgPSBpdGVtWzBdO1xuICAgICAgICAgICAgcHJvY2Vzc2luZ1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBpdGVtIHdoZW4gdGhlIHRpbWVvdXQgZmlyZXNcbiAgICAgICAgICAgICAgICBtYXAuZGVsZXRlKGl0ZW1bMF0pO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzaW5nRGVmZXJyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2luZ0RlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6c3RyaWN0LXR5cGUtcHJlZGljYXRlc1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9jZXNzaW5nVGltZXIudW5yZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAvLyBEb24ndCBob2xkIHVwIHRoZSBwcm9jZXNzIGZyb20gZXhpdGluZ1xuICAgICAgICAgICAgICAgIHByb2Nlc3NpbmdUaW1lci51bnJlZigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NpbmdEZWZlcnJlZC5wcm9taXNlO1xuICAgICAgICB9KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgbWFwKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgc2V0dXBUaW1lcihlbnRyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGFuIGVycm9yIG9jY3VycywgdGhpcyBtZWFucyB0aGUgdGltZXIgd2FzIGNsZWFuZWQgdXAgYW5kIHdlIHNob3VsZCBzdG9wIHByb2Nlc3NpbmdcbiAgICAgICAgfVxuICAgICAgICBwcm9jZXNzaW5nS2V5ID0gdW5kZWZpbmVkO1xuICAgIH0pO1xuICAgIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgICAgICBwcm9jZXNzaW5nS2V5ID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAocHJvY2Vzc2luZ1RpbWVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChwcm9jZXNzaW5nVGltZXIpO1xuICAgICAgICAgICAgcHJvY2Vzc2luZ1RpbWVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzaW5nRGVmZXJyZWQgIT09IHVuZGVmaW5lZCkgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOmVhcmx5LWV4aXRcbiAgICAgICAgICAgIHByb2Nlc3NpbmdEZWZlcnJlZC5yZWplY3QodW5kZWZpbmVkKTtcbiAgICAgICAgICAgIHByb2Nlc3NpbmdEZWZlcnJlZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgb3JpZ2luYWxTZXQgPSBtYXAuc2V0LmJpbmQobWFwKTtcbiAgICBtYXAuc2V0ID0gKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKG1hcC5oYXMoa2V5KSkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGtleSBhbHJlYWR5IGV4aXN0LCByZW1vdmUgaXQgc28gd2UgY2FuIGFkZCBpdCBiYWNrIGF0IHRoZSBlbmQgb2YgdGhlIG1hcC5cbiAgICAgICAgICAgIG1hcC5kZWxldGUoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDYWxsIHRoZSBvcmlnaW5hbCBgbWFwLnNldGBcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gb3JpZ2luYWxTZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIC8vIElmIHdlIGFyZSBhbHJlYWR5IHByb2Nlc3NpbmcgYSBrZXkgYW5kIHRoZSBrZXkgYWRkZWQgaXMgdGhlIGN1cnJlbnQgcHJvY2Vzc2VkIGtleSwgc3RvcCBwcm9jZXNzaW5nIGl0XG4gICAgICAgIGlmIChwcm9jZXNzaW5nS2V5ICYmIHByb2Nlc3NpbmdLZXkgPT09IGtleSkge1xuICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBbHdheXMgcnVuIHRoZSBjbGVhbnVwIG1ldGhvZCBpbiBjYXNlIGl0IHdhc24ndCBzdGFydGVkIHlldFxuICAgICAgICBjbGVhbnVwKCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tZmxvYXRpbmctcHJvbWlzZXNcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIGNsZWFudXAoKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1mbG9hdGluZy1wcm9taXNlc1xuICAgIHJldHVybiBtYXA7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBtYXBBZ2VDbGVhbmVyO1xuLy8gQWRkIHN1cHBvcnQgZm9yIENKU1xubW9kdWxlLmV4cG9ydHMgPSBtYXBBZ2VDbGVhbmVyO1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IG1hcEFnZUNsZWFuZXI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/map-age-cleaner/dist/index.js\n");

/***/ })

};
;