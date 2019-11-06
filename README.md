# React-workshop för DataTjej med Cygni

React introduktionsworkshop med hooks och styled-components - https://datatjej.se/

Presentation: https://docs.google.com/presentation/d/1BNrUQVhDXeQ_qCnwo8XmwIlcrcmjJtoQ8Ql75lii_X8/edit?usp=sharing
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Förberedelser / För att komma igång
1. Börja med att klona detta repot eller ladda ner och sen unzippa det.
2. Installera [Visual Studio Code](https://code.visualstudio.com/) (eller annan lämplig IDE)
     * Installera plugin för styled component: Öppna Visual Studio Code, tryck `CTRL + P` och skriv in `ext install vscode-styled-components` 
3. Installera [NPM](https://github.com/cygni/cygni-datatjej-react/wiki/Installera-NPM)
4. Stå i projektmappen och skriv `npm install` i terminalen 
5. Skriv `npm start` i terminalen för att köra projektet

## Del 1 - React basics, komponenter, props och state

### Nybörjare
Följande övningar ska göras i filen 'CounterExercise.js'.

1. Skapa en räknare som kan räkna upp med knapptryck. I `App.css` finns några css-klasser som ni kan använda för att styla elementen. Använd `.container` för rootelementet, `.counter` för räknaren och `.button` samt `.increase-button` för knappen.
2. Lägg till en till knapp som låter användaren räkna ned. Använd css-klassen `.decrease-button` för styling.
3. Lägg till en tredje knapp som låter användaren nollställa räknaren. Använd css-klassen `.reset-button` för styling.

Exempel på resultat:<br>
<img src='counter.png'>

### Dabbler
Följande övningar ska göras i filen 'DateCountdownExercise.js'.

1. Skapa ett fält som visar hur lång tid det är kvar till en viss (förbestämd) tidpunkt, t.ex. nedräkning till julafton
2. Låt användaren ange datum som det räknas ned till

Exempel på resultat:
<img src='countdown.png'>

### Pro
Följande övning ska göras i filen 'DateCountdownExercise.js'

1. Uppdatera tiden som är kvar till angivet datum varje sekund med hjälp av useEffect().

Följande övning ska göras i filen 'HumanfriendlyDateCountdownExercise.js'.

2. Skapa en räknare likt uppgiften på Dabblernivå men formatera tiden till ett human-friendly format med exempelvis biblioteket [`moment`](https://momentjs.com/)

Exempel på resultat:
<img src='countdown-adv.png'>

## Del 2 - Styled components

### Nybörjare
Skapa de stylade komponenterna i filen 'style.js'.

1. Gör om elementet med css-klassen `.container` till en styled div
2. Gör om elementet med css-klassen `.counter` till en styled component som tar in en prop som bestämmer färgen på texten
3. Gör om alla knappar med css-klass `.button` till styled components. Ni kan behålla övriga css-klasser.
4. Gör om knappen med css-klassen `.reset-button` till en egen styled component som baseras på er button component

### Dabbler

1. Ge nu er button component en defaultfärg och gör det möjligt att skriva över den färgen med en prop. Färglägg increase button och decrease button, men låt reset button använda defaultfärgen.
2. Skapa en ny knappkomponent som förutom text även tar in en ikon som prop. Basera sedan er styliserade knappkomponent på denna istället. Tänk på att en egen komponent som ska gå att styla på detta vis måste ta in `className` som en prop.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
