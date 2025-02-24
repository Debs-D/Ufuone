import Header from "../components/Header";
import img1 from "../assets/images/Frame 115 (1).svg";
import img2 from "../assets/images/Frame 115.svg";
import img3 from "../assets/images/Frame 116.svg";
import img4 from "../assets/images/Frame 117.svg";
import ContactQuestion from "../components/ContactQuestion";
import Footer from "../components/Footer";
import Slider from "react-slick"; // Import Slider from react-slick
import { useEffect } from "react";

const ContactUfone = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the component loads
  }, []);

  const contactData = [
    {
      imgUrl: img4,
      title: "Chat to Support",
      description: "wa.me//+234 907 456",
    },
    {
      imgUrl: img3,
      title: "Call Us",
      description: "+234 907 456",
    },
    {
      imgUrl: img2,
      title: "Email",
      description: "Visit our office @",
    },
    {
      imgUrl: img1,
      title: "Visit us",
      description: "Visit our office @",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable arrows on mobile view
    autoplay: true, // Autoplay the slider
    autoplaySpeed: 3000, // Autoplay speed in milliseconds
  };

  return (
    <>
      {/* Render ButtonNavbar */}
      <Header />

      <div>
        {/* Heading */}
        <h1 className="p-10 text-[75px] font-semibold leading-[79.32px] text-center sm:text-[40px] sm:leading-[40px] max-sm:text-[30px]">
          Contact our friendly team
        </h1>

        {/* Subheading */}
        <p className="text-[30px] font-normal leading-[37.8px] text-center sm:text-[18px] sm:leading-[24px]">
          Let us know how we can help
        </p>

        {/* Button */}
        <div className="flex items-center justify-center ">
          {/* <button
            className="py-2 px-4 bg-[#fe0804] w-[220.52px] h-[46px] text-white 
                         rounded-lg text-[20px] font-medium 
                         hover:bg-[#e00703] transition-transform duration-300
                         sm:w-[200px] sm:h-[40px] sm:text-[16px]"
          >
            Send an email
          </button> */}
        </div>

        {/* Mobile View Slider */}
        <div className="sm:hidden mt-20 ">
          <Slider {...settings}>
            {contactData.map((box, index) => (
              <div
                key={index}
                className="w-[2201.48px] h-[340.93px] bg-gray-100 shadow-lg rounded-[17.55px] 
                flex flex-col items-center justify-center p-5 text-center 
                transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={box.imgUrl}
                  alt={box.title}
                  className="w-20 h-20 mb-4"
                />
                <h2 className="text-[24px] font-semibold mb-2 sm:text-[18px]">
                  {box.title}
                </h2>
                <p className="text-[18px] font-semibold sm:text-[14px]">
                  {box.description}
                </p>
              </div>
            ))}
          </Slider>
        </div>

        {/* Desktop View Grid */}
        <div className="hidden sm:flex items-center justify-center gap-5 mt-10 p-6">
          {contactData.map((box, index) => (
            <div
              key={index}
              className="w-[301.48px] h-[340.93px] bg-gray-100 shadow-lg rounded-[17.55px] 
              flex flex-col items-center justify-center p-5 text-center 
              transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={box.imgUrl}
                alt={box.title}
                className="w-20 h-20 mb-4"
              />
              <h2 className="text-[24px] font-semibold mb-2">{box.title}</h2>
              <p className="text-[18px] font-semibold">{box.description}</p>
            </div>
          ))}
        </div>

        {/* Render ContactQuestion component */}
        <div className="mt-16">
          <ContactQuestion />
        </div>

        {/* Render Footer */}
        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ContactUfone;
