const person = {
  firstName: 'Max',
  lastName: 'Smith',
  age: 25,
};

person.email = 'max.smith@gmail.com';

delete person.age;

console.log(person);
