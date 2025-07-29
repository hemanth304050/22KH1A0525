const axios = require("axios");

async function log(stack, level, pkg, message, token) {
  try {
    await axios.post("http://20.244.56.144/evaluation-service/logs", {
      stack,
      level,
      package: pkg,
      message
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  } catch (error) {
    console.error("Logging failed:", error.response?.data || error.message);
  }
}

module.exports = log;
