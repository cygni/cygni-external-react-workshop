import React from "react";
import { MyApp, AppLogo, AppHeader, AppLink, Code } from "./styles";
import logo from "./logo.svg";
import "./App.css";

/* Att använda i Del 1
<div className="container">
<span className="counter">count</erspan>
<button
  className="button increase-button"
>
  +
</button>
<button
  className="button decrease-button"
>
  -
</button>
<button
  className="button reset-button"
>
  Reset
</button>
</div>
*/

export default function App() {
  return (
    <MyApp>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <Code>src/App.js</Code> and save to reload.
        </p>
        <AppLink
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
