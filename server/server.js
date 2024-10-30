const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const verifyToken = require("./middlewares/authMiddleWare");

const http = require("http");
const { Server } = require("socket.io");
const connectDB = require("./config/db");

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions));

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

app.use(express.json());
app.use("/api/auth", authRoutes);

// Protected route example
app.get("/api/protected", verifyToken, (req, res) => {
  res.send("This is a protected route.");
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
