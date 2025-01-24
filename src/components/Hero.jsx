import { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import click from "../assets/images/Vector (2).svg";
import navImg from "../assets/images/image_fx_ (11) 1.svg";
import navImg1 from "../assets/images/image_fx_ (14) 1.svg";
import navImg2 from "../assets/images/Mask group (2).svg";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Navbar = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = [
    { image: navImg, title: "Capacitive Circuit" },
    { image: navImg1, title: "Microcontroller Project" },
    { image: navImg2, title: "Robotics Project" },
  ];

  return (
    <nav className="bg-custom-gradient flex flex-col sm:flex-row items-center justify-between p-4 w-full">
      {/* Logo */}
      <Link to="/UfuonFun" className="mb-4 sm:mb-0 sm:mr-6">
        <h3 className="text-white text-[32px] font-bold leading-tight">
          Build with Ufuon
        </h3>
      </Link>

      {/* Slider Section */}
      <div className="w-full sm:w-auto flex-1 max-w-4xl h-auto">
        {isMobileView ? (
          <div className="flex items-center justify-center gap-4">
            <div className="relative w-[200px] h-[150px] rounded-lg overflow-hidden">
              <img
                src={data[0].image}
                alt={data[0].title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Mobile "Build" Button */}
            <Link
              to="/build"
              className="flex items-center gap-2 bg-[#fe0804] hover:bg-[#e00703] text-white text-[16px] font-medium py-2 px-4 rounded-md transition-transform duration-200 hover:scale-105"
            >
              <img src={click} alt="icon" className="w-5 h-5" />
              <span>Build</span>
            </Link>
          </div>
        ) : (
          <Slider {...settings}>
            {data.map((ele, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-lg overflow-hidden transition-transform duration-200 hover:scale-105"
              >
                <img
                  src={ele.image}
                  alt={ele.title}
                  className="w-full h-[150px] object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>
        )}
      </div>

      {/* Desktop "Build" Button */}
      {!isMobileView && (
        <div className="sm:ml-6">
          <Link
            to="/build"
            className="flex items-center gap-2 bg-[#fe0804] hover:bg-[#e00703] text-white text-[18px] font-medium py-2 px-4 rounded-md transition-transform duration-200 hover:scale-105"
          >
            <img src={click} alt="icon" className="w-5 h-5" />
            <span>Build</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
