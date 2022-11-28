"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/pages/Home.module.css */ \"./styles/pages/Home.module.css\");\n/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_images_me_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/images/me.jpeg */ \"./public/images/me.jpeg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const arrowIconRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const arrowRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    //\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", hideArrow);\n        return ()=>window.removeEventListener(\"scroll\", hideArrow);\n    }, []);\n    function hideArrow() {\n        if (arrowIconRef.current) {\n            arrowIconRef.current.style.opacity = \"0\";\n            setTimeout(()=>{\n                if (!arrowRef.current) return;\n                arrowRef.current.remove();\n            }, 500);\n        }\n    }\n    function scrollDown() {\n        let pageHeight = window.innerHeight;\n        window.scrollTo({\n            top: pageHeight,\n            behavior: \"smooth\"\n        });\n        hideArrow();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"container-inner\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().avatar),\n                        src: _public_images_me_jpeg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                        alt: \"A picture of me\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().name),\n                        children: \"Tom Dempster\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().job),\n                        children: \"Frontend Developer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().about),\n                        children: [\n                            \"A skilled frontend developer specialising in Javascript. Delivering highly interactive and intuitive JS applications with a good footing in server side programming with Node. You can \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"mailto:tom_dempster@hotmail.co.uk\",\n                                children: \"contact me\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 232\n                            }, this),\n                            \" or find me here:\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"social-icons\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://github.com/bigblobby\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fa-brands fa-github\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://www.linkedin.com/in/thomas-dempster-00843bb7\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fa-brands fa-linkedin\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().skills),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Skills\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().badge),\n                                        children: \"Javascript\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().badge),\n                                        children: \"HTML\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().badge),\n                                        children: \"CSS\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().badge),\n                                        children: \"Twig\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().badge),\n                                        children: \"SCSS\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().badge),\n                                        children: \"SQL\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().tools),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Tools\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().badge),\n                                        children: \"Node\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().badge),\n                                        children: \"React\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().badge),\n                                        children: \"Redux\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().badge),\n                                        children: \"Webpack\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().badge),\n                                        children: \"Git\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().badge),\n                                        children: \"Docker\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: arrowRef,\n                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().arrow),\n                        onClick: scrollDown,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            ref: arrowIconRef,\n                            className: \"fa-solid fa-chevron-down\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    height: \"100vh\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    style: {\n                        textAlign: \"center\",\n                        fontSize: \"2rem\",\n                        padding: \"3rem 1rem\"\n                    },\n                    children: \"Github Projects\"\n                }, void 0, false, {\n                    fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                lineNumber: 78,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n        lineNumber: 37,\n        columnNumber: 13\n    }, this);\n}\n_s(Home, \"x3Bzl/6LWSOmpyGCCVuepwh7dKo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0RBQy9CLDhEQUFDeUM7d0NBQUtsQixXQUFXdkIsNEVBQVk7a0RBQUU7Ozs7OztrREFDL0IsOERBQUN5Qzt3Q0FBS2xCLFdBQVd2Qiw0RUFBWTtrREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUl2Qyw4REFBQ3NCO3dCQUFJc0IsS0FBS3RDO3dCQUFVaUIsV0FBV3ZCLDRFQUFZO3dCQUFFOEMsU0FBUzlCO2tDQUNsRCw0RUFBQ3NCOzRCQUFFTSxLQUFLdkM7NEJBQWNrQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHeEMsOERBQUNEO2dCQUFJVixPQUFPO29CQUFDbUMsUUFBUTtnQkFBTzswQkFDeEIsNEVBQUNqQjtvQkFBR2xCLE9BQU87d0JBQUNvQyxXQUFXO3dCQUFVQyxVQUFVO3dCQUFRQyxTQUFTO29CQUFXOzhCQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk5RixDQUFDO0dBNUV1QjlDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvcGFnZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IG1lIGZyb20gJy4uL3B1YmxpYy9pbWFnZXMvbWUuanBlZyc7XG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgYXJyb3dJY29uUmVmID0gdXNlUmVmPEhUTUxFbGVtZW50PihudWxsKTtcbiAgICBjb25zdCBhcnJvd1JlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gICAgLy9cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGlkZUFycm93KTtcblxuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhpZGVBcnJvdylcbiAgICB9LCBbXSlcblxuICAgIGZ1bmN0aW9uIGhpZGVBcnJvdygpe1xuICAgICAgICBpZihhcnJvd0ljb25SZWYuY3VycmVudCl7XG4gICAgICAgICAgICBhcnJvd0ljb25SZWYuY3VycmVudC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZighYXJyb3dSZWYuY3VycmVudCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGFycm93UmVmLmN1cnJlbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsRG93bigpe1xuICAgICAgICBsZXQgcGFnZUhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgIHRvcDogcGFnZUhlaWdodCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICB9KTtcbiAgICAgICAgaGlkZUFycm93KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydjb250YWluZXItaW5uZXInXX0+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9IHNyYz17bWV9IGFsdD17J0EgcGljdHVyZSBvZiBtZSd9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT5Ub20gRGVtcHN0ZXI8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuam9ifT5Gcm9udGVuZCBEZXZlbG9wZXI8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5hYm91dH0+QSBza2lsbGVkIGZyb250ZW5kIGRldmVsb3BlciBzcGVjaWFsaXNpbmcgaW4gSmF2YXNjcmlwdC4gRGVsaXZlcmluZyBoaWdobHkgaW50ZXJhY3RpdmUgYW5kIGludHVpdGl2ZSBKUyBhcHBsaWNhdGlvbnMgd2l0aCBhIGdvb2QgZm9vdGluZyBpbiBzZXJ2ZXIgc2lkZSBwcm9ncmFtbWluZyB3aXRoIE5vZGUuIFlvdSBjYW4gPGEgaHJlZj1cIm1haWx0bzp0b21fZGVtcHN0ZXJAaG90bWFpbC5jby51a1wiPmNvbnRhY3QgbWU8L2E+IG9yIGZpbmQgbWUgaGVyZTo8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3NvY2lhbC1pY29ucyddfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYmlnYmxvYmJ5XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLWJyYW5kcyBmYS1naXRodWJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3Rob21hcy1kZW1wc3Rlci0wMDg0M2JiN1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1icmFuZHMgZmEtbGlua2VkaW5cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNraWxsc30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+U2tpbGxzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYmFkZ2V9PkphdmFzY3JpcHQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYmFkZ2V9PkhUTUw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYmFkZ2V9PkNTUzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5iYWRnZX0+VHdpZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5iYWRnZX0+U0NTUzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5iYWRnZX0+U1FMPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvb2xzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Ub29sczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJhZGdlfT5Ob2RlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJhZGdlfT5SZWFjdDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5iYWRnZX0+UmVkdXg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYmFkZ2V9PldlYnBhY2s8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYmFkZ2V9PkdpdDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5iYWRnZX0+RG9ja2VyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgcmVmPXthcnJvd1JlZn0gY2xhc3NOYW1lPXtzdHlsZXMuYXJyb3d9IG9uQ2xpY2s9e3Njcm9sbERvd259PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgcmVmPXthcnJvd0ljb25SZWZ9IGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWNoZXZyb24tZG93blwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogJzEwMHZoJ319PlxuICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInLCBmb250U2l6ZTogJzJyZW0nLCBwYWRkaW5nOiAnM3JlbSAxcmVtJ319PkdpdGh1YiBQcm9qZWN0czwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJzdHlsZXMiLCJtZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkhvbWUiLCJhcnJvd0ljb25SZWYiLCJhcnJvd1JlZiIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoaWRlQXJyb3ciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3VycmVudCIsInN0eWxlIiwib3BhY2l0eSIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJzY3JvbGxEb3duIiwicGFnZUhlaWdodCIsImlubmVySGVpZ2h0Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImF2YXRhciIsInNyYyIsImFsdCIsImgxIiwibmFtZSIsImgyIiwiam9iIiwicCIsImFib3V0IiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJpIiwic2tpbGxzIiwiaDQiLCJzcGFuIiwiYmFkZ2UiLCJ0b29scyIsInJlZiIsImFycm93Iiwib25DbGljayIsImhlaWdodCIsInRleHRBbGlnbiIsImZvbnRTaXplIiwicGFkZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});