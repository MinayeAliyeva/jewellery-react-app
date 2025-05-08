import InputComponent from "../components/InputComponent";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "antd";

const Login = () => {
  const { control, watch } = useForm<{
    email: string;
    password: string;
    surname: string;
    name: string;
    tel: string;
  }>();
  const navigate = useNavigate();
  const email = watch("email");
  const password = watch("password");
  const handleClick = () => {
    axios
      .post("http://localhost:8000/api/auth/login", {
        password,
        email,
      })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.accessToken);
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
      <Typography>Login</Typography>

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

      <Button  onClick={handleClick}>
        Login
      </Button>
    </div>
  );
};

export default Login;
