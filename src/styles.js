import styled, { keyframes } from "styled-components";
import React from "react";

export const MyApp = styled.div`
  * {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
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

export const AppLogo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Counter = styled.div`
  color: ${props => props.color || "green"};
  font-size: 8em;
  flex-grow: 1;
  flex: 100%;
`;

const IconButton = ({ className, icon, children }) => (
  <button className={className}>
    {icon && <span>{icon}</span>}
    {children}
  </button>
);

export const Button = styled(IconButton)`
  background-color: white;
  border-radius: 3px;
  border: 2px solid ${props => props.color || "#a9a9a9"};
  color: ${props => props.color || "#a9a9a9"};
  margin: 1em;
  padding: 0.25em 1em;
  min-width: 25px;
  max-width: 50px;
  flex: auto;
`;

export const ResetButton = styled(Button)`
  flex: 100%;
  max-width: 150px;
`;
