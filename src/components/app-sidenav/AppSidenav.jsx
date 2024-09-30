import { Link } from "react-router-dom";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import "./appsidenav.css";

function AppSidenav({ isOpen, setIsOpen }) {
  const [showUserProfile, setShowUserProfile] = useState(false);

  const toggleUserProfile = () => {
    setShowUserProfile(!showUserProfile);
  };

  return (
    <div
      className={`app-sidenav z-50 max-md:fixed max-md:left-0 max-md:top-0 max-md:w-[80%] max-md:h-full max-md:${
        isOpen ? "-translate-x-0" : "-translate-x-full"
      } transition-all duration-300`}
    >
      <div className="flex justify-between">
        <h2 className="logo">GRASO</h2>
        <FiX size={30} onClick={() => setIsOpen(!isOpen)} />
      </div>
      <ul>
        <Link to="dashboard">
          <li>Dashboard</li>
        </Link>

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
}

export default AppSidenav;
