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
    { image: navImg, title: "PCB Design" },
  ];

  return (
    <nav className="bg-custom-gradient flex flex-col sm:flex-row items-center justify-between p-4 w-full">
      <Link to="/UfuonFun" className="mb-4 ml-6 sm:mb-0 sm:mr-6">
        {!isMobileView && (
          <h3 className="text-white text-[24px] font-bold leading-tight">
            Build with
            <br />
            Ufuon
          </h3>
        )}
      </Link>
      <div className="w-full sm:w-auto flex-1 max-w-6xl">
        <Slider {...settings}>
          {data.map((ele, index) => (
            <div key={index} className="slick-item">
              <div className="relative w-[220px] h-[130px] rounded-lg overflow-hidden shadow-md">
                <img
                  src={ele.image}
                  alt={ele.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <p className="text-white text-center text-sm font-semibold">
                    {ele.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="sm:ml-6 mr-14">
        <Link
          to="/build"
          className="flex items-center justify-center gap-2 bg-[#fe0804] hover:bg-[#e00703] text-white text-[18px] font-medium py-3 px-6 rounded-md transition-transform duration-200 hover:scale-105"
        >
          <img src={click} alt="icon" className="w-5 h-5" />
          <span>Build</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
