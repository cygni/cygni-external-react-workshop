import "./Exercise3.css";
import { Section } from "../components/Section";

// Skapa en att-göra-lista

export function Exercise3() {
  return (
    <Section>
      <h2>3. TODO: Lära sig React</h2>
      <form
        className={"form"}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type={"text"} placeholder={"Ny punkt"} />
        <button type={"submit"} className={"button"}>
          Lägg till
        </button>
        <button type={"button"} className={"button"}>
          Lägg till längst upp
        </button>
      </form>
      <ul className={"todo-list"}>
        <li>Flytta dessa punkter till en lista och rendera den listan</li>
        <li>Gör det möjligt att checka av punkter</li>
        <li>Gör det möjligt att lägga till nya punkter i listan</li>
        <li>Gör det möjligt att ta bort punkter</li>
        <li>Skriv ut antal saker att göra i webbläsarfliken</li>
        <li>
          Skapa en egen hook som skriver ut saker att göra i webbläsarfliken
        </li>
      </ul>
    </Section>
  );
}
