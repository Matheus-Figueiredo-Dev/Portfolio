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

    body {
        color: ${(props) => props.theme.white};
        background: linear-gradient(-45deg, ${(props) => props.theme.darkPurple},${(props) => props.theme.black}, ${(props) => props.theme.darkPurple},${(props) => props.theme.black});
        background-size: 400% 400%;
        animation: gradientBackground 15s ease infinite;

        @keyframes gradientBackground {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
        }
            }
`;

export default GlobalStyles;
