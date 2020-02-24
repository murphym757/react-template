import { createGlobalStyle } from 'styled-components';
import lemonMilk from '../fonts/LemonMilk/LemonMilk.otf';


export const GlobalStyle = createGlobalStyle `
    @font-face {
        font-family: 'LemonMilk';
        src: url(${lemonMilk});
        src: url(${lemonMilk}) format('opentype');
    }

    body {
        display: table;
        width: 100%;
        height: auto;
        background: no-repeat bottom center scroll;
        background-color: ${props => props.theme.primaryColor};
        background-blend-mode: multiply;
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover; 
        color: ${props => props.theme.black};    
    }

    img {
        max-width: 100%;
        height: auto;
    }

    h1 {
        color: ${props => props.theme.secondaryColor};
        font-family: 'LemonMilk';
    }
`;
