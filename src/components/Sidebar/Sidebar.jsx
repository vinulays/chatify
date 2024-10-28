import React from "react";
import { Link } from "react-router-dom";

import {
  ChatBubbleLeftIcon,
  FolderIcon,
  UserGroupIcon,
  PhoneIcon,
  UserIcon,
  PencilSquareIcon,
  ArrowLeftEndOnRectangleIcon,
} from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <div className="text-[#f9fafc] py-4 pl-1.5 flex flex-col justify-around min-h-screen gap-12">
      <div>
        <h2 className="text-center text-2xl font-semibold">CF</h2>
      </div>

      <div>
        <nav>
          <ul className="flex flex-col gap-2 ">
            <li>
              <Link to="/">
                <div className="flex flex-col  text-gray-400 gap-2.5  justify-center items-center rounded-xl p-3 hover:text-white hover:bg-[#464646] transition duration-300">
                  <ChatBubbleLeftIcon className="h-[20px] w-[20px] fill-current" />
                  <p className="text-xs">All chats</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/work">
                <div className="flex flex-col  text-gray-400 gap-2 justify-center items-center rounded-xl p-3 hover:text-white hover:bg-[#464646] transition duration-300">
                  <FolderIcon className="h-[20px] w-[20px] fill-current" />
                  <p className="text-xs">Work</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/friends">
                <div className="flex flex-col text-gray-400 gap-2 justify-center items-center rounded-xl p-3 hover:text-white hover:bg-[#464646] transition duration-300">
                  <UserGroupIcon className="h-[20px] w-[20px] fill-current" />
                  <p className="text-xs font-light">Friends</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/friends">
                <div className="flex flex-col text-gray-400 gap-2 justify-center items-center rounded-xl p-3 hover:text-white hover:bg-[#464646] transition duration-300">
                  <PhoneIcon className="h-[20px] w-[20px] fill-current" />
                  <p className="text-xs font-light">Calls</p>
                </div>
              </Link>
            </li>

            <div className="h-[1px] min-w-[70%] mx-auto bg-gray-400 opacity-70" />
            <li>
              <Link to="/profile">
                <div className="flex flex-col text-gray-400 gap-2 justify-center items-center rounded-xl p-3 hover:text-white hover:bg-[#464646] transition duration-300">
                  <UserIcon className="h-[20px] w-[20px] fill-current" />
                  <p className="text-xs font-light">Profile</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/friends">
                <div className="flex flex-col text-gray-400 gap-2 justify-center items-center rounded-xl p-3 hover:text-white hover:bg-[#464646] transition duration-300">
                  <PencilSquareIcon className="h-[20px] w-[20px] fill-current" />
                  <p className="text-xs font-light">Edit</p>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <Link to="/">
          <div className="flex flex-col text-gray-400 gap-2 justify-center items-center rounded-xl p-3 hover:text-white hover:bg-[#464646] transition duration-300">
            <ArrowLeftEndOnRectangleIcon className="h-[20px] w-[20px] fill-current" />
            <p className="text-xs font-light">Log out</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
