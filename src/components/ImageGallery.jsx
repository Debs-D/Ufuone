// Import images directly
import image1 from "../assets/images/african-business-lady-smiling-working-laptop-white-wall 2.svg";
import image2 from "../assets/images/pexels-pavel-danilyuk-8294681 2.svg";
import image3 from "../assets/images/pexels-thisisengineering-19895722 1.svg";
import image4 from "../assets/images/pexels-katerina-holmes-5905957 1.svg";
import image5 from "../assets/images/pexels-vanessa-loring-7869049 1.svg";

// Import Slider component from react-slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Image Gallery Component
const ImageGallery = () => {
  // Store images in an array
  const images = [image1, image2, image3, image4, image5];

  // Slider settings for slick carousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 images at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller screens
        settings: {
          slidesToShow: 3, // Show 3 images at a time on smaller screens
        },
      },
      {
        breakpoint: 768, // For mobile screens
        settings: {
          slidesToShow: 1, // Show 1 image at a time on mobile
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto p-36 px-6">
      {" "}
      {/* Adjusted container width */}
      <h2 className="text-center text-3xl font-bold mb-6">Image Gallery</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-[250px] h-[200px] object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageGallery;
