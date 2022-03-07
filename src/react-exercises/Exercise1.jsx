import "./Exercise1.css";
import { Section } from "../components/Section";

// Skapa en enkel räknare

export function Exercise1() {
  return (
    <Section>
      <h2>1. Räkna med state</h2>
      <div className={"counter-container"}>
        <button className={"button counter-button"}>-</button>
        <span className={"counter"}>0</span>
        <button className={"button counter-button"}>+</button>
      </div>
    </Section>
  );
}
