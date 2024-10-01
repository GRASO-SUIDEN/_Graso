import { Outlet } from "react-router-dom";
import AppSidenav from "../../components/app-sidenav/AppSidenav";
import AppHeader from "../../components/app-header/AppHeader";
import { useState } from "react";
function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-full h-[100vh]">
      <AppSidenav isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex flex-col flex-grow">
        <AppHeader setIsOpen={setIsOpen} />
        <Outlet />
      </div>
      {isOpen ? (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      ) : (
        ""
      )}
    </div>
  );
}
export default AppLayout;
