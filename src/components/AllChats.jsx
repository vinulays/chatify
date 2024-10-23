import React from "react";
import { ReactComponent as SearchIcon } from "./../assets/icons/search.svg";
import InboxCard from "./InboxCard";

const AllChats = () => {
  return (
    <div className="flex">
      {/* Chat inbox */}
      <div className="flex flex-col w-full">
        {/* Search input */}
        <div className="flex items-center relative max-w-[320px] px-3">
          <SearchIcon className="w-5 h-5 absolute ml-3 fill-current text-gray-600" />
          <input
            type="text"
            placeholder="Search"
            className="border-none w-full outline-none pl-10 py-3 bg-[#DBDCFF] p-2 rounded-xl text-xs placeholder:text-[#202022]"
          />
        </div>
        {/* Chat inbox cards */}
        <div className="flex flex-col max-w-[320px] mt-3">
          <InboxCard />
          <InboxCard />
          <InboxCard />
          <InboxCard />
          <InboxCard />
          <InboxCard />
          <InboxCard />
          <InboxCard />
          <InboxCard />
        </div>
      </div>

      {/* Chat messages */}
      <div></div>
    </div>
  );
};

export default AllChats;
