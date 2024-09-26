import { Outlet } from "react-router-dom";
import AppSidenav from "../../components/app-sidenav/AppSidenav";
function AppLayout() {
  return (
    <div>
      <AppSidenav />
      <Outlet />
    </div>
  );
}

export default AppLayout;
