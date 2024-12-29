import { useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "../assets/images/Logo (1).svg";

const ButtonNavbar = () => {
  const navigate = useNavigate();

  // Menu Items for top section
  const menuItems = ["Home", "Work", "News", "School"];

  // Buttons for low level, high level, advanced level
  const levelButtons = ["Low Level", "High Level", "Advanced"];

  const handleLevelClick = (level) => {
    if (level === "Low Level") {
      navigate("/low-level");
    } else if (level === "High Level") {
      navigate("/high-level");
    } else if (level === "Advanced") {
      navigate("/advanced");
    }
  };

  return (
    <div className="w-full px-4 py-4 bg-white shadow-md">
      {/* Logo and Menu Items Section */}
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-20 h-20" />
          <ul className="flex space-x-6">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="text-gray-800 font-semibold hover:text-blue-600 cursor-pointer"
                onClick={() => (item === "Home" ? navigate("/") : null)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Level Buttons and Enroll Button Section */}
        <div className="flex items-center space-x-4">
          <div className="flex space-x-4">
            {levelButtons.map((level, index) => (
              <button
                key={index}
                onClick={() => handleLevelClick(level)}
                className="py-2 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-transform duration-300"
              >
                {level}
              </button>
            ))}
          </div>

          {/* Enroll Button */}
          <button
            onClick={() => navigate("/enroll")}
            className="py-2 px-6 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-transform duration-300"
          >
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonNavbar;
