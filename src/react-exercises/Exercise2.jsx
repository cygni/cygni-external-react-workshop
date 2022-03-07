import "./Exercise2.css";
import { Section } from "../components/Section";

// Använd två räknare och visa summan av dem

export function Exercise2() {
  return (
    <Section>
      <h2>2. Räkna med props</h2>
      <div className={"counters-container"}>{/* Lägg dina räknare här */}</div>
      <div className={"counter-sum"}>0</div>
    </Section>
  );
}
