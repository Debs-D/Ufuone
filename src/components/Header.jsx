import logo from "../assets/images/Logo (1).svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
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

  return (
    <div
      className="flex flex-wrap items-center justify-around p-4 h-[78px]"
      style={{ backgroundColor: "rgba(243, 243, 243, 1)" }}
    >
      <div className="flex flex-wrap items-center space-x-8">
        <img src={logo} alt="Logo" className="w-auto h-full" />
        <ul className="list-none flex  space-x-7">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="py-2 text-gray-800 font-semibold  hover:text-blue-600 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center space-x-4">
        <ul className="list-none flex flex-wrap space-x-7">
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
      <button
        onClick={handleButtonClick}
        className="py-3 px-8 bg-[#fe0804] text-white rounded-lg text-xl font-medium hover:bg-[#e00703] hover:scale-105 transition-transform duration-300"
      >
        Sign up FREE
      </button>
    </div>
  );
};

export default Header;
