import { createGlobalStyle } from 'styled-components';
import { theme } from '../types/theme';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Arvo', serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.text};
    background: ${theme.colors.background};
    font-size: 16px;
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Arvo', serif;
    font-weight: 700;
    line-height: 1.2;
  }

  p, span, button, a {
    font-family: 'Arvo', serif;
  }

  button {
    font-family: 'Arvo', serif;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
