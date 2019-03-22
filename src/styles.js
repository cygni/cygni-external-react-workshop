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
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  margin-bottom: 2em;
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

export const AppLogo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 20vmin;
  pointer-events: none;
`;

