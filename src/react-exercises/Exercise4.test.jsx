import React from "react";
import ReactDOM from "react-dom";
import { Exercise4 } from "./Exercise4";
import {
	render,
	screen,
	fireEvent,
	act,
	waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";

it("renders without crashing", () => {
	render(<Exercise4 />);
});

it("should render hello on page and call func when clicking button", async () => {
	render(<Exercise4 />);

	await act(async () => {
		fireEvent.click(screen.getByTestId("test-button"));
	});

	await waitFor(() => {
		expect(screen.getByText("Hello")).toBeInTheDocument();
	});
});

it("should change total when input is changed", async () => {
	render(<Exercise4 />);

	//Lägg till att testet sätter input värde
	await act(async () => {
		fireEvent.change(screen.getByTestId("test-input"), {
			target: { value: "10" },
		});
	});

	await waitFor(() => {
		expect(screen.getByTestId("total")).toHaveTextContent(10);
	});
});
