import { useForm } from "react-hook-form";
import InputComponent from "../components/Input";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button, Typography } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import axiosInstance from "../api/axiosInstance";
import * as Yup from "yup";
interface IUseForm {
  email: string;
  password: string;
  surname: string;
  name: string;
  tel: string;
}
const schema = Yup.object({
  name: Yup.string().required("Name is reqiured"),
  surname: Yup.string().required("Surname is required"),
  email: Yup.string().email("Email is not valid").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be 8 simbol")
    .matches(/[a-z]/, "Least one lower letter")
    .matches(/[A-Z]/, "Least one upper letter")
    .matches(/\d/, "Least one digit letter")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Least one spesific character"),
  tel: Yup.string().required("tel required"),
});

const Register = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IUseForm>({ resolver: yupResolver(schema) });

  const { setToken } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data: IUseForm) => {
    console.log(data);
    axiosInstance.post("/api/auth/register", data).then((res) => {
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
        error={errors.name?.message}
        defaultValue={""}
        style={{ width: "400px" }}
      />
      <InputComponent
        name="surname"
        control={control as any}
        error={errors.surname?.message}
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
        error={errors.email?.message}
      />
      <InputComponent
        name="password"
        control={control as any}
        placeholder="password"
        defaultValue={""}
        style={{ width: "400px" }}
        error={errors.password?.message}
      />
      <InputComponent
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
