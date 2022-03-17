import "./Header.css";
import logo from "../logo.svg";

export const Header = () => (
  <header className="header">
    <img src={logo} className="react-logo" alt="logo" />
    <h1>React Workshop</h1>
  </header>
);