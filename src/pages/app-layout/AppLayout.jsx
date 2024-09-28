import { Outlet } from "react-router-dom";
import AppSidenav from "../../components/app-sidenav/AppSidenav";
function AppLayout() {
  return (
    <div className="gird grid-cols-2 gap-10  ">
      <AppSidenav />
      <Outlet />
    </div>
  );
}

export default AppLayout;
