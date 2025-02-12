import { useState } from "react";
import image1 from "../assets/images/african-business-lady-smiling-working-laptop-white-wall 2.svg";
import image2 from "../assets/images/pexels-pavel-danilyuk-8294681 2.svg";
import image3 from "../assets/images/pexels-thisisengineering-19895722 1.svg";
import image4 from "../assets/images/pexels-katerina-holmes-5905957 1.svg";
import image5 from "../assets/images/pexels-vanessa-loring-7869049 1.svg";
import image6 from "../assets/images/Ellipse 6.svg";
import image7 from "../assets/images/pngwing.com (45) 1.svg";
import image8 from "../assets/images/pexels-vanessa-loring-7869049 1.svg";
import image9 from "../assets/images/pexels-vanessa-loring-7869049 1.svg";
import image10 from "../assets/images/pexels-vanessa-loring-7869049 1.svg";
import image11 from "../assets/images/pexels-vanessa-loring-7869049 1.svg";
import image12 from "../assets/images/pexels-vanessa-loring-7869049 1.svg";

const ImageGallery = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
  ];

  const imagesPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-center text-3xl font-bold mb-6">Image Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentImages.map((image, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-[200px] object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-4">
        <button
          className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-lg font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
