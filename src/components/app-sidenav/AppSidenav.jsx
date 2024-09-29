import "./appsidenav.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const DashboardSidenav = () => {
  return (
    <div className="app-sidenav max-md:hidden">
      <h2 className="logo">GRASO</h2>
      <ul>
        <li>
          <span>Dashboard</span>
        </li>
        <li>
          <span>Explore Properties</span>
        </li>
        <li>
          <span>Staking</span>
        </li>
        <li>
          <span>Add Properties</span>
        </li>
        <li>
          <span>Chat</span>
        </li>
        <li>
          <span>User Profile</span>
        </li>
        <li>
          <span>Blog</span>
        </li>
        <li>
          <span>Pages</span>
        </li>
        <li>
          <span>Authentication</span>
        </li>
        <li>
          <span>Miscellaneous</span>
        </li>
      </ul>
    </div>
  );
};

export default AppSidenav;
