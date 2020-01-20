import React, { useState } from 'react';
import { Container, Counter, Button, ResetButton } from './styles';
import './App.css';

export default function ClickCounterExercise() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Counter color="hotpink">{count}</Counter>
      <Button
        bgColor="#0f93bb"
        color="white"
        onClick={() => setCount(count + 1)}
      >
        +
      </Button>
      <Button
        bgColor="#ce93db"
        color="white"
        onClick={() => setCount(count - 1)}
      >
        -
      </Button>
      <ResetButton icon="👻" onClick={() => setCount(0)}>
        Reset
      </ResetButton>
    </Container>
  );
}
