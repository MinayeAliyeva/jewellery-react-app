import { jwtDecode } from "jwt-decode";
import { FC } from "react";
import { Navigate } from "react-router-dom";

interface IProps {
  children: React.ReactNode;
}
const PrivateRouting: FC<IProps> = ({ children }) => {
  const token = localStorage.getItem("accessToken");
  const decodedUser = token ? jwtDecode(token) : null;

  if (!decodedUser) {
    return <Navigate to="/register" />;
  }
  return <>{children}</>;
};

export default PrivateRouting;
