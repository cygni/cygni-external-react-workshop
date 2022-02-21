import React from "react";
import "./Counter.css";

export default function ClickCounterExercise() {
  return <div className="container">
    <h3>ClickCounterExercise</h3>
    <div className="counter">
      0
    </div>
    <div>
      <button className="button decrease-button">
        -
      </button>
      <button className="button increase-button">
        +
      </button>
    </div>
    <button className="button reset-button">
      Reset
    </button>
  </div>;
}
