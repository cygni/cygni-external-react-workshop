import React, { useState } from 'react';
import './App.css';

export default function ClickCounterExercise() {
  const [count, setCount] = useState(0);
  return (
    <section>
      <h1>CounterExercise</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </section>
  );
}
