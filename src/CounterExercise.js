import React, { useState } from 'react';
import './App.css';

export default function ClickCounterExercise() {
  const [count, setCount] = useState(0);
  return (
    <section>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </section>
  );
}
