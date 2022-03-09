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
/******/ 	deferredModules.push(["./HookTest/src/index.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./HookTest/components/classCom/index.jsx":
/*!************************************************!*\
  !*** ./HookTest/components/classCom/index.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\n__webpack_require__(/*! core-js/modules/es.date.to-string */ \"./node_modules/core-js/modules/es.date.to-string.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.to-string */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n\n__webpack_require__(/*! core-js/modules/es.reflect.construct */ \"./node_modules/core-js/modules/es.reflect.construct.js\");\n\n__webpack_require__(/*! core-js/modules/es.regexp.to-string */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n\n__webpack_require__(/*! core-js/modules/web.timers */ \"./node_modules/core-js/modules/web.timers.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\"));\n\nvar _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\"));\n\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\"));\n\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\"));\n\nvar _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\"));\n\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\"));\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nvar ClassCom = /*#__PURE__*/function (_Component) {\n  (0, _inherits2[\"default\"])(ClassCom, _Component);\n\n  var _super = _createSuper(ClassCom);\n\n  function ClassCom(props) {\n    var _this;\n\n    (0, _classCallCheck2[\"default\"])(this, ClassCom);\n    _this = _super.call(this, props);\n    (0, _defineProperty2[\"default\"])((0, _assertThisInitialized2[\"default\"])(_this), \"handerClick\", function () {\n      for (var i = 0; i < 5; i++) {\n        setTimeout(function () {\n          _this.setState({\n            number: _this.state.number + 1\n          });\n\n          console.log(_this.state.number);\n        }, 1000);\n      }\n    });\n    _this.state = {\n      number: 0\n    };\n    return _this;\n  }\n\n  (0, _createClass2[\"default\"])(ClassCom, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/_react[\"default\"].createElement(\"div\", null, /*#__PURE__*/_react[\"default\"].createElement(\"button\", {\n        onClick: this.handerClick\n      }, \"num++\"));\n    }\n  }]);\n  return ClassCom;\n}(_react.Component);\n\nexports[\"default\"] = ClassCom;\n\n//# sourceURL=webpack:///./HookTest/components/classCom/index.jsx?");

/***/ }),

/***/ "./HookTest/components/funcCom/index.jsx":
/*!***********************************************!*\
  !*** ./HookTest/components/funcCom/index.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\n__webpack_require__(/*! core-js/modules/web.timers */ \"./node_modules/core-js/modules/web.timers.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = FuncCom;\n\nvar _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nfunction FuncCom() {\n  var _useState = (0, _react.useState)(0),\n      _useState2 = (0, _slicedToArray2[\"default\"])(_useState, 2),\n      num = _useState2[0],\n      setNumber = _useState2[1];\n\n  var handerClick = function handerClick() {\n    for (var i = 0; i < 5; i++) {\n      setTimeout(function () {\n        setNumber(num + 1);\n        console.log(num);\n      }, 1000);\n    }\n  };\n\n  return /*#__PURE__*/_react[\"default\"].createElement(\"button\", {\n    onClick: handerClick\n  }, num);\n}\n\n//# sourceURL=webpack:///./HookTest/components/funcCom/index.jsx?");

/***/ }),

/***/ "./HookTest/components/useEffectExample/index.jsx":
/*!********************************************************!*\
  !*** ./HookTest/components/useEffectExample/index.jsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar UseEffectExample = /*#__PURE__*/(0, _react.memo)(function (props) {\n  console.log(\"===== UseStateExample render=======\"); // 声明一个叫 “count” 的 state 变量。\n\n  var _useState = (0, _react.useState)(0),\n      _useState2 = (0, _slicedToArray2[\"default\"])(_useState, 2),\n      count = _useState2[0],\n      setCount = _useState2[1];\n\n  var _useState3 = (0, _react.useState)(0),\n      _useState4 = (0, _slicedToArray2[\"default\"])(_useState3, 2),\n      count2 = _useState4[0],\n      setCount2 = _useState4[1];\n\n  var _useState5 = (0, _react.useState)(props.fatherCount),\n      _useState6 = (0, _slicedToArray2[\"default\"])(_useState5, 2),\n      fatherCount = _useState6[0],\n      setFatherCount = _useState6[1];\n\n  console.log(count); // 模拟 getDerivedStateFromProps\n\n  (0, _react.useEffect)(function () {\n    // props.fatherCount 有更新，才执行对应的修改，没有更新执行另外的逻辑\n    if (props.fatherCount == fatherCount) {\n      console.log(\"======= 模拟 getDerivedStateFromProps=======\");\n      console.log(props.fatherCount, fatherCount);\n    } else {\n      setFatherCount(props.fatherCount);\n      console.log(props.fatherCount, fatherCount);\n    }\n  }); // 模拟DidMount\n\n  (0, _react.useEffect)(function () {\n    console.log(\"=======只渲染一次(相当于DidMount)=======\");\n    console.log(count);\n  }, []); // 模拟DidUpdate\n\n  var mounted = (0, _react.useRef)();\n  (0, _react.useEffect)(function () {\n    console.log(mounted);\n\n    if (!mounted.current) {\n      mounted.current = true;\n    } else {\n      console.log(\"======count 改变时才执行(相当于DidUpdate)=========\");\n      console.log(count);\n    }\n  }, [count]); // 模拟 Didmount和DidUpdate 、 unmount\n\n  (0, _react.useEffect)(function () {\n    console.log(\"======初始化、或者 count 改变时才执行(相当于Didmount和DidUpdate)=========\");\n    console.log(count);\n    return function () {\n      console.log(\"====unmount=======\");\n      console.log(count);\n    };\n  }, [count]);\n  return /*#__PURE__*/_react[\"default\"].createElement(\"div\", null, /*#__PURE__*/_react[\"default\"].createElement(\"p\", null, \"You clicked \", count, \" times\"), /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n    className: \"btn\",\n    onClick: function onClick() {\n      return setCount(count + 1);\n    }\n  }, \"Click me\"), /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n    className: \"btn\",\n    onClick: function onClick() {\n      return setCount2(count2 + 1);\n    }\n  }, \"Click me2\"));\n});\nvar _default = UseEffectExample;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./HookTest/components/useEffectExample/index.jsx?");

/***/ }),

/***/ "./HookTest/src/index.jsx":
/*!********************************!*\
  !*** ./HookTest/src/index.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/@babel/runtime/helpers/interopRequireWildcard.js\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nvar _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\"));\n\nvar _index = _interopRequireDefault(__webpack_require__(/*! ../components/useEffectExample/index */ \"./HookTest/components/useEffectExample/index.jsx\"));\n\nvar _index2 = _interopRequireDefault(__webpack_require__(/*! ../components/classCom/index */ \"./HookTest/components/classCom/index.jsx\"));\n\nvar _index3 = _interopRequireDefault(__webpack_require__(/*! ../components/funcCom/index */ \"./HookTest/components/funcCom/index.jsx\"));\n\n__webpack_require__(/*! ./style.css */ \"./HookTest/src/style.css\");\n\nvar App = function App() {\n  console.log('===== index render =======');\n\n  var _useState = (0, _react.useState)(true),\n      _useState2 = (0, _slicedToArray2[\"default\"])(_useState, 2),\n      isCountShow = _useState2[0],\n      setCountShow = _useState2[1];\n\n  var _useState3 = (0, _react.useState)(100),\n      _useState4 = (0, _slicedToArray2[\"default\"])(_useState3, 2),\n      fatherCount = _useState4[0],\n      setFatherCount = _useState4[1];\n\n  var _useState5 = (0, _react.useState)(100),\n      _useState6 = (0, _slicedToArray2[\"default\"])(_useState5, 2),\n      fatherCount2 = _useState6[0],\n      setFatherCount2 = _useState6[1];\n\n  return /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n    style: {\n      width: '100%'\n    }\n  }, /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n    className: \"btn\",\n    onClick: function onClick() {\n      return setFatherCount(fatherCount + 100);\n    }\n  }, \"father count\"), /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n    className: \"btn\",\n    onClick: function onClick() {\n      return setFatherCount2(fatherCount2 + 100);\n    }\n  }, \"father count2\"), /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n    className: \"section\"\n  }, /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n    className: \"title\"\n  }, \"UseEffectExample\"), isCountShow ? /*#__PURE__*/_react[\"default\"].createElement(_index[\"default\"], {\n    fatherCount: fatherCount\n  }) : '', /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n    className: \"btn\",\n    onClick: function onClick() {\n      setCountShow(!isCountShow);\n    }\n  }, \"remove/add conut\"), /*#__PURE__*/_react[\"default\"].createElement(\"hr\", null), /*#__PURE__*/_react[\"default\"].createElement(_index2[\"default\"], null), /*#__PURE__*/_react[\"default\"].createElement(_index3[\"default\"], null)));\n};\n\n_reactDom[\"default\"].render( /*#__PURE__*/_react[\"default\"].createElement(App, null), document.querySelector('#content'));\n\n//# sourceURL=webpack:///./HookTest/src/index.jsx?");

/***/ }),

/***/ "./HookTest/src/style.css":
/*!********************************!*\
  !*** ./HookTest/src/style.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./HookTest/src/style.css?");

/***/ })

/******/ });