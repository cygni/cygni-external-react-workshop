import React, { useState, useEffect } from "react";
import "./App.css";

export default function DateCountdownExercise() {
  const [goalDate, setNewDate] = useState(new Date());
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => setNow(new Date()), 1000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="container">
      <input
        type="date"
        onChange={event => setNewDate(new Date(event.target.value))}
      />
      <p>
        Det är {(goalDate - now) / (1000 * 3600 * 24)} dagar kvar till
        {goalDate.toLocaleDateString()}
      </p>
    </div>
  );
}
