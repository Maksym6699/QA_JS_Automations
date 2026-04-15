async function fetchTodo() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  return response.json();
}

async function fetchUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  return response.json();
}

async function main() {
  try {
    const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
    console.log('Promise.all results:');
    console.log('Todo:', todo);
    console.log('User:', user);

    const firstResult = await Promise.race([fetchTodo(), fetchUser()]);
    console.log('Promise.race result (first resolved):', firstResult);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
