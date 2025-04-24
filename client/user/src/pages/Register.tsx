import { Box, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";

import InputComponent from "../components/InputComponent";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { control, watch } = useForm<{
    email: string;
    password: string;
    surname: string;
    name: string;
    tel: string;
  }>();
  const navigate = useNavigate();
  const name = watch("name");
  const surname = watch("surname");
  const email = watch("email");
  const password = watch("password");
  const tel = watch("tel");
  const handleClick = () => {
    axios
      .post("http://localhost:8000/api/auth/register", {
        name,
        surname,
        password,
        email,
        tel,
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
      <Typography>Register</Typography>
      <InputComponent
        name="name"
        control={control as any}
        placeholder="name"
        defaultValue={""}
        size="small"
        style={{ width: "400px" }}
        labe
      />
      <InputComponent
        name="surname"
        control={control as any}
        placeholder="surname"
        defaultValue={""}
        size="small"
        style={{ width: "400px" }}
        labe
      />
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
      <InputComponent
        name="tel"
        control={control as any}
        placeholder="tel"
        defaultValue={""}
        size="small"
        style={{ width: "400px" }}
        labe
      />
      <Button variant="contained" onClick={handleClick}>
        Register
      </Button>
    </Box>
  );
};

export default Register;
