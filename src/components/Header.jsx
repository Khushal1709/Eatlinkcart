import { Link } from "react-router-dom";
import { GrBasket } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const navItems = [
  { label: "Bestseller", path: "/bestseller" },
  { label: "Fresh Finds", path: "/fresh-finds" },
  { label: "Collections", path: "/collections" },
  { label: "Whisk & Reach", path: "/whisk-reach" },
];
const Header = () => {
  return (
    <header className="sticky top-4 z-50 bg-[#84542f]/90 shadow-md rounded-full">
      <div className="max-w-7xl mx-auto px-4 py-5  flex items-center justify-between">
        {/* Left Navigation */}
        <nav className="hidden md:flex space-x-6 font-semibold text-white text-sm tracking-wider uppercase">
          {navItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Center Text Logo */}
        <div className="flex-1 text-center">
          <h1
            className="text-white text-3xl md:text-5xl tracking-wider"
            style={{ fontFamily: "'Cinzel Decorative',cursive" }}
          >
            <Link to="/">EATLINK CART</Link>
          </h1>
         
        </div>

        {/* Right Icons */}
        <div className="flex space-x-5 text-white text-lg items-center justify-end">
          <IoSearch className="cursor-pointer" />
          <Link to="/Signin"><FaRegUser className="cursor-pointer" /></Link>
          <div className="relative">
            <FaRegHeart className="cursor-pointer" />
            <span className="absolute -top-2  -right-2 text-xs bg-yellow-950 text-white px-1 rounded-full">
              0
            </span>
          </div>
          <div className="relative">
            <GrBasket className="cursor-pointer" />
            <span className="absolute -top-2 -right-2 text-xs bg-yellow-950 text-white px-1 rounded-full">
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
