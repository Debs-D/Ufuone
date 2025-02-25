import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/images/Logo (1).svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSchoolDropdownOpen, setIsSchoolDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", path: "/" },
    {
      label: "School",
      path: "/branch",
      dropdown: [
        { label: "STEM EDU", path: "/branch" },
        { label: "Management", path: "/UfoneManagement" },
       
      ],
    },
    { label: "Store", path: "https://www.store.ufuon.com", target: '_blank'  },
    { label: "Build", path: "/build" },
    { label: "Contact us", path: "/contactUfone" },
  ];

  const menuBars = ["Login"];

  // const handleButtonClick = () => {
  //   navigate(window.location.pathname === "/" ? "/branch" : "/");
  // };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownItemClick = (path) => {
    navigate(path);
    setIsSchoolDropdownOpen(false); // Close the dropdown when an item is clicked
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <div
      className="flex items-center justify-between px-4 py-4 h-[78px]"
      style={{ backgroundColor: "rgba(243, 243, 243, 1)" }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-20 md:w-auto md:h-full"
          />
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="flex items-center md:hidden space-x-4">
        <button
          onClick={() => navigate("/login")}
          className="text-gray-800 font-semibold hover:text-blue-600 cursor-pointer"
        >
          Login
        </button>
        <button
          onClick={()=> navigate('/low-project')}
          className="py-2 px-4 bg-[#fe0804] text-white rounded-lg text-sm font-medium hover:bg-[#e00703] transition-transform duration-300"
        >
          Enroll
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
          {menuItems.map((item, index) =>
            item.dropdown ? (
              <li
                key={index}
                className="relative py-2 text-gray-800 font-semibold hover:text-blue-600 cursor-pointer"
                onMouseEnter={() => setIsSchoolDropdownOpen(true)}
                onMouseLeave={() => setIsSchoolDropdownOpen(false)}
              >
                <button
                  onClick={() => setIsSchoolDropdownOpen(!isSchoolDropdownOpen)}
                  className="focus:outline-none"
                >
                {item.label}
                </button>

                {isSchoolDropdownOpen && (
                  <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2 max-h-48 overflow-y-auto z-50">
                    {item.dropdown.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="py-2 px-4 hover:bg-gray-100"
                      >
                        <button
                          onClick={() => handleDropdownItemClick(subItem.path)}
                          className="w-full text-left"
                        >
                          {subItem.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li
                key={index}
                className="py-2 text-gray-800 font-semibold hover:text-blue-600"
              >
                <Link to={item.path} className="cursor-pointer"   onClick={(e) => {
                  if (item.target) {
                    // Prevent the default navigation
                   e.preventDefault();  window.open(item.path, item.target);  }}}>
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Login and Sign-up */}
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
          onClick={()=> navigate('/low-project')}
          className="py-3 px-8 bg-[#fe0804] text-white rounded-lg text-xl font-medium hover:bg-[#e00703] hover:scale-105 transition-transform duration-300"
        >
          Enroll 
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isMenuOpen && (
        <div className="absolute top-[78px] right-0 bg-white shadow-lg p-4 w-3/4 rounded-lg md:hidden z-50">
          <ul className="list-none flex flex-col space-y-4">
            {menuItems.map((item, index) =>
              item.dropdown ? (
                <li key={index} className="relative">
                  <button
                    onClick={() =>
                      setIsSchoolDropdownOpen(!isSchoolDropdownOpen)
                    }
                    className="block py-2 text-gray-800 font-semibold hover:text-blue-600 cursor-pointer w-full text-left"
                  >
                    {item.label}
                  </button>
                  {isSchoolDropdownOpen && (
                    <ul className="ml-4 max-h-48 overflow-y-auto bg-gray-100 rounded-lg p-2">
                      {item.dropdown.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="py-2 text-gray-800 hover:text-blue-600"
                        >
                          <button
                            onClick={() =>
                              handleDropdownItemClick(subItem.path)
                            }
                            className="w-full text-left"
                          >
                            {subItem.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li
                  key={index}
                  className="py-2 text-gray-800 font-semibold hover:text-blue-600"
                >
                  <Link to={item.path}>{item.label}</Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
