import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { BASE_URL } from "../api";
const Home = () => {
  const { decoded } = useAuth();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    axios
      .post(`${BASE_URL}/api/auth/logout`, {}, { withCredentials: true })
      .then((res) => {
        console.log("res LOGOUT", res.data);
        // Müvafiq olaraq useri yönləndir və ya yenilə
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
