import Input from "../components/ui/Input";
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance";
const Login = () => {
  const { control, watch } = useForm<{
    email: string;
    password: string;
    name: string;
  }>();

  const navigate = useNavigate();
  const name = watch("name");
  const email = watch("email");
  const password = watch("password");

  const handleClick = () => {
    axiosInstance
      .post("/api/auth/login", {
        email,
        password,
        name,
      })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.accessToken);
        navigate("/");
      });
  };

  return (
    <div>
      <h1> Login</h1>
      <Input
        name="name"
        control={control as any}
        placeholder="name"
        defaultValue={""}
        style={{ width: "400px" }}
      />{" "}
      <br />
      <br />
      <Input
        name="email"
        control={control as any}
        placeholder="email"
        defaultValue={""}
        style={{ width: "400px" }}
      />{" "}
      <br />
      <br />
      <Input
        name="password"
        control={control as any}
        placeholder="password"
        defaultValue={""}
        style={{ width: "400px" }}
      />
      <br />
      <br />
      <Button onClick={handleClick}>Login </Button>
    </div>
  );
};

export default Login;
