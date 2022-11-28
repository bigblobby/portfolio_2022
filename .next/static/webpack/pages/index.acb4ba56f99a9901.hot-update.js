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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/pages/Home.module.css */ \"./styles/pages/Home.module.css\");\n/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_images_me_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/images/me.jpeg */ \"./public/images/me.jpeg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const arrowIconRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const arrowRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    //\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", hideArrow);\n        return ()=>window.removeEventListener(\"scroll\", hideArrow);\n    }, []);\n    function hideArrow() {\n        if (arrowIconRef.current) {\n            arrowIconRef.current.style.opacity = \"0\";\n            setTimeout(()=>{\n                if (!arrowRef.current) return;\n                arrowRef.current.remove();\n            }, 500);\n        }\n    }\n    function scrollDown() {\n        let pageHeight = window.innerHeight;\n        window.scrollTo({\n            top: pageHeight,\n            behavior: \"smooth\"\n        });\n        hideArrow();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"container-inner\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().avatar),\n                        src: _public_images_me_jpeg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                        alt: \"A picture of me\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().name),\n                        children: \"Tom Dempster\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().job),\n                        children: \"Frontend Developer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().about),\n                        children: [\n                            \"A skilled frontend developer specialising in Javascript. Delivering highly interactive and intuitive JS applications with a good footing in server side programming with Node. You can \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"mailto:tom_dempster@hotmail.co.uk\",\n                                children: \"contact me\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 232\n                            }, this),\n                            \" or find me here:\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default()[\"social-icons\"]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://github.com/bigblobby\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fa-brands fa-github\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://www.linkedin.com/in/thomas-dempster-00843bb7\",\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fa-brands fa-linkedin\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().skills),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Skills\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().badge),\n                                        children: \"Javascript\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().badge),\n                                        children: \"HTML\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().badge),\n                                        children: \"CSS\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().badge),\n                                        children: \"Twig\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().badge),\n                                        children: \"SCSS\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().badge),\n                                        children: \"SQL\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().tools),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Tools\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().badge),\n                                        children: \"Node\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().badge),\n                                        children: \"React\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().badge),\n                                        children: \"Redux\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().badge),\n                                        children: \"Webpack\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().badge),\n                                        children: \"Git\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().badge),\n                                        children: \"Docker\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: arrowRef,\n                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().arrow),\n                        onClick: scrollDown,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            ref: arrowIconRef,\n                            className: \"fa-solid fa-chevron-down\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                style: {\n                    height: \"100vh\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        style: {\n                            textAlign: \"center\",\n                            fontSize: \"2rem\",\n                            padding: \"3rem 1rem\"\n                        },\n                        children: \"Github Projects\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().projects),\n                        children: [\n                            ...new Array(2)\n                        ].map((e)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                                className: (_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().project),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Title\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 41\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur error esse laudantium quibusdam tempora?\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 41\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 37\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n                lineNumber: 78,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tdempster/git/js_projects/portfolio_2022/pages/index.tsx\",\n        lineNumber: 37,\n        columnNumber: 13\n    }, this);\n}\n_s(Home, \"x3Bzl/6LWSOmpyGCCVuepwh7dKo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0RBQy9CLDhEQUFDeUM7d0NBQUtsQixXQUFXdkIsNEVBQVk7a0RBQUU7Ozs7OztrREFDL0IsOERBQUN5Qzt3Q0FBS2xCLFdBQVd2Qiw0RUFBWTtrREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUl2Qyw4REFBQ3NCO3dCQUFJc0IsS0FBS3RDO3dCQUFVaUIsV0FBV3ZCLDRFQUFZO3dCQUFFOEMsU0FBUzlCO2tDQUNsRCw0RUFBQ3NCOzRCQUFFTSxLQUFLdkM7NEJBQWNrQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHeEMsOERBQUN3QjtnQkFBUW5DLE9BQU87b0JBQUNvQyxRQUFRO2dCQUFPOztrQ0FDNUIsOERBQUNsQjt3QkFBR2xCLE9BQU87NEJBQUNxQyxXQUFXOzRCQUFVQyxVQUFVOzRCQUFRQyxTQUFTO3dCQUFXO2tDQUFHOzs7Ozs7a0NBRTFFLDhEQUFDN0I7d0JBQUlDLFdBQVd2QiwrRUFBZTtrQ0FFdkI7K0JBQUssSUFBSXFELE1BQU07eUJBQUksQ0FBQ0MsR0FBRyxDQUFDQyxDQUFBQSxJQUFLOzRCQUN6QixxQkFDSSw4REFBQ0M7Z0NBQVFqQyxXQUFXdkIsOEVBQWM7O2tEQUM5Qiw4REFBQzBEO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUMxQjtrREFBRTs7Ozs7Ozs7Ozs7O3dCQUdmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUIsQ0FBQztHQTFGdUI1QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBtZSBmcm9tICcuLi9wdWJsaWMvaW1hZ2VzL21lLmpwZWcnO1xuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IGFycm93SWNvblJlZiA9IHVzZVJlZjxIVE1MRWxlbWVudD4obnVsbCk7XG4gICAgY29uc3QgYXJyb3dSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICAgIC8vXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhpZGVBcnJvdyk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoaWRlQXJyb3cpXG4gICAgfSwgW10pXG5cbiAgICBmdW5jdGlvbiBoaWRlQXJyb3coKXtcbiAgICAgICAgaWYoYXJyb3dJY29uUmVmLmN1cnJlbnQpe1xuICAgICAgICAgICAgYXJyb3dJY29uUmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoIWFycm93UmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICAgICAgICAgICAgICBhcnJvd1JlZi5jdXJyZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbERvd24oKXtcbiAgICAgICAgbGV0IHBhZ2VIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICB0b3A6IHBhZ2VIZWlnaHQsXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgfSk7XG4gICAgICAgIGhpZGVBcnJvdygpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snY29udGFpbmVyLWlubmVyJ119PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfSBzcmM9e21lfSBhbHQ9eydBIHBpY3R1cmUgb2YgbWUnfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+VG9tIERlbXBzdGVyPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmpvYn0+RnJvbnRlbmQgRGV2ZWxvcGVyPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXR9PkEgc2tpbGxlZCBmcm9udGVuZCBkZXZlbG9wZXIgc3BlY2lhbGlzaW5nIGluIEphdmFzY3JpcHQuIERlbGl2ZXJpbmcgaGlnaGx5IGludGVyYWN0aXZlIGFuZCBpbnR1aXRpdmUgSlMgYXBwbGljYXRpb25zIHdpdGggYSBnb29kIGZvb3RpbmcgaW4gc2VydmVyIHNpZGUgcHJvZ3JhbW1pbmcgd2l0aCBOb2RlLiBZb3UgY2FuIDxhIGhyZWY9XCJtYWlsdG86dG9tX2RlbXBzdGVyQGhvdG1haWwuY28udWtcIj5jb250YWN0IG1lPC9hPiBvciBmaW5kIG1lIGhlcmU6PC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydzb2NpYWwtaWNvbnMnXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2JpZ2Jsb2JieVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1icmFuZHMgZmEtZ2l0aHViXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi90aG9tYXMtZGVtcHN0ZXItMDA4NDNiYjdcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtYnJhbmRzIGZhLWxpbmtlZGluXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5za2lsbHN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlNraWxsczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJhZGdlfT5KYXZhc2NyaXB0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJhZGdlfT5IVE1MPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJhZGdlfT5DU1M8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYmFkZ2V9PlR3aWc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYmFkZ2V9PlNDU1M8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYmFkZ2V9PlNRTDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b29sc30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+VG9vbHM8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5iYWRnZX0+Tm9kZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5iYWRnZX0+UmVhY3Q8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYmFkZ2V9PlJlZHV4PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJhZGdlfT5XZWJwYWNrPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJhZGdlfT5HaXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYmFkZ2V9PkRvY2tlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17YXJyb3dSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmFycm93fSBvbkNsaWNrPXtzY3JvbGxEb3dufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIHJlZj17YXJyb3dJY29uUmVmfSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1jaGV2cm9uLWRvd25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7aGVpZ2h0OiAnMTAwdmgnfX0+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcicsIGZvbnRTaXplOiAnMnJlbScsIHBhZGRpbmc6ICczcmVtIDFyZW0nfX0+R2l0aHViIFByb2plY3RzPC9oMj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3RzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbLi4uKG5ldyBBcnJheSgyKSldLm1hcChlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3R9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5UaXRsZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFsaWFzIGFzcGVybmF0dXIgZXJyb3IgZXNzZSBsYXVkYW50aXVtIHF1aWJ1c2RhbSB0ZW1wb3JhPzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwic3R5bGVzIiwibWUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJIb21lIiwiYXJyb3dJY29uUmVmIiwiYXJyb3dSZWYiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGlkZUFycm93IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImN1cnJlbnQiLCJzdHlsZSIsIm9wYWNpdHkiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwic2Nyb2xsRG93biIsInBhZ2VIZWlnaHQiLCJpbm5lckhlaWdodCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJhdmF0YXIiLCJzcmMiLCJhbHQiLCJoMSIsIm5hbWUiLCJoMiIsImpvYiIsInAiLCJhYm91dCIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwiaSIsInNraWxscyIsImg0Iiwic3BhbiIsImJhZGdlIiwidG9vbHMiLCJyZWYiLCJhcnJvdyIsIm9uQ2xpY2siLCJzZWN0aW9uIiwiaGVpZ2h0IiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJwYWRkaW5nIiwicHJvamVjdHMiLCJBcnJheSIsIm1hcCIsImUiLCJhcnRpY2xlIiwicHJvamVjdCIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});