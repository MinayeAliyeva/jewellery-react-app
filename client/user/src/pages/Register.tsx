import { useForm } from "react-hook-form";
import InputComponent from "../components/InputComponent";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button, Typography } from "antd";
import axiosInstance from "../api/axiosInstance";

const Register = () => {
  const { control, watch } = useForm<{
    email: string;
    password: string;
    surname: string;
    name: string;
    tel: string;
  }>();
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const name = watch("name");
  const surname = watch("surname");
  const email = watch("email");
  const password = watch("password");
  const tel = watch("tel");

  const handleClick = () => {
    axiosInstance
      .post("/api/auth/register", {
        name,
        surname,
        password,
        email,
        tel,
      })
      .then((res) => {
        console.log("res", res);
        setToken(res.data.accessToken);
        navigate("/");
      });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Typography>Register</Typography>
      <InputComponent
        name="name"
        control={control as any}
        placeholder="name"
        defaultValue={""}
        style={{ width: "400px" }}
      />
      <InputComponent
        name="surname"
        control={control as any}
        placeholder="surname"
        defaultValue={""}
        style={{ width: "400px" }}
      />
      <InputComponent
        name="email"
        control={control as any}
        placeholder="email"
        defaultValue={""}
        style={{ width: "400px" }}
      />
      <InputComponent
        name="password"
        control={control as any}
        placeholder="password"
        defaultValue={""}
        style={{ width: "400px" }}
      />
      <InputComponent
        name="tel"
        control={control as any}
        placeholder="tel"
        defaultValue={""}
        style={{ width: "400px" }}
      />
      <Button onClick={handleClick}>Register</Button>
    </div>
  );
};

export default Register;
