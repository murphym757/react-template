"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.souseDefaultThemeDark = exports.souseDefaultTheme = void 0;
var primaryColorAlt = 'rgb(184, 211, 209)';
var secondaryColor = 'rgb(206, 123, 145)';
var primaryColor = 'rgb(192, 232, 249)';
var white = 'rgb(255, 255, 255)';
var black = 'rgb(0, 0, 0)';
var dayThemeOpacity = 1;
var nightThemeOpacity = 1;
var souseDefaultTheme = {
  primaryColorAlt: primaryColorAlt,
  secondaryColor: secondaryColor,
  primaryColor: primaryColor,
  white: white,
  black: black,
  themeOpacity: dayThemeOpacity,
  '$card-bg': primaryColor
};
exports.souseDefaultTheme = souseDefaultTheme;
var souseDefaultThemeDark = {
  primaryColorAlt: primaryColorAlt,
  secondaryColor: secondaryColor,
  primaryColor: primaryColor,
  white: black,
  black: white,
  themeOpacity: nightThemeOpacity,
  '$card-bg': primaryColor
};
exports.souseDefaultThemeDark = souseDefaultThemeDark;