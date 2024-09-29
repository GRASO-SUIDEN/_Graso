import "./appsidenav.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const DashboardSidenav = () => {
  // const Navigate = useNavigate();
  // const handleclick=()=>{
  //   Navigate("/Exploreproperties")
  // }
  return (
    <div className="app-sidenav">
      <div className="logo">GRASO</div>
      <ul>
        <li>
          <span>Dashboard</span>
        </li>
        <li>
        <Link to={ "/Exploreproperties" } > <span  > Explore Properties</span></Link>
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

export default DashboardSidenav;
