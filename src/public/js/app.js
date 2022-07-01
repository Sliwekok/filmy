/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/build/scss/app.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/build/scss/app.scss ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/adminBackground.webp */ \"./src/build/img/adminBackground.webp\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html, body {\\n  background-color: rgb(26, 28, 29);\\n  color: rgb(255, 255, 255);\\n  font-family: \\\"Nunito\\\", sans-serif;\\n  height: 100vh;\\n  overflow-x: hidden;\\n}\\n\\n#chat {\\n  border-left: 1px solid white;\\n  padding: 0px;\\n  margin: 0px;\\n  height: 100vh;\\n  padding-top: 1vh;\\n}\\n#chat #messages {\\n  height: 95vh;\\n  padding-left: 20px;\\n  overflow: auto;\\n  padding-bottom: 5vh;\\n}\\n#chat #messages .message {\\n  display: block;\\n}\\n#chat #messages .message span.user {\\n  font-weight: 600;\\n}\\n#chat #messages .command {\\n  display: block;\\n  color: rgba(191, 191, 191, 0.9);\\n  font-style: italic;\\n}\\n#chat form {\\n  display: inline-flex;\\n  padding: 0px;\\n  background-color: rgb(26, 28, 29);\\n  position: absolute;\\n  bottom: 0px;\\n  left: 15px;\\n}\\n#chat form #messageBox {\\n  background-color: rgb(26, 28, 29);\\n  border: 0px solid white;\\n  border-bottom: 1px solid white;\\n  outline: none;\\n  color: rgb(255, 255, 255);\\n  padding-left: 0px;\\n}\\n\\n#player {\\n  height: 100vh;\\n  padding: 0px;\\n  padding-top: 7.5vh;\\n  background-color: rgb(0, 0, 0);\\n}\\n\\n.video-js.vjs-playing .vjs-tech {\\n  pointer-events: none;\\n}\\n\\n#adminPanel #backgroundImage {\\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: no-repeat;\\n  background-attachment: fixed;\\n  background-size: cover;\\n  width: 100% !important;\\n  height: 100% !important;\\n  filter: blur(8px);\\n  display: block;\\n  position: absolute;\\n  z-index: 1;\\n}\\n#adminPanel #content {\\n  position: absolute;\\n  z-index: 10;\\n  padding: 5vh;\\n  height: 100%;\\n}\\n#adminPanel #content .currentlyWatched {\\n  font-size: 1.5rem;\\n  text-align: center;\\n}\\n#adminPanel #content #movies {\\n  margin-top: 3vh;\\n}\\n#adminPanel #content #movies #currentMovie, #adminPanel #content #movies option {\\n  padding: 5px;\\n}\\n#adminPanel #content #logs {\\n  margin-top: 3vh;\\n}\\n#adminPanel #content #logs p#title {\\n  font-size: 1.25rem;\\n  text-align: center;\\n}\\n.inline-flex {\\n  display: inline-flex;\\n  flex-wrap: wrap;\\n}\\n\\n#setUsername {\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  z-index: 10;\\n  text-align: center;\\n  background-color: #1a1c1d;\\n  padding-top: 12.5vh;\\n  display: none;\\n}\\n#setUsername form {\\n  width: 100%;\\n}\\n#setUsername form input {\\n  width: 25%;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/build/scss/app.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/build/scss/app.scss":
/*!*********************************!*\
  !*** ./src/build/scss/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./app.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/build/scss/app.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/build/scss/app.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/build/js/admin.js":
/*!*******************************!*\
  !*** ./src/build/js/admin.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.js */ \"./src/build/js/app.js\");\n\r\n\r\n\r\n// on change of select - update movie on index\r\n$(document).on(\"change\", \"#currentMovie\", function(){\r\n    let movie = $(this).val();\r\n    $.ajax({\r\n        url: '/app/routes/AdminChangeMovie.php',\r\n        method: 'POST',\r\n        data: {movie: movie, token: js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('token')},\r\n        error: function(xhr, status, error){\r\n            console.log(error);\r\n            (0,_app_js__WEBPACK_IMPORTED_MODULE_1__.showErrorMessage)(xhr.responseText);\r\n            return false;\r\n        },\r\n        success: function(data){\r\n            console.log(\"Movie has been changed. Refresh player to see changes\");\r\n            return true;\r\n        }\r\n    });\r\n})\n\n//# sourceURL=webpack:///./src/build/js/admin.js?");

/***/ }),

/***/ "./src/build/js/app.js":
/*!*****************************!*\
  !*** ./src/build/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showErrorMessage\": () => (/* binding */ showErrorMessage)\n/* harmony export */ });\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ \"./src/build/scss/app.scss\");\n/* harmony import */ var _commands_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commands.js */ \"./src/build/js/commands.js\");\n/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bootstrap.js */ \"./src/build/js/bootstrap.js\");\n/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token.js */ \"./src/build/js/token.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player.js */ \"./src/build/js/player.js\");\n/* harmony import */ var _admin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin.js */ \"./src/build/js/admin.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n// allow scss files to be compiled\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// send message to server \r\n$(document).on(\"submit\", \"#sendMessage\", function(e){\r\n    e.preventDefault();\r\n    // from message trim all extra whitespaces\r\n    let message = $(\"#messageBox\").val().replace(/\\s+/g,' ').trim(),\r\n        token = js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get('token');\r\n    // token validation is server-side\r\n    \r\n    // check if user has short ban on chat \r\n    if(userIsBanned()) return false;\r\n\r\n    // if message is command to bot - enable bot \r\n    if(checkIfMessageIsCommand(message)) _commands_js__WEBPACK_IMPORTED_MODULE_1__.callBot(message);\r\n    else sendMessageToServer(message, token);\r\n    // trim form field \r\n    $(\"#messageBox\").val(\"\");\r\n    return;\r\n});\r\n\r\nfunction sendMessageToServer(message, token){ \r\n    $.ajax({\r\n        url: '/app/routes/sendMessage.php',\r\n        method: 'POST',\r\n        data: {message: message, token: token},\r\n        error: function(xhr, status, error){\r\n            // console.log(error);\r\n            showErrorMessage(xhr.responseText);\r\n            return false;\r\n        },\r\n        success: function(data){\r\n            // console.log(data);\r\n            return true;\r\n        }\r\n    });\r\n}\r\n\r\n// check if commands is bot command\r\nfunction checkIfMessageIsCommand(message){\r\n    // check first char to check if command is properly executed\r\n    \r\n    // if message doesn't start with ! - return\r\n    if(message.charAt(0) !== '!') return false;\r\n    \r\n    // these are bot names\r\n    const botName = ['bot', 'krystian'];\r\n    let firstWord = message.replace(/ .*/,'').replace(\"!\", \"\").toLowerCase();\r\n    // check if first word is bot name to call him\r\n    if(firstWord == botName[0] || firstWord == botName[1]) return true;\r\n    else return false;\r\n}\r\n\r\n// on enter click focus on send message form\r\n$(document).keypress(function (e) { \r\n    if(e.which == 13){\r\n        $('#messageBox').focus();\r\n    }\r\n});\r\n\r\n\r\n\r\n// check if user is still banned\r\nfunction userIsBanned(){\r\n    let time = js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get('ban');\r\n    if(time > 0) return true;\r\n    return false;\r\n}\r\n\r\n\r\n// on error show error message and delete cookies\r\nfunction showErrorMessage(message){\r\n\tif(confirm('Error: ' + message) == true){\r\n\t\tlet  cookies = document.cookie.split(\";\");\r\n\r\n        // delete all the cookies\r\n\t\tfor (var i = 0; i < cookies.length; i++) {\r\n\t\t\tlet cookie = cookies[i],\r\n\t\t\t\teqPos = cookie.indexOf(\"=\"),\r\n\t\t\t\tname = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;\r\n\t\t\t// expire cookie to auto delet it\r\n\t\t\tdocument.cookie = name + \"=;expires=Thu, 01 Jan 1970 00:00:00 GMT\";\r\n\t\t}\r\n\t\t// reload page\r\n\t\twindow.location.reload(true);\r\n\t}\r\n}\r\n\r\n// on fully load, initialize videojs\r\n$(document).ready(function(){\r\n    let options = {\r\n        \"fluid\": true,\r\n        controlBar: {\r\n            playToggle: false,\r\n            captionsButton: false,\r\n            chaptersButton: false,            \r\n            subtitlesButton: false,\r\n            remainingTimeDisplay: true,\r\n            progressControl: {\r\n              seekBar: false\r\n            },\r\n            pictureInPictureToggle: false,\r\n            fullscreenToggle: true,\r\n            playbackRateMenuButton: false,\r\n          },\r\n    };\r\n    videojs('video', options);\r\n    return\r\n});\r\n\n\n//# sourceURL=webpack:///./src/build/js/app.js?");

/***/ }),

/***/ "./src/build/js/bootstrap.js":
/*!***********************************!*\
  !*** ./src/build/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/build/js/player.js\");\n \r\n// Enable pusher logging - don't include this in production\r\nPusher.logToConsole = false;\r\n\r\nvar pusher = new Pusher('85c7e729ddbd4949bdcf', {\r\n  cluster: 'eu'\r\n});\r\n\r\nconst chat = pusher.subscribe('chat');\r\n// user written message to show on chat\r\nchat.bind('sendMessageOnChat', function(data){\r\n\tlet user = data[\"user\"],\r\n\t\tmessage = data[\"message\"],\r\n\t\tcolor = data[\"color\"],\r\n\t\thtml = `<div class='row message'><div class='col-12'><span class='user' style='color: ${color};'>${user}: </span><span class='text'>${message}</span></div></div>`;\r\n\t// append message to div\r\n\t$(\"#messages\").append(html);\r\n\t// scroll to the bottom of chat div\r\n\tlet div = document.getElementById('messages');\r\n\tdiv.scrollTop = div.scrollHeight;\r\n\treturn;\r\n});\r\nchat.bind('sendCommandOnChat', function(data){\r\n\tlet\tuser = data[\"user\"],\r\n\t\tcommand = data[\"command\"],\r\n\t\tcommandDescription = data[\"commandDescription\"],\r\n\t\ttext = `<div class=\"row command\"><div class=\"col-12\"><span><b>${user}</b> ${commandDescription}</span></div></div>`;\r\n\tlet videoJS = new _player__WEBPACK_IMPORTED_MODULE_0__.Player();\r\n\t\r\n\t// call right command handler\r\n\tswitch(command){\r\n\t\tcase \"play\":\r\n        \tvideoJS.playMovie();\r\n\t\t\tbreak;\r\n\t\tcase \"pause\":\r\n        \tvideoJS.stopMovie();\r\n\t\t\tbreak;\r\n\t\tcase \"setAt\":\r\n        \tvideoJS.setMovieTimeAt(data['timestamp']);\r\n\t\t\tbreak;\r\n\t\tcase \"forward\":\r\n\t\t\tvideoJS.forwardMovie(data['timestamp']);\r\n\t\t\tbreak;\r\n\t\tcase \"back\":\r\n\t\t\tvideoJS.rewind(data['timestamp']);\r\n\t\t\tbreak;\r\n\t\tdefault:\r\n\t\t\tbreak;\r\n\t}\r\n\t// append command message chat\r\n\t$(\"#messages\").append(text);\r\n\t\r\n\t// scroll to the bottom of chat div\r\n\tlet div = document.getElementById('messages');\r\n\tdiv.scrollTop = div.scrollHeight;\r\n\r\n});\r\n\n\n//# sourceURL=webpack:///./src/build/js/bootstrap.js?");

/***/ }),

/***/ "./src/build/js/commands.js":
/*!**********************************!*\
  !*** ./src/build/js/commands.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"callBot\": () => (/* binding */ callBot)\n/* harmony export */ });\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/build/js/player.js\");\n\r\n\r\n\r\n// This file is responsible for chat commands\r\n// every command start with !bot or !Krystian (it's just bot second name lol)\r\n\r\nfunction callBot(text){\r\n    let token = js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('token'),\r\n        command = text.split(\" \");\r\n\r\n    // depending on bot command call right function\r\n    switch(command[1]){\r\n        case \"help\":\r\n            writeHelpCommands();\r\n            break;\r\n        case \"play\":\r\n            continueMovie(token);\r\n            break;\r\n        case \"pause\":\r\n            stopMovie(token);\r\n            break;\r\n        case \"ban\":\r\n            banUserWhoCalledFunction(token);\r\n            break;\r\n        case \"set\":\r\n            setMovieTimeAt(token, command[2]);\r\n            break;\r\n        case \"time\":\r\n            showCurrentTime();\r\n            break;\r\n        case \"forward\":\r\n            forwardMovie(token, command[2]);\r\n            break;\r\n        case \"back\":\r\n            rewindMovie(token, command[2]);\r\n            break;\r\n        // add invisible command to grant admin access to admin panel\r\n        case \"admin\":\r\n            grantAdmin(token);\r\n            break;\r\n        default:\r\n            NoCommandFound();\r\n            break;\r\n    }\r\n    return;\r\n}\r\n\r\n// forward movie by x time (in seconds)\r\nfunction forwardMovie(token, time){ \r\n    // ajax request to backend with command    \r\n    $.ajax({\r\n        url: `/app/routes/CommandForward.php`,\r\n        method: 'POST',\r\n        data: {token: token, time: time},\r\n        error: function(error){\r\n            console.log(error);\r\n            return false;\r\n        },\r\n        success: function(data){\r\n            return true;\r\n        }\r\n    });\r\n    return;\r\n}\r\n\r\n// back movie by x time (in seconds)\r\nfunction rewindMovie(token, time){ \r\n    // ajax request to backend with command    \r\n    $.ajax({\r\n        url: `/app/routes/CommandBack.php`,\r\n        method: 'POST',\r\n        data: {token: token, time: time},\r\n        error: function(error){\r\n            console.log(error);\r\n            return false;\r\n        },\r\n        success: function(data){\r\n            return true;\r\n        }\r\n    });\r\n    return;\r\n}\r\n// grant admin access\r\nfunction grantAdmin(token){\r\n    let inbox = prompt(\"Enter admin password:\");\r\n    // validate data\r\n    if(inbox == null || inbox == \"\"){\r\n        alert(\"Provide any password\");\r\n        return;\r\n    }\r\n    // pułapka na dizla XD\r\n    // added toLowerCase to be sure dizl will find it out\r\n    if(inbox.toLowerCase() == \"dobnet\"){\r\n        alert(\"próbuj dalej dizl boi\");\r\n        return;\r\n    }\r\n    $.ajax({\r\n        url: `/app/routes/CommandGrantAdmin.php`,\r\n        method: 'POST',\r\n        data: {token: token, password: inbox},\r\n        error: function(error){\r\n            console.log(error);\r\n            return false;\r\n        },\r\n        success: function(data){\r\n            // overwrite existing token with new token\r\n            js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].remove('token');\r\n            js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set('token', data);\r\n            // show admin panel webpage\r\n            window.open(window.location.href + \"/admin.php\");\r\n            return true;\r\n        }\r\n    });\r\n\r\n}\r\n\r\n// show possible commands\r\nfunction writeHelpCommands(){\r\n    let text = `<div class=\"row command\"><div class=\"col-12\"><span><b>Bot Krystian</b> heard you're looking for help, hm?<br>Well, there are command that (even) you can run!<br>Just Type <b>!bot</b> or <b>!Krystian</b> and choose your command <b><i>wisely</i></b><ul><li><b>play</b> - continues to play video</li><li><b>pause</b> - stops video</li><li><b>time</b> - shows current movie time</li><li><b>set [mm]:[ss]</b> - sets movie time for all participants in given time!</li><li><b>forward [ss]</b> - move player by x seconds forwrd</li><li><b>back [ss]</b> - move player by x seconds back in time</li><li><b>ban 'user'</b> - ban mentioned user (don't know for how long tho)</li></ul>(psst, only you and <i>Krystian</i> knows you needed help, but remember - don't be ashamed of it)</span></div></div>`;\r\n    // append message to div\r\n\t$(\"#messages\").append(text);\r\n}\r\n\r\n// ban user that wanted to ban the other one just for fun\r\nfunction banUserWhoCalledFunction(token){\r\n    // if there was an error in request - don't give ban to user\r\n    // (JUSTICE FOR EVERYONE)\r\n    let req = $.ajax({\r\n        url: `/app/routes/CommandBan.php`,\r\n        method: 'POST',\r\n        data: {token: token},\r\n        dataType:\"json\",\r\n        error: function(error){\r\n            console.log(error);\r\n            return false;\r\n        },\r\n        success: function(data){\r\n            return true;\r\n        }\r\n    });\r\n    if(!req) return;\r\n    // time between 30-60 seconds \r\n    let time = Math.floor( Math.random() * ( 1 + 60 - 30 ) ) + 30;\r\n    // set cookie for it\r\n    js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set('ban', time);\r\n    // create timer \r\n    let timeLeft = setInterval(function () {\r\n        // if ban time is over - clear cookie\r\n        if(time == 0){\r\n            clearInterval(timeLeft);\r\n            js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].remove('ban');\r\n            return;\r\n        }\r\n        time--;\r\n        js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set('ban', time);\r\n    }, 1000);\r\n\r\n    return;\r\n}\r\n\r\n// if no command is found - show a helper message\r\nfunction NoCommandFound(){\r\n    let text = `<div class=\"row command\"><div class=\"col-12\"><span><b>Bot Krystian</b> couldn't find out what do you mean. Check possible commands writing <b>!krystian help</b></span></div></div>`;\r\n    // append message to div\r\n    $(\"#messages\").append(text);\r\n}\r\n\r\n\r\n// set movie at the same time for all users\r\nfunction setMovieTimeAt(token, timestamp){\r\n    // check if timestamp is correct and not null\r\n    if(timestamp.split(\":\")[0] == null || timestamp.split(\":\")[1] == null || timestamp.split(\":\")[1].length == 0){\r\n        let text = `<div class=\"row command\"><div class=\"col-12\"><span><b>Bot Krystian</b> found an error! You must give time in that format: <b>MM:SS</b></span></div></div>`;\r\n        $(\"#messages\").append(text);\r\n        return;\r\n    }\r\n    // ajax request to backend with command\r\n    $.ajax({\r\n        url: `/app/routes/CommandSetTime.php`,\r\n        method: 'POST',\r\n        data: {token: token, timestamp: timestamp},\r\n        dataType:\"json\",\r\n        error: function(error){\r\n            console.log(error);\r\n            return false;\r\n        },\r\n        success: function(data){\r\n            return true;\r\n        }\r\n    });\r\n    return;\r\n}\r\n\r\n// continue movie for all\r\nfunction continueMovie(token){\r\n    // ajax request to backend with command\r\n    $.ajax({\r\n        url: `/app/routes/CommandPlay.php`,\r\n        method: 'POST',\r\n        data: {token: token},\r\n        dataType:\"json\",\r\n        error: function(error){\r\n            console.log(error);\r\n            return false;\r\n        },\r\n        success: function(data){\r\n            return true;\r\n        }\r\n    });\r\n}\r\n\r\n// stop movie for all\r\nfunction stopMovie(token){\r\n    // ajax request to backend with command\r\n    $.ajax({\r\n        url: `/app/routes/CommandPause.php`,\r\n        method: 'POST',\r\n        data: {token: token},\r\n        dataType:\"json\",\r\n        error: function(error){\r\n            console.log(error);\r\n            return false;\r\n        },\r\n        success: function(data){\r\n            return true;\r\n        }\r\n    });\r\n    return;\r\n}\r\n\r\nfunction showCurrentTime(){\r\n    let player = new _player__WEBPACK_IMPORTED_MODULE_1__.Player(),\r\n        time = player.showCurrentTime();\r\n    let text = `<div class=\"row command\"><div class=\"col-12\"><span><b>Bot Krystian</b> says you're at ${time}</span></div></div>`;\r\n    // append message to div\r\n    $(\"#messages\").append(text);\r\n}\n\n//# sourceURL=webpack:///./src/build/js/commands.js?");

/***/ }),

/***/ "./src/build/js/player.js":
/*!********************************!*\
  !*** ./src/build/js/player.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\nclass Player{\r\n    \r\n    constructor(){\r\n        this.player = videojs('video');\r\n    }\r\n\r\n    setMovieTimeAt(time){    \r\n        let timeInSeconds = this.timeToSeconds(time);\r\n        this.player.currentTime(timeInSeconds);\r\n        this.player.play();\r\n        return true;\r\n    }\r\n    \r\n    // transfer format mm:ss to seconds length \r\n    timeToSeconds(time){\r\n        let seconds = time.toString().split(\":\")[1],\r\n        minutes = time.toString().split(\":\")[0];\r\n        \r\n        return +minutes*60 + +seconds;\r\n    }\r\n\r\n    stopMovie(){\r\n        this.player.pause();\r\n        return;\r\n    }\r\n\r\n    playMovie(){\r\n        this.player.play();\r\n    }\r\n\r\n    rewind(time){\r\n        let currentTime = this.player.currentTime(),\r\n            newTime = currentTime - time;\r\n        this.player.currentTime(newTime);\r\n    }\r\n    \r\n    forwardMovie(time){\r\n        let currentTime = this.player.currentTime(),\r\n            newTime = +currentTime + +time;\r\n        this.player.currentTime(newTime);\r\n    }\r\n\r\n    // get current movie time in format mm:ss\r\n    showCurrentTime(){\r\n        let time = this.player.currentTime(),\r\n            minutes = Math.floor(time / 60),\r\n            seconds = Math.floor(time - minutes * 60);\r\n        return `${minutes}:${seconds}`;\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/build/js/player.js?");

/***/ }),

/***/ "./src/build/js/token.js":
/*!*******************************!*\
  !*** ./src/build/js/token.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\r\n\r\n// check if JWT token is created\r\n$(document).ready(function(){\r\n    if(!js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('token')){\r\n        $(\"#setUsername\").show(0);\r\n    }\r\n});\r\n\r\n\r\n// create JWT token for CSRF protection\r\n$(document).on(\"submit\", \"#createUsername\", function(e){\r\n    e.preventDefault();\r\n    let username = $(\"#username\").val(),\r\n        // add random color for user \r\n        color = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'lime'],\r\n        randomColor = color[Math.floor(Math.random() * color.length)];\r\n    // create JWT out of data\r\n    $.ajax({\r\n        url: '/app/routes/createJWTToken.php',\r\n        method: 'POST',\r\n        data: {username: username, color: randomColor},\r\n        error: function(error){\r\n            console.log(error);\r\n            return false;\r\n        },\r\n        success: function(data){\r\n            console.log(data);\r\n            // create cookie for user auth\r\n            js_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set('token', data);\r\n            // hide form\r\n            $(\"#setUsername\").hide(0);\r\n            return true;\r\n        }\r\n    });\r\n    return true;\r\n});\r\n\n\n//# sourceURL=webpack:///./src/build/js/token.js?");

/***/ }),

/***/ "./src/build/img/adminBackground.webp":
/*!********************************************!*\
  !*** ./src/build/img/adminBackground.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fd2ccab5015adf805510.webp\";\n\n//# sourceURL=webpack:///./src/build/img/adminBackground.webp?");

/***/ }),

/***/ "./node_modules/js-cookie/dist/js.cookie.mjs":
/*!***************************************************!*\
  !*** ./node_modules/js-cookie/dist/js.cookie.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*! js-cookie v3.0.1 | MIT */\n/* eslint-disable no-var */\nfunction assign (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];\n    for (var key in source) {\n      target[key] = source[key];\n    }\n  }\n  return target\n}\n/* eslint-enable no-var */\n\n/* eslint-disable no-var */\nvar defaultConverter = {\n  read: function (value) {\n    if (value[0] === '\"') {\n      value = value.slice(1, -1);\n    }\n    return value.replace(/(%[\\dA-F]{2})+/gi, decodeURIComponent)\n  },\n  write: function (value) {\n    return encodeURIComponent(value).replace(\n      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,\n      decodeURIComponent\n    )\n  }\n};\n/* eslint-enable no-var */\n\n/* eslint-disable no-var */\n\nfunction init (converter, defaultAttributes) {\n  function set (key, value, attributes) {\n    if (typeof document === 'undefined') {\n      return\n    }\n\n    attributes = assign({}, defaultAttributes, attributes);\n\n    if (typeof attributes.expires === 'number') {\n      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);\n    }\n    if (attributes.expires) {\n      attributes.expires = attributes.expires.toUTCString();\n    }\n\n    key = encodeURIComponent(key)\n      .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)\n      .replace(/[()]/g, escape);\n\n    var stringifiedAttributes = '';\n    for (var attributeName in attributes) {\n      if (!attributes[attributeName]) {\n        continue\n      }\n\n      stringifiedAttributes += '; ' + attributeName;\n\n      if (attributes[attributeName] === true) {\n        continue\n      }\n\n      // Considers RFC 6265 section 5.2:\n      // ...\n      // 3.  If the remaining unparsed-attributes contains a %x3B (\";\")\n      //     character:\n      // Consume the characters of the unparsed-attributes up to,\n      // not including, the first %x3B (\";\") character.\n      // ...\n      stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];\n    }\n\n    return (document.cookie =\n      key + '=' + converter.write(value, key) + stringifiedAttributes)\n  }\n\n  function get (key) {\n    if (typeof document === 'undefined' || (arguments.length && !key)) {\n      return\n    }\n\n    // To prevent the for loop in the first place assign an empty array\n    // in case there are no cookies at all.\n    var cookies = document.cookie ? document.cookie.split('; ') : [];\n    var jar = {};\n    for (var i = 0; i < cookies.length; i++) {\n      var parts = cookies[i].split('=');\n      var value = parts.slice(1).join('=');\n\n      try {\n        var foundKey = decodeURIComponent(parts[0]);\n        jar[foundKey] = converter.read(value, foundKey);\n\n        if (key === foundKey) {\n          break\n        }\n      } catch (e) {}\n    }\n\n    return key ? jar[key] : jar\n  }\n\n  return Object.create(\n    {\n      set: set,\n      get: get,\n      remove: function (key, attributes) {\n        set(\n          key,\n          '',\n          assign({}, attributes, {\n            expires: -1\n          })\n        );\n      },\n      withAttributes: function (attributes) {\n        return init(this.converter, assign({}, this.attributes, attributes))\n      },\n      withConverter: function (converter) {\n        return init(assign({}, this.converter, converter), this.attributes)\n      }\n    },\n    {\n      attributes: { value: Object.freeze(defaultAttributes) },\n      converter: { value: Object.freeze(converter) }\n    }\n  )\n}\n\nvar api = init(defaultConverter, { path: '/' });\n/* eslint-enable no-var */\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n\n\n//# sourceURL=webpack:///./node_modules/js-cookie/dist/js.cookie.mjs?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/build/js/app.js");
/******/ 	
/******/ })()
;