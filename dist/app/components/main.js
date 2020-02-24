"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MainSource;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _provider = _interopRequireDefault(require("@bootstrap-styled/provider"));

var _globalStyling = require("../assets/styles/globalStyling");

var _globalTheme = require("../assets/styles/globalTheme");

var _mainStyling = require("../assets/styles/mainStyling");

var _v = require("@bootstrap-styled/v4");

var _LandingPage = _interopRequireDefault(require("./navigation/LandingPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function MainSource(props) {
  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      currentTheme = _useState2[0],
      setCurrentTheme = _useState2[1];

  (0, _react.useEffect)(function () {
    var currentTime = new Date();
    var time = currentTime.getHours();
    console.log(time);

    if (time >= 17 || time < 7) {
      setCurrentTheme(_globalTheme.souseDefaultThemeDark);
    } else {
      setCurrentTheme(_globalTheme.souseDefaultTheme);
    }
  });
  return _react["default"].createElement(_reactRouterDom.BrowserRouter, null, _react["default"].createElement("div", null, _react["default"].createElement("div", {
    "class": "container-fluid p-auto"
  }, _react["default"].createElement(_mainStyling.CardContainer, {
    className: "container-fluid pt-3 pb-3"
  }, _react["default"].createElement(_provider["default"], {
    theme: currentTheme
  }, _react["default"].createElement(_globalStyling.GlobalStyle, null), _react["default"].createElement(_mainStyling.MainCard, null, _react["default"].createElement(_v.CardBlock, {
    className: "m-0 pl-0 pr-0"
  }, _react["default"].createElement(_reactRouterDom.Switch, null, _react["default"].createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/",
    component: _LandingPage["default"]
  })))))))));
}