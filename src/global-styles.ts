import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }
`;

export default GlobalStyles;
