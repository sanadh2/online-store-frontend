import React from "react";
import { Link } from "react-router-dom";
import { FaLuggageCart, FaChevronRight, FaUser } from "react-icons/fa";

type PropTypes = {
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
};
const SideBar: React.FC<PropTypes> = ({ activePage, setActivePage }) => {
  return (
    <div className="h-full w-full text-neutral-600 dark:text-white text-sm xl:text-base">
      <Link
        to={"/my-orders"}
        className="flex justify-center items-center gap-2 p-4 w-full border-b border-neutral-300 "
      >
        <FaLuggageCart className="h-6 w-6 text-black dark:text-white" />
        <p className="w-fit whitespace-nowrap font-bold">MY ORDERS</p>
        <p className="w-1/2 flex justify-end items-center">
          <FaChevronRight className="h-6 w-6 text-black dark:text-white" />
        </p>
      </Link>
      <div className="border-b border-neutral-300 w-full pb-2">
        <div className="flex  items-center gap-2 p-4 w-full ">
          <FaUser className="h-6 w-6 p-0.5 text-black dark:text-white" />
          <p className="w-fit whitespace-nowrap font-bold">ACCOUNT SETTINGS</p>
        </div>
        <div className="">
          <button
            type="button"
            onClick={() => setActivePage("personal-info")}
            className={`py-2 pl-12  ${activePage === "personal-info" && "text-sky-600 dark:text-blue-400 bg-sky-100 dark:bg-sky-900 font-medium"} w-full outline-none text-left`}
          >
            Profile Information
          </button>
          <button
            type="button"
            onClick={() => setActivePage("edit-profile")}
            className={`py-2 pl-12 ${activePage === "edit-profile" && "text-sky-600 dark:text-blue-400 bg-sky-100 dark:bg-sky-900 font-medium"} w-full outline-none text-left`}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
