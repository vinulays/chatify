import React from "react";
import { Link } from "react-router-dom";
import MessageIcon from "./../../assets/icons/message.svg";
import BriefCaseIcon from "./../../assets/icons/briefcase.svg";
import FriendsIcon from "./../../assets/icons/friends.svg";
import ProfileIcon from "./../../assets/icons/profile.svg";
import EditIcon from "./../../assets/icons/edit.svg";
import LogoutIcon from "./../../assets/icons/logout.svg";

const Sidebar = () => {
  return (
    <div className="text-[#f9fafc] py-4 px-2.5 flex flex-col justify-around min-h-screen gap-12">
      <div>
        <h2 className="text-center text-2xl font-semibold">CF</h2>
      </div>

      <div>
        <nav>
          <ul className="flex flex-col gap-8">
            <li>
              <Link to="/">
                <div className="flex flex-col text-gray-400 gap-2 justify-center items-center">
                  <img src={MessageIcon} alt="message" height={20} width={20} />
                  <p className="text-xs font-light">All chats</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/work">
                <div className="flex flex-col text-gray-400 gap-2 justify-center items-center">
                  <img
                    src={BriefCaseIcon}
                    alt="briefcase"
                    height={20}
                    width={20}
                  />
                  <p className="text-xs font-light">Work</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/friends">
                <div className="flex flex-col text-gray-400 gap-2 justify-center items-center">
                  <img src={FriendsIcon} alt="friends" height={20} width={20} />
                  <p className="text-xs font-light">Friends</p>
                </div>
              </Link>
            </li>

            <div className="h-[1px] bg-gray-400 w-full opacity-70" />
            <li>
              <Link to="/profile">
                <div className="flex flex-col text-gray-400 gap-2 justify-center items-center">
                  <img src={ProfileIcon} alt="profile" height={20} width={20} />
                  <p className="text-xs font-light">Profile</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/friends">
                <div className="flex flex-col text-gray-400 gap-2 justify-center items-center">
                  <img src={EditIcon} alt="edit" height={20} width={20} />
                  <p className="text-xs font-light">Edit</p>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <Link to="/">
          <div className="flex flex-col text-gray-400 gap-2 justify-center items-center">
            <img src={LogoutIcon} alt="logout" height={20} width={20} />
            <p className="text-xs font-light">Log out</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
