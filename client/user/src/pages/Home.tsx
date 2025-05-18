import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../api/axiosInstance";
import Button from "../components/Button";
import InputComponent from "../components/Input";
import { useAuth } from "../context/AuthContext";
import { getAllUsers } from "../api/user";
import { IUser } from "../utils/types";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<IUser[]>([]);
  const [error, setError] = useState("");
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

  const { control, getValues } = useForm();
  const limit = getValues("limit");

  const fetchAllUsers = ({ limit }: { limit?: string }) => {
    setLoading(true);
    getAllUsers({ limit })
      .then((res) => {
        setUsers(res?.data.users);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    fetchAllUsers({});
  }, []);
  const addLimit = () => {
    fetchAllUsers({ limit });
  };

  if (error) {
    return <>{error}</>;
  }
  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
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
          <InputComponent
            control={control}
            name="limit"
            style={{ width: "200px" }}
          />
          <Button buttonText="Add Limit" onClick={() => addLimit()} />
          {users?.map((user) => (
            <p>{user?.firstName}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
