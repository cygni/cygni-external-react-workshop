import React, { useState } from 'react';
import './App.css';

export default function ClickCounterExercise() {
  const [count, setCount] = useState(0);

  return (
    <section className="container">
      <h2 className="counter">{count}</h2>
      <button
        className="button increase-button"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <button
        className="button decrease-button"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <button className="button reset-button" onClick={() => setCount(0)}>
        Reset
      </button>
    </section>
  );
}
