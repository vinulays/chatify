const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const messageRoutes = require("./routes/messageRoutes");

const verifyToken = require("./middlewares/authMiddleWare");

const http = require("http");
const { Server } = require("socket.io");
const connectDB = require("./config/db");
const Message = require("./models/Message");

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions));

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // React app URL
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");

  // * Listen for chat messages and broadcast to all clients
  socket.on("sendMessage", async (data) => {
    const { sender, receiver, content } = data;

    const message = new Message({ sender, receiver, content });
    // * saving the message to the database
    await message.save();

    // * emitting the message to the receiver id
    io.emit(`receiveMessage_${receiver}`, message);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

connectDB();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Protected route example
app.get("/api/protected", verifyToken, (req, res) => {
  res.send("This is a protected route.");
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
