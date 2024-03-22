import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../Components/Navigation";

const Layout: React.FC = () => {
  return (
    <div className="min-h-svh w-full h-full flex flex-col">
      <MainNavigation />
      <Outlet />
    </div>
  );
};

export default Layout;
