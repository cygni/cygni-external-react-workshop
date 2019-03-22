import React, { useState, useEffect } from 'react';
import { MyApp, AppLogo, AppHeader, AppLink, Code } from './styles';
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
      <CountdownCounter />
    </MyApp>
  );
}
