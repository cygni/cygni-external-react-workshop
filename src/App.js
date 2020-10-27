import React from "react";
import "./App.css";
import ClickCounterExercise from "./CounterExercise";
import ReducerCounterExercise from "./ReducerCounterExercise";
import DateCountdownExercise from "./DateCountdownExercise";
import HumanfriendlyDateCountdownExercise from "./HumanfriendlyDateCountdownExercise";

export default function App() {
	return (
		<div>
			<ClickCounterExercise />
			<ReducerCounterExercise />
			<DateCountdownExercise />
			<HumanfriendlyDateCountdownExercise />
		</div>
	);
}
