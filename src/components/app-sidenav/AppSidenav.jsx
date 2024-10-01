import { Link } from "react-router-dom";
import { useState } from "react";
import "./appsidenav.css";

const AppSidenav = () => {
  const [showUserProfile, setShowUserProfile] = useState(false);

  const toggleUserProfile = () => {
    setShowUserProfile(!showUserProfile);
  };

  return (
    <div className="app-sidenav">
      <h2 className="logo">GRASO</h2>
      <ul>
        <li>Dashboard</li>
        <Link to="explore-properties">
          <li>Explore Properties</li>
        </Link>
        <li>Staking</li>
        <Link to="add-properties">
          <li>Add Properties</li>
        </Link>
        <li>Chat</li>

        <li onClick={toggleUserProfile}>User Profile</li>
        {showUserProfile && (
          <ul className="ml-4">
            <Link to="user/profile">
              <li>Profile</li>
            </Link>
            <li>Profile Settings</li>
          </ul>
        )}

        <li>Blog</li>
        <li>Pages</li>
        <li>Authentication</li>
        <li>Miscellaneous</li>
      </ul>
    </div>
  );
};

export default AppSidenav;
