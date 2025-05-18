import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IUser } from "./models";
import { useAuth } from "../../context/AuthContext";
import axiosInstance from "../../api/axiosInstance";
import { getAllUsers } from "../../api/user";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { AxiosError } from "axios";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<IUser[]>([]);
  const [error, setError] = useState("");
  console.log("USERS", users);
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

  const fetchAllUsers = ({ limit }: { limit?: string }) => {
    setLoading(true);
    getAllUsers({ limit })
      .then((res) => {
        console.log("res?.data.users", res);
        setUsers(res?.data.users);
      })
      .catch((err) => {
        console.log("err", err);
        const { message } = err as AxiosError;
        setError(message);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchAllUsers({});
  }, []);

  const addLimit = () => {
    const limit = getValues("limit");
    fetchAllUsers({ limit });
  };
  console.log("error", error);

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
          <Input control={control} name="limit" style={{ width: "200px" }} />
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
