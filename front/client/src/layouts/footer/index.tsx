import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { FacebookFilled, InstagramFilled, LinkedinFilled } from "@ant-design/icons";
const Footer = () => {
  return (
    <div className="bg-gray-600 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left space-y-4">
          <Link className="text-white font-bold text-2xl" to="/">
            Logo
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur
            adipisicing elit consectetur adipisicing elit
          </p>
        </div>
        <nav className="md:mt-0 mt-8 space-x-4">
          <Link className="text-white hover:text-gray-300 font-bold" to="/">
            Home
          </Link>
          <Link
            className="text-white hover:text-gray-300 font-bold"
            to="/about"
          >
            About
          </Link>
          <Link
            className="text-white hover:text-gray-300 font-bold"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className="text-white hover:text-gray-300 font-bold"
            to="/products"
          >
            Products
          </Link>
        </nav>

        <div className="md:mt-0 mt-8 space-x-4">
          <Button icon={<FacebookFilled />} />

          <Button icon={<InstagramFilled />} />

          <Button icon={<LinkedinFilled />} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
