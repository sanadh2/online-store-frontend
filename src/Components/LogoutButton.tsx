import React from "react";

import { logOutApi } from "../Api/user";
import store from "../redux/store";
import { deleteUserData } from "../redux/reducers/userReducer";
import { useNavigate } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "./ui/dialog";

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();
  const logout = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    logOutApi()
      .then(() => store.dispatch(deleteUserData()))
      .finally(() => navigate("/"));
  };
  return (
    <Dialog>
      <DialogTrigger className="w-fit hover:opacity-50 transition ease-in-out">
        sign out
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-black dark:text-white">
            Are you absolutely sure?
          </DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <button
            className="w-fit transition-all duration-300 bg-red-600 hover:bg-red-700  px-3 py-1 rounded text-white"
            onClick={logout}
          >
            <p>sign out</p>
          </button>
          <DialogClose className="text-white px-4 py-1 bg-green-500 hover:bg-green-600 transition-colors duration-300 rounded">
            <p>close</p>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LogoutButton;
