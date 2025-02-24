import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "../assets/images/Logo (1).svg";

const ButtonNavbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile dropdown

  // Menu Items for top section with paths
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/workplace" },
    { name: "News", path: "/UfuonFun" },
    { name: "School", path: "/branch" },
  ];

  // Levels for links
  const levels = [
    { name: "Low Level", path: "/low-project" },
    { name: "High Level", path: "/high-level" },
    { name: "Advanced", path: "/advanced-project" },
  ];

  // Toggle dropdown on click (for mobile view)
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className="w-full px-4 py-4 bg-white shadow-md">
      {/* Logo and Menu Items Section */}
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-20 h-20" />

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="text-gray-800 font-semibold hover:text-blue-600 cursor-pointer"
                onClick={() => navigate(item.path)} // Navigate to the item's path
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Levels as Links and Enroll Button Section */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Levels as Links */}
          <div className="flex space-x-4">
            {levels.map((level, index) => (
              <span
                key={index}
                onClick={() => navigate(level.path)}
                className="text-gray-800 font-medium hover:text-blue-600 cursor-pointer"
              >
                {level.name}
              </span>
            ))}
          </div>

          {/* Enroll Button */}
          <button
            onClick={() => navigate("/enroll")}
            className="py-3 px-6 bg-red-600 text-white rounded-lg font-medium hover:bg-orange-600 transition-transform duration-300"
          >
            Enroll
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-orange-800 focus:outline-none text-3xl font-bold" // Increased size and bold weight
            onClick={toggleMenu}
          >
            ☰ {/* Hamburger Icon */}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-gray-100 rounded-lg shadow-md">
          <ul className="space-y-4 px-4 py-2">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="text-gray-800 font-medium hover:text-blue-600 cursor-pointer"
                onClick={() => {
                  navigate(item.path);
                  setMenuOpen(false); // Close menu on selection
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>

          <div className="mt-2 px-4 py-2">
            <span className="block text-gray-800 font-semibold">Levels</span>
            <ul className="space-y-2 mt-2">
              {levels.map((level, index) => (
                <li
                  key={index}
                  className="text-gray-800 font-medium hover:text-blue-600 cursor-pointer"
                  onClick={() => {
                    navigate(level.path);
                    setMenuOpen(false); // Close menu on selection
                  }}
                >
                  {level.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 px-4 py-2">
            <button
              onClick={() => {
                navigate("/enroll");
                setMenuOpen(false); // Close menu on selection
              }}
              className="w-full py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-orange-600"
            >
              Enroll
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonNavbar;
