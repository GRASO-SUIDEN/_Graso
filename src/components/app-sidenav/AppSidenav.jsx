import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FiX,
  ImStatsDots,
  MdHomeWork,
  MdAddHome,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
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

  const handleItemClick = () => {
    setIsOpen(false); // Close the sidenav when any list item is clicked
  };

  return (
    <div
      className={`app-sidenav block max-md:fixed max-md:left-0 max-md:top-0 max-md:w-[80%] max-md:h-full max-md:transition-transform max-md:duration-300 transform z-50 ${
        isOpen ? "max-md:translate-x-0" : "max-md:-translate-x-full"
      } [&_li]:flex [&_li]:gap-2`}
    >
      <div className="flex justify-between">
        <h2 className="logo">GRASO</h2>
        <FiX
          size={30}
          onClick={() => setIsOpen(false)}
          className="hidden max-md:flex"
        />
      </div>
      <ul>
        <Link to="dashboard" onClick={handleItemClick}>
          <li>
            <ImStatsDots />
            <span>Dashboard</span>
          </li>
        </Link>

        <Link to="explore-properties" onClick={handleItemClick}>
          <li>
            <MdHomeWork />
            <span>Explore Properties</span>
          </li>
        </Link>
        <li onClick={handleItemClick}>
          <RiHomeHeartFill />
          <span>Transaction</span>
        </li>
        <Link to="add-properties" onClick={handleItemClick}>
          <li>
            <MdAddHome />
            <span>Add Properties</span>
          </li>
        </Link>
        <li onClick={handleItemClick}>
          <IoChatbubbleOutline />
          <span>Chat</span>
        </li>

        <li
          onClick={toggleUserProfile}
          className="flex justify-between items-center"
        >
          <div className="flex gap-2">
            <FaUserPen />
            <span>User Profile</span>
          </div>
          {showUserProfile ? (
            <MdKeyboardArrowDown size={20} />
          ) : (
            <MdKeyboardArrowUp size={20} />
          )}
        </li>
        {showUserProfile && (
          <ul className="ml-4">
            <Link to="user/profile" onClick={handleItemClick}>
              <li>Profile</li>
            </Link>
            <Link to="user/profile-settings" onClick={handleItemClick}>
              <li>Profile Settings</li>
            </Link>
          </ul>
        )}
        <li onClick={handleItemClick}>
          <IoMdExit />
          <span>Log Out</span>
        </li>
      </ul>
    </div>
  );
}

export default AppSidenav;
