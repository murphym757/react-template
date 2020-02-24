"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalStyle = void 0;

var _styledComponents = require("styled-components");

var _LemonMilk = _interopRequireDefault(require("../fonts/LemonMilk/LemonMilk.otf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    @font-face {\n        font-family: 'LemonMilk';\n        src: url(", ");\n        src: url(", ") format('opentype');\n    }\n\n    body {\n        display: table;\n        width: 100%;\n        height: auto;\n        background: no-repeat bottom center scroll;\n        background-color: ", ";\n        background-blend-mode: multiply;\n        background-position: center center;\n        background-repeat: no-repeat;\n        background-attachment: fixed;\n        background-size: cover; \n        color: ", ";    \n    }\n\n    img {\n        max-width: 100%;\n        height: auto;\n    }\n\n    h1 {\n        color: ", ";\n        font-family: 'LemonMilk';\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject(), _LemonMilk["default"], _LemonMilk["default"], function (props) {
  return props.theme.primaryColor;
}, function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.secondaryColor;
});
exports.GlobalStyle = GlobalStyle;