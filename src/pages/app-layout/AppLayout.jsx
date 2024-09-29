import { Outlet } from "react-router-dom";
import AppSidenav from "../../components/app-sidenav/AppSidenav";
import AppHeader from "../../components/app-header/AppHeader";
function AppLayout() {
  return (
    <div className="flex w-full h-[100vh]">
      <AppSidenav />

      <div className="flex flex-col flex-grow">
        <AppHeader />
        <Outlet />
      </div>
    </div>
  );
}
export default AppLayout;
