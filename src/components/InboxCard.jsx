import React from "react";
import { ReactComponent as CheckIcon } from "./../assets/icons/check.svg";

const InboxCard = ({ chat, onClick, isSelected }) => {
  return (
    <div
      className={`w-full flex items-center gap-4 transition duration-300 rounded-xl py-3 pl-3 pr-4 cursor-pointer ${
        isSelected ? "bg-gray-200" : ""
      }`}
      onClick={onClick}
    >
      {/* Chat user image */}
      <div className="rounded-xl">
        <img
          src={chat.image}
          alt={chat.name}
          className="h-[60px] w-[60px] rounded-xl object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">{chat.name}</p>
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <div>
              <CheckIcon className="w-3 h-3 fill-current" />
            </div>
            <div>24m</div>
          </div>
        </div>
        {/* Chat message */}
        <div className="flex gap-2 text-xs">
          <span className="text-[#7678ed]">You:</span>
          <span className="flex-1 text-gray-400 truncate w-0">
            {chat.lastMessage}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InboxCard;
