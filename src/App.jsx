import React from "react";
import "./App.css";
import ClickCounterExercise from "./react-exercises/exercise-1";
import ReducerCounterExercise from "./react-exercises/exercise-2";
import DateCountdownExercise from "./react-exercises/DateCountdownExercise";
import HumanfriendlyDateCountdownExercise from "./react-exercises/HumanfriendlyDateCountdownExercise";

export default function App() {
	return (
		<section>
			<h2 className="section-heading">
				React Exercises
			</h2>
			<ClickCounterExercise />
			<ReducerCounterExercise />
			<DateCountdownExercise />
			<HumanfriendlyDateCountdownExercise />
		</section>
	);
}