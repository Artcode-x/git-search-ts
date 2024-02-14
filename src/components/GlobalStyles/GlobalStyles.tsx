import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

:root {
  padding-left: calc(50% - 720px);
  padding-right: calc(50% - 720px);
}

body {
  background-color: gainsboro;
}

button {
    cursor: pointer;
}

`

export default GlobalStyles
