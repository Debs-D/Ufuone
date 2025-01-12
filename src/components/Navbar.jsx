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
  slidesToShow: 4,
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
      setIsMobileView(window.innerWidth <= 640); // Set breakpoint for mobile
    };
    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize); // Add event listener
    return () => window.removeEventListener("resize", handleResize); // Clean up
  }, []);

  const data = [
    {
      image: navImg,
      title: "Capacitive Circuit",
    },
    {
      image: navImg1,
      title: "Microcontroller Project",
    },
    {
      image: navImg2,
      title: "Robotics Project",
    },
  ];

  return (
    <nav className="bg-custom-gradient flex items-center w-full overflow-hidden justify-between p-6">
      {/* Logo Section */}
      <Link to="/UfuonFun">
        <h3 className="text-white text-[49.04px] sm:text-[24px] font-bold leading-[46.71px] text-left font-visby">
          Ufuon <br /> school
        </h3>
      </Link>

      {/* Slider Section */}
      <div className="w-full h-28 [&_.slick-slider]:h-28 max-w-6xl">
        {!isMobileView && (
          <Slider {...settings}>
            {data.map((ele, index) => (
              <div
                key={index}
                className="relative w-full h-28 flex-shrink-0 rounded-md shadow-md"
              >
                <img
                  src={ele.image}
                  alt={ele.title}
                  className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform"
                />
                <div className="absolute bottom-2 left-2 text-white bg-black/60 px-2 py-1 rounded-md text-sm font-semibold">
                  {ele.title}
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>

      {/* Button Section */}
      <div>
        <Link
          to="/build"
          className="text-lg sm:text-sm md:text-lg font-medium whitespace-nowrap  flex items-center justify-center gap-3 bg-[#fe0804] text-white rounded-lg text-[18px] font-semibold 
          hover:bg-[#e00703] hover:scale-105 transition-transform duration-300 
          w-auto py-2 px-4 sm:py-1 sm:px-3 md:py-2 md:px-4"
        >
          <img
            src={click}
            alt="icon"
            className="w-6 h-6 object-contain sm:w-5 sm:h-5 md:w-6 md:h-6"
          />
          Build
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
