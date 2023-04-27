"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = App;
var _react = _interopRequireWildcard(require("react"));
require("./app.css");
var _card = _interopRequireDefault(require("./components/card/card.js"));
var _react2 = require("@headlessui/react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var cardImages = [{
  "name": "Guts",
  "src": "https://i.pinimg.com/originals/e0/c3/01/e0c3015aa713e224da98e04500f69ab9.png",
  matched: false
}, {
  "name": "Casca",
  "src": "https://w7.pngwing.com/pngs/319/430/png-transparent-casca-guts-griffith-berserk-drawing-manga-manga-monochrome-human-thumbnail.png",
  matched: false
}, {
  "name": "Griffith",
  "src": "https://i.pinimg.com/736x/35/03/f8/3503f825c42ed0c2d57ff3a49b18cea2.jpg",
  matched: false
}, {
  "name": "Guts-Sword",
  "src": "https://e7.pngegg.com/pngimages/972/270/png-clipart-sword-of-the-berserk-guts-rage-dragonslayer-berserker-guts-griffith.png",
  matched: false
}, {
  "name": "Berserker",
  "src": "https://www.nicepng.com/png/detail/160-1605986_guts-berserk-armor.png",
  matched: false
}, {
  "name": "Puck",
  "src": "https://preview.redd.it/kkp5bxip02px.png?auto=webp&s=c230394d042c03d8a52dc0c519c141a98b64bcfa",
  matched: false
}, {
  "name": "Zodd",
  "src": "https://i.pinimg.com/originals/6b/a3/68/6ba368c0d3d933a17347a931c10e583b.png",
  matched: false
}, {
  "name": "Berserker",
  "src": "https://www.pngkit.com/png/detail/160-1605056_skull-knight-berserk.png",
  matched: false
}];
function App() {
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    cartas = _useState2[0],
    setCards = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    turnos = _useState4[0],
    setTurns = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    eleccion1 = _useState6[0],
    seteleccion1 = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    eleccion2 = _useState8[0],
    seteleccion2 = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    disabled = _useState10[0],
    setDisabled = _useState10[1];
  var shuffleCartas = function shuffleCartas() {
    var shuffledCards = [].concat(cardImages, cardImages).sort(function () {
      return Math.random() - 0.5;
    }).map(function (card) {
      return _objectSpread(_objectSpread({}, card), {}, {
        id: Math.random()
      });
    });
    seteleccion1(null);
    seteleccion2(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  //handle de la eleccion
  var handleEleccion = function handleEleccion(card) {
    console.log(card);
    eleccion1 ? seteleccion2(card) : seteleccion1(card);
  };

  // comparar 2 cartas
  (0, _react.useEffect)(function () {
    if (eleccion1 && eleccion2) {
      setDisabled(true);
      if (eleccion1.src == eleccion2.src) {
        setCards(function (prevCards) {
          return prevCards.map(function (card) {
            if (card.src === eleccion1.src) {
              return _objectSpread(_objectSpread({}, card), {}, {
                matched: true
              });
            } else {
              return card;
            }
          });
        });
        resetTurno();
      } else {
        console.log('Esas cartas no son iguales');
        setTimeout(function () {
          return resetTurno();
        }, 1000);
      }
    }
  }, [eleccion1, eleccion2]);
  console.log(cartas);

  //reiniciar elecciones e incrementar el turno
  var resetTurno = function resetTurno() {
    seteleccion1(null);
    seteleccion2(null);
    setTurns(function (prevTurno) {
      return prevTurno + 1;
    });
    setDisabled(false);
  };

  //empezar el juego de manera automática
  (0, _react.useEffect)(function () {
    shuffleCartas();
  }, []);
  function MyDialog() {
    var _useState11 = (0, _react.useState)(true),
      _useState12 = _slicedToArray(_useState11, 2),
      isOpen = _useState12[0],
      setIsOpen = _useState12[1];
    return /*#__PURE__*/_react["default"].createElement(_react2.Dialog, {
      open: isOpen,
      onClose: function onClose() {
        return setIsOpen(false);
      }
    }, /*#__PURE__*/_react["default"].createElement(_react2.Dialog.Panel, null, /*#__PURE__*/_react["default"].createElement(_react2.Dialog.Title, null, "Deactivate account"), /*#__PURE__*/_react["default"].createElement(_react2.Dialog.Description, null, "This will permanently deactivate your account"), /*#__PURE__*/_react["default"].createElement("p", null, "Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone."), /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return setIsOpen(false);
      }
    }, "Deactivate"), /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return setIsOpen(false);
      }
    }, "Cancel")));
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "berserkimg",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Berserk_anime_logo.png"
  }), /*#__PURE__*/_react["default"].createElement("h1", null, "Berserk Match"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: shuffleCartas
  }, "Jugar"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: MyDialog
  }, "Dialog"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-grid"
  }, cartas.map(function (card) {
    return /*#__PURE__*/_react["default"].createElement(_card["default"], {
      key: card.id,
      card: card,
      handleEleccion: handleEleccion,
      flipped: card === eleccion1 || card === eleccion2 || card.matched,
      disabled: disabled
    });
  })), /*#__PURE__*/_react["default"].createElement("h2", null, " Turnos : ", turnos, " "));
}