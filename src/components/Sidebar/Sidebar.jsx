import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as MessageIcon } from "./../../assets/icons/message.svg";
import { ReactComponent as BriefCaseIcon } from "./../../assets/icons/briefcase.svg";
import { ReactComponent as FriendsIcon } from "./../../assets/icons/friends.svg";
import { ReactComponent as ProfileIcon } from "./../../assets/icons/profile.svg";
import { ReactComponent as EditIcon } from "./../../assets/icons/edit.svg";
import { ReactComponent as LogoutIcon } from "./../../assets/icons/logout.svg";
import { ReactComponent as CallIcon } from "./../../assets/icons/call.svg";

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
                  <MessageIcon className="h-[18px] w-[18px] fill-current" />
                  <p className="text-xs">All chats</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/work">
                <div className="flex flex-col  text-gray-400 gap-2 justify-center items-center rounded-xl p-3 hover:text-white hover:bg-[#464646] transition duration-300">
                  <BriefCaseIcon className="h-[18px] w-[18px] fill-current" />
                  <p className="text-xs">Work</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/friends">
                <div className="flex flex-col text-gray-400 gap-2 justify-center items-center rounded-xl p-3 hover:text-white hover:bg-[#464646] transition duration-300">
                  <FriendsIcon className="h-[18px] w-[18px] fill-current" />
                  <p className="text-xs font-light">Friends</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/friends">
                <div className="flex flex-col text-gray-400 gap-2 justify-center items-center rounded-xl p-3 hover:text-white hover:bg-[#464646] transition duration-300">
                  <CallIcon className="h-[18px] w-[18px] fill-current" />
                  <p className="text-xs font-light">Calls</p>
                </div>
              </Link>
            </li>

            <div className="h-[1px] min-w-[70%] mx-auto bg-gray-400 opacity-70" />
            <li>
              <Link to="/profile">
                <div className="flex flex-col text-gray-400 gap-2 justify-center items-center rounded-xl p-3 hover:text-white hover:bg-[#464646] transition duration-300">
                  <ProfileIcon className="h-[18px] w-[18px] fill-current" />
                  <p className="text-xs font-light">Profile</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/friends">
                <div className="flex flex-col text-gray-400 gap-2 justify-center items-center rounded-xl p-3 hover:text-white hover:bg-[#464646] transition duration-300">
                  <EditIcon className="h-[18px] w-[18px] fill-current" />
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
            <LogoutIcon className="h-[18px] w-[18px] fill-current" />
            <p className="text-xs font-light">Log out</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
