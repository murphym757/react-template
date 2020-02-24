const primaryColorAlt = 'rgb(184, 211, 209)';
const secondaryColor = 'rgb(206, 123, 145)';
const primaryColor = 'rgb(192, 232, 249)';
const white = 'rgb(255, 255, 255)';
const black = 'rgb(0, 0, 0)';
const dayThemeOpacity = 1;
const nightThemeOpacity = 1;

export const souseDefaultTheme = {
    primaryColorAlt: primaryColorAlt,
    secondaryColor: secondaryColor,
    primaryColor: primaryColor,
    white: white,
    black: black,
    themeOpacity: dayThemeOpacity,
    '$card-bg': primaryColor
}

export const souseDefaultThemeDark = {
    primaryColorAlt: primaryColorAlt,
    secondaryColor: secondaryColor,
    primaryColor: primaryColor,
    white: black,
    black: white,
    themeOpacity: nightThemeOpacity,
    '$card-bg': primaryColor
}
