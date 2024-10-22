// import { io } from "socket.io-client";
// import { useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllChats from "./components/AllChats";
import Work from "./components/Work";
import Friends from "./components/Friends";
import Profile from "./components/Profile";

// const socket = io("http://localhost:5000");

function App() {
  // const [message, setMessage] = useState("");
  // const [chatMessages, setChatMessages] = useState([]);

  // useEffect(() => {
  //   socket.on("chat message", (msg) => {
  //     setChatMessages((prevMessages) => [...prevMessages, msg]);
  //   });

  //   // Cleanup socket connection on component unmount
  //   return () => {
  //     socket.off("chat message");
  //   };
  // }, []);

  // const handleMessageSend = (e) => {
  //   e.preventDefault();
  //   if (message.trim()) {
  //     socket.emit("chat message", message); // Emit message to server
  //     setMessage(""); // Clear the input
  //   }
  // };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllChats />} />
          <Route path="work" element={<Work />} />
          <Route path="friends" element={<Friends />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
