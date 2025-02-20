import { useState, useEffect, useContext } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import click from "../assets/images/Vector (2).svg";
import buffer from '../assets/images/buffer.gif'
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



//to={`/project/detail/${ToSeoUrl(prod.name)}/${prod._id}`}

const Navbar = () => {
  const { data } = useContext(DataContext);

  console.log(data);
  
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  function ToSeoUrl(url) {
  // make the url lowercase
  var encodedUrl = url.toString().toLowerCase();
  // replace & with and
  encodedUrl = encodedUrl.split(/\&+/).join("-and-")
  // remove invalid characters
  encodedUrl = encodedUrl.split(/[^a-z0-9]/).join("-");
  // remove duplicates
  encodedUrl = encodedUrl.split(/-+/).join("-");
  // trim leading & trailing characters
  encodedUrl = encodedUrl.trim('-');
  return encodedUrl;
}


  return (


    <nav className="bg-custom-gradient flex items-center justify-between p-4 w-full overflow-hidden ">
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
      <div className="nav flex items-center w-full max-w-[100%] max-sm:justify-center ">
        {/* Slider */}
        <div className={`flex flex-col w-full  max-w-[1040px]  max-sm:max-w-[300px]  ${data.length < 1 ? 'items-center': ''}`}>
          {/*  max-[1444px]:max-w-[1200px] */}
        { data.length < 1 ? 
        <img src={buffer} alt="buffer" className="w-10 h-10" /> :

            <Slider {...settings}>
            {data.map((ele, index) => (
              <div key={index} className="slick-item " >
                <a href={`www.store.ufuon.com/project/detail/${ToSeoUrl(ele.name)}/${ele._id}`}  >
                <div className="relative w-[210px] h-[110px] rounded-lg shadow-md max-sm:w-[140px] max-sm:h-[100px] overflow-hidden"> 
                  <img
                    src={ele.url}
                    alt={ele.name.toUpperCase()}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <p className="text-white text-center text-sm font-semibold px-2">
                      {ele.name}
                    </p>
                  </div>
                </div>
                </a>
            
              </div>
            ))}
            </Slider>
}
        </div>

        {/* Build Button Beside Slider */}
        <div className="sm:ml-6 max-sm:pl-2 relative right-4 max-sm:left-2">
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
