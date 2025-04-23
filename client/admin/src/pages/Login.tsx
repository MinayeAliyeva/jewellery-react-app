import { Button } from "@mui/material";
import InputComponent from "../components/InputComponent";
import { useForm } from "react-hook-form";
import axios from "axios";
const Login = () => {
  const { control, watch } = useForm<{
    email: string;
    password: string;
    name: string;
  }>();

  const name = watch("name");
  const email = watch("email");
  const password = watch("password");

  const handleClick = () => {
    axios
      .post("http://localhost:8000/api/auth/register", {
        email,
        password,
        name,
      })
      .then((data) => console.log("data", data));
  };

  return (
    <div>
      <h1> Login</h1>
      <InputComponent
        name="name"
        control={control as any}
        placeholder="name"
        defaultValue={""}
        error={true}
        helperText="hhh"
        size="small"
        style={{ width: "400px" }}
      />{" "}
      <InputComponent
        name="email"
        control={control as any}
        placeholder="email"
        defaultValue={""}
        error={true}
        helperText="hhh"
        size="small"
        style={{ width: "400px" }}
      />{" "}
      <br />
      <br />
      <InputComponent
        name="password"
        control={control as any}
        placeholder="password"
        defaultValue={""}
        error={true}
        helperText="hhh"
        size="small"
        style={{ width: "400px" }}
      />
      <br />
      <br />
      <Button variant="contained" onClick={handleClick}>
        Login{" "}
      </Button>
    </div>
  );
};

export default Login;
