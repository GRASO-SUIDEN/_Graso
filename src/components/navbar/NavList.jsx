import { Link } from "react-router-dom";

function NavList({ path = "", navLink }) {
  return (
    <li className="relative  cursor-pointer group select-none max-md:w-[7rem] max-md:text-center max-md:hover:bg-[#24C2A5] max-md:hover:text-white max-md:hover:rounded-md">
      <Link to={path}> {navLink} </Link>
      <span className="max-md:hidden absolute left-0 bottom-0 w-0 h-[3px] bg-[#24C2A5] transition-all duration-300 group-hover:w-full" />
    </li>
  );
}

export default NavList;
