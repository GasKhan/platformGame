/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/images/background.png":
/*!***********************************!*\
  !*** ./src/images/background.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/images/hills.png":
/*!******************************!*\
  !*** ./src/images/hills.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/images/platform.png":
/*!*********************************!*\
  !*** ./src/images/platform.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/images/platformSmallTall.png":
/*!******************************************!*\
  !*** ./src/images/platformSmallTall.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/images/spriteRunLeft.png":
/*!**************************************!*\
  !*** ./src/images/spriteRunLeft.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/images/spriteRunRight.png":
/*!***************************************!*\
  !*** ./src/images/spriteRunRight.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/images/spriteStandLeft.png":
/*!****************************************!*\
  !*** ./src/images/spriteStandLeft.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/images/spriteStandRight.png":
/*!*****************************************!*\
  !*** ./src/images/spriteStandRight.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/js/GenericObject.js":
/*!*********************************!*\
  !*** ./src/js/GenericObject.js ***!
  \*********************************/
/*! exports provided: GenericObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericObject", function() { return GenericObject; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/js/canvas.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.height = this.image.height;
    this.width = this.image.width;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      _canvas__WEBPACK_IMPORTED_MODULE_0__["context"].drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

/***/ }),

/***/ "./src/js/Platform.js":
/*!****************************!*\
  !*** ./src/js/Platform.js ***!
  \****************************/
/*! exports provided: Platform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/js/canvas.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.height = this.image.height;
    this.width = this.image.width;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      _canvas__WEBPACK_IMPORTED_MODULE_0__["context"].drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

/***/ }),

/***/ "./src/js/Player.js":
/*!**************************!*\
  !*** ./src/js/Player.js ***!
  \**************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var _images_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/spriteStandLeft.png */ "./src/images/spriteStandLeft.png");
/* harmony import */ var _images_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/spriteStandRight.png */ "./src/images/spriteStandRight.png");
/* harmony import */ var _images_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/spriteRunLeft.png */ "./src/images/spriteRunLeft.png");
/* harmony import */ var _images_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/spriteRunRight.png */ "./src/images/spriteRunRight.png");
/* harmony import */ var _createImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createImage */ "./src/js/createImage.js");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./canvas */ "./src/js/canvas.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var gravity = 0.15;
var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: 100
    };
    this.height = 150;
    this.width = 66;
    this.speed = 10;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.frame = 0;
    this.sprites = {
      stand: {
        right: Object(_createImage__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_images_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
        left: Object(_createImage__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_images_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_0__["default"]),
        cropWidth: 177,
        width: 66
      },
      run: {
        right: Object(_createImage__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_images_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_3__["default"]),
        left: Object(_createImage__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_images_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_2__["default"]),
        cropWidth: 341,
        width: 127.875
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.cropWidth = this.sprites.stand.cropWidth;
  }

  _createClass(Player, [{
    key: "update",
    value: function update() {
      this.draw();
      this.frame++;
      if (this.frame > 59 && (this.currentSprite == this.sprites.stand.right || this.currentSprite == this.sprites.stand.left)) this.frame = 0;else if (this.frame > 29 && (this.currentSprite == this.sprites.run.right || this.currentSprite == this.sprites.run.left)) this.frame = 0;
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;

      if (this.position.y + this.height + this.velocity.y <= _canvas__WEBPACK_IMPORTED_MODULE_5__["canvas"].height) {
        this.velocity.y += gravity;
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      _canvas__WEBPACK_IMPORTED_MODULE_5__["context"].drawImage(this.currentSprite, this.cropWidth * this.frame, 0, this.cropWidth, 400, this.position.x, this.position.y, this.width, this.height);
    }
  }]);

  return Player;
}();

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! exports provided: canvas, context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "context", function() { return context; });
/* harmony import */ var _images_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/platform.png */ "./src/images/platform.png");
/* harmony import */ var _images_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/platformSmallTall.png */ "./src/images/platformSmallTall.png");
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/background.png */ "./src/images/background.png");
/* harmony import */ var _images_hills_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/hills.png */ "./src/images/hills.png");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Player */ "./src/js/Player.js");
/* harmony import */ var _Platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Platform */ "./src/js/Platform.js");
/* harmony import */ var _createImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createImage */ "./src/js/createImage.js");
/* harmony import */ var _GenericObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GenericObject */ "./src/js/GenericObject.js");








var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
canvas.height = 576;
canvas.width = 1024;
var platformImage = Object(_createImage__WEBPACK_IMPORTED_MODULE_6__["createImage"])(_images_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var player = new _Player__WEBPACK_IMPORTED_MODULE_4__["Player"]();
var platforms = [];
var genericObjects = [];
var gap = 100;
var lastKey;
var keys = {
  left: {
    isPressed: false
  },
  right: {
    isPressed: false
  }
};
var scrollProgress = 0;

function init() {
  platformImage = Object(_createImage__WEBPACK_IMPORTED_MODULE_6__["createImage"])(_images_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  player = new _Player__WEBPACK_IMPORTED_MODULE_4__["Player"]();
  platforms = [new _Platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]({
    x: 0,
    y: 460,
    image: platformImage
  })];

  for (var i = 1; i <= 27; i++) {
    if (i % 3 === 0) gap += 200;

    if (i % 5 === 0) {
      platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]({
        x: platformImage.width * i - 40,
        y: 355,
        image: Object(_createImage__WEBPACK_IMPORTED_MODULE_6__["createImage"])(_images_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_1__["default"])
      }));
    } else {
      platforms.push(new _Platform__WEBPACK_IMPORTED_MODULE_5__["Platform"]({
        x: platformImage.width * i + gap,
        y: 460,
        image: platformImage
      }));
    }
  }

  genericObjects = [new _GenericObject__WEBPACK_IMPORTED_MODULE_7__["GenericObject"]({
    x: -1,
    y: -1,
    image: Object(_createImage__WEBPACK_IMPORTED_MODULE_6__["createImage"])(_images_background_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new _GenericObject__WEBPACK_IMPORTED_MODULE_7__["GenericObject"]({
    x: 0,
    y: 0,
    image: Object(_createImage__WEBPACK_IMPORTED_MODULE_6__["createImage"])(_images_background_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new _GenericObject__WEBPACK_IMPORTED_MODULE_7__["GenericObject"]({
    x: 0,
    y: 0,
    image: Object(_createImage__WEBPACK_IMPORTED_MODULE_6__["createImage"])(_images_hills_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  })];
  scrollProgress = 0;
}

var animate = function animate() {
  requestAnimationFrame(animate);
  context.fillStyle = '#fff';
  context.fillRect(0, 0, canvas.width, canvas.height);

  if (keys.left.isPressed && player.position.x > 100 || keys.left.isPressed && player.position.x > 0 && scrollProgress === 0) {
    player.velocity.x -= player.speed;
  } else if (keys.right.isPressed && player.position.x < 400) {
    player.velocity.x += player.speed;
  } else {
    player.velocity.x = 0;

    if (keys.left.isPressed && scrollProgress > 0) {
      scrollProgress -= player.speed;
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        return genericObject.position.x += player.speed * 0.66;
      });
    } else if (keys.right.isPressed) {
      scrollProgress += player.speed;
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        return genericObject.position.x -= player.speed * 0.66;
      });
    }
  }

  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x < platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  });

  if (keys.right.isPressed && lastKey === 'right' && player.currentSprite !== player.sprites.run.right) {
    player.frame = 1;
    player.currentSprite = player.sprites.run.right;
    player.cropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (keys.left.isPressed && lastKey === 'left' && player.currentSprite !== player.sprites.run.left) {
    player.frame = 1;
    player.currentSprite = player.sprites.run.left;
    player.cropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (!keys.left.isPressed && lastKey === 'left' && player.currentSprite !== player.sprites.stand.left) {
    player.frame = 1;
    player.currentSprite = player.sprites.stand.left;
    player.cropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  } else if (!keys.right.isPressed && lastKey === 'right' && player.currentSprite !== player.sprites.stand.right) {
    player.frame = 1;
    player.currentSprite = player.sprites.stand.right;
    player.cropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  }

  if (scrollProgress > platformImage.width * 27 + gap) {
    console.log('You won!');
  }

  if (player.position.y > canvas.height) init();
  genericObjects.forEach(function (genericObject) {
    return genericObject.draw();
  });
  platforms.forEach(function (platform) {
    return platform.draw();
  });
  player.update();
};

init();
animate(); //Event listeners

window.addEventListener('keydown', function (_ref) {
  var keyCode = _ref.keyCode;

  switch (keyCode) {
    case 65:
      {
        keys.left.isPressed = true;
        lastKey = 'left';
        break;
      }

    case 68:
      {
        keys.right.isPressed = true;
        lastKey = 'right';
        break;
      }

    case 87:
      {
        player.velocity.y -= 10;
        break;
      }

    case 83:
      {}
  }
});
window.addEventListener('keyup', function (_ref2) {
  var keyCode = _ref2.keyCode;

  switch (keyCode) {
    case 65:
      {
        keys.left.isPressed = false;
        break;
      }

    case 68:
      {
        keys.right.isPressed = false;
        break;
      }

    case 87:
      {
        player.velocity.y = 0;
        break;
      }
  }
});

/***/ }),

/***/ "./src/js/createImage.js":
/*!*******************************!*\
  !*** ./src/js/createImage.js ***!
  \*******************************/
/*! exports provided: createImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImage", function() { return createImage; });
function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map