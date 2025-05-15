import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: "Noto Sans", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    button, a {
        cursor: pointer;
    }

    body {
        background-color: black;
        color: white;
    }
`;

export default GlobalStyles;
