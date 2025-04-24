import { FC } from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

interface IPrivateRouting {
  children: React.ReactNode;
}
interface IDecodedValue {
  isAdmin?: boolean;
  name?: string;
  email?: string;
}
const PrivateRouting: FC<IPrivateRouting> = ({ children }) => {
  const token = localStorage.getItem("accessToken") ?? false;
  console.log("isAdmin PrivateRouting", token);
  const decoded: IDecodedValue = token ? jwtDecode(token) : { isAdmin: false };
console.log("test",decoded.isAdmin===false);

  if (decoded.isAdmin===false ) {
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

export default PrivateRouting;
