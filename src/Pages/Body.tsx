import React from "react";
import AuthProvider from "../hooks/Auth";
import { Outlet } from "react-router-dom";
import MainNavigation from "../Components/Navigation";

const Body: React.FC = () => {
  return (
    <AuthProvider className="min-h-svh w-full h-full flex flex-col">
      <MainNavigation />
      <Outlet />
    </AuthProvider>
  );
};

export default Body;
