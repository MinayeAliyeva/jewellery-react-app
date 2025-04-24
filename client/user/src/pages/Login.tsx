import { Box, Button, Typography } from "@mui/material";
import InputComponent from "../components/InputComponent";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    <Box
      sx={{
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
        size="small"
        style={{ width: "400px" }}
        labe
      />
      <InputComponent
        name="password"
        control={control as any}
        placeholder="password"
        defaultValue={""}
        size="small"
        style={{ width: "400px" }}
        labe
      />

      <Button variant="contained" onClick={handleClick}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
