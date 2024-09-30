import { Link } from "react-router-dom";
import "./appsidenav.css";

const AppSidenav = () => {
  return (
    <div className="app-sidenav max-md:">
      <h2 className="logo">GRASO</h2>
      <ul>
        <li>Dashboard</li>
        <Link to="explore-properties">
          <li>Explore Properties</li>
        </Link>
        <li>Staking</li>
        <li>Add Properties</li>
        <li>Chat</li>
        <li>User Profile</li>
        <li>Blog</li>
        <li>Pages</li>
        <li>Authentication</li>
        <li>Miscellaneous</li>
      </ul>
    </div>
  );
};

export default AppSidenav;
