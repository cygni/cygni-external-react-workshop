import React, { useState } from "react";
import "./App.css";
import { Container, Counter, Button, ResetButton } from "./styles";

export default function ClickCounterExercise() {
  const [count, setCount] = useState(0);
  return (
    <Container>
      <Counter color="pink">
        <p> {count}</p>
        <Button
          as="button"
          type="button"
          color={"turquoise"}
          onClick={() => setCount(count + 1)}
        >
          +
        </Button>
        <Button
          primary
          as="button"
          type="button"
          color={"black"}
          onClick={() => setCount(count - 1)}
        >
          -
        </Button>
        <ResetButton
          as="button"
          type="button"
          icon="👻"
          onClick={() => setCount(0)}
        >
          Reset
        </ResetButton>
      </Counter>
    </Container>
  );
}
