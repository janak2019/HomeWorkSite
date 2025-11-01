import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Lucide icons (already included in shadcn setup or install via npm)
import Logo from "../assets/Logo.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const linkClass = (path) =>
    pathname === path
      ? "text-yellow-300 font-semibold"
      : "hover:text-gray-200";

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center">
         <Link to="/" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="HomeworkHub Logo"
            className="w-20 h-20 object-contain"
          />
          <span className="text-2xl font-bold hidden sm:block">
            HomeworkHub
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li><Link to="/" className={linkClass("/")}>Home</Link></li>
          <li><Link to="/about" className={linkClass("/about")}>About</Link></li>
          <li><Link to="/contact" className={linkClass("/contact")}>Contact</Link></li>
        </ul>

        {/* Right Side Buttons */}
        <div className="hidden md:flex gap-3">
          <Link to="/login" className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100">
            Login
          </Link>
          <Link to="/register" className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-300">
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden">
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-3 flex flex-col items-center gap-3 bg-blue-700 py-4 rounded-lg">
          <Link onClick={toggleMenu} to="/" className={linkClass("/")}>Home</Link>
          <Link onClick={toggleMenu} to="/about" className={linkClass("/about")}>About</Link>
          <Link onClick={toggleMenu} to="/contact" className={linkClass("/contact")}>Contact</Link>
          <hr className="w-3/4 border-gray-400 my-2" />
          <Link
            onClick={toggleMenu}
            to="/login"
            className="bg-white text-blue-600 w-3/4 text-center py-2 rounded"
          >
            Login
          </Link>
          <Link
            onClick={toggleMenu}
            to="/register"
            className="bg-yellow-400 text-black w-3/4 text-center py-2 rounded"
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
