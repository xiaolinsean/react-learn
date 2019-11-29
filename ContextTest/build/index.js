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
/******/ 	deferredModules.push(["./ContextTest/src/index.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ContextTest/components/Header/Header.jsx":
/*!**************************************************!*\
  !*** ./ContextTest/components/Header/Header.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\"));\n\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\"));\n\nvar _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\"));\n\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\n__webpack_require__(/*! ./style.css */ \"./ContextTest/components/Header/style.css\");\n\nvar _context = __webpack_require__(/*! ../../context/context */ \"./ContextTest/context/context.js\");\n\n/**\n * title components\n */\nvar Header =\n/*#__PURE__*/\nfunction (_PureComponent) {\n  (0, _inherits2[\"default\"])(Header, _PureComponent);\n\n  // static contextType = AppContext;\n  function Header(props, context) {\n    (0, _classCallCheck2[\"default\"])(this, Header);\n    return (0, _possibleConstructorReturn2[\"default\"])(this, (0, _getPrototypeOf2[\"default\"])(Header).call(this, props));\n  }\n\n  (0, _createClass2[\"default\"])(Header, [{\n    key: \"render\",\n    value: function render() {\n      // console.log(this.context);\n      return _react[\"default\"].createElement(_react[\"default\"].Fragment, null, _react[\"default\"].createElement(\"h3\", {\n        className: \"title\",\n        style: {\n          background: 'blue'\n        }\n      }, this.props.num));\n    }\n  }]);\n  return Header;\n}(_react.PureComponent);\n\nexports[\"default\"] = Header;\n\n//# sourceURL=webpack:///./ContextTest/components/Header/Header.jsx?");

/***/ }),

/***/ "./ContextTest/components/Header/style.css":
/*!*************************************************!*\
  !*** ./ContextTest/components/Header/style.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./ContextTest/components/Header/style.css?");

/***/ }),

/***/ "./ContextTest/components/SubPage1/SubPage1.jsx":
/*!******************************************************!*\
  !*** ./ContextTest/components/SubPage1/SubPage1.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\"));\n\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\"));\n\nvar _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\"));\n\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\n__webpack_require__(/*! ./style.css */ \"./ContextTest/components/SubPage1/style.css\");\n\nvar _context = __webpack_require__(/*! ../../context/context */ \"./ContextTest/context/context.js\");\n\nvar _Header = __webpack_require__(/*! ../Header/Header */ \"./ContextTest/components/Header/Header.jsx\");\n\n/**\n * title components\n */\nvar subPage1 =\n/*#__PURE__*/\nfunction (_Component) {\n  (0, _inherits2[\"default\"])(subPage1, _Component);\n\n  function subPage1(props, context) {\n    var _this;\n\n    (0, _classCallCheck2[\"default\"])(this, subPage1);\n    _this = (0, _possibleConstructorReturn2[\"default\"])(this, (0, _getPrototypeOf2[\"default\"])(subPage1).call(this, props));\n    console.log(\"=========constructor=========\");\n    console.log(context);\n    return _this;\n  }\n\n  (0, _createClass2[\"default\"])(subPage1, [{\n    key: \"shouldComponentUpdate\",\n    value: function shouldComponentUpdate(nextProps, nextState, nextContex) {\n      console.log(\"nextContex\");\n      console.log(nextContex);\n      return true;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      console.log(\"======== subPage1 render ========\");\n      return _react[\"default\"].createElement(_context.AppContext.Consumer, null, function (context) {\n        return _react[\"default\"].createElement(_react[\"default\"].Fragment, null, _react[\"default\"].createElement(\"h6\", null, \"===subPage1===\"), _react[\"default\"].createElement(\"h3\", {\n          className: \"title\"\n        }, _this2.props.num, \" || \", context.num));\n      });\n    }\n  }]);\n  return subPage1;\n}(_react.Component);\n\nexports[\"default\"] = subPage1;\n\n//# sourceURL=webpack:///./ContextTest/components/SubPage1/SubPage1.jsx?");

/***/ }),

/***/ "./ContextTest/components/SubPage1/style.css":
/*!***************************************************!*\
  !*** ./ContextTest/components/SubPage1/style.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./ContextTest/components/SubPage1/style.css?");

/***/ }),

/***/ "./ContextTest/context/context.js":
/*!****************************************!*\
  !*** ./ContextTest/context/context.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.AppContext = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar AppContext = _react[\"default\"].createContext({\n  backgroudColor: 'red',\n  num: 0\n});\n\nexports.AppContext = AppContext;\n\n//# sourceURL=webpack:///./ContextTest/context/context.js?");

/***/ }),

/***/ "./ContextTest/src/index.jsx":
/*!***********************************!*\
  !*** ./ContextTest/src/index.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\"));\n\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\"));\n\nvar _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\"));\n\nvar _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\"));\n\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\"));\n\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\"));\n\n__webpack_require__(/*! ./style.css */ \"./ContextTest/src/style.css\");\n\nvar _SubPage = _interopRequireDefault(__webpack_require__(/*! ../components/SubPage1/SubPage1 */ \"./ContextTest/components/SubPage1/SubPage1.jsx\"));\n\nvar _context = __webpack_require__(/*! ../context/context */ \"./ContextTest/context/context.js\");\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  (0, _inherits2[\"default\"])(App, _Component);\n\n  function App(props) {\n    var _this;\n\n    (0, _classCallCheck2[\"default\"])(this, App);\n    _this = (0, _possibleConstructorReturn2[\"default\"])(this, (0, _getPrototypeOf2[\"default\"])(App).call(this, props));\n    (0, _defineProperty2[\"default\"])((0, _assertThisInitialized2[\"default\"])(_this), \"addInnerClick\", function () {\n      console.log(\"===== addInnerClick =====\");\n      var AppContextData = _this.state.AppContextData;\n      AppContextData.num = AppContextData.num + 1;\n\n      _this.setState({\n        num: ++_this.state.num,\n        AppContextData: AppContextData\n      });\n    });\n    _this.state = {\n      num: 0,\n      AppContextData: {\n        backgroudColor: 'red',\n        num: 0\n      }\n    };\n    return _this;\n  }\n\n  (0, _createClass2[\"default\"])(App, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {}\n  }, {\n    key: \"render\",\n    value: function render() {\n      console.log(\"======== indexPage render ========\");\n      var _this$state = this.state,\n          num = _this$state.num,\n          AppContextData = _this$state.AppContextData;\n      return _react[\"default\"].createElement(\"div\", {\n        style: {\n          width: \"100%\"\n        }\n      }, _react[\"default\"].createElement(\"button\", {\n        className: \"addInner\",\n        onClick: this.addInnerClick\n      }, \" add inner num\"), _react[\"default\"].createElement(\"p\", null, \"number: \", num, \" \"), _react[\"default\"].createElement(\"hr\", null), _react[\"default\"].createElement(_context.AppContext.Provider, {\n        value: AppContextData\n      }, _react[\"default\"].createElement(_SubPage[\"default\"], {\n        num: num\n      })));\n    }\n  }]);\n  return App;\n}(_react.Component);\n\n_reactDom[\"default\"].render(_react[\"default\"].createElement(App, null), document.querySelector('#content'));\n\n//# sourceURL=webpack:///./ContextTest/src/index.jsx?");

/***/ }),

/***/ "./ContextTest/src/style.css":
/*!***********************************!*\
  !*** ./ContextTest/src/style.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./ContextTest/src/style.css?");

/***/ })

/******/ });