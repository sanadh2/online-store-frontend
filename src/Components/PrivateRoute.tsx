import { useNavigate } from "react-router-dom";
import { FC, ReactNode, useLayoutEffect } from "react";

type PropTypes = {
  children: ReactNode;
  isAuthenticated: boolean;
};

const PrivateRoute: FC<PropTypes> = ({ children, isAuthenticated }) => {
  const navigate = useNavigate();
  console.log(isAuthenticated);
  useLayoutEffect(() => {
    if (!isAuthenticated) {
      navigate("/sign-in");
    }
  }, [isAuthenticated, navigate]);

  return children;
};

export default PrivateRoute;
