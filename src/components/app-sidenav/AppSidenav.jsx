import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FiX,
  ImStatsDots,
  MdHomeWork,
  MdAddHome,
  RiHomeHeartFill,
  IoChatbubbleOutline,
  FaUserPen,
  IoMdExit,
} from "../../utils/icons";
import "./appsidenav.css";

function AppSidenav({ isOpen, setIsOpen }) {
  const [showUserProfile, setShowUserProfile] = useState(false);

  const toggleUserProfile = () => {
    setShowUserProfile(!showUserProfile);
  };

  return (
    <div
      className={`app-sidenav max-md:z-50 max-md:fixed max-md:left-0 max-md:top-0 max-md:w-[80%] max-md:h-full max-md:${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-all duration-300 [&_li]:flex [&_li]:gap-2`}
    >
      <div className="flex justify-between">
        <h2 className="logo">GRASO</h2>
        <FiX
          size={30}
          onClick={() => setIsOpen(!isOpen)}
          className="hidden max-md:flex"
        />
      </div>
      <ul>
        <Link to="dashboard">
          <li>
            <ImStatsDots />
            <span>Dashboard</span>
          </li>
        </Link>

        <Link to="explore-properties">
          <li>
            <MdHomeWork />
            <span>Explore Properties</span>
          </li>
        </Link>
        <li>
          <RiHomeHeartFill />
          <span>Transaction</span>
        </li>
        <Link to="add-properties">
          <li>
            <MdAddHome />
            <span>Add Properties</span>
          </li>
        </Link>
        <li>
          <IoChatbubbleOutline />
          <span>Chat</span>
        </li>

        <li onClick={toggleUserProfile}>
          <FaUserPen />
          <span>User Profile</span>
        </li>
        {showUserProfile && (
          <ul className="ml-4">
            <Link to="user/profile">
              <li>Profile</li>
            </Link>
            <li>Profile Settings</li>
          </ul>
        )}

        <li>
          <IoMdExit />
          <span>Log Out</span>
        </li>
      </ul>
    </div>
  );
}

export default AppSidenav;
