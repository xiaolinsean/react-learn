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
/******/ 	deferredModules.push(["./Lifecycle/src/index.jsx","vendor","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Lifecycle/src/components/sub1.jsx":
/*!*******************************************!*\
  !*** ./Lifecycle/src/components/sub1.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/interopRequireWildcard.js\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/classCallCheck.js\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/createClass.js\"));\n\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/possibleConstructorReturn.js\"));\n\nvar _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/getPrototypeOf.js\"));\n\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/inherits.js\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/_react@16.12.0@react/index.js\"));\n\nvar Sub1 =\n/*#__PURE__*/\nfunction (_Component) {\n  (0, _inherits2[\"default\"])(Sub1, _Component);\n\n  function Sub1(props) {\n    var _this;\n\n    (0, _classCallCheck2[\"default\"])(this, Sub1);\n    _this = (0, _possibleConstructorReturn2[\"default\"])(this, (0, _getPrototypeOf2[\"default\"])(Sub1).call(this, props));\n    console.log(\"########## Sub1 constructor ##########\");\n    return _this;\n  } // static getDerivedStateFromProps(props, state) {\n  //     console.log(\"========== Sub1 getDerivedStateFromProps ==========\");\n  //     return null;\n  // }\n\n\n  (0, _createClass2[\"default\"])(Sub1, [{\n    key: \"UNSAFE_componentWillMount\",\n    value: function UNSAFE_componentWillMount() {\n      console.log(\"########## Sub1 UNSAFE_componentWillMount ##########\");\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      console.log(\"########## Sub1 componentDidMount ##########\");\n    }\n  }, {\n    key: \"UNSAFE_componentWillReceiveProps\",\n    value: function UNSAFE_componentWillReceiveProps(nextProps) {\n      console.log(\"########## Sub1 UNSAFE_componentWillReceiveProps ##########\");\n      console.log(\"this.props:\" + JSON.stringify(this.props) + \" ====== nextProps:\" + JSON.stringify(nextProps));\n    }\n  }, {\n    key: \"UNSAFE_componentWillUpdate\",\n    value: function UNSAFE_componentWillUpdate(nextProps, nextState) {\n      console.log(\"########## Sub1 UNSAFE_componentWillUpdate ##########\");\n    }\n  }, {\n    key: \"shouldComponentUpdate\",\n    value: function shouldComponentUpdate(nextProps, nextState) {\n      console.log(\"########## Sub1 shouldComponentUpdate ##########\");\n      console.log(\"this.props:\" + JSON.stringify(this.props) + \" ====== nextProps:\" + JSON.stringify(nextProps));\n      console.log(\"this.state:\" + JSON.stringify(this.state) + \" ====== nextState:\" + JSON.stringify(nextState));\n      return true;\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps, prevState, snapshot) {\n      console.log(\"########## Sub1 componentDidUpdate ##########\");\n      console.log(\"this.props:\" + JSON.stringify(this.props) + \" ====== prevProps:\" + JSON.stringify(prevProps));\n    } // getSnapshotBeforeUpdate(prevProps, preState) {\n    //   console.log(\"========== Sub1 getSnapshotBeforeUpdate ==========\");\n    // }\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      console.log(\"########## Sub1 render ##########\");\n      return _react[\"default\"].createElement(_react[\"default\"].Fragment, null, _react[\"default\"].createElement(\"div\", null, \"========= sub1 =======\"), _react[\"default\"].createElement(\"div\", null, this.props.sub1Value));\n    }\n  }]);\n  return Sub1;\n}(_react.Component);\n\nexports[\"default\"] = Sub1;\n\n//# sourceURL=webpack:///./Lifecycle/src/components/sub1.jsx?");

/***/ }),

/***/ "./Lifecycle/src/components/sub2.jsx":
/*!*******************************************!*\
  !*** ./Lifecycle/src/components/sub2.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/interopRequireWildcard.js\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/classCallCheck.js\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/createClass.js\"));\n\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/possibleConstructorReturn.js\"));\n\nvar _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/getPrototypeOf.js\"));\n\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/inherits.js\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/_react@16.12.0@react/index.js\"));\n\nvar Sub2 =\n/*#__PURE__*/\nfunction (_Component) {\n  (0, _inherits2[\"default\"])(Sub2, _Component);\n\n  function Sub2(props) {\n    var _this;\n\n    (0, _classCallCheck2[\"default\"])(this, Sub2);\n    _this = (0, _possibleConstructorReturn2[\"default\"])(this, (0, _getPrototypeOf2[\"default\"])(Sub2).call(this, props));\n    console.log(\"*********** Sub2 componentDidUpdate ***********\");\n    return _this;\n  } // static getDerivedStateFromProps() {\n  //     console.log(\"========== Sub2 getDerivedStateFromProps ==========\");\n  //     return null;\n  // }\n\n\n  (0, _createClass2[\"default\"])(Sub2, [{\n    key: \"UNSAFE_componentWillMount\",\n    value: function UNSAFE_componentWillMount() {\n      console.log(\"*********** Sub2 UNSAFE_componentWillMount ***********\");\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      console.log(\"*********** Sub2 componentDidMount ***********\");\n    }\n  }, {\n    key: \"UNSAFE_componentWillReceiveProps\",\n    value: function UNSAFE_componentWillReceiveProps() {\n      console.log(\"*********** Sub2 UNSAFE_componentWillReceiveProps ***********\");\n    }\n  }, {\n    key: \"UNSAFE_componentWillUpdate\",\n    value: function UNSAFE_componentWillUpdate() {\n      console.log(\"*********** Sub2 UNSAFE_componentWillUpdate ***********\");\n    }\n  }, {\n    key: \"shouldComponentUpdate\",\n    value: function shouldComponentUpdate() {\n      console.log(\"########## Sub2 shouldComponentUpdate ##########\");\n      return true;\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      console.log(\"*********** Sub2 componentDidUpdate ***********\");\n    } // getSnapshotBeforeUpdate() {\n    //   console.log(\"========== Sub2 getSnapshotBeforeUpdate ==========\");\n    // }\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      console.log(\"*********** render componentDidUpdate ***********\");\n      return _react[\"default\"].createElement(_react[\"default\"].Fragment, null, _react[\"default\"].createElement(\"div\", null, \"========= sub2 =======\"), _react[\"default\"].createElement(\"div\", null, this.props.sub2Value));\n    }\n  }]);\n  return Sub2;\n}(_react.Component);\n\nexports[\"default\"] = Sub2;\n\n//# sourceURL=webpack:///./Lifecycle/src/components/sub2.jsx?");

/***/ }),

/***/ "./Lifecycle/src/index.jsx":
/*!*********************************!*\
  !*** ./Lifecycle/src/index.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/interopRequireWildcard.js\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/interopRequireDefault.js\");\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/classCallCheck.js\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/createClass.js\"));\n\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/possibleConstructorReturn.js\"));\n\nvar _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/getPrototypeOf.js\"));\n\nvar _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/assertThisInitialized.js\"));\n\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/inherits.js\"));\n\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/defineProperty.js\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/_react@16.12.0@react/index.js\"));\n\nvar _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ \"./node_modules/_react-dom@16.12.0@react-dom/index.js\"));\n\n__webpack_require__(/*! ./style.css */ \"./Lifecycle/src/style.css\");\n\nvar _sub = _interopRequireDefault(__webpack_require__(/*! ./components/sub1 */ \"./Lifecycle/src/components/sub1.jsx\"));\n\nvar _sub2 = _interopRequireDefault(__webpack_require__(/*! ./components/sub2 */ \"./Lifecycle/src/components/sub2.jsx\"));\n\nvar Index =\n/*#__PURE__*/\nfunction (_Component) {\n  (0, _inherits2[\"default\"])(Index, _Component);\n\n  function Index(props) {\n    var _this;\n\n    (0, _classCallCheck2[\"default\"])(this, Index);\n    console.log(\"========== index constructor ==========\");\n    _this = (0, _possibleConstructorReturn2[\"default\"])(this, (0, _getPrototypeOf2[\"default\"])(Index).call(this, props));\n    (0, _defineProperty2[\"default\"])((0, _assertThisInitialized2[\"default\"])(_this), \"handleClick\", function (index) {\n      if (index == 1) {\n        _this.setState({\n          sub1Value: _this.state.sub1Value + 1\n        });\n      } else if (index == 2) {\n        _this.setState({\n          sub2Value: _this.state.sub2Value + 1\n        });\n      } else {\n        _this.setState({\n          indexValue: _this.state.indexValue + 1\n        });\n      }\n    });\n    _this.state = {\n      indexValue: 0,\n      sub1Value: 0,\n      sub2Value: 0\n    };\n    return _this;\n  } //   static getDerivedStateFromProps() {\n  //     console.log(\"========== index getDerivedStateFromProps ==========\");\n  //     return null;\n  //   }\n\n\n  (0, _createClass2[\"default\"])(Index, [{\n    key: \"UNSAFE_componentWillMount\",\n    value: function UNSAFE_componentWillMount() {\n      console.log(\"========== index UNSAFE_componentWillMount ==========\");\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      console.log(\"========== index componentDidMount ==========\");\n    }\n  }, {\n    key: \"UNSAFE_componentWillUpdate\",\n    value: function UNSAFE_componentWillUpdate() {\n      console.log(\"========== index UNSAFE_componentWillUpdate ==========\");\n    } //   shouldComponentUpdate() {\n    //     console.log(\"========== index shouldComponentUpdate ==========\");\n    //     return true;\n    //   }\n\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate() {\n      console.log(\"========== index componentDidUpdate ==========\");\n    } // getSnapshotBeforeUpdate(prevProps, preState) {\n    //   console.log(\"========== index getSnapshotBeforeUpdate ==========\");\n    // }\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      console.log(\"========== index render ==========\");\n      return _react[\"default\"].createElement(\"div\", null, _react[\"default\"].createElement(\"p\", null, \"============= Index ==========\"), _react[\"default\"].createElement(\"button\", {\n        onClick: function onClick() {\n          _this2.handleClick(0);\n        }\n      }, \"\\u70B9\\u51FBindex\\u52A01\"), _react[\"default\"].createElement(\"button\", {\n        onClick: function onClick() {\n          _this2.handleClick(1);\n        }\n      }, \"\\u70B9\\u51FBsub1\\u52A01\"), _react[\"default\"].createElement(\"button\", {\n        onClick: function onClick() {\n          _this2.handleClick(2);\n        }\n      }, \"\\u70B9\\u51FBsub2\\u52A01\"), _react[\"default\"].createElement(\"p\", null, \"indexValue:\", this.state.indexValue), _react[\"default\"].createElement(\"p\", null), _react[\"default\"].createElement(_sub[\"default\"], {\n        sub1Value: this.state.sub1Value\n      }), _react[\"default\"].createElement(_sub2[\"default\"], {\n        sub2Value: this.state.sub2Value\n      }));\n    }\n  }]);\n  return Index;\n}(_react.Component);\n\n_reactDom[\"default\"].render(_react[\"default\"].createElement(Index, null), document.querySelector('#content'));\n\n//# sourceURL=webpack:///./Lifecycle/src/index.jsx?");

/***/ })

/******/ });