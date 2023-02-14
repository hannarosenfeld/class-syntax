/*
Implement the following in the __classes/person.js__ file.

Create a class `Person` that has the following:

1. instance variables that include `firstName`, `lastName`, and `age`
2. an instance method called `introduce` that will introduce the person by using
   `console.log` with a string saying, "Hi, I'm `<firstName>` `<lastName>`, and
   I'm `<age>` years old.".
3. a static method called `introducePeople` that will take in an array of
   `Person` instances. Have the method `console.log` an error message of
   "introducePeople only takes an array as an argument." if the argument is not
   of type `Array`. Have the method `console.log` an error message of
   "All items in array must be Person class instances." if any of the items in
   the array are not instances of the `Person` class. If there are no errors
   logged to the console, call `introduce` on each of the `People` instances in
   the input array.

Run the test specs in the __test/person-spec.js__ file to test that you
have created the `Person` class correctly:

```shell
npm test
```
*/

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  }

  static introducePeople(people) {
    if (!typeof people === 'Array') {
      console.log("introducePeople only takes an array as an argument.");
    }

    for (let el of people) {
      if (!el instanceof Person) {
        console.log("All items in array must be Person class instances.");
      }
    }

    people.forEach(person => {person.introduce()})
  }
}

let hanna = new Person("hanna", "rosenfeld", 29)
let stefan = new Person("stefan", "winter", 29)

hanna.introduce();
Person.introducePeople([hanna, stefan])


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
