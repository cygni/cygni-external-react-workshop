import React from "react";
import { MyApp, AppLogo, AppHeader, Code, Heart, Orbit, Cygni } from "./styles";
import logo from "./datatjej-logo.png";
import love from "./love.png";
import cygniFav from "./cygni-fav.png";

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
        <Orbit>
          <Heart src={love} />
          <Cygni src={cygniFav} />
        </Orbit>
        <p>
          Edit <Code>src/App.js</Code> and save to reload.
        </p>
        <div>
          Put your code here (in App.js)
        </div>
      </AppHeader>
    </MyApp>
  );
}
