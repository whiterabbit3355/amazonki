/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("console.log('file 1');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/count.js":
/*!********************************!*\
  !*** ./src/assets/js/count.js ***!
  \********************************/
/***/ (function() {

eval("\n// for deal\nlet countDate = new Date('december 30, 2022 00:00:00').getTime();\n\n\nfunction SplitIds(ids, num) {\n    var idList = ids.split(\" \");\n  \n    for (var i = 0; i < idList.length; i++) {\n        item = document.getElementById(idList[i]);\n        if (item) {\n           item.innerText = num;\n           //console.log(item.innerText);\n        }\n    }\n  \n}\n// SplitIds(\"day1 day2 day3 day4\", 55);\n\nfunction CountDown(){\n    let now = new Date().getTime();\n    let gap = countDate - now;\n\n    let second = 1000;\n    let minute = second * 60;\n    let hour = minute * 60;\n    let day = hour * 24;\n\n    let d = Math.floor(gap/(day));\n    let h = Math.floor((gap % (day)) / (hour));\n    let m = Math.floor((gap % (hour)) / (minute));\n    let s = Math.floor((gap % (minute)) / (second));\n\n    SplitIds(\"day1 day2 day3 day4\", d);\n\n    SplitIds(\"hour1 hour2 hour3 hour4\", h);\n\n    SplitIds(\"minute1 minute2 minute3 minute4\", m);\n\n    SplitIds(\"second1 second2 second3 second4\", s);\n   \n}\n\nsetInterval(function(){\n    CountDown();\n}, 1000)\n\n\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/count.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/file2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	__webpack_modules__["./src/assets/js/count.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	
/******/ })()
;