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
exports.id = "pages/api/github";
exports.ids = ["pages/api/github"];
exports.modules = {

/***/ "octokit":
/*!**************************!*\
  !*** external "octokit" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("octokit");

/***/ }),

/***/ "(api)/./pages/api/github.ts":
/*!*****************************!*\
  !*** ./pages/api/github.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var octokit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! octokit */ \"octokit\");\n/* harmony import */ var octokit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(octokit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst octokit = new octokit__WEBPACK_IMPORTED_MODULE_0__.Octokit({\n    auth: \"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\"\n});\nasync function handler(req, res) {\n    const repoNames = [\n        \"image_optimiser\",\n        \"down_detector_backend\",\n        \"gf_loose_reins\"\n    ];\n    const repos = repoNames.map(async (name)=>{\n        const repo = await octokit.request(\"GET /repos/{owner}/{repo}\", {\n            owner: \"bigblobby\",\n            repo: name\n        });\n        return {\n            name: repo.data.name,\n            description: repo.data.description,\n            owner: repo.data.owner.login,\n            projectUrl: repo.data.html_url,\n            siteUrl: name === \"image_optimiser\" ? \"https://www.ihateimages.com\" : null\n        };\n    });\n    const resolvedRepos = await Promise.all(repos);\n    res.status(200).json({\n        data: resolvedRepos\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2l0aHViLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNnQztBQWNoQyxNQUFNQyxVQUFVLElBQUlELDRDQUFPQSxDQUFDO0lBQ3hCRSxNQUFNO0FBQ1Y7QUFFZSxlQUFlQyxRQUMxQkMsR0FBbUIsRUFDbkJDLEdBQThCLEVBQ2hDO0lBRUUsTUFBTUMsWUFBWTtRQUFDO1FBQW1CO1FBQXlCO0tBQWlCO0lBQ2hGLE1BQU1DLFFBQVFELFVBQVVFLEdBQUcsQ0FBQyxPQUFPQyxPQUFTO1FBQ3hDLE1BQU1DLE9BQU8sTUFBTVQsUUFBUVUsT0FBTyxDQUFDLDZCQUE2QjtZQUM1REMsT0FBTztZQUNQRixNQUFNRDtRQUNWO1FBRUEsT0FBTztZQUNIQSxNQUFNQyxLQUFLRyxJQUFJLENBQUNKLElBQUk7WUFDcEJLLGFBQWFKLEtBQUtHLElBQUksQ0FBQ0MsV0FBVztZQUNsQ0YsT0FBT0YsS0FBS0csSUFBSSxDQUFDRCxLQUFLLENBQUNHLEtBQUs7WUFDNUJDLFlBQVlOLEtBQUtHLElBQUksQ0FBQ0ksUUFBUTtZQUM5QkMsU0FBU1QsU0FBUyxvQkFBb0IsZ0NBQWdDLElBQUk7UUFDOUU7SUFDSjtJQUVBLE1BQU1VLGdCQUFnQixNQUFNQyxRQUFRQyxHQUFHLENBQUNkO0lBQ3hDRixJQUFJaUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFDVixNQUFNTTtJQUFhO0FBQzdDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0Ly4vcGFnZXMvYXBpL2dpdGh1Yi50cz84NjA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQge09jdG9raXR9IGZyb20gJ29jdG9raXQnO1xuXG50eXBlIFJlcG9EYXRhID0ge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nfG51bGwsXG4gICAgb3duZXI6IHN0cmluZyxcbiAgICBwcm9qZWN0VXJsOiBzdHJpbmcsXG4gICAgc2l0ZVVybDogc3RyaW5nfG51bGxcbn1cblxudHlwZSBSZXNwb25zZSA9IHtcbiAgICBkYXRhOiBSZXBvRGF0YVtdXG59XG5cbmNvbnN0IG9jdG9raXQgPSBuZXcgT2N0b2tpdCh7XG4gICAgYXV0aDogJ2dpdGh1Yl9wYXRfMTFBSUZCWDRZMDBZUHdod09sQTdzZV9zOWg3aEJaR2gwSm5DYVJzdXluTWd4MGlmbjZoN2gyVFJCcXNINjFjbHdFV1pFUkEzVkVoOWE1ZkZvbSdcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gICAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgICByZXM6IE5leHRBcGlSZXNwb25zZTxSZXNwb25zZT5cbikge1xuXG4gICAgY29uc3QgcmVwb05hbWVzID0gWydpbWFnZV9vcHRpbWlzZXInLCAnZG93bl9kZXRlY3Rvcl9iYWNrZW5kJywgJ2dmX2xvb3NlX3JlaW5zJ11cbiAgICBjb25zdCByZXBvcyA9IHJlcG9OYW1lcy5tYXAoYXN5bmMgKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcmVwbyA9IGF3YWl0IG9jdG9raXQucmVxdWVzdCgnR0VUIC9yZXBvcy97b3duZXJ9L3tyZXBvfScsIHtcbiAgICAgICAgICAgIG93bmVyOiAnYmlnYmxvYmJ5JyxcbiAgICAgICAgICAgIHJlcG86IG5hbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IHJlcG8uZGF0YS5uYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHJlcG8uZGF0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG93bmVyOiByZXBvLmRhdGEub3duZXIubG9naW4sXG4gICAgICAgICAgICBwcm9qZWN0VXJsOiByZXBvLmRhdGEuaHRtbF91cmwsXG4gICAgICAgICAgICBzaXRlVXJsOiBuYW1lID09PSAnaW1hZ2Vfb3B0aW1pc2VyJyA/ICdodHRwczovL3d3dy5paGF0ZWltYWdlcy5jb20nIDogbnVsbFxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IHJlc29sdmVkUmVwb3MgPSBhd2FpdCBQcm9taXNlLmFsbChyZXBvcyk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe2RhdGE6IHJlc29sdmVkUmVwb3N9KTtcbn0iXSwibmFtZXMiOlsiT2N0b2tpdCIsIm9jdG9raXQiLCJhdXRoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInJlcG9OYW1lcyIsInJlcG9zIiwibWFwIiwibmFtZSIsInJlcG8iLCJyZXF1ZXN0Iiwib3duZXIiLCJkYXRhIiwiZGVzY3JpcHRpb24iLCJsb2dpbiIsInByb2plY3RVcmwiLCJodG1sX3VybCIsInNpdGVVcmwiLCJyZXNvbHZlZFJlcG9zIiwiUHJvbWlzZSIsImFsbCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/github.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/github.ts"));
module.exports = __webpack_exports__;

})();