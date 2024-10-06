import { NavLink } from "react-router-dom";
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
import dashBoardLogo from "../../assets/dashboardLogo3.png";

function AppSidenav({ isOpen, setIsOpen }) {
  const [showUserProfile, setShowUserProfile] = useState(false);

  const toggleUserProfile = () => {
    setShowUserProfile(!showUserProfile);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`app-sidenav block max-md:fixed max-md:left-0 max-md:top-0 max-md:w-[80%] max-md:h-full max-md:transition-transform max-md:duration-300 transform z-50 ${
        isOpen ? "max-md:translate-x-0" : "max-md:-translate-x-full"
      } [&_li]:flex [&_li]:gap-2 font-spartan`}
    >
      <div className="flex justify-between">
      <div className="logo w-[150px]">
        <img
          src={dashBoardLogo}
          alt="Graso Logo"
          style={{ width: 100, height: 80 }}
        />
      </div>
        <FiX
          size={30}
          onClick={() => setIsOpen(false)}
          className="hidden max-md:flex"
        />
      </div>
      <ul className="text-gray-200">
        <NavLink to="dashboard" onClick={handleItemClick}>
          <li>
            <ImStatsDots />
            <span>Dashboard</span>
          </li>
        </NavLink>

        <NavLink to="explore-properties" onClick={handleItemClick}>
          <li>
            <MdHomeWork />
            <span>Explore Properties</span>
          </li>
        </NavLink>
        <li onClick={handleItemClick}>
          <RiHomeHeartFill />
          <span>Transaction</span>
        </li>
        <NavLink to="add-properties" onClick={handleItemClick}>
          <li>
            <MdAddHome />
            <span>Add Properties</span>
          </li>
        </NavLink>
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
            <NavLink to="user/profile" onClick={handleItemClick}>
              <li>Profile</li>
            </NavLink>
            <NavLink to="user/profile-settings" onClick={handleItemClick}>
              <li>Profile Settings</li>
            </NavLink>
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
