import Slider from "react-slick";
import Boxes from "./Boxes";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true, // Ensure arrows are enabled
  responsive: [
    {
      breakpoint: 1200, // For tablets
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768, // For smaller screens
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480, // For mobile devices
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Feature = () => {
  const boxData = [
    {
      title: "CTrack learning progress",
      description:
        "Monitor and adapt lessons to your needs efficiently.",
      bgColor: "bg-blue-900",
    },
    {
      title: "Create lessons and quizzes",
      description:
        "Manage assignments, create lessons and quizzes easily. ",
      bgColor: "bg-blue-900",
    },
    {
      title: "Schedule lessons or Classes",
      description:
        "Scheduling lessons is Straightforward with just a few clicks.",
      bgColor: "bg-blue-900",
    },
    {
      title: "Get a tutor for lessons",
      description:
        "You can easily find a suitable tutor for yourself and others in the shortest possible time.",
      bgColor: "bg-blue-900",
    },
  ];

  return (
    <section className="p-6 flex flex-col items-center justify-center mt-10">
      <div className="text-center mb-10">
        <h3 className="text-4xl font-semibold text-black mb-2">
          Included Features
        </h3>
        <p className="text-xl text-gray-700">
          Explore the key features and tools designed to enhance your
          experience.
        </p>
      </div>

      {/* Slider Section */}
      <div className="w-full max-w-6xl">
        <Slider {...settings}>
          {boxData.map((box, index) => (
            <Boxes
              key={index}
              title={box.title}
              description={box.description}
              bgColor={box.bgColor}
              className="flex flex-col items-center justify-center "
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Feature;
