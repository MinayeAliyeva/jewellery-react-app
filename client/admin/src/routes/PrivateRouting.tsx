import { FC, memo, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { decodeUser } from "../helpers/decodeUser";
import { getLocalStorage } from "../helpers/localStorage";

interface IPrivateRouting {
  children: ReactNode;
}

const PrivateRouting: FC<IPrivateRouting> = ({ children }) => {
  const token = getLocalStorage("accessToken");
  const decoded = decodeUser(token!);
  if (decoded.isAdmin === false) {
    return (
      <Navigate
        to="/login"
        state={{ url: location.pathname + location.search }}
        replace={true}
      />
    );
  }
  return <>{children}</>;
};

export default memo(PrivateRouting);
