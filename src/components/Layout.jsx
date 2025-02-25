import navIcon from "../assets/images/Vector (1).svg";
import img from "../assets/images/New_landing_page_sjb9df 1.svg";

const Layout = () => {
  return (
    <div className="w-full h-auto bg-white pt-10 pb-10 sm:pt-40 sm:pb-16">
      {" "}
      {/* Increased padding at the top */}
      <div className="flex max-md:flex-wrap items-center justify-center w-full h-auto gap-5 ">
        {/* Image Section */}
        <img
          src={img}
          alt="image"
          className="w-[100%] sm:w-[60%] md:w-[50%] lg:h-[601px] object-contain max-sm:p-10"
        />

        {/* Text Section */}
        <div className="flex flex-col gap-5 max-w-[600px] w-full text-center items-start">
          <h1 className="text-3xl text-left sm:text-4xl md:text-[40px] font-normal leading-[50px] sm:leading-[60px] text-red-600 max-md:p-5">
            Get a qualified instructor to assist with Electronics
          </h1>

          <ul className="flex flex-col gap-4 p-0 list-none max-md:px-10">
            <li className="flex items-center text-xl sm:text-2xl md:text-2xl font-medium text-left ">
              <img
                src={navIcon}
                alt="icon"
                className="w-8 h-8 sm:w-10 sm:h-10 filter brightness-0 saturate-100 mr-2.5"
              />
              Request for a doubt clearance session{" "}
            </li>
            <li className="flex items-center text-xl sm:text-2xl md:text-2xl font-medium text-left">
              <img
                src={navIcon}
                alt="icon"
                className="w-8 h-8 sm:w-10 sm:h-10 filter brightness-0 saturate-100 mr-2.5"
              />
              Create a class for electronics learning{" "}
            </li>
            <li className="flex items-center text-xl sm:text-2xl md:text-2xl font-medium text-left">
              <img
                src={navIcon}
                alt="icon"
                className="w-8 h-8 sm:w-10 sm:h-10 filter brightness-0 saturate-100 mr-2.5"
              />
              Share all learning resources and materials in a single code{" "}
            </li>
          </ul>
          <button className="mt-5 py-3 px-8 bg-[#fe0804] text-white rounded-lg text-[24px] font-semibold hover:bg-[#e00703] -10hover:scale-105 transition-transform duration-300 max-sm:ml-10">
        Download
      </button>
        </div>

      </div>
    </div>
  );
};

export default Layout;
