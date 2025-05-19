import { jwtDecode } from "jwt-decode";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

interface IDecoded {
  email?: string;
}
function MainLayout() {

  const user = localStorage.getItem("accessToken");

  const decoded: IDecoded = user ? jwtDecode(user) : {};

  // return (
  //   <>
  //     <header className="bg-amber-400 flex align-middle justify-center p-2">
  //       <NavLink
  //         className={({ isActive }) => (isActive ? "active" : "")}
  //         to={"/login"}
  //       >
  //         Login
  //       </NavLink>{" "}
  //       <NavLink
  //         className={({ isActive }) => (isActive ? "active" : "")}
  //         to={"/register"}
  //       >
  //         Register
  //       </NavLink>{" "}
  //     </header>
  //     <main className="h-[92vh] flex align-middle justify-center">
  //       <h2>Testing side</h2>

  //       <Outlet />
  //     </main>
  //     <footer className=" flex align-middle justify-center bg-amber-700 p-4">
  //       Footer{" "}
  //     </footer>
  //   </>
  // );
  return (
    <>
      {" "}
      <div className="flex flex-col min-h-screen ">
        <Header />
        <main className="flex-grow container mx-auto py-4">
        <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
