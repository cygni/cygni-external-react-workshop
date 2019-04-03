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

export const SizedImage = styled.img`
  height: ${props => props.height || "4em"};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const heartbeat = keyframes`
  {
    0%
    {
      transform: scale( .75 );
    }
    20%
    {
      transform: scale( 1 );
    }
    40%
    {
      transform: scale( .75 );
    }
    60%
    {
      transform: scale( 1 );
    }
    80%
    {
      transform: scale( .75 );
    }
    100%
    {
      transform: scale( .75 );
    }
  }
`;

export const HeartBeat = styled.div`
  animation: ${heartbeat} 1s infinite;
`;
