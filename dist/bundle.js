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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    font-family: 'Courier New', Courier, monospace;\n}\n\nbody {\n    background-color: #000000;\n    color: aqua;\n}\n\nbutton {\n    background-color: aqua;\n    color: #000000;\n}\n\n.water-cell {\n    background-color: aqua;\n    color: #000000;\n}\n\n.miss-cell {\n    background-color: #000000;\n    color: red;\n}\n\n.ship-cell {\n    background-color: darkgray;\n    color: #000000;\n}\n\n.hit-cell {\n    background-color: darkred;\n    color: #FFFFFF;\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n// Gameboard module\n\n\n\n// CLASS/factory for gameboard\nclass Gameboard {\n    constructor() {\n      // Initialize game grids for player and enemy\n      this.playerGrid = this.gridObjects();\n      this.enemyGrid = this.gridObjects();\n  \n      // Place ships on the gameboard\n      this.ships = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.genFleet)();\n      this.placeShips();\n    }\n  \n    // Create game grid objects\n    gridObjects() {\n      // Initialize a 10x10 grid with empty cells\n      const grid = [];\n\n      for (let rowIndex = 0; rowIndex < 10; rowIndex++) {\n        const row = [];\n\n        for (let colIndex = 0; colIndex < 10; colIndex++) {\n          // Convert the x-axis (numbers) to letters for the y-axis\n          const yLabel = String.fromCharCode('A'.charCodeAt(0) + rowIndex);\n          // Create an object with coordinates in the format \"yNumber xLetter\"\n          const cell = { coordinates: `${yLabel}${colIndex + 1}`, content: null };\n\n          row.push(cell);\n        }\n\n        grid.push(row);\n      }\n      \n      return grid;\n    }\n  \n    // Place ships at coordinates\n    placeShips() {\n    // Preset coordinates for placing ships lengthwise along the top axis\n    const shipCoords = [\n        ['Carrier', 'A1'],\n        ['Battleship', 'B1'],\n        ['Cruiser', 'C1'],\n        ['Submarine', 'D1'],\n        ['Destroyer', 'E1']\n      ];\n  \n      shipCoords.forEach(([shipType, startCoords]) => {\n        const ship = this.findShipByType(shipType);\n  \n        if (ship) {\n          const rowIndex = startCoords.charCodeAt(0) - 'A'.charCodeAt(0);\n          const colIndex = parseInt(startCoords.slice(1), 10) - 1;\n  \n          // Set the ship coordinates\n          ship.coordinates = [];\n          for (let i = 0; i < ship.length; i++) {\n            const coord = `${String.fromCharCode(rowIndex + 'A'.charCodeAt(0))}${colIndex + i + 1}`;\n            ship.coordinates.push(coord);\n            this.playerGrid[rowIndex][colIndex + i].content = shipType\n          }\n        }\n      });\n    }\n  \n    // Method to receive an attack\n    receiveAttack(coordinates) {\n      console.log('Receiving attack:', coordinates);\n      // Extract row and column indices from the attack coordinates\n      const rowIndex = coordinates.charCodeAt(0) - 'A'.charCodeAt(0);\n      const colIndex = parseInt(coordinates.slice(1), 10) - 1;\n\n      // Check if there is a ship at the attacked coordinates\n      const cellContent = this.playerGrid[rowIndex][colIndex].content;\n\n      console.log('Cell content:', cellContent);\n\n      if (cellContent) {\n        // Ship is hit\n        const ship = this.findShipByType(cellContent);\n        ship.hit();\n        // Check if the ship is sunk\n        if (ship.isSunk()) {\n          // Report that the ship has been sunk\n          console.log(`${ship.type} sunk!`);\n        }\n        \n      } else {\n        // Record coordinates of missed shot\n        this.missedAttacks.push(coordinates);\n      }\n\n      // Check if all ships have been sunk\n      if (this.areAllShipsSunk()) {\n        // Report that all ships have been sunk\n        console.log('All ships have been sunk! Game over.');\n      }\n    }\n\n    // Helper function to find a ship by its type\n    findShipByType(shipType) {\n      const allShips = [\n        new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship('Carrier', 5),\n        new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship('Battleship', 4),\n        new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship('Cruiser', 3),\n        new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship('Submarine', 3),\n        new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship('Destroyer', 2)\n    ];\n\n    return allShips.find(ship => ship.type === shipType);\n  }\n\n    // Helper function to check if all ships have been sunk\n    areAllShipsSunk() {\n      const allShips = [\n        new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship('Carrier', 5),\n        new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship('Battleship', 4),\n        new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship('Cruiser', 3),\n        new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship('Submarine', 3),\n        new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship('Destroyer', 2)\n    ];\n\n    return allShips.every(ship => ship.isSunk());\n  }\n}\n  \n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadUI: () => (/* binding */ loadUI),\n/* harmony export */   renderBoard: () => (/* binding */ renderBoard)\n/* harmony export */ });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ \"./src/state.js\");\n// DOM Module\n\n\n\n\n// via gameTray div, render:\n\nfunction loadUI(gameState) {\n    console.log('Loading UI...');\n    console.log('Game state at load:', gameState);\n\n    const gameTray = document.getElementById('gameTray');\n    const initBtn = document.getElementById('initBtn');\n    initBtn.innerHTML = 'Reset'\n\n    // Scoreboard\n    const scoreBoard = document.createElement('div');\n    scoreBoard.innerHTML = `\n        <h3>Player 1: Hits - Misses - Remaining Ships</h3>\n        <h3>Computer: Hits - Misses - Remaining Ships</h3>\n        <h3>Turn: </h3>\n    `;\n\n    // Game action area with player and opponent boards\n    const action = document.createElement('div');\n    const playerBoard = document.createElement('div');\n    const playerTitle = document.createElement('h4');\n    const opponentBoard = document.createElement('div');\n    const oppTitle = document.createElement('h4');\n\n    // Set up player and opponent boards\n    playerBoard.id = 'playerBoard';\n    playerTitle.id = 'playerTitle';\n    opponentBoard.id = 'opponentBoard';\n    oppTitle.id = 'oppTitle';\n\n    playerTitle.innerHTML = 'Player'\n    oppTitle.innerHTML = 'Computer'\n\n    // Add boards to the action area\n    action.appendChild(oppTitle);\n    action.appendChild(opponentBoard);\n    action.appendChild(playerTitle);\n    action.appendChild(playerBoard);\n\n    // Add elements to the game tray\n    gameTray.appendChild(scoreBoard);\n    gameTray.appendChild(action);\n\n    // Initialize game state and boards\n    const playerGameboard = gameState.player1.gameboard;\n    const opponentGameboard = gameState.player2.gameboard;\n\n    // Render player and opponent boards\n    renderBoard(playerGameboard, playerBoard);\n    renderBoard(opponentGameboard, opponentBoard);\n}\n\n// Helper function to render the game board\nfunction renderBoard(gameboard, boardElement, gameState) {\n    boardElement.innerHTML = ''; // Clear existing content\n\n    // Create the grid\n    const grid = document.createElement('table');\n\n    // Add letters for the x-axis\n    const xAxisRow = document.createElement('tr');\n    xAxisRow.appendChild(document.createElement('th')); // Empty corner cell\n    for (let i = 0; i < 10; i++) {\n        const cell = document.createElement('th');\n        cell.textContent = String.fromCharCode('A'.charCodeAt(0) + i);\n        xAxisRow.appendChild(cell);\n    }\n    grid.appendChild(xAxisRow);\n\n    // Add rows and cells for the y-axis\n    for (let i = 0; i < 10; i++) {\n        const row = document.createElement('tr');\n        const yAxisCell = document.createElement('td');\n        yAxisCell.textContent = i + 1;\n        row.appendChild(yAxisCell);\n\n        for (let j = 0; j < 10; j++) {\n            const cell = document.createElement('td');\n            const coordinates = `${String.fromCharCode('A'.charCodeAt(0) + i)}${j + 1}`;\n            const content = gameboard.playerGrid[i][j].content;\n\n            // Set cell color based on content\n            if (content === null) {\n                cell.classList.add('water-cell');\n            } else if (content === 'hit') {\n                cell.classList.add('hit-cell');\n            } else if (content === 'miss') {\n                cell.classList.add('miss-cell');\n            } else {\n                cell.classList.add('ship-cell');\n            }\n\n            // Add event listener for clicking on the cell (for attack input)\n            cell.addEventListener('click', () => handleCellClick(coordinates, gameState));\n\n            row.appendChild(cell);\n        }\n\n        grid.appendChild(row);\n    }\n\n    // Add the grid to the board element\n    boardElement.appendChild(grid);\n}\n\n// Event handler for cell click (attack input)\nfunction handleCellClick(coordinates, gameState) {\n    console.log('Cell clicked:', coordinates);\n    console.log('Game state before takeUserInput:', gameState);\n    console.log('Current player:', gameState.currentPlayer);\n\n    // Calls takeUserInput to handle the attack in the game state\n    gameState.takeUserInput(coordinates);\n    \n    console.log('Game state after takeUserInput:', gameState);\n\n    // Update the UI with the latest game state\n    renderBoard(gameState.player1.gameboard, document.getElementById('playerBoard'));\n    renderBoard(gameState.player2.gameboard, document.getElementById('opponentBoard'));\n}\n\n\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/hello.js":
/*!**********************!*\
  !*** ./src/hello.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hello: () => (/* binding */ hello)\n/* harmony export */ });\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ \"./src/state.js\");\n// Hello world warmup module\n\n\n\nfunction hello(message) {\n    console.log(message);\n    //\n    const content = document.getElementById('content')\n\n    const gameTray = document.createElement('div')\n    gameTray.id = 'gameTray'\n    gameTray.innerHTML = '<h2>BATTLESHIP</h2>'\n\n    const initBtn = document.createElement('button')\n    initBtn.id = 'initBtn'\n    initBtn.innerHTML = 'Begin'\n    \n    content.appendChild(gameTray)\n\n    gameTray.appendChild(initBtn)\n\n    const gameState = new _state__WEBPACK_IMPORTED_MODULE_0__.GameState();\n\n    initBtn.addEventListener('click', () => {\n        gameState.initGame(gameState);\n        console.log('Game state at init:', gameState);\n    });\n\n    console.log('Waiting...');\n}\n\n//# sourceURL=webpack:///./src/hello.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _hello__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hello */ \"./src/hello.js\");\n// Primary module (index.js)\n\n\n\n\n// Call hello function, passing a message\n(0,_hello__WEBPACK_IMPORTED_MODULE_1__.hello)('Hello World!');\n\n// Game Design Overview:\n\n// hello() renders the initBtn\n// initBtn initialzes game via state.js\n// initGame creates game objects\n\n    // Ship module:\n    // CLASS/factory for ships\n    // Include length, number of times hit, and whether or not they are sunk\n    // Destroyer = 2, submarine = 3, cruiser = 3, battleship = 4, carrier = 5\n    // hit() increases number of hits on ship\n    // isSunk() calculates if ship is sunk based on length and number of hits received\n\n    // Gameboard module:\n    // CLASS/factory for gameboard\n    // Create two 10x10 game grids, one per player\n    // Assign ordered pairs to grid where x-axis = number and y-axis = letter\n    // Place ships at specific coordinates by calling the ship factory function\n    // receiveAttack() takes a pair of coordinates, \n        // determines if ship is hit \n        // Sends ‘hit’ function to ship and records coordinates of missed shot.\n    // Keep track of missed attacks so they can display in UI.\n    // Report whether or not all ships have been sunk.\n\n    // Player module:\n    // CLASS/factory for players\n    // Take turns playing the game by attacking the enemy Gameboard\n    // Player 1, human\n    // Player 2, computer\n        // Capable of making random plays\n        // Knows whether or not the move is legal\n\n    // Gamestate module:    \n    // Game loop\n        // Set up new game by creating players and gameboards\n        // TESTING: use predetermined coords to test, then build a placement/selection feature\n        // Methods to render the gameboards and to take user input for attacking. \n        // For attacks, let user click on coordinate in enemy Gameboard\n        // Step through the game turn by turn using ONLY methods from OTHER OBJECTS\n        // Game ends once one player’s ships have all been sunk\n\n// Game objects return, triggering UI rendering via dom.js\n\n    // DOM Module\n\n    // via gameTray div, render:\n\n    //  Scoreboard:\n        // Player names, total hits and misses, remaining ships and health\n        // Current turn number and player name\n        // Scoreboard/gameboards update according to game action\n\n    // 2x 11x11 grids:\n        // With numbers/letters on edge cells (top and left) to name the x/y axis\n        // Axis cells are white with dark blue letters/numbers ( black and dark red on opponent board)\n        // Water cells are auqa\n        // Ship cells are dark grey\n        // Hit ships are red\n        // miss/hit-water cells are black\n        // cell clicking for attack input\n\n        // Opponent board:\n        // shows no ships unless hit, then only the hit square shows\n\n        // Player board:\n        // shows own ship locations to player\n\n// Final specs:\n    // System that allows players to place their ships:\n        // type coordinates for each ship\n        // button to cycle placements\n        // drag and drop\n    //  Polish the intelligence of the computer player:\n        // Try adjacent slots after getting a ‘hit’\n    // Create 2 player option\n        // users take turns by passing the device back and forth\n        // Usa a ‘pass device’ screen so players don’t see each others boards\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n// Player module\n\n// ADD:\n// additional logic to validate coords are legal and havent been hit already\n// Computer tries the cells adjacent to a hit ship cell (unless isSunk)\n\n\n\n// CLASS/factory for players\nclass Player {\n    constructor(isHuman) {\n      this.isHuman = isHuman;\n      this.gameboard = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    }\n\n    // Method to make a move\n    makeMove(coordinates) {\n      console.log('Making move:', coordinates);\n      console.log('Before receiveAttack - Game state:', this.gameboard);\n\n      if (this.isHuman) {\n        // For human player, coordinates are provided as input\n        this.gameboard.receiveAttack(coordinates);\n      } else {\n        // For computer player, generate random legal coordinates\n        const randomCoords = this.genRandomCoords();\n        this.gameboard.receiveAttack(randomCoords);\n      }\n\n      console.log('After receiveAttack - Game state:', this.gameboard);\n\n    }\n\n    // Helper function for computer player to generate random legal coordinates\n    genRandomCoords() {\n      const alphabet = 'ABCDEFGHIJ';\n      const randomRow = alphabet[Math.floor(Math.random() * 10)];\n      const randomCol = Math.floor(Math.random() * 10) + 1;\n      const randomCoords = `${randomRow}${randomCol}`;\n\n      return randomCoords;\n    }\n  }\n\n\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship),\n/* harmony export */   fleet: () => (/* binding */ fleet),\n/* harmony export */   genFleet: () => (/* binding */ genFleet)\n/* harmony export */ });\n// Ship module\n\n// CLASS/factory for ships:\nclass Ship {\n    constructor(type, length) {\n      this.type = type;\n      this.length = length;\n      this.hits = 0;\n    }\n  \n    // hit() increases number of hits on ship:\n    hit() {\n      this.hits += 1;\n    }\n  \n    // isSunk() calculates if ship is sunk based on length and number of hits received:\n    isSunk() {\n      return this.hits === this.length;\n    }\n}\n\n// Define fleet\nconst fleet = [\n  { type: 'Carrier', length: 5 },\n  { type: 'Battleship', length: 4 },\n  { type: 'Cruiser', length: 3 },\n  { type: 'Submarine', length: 3 },\n  { type: 'Destroyer', length: 2 }\n];\n\n// Generate fleet based on types\nconst genFleet = () => {\n  return fleet.map(({ type, length }) => new Ship(type, length));\n};\n\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameState: () => (/* binding */ GameState),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n// Game state module\n\n\n\n\n\n\nclass GameState {\n  constructor() {\n    this.player1 = new _player__WEBPACK_IMPORTED_MODULE_0__.Player(true); // Human player\n    this.player2 = new _player__WEBPACK_IMPORTED_MODULE_0__.Player(false); // Computer player\n    this.currentPlayer = this.player1; // Start with player 1\n    this.turnNumber = 1; // Initialize turn number\n  }\n\n  initGame() {\n      console.log('Initializing...')\n    // Initialize ships for each player using genFleet from the Ship module\n    this.player1.gameboard.placeShips((0,_ship__WEBPACK_IMPORTED_MODULE_2__.genFleet)());\n    this.player2.gameboard.placeShips((0,_ship__WEBPACK_IMPORTED_MODULE_2__.genFleet)());\n\n    // Load the UI\n    (0,_dom__WEBPACK_IMPORTED_MODULE_3__.loadUI)(this);\n    console.log('initGame: ' + this);\n  }\n\n  // Method to take user input for attacking\n  takeUserInput(coordinates) {\n    console.log('Taking user input...');\n    // Delegate input handling to the current player\n    this.currentPlayer.takeUserInput(coordinates);\n\n    // Check if the game is over\n    if (this.checkGameOver()) {\n      // Handle game over logic\n      console.log('Game over!');\n    } else {\n      // Switch to the next player for the next turn\n      this.switchPlayer();\n      this.turnNumber++;\n    }\n  }\n\n  // Method to check if the game is over\n  checkGameOver() {\n    // Use the areAllShipsSunk function from the Gameboard module\n    return this.player1.gameboard.areAllShipsSunk() || this.player2.gameboard.areAllShipsSunk();\n  }\n\n  // Method to switch to the next player\n  switchPlayer() {\n    this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameState);\n\n//# sourceURL=webpack:///./src/state.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;