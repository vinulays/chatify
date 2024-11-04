import React, { useState } from "react";
import {
  PaperAirplaneIcon,
  MicrophoneIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import { PaperClipIcon } from "@heroicons/react/24/solid";

import InboxCard from "./InboxCard";
import ChatBubble from "./ChatBubble";
import socket from "../socket";

const AllChats = () => {
  const chats = [
    {
      id: 1,
      name: "Georgiana Aurax",
      image:
        "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      lastOnline: "7:30 a.m",
      messages: [
        "Hi!",
        "How are you?",
        "Let's meet on Monday.",
        "Let's meet on Monday.",
        "Let's meet on Monday.",
        "Let's meet on Monday.",
        "Let's meet on Monday.",
        "Let's meet on Monday.",
        "Let's meet on Monday.",
        "Let's meet on Monday.",
        "Let's meet on Monday.",
        "Let's meet on Monday.",
        "Let's meet on Monday.",
        "Let's meet on Monday.",
        "Let's meet on Monday.",
        "Let's meet on Monday.",
        "Let's meet on Monday.",
        "Let's meet on Monday.",
        "Let's meet on Monday.",
        "Let's meet on Monday.",
        "Let's meet on Monday.",
      ],
      lastMessage: "Let's meet on Monday.",
    },
    {
      id: 2,
      name: "John Doe",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      lastOnline: "8:45 a.m",
      messages: ["Hey!", "Are you coming to the meeting?", "Let me know."],
      lastMessage: "Let me know.",
    },
    {
      id: 3,
      name: "Jane Smith",
      image:
        "https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      lastOnline: "5:00 p.m",
      messages: ["Hello!", "I sent the document.", "Check it out."],
      lastMessage: "Check it out.",
    },
    // Add more chat data as needed
  ];

  const [selectedChat, setSelectedChat] = useState(chats[0]);

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <div className="flex  h-full">
      {/* Chat inbox */}
      <div className="flex flex-col flex-auto max-w-[320px]">
        {/* Search input */}
        <div className="flex items-center relative px-3">
          <MagnifyingGlassIcon className="w-5 h-5 absolute ml-3 text-gray-600" />
          <input
            type="text"
            placeholder="Search"
            className="border-none w-full outline-none pl-10 py-3 bg-[#DBDCFF] p-2 rounded-xl text-xs placeholder:text-[#202022]"
          />
        </div>
        {/* Chat inbox cards */}
        <div className="flex flex-col mt-3 scroll">
          {chats.map((chat) => (
            <InboxCard
              key={chat.id}
              chat={chat}
              isSelected={chat.id === selectedChat.id}
              onClick={() => handleChatSelect(chat)}
            />
          ))}
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex flex-1 flex-col px-10 justify-between">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <div className="text-2xl font-medium">{selectedChat.name}</div>
              <div className="text-sm text-gray-400">
                Last online at {selectedChat.lastOnline}
              </div>
            </div>
            <div className="flex gap-6">
              <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 cursor-pointer" />
              <PhoneIcon className="w-6 h-6  text-gray-600 cursor-pointer" />
              <EllipsisVerticalIcon className="w-6 h-6 text-gray-600 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto my-6 pr-2 scroll">
          {selectedChat.messages.map((message, index) => (
            <ChatBubble
              key={index}
              message={message}
              isSent={index % 2 === 0 ? true : false}
            />
          ))}
        </div>
        <div className="w-full">
          <div className="flex items-center relative">
            <PaperClipIcon className="w-5 h-5 absolute ml-3 fill-current text-gray-600 cursor-pointer" />

            <input
              type="text"
              placeholder="Your message"
              className="border-none w-full outline-none pl-11 pr-24 py-4 bg-[#EEEEF8] p-2 rounded-xl text-xs"
            />
            <div className="flex items-center gap-1 absolute right-6">
              <MicrophoneIcon className="w-5 h-5 ml-3  text-gray-600 cursor-pointer" />
              <PaperAirplaneIcon className="w-5 h-5 ml-3 text-gray-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllChats;
