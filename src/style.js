import { styled, keyframes } from "styled-components";

export const MyApp = styled.div`
  text-align: center;
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

