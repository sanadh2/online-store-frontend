import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import {
  SignIn,
  SignUp,
  Layout,
  Home,
  WishList,
  Search,
  NotFound,
  Cart,
  Profile,
  Products,
} from "./Pages/routes";
import { Toaster } from "./Components/ui/toaster";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./Admin DashBoard";
import AuthProvider from "./hooks/Auth";

const App: React.FC = () => {
  const { loggedIn } = useSelector((store: RootState) => store.user);

  return (
    <AuthProvider className="min-h-svh h-full font-Poppins bg-neutral-100 text-black dark:bg-neutral-800  dark:text-white ">
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="admin-dashboard" element={<Dashboard />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="search/" element={<Search />} />
            <Route
              path="wish-list"
              element={
                <PrivateRoute isAuthenticated={loggedIn}>
                  <WishList />
                </PrivateRoute>
              }
            />
            <Route
              path="my-cart"
              element={
                <PrivateRoute isAuthenticated={loggedIn}>
                  <Cart />
                </PrivateRoute>
              }
            />
            <Route
              path="profile"
              element={
                <PrivateRoute isAuthenticated={loggedIn}>
                  <Profile />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
