import { MenuProps } from "antd";
import { Link } from "react-router-dom";

export const items: MenuProps["items"] = [
  {
    label: (
      <Link to="/register" rel="noopener noreferrer">
        Register
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link to="/login" rel="noopener noreferrer">
        Login
      </Link>
    ),
    key: "1",
  },
];
