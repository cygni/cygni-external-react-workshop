import styled, { keyframes } from "styled-components";

export const MyApp = styled.div`
  * {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  text-align: center;
`;

export const Code = styled.code`
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
`;

export const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const AppLink = styled.a`
  color: #61dafb;
`;

export const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
  `;

export const rotateNegative360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
  `;

export const rotateNegative360OffsetHalf = keyframes`
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(-180deg);
  }
  `;



export const AppLogo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 10em;
  pointer-events: none;
`;


export const Orbit = styled.div`
  position: relative;
`

export const Heart = styled.img`
  position: absolute;
  margin-left: -11em;
  margin-top: -7em;
  height: 4em;
  pointer-events: none;
  transform-origin: 12em center;
  animation: ${rotateNegative360} 10s linear infinite;
`;


export const Cygni = styled.img`
  position: absolute;
  margin-left: -12em;
  margin-top: -7em;
  height: 4em;
  pointer-events: none;
  transform-origin: 12em center;
  animation: ${rotateNegative360OffsetHalf} 10s linear infinite;
`;

