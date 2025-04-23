import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  // const isAdmin = localStorage.getItem("isAdmin");
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
