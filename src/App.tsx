import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import {
  SignIn,
  SignUp,
  Body,
  Home,
  WishList,
  Search,
  NotFound,
  Book,
  Cart,
  Profile,
} from "./Pages/routes";
import { Toaster } from "./Components/ui/toaster";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

const App: React.FC = () => {
  const { data: userData } = useSelector((store: RootState) => store.user);
  return (
    <div className="min-h-svh h-full font-Poppins bg-neutral-100 text-black dark:bg-neutral-800  dark:text-white ">
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<Body />}>
            <Route index element={<Home />} />
            <Route path="search/:searchvalue" element={<Search />} />
            <Route path="book/:BookId" element={<Book />} />
            <Route path="search" element={<Search />} />
            <Route
              path="my-wishlist"
              element={userData ? <WishList /> : <SignIn />}
            />
            <Route path="/my-cart" element={userData ? <Cart /> : <SignIn />} />
            <Route
              path="/profile"
              element={userData ? <Profile /> : <SignIn />}
            />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
