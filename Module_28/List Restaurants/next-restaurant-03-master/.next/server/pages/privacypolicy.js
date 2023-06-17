module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/privacypolicy.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/privacypolicy.js":
/*!********************************!*\
  !*** ./pages/privacypolicy.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrivacyPolicy; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\sarah\\MIT_xpro\\Module_28\\List Restaurants\\next-restaurant-03-master\\pages\\privacypolicy.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function PrivacyPolicy() {
  return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 1
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 1
    }
  }, "Sample Website Privacy Policy Template"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 48
    }
  }), "This privacy policy (\"policy\") will help you understand how [company name] (\"us\", \"we\", \"our\") uses and protects the data you provide to us when you visit and use [blog URL] (\"blog\", \"service\").", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 1
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }
  }), "We reserve the right to change this policy at any given time, of which you will be promptly updated. If you want to make sure that you are up to date with the latest changes, we advise you to frequently visit this page.", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 1
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }
  }, "What User Data We Collect", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 35
    }
  }), "When you visit the blog, we may collect the following data:"), "\u2022 Your IP address.", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 19
    }
  }), "\u2022 Your contact information and email address. \u2022 Other information such as interests and preferences. \u2022 Data profile regarding your online behavior on our blog. Why We Collect Your Data We are collecting your data for several reasons: \u2022 To better understand your needs. \u2022 To improve our services and products. \u2022 To send you promotional emails containing the information we think you will find interesting. \u2022 To contact you to fill out surveys and participate in other types of market research. \u2022 To customize our blog according to your online behavior and personal preferences. Safeguarding and Securing the Data [company name] is committed to securing your data and keeping it confidential. [company name] has done all in its power to prevent data theft, unauthorized access, and disclosure by implementing the latest technologies and software, which help us safeguard all the information we collect online. Our Cookie Policy Once you agree to allow our blog to use cookies, you also agree to use the data it collects regarding your online behavior (analyze web traffic, web pages you visit and spend the most time on). The data we collect by using cookies is used to customize our blog to your needs. After we use the data for statistical analysis, the data is completely removed from our systems. Please note that cookies don't allow us to gain control of your computer in any way. They are strictly used to monitor which pages you find useful and which you do not so that we can provide a better experience for you. If you want to disable cookies, you can do it by accessing the settings of your internet browser. You can visit https://www.internetcookies.com, which contains comprehensive information on how to do this on a wide variety of browsers and devices. Links to Other Websites Our blog contains links that lead to other websites. If you click on these links [company name] is not held responsible for your data and privacy protection. Visiting those websites is not governed by this privacy policy agreement. Make sure to read the privacy policy documentation of the website you go to from our website. Restricting the Collection of your Personal Data At some point, you might wish to restrict the use and collection of your personal data. You can achieve this by doing the following: When you are filling the forms on the blog, make sure to check if there is a box which you can leave unchecked, if you don't want to disclose your personal information. If you have already agreed to share your information with us, feel free to contact us via email and we will be more than happy to change this for you. [company name] will not lease, sell or distribute your personal information to any third parties, unless we have your permission. We might do so if the law forces us. Your personal information will be used when we need to send you promotional materials if you agree to this privacy policy.");
}

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"main": "Home_main__1x8gC",
	"footer": "Home_footer__1WdhD",
	"title": "Home_title__3DjR7",
	"description": "Home_description__17Z4F",
	"code": "Home_code__axx2Y",
	"grid": "Home_grid__2Ei2F",
	"card": "Home_card__2SdtB",
	"logo": "Home_logo__1YbrH"
};


/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJpdmFjeXBvbGljeS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvTGlua1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiUHJpdmFjeVBvbGljeSIsIl9fanN4IiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEY0QjtBQUNrQjtBQUNsQjtBQUViLFNBQVNBLGFBQWFBLENBQUEsRUFBRztFQUNwQyxPQUNKQyxLQUFBO0lBQUFDLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNBTixLQUFBO0lBQUFDLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSw0Q0FBK0MsRUFBQU4sS0FBQTtJQUFBQyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsRUFBSyxvTkFFcEROLEtBQUE7SUFBQUMsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEVBQUssRUFBQU4sS0FBQTtJQUFBQyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsRUFBSyxpT0FDVk4sS0FBQTtJQUFBQyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsRUFBSyxFQUFBTixLQUFBO0lBQUFDLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxnQ0FBNkJOLEtBQUE7SUFBQUMsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEVBQUssZ0VBQ3lCLDZCQUM5Q04sS0FBQTtJQUFBQyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsRUFBSyx3NEZBMEJuQjtBQUNDLEM7Ozs7Ozs7Ozs7O0FDdkNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWEEsc0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvcHJpdmFjeXBvbGljeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcHJpdmFjeXBvbGljeS5qc1wiKTtcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9MaW5rXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByaXZhY3lQb2xpY3koKSB7XHJcbiAgICByZXR1cm4oXHJcbjxwPlxyXG48aDI+U2FtcGxlIFdlYnNpdGUgUHJpdmFjeSBQb2xpY3kgVGVtcGxhdGU8L2gyPjxici8+XHJcblRoaXMgcHJpdmFjeSBwb2xpY3kgKFwicG9saWN5XCIpIHdpbGwgaGVscCB5b3UgdW5kZXJzdGFuZCBob3cgW2NvbXBhbnkgbmFtZV0gKFwidXNcIiwgXCJ3ZVwiLCBcIm91clwiKSB1c2VzIGFuZCBwcm90ZWN0cyB0aGUgZGF0YSB5b3UgcHJvdmlkZSB0byB1cyB3aGVuIHlvdSB2aXNpdCBhbmQgdXNlIFtibG9nIFVSTF0gKFwiYmxvZ1wiLCBcInNlcnZpY2VcIikuXHJcbjxici8+PGJyLz5XZSByZXNlcnZlIHRoZSByaWdodCB0byBjaGFuZ2UgdGhpcyBwb2xpY3kgYXQgYW55IGdpdmVuIHRpbWUsIG9mIHdoaWNoIHlvdSB3aWxsIGJlIHByb21wdGx5IHVwZGF0ZWQuIElmIHlvdSB3YW50IHRvIG1ha2Ugc3VyZSB0aGF0IHlvdSBhcmUgdXAgdG8gZGF0ZSB3aXRoIHRoZSBsYXRlc3QgY2hhbmdlcywgd2UgYWR2aXNlIHlvdSB0byBmcmVxdWVudGx5IHZpc2l0IHRoaXMgcGFnZS5cclxuPGJyLz48aDM+V2hhdCBVc2VyIERhdGEgV2UgQ29sbGVjdDxici8+XHJcbldoZW4geW91IHZpc2l0IHRoZSBibG9nLCB3ZSBtYXkgY29sbGVjdCB0aGUgZm9sbG93aW5nIGRhdGE6PC9oMz5cclxu4oCiXHRZb3VyIElQIGFkZHJlc3MuPGJyLz5cclxu4oCiXHRZb3VyIGNvbnRhY3QgaW5mb3JtYXRpb24gYW5kIGVtYWlsIGFkZHJlc3MuXHJcbuKAolx0T3RoZXIgaW5mb3JtYXRpb24gc3VjaCBhcyBpbnRlcmVzdHMgYW5kIHByZWZlcmVuY2VzLlxyXG7igKJcdERhdGEgcHJvZmlsZSByZWdhcmRpbmcgeW91ciBvbmxpbmUgYmVoYXZpb3Igb24gb3VyIGJsb2cuXHJcbldoeSBXZSBDb2xsZWN0IFlvdXIgRGF0YVxyXG5XZSBhcmUgY29sbGVjdGluZyB5b3VyIGRhdGEgZm9yIHNldmVyYWwgcmVhc29uczpcclxu4oCiXHRUbyBiZXR0ZXIgdW5kZXJzdGFuZCB5b3VyIG5lZWRzLlxyXG7igKJcdFRvIGltcHJvdmUgb3VyIHNlcnZpY2VzIGFuZCBwcm9kdWN0cy5cclxu4oCiXHRUbyBzZW5kIHlvdSBwcm9tb3Rpb25hbCBlbWFpbHMgY29udGFpbmluZyB0aGUgaW5mb3JtYXRpb24gd2UgdGhpbmsgeW91IHdpbGwgZmluZCBpbnRlcmVzdGluZy5cclxu4oCiXHRUbyBjb250YWN0IHlvdSB0byBmaWxsIG91dCBzdXJ2ZXlzIGFuZCBwYXJ0aWNpcGF0ZSBpbiBvdGhlciB0eXBlcyBvZiBtYXJrZXQgcmVzZWFyY2guXHJcbuKAolx0VG8gY3VzdG9taXplIG91ciBibG9nIGFjY29yZGluZyB0byB5b3VyIG9ubGluZSBiZWhhdmlvciBhbmQgcGVyc29uYWwgcHJlZmVyZW5jZXMuXHJcblNhZmVndWFyZGluZyBhbmQgU2VjdXJpbmcgdGhlIERhdGFcclxuW2NvbXBhbnkgbmFtZV0gaXMgY29tbWl0dGVkIHRvIHNlY3VyaW5nIHlvdXIgZGF0YSBhbmQga2VlcGluZyBpdCBjb25maWRlbnRpYWwuIFtjb21wYW55IG5hbWVdIGhhcyBkb25lIGFsbCBpbiBpdHMgcG93ZXIgdG8gcHJldmVudCBkYXRhIHRoZWZ0LCB1bmF1dGhvcml6ZWQgYWNjZXNzLCBhbmQgZGlzY2xvc3VyZSBieSBpbXBsZW1lbnRpbmcgdGhlIGxhdGVzdCB0ZWNobm9sb2dpZXMgYW5kIHNvZnR3YXJlLCB3aGljaCBoZWxwIHVzIHNhZmVndWFyZCBhbGwgdGhlIGluZm9ybWF0aW9uIHdlIGNvbGxlY3Qgb25saW5lLlxyXG5PdXIgQ29va2llIFBvbGljeVxyXG5PbmNlIHlvdSBhZ3JlZSB0byBhbGxvdyBvdXIgYmxvZyB0byB1c2UgY29va2llcywgeW91IGFsc28gYWdyZWUgdG8gdXNlIHRoZSBkYXRhIGl0IGNvbGxlY3RzIHJlZ2FyZGluZyB5b3VyIG9ubGluZSBiZWhhdmlvciAoYW5hbHl6ZSB3ZWIgdHJhZmZpYywgd2ViIHBhZ2VzIHlvdSB2aXNpdCBhbmQgc3BlbmQgdGhlIG1vc3QgdGltZSBvbikuXHJcblRoZSBkYXRhIHdlIGNvbGxlY3QgYnkgdXNpbmcgY29va2llcyBpcyB1c2VkIHRvIGN1c3RvbWl6ZSBvdXIgYmxvZyB0byB5b3VyIG5lZWRzLiBBZnRlciB3ZSB1c2UgdGhlIGRhdGEgZm9yIHN0YXRpc3RpY2FsIGFuYWx5c2lzLCB0aGUgZGF0YSBpcyBjb21wbGV0ZWx5IHJlbW92ZWQgZnJvbSBvdXIgc3lzdGVtcy5cclxuUGxlYXNlIG5vdGUgdGhhdCBjb29raWVzIGRvbid0IGFsbG93IHVzIHRvIGdhaW4gY29udHJvbCBvZiB5b3VyIGNvbXB1dGVyIGluIGFueSB3YXkuIFRoZXkgYXJlIHN0cmljdGx5IHVzZWQgdG8gbW9uaXRvciB3aGljaCBwYWdlcyB5b3UgZmluZCB1c2VmdWwgYW5kIHdoaWNoIHlvdSBkbyBub3Qgc28gdGhhdCB3ZSBjYW4gcHJvdmlkZSBhIGJldHRlciBleHBlcmllbmNlIGZvciB5b3UuXHJcbklmIHlvdSB3YW50IHRvIGRpc2FibGUgY29va2llcywgeW91IGNhbiBkbyBpdCBieSBhY2Nlc3NpbmcgdGhlIHNldHRpbmdzIG9mIHlvdXIgaW50ZXJuZXQgYnJvd3Nlci4gWW91IGNhbiB2aXNpdCBodHRwczovL3d3dy5pbnRlcm5ldGNvb2tpZXMuY29tLCB3aGljaCBjb250YWlucyBjb21wcmVoZW5zaXZlIGluZm9ybWF0aW9uIG9uIGhvdyB0byBkbyB0aGlzIG9uIGEgd2lkZSB2YXJpZXR5IG9mIGJyb3dzZXJzIGFuZCBkZXZpY2VzLlxyXG5MaW5rcyB0byBPdGhlciBXZWJzaXRlc1xyXG5PdXIgYmxvZyBjb250YWlucyBsaW5rcyB0aGF0IGxlYWQgdG8gb3RoZXIgd2Vic2l0ZXMuIElmIHlvdSBjbGljayBvbiB0aGVzZSBsaW5rcyBbY29tcGFueSBuYW1lXSBpcyBub3QgaGVsZCByZXNwb25zaWJsZSBmb3IgeW91ciBkYXRhIGFuZCBwcml2YWN5IHByb3RlY3Rpb24uIFZpc2l0aW5nIHRob3NlIHdlYnNpdGVzIGlzIG5vdCBnb3Zlcm5lZCBieSB0aGlzIHByaXZhY3kgcG9saWN5IGFncmVlbWVudC4gTWFrZSBzdXJlIHRvIHJlYWQgdGhlIHByaXZhY3kgcG9saWN5IGRvY3VtZW50YXRpb24gb2YgdGhlIHdlYnNpdGUgeW91IGdvIHRvIGZyb20gb3VyIHdlYnNpdGUuXHJcblJlc3RyaWN0aW5nIHRoZSBDb2xsZWN0aW9uIG9mIHlvdXIgUGVyc29uYWwgRGF0YVxyXG5BdCBzb21lIHBvaW50LCB5b3UgbWlnaHQgd2lzaCB0byByZXN0cmljdCB0aGUgdXNlIGFuZCBjb2xsZWN0aW9uIG9mIHlvdXIgcGVyc29uYWwgZGF0YS4gWW91IGNhbiBhY2hpZXZlIHRoaXMgYnkgZG9pbmcgdGhlIGZvbGxvd2luZzpcclxuV2hlbiB5b3UgYXJlIGZpbGxpbmcgdGhlIGZvcm1zIG9uIHRoZSBibG9nLCBtYWtlIHN1cmUgdG8gY2hlY2sgaWYgdGhlcmUgaXMgYSBib3ggd2hpY2ggeW91IGNhbiBsZWF2ZSB1bmNoZWNrZWQsIGlmIHlvdSBkb24ndCB3YW50IHRvIGRpc2Nsb3NlIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24uXHJcbklmIHlvdSBoYXZlIGFscmVhZHkgYWdyZWVkIHRvIHNoYXJlIHlvdXIgaW5mb3JtYXRpb24gd2l0aCB1cywgZmVlbCBmcmVlIHRvIGNvbnRhY3QgdXMgdmlhIGVtYWlsIGFuZCB3ZSB3aWxsIGJlIG1vcmUgdGhhbiBoYXBweSB0byBjaGFuZ2UgdGhpcyBmb3IgeW91LlxyXG5bY29tcGFueSBuYW1lXSB3aWxsIG5vdCBsZWFzZSwgc2VsbCBvciBkaXN0cmlidXRlIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gdG8gYW55IHRoaXJkIHBhcnRpZXMsIHVubGVzcyB3ZSBoYXZlIHlvdXIgcGVybWlzc2lvbi4gV2UgbWlnaHQgZG8gc28gaWYgdGhlIGxhdyBmb3JjZXMgdXMuIFlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gd2lsbCBiZSB1c2VkIHdoZW4gd2UgbmVlZCB0byBzZW5kIHlvdSBwcm9tb3Rpb25hbCBtYXRlcmlhbHMgaWYgeW91IGFncmVlIHRvIHRoaXMgcHJpdmFjeSBwb2xpY3kuIFxyXG5cclxuPC9wPlxyXG4gICAgKX0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fMUVjc1VcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX18xeDhnQ1wiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX18xV2RoRFwiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fM0RqUjdcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzE3WjRGXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fYXh4MllcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX18yRWkyRlwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfXzJTZHRCXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMVlickhcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvTGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==