import { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import click from "../assets/images/Vector (2).svg";
import navImg from "../assets/images/image_fx_ (11) 1.svg";
import navImg1 from "../assets/images/image_fx_ (14) 1.svg";
import navImg2 from "../assets/images/Mask group (2).svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: "0px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        centerMode: false,
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
    <nav className="bg-custom-gradient flex items-center justify-between p-4 w-full">
      {/* Remove text on mobile */}
      {!isMobileView && (
        <Link to="/UfuonFun" className="ml-6">
          <h3 className="text-white text-[24px] font-bold leading-tight">
            Build with
            <br />
            Ufuon
          </h3>
        </Link>
      )}

      {/* Slider & Button Container */}
      <div className="flex items-center w-full gap-2 sm:gap-4">
        {/* Slider */}
        <div className="flex-1 w-full max-w-6xl">
          <Slider {...settings}>
            {data.map((ele, index) => (
              <div key={index} className="slick-item w-[150px] sm:w-[180px]">
                <div className="relative w-full h-[100px] sm:h-[130px] rounded-lg overflow-hidden shadow-md">
                  <img
                    src={ele.image}
                    alt={ele.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <p className="text-white text-center text-xs sm:text-sm font-semibold">
                      {ele.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Build Button Beside Slider */}
        <div className="sm:ml-6 flex-shrink-0 mr-4">
          <Link
            to="/build"
            className="flex items-center justify-center bg-[#fe0804] hover:bg-[#e00703] text-white p-2 sm:py-3 sm:px-6 rounded-md transition-transform duration-200 hover:scale-105"
            style={{ width: isMobileView ? "40px" : "auto" }}
          >
            <img src={click} alt="icon" className="w-5 h-5 sm:w-6 sm:h-6" />
            {!isMobileView && <span className="ml-2">Build</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
