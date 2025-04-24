import { useNavigate } from "react-router-dom";

const MainLayout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  return (
    <div>
      MainLayout
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default MainLayout;
