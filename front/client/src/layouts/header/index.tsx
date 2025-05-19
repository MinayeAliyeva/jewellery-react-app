import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { CiMenuBurger, CiUser } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
const Header = () => {
  return (
    <div className="bg-[rgb(252,234,203)] shadow-sm top-0">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link
          className="text-2xl text-white font-bold hover:text-blue-700 "
          to="/"
        >
          MK
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link className="text-white font-bold hover:underline" to="/">
            Home
          </Link>
          <Link className="text-white font-bold hover:underline" to="/login">
            Login
          </Link>
          <Link className="text-white font-bold hover:underline" to="/register">
            Register
          </Link>
          <Link className="text-white font-bold hover:underline" to="/contact">
            Contact
          </Link>
          <Link className="text-white font-bold hover:underline" to="/product">
            Products
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <Button icon={<IoIosSearch />} />
          <Link to="/login">
            <Button icon={<CiUser className="font-bold text-md" />} />
          </Link>
          {/* <ModeToggle /> */}
          <div className="md:hidden inline-flex items-center justify-center p-1 rounded-md border border-gray-300 bg-white text-black text-2xl hover:bg-gray-100 cursor-pointer">
            <CiMenuBurger />
          </div>
          {/* <MobileMenu /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
