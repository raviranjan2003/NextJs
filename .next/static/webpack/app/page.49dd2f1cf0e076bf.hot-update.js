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

/***/ "(app-pages-browser)/./components/imageSlideShow.js":
/*!**************************************!*\
  !*** ./components/imageSlideShow.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ImageSlideshow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_burger_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/burger.jpg */ \"(app-pages-browser)/./assets/burger.jpg\");\n/* harmony import */ var _assets_curry_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/curry.jpg */ \"(app-pages-browser)/./assets/curry.jpg\");\n/* harmony import */ var _assets_dumplings_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/dumplings.jpg */ \"(app-pages-browser)/./assets/dumplings.jpg\");\n/* harmony import */ var _assets_macncheese_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/macncheese.jpg */ \"(app-pages-browser)/./assets/macncheese.jpg\");\n/* harmony import */ var _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/pizza.jpg */ \"(app-pages-browser)/./assets/pizza.jpg\");\n/* harmony import */ var _assets_schnitzel_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/assets/schnitzel.jpg */ \"(app-pages-browser)/./assets/schnitzel.jpg\");\n/* harmony import */ var _assets_tomato_salad_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/assets/tomato-salad.jpg */ \"(app-pages-browser)/./assets/tomato-salad.jpg\");\n/* harmony import */ var _imageSlideShow_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./imageSlideShow.module.css */ \"(app-pages-browser)/./components/imageSlideShow.module.css\");\n/* harmony import */ var _imageSlideShow_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_imageSlideShow_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst images = [\n    {\n        image: _assets_burger_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        alt: \"A delicious, juicy burger\"\n    },\n    {\n        image: _assets_curry_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        alt: \"A delicious, spicy curry\"\n    },\n    {\n        image: _assets_dumplings_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        alt: \"Steamed dumplings\"\n    },\n    {\n        image: _assets_macncheese_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        alt: \"Mac and cheese\"\n    },\n    {\n        image: _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        alt: \"A delicious pizza\"\n    },\n    {\n        image: _assets_schnitzel_jpg__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        alt: \"A delicious schnitzel\"\n    },\n    {\n        image: _assets_tomato_salad_jpg__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        alt: \"A delicious tomato salad\"\n    }\n];\nfunction ImageSlideshow() {\n    _s();\n    const [currentImageIndex, setCurrentImageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setCurrentImageIndex((prevIndex)=>prevIndex < images.length - 1 ? prevIndex + 1 : 0);\n        }, 5000);\n        return ()=>clearInterval(interval);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_imageSlideShow_module_css__WEBPACK_IMPORTED_MODULE_10___default().slideshow),\n        children: images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: image.image,\n                className: index === currentImageIndex ? (_imageSlideShow_module_css__WEBPACK_IMPORTED_MODULE_10___default().active) : \"\",\n                alt: image.alt\n            }, index, false, {\n                fileName: \"/home/ravi/NextJs/foodies/components/imageSlideShow.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/home/ravi/NextJs/foodies/components/imageSlideShow.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(ImageSlideshow, \"iwdYV/csWqs0gMEM0R8yiwCHnVs=\");\n_c = ImageSlideshow;\nvar _c;\n$RefreshReg$(_c, \"ImageSlideshow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaW1hZ2VTbGlkZVNob3cuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDYjtBQUVhO0FBQ0Y7QUFDUTtBQUNFO0FBQ1Y7QUFDUTtBQUNLO0FBQ0w7QUFFbEQsTUFBTVcsU0FBUztJQUNiO1FBQUVDLE9BQU9ULDBEQUFTQTtRQUFFVSxLQUFLO0lBQTRCO0lBQ3JEO1FBQUVELE9BQU9SLHlEQUFRQTtRQUFFUyxLQUFLO0lBQTJCO0lBQ25EO1FBQUVELE9BQU9QLDZEQUFZQTtRQUFFUSxLQUFLO0lBQW9CO0lBQ2hEO1FBQUVELE9BQU9OLDhEQUFhQTtRQUFFTyxLQUFLO0lBQWlCO0lBQzlDO1FBQUVELE9BQU9MLHlEQUFRQTtRQUFFTSxLQUFLO0lBQW9CO0lBQzVDO1FBQUVELE9BQU9KLDZEQUFZQTtRQUFFSyxLQUFLO0lBQXdCO0lBQ3BEO1FBQUVELE9BQU9ILGdFQUFjQTtRQUFFSSxLQUFLO0lBQTJCO0NBQzFEO0FBRWMsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBR2YsK0NBQVFBLENBQUM7SUFFM0RELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWlCLFdBQVdDLFlBQVk7WUFDM0JGLHFCQUFxQixDQUFDRyxZQUNwQkEsWUFBWVIsT0FBT1MsTUFBTSxHQUFHLElBQUlELFlBQVksSUFBSTtRQUVwRCxHQUFHO1FBRUgsT0FBTyxJQUFNRSxjQUFjSjtJQUM3QixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBV2IsOEVBQWlCO2tCQUM5QkMsT0FBT2MsR0FBRyxDQUFDLENBQUNiLE9BQU9jLHNCQUNsQiw4REFBQ3hCLG1EQUFLQTtnQkFFSnlCLEtBQUtmLE1BQU1BLEtBQUs7Z0JBQ2hCVyxXQUFXRyxVQUFVWCxvQkFBb0JMLDJFQUFjLEdBQUc7Z0JBQzFERyxLQUFLRCxNQUFNQyxHQUFHO2VBSFRhOzs7Ozs7Ozs7O0FBUWY7R0F6QndCWjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ltYWdlU2xpZGVTaG93LmpzPzVlOGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5pbXBvcnQgYnVyZ2VySW1nIGZyb20gJ0AvYXNzZXRzL2J1cmdlci5qcGcnO1xuaW1wb3J0IGN1cnJ5SW1nIGZyb20gJ0AvYXNzZXRzL2N1cnJ5LmpwZyc7XG5pbXBvcnQgZHVtcGxpbmdzSW1nIGZyb20gJ0AvYXNzZXRzL2R1bXBsaW5ncy5qcGcnO1xuaW1wb3J0IG1hY25jaGVlc2VJbWcgZnJvbSAnQC9hc3NldHMvbWFjbmNoZWVzZS5qcGcnO1xuaW1wb3J0IHBpenphSW1nIGZyb20gJ0AvYXNzZXRzL3BpenphLmpwZyc7XG5pbXBvcnQgc2Nobml0emVsSW1nIGZyb20gJ0AvYXNzZXRzL3NjaG5pdHplbC5qcGcnO1xuaW1wb3J0IHRvbWF0b1NhbGFkSW1nIGZyb20gJ0AvYXNzZXRzL3RvbWF0by1zYWxhZC5qcGcnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9pbWFnZVNsaWRlU2hvdy5tb2R1bGUuY3NzJztcblxuY29uc3QgaW1hZ2VzID0gW1xuICB7IGltYWdlOiBidXJnZXJJbWcsIGFsdDogJ0EgZGVsaWNpb3VzLCBqdWljeSBidXJnZXInIH0sXG4gIHsgaW1hZ2U6IGN1cnJ5SW1nLCBhbHQ6ICdBIGRlbGljaW91cywgc3BpY3kgY3VycnknIH0sXG4gIHsgaW1hZ2U6IGR1bXBsaW5nc0ltZywgYWx0OiAnU3RlYW1lZCBkdW1wbGluZ3MnIH0sXG4gIHsgaW1hZ2U6IG1hY25jaGVlc2VJbWcsIGFsdDogJ01hYyBhbmQgY2hlZXNlJyB9LFxuICB7IGltYWdlOiBwaXp6YUltZywgYWx0OiAnQSBkZWxpY2lvdXMgcGl6emEnIH0sXG4gIHsgaW1hZ2U6IHNjaG5pdHplbEltZywgYWx0OiAnQSBkZWxpY2lvdXMgc2Nobml0emVsJyB9LFxuICB7IGltYWdlOiB0b21hdG9TYWxhZEltZywgYWx0OiAnQSBkZWxpY2lvdXMgdG9tYXRvIHNhbGFkJyB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2VTbGlkZXNob3coKSB7XG4gIGNvbnN0IFtjdXJyZW50SW1hZ2VJbmRleCwgc2V0Q3VycmVudEltYWdlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldEN1cnJlbnRJbWFnZUluZGV4KChwcmV2SW5kZXgpID0+XG4gICAgICAgIHByZXZJbmRleCA8IGltYWdlcy5sZW5ndGggLSAxID8gcHJldkluZGV4ICsgMSA6IDBcbiAgICAgICk7XG4gICAgfSwgNTAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNsaWRlc2hvd30+XG4gICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgc3JjPXtpbWFnZS5pbWFnZX1cbiAgICAgICAgICBjbGFzc05hbWU9e2luZGV4ID09PSBjdXJyZW50SW1hZ2VJbmRleCA/IGNsYXNzZXMuYWN0aXZlIDogJyd9XG4gICAgICAgICAgYWx0PXtpbWFnZS5hbHR9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsImJ1cmdlckltZyIsImN1cnJ5SW1nIiwiZHVtcGxpbmdzSW1nIiwibWFjbmNoZWVzZUltZyIsInBpenphSW1nIiwic2Nobml0emVsSW1nIiwidG9tYXRvU2FsYWRJbWciLCJjbGFzc2VzIiwiaW1hZ2VzIiwiaW1hZ2UiLCJhbHQiLCJJbWFnZVNsaWRlc2hvdyIsImN1cnJlbnRJbWFnZUluZGV4Iiwic2V0Q3VycmVudEltYWdlSW5kZXgiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwicHJldkluZGV4IiwibGVuZ3RoIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsImNsYXNzTmFtZSIsInNsaWRlc2hvdyIsIm1hcCIsImluZGV4Iiwic3JjIiwiYWN0aXZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/imageSlideShow.js\n"));

/***/ })

});