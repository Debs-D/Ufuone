import { useState, useEffect, useContext } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import click from "../assets/images/Vector (2).svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DataContext } from "./DataContext";

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
  const { data } = useContext(DataContext);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-custom-gradient flex items-center justify-between p-4 w-full">
      {/* Remove text on mobile */}
      {!isMobileView && (
        <Link to="/UfuonFun" className="ml-3 pr-5">
          <h3 className="text-white text-[24px] font-bold leading-tight ">
            Build with
            <br />
            Ufuon
          </h3>
        </Link>
      )}

      {/* Slider & Button Container */}
      <div className="nav flex items-center">
        {/* Slider */}
        <div className="flex flex-col w-full max-w-[1010px] max-sm:max-w-[295px]">
          <Slider {...settings}>
            {data.map((ele, index) => (
              <div key={index} className="slick-item">
                <div className="relative w-[220px] h-[120px] rounded-lg overflow-hidden shadow-md max-sm:w-[140px] max-sm:h-[100px]"> 
                  <img
                    src={ele.url}
                    alt={ele.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <p className="text-white text-center text-sm font-semibold">
                      {ele.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Build Button Beside Slider */}
        <div className="sm:ml-6  mr-4 max-sm:pl-2">
          <Link
            to="/build"
            className="flex items-center justify-center bg-[#fe0804] hover:bg-[#e00703] text-white p-2 sm:py-3 sm:px-6 rounded-md transition-transform duration-200 hover:scale-105 max-sm:h-[100px]"
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
