import { useAuth } from "../context/AuthContext";
import axiosInstance from "../api/axiosInstance";
const Home = () => {
  const { decoded } = useAuth();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    axiosInstance
      .post("/api/auth/logout")
      .then((res) => {
        console.log("res LOGOUT", res.data);
      })
      .catch((err) => {
        console.error("Logout error", err.response?.data);
      });
  };

  return (
    <div>
      Home Page
      <div>
        {decoded && (
          <div className="bg-red-500 flex flex-col rounded-full w-[300px] h-[300px] align-middle justify-center text-center">
            <h2 className="bg-amber-200"> Isdifadeci Profili</h2>
            <span>Name: {decoded?.name}</span>
            <span>Surname: {decoded?.surname}</span>
            <button
              className="bg-amber-700 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
