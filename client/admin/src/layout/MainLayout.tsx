import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance";

const MainLayout = () => {
  //logout api ile et
  const navigate = useNavigate();
  const handleLogout = () => {
    axiosInstance.post("/api/auth/logout").then((res) => {
      console.log("response", res);

      localStorage.removeItem("accessToken");
      navigate("/login");
    });
  };

  return (
    <div>
      MainLayout
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default MainLayout;
