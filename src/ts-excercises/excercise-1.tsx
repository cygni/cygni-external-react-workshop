import React from "react";

/* Intro:

    We are starting a small community of users. For performance
    reasons we have decided to store all users right in the code.
    This way we can provide our developers with more
    user-interaction opportunities. With user-related data, at least.
    All the GDPR-related issues we will solved some other day.
    This would be the base for our future experiments during
    these exercises.

Exercise:

    Given the data, define the interface "User" and use it accordingly.

*/

export type User = unknown;

export const users: unknown[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

// TODO: remove the comments in the code
export default function Excercise1() {
  return <div>
    <h2>TS Excercise 1</h2>
    {/* {users.map((user) => {
      return <div>{`Name: ${user.name}, Age: ${user.age}`}</div>
    })} */}
  </div>
}

/* In case if you are stuck:

// https://www.typescriptlang.org/docs/handbook/interfaces.html#introduction
*/
