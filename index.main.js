/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=VT323&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::after,\n*::before {\n  font-family: 'VT323', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  box-sizing: border-box;\n  color: var(--font-colour);\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 16px;\n  position: relative;\n  height: 100%;\n  overflow: auto;\n}\n\nbody {\n  height: 100%;\n  background-color: var(--bg-colour);\n  \n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n}\n\nbutton {\n  height: 2rem;\n  width: 10rem;\n  font-size: 1.5rem;\n  background-color: white;\n  border: 2px solid black;\n  outline: none;\n  cursor: pointer;\n  transition: 0.25s;\n}\n\nbutton:hover {\n  transform: scale(1.05);\n}\n\nbutton:focus {\n  transform: scale(1.05);\n}\n\nbutton:disabled {\n  border: 2px solid grey;\n  color: grey;\n  transform: scale(0.9);\n  cursor: not-allowed;\n}\n\nbutton.error {\n  border: 2px solid red;\n  animation: 0.2s 4 tilt-shaking alternate;\n}\n\n@keyframes tilt-shaking {\n  0% { transform: rotate(0deg); }\n  25% { transform: rotate(5deg); }\n  50% { transform: rotate(0deg); }\n  75% { transform: rotate(-5deg); }\n  100% { transform: rotate(0deg); }\n}\n\n/* HEADER */\nheader {\n  height: 15vh;\n  font-size: 3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* MAIN */\nmain {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.buttons {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  gap: 5%;\n}\n\n.board {\n  height: 75%;\n  aspect-ratio: 1 / 1;\n  /* width: 75%; */\n  border: 2px solid black;\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  grid-template-rows: repeat(8, 1fr);\n}\n\n.board .space {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.space img {\n  height: clamp(1rem, 70%, 3.5rem);\n  width: clamp(1rem, 70%, 3.5rem);;\n}\n\n.space .move-number {\n  color: royalblue;\n  font-size: 2rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding-left: 2px;\n}\n\n.board div:nth-child(-n + 8):nth-child(even),\n.board div:nth-child(n + 8):nth-child(-n + 16):nth-child(odd),\n.board div:nth-child(n + 17):nth-child(-n + 24):nth-child(even),\n.board div:nth-child(n + 25):nth-child(-n + 32):nth-child(odd),\n.board div:nth-child(n + 33):nth-child(-n + 40):nth-child(even),\n.board div:nth-child(n + 41):nth-child(-n + 48):nth-child(odd),\n.board div:nth-child(n + 49):nth-child(-n + 56):nth-child(even),\n.board div:nth-child(n + 57):nth-child(-n + 64):nth-child(odd)  {\n  background-color: black;\n}\n\n/* FOOTER */\nfooter {\n  height: 10vh;\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;;;EAGE,4JAA4J;EAC5J,sBAAsB;EACtB,yBAAyB;EACzB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,kCAAkC;;EAElC,aAAa;EACb,iBAAiB;EACjB,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,uBAAuB;EACvB,uBAAuB;EACvB,aAAa;EACb,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,wCAAwC;AAC1C;;AAEA;EACE,KAAK,uBAAuB,EAAE;EAC9B,MAAM,uBAAuB,EAAE;EAC/B,MAAM,uBAAuB,EAAE;EAC/B,MAAM,wBAAwB,EAAE;EAChC,OAAO,uBAAuB,EAAE;AAClC;;AAEA,WAAW;AACX;EACE,YAAY;EACZ,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA,SAAS;AACT;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,OAAO;AACT;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,aAAa;EACb,qCAAqC;EACrC,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,gCAAgC;EAChC,+BAA+B;AACjC;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,iBAAiB;AACnB;;AAEA;;;;;;;;EAQE,uBAAuB;AACzB;;AAEA,WAAW;AACX;EACE,YAAY;AACd","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');\n\n*,\n*::after,\n*::before {\n  font-family: 'VT323', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  box-sizing: border-box;\n  color: var(--font-colour);\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 16px;\n  position: relative;\n  height: 100%;\n  overflow: auto;\n}\n\nbody {\n  height: 100%;\n  background-color: var(--bg-colour);\n  \n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n}\n\nbutton {\n  height: 2rem;\n  width: 10rem;\n  font-size: 1.5rem;\n  background-color: white;\n  border: 2px solid black;\n  outline: none;\n  cursor: pointer;\n  transition: 0.25s;\n}\n\nbutton:hover {\n  transform: scale(1.05);\n}\n\nbutton:focus {\n  transform: scale(1.05);\n}\n\nbutton:disabled {\n  border: 2px solid grey;\n  color: grey;\n  transform: scale(0.9);\n  cursor: not-allowed;\n}\n\nbutton.error {\n  border: 2px solid red;\n  animation: 0.2s 4 tilt-shaking alternate;\n}\n\n@keyframes tilt-shaking {\n  0% { transform: rotate(0deg); }\n  25% { transform: rotate(5deg); }\n  50% { transform: rotate(0deg); }\n  75% { transform: rotate(-5deg); }\n  100% { transform: rotate(0deg); }\n}\n\n/* HEADER */\nheader {\n  height: 15vh;\n  font-size: 3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* MAIN */\nmain {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.buttons {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  gap: 5%;\n}\n\n.board {\n  height: 75%;\n  aspect-ratio: 1 / 1;\n  /* width: 75%; */\n  border: 2px solid black;\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  grid-template-rows: repeat(8, 1fr);\n}\n\n.board .space {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.space img {\n  height: clamp(1rem, 70%, 3.5rem);\n  width: clamp(1rem, 70%, 3.5rem);;\n}\n\n.space .move-number {\n  color: royalblue;\n  font-size: 2rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding-left: 2px;\n}\n\n.board div:nth-child(-n + 8):nth-child(even),\n.board div:nth-child(n + 8):nth-child(-n + 16):nth-child(odd),\n.board div:nth-child(n + 17):nth-child(-n + 24):nth-child(even),\n.board div:nth-child(n + 25):nth-child(-n + 32):nth-child(odd),\n.board div:nth-child(n + 33):nth-child(-n + 40):nth-child(even),\n.board div:nth-child(n + 41):nth-child(-n + 48):nth-child(odd),\n.board div:nth-child(n + 49):nth-child(-n + 56):nth-child(even),\n.board div:nth-child(n + 57):nth-child(-n + 64):nth-child(odd)  {\n  background-color: black;\n}\n\n/* FOOTER */\nfooter {\n  height: 10vh;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/board.js":
/*!******************************!*\
  !*** ./src/modules/board.js ***!
  \******************************/
/***/ (() => {

function createBoard() {
  const board = document.querySelector('.board');
  for (let y = 0; y < 8; y += 1) {
    for (let x = 0; x < 8; x += 1) {
      const space = `<div class="space" data-x="${x}" data-y="${y}"></div>`;
      board.insertAdjacentHTML('beforeend', space);
    }
  }
}

createBoard();


/***/ }),

/***/ "./src/modules/buttons.js":
/*!********************************!*\
  !*** ./src/modules/buttons.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activateButtons": () => (/* binding */ activateButtons),
/* harmony export */   "toggleError": () => (/* binding */ toggleError)
/* harmony export */ });
/* harmony import */ var _assets_strategy_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/strategy.png */ "./src/assets/strategy.png");
/* harmony import */ var _assets_goal_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/goal.png */ "./src/assets/goal.png");
// https://www.flaticon.com/free-icon/strategy_1322213?term=chess-knight&related_id=1322213#
// https://www.flaticon.com/free-icon/goal_1694364?term=goal&page=1&position=3&page=1&position=3&related_id=1694364&origin=tag



function activateButtons(btnToActivate) {
  const btns = document.querySelectorAll('button');
  btnToActivate.classList.toggle('active-btn');
  if (btnToActivate.classList.contains('active-btn')) {
    btns.forEach((btn) => {
      if (!btn.classList.contains('active-btn')) {
        // eslint-disable-next-line no-param-reassign
        btn.disabled = true;
      }
    });
  } else {
    btns.forEach((btn) => {
      if (!btn.classList.contains('active-btn')) {
        // eslint-disable-next-line no-param-reassign
        btn.disabled = false;
      }
    });
  }
}

function placeKnight(space) {
  if (space.classList.contains('goal-placed')) {
    // eslint-disable-next-line no-alert
    alert('Position already occupied!');
    return;
  }
  const knightBtn = document.querySelector('.knight-btn');
  const spaceWithKnight = document.querySelector('.knight-placed');
  if (spaceWithKnight) {
    spaceWithKnight.children[0].remove();
    spaceWithKnight.classList.toggle('knight-placed');
  }
  const knightImg = document.createElement('img');
  knightImg.src = _assets_strategy_png__WEBPACK_IMPORTED_MODULE_0__;
  space.appendChild(knightImg);
  space.classList.toggle('knight-placed');
  if (knightBtn.classList.contains('error')) knightBtn.classList.toggle('error');
}

function placeGoal(space) {
  if (space.classList.contains('knight-placed')) {
    // eslint-disable-next-line no-alert
    alert('Position already occupied!');
    return;
  }
  const goalBtn = document.querySelector('.goal-btn');
  const spaceWithGoal = document.querySelector('.goal-placed');
  if (spaceWithGoal) {
    spaceWithGoal.children[0].remove();
    spaceWithGoal.classList.toggle('goal-placed');
  }
  const goalImg = document.createElement('img');
  goalImg.src = _assets_goal_png__WEBPACK_IMPORTED_MODULE_1__;
  space.appendChild(goalImg);
  space.classList.toggle('goal-placed');
  if (goalBtn.classList.contains('error')) goalBtn.classList.toggle('error');
}

function resetBoard() {
  const spaceWithKnight = document.querySelector('.knight-placed');
  const spaceWithGoal = document.querySelector('.goal-placed');
  const moveNumberElements = document.querySelectorAll('.move-number');
  if (spaceWithKnight) {
    spaceWithKnight.children[0].remove();
    spaceWithKnight.classList.toggle('knight-placed');
  }
  if (spaceWithGoal) {
    spaceWithGoal.children[0].remove();
    spaceWithGoal.classList.toggle('goal-placed');
  }
  if (moveNumberElements) {
    moveNumberElements.forEach((element) => {
      element.remove();
    });
  }
}

function toggleError() {
  const knightBtn = document.querySelector('.knight-btn');
  const goalBtn = document.querySelector('.goal-btn');
  const knightSpace = document.querySelector('.knight-placed');
  const goalSpace = document.querySelector('.goal-placed');
  if (!knightSpace) {
    if (knightBtn.classList.contains('error')) knightBtn.classList.toggle('error');
    setTimeout(() => knightBtn.classList.toggle('error'), 100);
  }
  if (!goalSpace) {
    if (goalBtn.classList.contains('error')) goalBtn.classList.toggle('error');
    setTimeout(() => goalBtn.classList.toggle('error'), 100);
  }
}

const buttonsContainer = document.querySelector('.buttons');
const board = document.querySelector('.board');
const resetBtn = document.querySelector('.reset-btn');

buttonsContainer.addEventListener('click', (e) => {
  let btn = e.target.closest('.knight-btn');
  if (!btn) btn = e.target.closest('.goal-btn');
  if (!btn) return;
  activateButtons(btn);
});

board.addEventListener('click', (e) => {
  const space = e.target.closest('.space');
  if (!space) return;
  const activeBtn = document.querySelector('.active-btn');
  if (!activeBtn) return;
  if (activeBtn.classList.contains('knight-btn')) {
    placeKnight(space);
  } else {
    placeGoal(space);
  }
  activateButtons(activeBtn);
});

resetBtn.addEventListener('click', () => {
  if (resetBtn.classList.contains('active-btn')) activateButtons(resetBtn);
  resetBoard();
});




/***/ }),

/***/ "./src/modules/node.js":
/*!*****************************!*\
  !*** ./src/modules/node.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Node": () => (/* binding */ Node),
/* harmony export */   "createGraph": () => (/* binding */ createGraph),
/* harmony export */   "createNodeArray": () => (/* binding */ createNodeArray),
/* harmony export */   "knightMoves": () => (/* binding */ knightMoves)
/* harmony export */ });
// Each node represents a position on a chess board. x and y
// are the coordinates of each chess position,
// where 0,0  is the top left square.
// tl, tr, rt, rb, br, bl, lb, and lt represent the squares/nodes that a knight can move from
// position x, y
class Node {
  constructor(x, y, node) {
    this.x = x;
    this.y = y;
    this.dom = node;
    this.tl = null;
    this.tr = null;
    this.rt = null;
    this.rb = null;
    this.br = null;
    this.bl = null;
    this.lb = null;
    this.lt = null;
  }

  setDOM(node) {
    this.dom = node;
  }

  setTL(node) {
    this.tl = node;
  }

  setTR(node) {
    this.tr = node;
  }

  setRT(node) {
    this.rt = node;
  }

  setRB(node) {
    this.rb = node;
  }

  setBR(node) {
    this.br = node;
  }

  setBL(node) {
    this.bl = node;
  }

  setLB(node) {
    this.lb = node;
  }

  setLT(node) {
    this.lt = node;
  }
}

// Creates a 2d Array of nodes that represent a chess board.
// Each node represents a space on a chess board, that points
// to other spaces according to the movements of a knight piece
function createNodeArray() {
  const nodeArray = [];
  for (let y = 0; y < 8; y += 1) {
    const tempArray = [];
    for (let x = 0; x < 8; x += 1) {
      const space = document.querySelector(`[data-x='${x}'][data-y='${y}']`);
      const tempNode = new Node(x, y, space);
      tempArray.push(tempNode);
    }
    nodeArray.push(tempArray);
  }
  return nodeArray;
}

// Assigns each node/space pointers to other nodes/spaces
// if it adheres to the movements of a knight piece
function createGraph(nodeArray) {
  for (let y = 0; y < 8; y += 1) {
    for (let x = 0; x < 8; x += 1) {
      const temp = nodeArray[y][x];
      if ((x - 1) >= 0 && (y - 2) >= 0) temp.setTL(nodeArray[y - 2][x - 1]);
      if ((x + 1) < 8 && (y - 2) >= 0) temp.setTR(nodeArray[y - 2][x + 1]);
      if ((x + 2) < 8 && (y - 1) >= 0) temp.setRT(nodeArray[y - 1][x + 2]);
      if ((x + 2) < 8 && (y + 1) < 8) temp.setRB(nodeArray[y + 1][x + 2]);
      if ((x + 1) < 8 && (y + 2) < 8) temp.setBR(nodeArray[y + 2][x + 1]);
      if ((x - 1) >= 0 && (y + 2) < 8) temp.setBL(nodeArray[y + 2][x - 1]);
      if ((x - 2) >= 0 && (y + 1) < 8) temp.setLB(nodeArray[y + 1][x - 2]);
      if ((x - 2) >= 0 && (y - 1) >= 0) temp.setLT(nodeArray[y - 1][x - 2]);
    }
  }
}

// This function calculates the shortest path from the start position (signified by node),
// and the end position (signified by endPosition array).
// This utilizes a breadth first search algorithm
// (a depth first algorithm would cause an infinite loop of recursive calls).
function knightMoves(node, endPosition, queue = [], traversalPath = []) {
  if (node.x === endPosition[0] && node.y === endPosition[1]) {
    traversalPath.push(node);
    return traversalPath;
  }
  if (queue.length < 1) {
    queue.push(node);
  }
  traversalPath.push(queue[0]);
  if (node.tl !== null) queue.push(node.tl);
  if (node.tr !== null) queue.push(node.tr);
  if (node.rt !== null) queue.push(node.rt);
  if (node.rb !== null) queue.push(node.rb);
  if (node.br !== null) queue.push(node.br);
  if (node.bl !== null) queue.push(node.bl);
  if (node.lb !== null) queue.push(node.lb);
  if (node.lt !== null) queue.push(node.lt);
  const found = queue.find((item) => (item.x === endPosition[0] && item.y === endPosition[1]));
  // If queue contains end position, return an array of
  // [node with position before end position, endPosition node]
  // BASE CASE! This will break the recursion
  if (found) {
    return [queue[0]].concat([found]);
  }
  const removedNode = queue.shift();
  const shortestPath = knightMoves(queue[0], endPosition, queue, traversalPath);
  const removedNodeValues = Object.values(removedNode);
  if (removedNodeValues.includes(shortestPath[0])) {
    return [removedNode].concat(shortestPath);
  }
  return shortestPath;
}




/***/ }),

/***/ "./src/assets/goal.png":
/*!*****************************!*\
  !*** ./src/assets/goal.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "38300215940be4d9bef8.png";

/***/ }),

/***/ "./src/assets/strategy.png":
/*!*********************************!*\
  !*** ./src/assets/strategy.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5d5a5d575ddcba8e3af0.png";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _modules_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/board */ "./src/modules/board.js");
/* harmony import */ var _modules_board__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_board__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/buttons */ "./src/modules/buttons.js");
/* harmony import */ var _modules_node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/node */ "./src/modules/node.js");





function checkKnightAndGoal() {
  const knightSpace = document.querySelector('.knight-placed');
  const goalSpace = document.querySelector('.goal-placed');
  if (knightSpace && goalSpace) {
    return [[knightSpace.dataset.x, knightSpace.dataset.y],
      [goalSpace.dataset.x, goalSpace.dataset.y]];
  }
  return false;
}

function addMoveNumbersToBoard(shortestPath) {
  let move = 1;
  shortestPath.forEach((space) => {
    const moveNumberElement = `<p class="move-number" data-move="${move}">${move}</p>`;
    space.dom.insertAdjacentHTML('beforeend', moveNumberElement);
    move += 1;
  });
}

function travail(nodeArray, positions) {
  const startingNode = nodeArray[positions[0][1]][positions[0][0]];
  const endPosition = [Number(positions[1][0]), Number(positions[1][1])];
  const shortestPath = (0,_modules_node__WEBPACK_IMPORTED_MODULE_3__.knightMoves)(startingNode, endPosition);
  // Remove starting position
  shortestPath.shift();
  addMoveNumbersToBoard(shortestPath);
}

const travailBtn = document.querySelector('.travail-btn');
const nodeArray = (0,_modules_node__WEBPACK_IMPORTED_MODULE_3__.createNodeArray)();
(0,_modules_node__WEBPACK_IMPORTED_MODULE_3__.createGraph)(nodeArray);

travailBtn.addEventListener('click', () => {
  const positions = checkKnightAndGoal();
  if (positions) {
    travail(nodeArray, positions);
    (0,_modules_buttons__WEBPACK_IMPORTED_MODULE_2__.activateButtons)(document.querySelector('.reset-btn'));
  } else (0,_modules_buttons__WEBPACK_IMPORTED_MODULE_2__.toggleError)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNIO0FBQ3dDO0FBQ1U7O0FBRTNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsS0FBSyxJQUFJLEtBQUs7QUFDakY7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMERBQVc7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsOERBQWU7QUFDakMsMERBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFlO0FBQ25CLElBQUksS0FBSyw2REFBVztBQUNwQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvbW9kdWxlcy9ib2FyZC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL21vZHVsZXMvYnV0dG9ucy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL21vZHVsZXMvbm9kZS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VlQzMjMmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgZm9udC1mYW1pbHk6ICdWVDMyMycsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG91cik7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG91cik7XFxuICBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAxMHJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbmJ1dHRvbjpmb2N1cyB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG5idXR0b246ZGlzYWJsZWQge1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gIGNvbG9yOiBncmV5O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuYnV0dG9uLmVycm9yIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gIGFuaW1hdGlvbjogMC4ycyA0IHRpbHQtc2hha2luZyBhbHRlcm5hdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgdGlsdC1zaGFraW5nIHtcXG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gIDI1JSB7IHRyYW5zZm9ybTogcm90YXRlKDVkZWcpOyB9XFxuICA1MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgNzUlIHsgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpOyB9XFxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG59XFxuXFxuLyogSEVBREVSICovXFxuaGVhZGVyIHtcXG4gIGhlaWdodDogMTV2aDtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIE1BSU4gKi9cXG5tYWluIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNSU7XFxufVxcblxcbi5ib2FyZCB7XFxuICBoZWlnaHQ6IDc1JTtcXG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICAvKiB3aWR0aDogNzUlOyAqL1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDFmcik7XFxufVxcblxcbi5ib2FyZCAuc3BhY2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnNwYWNlIGltZyB7XFxuICBoZWlnaHQ6IGNsYW1wKDFyZW0sIDcwJSwgMy41cmVtKTtcXG4gIHdpZHRoOiBjbGFtcCgxcmVtLCA3MCUsIDMuNXJlbSk7O1xcbn1cXG5cXG4uc3BhY2UgLm1vdmUtbnVtYmVyIHtcXG4gIGNvbG9yOiByb3lhbGJsdWU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcGFkZGluZy1sZWZ0OiAycHg7XFxufVxcblxcbi5ib2FyZCBkaXY6bnRoLWNoaWxkKC1uICsgOCk6bnRoLWNoaWxkKGV2ZW4pLFxcbi5ib2FyZCBkaXY6bnRoLWNoaWxkKG4gKyA4KTpudGgtY2hpbGQoLW4gKyAxNik6bnRoLWNoaWxkKG9kZCksXFxuLmJvYXJkIGRpdjpudGgtY2hpbGQobiArIDE3KTpudGgtY2hpbGQoLW4gKyAyNCk6bnRoLWNoaWxkKGV2ZW4pLFxcbi5ib2FyZCBkaXY6bnRoLWNoaWxkKG4gKyAyNSk6bnRoLWNoaWxkKC1uICsgMzIpOm50aC1jaGlsZChvZGQpLFxcbi5ib2FyZCBkaXY6bnRoLWNoaWxkKG4gKyAzMyk6bnRoLWNoaWxkKC1uICsgNDApOm50aC1jaGlsZChldmVuKSxcXG4uYm9hcmQgZGl2Om50aC1jaGlsZChuICsgNDEpOm50aC1jaGlsZCgtbiArIDQ4KTpudGgtY2hpbGQob2RkKSxcXG4uYm9hcmQgZGl2Om50aC1jaGlsZChuICsgNDkpOm50aC1jaGlsZCgtbiArIDU2KTpudGgtY2hpbGQoZXZlbiksXFxuLmJvYXJkIGRpdjpudGgtY2hpbGQobiArIDU3KTpudGgtY2hpbGQoLW4gKyA2NCk6bnRoLWNoaWxkKG9kZCkgIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4vKiBGT09URVIgKi9cXG5mb290ZXIge1xcbiAgaGVpZ2h0OiAxMHZoO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7O0VBR0UsNEpBQTRKO0VBQzVKLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0NBQWtDOztFQUVsQyxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsS0FBSyx1QkFBdUIsRUFBRTtFQUM5QixNQUFNLHVCQUF1QixFQUFFO0VBQy9CLE1BQU0sdUJBQXVCLEVBQUU7RUFDL0IsTUFBTSx3QkFBd0IsRUFBRTtFQUNoQyxPQUFPLHVCQUF1QixFQUFFO0FBQ2xDOztBQUVBLFdBQVc7QUFDWDtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUEsU0FBUztBQUNUO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLE9BQU87QUFDVDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQywrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLGlCQUFpQjtBQUNuQjs7QUFFQTs7Ozs7Ozs7RUFRRSx1QkFBdUI7QUFDekI7O0FBRUEsV0FBVztBQUNYO0VBQ0UsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVZUMzIzJmRpc3BsYXk9c3dhcCcpO1xcblxcbiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIGZvbnQtZmFtaWx5OiAnVlQzMjMnLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvdXIpO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvdXIpO1xcbiAgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmJ1dHRvbiB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMTByZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG5idXR0b246Zm9jdXMge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuYnV0dG9uOmRpc2FibGVkIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICBjb2xvcjogZ3JleTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbmJ1dHRvbi5lcnJvciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICBhbmltYXRpb246IDAuMnMgNCB0aWx0LXNoYWtpbmcgYWx0ZXJuYXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHRpbHQtc2hha2luZyB7XFxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAyNSUgeyB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTsgfVxcbiAgNTAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gIDc1JSB7IHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTsgfVxcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxufVxcblxcbi8qIEhFQURFUiAqL1xcbmhlYWRlciB7XFxuICBoZWlnaHQ6IDE1dmg7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBNQUlOICovXFxubWFpbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmJ1dHRvbnMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDUlO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgaGVpZ2h0OiA3NSU7XFxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgLyogd2lkdGg6IDc1JTsgKi9cXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCAxZnIpO1xcbn1cXG5cXG4uYm9hcmQgLnNwYWNlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zcGFjZSBpbWcge1xcbiAgaGVpZ2h0OiBjbGFtcCgxcmVtLCA3MCUsIDMuNXJlbSk7XFxuICB3aWR0aDogY2xhbXAoMXJlbSwgNzAlLCAzLjVyZW0pOztcXG59XFxuXFxuLnNwYWNlIC5tb3ZlLW51bWJlciB7XFxuICBjb2xvcjogcm95YWxibHVlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHBhZGRpbmctbGVmdDogMnB4O1xcbn1cXG5cXG4uYm9hcmQgZGl2Om50aC1jaGlsZCgtbiArIDgpOm50aC1jaGlsZChldmVuKSxcXG4uYm9hcmQgZGl2Om50aC1jaGlsZChuICsgOCk6bnRoLWNoaWxkKC1uICsgMTYpOm50aC1jaGlsZChvZGQpLFxcbi5ib2FyZCBkaXY6bnRoLWNoaWxkKG4gKyAxNyk6bnRoLWNoaWxkKC1uICsgMjQpOm50aC1jaGlsZChldmVuKSxcXG4uYm9hcmQgZGl2Om50aC1jaGlsZChuICsgMjUpOm50aC1jaGlsZCgtbiArIDMyKTpudGgtY2hpbGQob2RkKSxcXG4uYm9hcmQgZGl2Om50aC1jaGlsZChuICsgMzMpOm50aC1jaGlsZCgtbiArIDQwKTpudGgtY2hpbGQoZXZlbiksXFxuLmJvYXJkIGRpdjpudGgtY2hpbGQobiArIDQxKTpudGgtY2hpbGQoLW4gKyA0OCk6bnRoLWNoaWxkKG9kZCksXFxuLmJvYXJkIGRpdjpudGgtY2hpbGQobiArIDQ5KTpudGgtY2hpbGQoLW4gKyA1Nik6bnRoLWNoaWxkKGV2ZW4pLFxcbi5ib2FyZCBkaXY6bnRoLWNoaWxkKG4gKyA1Nyk6bnRoLWNoaWxkKC1uICsgNjQpOm50aC1jaGlsZChvZGQpICB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLyogRk9PVEVSICovXFxuZm9vdGVyIHtcXG4gIGhlaWdodDogMTB2aDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjcmVhdGVCb2FyZCgpIHtcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKTtcbiAgZm9yIChsZXQgeSA9IDA7IHkgPCA4OyB5ICs9IDEpIHtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDg7IHggKz0gMSkge1xuICAgICAgY29uc3Qgc3BhY2UgPSBgPGRpdiBjbGFzcz1cInNwYWNlXCIgZGF0YS14PVwiJHt4fVwiIGRhdGEteT1cIiR7eX1cIj48L2Rpdj5gO1xuICAgICAgYm9hcmQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBzcGFjZSk7XG4gICAgfVxuICB9XG59XG5cbmNyZWF0ZUJvYXJkKCk7XG4iLCIvLyBodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29uL3N0cmF0ZWd5XzEzMjIyMTM/dGVybT1jaGVzcy1rbmlnaHQmcmVsYXRlZF9pZD0xMzIyMjEzI1xuLy8gaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbi9nb2FsXzE2OTQzNjQ/dGVybT1nb2FsJnBhZ2U9MSZwb3NpdGlvbj0zJnBhZ2U9MSZwb3NpdGlvbj0zJnJlbGF0ZWRfaWQ9MTY5NDM2NCZvcmlnaW49dGFnXG5pbXBvcnQga25pZ2h0IGZyb20gJy4uL2Fzc2V0cy9zdHJhdGVneS5wbmcnO1xuaW1wb3J0IGdvYWwgZnJvbSAnLi4vYXNzZXRzL2dvYWwucG5nJztcblxuZnVuY3Rpb24gYWN0aXZhdGVCdXR0b25zKGJ0blRvQWN0aXZhdGUpIHtcbiAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuICBidG5Ub0FjdGl2YXRlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZS1idG4nKTtcbiAgaWYgKGJ0blRvQWN0aXZhdGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtYnRuJykpIHtcbiAgICBidG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgaWYgKCFidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtYnRuJykpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIGJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgYnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGlmICghYnRuLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLWJ0bicpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBidG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwbGFjZUtuaWdodChzcGFjZSkge1xuICBpZiAoc3BhY2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdnb2FsLXBsYWNlZCcpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XG4gICAgYWxlcnQoJ1Bvc2l0aW9uIGFscmVhZHkgb2NjdXBpZWQhJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGtuaWdodEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rbmlnaHQtYnRuJyk7XG4gIGNvbnN0IHNwYWNlV2l0aEtuaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rbmlnaHQtcGxhY2VkJyk7XG4gIGlmIChzcGFjZVdpdGhLbmlnaHQpIHtcbiAgICBzcGFjZVdpdGhLbmlnaHQuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XG4gICAgc3BhY2VXaXRoS25pZ2h0LmNsYXNzTGlzdC50b2dnbGUoJ2tuaWdodC1wbGFjZWQnKTtcbiAgfVxuICBjb25zdCBrbmlnaHRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAga25pZ2h0SW1nLnNyYyA9IGtuaWdodDtcbiAgc3BhY2UuYXBwZW5kQ2hpbGQoa25pZ2h0SW1nKTtcbiAgc3BhY2UuY2xhc3NMaXN0LnRvZ2dsZSgna25pZ2h0LXBsYWNlZCcpO1xuICBpZiAoa25pZ2h0QnRuLmNsYXNzTGlzdC5jb250YWlucygnZXJyb3InKSkga25pZ2h0QnRuLmNsYXNzTGlzdC50b2dnbGUoJ2Vycm9yJyk7XG59XG5cbmZ1bmN0aW9uIHBsYWNlR29hbChzcGFjZSkge1xuICBpZiAoc3BhY2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdrbmlnaHQtcGxhY2VkJykpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcbiAgICBhbGVydCgnUG9zaXRpb24gYWxyZWFkeSBvY2N1cGllZCEnKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZ29hbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nb2FsLWJ0bicpO1xuICBjb25zdCBzcGFjZVdpdGhHb2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvYWwtcGxhY2VkJyk7XG4gIGlmIChzcGFjZVdpdGhHb2FsKSB7XG4gICAgc3BhY2VXaXRoR29hbC5jaGlsZHJlblswXS5yZW1vdmUoKTtcbiAgICBzcGFjZVdpdGhHb2FsLmNsYXNzTGlzdC50b2dnbGUoJ2dvYWwtcGxhY2VkJyk7XG4gIH1cbiAgY29uc3QgZ29hbEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBnb2FsSW1nLnNyYyA9IGdvYWw7XG4gIHNwYWNlLmFwcGVuZENoaWxkKGdvYWxJbWcpO1xuICBzcGFjZS5jbGFzc0xpc3QudG9nZ2xlKCdnb2FsLXBsYWNlZCcpO1xuICBpZiAoZ29hbEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2Vycm9yJykpIGdvYWxCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnZXJyb3InKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRCb2FyZCgpIHtcbiAgY29uc3Qgc3BhY2VXaXRoS25pZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtuaWdodC1wbGFjZWQnKTtcbiAgY29uc3Qgc3BhY2VXaXRoR29hbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nb2FsLXBsYWNlZCcpO1xuICBjb25zdCBtb3ZlTnVtYmVyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW92ZS1udW1iZXInKTtcbiAgaWYgKHNwYWNlV2l0aEtuaWdodCkge1xuICAgIHNwYWNlV2l0aEtuaWdodC5jaGlsZHJlblswXS5yZW1vdmUoKTtcbiAgICBzcGFjZVdpdGhLbmlnaHQuY2xhc3NMaXN0LnRvZ2dsZSgna25pZ2h0LXBsYWNlZCcpO1xuICB9XG4gIGlmIChzcGFjZVdpdGhHb2FsKSB7XG4gICAgc3BhY2VXaXRoR29hbC5jaGlsZHJlblswXS5yZW1vdmUoKTtcbiAgICBzcGFjZVdpdGhHb2FsLmNsYXNzTGlzdC50b2dnbGUoJ2dvYWwtcGxhY2VkJyk7XG4gIH1cbiAgaWYgKG1vdmVOdW1iZXJFbGVtZW50cykge1xuICAgIG1vdmVOdW1iZXJFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUVycm9yKCkge1xuICBjb25zdCBrbmlnaHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcua25pZ2h0LWJ0bicpO1xuICBjb25zdCBnb2FsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvYWwtYnRuJyk7XG4gIGNvbnN0IGtuaWdodFNwYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtuaWdodC1wbGFjZWQnKTtcbiAgY29uc3QgZ29hbFNwYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvYWwtcGxhY2VkJyk7XG4gIGlmICgha25pZ2h0U3BhY2UpIHtcbiAgICBpZiAoa25pZ2h0QnRuLmNsYXNzTGlzdC5jb250YWlucygnZXJyb3InKSkga25pZ2h0QnRuLmNsYXNzTGlzdC50b2dnbGUoJ2Vycm9yJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBrbmlnaHRCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnZXJyb3InKSwgMTAwKTtcbiAgfVxuICBpZiAoIWdvYWxTcGFjZSkge1xuICAgIGlmIChnb2FsQnRuLmNsYXNzTGlzdC5jb250YWlucygnZXJyb3InKSkgZ29hbEJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdlcnJvcicpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gZ29hbEJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdlcnJvcicpLCAxMDApO1xuICB9XG59XG5cbmNvbnN0IGJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9ucycpO1xuY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKTtcbmNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0LWJ0bicpO1xuXG5idXR0b25zQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgbGV0IGJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5rbmlnaHQtYnRuJyk7XG4gIGlmICghYnRuKSBidG4gPSBlLnRhcmdldC5jbG9zZXN0KCcuZ29hbC1idG4nKTtcbiAgaWYgKCFidG4pIHJldHVybjtcbiAgYWN0aXZhdGVCdXR0b25zKGJ0bik7XG59KTtcblxuYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBjb25zdCBzcGFjZSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5zcGFjZScpO1xuICBpZiAoIXNwYWNlKSByZXR1cm47XG4gIGNvbnN0IGFjdGl2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUtYnRuJyk7XG4gIGlmICghYWN0aXZlQnRuKSByZXR1cm47XG4gIGlmIChhY3RpdmVCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdrbmlnaHQtYnRuJykpIHtcbiAgICBwbGFjZUtuaWdodChzcGFjZSk7XG4gIH0gZWxzZSB7XG4gICAgcGxhY2VHb2FsKHNwYWNlKTtcbiAgfVxuICBhY3RpdmF0ZUJ1dHRvbnMoYWN0aXZlQnRuKTtcbn0pO1xuXG5yZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYgKHJlc2V0QnRuLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLWJ0bicpKSBhY3RpdmF0ZUJ1dHRvbnMocmVzZXRCdG4pO1xuICByZXNldEJvYXJkKCk7XG59KTtcblxuZXhwb3J0IHsgdG9nZ2xlRXJyb3IsIGFjdGl2YXRlQnV0dG9ucyB9O1xuIiwiLy8gRWFjaCBub2RlIHJlcHJlc2VudHMgYSBwb3NpdGlvbiBvbiBhIGNoZXNzIGJvYXJkLiB4IGFuZCB5XG4vLyBhcmUgdGhlIGNvb3JkaW5hdGVzIG9mIGVhY2ggY2hlc3MgcG9zaXRpb24sXG4vLyB3aGVyZSAwLDAgIGlzIHRoZSB0b3AgbGVmdCBzcXVhcmUuXG4vLyB0bCwgdHIsIHJ0LCByYiwgYnIsIGJsLCBsYiwgYW5kIGx0IHJlcHJlc2VudCB0aGUgc3F1YXJlcy9ub2RlcyB0aGF0IGEga25pZ2h0IGNhbiBtb3ZlIGZyb21cbi8vIHBvc2l0aW9uIHgsIHlcbmNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBub2RlKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuZG9tID0gbm9kZTtcbiAgICB0aGlzLnRsID0gbnVsbDtcbiAgICB0aGlzLnRyID0gbnVsbDtcbiAgICB0aGlzLnJ0ID0gbnVsbDtcbiAgICB0aGlzLnJiID0gbnVsbDtcbiAgICB0aGlzLmJyID0gbnVsbDtcbiAgICB0aGlzLmJsID0gbnVsbDtcbiAgICB0aGlzLmxiID0gbnVsbDtcbiAgICB0aGlzLmx0ID0gbnVsbDtcbiAgfVxuXG4gIHNldERPTShub2RlKSB7XG4gICAgdGhpcy5kb20gPSBub2RlO1xuICB9XG5cbiAgc2V0VEwobm9kZSkge1xuICAgIHRoaXMudGwgPSBub2RlO1xuICB9XG5cbiAgc2V0VFIobm9kZSkge1xuICAgIHRoaXMudHIgPSBub2RlO1xuICB9XG5cbiAgc2V0UlQobm9kZSkge1xuICAgIHRoaXMucnQgPSBub2RlO1xuICB9XG5cbiAgc2V0UkIobm9kZSkge1xuICAgIHRoaXMucmIgPSBub2RlO1xuICB9XG5cbiAgc2V0QlIobm9kZSkge1xuICAgIHRoaXMuYnIgPSBub2RlO1xuICB9XG5cbiAgc2V0Qkwobm9kZSkge1xuICAgIHRoaXMuYmwgPSBub2RlO1xuICB9XG5cbiAgc2V0TEIobm9kZSkge1xuICAgIHRoaXMubGIgPSBub2RlO1xuICB9XG5cbiAgc2V0TFQobm9kZSkge1xuICAgIHRoaXMubHQgPSBub2RlO1xuICB9XG59XG5cbi8vIENyZWF0ZXMgYSAyZCBBcnJheSBvZiBub2RlcyB0aGF0IHJlcHJlc2VudCBhIGNoZXNzIGJvYXJkLlxuLy8gRWFjaCBub2RlIHJlcHJlc2VudHMgYSBzcGFjZSBvbiBhIGNoZXNzIGJvYXJkLCB0aGF0IHBvaW50c1xuLy8gdG8gb3RoZXIgc3BhY2VzIGFjY29yZGluZyB0byB0aGUgbW92ZW1lbnRzIG9mIGEga25pZ2h0IHBpZWNlXG5mdW5jdGlvbiBjcmVhdGVOb2RlQXJyYXkoKSB7XG4gIGNvbnN0IG5vZGVBcnJheSA9IFtdO1xuICBmb3IgKGxldCB5ID0gMDsgeSA8IDg7IHkgKz0gMSkge1xuICAgIGNvbnN0IHRlbXBBcnJheSA9IFtdO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgODsgeCArPSAxKSB7XG4gICAgICBjb25zdCBzcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9JyR7eH0nXVtkYXRhLXk9JyR7eX0nXWApO1xuICAgICAgY29uc3QgdGVtcE5vZGUgPSBuZXcgTm9kZSh4LCB5LCBzcGFjZSk7XG4gICAgICB0ZW1wQXJyYXkucHVzaCh0ZW1wTm9kZSk7XG4gICAgfVxuICAgIG5vZGVBcnJheS5wdXNoKHRlbXBBcnJheSk7XG4gIH1cbiAgcmV0dXJuIG5vZGVBcnJheTtcbn1cblxuLy8gQXNzaWducyBlYWNoIG5vZGUvc3BhY2UgcG9pbnRlcnMgdG8gb3RoZXIgbm9kZXMvc3BhY2VzXG4vLyBpZiBpdCBhZGhlcmVzIHRvIHRoZSBtb3ZlbWVudHMgb2YgYSBrbmlnaHQgcGllY2VcbmZ1bmN0aW9uIGNyZWF0ZUdyYXBoKG5vZGVBcnJheSkge1xuICBmb3IgKGxldCB5ID0gMDsgeSA8IDg7IHkgKz0gMSkge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgODsgeCArPSAxKSB7XG4gICAgICBjb25zdCB0ZW1wID0gbm9kZUFycmF5W3ldW3hdO1xuICAgICAgaWYgKCh4IC0gMSkgPj0gMCAmJiAoeSAtIDIpID49IDApIHRlbXAuc2V0VEwobm9kZUFycmF5W3kgLSAyXVt4IC0gMV0pO1xuICAgICAgaWYgKCh4ICsgMSkgPCA4ICYmICh5IC0gMikgPj0gMCkgdGVtcC5zZXRUUihub2RlQXJyYXlbeSAtIDJdW3ggKyAxXSk7XG4gICAgICBpZiAoKHggKyAyKSA8IDggJiYgKHkgLSAxKSA+PSAwKSB0ZW1wLnNldFJUKG5vZGVBcnJheVt5IC0gMV1beCArIDJdKTtcbiAgICAgIGlmICgoeCArIDIpIDwgOCAmJiAoeSArIDEpIDwgOCkgdGVtcC5zZXRSQihub2RlQXJyYXlbeSArIDFdW3ggKyAyXSk7XG4gICAgICBpZiAoKHggKyAxKSA8IDggJiYgKHkgKyAyKSA8IDgpIHRlbXAuc2V0QlIobm9kZUFycmF5W3kgKyAyXVt4ICsgMV0pO1xuICAgICAgaWYgKCh4IC0gMSkgPj0gMCAmJiAoeSArIDIpIDwgOCkgdGVtcC5zZXRCTChub2RlQXJyYXlbeSArIDJdW3ggLSAxXSk7XG4gICAgICBpZiAoKHggLSAyKSA+PSAwICYmICh5ICsgMSkgPCA4KSB0ZW1wLnNldExCKG5vZGVBcnJheVt5ICsgMV1beCAtIDJdKTtcbiAgICAgIGlmICgoeCAtIDIpID49IDAgJiYgKHkgLSAxKSA+PSAwKSB0ZW1wLnNldExUKG5vZGVBcnJheVt5IC0gMV1beCAtIDJdKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBjYWxjdWxhdGVzIHRoZSBzaG9ydGVzdCBwYXRoIGZyb20gdGhlIHN0YXJ0IHBvc2l0aW9uIChzaWduaWZpZWQgYnkgbm9kZSksXG4vLyBhbmQgdGhlIGVuZCBwb3NpdGlvbiAoc2lnbmlmaWVkIGJ5IGVuZFBvc2l0aW9uIGFycmF5KS5cbi8vIFRoaXMgdXRpbGl6ZXMgYSBicmVhZHRoIGZpcnN0IHNlYXJjaCBhbGdvcml0aG1cbi8vIChhIGRlcHRoIGZpcnN0IGFsZ29yaXRobSB3b3VsZCBjYXVzZSBhbiBpbmZpbml0ZSBsb29wIG9mIHJlY3Vyc2l2ZSBjYWxscykuXG5mdW5jdGlvbiBrbmlnaHRNb3Zlcyhub2RlLCBlbmRQb3NpdGlvbiwgcXVldWUgPSBbXSwgdHJhdmVyc2FsUGF0aCA9IFtdKSB7XG4gIGlmIChub2RlLnggPT09IGVuZFBvc2l0aW9uWzBdICYmIG5vZGUueSA9PT0gZW5kUG9zaXRpb25bMV0pIHtcbiAgICB0cmF2ZXJzYWxQYXRoLnB1c2gobm9kZSk7XG4gICAgcmV0dXJuIHRyYXZlcnNhbFBhdGg7XG4gIH1cbiAgaWYgKHF1ZXVlLmxlbmd0aCA8IDEpIHtcbiAgICBxdWV1ZS5wdXNoKG5vZGUpO1xuICB9XG4gIHRyYXZlcnNhbFBhdGgucHVzaChxdWV1ZVswXSk7XG4gIGlmIChub2RlLnRsICE9PSBudWxsKSBxdWV1ZS5wdXNoKG5vZGUudGwpO1xuICBpZiAobm9kZS50ciAhPT0gbnVsbCkgcXVldWUucHVzaChub2RlLnRyKTtcbiAgaWYgKG5vZGUucnQgIT09IG51bGwpIHF1ZXVlLnB1c2gobm9kZS5ydCk7XG4gIGlmIChub2RlLnJiICE9PSBudWxsKSBxdWV1ZS5wdXNoKG5vZGUucmIpO1xuICBpZiAobm9kZS5iciAhPT0gbnVsbCkgcXVldWUucHVzaChub2RlLmJyKTtcbiAgaWYgKG5vZGUuYmwgIT09IG51bGwpIHF1ZXVlLnB1c2gobm9kZS5ibCk7XG4gIGlmIChub2RlLmxiICE9PSBudWxsKSBxdWV1ZS5wdXNoKG5vZGUubGIpO1xuICBpZiAobm9kZS5sdCAhPT0gbnVsbCkgcXVldWUucHVzaChub2RlLmx0KTtcbiAgY29uc3QgZm91bmQgPSBxdWV1ZS5maW5kKChpdGVtKSA9PiAoaXRlbS54ID09PSBlbmRQb3NpdGlvblswXSAmJiBpdGVtLnkgPT09IGVuZFBvc2l0aW9uWzFdKSk7XG4gIC8vIElmIHF1ZXVlIGNvbnRhaW5zIGVuZCBwb3NpdGlvbiwgcmV0dXJuIGFuIGFycmF5IG9mXG4gIC8vIFtub2RlIHdpdGggcG9zaXRpb24gYmVmb3JlIGVuZCBwb3NpdGlvbiwgZW5kUG9zaXRpb24gbm9kZV1cbiAgLy8gQkFTRSBDQVNFISBUaGlzIHdpbGwgYnJlYWsgdGhlIHJlY3Vyc2lvblxuICBpZiAoZm91bmQpIHtcbiAgICByZXR1cm4gW3F1ZXVlWzBdXS5jb25jYXQoW2ZvdW5kXSk7XG4gIH1cbiAgY29uc3QgcmVtb3ZlZE5vZGUgPSBxdWV1ZS5zaGlmdCgpO1xuICBjb25zdCBzaG9ydGVzdFBhdGggPSBrbmlnaHRNb3ZlcyhxdWV1ZVswXSwgZW5kUG9zaXRpb24sIHF1ZXVlLCB0cmF2ZXJzYWxQYXRoKTtcbiAgY29uc3QgcmVtb3ZlZE5vZGVWYWx1ZXMgPSBPYmplY3QudmFsdWVzKHJlbW92ZWROb2RlKTtcbiAgaWYgKHJlbW92ZWROb2RlVmFsdWVzLmluY2x1ZGVzKHNob3J0ZXN0UGF0aFswXSkpIHtcbiAgICByZXR1cm4gW3JlbW92ZWROb2RlXS5jb25jYXQoc2hvcnRlc3RQYXRoKTtcbiAgfVxuICByZXR1cm4gc2hvcnRlc3RQYXRoO1xufVxuXG5leHBvcnQge1xuICBOb2RlLCBjcmVhdGVOb2RlQXJyYXksIGNyZWF0ZUdyYXBoLCBrbmlnaHRNb3Zlcyxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL21vZHVsZXMvYm9hcmQnO1xuaW1wb3J0IHsgdG9nZ2xlRXJyb3IsIGFjdGl2YXRlQnV0dG9ucyB9IGZyb20gJy4vbW9kdWxlcy9idXR0b25zJztcbmltcG9ydCB7IGNyZWF0ZU5vZGVBcnJheSwgY3JlYXRlR3JhcGgsIGtuaWdodE1vdmVzIH0gZnJvbSAnLi9tb2R1bGVzL25vZGUnO1xuXG5mdW5jdGlvbiBjaGVja0tuaWdodEFuZEdvYWwoKSB7XG4gIGNvbnN0IGtuaWdodFNwYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmtuaWdodC1wbGFjZWQnKTtcbiAgY29uc3QgZ29hbFNwYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvYWwtcGxhY2VkJyk7XG4gIGlmIChrbmlnaHRTcGFjZSAmJiBnb2FsU3BhY2UpIHtcbiAgICByZXR1cm4gW1trbmlnaHRTcGFjZS5kYXRhc2V0LngsIGtuaWdodFNwYWNlLmRhdGFzZXQueV0sXG4gICAgICBbZ29hbFNwYWNlLmRhdGFzZXQueCwgZ29hbFNwYWNlLmRhdGFzZXQueV1dO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gYWRkTW92ZU51bWJlcnNUb0JvYXJkKHNob3J0ZXN0UGF0aCkge1xuICBsZXQgbW92ZSA9IDE7XG4gIHNob3J0ZXN0UGF0aC5mb3JFYWNoKChzcGFjZSkgPT4ge1xuICAgIGNvbnN0IG1vdmVOdW1iZXJFbGVtZW50ID0gYDxwIGNsYXNzPVwibW92ZS1udW1iZXJcIiBkYXRhLW1vdmU9XCIke21vdmV9XCI+JHttb3ZlfTwvcD5gO1xuICAgIHNwYWNlLmRvbS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIG1vdmVOdW1iZXJFbGVtZW50KTtcbiAgICBtb3ZlICs9IDE7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0cmF2YWlsKG5vZGVBcnJheSwgcG9zaXRpb25zKSB7XG4gIGNvbnN0IHN0YXJ0aW5nTm9kZSA9IG5vZGVBcnJheVtwb3NpdGlvbnNbMF1bMV1dW3Bvc2l0aW9uc1swXVswXV07XG4gIGNvbnN0IGVuZFBvc2l0aW9uID0gW051bWJlcihwb3NpdGlvbnNbMV1bMF0pLCBOdW1iZXIocG9zaXRpb25zWzFdWzFdKV07XG4gIGNvbnN0IHNob3J0ZXN0UGF0aCA9IGtuaWdodE1vdmVzKHN0YXJ0aW5nTm9kZSwgZW5kUG9zaXRpb24pO1xuICAvLyBSZW1vdmUgc3RhcnRpbmcgcG9zaXRpb25cbiAgc2hvcnRlc3RQYXRoLnNoaWZ0KCk7XG4gIGFkZE1vdmVOdW1iZXJzVG9Cb2FyZChzaG9ydGVzdFBhdGgpO1xufVxuXG5jb25zdCB0cmF2YWlsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYXZhaWwtYnRuJyk7XG5jb25zdCBub2RlQXJyYXkgPSBjcmVhdGVOb2RlQXJyYXkoKTtcbmNyZWF0ZUdyYXBoKG5vZGVBcnJheSk7XG5cbnRyYXZhaWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IGNoZWNrS25pZ2h0QW5kR29hbCgpO1xuICBpZiAocG9zaXRpb25zKSB7XG4gICAgdHJhdmFpbChub2RlQXJyYXksIHBvc2l0aW9ucyk7XG4gICAgYWN0aXZhdGVCdXR0b25zKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldC1idG4nKSk7XG4gIH0gZWxzZSB0b2dnbGVFcnJvcigpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=