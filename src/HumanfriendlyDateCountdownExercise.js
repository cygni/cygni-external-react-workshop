import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './App.css';

export default function HumanfriendlyDateCountdownExercise() {
  const [date, setDate] = useState(new moment());
  const [now, setNow] = useState(new moment());

  useEffect(() => {
    const timer = setTimeout(() => setNow(new moment()), 1000);
    return () => clearTimeout(timer);
  });

  return (
    <section>
      <input
        type="text"
        onChange={(e) => {
          setDate(new moment(e.target.value));
        }}
      />
      <p>
        It's {moment.duration(date.diff(now)).humanize()} to{' '}
        {moment(date).format('LL')}
      </p>
    </section>
  );
}
