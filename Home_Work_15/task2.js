const axios = require('axios');

async function fetchDataWithHeadersAndParams(userId, customHeaders = {}) {
  try {
    const response = await axios.get('https://api.example.com/users', {
      params: {
        id: userId,
        format: 'json',
        timestamp: new Date().getTime(),
      },
      headers: {
        Authorization: 'Bearer token123',
        'X-Custom-Header': 'CustomValue',
        Accept: 'application/json',
        ...customHeaders,
      },
    });

    return {
      success: true,
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

async function getUserData(userId, apiKey, options = {}) {
  const config = {
    params: {
      user_id: userId,
      include_profile: options.includeProfile !== undefined ? options.includeProfile : true,
      include_posts: options.includePosts !== undefined ? options.includePosts : false,
    },
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'X-Request-ID': options.requestId || 'default-id',
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.get('https://api.example.com/user/profile', config);
    return response;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  fetchDataWithHeadersAndParams,
  getUserData,
};
