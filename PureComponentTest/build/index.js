/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./PureComponentTest/src/index.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./PureComponentTest/components/SubPage1/SubPage1.jsx":
/*!************************************************************!*\
  !*** ./PureComponentTest/components/SubPage1/SubPage1.jsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\"));\n\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\"));\n\nvar _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\"));\n\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\n__webpack_require__(/*! ./style.css */ \"./PureComponentTest/components/SubPage1/style.css\");\n\n/**\n * title components\n */\nvar subPage1 =\n/*#__PURE__*/\nfunction (_Component) {\n  (0, _inherits2[\"default\"])(subPage1, _Component);\n\n  function subPage1(props) {\n    (0, _classCallCheck2[\"default\"])(this, subPage1);\n    return (0, _possibleConstructorReturn2[\"default\"])(this, (0, _getPrototypeOf2[\"default\"])(subPage1).call(this, props));\n  }\n\n  (0, _createClass2[\"default\"])(subPage1, [{\n    key: \"render\",\n    value: function render() {\n      console.log(\"======== subPage1 render ========\");\n      return _react[\"default\"].createElement(_react[\"default\"].Fragment, null, _react[\"default\"].createElement(\"h6\", null, \"===subPage1===\"), _react[\"default\"].createElement(\"h3\", {\n        className: \"title\"\n      }, this.props.num));\n    }\n  }]);\n  return subPage1;\n}(_react.Component);\n\nexports[\"default\"] = subPage1;\n\n//# sourceURL=webpack:///./PureComponentTest/components/SubPage1/SubPage1.jsx?");

/***/ }),

/***/ "./PureComponentTest/components/SubPage1/style.css":
/*!*********************************************************!*\
  !*** ./PureComponentTest/components/SubPage1/style.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./PureComponentTest/components/SubPage1/style.css?");

/***/ }),

/***/ "./PureComponentTest/components/SubPage2/SubPage2.jsx":
/*!************************************************************!*\
  !*** ./PureComponentTest/components/SubPage2/SubPage2.jsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\"));\n\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\"));\n\nvar _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\"));\n\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\n__webpack_require__(/*! ./style.css */ \"./PureComponentTest/components/SubPage2/style.css\");\n\n/**\n * title components\n */\nvar subPage2 =\n/*#__PURE__*/\nfunction (_PureComponent) {\n  (0, _inherits2[\"default\"])(subPage2, _PureComponent);\n\n  function subPage2(props) {\n    (0, _classCallCheck2[\"default\"])(this, subPage2);\n    return (0, _possibleConstructorReturn2[\"default\"])(this, (0, _getPrototypeOf2[\"default\"])(subPage2).call(this, props));\n  }\n\n  (0, _createClass2[\"default\"])(subPage2, [{\n    key: \"render\",\n    value: function render() {\n      console.log(\"======== subPage2 render ========\");\n      return _react[\"default\"].createElement(_react[\"default\"].Fragment, null, _react[\"default\"].createElement(\"h6\", null, \"===subPage2===\"), _react[\"default\"].createElement(\"h3\", {\n        className: \"title\"\n      }, this.props.num));\n    }\n  }]);\n  return subPage2;\n}(_react.PureComponent);\n\nexports[\"default\"] = subPage2;\n\n//# sourceURL=webpack:///./PureComponentTest/components/SubPage2/SubPage2.jsx?");

/***/ }),

/***/ "./PureComponentTest/components/SubPage2/style.css":
/*!*********************************************************!*\
  !*** ./PureComponentTest/components/SubPage2/style.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./PureComponentTest/components/SubPage2/style.css?");

/***/ }),

/***/ "./PureComponentTest/components/SubPage3/SubPage3.jsx":
/*!************************************************************!*\
  !*** ./PureComponentTest/components/SubPage3/SubPage3.jsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\"));\n\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\"));\n\nvar _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\"));\n\nvar _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\"));\n\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\"));\n\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\n__webpack_require__(/*! ./style.css */ \"./PureComponentTest/components/SubPage3/style.css\");\n\n/**\n * title components\n */\nvar subPage3 =\n/*#__PURE__*/\nfunction (_PureComponent) {\n  (0, _inherits2[\"default\"])(subPage3, _PureComponent);\n\n  function subPage3(props) {\n    var _this;\n\n    (0, _classCallCheck2[\"default\"])(this, subPage3);\n    _this = (0, _possibleConstructorReturn2[\"default\"])(this, (0, _getPrototypeOf2[\"default\"])(subPage3).call(this, props));\n    (0, _defineProperty2[\"default\"])((0, _assertThisInitialized2[\"default\"])(_this), \"handClick\", function () {\n      console.log(\"====== subpage3 click =======\");\n      var data = _this.state.data;\n      data.num = data.num++;\n\n      _this.setState({\n        data: data\n      });\n    });\n    _this.state = {\n      data: {\n        num: 0\n      }\n    };\n    return _this;\n  }\n\n  (0, _createClass2[\"default\"])(subPage3, [{\n    key: \"shouldComponentUpdate\",\n    value: function shouldComponentUpdate(nextProps, nextState) {\n      return nextState.data.num !== this.state.data.num;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      console.log(\"======== subPage3 render object ========\");\n      return _react[\"default\"].createElement(_react[\"default\"].Fragment, null, _react[\"default\"].createElement(\"h6\", null, \"===subPage3===\"), _react[\"default\"].createElement(\"button\", {\n        onClick: this.handClick\n      }, \"add num\"), _react[\"default\"].createElement(\"h3\", {\n        className: \"title\"\n      }, this.state.data.num));\n    }\n  }]);\n  return subPage3;\n}(_react.PureComponent);\n\nexports[\"default\"] = subPage3;\n\n//# sourceURL=webpack:///./PureComponentTest/components/SubPage3/SubPage3.jsx?");

/***/ }),

/***/ "./PureComponentTest/components/SubPage3/style.css":
/*!*********************************************************!*\
  !*** ./PureComponentTest/components/SubPage3/style.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./PureComponentTest/components/SubPage3/style.css?");

/***/ }),

/***/ "./PureComponentTest/src/index.jsx":
/*!*****************************************!*\
  !*** ./PureComponentTest/src/index.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\"));\n\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\"));\n\nvar _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\"));\n\nvar _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\"));\n\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\"));\n\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\"));\n\n__webpack_require__(/*! ./style.css */ \"./PureComponentTest/src/style.css\");\n\nvar _SubPage = _interopRequireDefault(__webpack_require__(/*! ../components/SubPage1/SubPage1 */ \"./PureComponentTest/components/SubPage1/SubPage1.jsx\"));\n\nvar _SubPage2 = _interopRequireDefault(__webpack_require__(/*! ../components/SubPage2/SubPage2 */ \"./PureComponentTest/components/SubPage2/SubPage2.jsx\"));\n\nvar _SubPage3 = _interopRequireDefault(__webpack_require__(/*! ../components/SubPage3/SubPage3 */ \"./PureComponentTest/components/SubPage3/SubPage3.jsx\"));\n\nvar PageA =\n/*#__PURE__*/\nfunction (_Component) {\n  (0, _inherits2[\"default\"])(PageA, _Component);\n\n  function PageA(props) {\n    var _this;\n\n    (0, _classCallCheck2[\"default\"])(this, PageA);\n    _this = (0, _possibleConstructorReturn2[\"default\"])(this, (0, _getPrototypeOf2[\"default\"])(PageA).call(this));\n    (0, _defineProperty2[\"default\"])((0, _assertThisInitialized2[\"default\"])(_this), \"addOuterClick\", function () {\n      console.log(\"===== addOuterClick =====\");\n\n      _this.setState({\n        outerNum: ++_this.state.outerNum\n      });\n    });\n    (0, _defineProperty2[\"default\"])((0, _assertThisInitialized2[\"default\"])(_this), \"addInnerClick\", function () {\n      console.log(\"===== addInnerClick =====\");\n\n      _this.setState({\n        innerNum: ++_this.state.innerNum,\n        data: {\n          innerNum: ++_this.state.data.innerNum\n        }\n      });\n    });\n    _this.state = {\n      outerNum: 0,\n      innerNum: 0,\n      data: {\n        innerNum: 0\n      }\n    };\n    return _this;\n  }\n\n  (0, _createClass2[\"default\"])(PageA, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {}\n  }, {\n    key: \"render\",\n    value: function render() {\n      console.log(\"======== indexPage render ========\");\n      var _this$state = this.state,\n          outerNum = _this$state.outerNum,\n          innerNum = _this$state.innerNum,\n          data = _this$state.data;\n      return _react[\"default\"].createElement(\"div\", null, _react[\"default\"].createElement(\"button\", {\n        className: \"addOuter\",\n        onClick: this.addOuterClick\n      }, \" add outer num\"), _react[\"default\"].createElement(\"button\", {\n        className: \"addInner\",\n        onClick: this.addInnerClick\n      }, \" add inner num\"), _react[\"default\"].createElement(\"p\", null, \"outer num: \", outerNum, \"   |   inner num: \", innerNum), _react[\"default\"].createElement(_SubPage[\"default\"], {\n        num: innerNum\n      }), _react[\"default\"].createElement(_SubPage2[\"default\"], {\n        num: innerNum\n      }), _react[\"default\"].createElement(_SubPage3[\"default\"], {\n        data: data\n      }));\n    }\n  }]);\n  return PageA;\n}(_react.Component);\n\n_reactDom[\"default\"].render(_react[\"default\"].createElement(PageA, null), document.querySelector('#content'));\n\n//# sourceURL=webpack:///./PureComponentTest/src/index.jsx?");

/***/ }),

/***/ "./PureComponentTest/src/style.css":
/*!*****************************************!*\
  !*** ./PureComponentTest/src/style.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./PureComponentTest/src/style.css?");

/***/ })

/******/ });