import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import PrivateRouting from "../layouts/PrivateRouting";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <PrivateRouting>
              <Home />
            </PrivateRouting>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default RoutesComponent;
