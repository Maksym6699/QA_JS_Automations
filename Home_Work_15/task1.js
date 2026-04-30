const axios = require('axios');

async function fetchDataFromInvalidUrl() {
  try {
    const response = await axios.get('https://invalid-url-that-does-not-exist-12345.com/api/data');
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    if (error.response) {
      return {
        success: false,
        errorMessage: `Server error: ${error.response.status}`,
        errorCode: error.response.status,
      };
    } else if (error.request) {
      return {
        success: false,
        errorMessage: 'No response received from server',
        errorCode: 'NO_RESPONSE',
      };
    } else {
      return {
        success: false,
        errorMessage: 'Request failed: ' + error.message,
        errorCode: 'REQUEST_FAILED',
      };
    }
  }
}

module.exports = {
  fetchDataFromInvalidUrl,
};
