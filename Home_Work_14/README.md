# Home Work 14

This project demonstrates making HTTP requests to JSONPlaceholder API using Axios.

## Installation

```bash
npm install
```

## Usage

Run the script to execute 5 requests (3 GET, 2 POST) with response validation:

```bash
npm start
```

The script includes Axios interceptors for logging all requests and responses.

## Requirements

- Node.js
- Axios library

## API Used

- JSONPlaceholder: https://jsonplaceholder.typicode.com/

Requests:

1. GET /posts - Retrieves all posts
2. GET /posts/1 - Retrieves a specific post
3. GET /users - Retrieves all users
4. POST /posts - Creates a new post
5. POST /comments - Creates a new comment

Each request includes validation of response status and data structure according to the API documentation.
