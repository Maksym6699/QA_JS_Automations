const axios = require('axios');

axios.interceptors.request.use(
  (config) => {
    console.log('Request:', config.method.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) => {
    console.log('Response:', response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error('Response Error:', error.response ? error.response.status : error.message);
    return Promise.reject(error);
  },
);

async function makeRequests() {
  try {
    // Запит 1: GET /posts
    console.log('\n--- Запит 1: GET /posts ---');
    const response1 = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.assert(response1.status === 200, 'Status should be 200');
    console.assert(Array.isArray(response1.data), 'Data should be an array');
    console.assert(response1.data.length > 0, 'Array should not be empty');
    console.assert(response1.data[0].hasOwnProperty('id'), 'First item should have id');
    console.assert(response1.data[0].hasOwnProperty('title'), 'First item should have title');
    console.assert(response1.data[0].hasOwnProperty('body'), 'First item should have body');
    console.assert(response1.data[0].hasOwnProperty('userId'), 'First item should have userId');
    console.log('Перевірка пройшла успішно');

    // Запит 2: GET /posts/1
    console.log('\n--- Запит 2: GET /posts/1 ---');
    const response2 = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.assert(response2.status === 200, 'Status should be 200');
    console.assert(typeof response2.data === 'object', 'Data should be an object');
    console.assert(response2.data.id === 1, 'ID should be 1');
    console.assert(response2.data.hasOwnProperty('title'), 'Should have title');
    console.assert(response2.data.hasOwnProperty('body'), 'Should have body');
    console.assert(response2.data.hasOwnProperty('userId'), 'Should have userId');
    console.log('Перевірка пройшла успішно');

    // Запит 3: GET /users
    console.log('\n--- Запит 3: GET /users ---');
    const response3 = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.assert(response3.status === 200, 'Status should be 200');
    console.assert(Array.isArray(response3.data), 'Data should be an array');
    console.assert(response3.data.length > 0, 'Array should not be empty');
    console.assert(response3.data[0].hasOwnProperty('id'), 'First user should have id');
    console.assert(response3.data[0].hasOwnProperty('name'), 'First user should have name');
    console.assert(response3.data[0].hasOwnProperty('email'), 'First user should have email');
    console.log('Перевірка пройшла успішно');

    // Запит 4: POST /posts
    console.log('\n--- Запит 4: POST /posts ---');
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    const response4 = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
    console.assert(response4.status === 201, 'Status should be 201');
    console.assert(typeof response4.data === 'object', 'Data should be an object');
    console.assert(response4.data.hasOwnProperty('id'), 'Should have id');
    console.assert(response4.data.title === 'foo', 'Title should match');
    console.assert(response4.data.body === 'bar', 'Body should match');
    console.assert(response4.data.userId === 1, 'UserId should match');
    console.log('Перевірка пройшла успішно');

    // Запит 5: POST /comments
    console.log('\n--- Запит 5: POST /comments ---');
    const newComment = {
      name: 'Test Comment',
      email: 'test@example.com',
      body: 'This is a test comment',
      postId: 1,
    };
    const response5 = await axios.post('https://jsonplaceholder.typicode.com/comments', newComment);
    console.assert(response5.status === 201, 'Status should be 201');
    console.assert(typeof response5.data === 'object', 'Data should be an object');
    console.assert(response5.data.hasOwnProperty('id'), 'Should have id');
    console.assert(response5.data.name === 'Test Comment', 'Name should match');
    console.assert(response5.data.email === 'test@example.com', 'Email should match');
    console.assert(response5.data.body === 'This is a test comment', 'Body should match');
    console.assert(response5.data.postId === 1, 'PostId should match');
    console.log('Перевірка пройшла успішно');

    console.log('\nВсі запити виконані успішно!');
  } catch (error) {
    console.error('Помилка:', error.message);
  }
}

makeRequests();
