import React from "react";

const ChatBubble = ({ message, isSent }) => {
  return (
    <div className={`flex ${isSent ? "justify-end" : "justify-start"}`}>
      <div
        className={` p-3 rounded-lg mb-4 w-fit max-w-[80%] text-white text-sm ${
          isSent
            ? "bg-[#7678ED] rounded-br-none"
            : "bg-[#EEEEF8] rounded-bl-none text-gray-900"
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatBubble;
