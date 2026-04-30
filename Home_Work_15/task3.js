const axios = require('axios');

async function fetchUserData(userId) {
  try {
    const response = await axios.get(`https://api.example.com/users/${userId}`);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      status: error.response?.status,
    };
  }
}

async function createUser(userData) {
  try {
    const response = await axios.post('https://api.example.com/users', userData);
    return {
      success: true,
      userId: response.data.id,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      status: error.response?.status,
    };
  }
}

async function updateUser(userId, updateData) {
  try {
    const response = await axios.put(`https://api.example.com/users/${userId}`, updateData);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      status: error.response?.status,
    };
  }
}

async function deleteUser(userId) {
  try {
    const response = await axios.delete(`https://api.example.com/users/${userId}`);
    return {
      success: true,
      message: 'User deleted successfully',
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      status: error.response?.status,
    };
  }
}

async function fetchUserWithPosts(userId) {
  try {
    const [userResponse, postsResponse] = await Promise.all([
      axios.get(`https://api.example.com/users/${userId}`),
      axios.get(`https://api.example.com/users/${userId}/posts`),
    ]);

    return {
      success: true,
      user: userResponse.data,
      posts: postsResponse.data,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

module.exports = {
  fetchUserData,
  createUser,
  updateUser,
  deleteUser,
  fetchUserWithPosts,
};
