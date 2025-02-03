import Slider from "react-slick";
import schImg from "../assets/images/pexels-katerina-holmes-5905957 1.svg";
import logo from "../assets/images/Logo (1).svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(0,_92,_179,_0.15)_0%,_rgba(0,_40,_77,_0)_100%)]">
      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row-reverse items-center mt-48 justify-center w-full max-w-[1440px] mx-auto px-6 space-y-4 md:space-y-0">
        {/* Image Section */}
        <div className="w-full h-[400px] md:w-[662.5px] md:h-[794px] flex justify-center">
          <img
            src={schImg}
            alt="Illustration"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start w-full md:w-[603px] space-y-4">
          <h3 className="font-outfit text-[32px] md:text-[54px] font-medium text-[rgba(254,0,0,1)] leading-[79.9px] text-center md:text-left">
            Ufuon School STEM System
          </h3>
          <p className="font-outfit text-[16px] md:text-[30px] font-normal text-black leading-[37.8px] text-center md:text-left">
            A cloud-based platform designed to support independent and
            international schools across Nigeria.
          </p>
        </div>
      </div>

      {/* Sliding Logo Section */}
      <div className="w-full max-w-5xl px-4 md:px-10 mb-80">
        <Slider {...settings}>
          {[...Array(10)].map((_, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={logo}
                alt="Logo"
                className="w-[700px] md:w-[200px] h-auto object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
