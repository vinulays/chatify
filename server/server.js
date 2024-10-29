const express = require("express");
const jwtConfig = require("./config/jwtConfig"); // Import JWT config
const authRoutes = require("./routes/authRoutes");
const jwt = require("jsonwebtoken");

const http = require("http");
const { Server } = require("socket.io");
const connectDB = require("./config/db");

const app = express();
const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000", // React app URL
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {
//   console.log("A user connected");

//   // Listen for chat messages and broadcast to all clients
//   socket.on("chat message", (msg) => {
//     io.emit("chat message", msg);
//   });

//   // Handle user disconnect
//   socket.on("disconnect", () => {
//     console.log("A user disconnected");
//   });
// });

connectDB();

app.use("/api/auth", authRoutes);

function verifyToken(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).send("Access denied. No token provided.");

  jwt.verify(token.split(" ")[1], jwtConfig.secret, (err, decoded) => {
    if (err) return res.status(401).send(err);
    req.user = decoded;
    next();
  });
}

// Protected route example
app.get("/api/protected", verifyToken, (req, res) => {
  res.send("This is a protected route.");
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
