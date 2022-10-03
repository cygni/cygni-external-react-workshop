import { Section } from "../components/Section";
import { useState } from "react";

export function Exercise4() {
	const renderedObjects = ["object1", "object2", "object3"];

	const [text, setText] = useState("");
	const [count, setCount] = useState(0);

	return (
		<Section>
			<h2>Testing page</h2>
			<div>
				{renderedObjects.map((x) => x)}
				<button data-testid="test-button" onClick={() => setText("")}>
					click me
				</button>
				<div>{text}</div>

				<input
					data-testid="test-input"
					value={count}
					name="test-input"
					onChange={(e) => setCount(e.target.value)}
				></input>
				<div type="number" data-testid="total">
					{count}
				</div>

				<div>Testing 1</div>
				<div>Testing 2</div>
			</div>
		</Section>
	);
}
