import { useState, useEffect } from "react";
import Slider from "react-slick";
import click from "../assets/images/Vector (2).svg";
import { Link } from "react-router-dom";

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
      image:
        "https://s3-alpha-sig.figma.com/img/f7fa/82d8/7eb1c7a7ce84e4d66e935d07e63a6440?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qAYsJlUz-9On8ODAIujJKr4PiLccPq8sP43qVk8~hs-TRQPMMNvsCgW7sB58FL35a3fxpwsJejoaBpZ0r-1o2PyqbchM2kVqCYyr5FYm57YbxoDNnkPc4Oxz5oDvvR-43f-kJkdoz7N0mUzLfFB0aNrVKuavAoaHWCPEWzg8~MI6vgN2wl~-hOy4NKaso7Qv6c8Lv6e2wQfePF-SYnVLGjQN4avV19KVNoiDYSqo18UE92a4TE4pSgI1zGKhShTDSq9x2P0~xdMtXx-PJOurGNsvbmx7l6LXCZGrUOSq2cUaolIItqR0coKqd8PFtncCtoFfKhvL~alZ-T~onLna3Q__",
      title: "Capacitive Circuit",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/0ba3/099a/0c7c5fa08458879f9ff74b86a3e01ba7?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f6WRO-CNjBu~4yd5YfgXXlkuLklYZ3DjCHGVLZskVKDtKq1jmo0bktabk7TJj2D6DyD9O7xftUCC2ezSql~Mdz1~X7--aJSG1qi5vL~9wAw-R1Z1h65EEOUJT04Irrq0LK4fS6uJOeyVYEL7uMRfbGQDLE5vOXLdYDQFmKNX6idXyX-ccx7ocgdxCLen8jzPL8vCtkcdatvjUuTnsXWD1wlWqyo4y67yEMtJW7ya0jju~g5Q2mHrMnTDlH-SitO9YPYxVY9FbZvmVM05EYs5IJlzjtmcP1lPImW8ZXyGhdO9BB7apCDRgup4pd4hWxijlLdijzE464vt35eEPC2JMg__",
      title: "Microcontroller Project",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/f7fa/82d8/7eb1c7a7ce84e4d66e935d07e63a6440?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qAYsJlUz-9On8ODAIujJKr4PiLccPq8sP43qVk8~hs-TRQPMMNvsCgW7sB58FL35a3fxpwsJejoaBpZ0r-1o2PyqbchM2kVqCYyr5FYm57YbxoDNnkPc4Oxz5oDvvR-43f-kJkdoz7N0mUzLfFB0aNrVKuavAoaHWCPEWzg8~MI6vgN2wl~-hOy4NKaso7Qv6c8Lv6e2wQfePF-SYnVLGjQN4avV19KVNoiDYSqo18UE92a4TE4pSgI1zGKhShTDSq9x2P0~xdMtXx-PJOurGNsvbmx7l6LXCZGrUOSq2cUaolIItqR0coKqd8PFtncCtoFfKhvL~alZ-T~onLna3Q__",
      title: "Robotics Project",
    },
    // Add more items as needed...
  ];

  return (
    <nav className="bg-custom-gradient flex items-center w-full overflow-hidden justify-between p-6">
      <Link to="/UfuonFun">
        <h3 className="text-white text-[49.04px] sm:text-[24px] nav-font font-bold leading-[46.71px] text-left font-visby">
          Ufuon <br /> school
        </h3>
      </Link>

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

      <div className="w-auto py-2 px-4 bg-[#fe0804] flex items-center gap-3 text-white rounded-lg text-[18px] font-semibold hover:bg-[#e00703] hover:scale-105 transition-transform duration-300">
        <img src={click} alt="img" className="w-6 h-6 object-contain" />
        <Link to="/build" className="text-lg">
          Build
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
