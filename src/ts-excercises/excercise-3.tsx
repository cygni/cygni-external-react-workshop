/*

Intro:

    Since we already have some of the additional
    information about our users, it's a good idea
    to output it in a nice way.

Exercise:

    Fix type errors in logPerson function.

    logPerson function should accept both User and Admin
    and should output relevant information according to
    the input: occupation for User and role for Admin.

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

export type Person = User | Admin;

export const persons: Person[] = [
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
];

// TODO: remove the comments in the code
export default function Excercise3() {
  return <div>
    <h4>TS Excercise 3</h4>
    {/* {persons.map((person) => {
      let additionalInformation: string;
      if (person.role) {
          additionalInformation = person.role;
      } else {
          additionalInformation = person.occupation;
      }
      return <div>{`Name: ${person.name}, Age: ${person.age}, Additional Information: ${additionalInformation}`}</div>
    })} */}
  </div>
}

// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#using-the-in-operator
