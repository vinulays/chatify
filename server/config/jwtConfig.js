// config/jwtConfig.js
require("dotenv").config();

module.exports = {
  secret: process.env.JWT_SECRET || "your-default-secret-key", // Fallback in case the environment variable is missing
  options: {
    expiresIn: "1h", // Token expiration time
    algorithm: "HS256", // Hashing algorithm for JWT
  },
};
