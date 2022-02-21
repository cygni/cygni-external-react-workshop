import React from "react";
import "./Counter.css";

export default function ReducerCounterExercise() {
  return <div className="container">
    <h3>ReducerCounterExercise</h3>
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
