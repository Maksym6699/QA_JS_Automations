const users = [
  { name: 'Lysi', email: 'lysi@example.com', age: 25 },
  { name: 'Bob', email: 'bob@example.com', age: 30 },
  { name: 'Vasya', email: 'vasya@example.com', age: 35 },
];

for (const { name, email, age } of users) {
  console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}
