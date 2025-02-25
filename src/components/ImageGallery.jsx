import { useState, useEffect } from "react";
import image1 from "../assets/Gallery/image1.jpg";
import image2 from "../assets/Gallery/image2.jpg";
import image3 from "../assets/Gallery/image3.jpg";
import image4 from "../assets/Gallery/image4.jpg";
import image5 from "../assets/Gallery/image5.jpg";
import image6 from "../assets/Gallery/image6.jpg";
import image7 from "../assets/Gallery/image7.jpg";
import image8 from "../assets/Gallery/image8.jpg";
import image9 from "../assets/Gallery/image9.jpg";
import image10 from "../assets/Gallery/image10.jpg";
import image11 from "../assets/Gallery/image15.jpg";
import image12 from "../assets/Gallery/image17.jpg";



const ImageGallery = () => {
  const images = [
    image1, image2, image3, image4, image5, image6,
    image7, image8, image9, image10, image11, image12,
  ];

  const [isPaginated, setIsPaginated] = useState(window.innerWidth < 1024);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = images.length;
  // eslint-disable-next-line no-unused-vars
  const totalPages = Math.ceil(images.length / imagesPerPage);

  useEffect(() => {
    const handleResize = () => {
      setIsPaginated(window.innerWidth < 1024);
      setCurrentPage(1); // Reset to first page on resize
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentImages = isPaginated
    ? images.slice((currentPage - 1) * imagesPerPage, currentPage * imagesPerPage)
    : images;

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-6 max-sm:py-6 max-sm:px-3">
      <h2 className="text-left text-3xl font-bold mb-10 max-sm:text-2xl">Image Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-md:grid-cols-2">
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

      {/* Show pagination only on mobile/tablet */}
      {/* {isPaginated && (
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
      )} */}
    </div>
  );
};

export default ImageGallery;
