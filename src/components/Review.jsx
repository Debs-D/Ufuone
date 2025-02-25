import Slider from "react-slick";
import Box from "./Boxer";
import img1 from "../assets/images/Mask group (4).svg";
import img2 from "../assets/images/Mask group (3).svg";
import img3 from "../assets/images/image_fx_ (19) 2.svg";

const Review = () => {
  const boxData = [
    {
      imgUrl: img1,
      title: " Emmanuel O.",
      subtitle: "Excellent Service",
      description:
        "I recently purchased electronics components from Ufuon and I'm impressed with their excellent service! The team was responsive, knowledgeable, and helped me find exactly what I needed. The components arrived promptly and were of high quality. I highly recommend Ufuon for all your electronics needs",
    },
    {
      imgUrl: img2,
      title: " Mrs. Ifeoma Benjamin",
      subtitle: "Empowering Education",
      description:
        "Ufuon's STEM education program has been a game-changer for our school! Their experienced trainers and hands-on approach have inspired our students to explore the world of electronics and robotics. We've seen significant improvement in their problem-solving skills and confidence. Thank you, Ufuon, for empowering the next generation of innovators",
    },
    {
      imgUrl: img3,
      title: "David Koko",
      subtitle: "Quality Products",
      description:
        "I've been shopping at Ufuon for my electronics projects and I'm consistently impressed with the quality of their products! Their components are genuine, durable, and affordable. The website is user-friendly, and the customer support team is a user-friendly, and the customer support team is always available to assist. Ufuon has become my go-to destination for all my electronics needs.",
    },
    {
      imgUrl: img2,
      title: " Nneoma U.",
      subtitle: "Community support",
      description:
        "Ufuon's community is amazing! As a beginner in electronics, I was struggling to find resources and support. But Ufuon's online forums, tutorials, and workshops have been incredibly helpful. The team is always willing to lend a hand, offer advice, or simply provide encouragement. Thank you, Ufuon, for creating such a supportive and inclusive community!",
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
              customHeight={"420px"}
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
