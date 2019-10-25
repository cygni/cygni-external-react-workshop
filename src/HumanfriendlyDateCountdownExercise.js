import React, { useState, useEffect } from "react";
import moment from "moment";
import "./App.css";

export default function HumanfriendlyDateCountdownExercise() {
  const initialDate = "2019-12-24";
  const [goalDate, setNewDate] = useState(new moment(initialDate));
  const [now, setNow] = useState(new moment());

  useEffect(() => {
    const timer = setTimeout(() => setNow(new moment()), 1000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="container">
      <input
        type="date"
        onChange={event => setNewDate(new moment(event.target.value))}
      />
      <p>
        It's {moment.duration(goalDate.diff(now)).humanize()} to{" "}
        {goalDate.format("LL")}
      </p>
    </div>
  );
}
