import React from "react";
import {
  PaperAirplaneIcon,
  MicrophoneIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import { PaperClipIcon } from "@heroicons/react/24/solid";

import InboxCard from "./InboxCard";

const AllChats = () => {
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
      <div className="flex flex-1 flex-col px-10 justify-between">
        <div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <div className="text-2xl font-medium">Georgiana Aurax</div>
              <div className="text-sm text-gray-400">
                Last online at 7.30 a.m
              </div>
            </div>
            <div className="flex gap-6">
              <MagnifyingGlassIcon className="w-6 h-6 text-gray-600 cursor-pointer" />
              <PhoneIcon className="w-6 h-6  text-gray-600 cursor-pointer" />
              <EllipsisVerticalIcon className="w-6 h-6 text-gray-600 cursor-pointer" />
            </div>
          </div>
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
