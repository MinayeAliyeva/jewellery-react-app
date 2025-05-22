import { Link } from "react-router-dom";
import {
  HeartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import Drawer from "../../components/drawer/Drawer";
import Dropdown from "../../components/dropdown/Dropdown";

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <header className="flex items-center justify-around p-5 bg-[rgb(253,235,204)]">
      LOGO
      <div className="flex gap-20">
        {" "}
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="flex gap-10">
        <Dropdown icon={<UserOutlined />} />
        <HeartOutlined key="like" />{" "}
        <ShoppingOutlined key="basket" onClick={showDrawer} />
      </div>
      <Drawer onClose={onClose} open={open} />
    </header>
  );
};

export default Header;
