import React, { useState } from "react";
import { MyApp, AppLogo, AppHeader, AppLink, Code } from "./styles";
import logo from "./logo.svg";
import "./App.css";
import ClickCounterExercise from "./CounterExercise";
import DateCountdownExercise from "./DateCountdownExercise";
import HumanfriendlyDateCountdownExercise from "./HumanfriendlyDateCountdownExercise";

export default function App() {
  return (
    <div>
      <ClickCounterExercise />
      <p>----------------------------</p>
      <DateCountdownExercise />
      <p>----------------------------</p>
      <HumanfriendlyDateCountdownExercise />
    </div>
  );
}
