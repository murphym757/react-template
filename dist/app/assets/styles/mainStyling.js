"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainCard = exports.CardContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _v = require("@bootstrap-styled/v4");

var _reactRouterDom = require("react-router-dom");

var _mediaQueries = require("./mediaQueries");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CardContainer = _styledComponents["default"].div.withConfig({
  displayName: "mainStyling__CardContainer",
  componentId: "sc-1816ehk-0"
})(["opacity:", ";"], function (props) {
  return props.theme.themeOpacity;
});

exports.CardContainer = CardContainer;
var MainCard = (0, _styledComponents["default"])(_v.Card).withConfig({
  displayName: "mainStyling__MainCard",
  componentId: "sc-1816ehk-1"
})(["&.card{display:block;z-index:9999;position:fixed;width:100%;height:100%;top:0;right:0;left:0;bottom:0;overflow:auto;opacity:", ";background-color:", ";color:", ";}"], function (props) {
  return props.theme.themeOpacity;
}, function (props) {
  return props.theme.primaryColor;
}, function (props) {
  return props.theme.black;
});
exports.MainCard = MainCard;