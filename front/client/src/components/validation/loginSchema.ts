import * as Yup from "yup";

export const loginSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be longer 3 words")
    .required("Name is reqiured")
    .typeError("Must be String"),
  surname: Yup.string()
    .required("Surname is required")
    .typeError("Must be String"),
  email: Yup.string().email("Email is not valid").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be 8 simbol")
    .matches(/[a-z]/, "Least one lower letter")
    .matches(/[A-Z]/, "Least one upper letter")
    .matches(/\d/, "Least one digit letter")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Least one spesific character")
    .typeError("Must be String"),
  tel: Yup.string().required("tel required").typeError("Must be String"),
});