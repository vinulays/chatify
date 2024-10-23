import React from "react";
import { ReactComponent as SearchIcon } from "./../assets/icons/search.svg";

const AllChats = () => {
  return (
    <div className="flex">
      {/* Chat inbox */}
      <div className="flex w-full flex-col">
        {/* Search input */}
        <div className="flex items-center relative max-w-[300px]">
          <SearchIcon className="w-5 h-5 absolute ml-3" />
          <input
            type="text"
            placeholder="Search"
            className="border-none w-full outline-none pl-10 py-3 bg-[#DBDCFF] p-2 rounded-xl text-xs placeholder:text-[#202022]"
          />
        </div>
        {/* Chat inbox cards */}
        <div></div>
      </div>

      {/* Chat messages */}
      <div></div>
    </div>
  );
};

export default AllChats;
