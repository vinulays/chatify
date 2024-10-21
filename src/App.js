import "./App.css";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io("http://localhost:5000");

function App() {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    socket.on("chat message", (msg) => {
      setChatMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Cleanup socket connection on component unmount
    return () => {
      socket.off("chat message");
    };
  }, []);

  const handleMessageSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit("chat message", message); // Emit message to server
      setMessage(""); // Clear the input
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {chatMessages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <form onSubmit={handleMessageSend}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
