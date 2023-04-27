"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Card;
var _react = _interopRequireDefault(require("react"));
require("./card.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Card(_ref) {
  var card = _ref.card,
    handleEleccion = _ref.handleEleccion,
    flipped = _ref.flipped,
    disabled = _ref.disabled;
  var handleClick = function handleClick() {
    if (!disabled) {
      handleEleccion(card);
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: flipped ? "flipped" : ""
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "front",
    src: card.src,
    alt: "card-front"
  }), /*#__PURE__*/_react["default"].createElement("img", {
    className: "back",
    src: "https://images.fineartamerica.com/images/artworkimages/medium/3/berserk-logo-anime-art-anime-art-transparent.png",
    onClick: handleClick,
    alt: "card-back"
  })));
}