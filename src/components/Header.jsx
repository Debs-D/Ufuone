import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/Logo (1).svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["News", "Work", "School", "Home", "Study", "Discover"];
  const menuBars = ["Contact Sales", "Play", "Login"];
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const currentPath = window.location.pathname;

    if (currentPath === "/") {
      navigate("/branch");
    } else {
      navigate("/");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on component unmount
    };
  }, [isMenuOpen]);

  return (
    <div
      className="flex items-center justify-between px-4 py-4 h-[78px]"
      style={{ backgroundColor: "rgba(243, 243, 243, 1)" }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-20 h-20 md:w-auto md:h-full" />
      </div>

      {/* Mobile Buttons and Hamburger */}
      <div className="flex items-center md:hidden space-x-4">
        <button
          onClick={() => navigate("/login")}
          className="text-gray-800 font-semibold hover:text-blue-600 cursor-pointer"
        >
          Login
        </button>
        <button
          onClick={handleButtonClick}
          className="py-2 px-4 bg-[#fe0804] text-white rounded-lg text-sm font-medium hover:bg-[#e00703] transition-transform duration-300"
        >
          Sign up FREE
        </button>
        <button
          onClick={toggleMenu}
          className="text-orange-500 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        <ul className="list-none flex space-x-7">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="py-2 text-gray-800 font-semibold hover:text-blue-600 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
        <ul className="list-none flex space-x-7">
          {menuBars.map((item, index) => (
            <li
              key={index}
              className="text-gray-800 font-semibold hover:text-blue-600 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
        <button
          onClick={handleButtonClick}
          className="py-3 px-8 bg-[#fe0804] text-white rounded-lg text-xl font-medium hover:bg-[#e00703] hover:scale-105 transition-transform duration-300"
        >
          Sign up FREE
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-[78px] right-0 bg-white shadow-lg p-4 w-3/4 rounded-lg md:hidden z-50">
          <ul className="list-none flex flex-col space-y-4">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="py-2 text-gray-800 font-semibold hover:text-blue-600 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
          <ul className="list-none flex flex-col space-y-4 mt-4">
            {menuBars.map((item, index) => (
              <li
                key={index}
                className="text-gray-800 font-semibold hover:text-blue-600 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
