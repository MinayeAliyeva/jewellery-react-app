import { Box } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
interface IDecoded {
  email?: string;
}
function MainLayout() {
  const user = localStorage.getItem("accessToken");
  console.log("user", user);

  const decoded: IDecoded = user ? jwtDecode(user) : {};
  console.log("decoded", decoded);

  return (
    <div>
      <header style={{ margin: "70px" }}>
        <Box>Profil</Box>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/login"}
        >
          Login
        </NavLink>{" "}
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/register"}
        >
          Register
        </NavLink>{" "}
      </header>
      <main>
        <Outlet />
      </main>
      <footer style={{ margin: "70px" }}>Footer </footer>
    </div>
  );
}

export default MainLayout;
