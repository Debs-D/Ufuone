import Slider from "react-slick";
import Box from "./Boxer";
import img1 from "../assets/images/Mask group (4).svg";
import img2 from "../assets/images/Mask group (3).svg";
import img3 from "../assets/images/image_fx_ (19) 2.svg";

const Review = () => {
  const boxData = [
    {
      imgUrl: img1,
      title: "Patience Amem",
      subtitle: "Parent",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni.",
    },
    {
      imgUrl: img2,
      title: "Mark James",
      subtitle: "Teacher",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni.",
    },
    {
      imgUrl: img3,
      title: "John Igwe",
      subtitle: "Worker",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni.",
    },
    {
      imgUrl: img2,
      title: "Sarah Adams",
      subtitle: "Student",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni.",
    },
  ];

  // Slider settings for all screens including desktop
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Reviews
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Hear from real users and see how Ufuon is transforming their
            experience with powerful, interactive tools.
          </p>
        </div>

        {/* Slider for Desktop and Mobile */}
        <div className="mx-auto mt-10 max-w-5xl">
          <Slider {...sliderSettings}>
            {boxData.map((box, index) => (
              <Box
                key={index}
                imgUrl={box.imgUrl}
                title={box.title}
                subtitle={box.subtitle}
                description={box.description}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Review;
