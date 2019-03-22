import React from 'react';
import { MyApp, AppLogo, AppHeader, AppLink } from './styles';
import logo from './logo.svg';

export default function App() {
  return (
    <MyApp>
      <AppHeader className="App-header">
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
        <AppLink
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          </AppLink>
      </AppHeader>
    </MyApp>
  );
}
