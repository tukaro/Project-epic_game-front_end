import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
    font-display: swap;
    font-family: Brutal;
    font-weight: 300;
    src: local("Brutal Light"),local("Brutal-Light"),url(https://static-assets-prod.epicgames.com/static/fonts/brutal/Brutal-Light.woff2) format("woff2")
}

@font-face {
    font-display: swap;
    font-family: Brutal;
    font-weight: 400;
    src: local("Brutal Regular"),local("Brutal-Regular"),url(https://static-assets-prod.epicgames.com/static/fonts/brutal/Brutal-Regular.woff2) format("woff2")
}

@font-face {
    font-display: swap;
    font-family: Brutal;
    font-weight: 500;
    src: local("Brutal Medium"),local("Brutal-Medium"),url(https://static-assets-prod.epicgames.com/static/fonts/brutal/Brutal-Medium.woff2) format("woff2")
}

@font-face {
    font-display: swap;
    font-family: Brutal;
    font-weight: 700;
    src: local("Brutal Bold"),local("Brutal-Bold"),url(https://static-assets-prod.epicgames.com/static/fonts/brutal/Brutal-Bold.woff2) format("woff2")
}
  *, *::before, *::after{
    margin: 0;
    padding: 0;
  }
  body{
    font-family: 'Brutal', sans-serif;;
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
    letter-spacing: 0.2px;
    width: 100%;
    overflow-x: hidden;
  }
  @media (min-width: 1024px) and (max-width: 1279px) {
    body {
      font-size: 12px;
      line-height: 15px;
    }
  }
  @media (min-width: 1600px) {
    body {
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0;
    }
  }
  h1, h2, h3, h4, h5, h6{
    font-weight: normal;
    margin: 0;
  }

  a{
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  input, label, select, button, textarea {
    margin: 0;
    border: 0;
    padding: 0;
    display: inline-block;
    vertical-align: middle;
    white-space: normal;
    background: none;
    line-height: 1;
    font-family: Brutal, sans-serif;
    font-weight: 400;
    font-display: swap;
  }
  input, textarea {
      box-sizing: content-box;
  }
`

export default GlobalStyles