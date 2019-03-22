import React, { useState, useEffect, useReducer } from 'react';
import { MyApp, AppLogo, AppHeader, AppLink, Code } from './styles';
import moment from 'moment';
import logo from './logo.svg';

const Counter = props => {
  const [count, setCounter] = useState(props.initialCount || 0)

  return <div>
    <span>{count}</span>
    <button onClick={() => setCounter(count + 1)}>+</button>
    <button onClick={() => setCounter(count - 1)}>-</button>
    <button onClick={() => setCounter(props.initialCount || 0)}>Reset</button>
  </div>

}

const CountdownCounter = () => {

  const [goalDate, setGoalDate] = useState(new Date('2019-12-24'))
  const [now, setNow] = useState(new Date())

  useEffect(
    () => {
      const timer = setTimeout(() => setNow(new Date()), 1000)
      return () => {
        clearTimeout(timer)
      }
    }
  )

  return <div>
    <input type='date' onChange={e => setGoalDate(new Date(e.target.value))} />
    <div>Det är {(goalDate - now) / (3600 * 24 * 1000)} dagar till {goalDate.toLocaleDateString()}</div >
  </div>

}

const CountdownHumanFriendlyCounter = () => {
  const initialDate = '2019-12-24'
  const [goalDate, setGoalDate] = useState(new moment(initialDate))
  const [now, setNow] = useState(new moment())

  useEffect(
    () => {
      const timer = setTimeout(() => setNow(new moment()), 1000)
      return () => {
        clearTimeout(timer)
      }
    }
  )

  return <div>
    <input type='date' onChange={e => setGoalDate(new moment(e.target.value))} />
    <div>It's {moment.duration(goalDate.diff(now)).humanize()} to {goalDate.format('LLLL')}</div >
  </div>
}

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}


export default function App() {
  return (
    <MyApp>
      <AppHeader className="App-header">
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <Code>src/App.js</Code> and save to reload.
          </p>
        <AppLink
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>

      {/*<Counter />*/}
      {/*<CountdownHumanFriendlyCounter />*/}
      <CounterWithReducer />
    </MyApp>
  );
}
