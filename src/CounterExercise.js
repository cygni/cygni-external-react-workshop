import React, { useState } from 'react';
import { Container, Counter, Button, ResetButton } from './styles';
import './App.css';

export default function ClickCounterExercise() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Counter color="hotpink">{count}</Counter>
      <Button className="increase-button" onClick={() => setCount(count + 1)}>
        +
      </Button>
      <Button className="decrease-button" onClick={() => setCount(count - 1)}>
        -
      </Button>
      <ResetButton onClick={() => setCount(0)}>Reset</ResetButton>
    </Container>
  );
}
