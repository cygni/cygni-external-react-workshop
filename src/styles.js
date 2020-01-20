import styled, { keyframes } from 'styled-components';
import React from 'react';

export const MyApp = styled.div`
  * {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  text-align: center;
`;

export const Code = styled.code`
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
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

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Counter = styled.h2`
  font-size: 8em;
  flex-grow: 1;
  text-align: center;
  flex: 100%;
  color: ${(props) => props.color};
`;

export const Button = styled.button`
  border-radius: 3px;
  background-color: white;
  margin: 1em;
  padding: 0.25em 1em;
  min-width: 25px;
  max-width: 50px;
  flex: auto;
`;
