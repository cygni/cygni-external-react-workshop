import React, { useState, useEffect, useReducer } from "react";
import {
  AppLogo,
  AppHeader,
  AppLink,
  Button,
  Code,
  Container,
  Count,
  MyApp,
  ResetButton
} from "./styles";
import moment from "moment";
import "./App.css";
import logo from "./logo.svg";

const Counter = props => {
  const [count, setCounter] = useState(props.initialCount || 0);

  return (
    <Container>
      <Count color="#09cdda">{count}</Count>
      <Button color={"#0f93bb"} onClick={() => setCounter(count + 1)}>
        +
      </Button>
      <Button color={"#ce93db"} onClick={() => setCounter(count - 1)}>
        -
      </Button>
      <ResetButton onClick={() => setCounter(props.initialCount || 0)}>
        Reset
      </ResetButton>
    </Container>
  );
};

const CountdownCounter = () => {
  const [goalDate, setGoalDate] = useState(new Date("2019-12-24"));
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => setNow(new Date()), 1000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div>
      <input
        type="date"
        onChange={e => setGoalDate(new Date(e.target.value))}
      />
      <div>
        Det är {(goalDate - now) / (3600 * 24 * 1000)} dagar till{" "}
        {goalDate.toLocaleDateString()}
      </div>
    </div>
  );
};

const CountdownHumanFriendlyCounter = () => {
  const initialDate = "2019-12-24";
  const [goalDate, setGoalDate] = useState(new moment(initialDate));
  const [now, setNow] = useState(new moment());

  useEffect(() => {
    const timer = setTimeout(() => setNow(new moment()), 1000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div>
      <input
        type="date"
        onChange={e => setGoalDate(new moment(e.target.value))}
      />
      <div>
        It's {moment.duration(goalDate.diff(now)).humanize()} to{" "}
        {goalDate.format("LLLL")}
      </div>
    </div>
  );
};

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
}

const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Container>
      <Count color="#09cdda">{state.count}</Count>
      <Button color={"#0f93bb"} onClick={() => dispatch({ type: "increment" })}>
        +
      </Button>
      <Button color={"#ce93db"} onClick={() => dispatch({ type: "decrement" })}>
        -
      </Button>
      <ResetButton onClick={() => dispatch({ type: "reset" })}>
        Reset
      </ResetButton>
    </Container>
  );
};

export default function App() {
  return (
    <MyApp>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <Code>src/App.js</Code> and save to reload.
        </p>
        <AppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>

      {<Counter />}
      {<CounterWithReducer />}
      {<CountdownCounter />}
      {<CountdownHumanFriendlyCounter />}
    </MyApp>
  );
}
