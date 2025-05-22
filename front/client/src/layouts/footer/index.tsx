import { Link } from "react-router-dom";
import {
  InstagramOutlined,
  LinkedinOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="flex items-center justify-around p-5 bg-[rgb(253,235,204)] mt-10">
      <div>© 2025 YourCompany</div>
      <div className="flex gap-10">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="flex gap-5 text-2xl">
        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
          <InstagramOutlined />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedinOutlined />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
          <FacebookOutlined />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
