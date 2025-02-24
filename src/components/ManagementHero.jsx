import Slider from "react-slick";
//import schImg from "../assets/images/pexels-katerina-holmes-5905957 1.svg";
// import logo from "../assets/images/Logo (1).svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import schImg from "../assets/images/pexels-vanessa-loring-7869049 1.svg";
import logo1 from '../assets/School logo/logo1.jpg'
import logo2 from '../assets/School logo/logo2.jpg'
import logo3  from '../assets/School logo/logo3.png'
import logo4 from '../assets/School logo/logo4.jpg'
//import logo5 from '../assets/School logo/logo5.jpg'
import logo6 from '../assets/School logo/logo6.jpg'
 



const settings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 2 } },
  ],
};

const logos = [logo1, logo2, logo3, logo4, logo6]

const Hero = () => {
  
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(0,_92,_179,_0.15)_0%,_rgba(0,_40,_77,_0)_100%)]">
      {/* Content Wrapper */}
      <div className=" relative bottom-10 flex flex-col gap-10 md:flex-row-reverse items-center justify-center w-full  max-w-[1440px] mx-auto px-6 md:px-10 ">
        {/* Image Section */}
        <div className="w-full h-[200px] md:w-[562.5px] md:h-[404px] flex justify-center max-sm:w-[300px] max-sm:h-[200px] overflow-hidden ">
          <img
            src={schImg}
            alt="Illustration"
            className="w-full h-full object-contain "
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start w-full md:w-[603px] space-y-4 gap-10">
          <h3 className="font-outfit text-[32px] md:text-[45px] font-medium text-[rgba(254,0,0,1)] leading-[79.9px] text-center md:text-left max-sm:text-2xl ">
            {" "}
            Ufuon School STEM System
          </h3>
          <p className="font-outfit text-[16px] md:text-[30px] font-normal text-black leading-[37.8px] text-center md:text-left">
            {" "}
            A cloud-based platform designed to support independent and
            international schools across Nigeria.
          </p>
        </div>
      </div>

      {/* Sliding Logo Section */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full mb-20 mt-10 max-w-7xl px-6 md:px-10 max-sm:mb-0">
        {/* "Schools We Worked With" Text */}
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-red-500 text-transparent bg-clip-text animate-pulse">
          Schools We Worked With
        </h2>

        {/* Slider */}
        <div className="w-full md:w-[70%]">
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} className="flex justify-center h-auto w-[500px]">
                <img
                  src={logo}
                  alt="Logo"
                  className=" md:w-[100px] md:h-[100px] max-sm:w-[100px] h-auto object-contain mt-5 rounded-full"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
