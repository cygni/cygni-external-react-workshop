import React from "react";

/*

Intro:

    All 2 users liked the idea of the community. We should go
    forward and introduce some order. We are in Germany after all.
    Let's add a couple of admins.

    Initially we only had users in the in-memory database. After
    introducing Admins, we need to fix the types so that
    everything works well together.

Exercise:

    Type "Person" is missing, please define it and use
    it in persons array and logPerson function in order to fix
    all the TS errors.

*/

interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

export type Person = unknown;

/* const persons: User[] = [
  {
      name: 'Max Mustermann',
      age: 25,
      occupation: 'Chimney sweep'
  },
  {
      name: 'Jane Doe',
      age: 32,
      role: 'Administrator'
  },
  {
      name: 'Kate Müller',
      age: 23,
      occupation: 'Astronaut'
  },
  {
      name: 'Bruce Willis',
      age: 64,
      role: 'World saver'
  }
]; */

// TODO: remove the comments in the code
export default function Excercise2() {
  return <div>
    <h2>TS Excercise 2</h2>
    {/* {persons.map((person) => {
      return <div>{`Name: ${person.name}, Age: ${person.age}`}</div>
    })} */}
  </div>
}

// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types
