import { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import click from "../assets/images/Vector (2).svg";
import navImg from "../assets/images/image_fx_ (11) 1.svg";
import navImg1 from "../assets/images/image_fx_ (14) 1.svg";
import navImg2 from "../assets/images/Mask group (2).svg";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4, // Display 4 boxes
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
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
        dots: false, // Hide dots for mobile for a cleaner view
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
    { image: navImg, title: "PCB Design" },
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
      <div className="w-full sm:w-auto flex-1 max-w-4xl">
        {isMobileView ? (
          <div className="flex items-center justify-center gap-4">
            <div className="relative w-[200px] h-[120px] rounded-lg overflow-hidden">
              <img
                src={data[0].image}
                alt=""
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
              <div key={index} className="p-2 flex items-center justify-center">
                <div className="relative w-[200px] h-[120px] rounded-lg overflow-hidden shadow-md">
                  <img
                    src={ele.image}
                    alt={ele.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  {!isMobileView && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <p className="text-white text-center text-sm font-semibold">
                        {ele.title}
                      </p>
                    </div>
                  )}
                </div>
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
