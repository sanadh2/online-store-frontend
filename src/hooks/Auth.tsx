import React, { useEffect, ReactNode, useCallback } from "react";
import { getUserApi, getRefreshTokenApi } from "../Api/user";
import store, { RootState } from "../redux/store";
import {
  fetchUserData,
  fetchUserError,
  fetching,
} from "../redux/reducers/userReducer";
import { setCartLength } from "../redux/reducers/cartReducer";
import { useSelector } from "react-redux";
interface PropTypes extends React.AllHTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}
let flag = true;
const AuthProvider: React.FC<PropTypes> = ({
  children,
  className,
  ...props
}) => {
  const { loggedIn, trigger } = useSelector((store: RootState) => store.user);

  const getUser = useCallback(() => {
    store.dispatch(fetching());
    getUserApi()
      .then((res) => {
        store.dispatch(fetchUserData(res));
        if (res) store.dispatch(setCartLength(res.cartList.length));
        flag = false;
      })
      .catch((err) => {
        store.dispatch(fetchUserError(err));
      });
  }, []);

  const refreshToken = useCallback(() => {
    store.dispatch(fetching());
    getRefreshTokenApi()
      .then((res) => {
        store.dispatch(fetchUserData(res));
        if (res) store.dispatch(setCartLength(res.cartList.length));
      })
      .catch((err) => {
        store.dispatch(fetchUserError(err));
      });
  }, []);
  useEffect(() => {
    if (flag) {
      getUser();
    } else {
      refreshToken();
      const interval = setInterval(refreshToken, 100000);
      return () => clearInterval(interval);
    }
  }, [refreshToken, getUser, loggedIn, trigger]);

  if (loggedIn == false) flag = true;

  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export default AuthProvider;
