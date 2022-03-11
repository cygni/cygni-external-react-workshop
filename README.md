# React-workshop med Cygni

## Förberedelser / För att komma igång

1. Klona detta repo eller ladda ner och unzippa det.
2. Installera [Visual Studio Code](https://code.visualstudio.com/) (eller annan lämplig IDE)
3. [Installera node och npm](https://github.com/cygni/cygni-external-react-workshop/wiki/Installera-NPM)
4. Stå i projektmappen och skriv `npm install` i terminalen
5. Skriv `npm start` i terminalen för att köra projektet

## Workshop

Övningarna hittar du i mappen `react-exercises`.

### Övning 1. Räkna med state

Vi börjar med att skapa en enkel räknare.

- Använd hooken `useState` för att lagra räknarens värde. Börja med värdet 0.
- För att skriva ut variabelns värde i html:en omger vi den med måsvingar, t ex `{count}`.
- Öka värdet med 1 när man klickar på plusknappen. Använd knappens `onClick` för att kalla på funktionen som ändrar
  värdet.
- Minska värdet med 1 när man klickar på minusknappen.

### Övning 2. Räkna med props

Nu vill vi ha två räknare och summera värdena från dem.

- Tänk komponenter. Kan vi återanvända koden från förra övningen? Skapa två räknare.
- En räknare känner bara till sitt eget värde. Hur räknar vi ut summan?
- Med props kan vi hålla koll på värdena på nivån ovanför räknarna, dvs i förälderkomponenten.
- Använd hooken `useState` en gång per räknare för att lagra värdena. Nu kan du lätt summera värdena och skriva ut
  summan.
- Använd props för att skicka in värdet och funktionen för att uppdatera värdet till motsvarande räknare. Du kan ge dem
  vilka namn du vill. En bra konvention är att ge props som är funktioner ett namn som börjar med "on",
  tex `onCountChange`.
- Hantera dina props i räknarna precis som du hanterade state i förra uppgiften.

### Övning 3. TODO: Lära sig React

Skapa en att-göra-lista.

- Flytta punkterna i html-listan till en array. Rendera arrayen mha funktionen `map`. Glöm inte att varje element
  behöver en unik `key` prop (eller testa att glömma och se hur React påminner dig genom att klaga i konsolen). Använd
  måsvingar för att exekvera javascript-kod i html:en.

```jsx
{
  items.map(item => <li key={item}>{item}</li>)
}
```

- Gör det möjligt att checka av punkter, t ex genom att lägga till en `<input type="checkbox" />`.
- Gör det möjligt att lägga till nya punkter i listan. Använd kunskapen från föregående övningar för att spara värdet
  från textrutan när man klickar på knappen.
- Gör det möjligt att ta bort punkter, t ex genom att lägga till en knapp. Du kan använda css-klassen `remove-button`
  för att styla den.
- Skriv ut antal saker att göra i webbläsarfliken. Använd hooken `useEffect` för att lyssna på förändringar i listan.
  Uppdatera titeln med `document.title = "Ny titel"`.
- Skapa en egen hook som skriver ut saker att göra i webbläsarfliken. Namnet på din hook bör börja med "use" för att
  visa att det är en hook, t ex `useTodoTitle`.

## Lär dig mer

Kolla in [Reacts dokumentation](https://reactjs.org/).

Små "kata"-övningar för att lära sig React:
[React Katas](https://www.codewars.com/collections/react-katas).
