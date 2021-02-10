import React from "react";
import "./App.css";
import ClickCounterExercise from "./react-excercises/CounterExercise";
import ReducerCounterExercise from "./react-excercises/ReducerCounterExercise";
import DateCountdownExercise from "./react-excercises/DateCountdownExercise";
import HumanfriendlyDateCountdownExercise from "./react-excercises/HumanfriendlyDateCountdownExercise";

import Excercise1 from './ts-excercises/excercise-1'
import Excercise2 from './ts-excercises/excercise-2'
import Excercise3 from './ts-excercises/excercise-3'
import Excercise4 from './ts-excercises/excercise-4'
import Excercise5 from './ts-excercises/excercise-5'

export default function App() {
	return (<>
		{/* PART 1 - REACT EXCERCISES */}
		<div>
			<h2>React Excercises</h2>
			<ClickCounterExercise />
			<ReducerCounterExercise />
			<DateCountdownExercise />
			<HumanfriendlyDateCountdownExercise />
		</div>

		{/* PART 2 - TS EXERCISES */}
		<div>
			<h2>TS Excercises</h2>
			<Excercise1 />
			<Excercise2 />
			<Excercise3 />
			<Excercise4 /> 
			<Excercise5 />
		</div>
	</>
	);
}