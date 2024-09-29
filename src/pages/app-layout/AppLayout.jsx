import { Outlet } from "react-router-dom";
import AppSidenav from "../../components/app-sidenav/AppSidenav"
import ExploreLand from "../exploreland/ExploreLand.JSX";
function AppLayout() {
  return (
    <div className="gird grid-cols-2 gap-10  ">
      <AppSidenav />
      <ExploreLand />
      <Outlet />
    </div>
  );
}

export default AppLayout;
