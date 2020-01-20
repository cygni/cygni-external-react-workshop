import React, { useState, useEffect } from 'react';
import './App.css';

export default function DateCountdownExercise() {
  const [date, setDate] = useState(new Date());
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => setNow(new Date()), 1000);
    return () => clearTimeout(timer);
  });

  const countDownToDate = (givenDate) => {
    return (givenDate - now) / (1000 * 3600 * 24);
  };

  return (
    <section>
      <input
        type="text"
        onChange={(e) => {
          setDate(new Date(e.target.value));
        }}
      />
      <p>
        Det är {countDownToDate(date)} dagar kvar till{' '}
        {date.toLocaleDateString()}
      </p>
    </section>
  );
}
