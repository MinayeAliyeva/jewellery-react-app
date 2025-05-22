import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../context/AuthContext";
import axiosInstance from "../../api/axiosInstance";
import Input from "../../components/input/Input";
import { registerSchema } from "../../components/validation/registerSchema";
import { IUseForm } from "../../types";


const Register = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IUseForm>({ resolver: yupResolver(registerSchema) });

  const { setToken } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data: IUseForm) => {
    axiosInstance.post("/api/auth/register", data).then((res) => {
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
      <Input
        name="name"
        control={control as any}
        placeholder="name"
        error={errors.name?.message}
        defaultValue={""}
        style={{ width: "400px" }}
      />
      <Input
        name="surname"
        control={control as any}
        error={errors.surname?.message}
        placeholder="surname"
        defaultValue={""}
        style={{ width: "400px" }}
      />
      <Input
        name="email"
        control={control as any}
        placeholder="email"
        defaultValue={""}
        style={{ width: "400px" }}
        error={errors.email?.message}
      />
      <Input
        name="password"
        control={control as any}
        placeholder="password"
        defaultValue={""}
        style={{ width: "400px" }}
        error={errors.password?.message}
      />
      <Input
        name="tel"
        control={control as any}
        placeholder="tel"
        defaultValue={""}
        error={errors.tel?.message}
        style={{ width: "400px" }}
      />
      <Button onClick={handleSubmit(onSubmit)}>Register</Button>
    </div>
  );
};

export default Register;
