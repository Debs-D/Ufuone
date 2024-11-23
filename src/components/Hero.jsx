import { useState, useEffect } from "react";
import img1 from "../assets/images/Frame 41.svg";
import img2 from "../assets/images/Frame 54.svg";
import img3 from "../assets/images/Frame 58.svg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Learn, Play, Grow: Discover a New Way to Learn",
      description:
        "Explore engaging games, connect with classmates, and unlock your full potential.",
      image: img1,
    },
    {
      title:
        "Engage, Educate, Empower with Ufuon's Classroom Management Solution",
      description:
        "Explore engaging games, connect with classmates, and unlock your full potential.",
      image: img2,
    },
    {
      title:
        "Fuel Your Child's Passion: Explore STEM with Ufuon and our Online Store",
      description:
        "Access curated STEM content, engage in hands-on projects. Shop our extensive collection of STEM resources.",
      image: img3,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleNextImage = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(0,_92,_179,_0.15)_0%,_rgba(0,_40,_77,_0)_100%)]">
      <div className=" flex flex-col md:flex-row items-center justify-center w-full max-w-[1440px] px-6 space-y-6 md:space-y-0">
        <div className=" flex flex-col items-center md:items-start w-full md:w-[594px] space-y-4">
          <h3 className="font-outfit text-[64px] font-medium text-black leading-[79.9px] text-center md:text-left">
            {slides[currentSlide].title}
          </h3>
          <p className="font-outfit text-[30px] font-normal text-black leading-[37.8px] text-center md:text-left">
            {slides[currentSlide].description}
          </p>
        </div>

        <div className="w-full md:w-[662.5px] h-[594px] flex  justify-center">
          <img
            src={slides[currentSlide].image}
            alt="Illustration"
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center space-y-4">
        <div className=" flex justify-center space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full cursor-pointer ${
                index === currentSlide ? "bg-orange-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>

        <button onClick={handleNextImage}></button>
      </div>
    </div>
  );
};

export default Hero;
