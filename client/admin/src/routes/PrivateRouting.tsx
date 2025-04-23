import { FC } from "react";
import { Navigate } from "react-router-dom";
interface IPrivateRouting {
  children: React.ReactNode;
}
const PrivateRouting: FC<IPrivateRouting> = ({ children }) => {
  const isAdmin = localStorage.getItem("isAdmin") ?? "false";


  if (isAdmin === "false") {
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
