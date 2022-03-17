import "./App.css";
import { Header } from "./components/Header";
import { Exercise1 } from "./react-exercises/Exercise1";
import { Exercise2 } from "./react-exercises/Exercise2";
import { Exercise3 } from "./react-exercises/Exercise3";

function App() {
  return (
    <div className="app">
      <Header />
      <Exercise1 />
      <Exercise2 />
      <Exercise3 />
    </div>
  );
}

export default App;
