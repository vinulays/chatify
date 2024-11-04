import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const username = useSelector((state) => state.auth.username);
  return (
    <div>
      {username ? <p>Welcome, {username}!</p> : <p>Loading user name...</p>}
    </div>
  );
};

export default Profile;
