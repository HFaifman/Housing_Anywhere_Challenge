import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    --scrollbarBG: #cfd8dc;
    --thumbBG: rgb(60,62,68);
  }
  
  body {
    color: #ffffff;
    background: rgb(32, 35, 41);
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

*{
  scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--scrollbarBG);
}

*::-webkit-scrollbar {
    width: 11px;
  }

*::-webkit-scrollbar-track {
    background: var(--scrollbarBG);
  }

*::-webkit-scrollbar-thumb {
    background-color: var(--thumbBG);
    border-radius: 6px;
    border: 3px solid var(--scrollbarBG);
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  
`;

export default GlobalStyle;
