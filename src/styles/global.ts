import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100vh;
    width: 100%;
    font: 400 16px Roboto, sans-serif;
    background: #f2f2f2;
    color: #000;
  }
  *, button, input {
    border: 0;
    background: none;
  }

`
