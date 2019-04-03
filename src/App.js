import React from "react";
import { MyApp, AppHeader, Code, HeartBeat, Row, SizedImage } from "./styles";
import dataTjejLogo from "./datatjej-logo.png";
import love from "./love.png";
import cygniLogo from "./cygni-vit.png";

import "./App.css";

export default function App() {
  return (
    <MyApp>
      <AppHeader>
        <div>
          <div>
            <SizedImage src={cygniLogo} alt="Cygni" />
          </div>
          <Row>
            <HeartBeat><SizedImage src={love} alt="loves" /></HeartBeat>
            <SizedImage src={dataTjejLogo} alt="DataTjej" height="6em" />
          </Row>
        </div>
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
