import { NavLink, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

interface IDecoded {
  email?: string;
}
function MainLayout() {
  console.log("MainLayout RERENDER");

  const user = localStorage.getItem("accessToken");
  console.log("user", user);

  const decoded: IDecoded = user ? jwtDecode(user) : {};
  console.log("decoded", decoded);

  return (
    <>
      <header className="bg-amber-400 flex align-middle justify-center p-2">
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
      <main className="h-[92vh] flex align-middle justify-center">
        <h2>Testing side</h2>
      
        <Outlet />
      </main>
      <footer className=" flex align-middle justify-center bg-amber-700 p-4">
        Footer{" "}
      </footer>
    </>
  );
}

export default MainLayout;
