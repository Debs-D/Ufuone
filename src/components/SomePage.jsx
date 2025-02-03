import ImageGallery from "../components/ImageGallery";

// Import images directly
import image1 from "../assets/images/african-business-lady-smiling-working-laptop-white-wall 2.svg";
import image2 from "../assets/images/pexels-pavel-danilyuk-8294681 2.svg";
import image3 from "../assets/images/pexels-thisisengineering-19895722 1.svg";

const images = [image1, image2, image3]; // Use imported images here

const SomePage = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-8">My Image Gallery</h1>
      <ImageGallery images={images} />
    </div>
  );
};

export default SomePage;
