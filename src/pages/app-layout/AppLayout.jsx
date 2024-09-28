import { Outlet } from "react-router-dom";
import AppSidenav from "../../components/app-sidenav/AppSidenav";
import AppHeader from "../../components/app-header/AppHeader";
function AppLayout() {
  return (
    <div className="flex">
      <AppSidenav />
      <div className="flex flex-col w-full">
        <AppHeader />

        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default AppLayout;
