import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <div>
      <div>
          <div className="md:hidden inline-flex items-center justify-center p-1 rounded-md border border-gray-300 bg-white text-black text-2xl hover:bg-gray-100 cursor-pointer">
            <CiMenuBurger />
          </div>
      </div>
      <div>
        <div>
          <div className="mb-8 text-center">
            <Link className=" font-bold text-2xl" to="/">
              Logo
            </Link>
          </div>
          <nav className="flex flex-col items-start space-y-4">
            <Link className=" hover:text-gray-300 font-bold" to="/">
              Home
            </Link>
            <Link className=" hover:text-gray-300 font-bold" to="/about">
              About
            </Link>
            <Link className=" hover:text-gray-300 font-bold" to="/contact">
              Contact
            </Link>
            <Link className=" hover:text-gray-300 font-bold" to="/product">
              Products
            </Link>
            <Link className=" hover:text-gray-300 font-bold" to="/blog">
              blog
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
