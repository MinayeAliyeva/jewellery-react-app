import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "antd";
import Input from "../../components/input/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../components/validation/loginSchema";
import { IUseForm } from "../../types";


const Login = () => {
    const navigate = useNavigate();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IUseForm>({ resolver: yupResolver(loginSchema) });


  const onSubmit = (data: IUseForm) => {
    axios.post("http://localhost:8000/api/auth/login", data).then((res) => {
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

      <Input
        name="email"
        control={control as any}
        placeholder="email"
        defaultValue={""}
        style={{ width: "400px" }}
        error={errors?.email?.message}
      />
      <Input
        name="password"
        control={control as any}
        placeholder="password"
        defaultValue={""}
        style={{ width: "400px" }}
        error={errors?.password?.message}
      />

      <Button onClick={handleSubmit(onSubmit)}>Login</Button>
    </div>
  );
};

export default Login;
