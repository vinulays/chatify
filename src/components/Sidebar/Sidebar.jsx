import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="text-[#f9fafc] py-6 flex flex-col gap-12">
      <div>
        <h2 className="text-center text-2xl font-semibold">CF</h2>
      </div>

      <div>
        <nav>
          <ul className="flex flex-col">
            <li>
              <Link to="/">All chats</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/friends">Friends</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
