class ApiService {
  async fetchTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return response.json();
  }

  async fetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    return response.json();
  }
}

class PromiseHandler {
  async handleAll(apiService) {
    const [todo, user] = await Promise.all([apiService.fetchTodo(), apiService.fetchUser()]);
    return { todo, user };
  }

  async handleRace(apiService) {
    return await Promise.race([apiService.fetchTodo(), apiService.fetchUser()]);
  }
}

async function main() {
  const apiService = new ApiService();
  const promiseHandler = new PromiseHandler();

  try {
    const allResults = await promiseHandler.handleAll(apiService);
    console.log('Promise.all results:');
    console.log('Todo:', allResults.todo);
    console.log('User:', allResults.user);

    const raceResult = await promiseHandler.handleRace(apiService);
    console.log('Promise.race result (first resolved):', raceResult);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
