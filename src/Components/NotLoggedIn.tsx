import React from "react";
import { Link } from "react-router-dom";

const NotLoggedIn: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[90vh] gap-3 items-center justify-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-5xl">
        YOU ARE NOT LOGGED IN
      </h2>
      <Link
        to={"/sign-in"}
        className="bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-md text-lg sm:text-xl md:text-2xl lg:text-3xl "
      >
        Sign In
      </Link>
    </div>
  );
};

export default NotLoggedIn;
