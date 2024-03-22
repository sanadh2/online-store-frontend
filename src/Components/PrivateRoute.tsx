import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

type PropTypes = {
  children: ReactNode;
  isAuthenticated: boolean;
};

const PrivateRoute: FC<PropTypes> = ({ children, isAuthenticated }) => {
  return isAuthenticated ? (
    children
  ) : (
    <div className="mx-auto w-full bg-red-200 p-3 md:p-5 lg:p-7 text-xs sm:text-base md:text-lg">
      <p className="flex gap-1">
        You are not Logged in. Please <Link to={"/sign-in"}>Sign in</Link>
        to continue
      </p>
    </div>
  );
};

export default PrivateRoute;
