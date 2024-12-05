import navIcon from "../assets/images/Vector (1).svg";
import img from "../assets/images/New_landing_page_sjb9df 1.svg";

const Layout = () => {
  return (
    <div className="w-full h-auto bg-white pt-32 pb-10 sm:pt-40 sm:pb-16">
      {" "}
      {/* Increased padding at the top */}
      <div className="flex flex-wrap items-center justify-center w-full h-auto gap-5">
        {/* Image Section */}
        <img
          src={img}
          alt="image"
          className="w-[90%] sm:w-[60%] md:w-[50%] lg:h-[701px] object-contain"
        />

        {/* Text Section */}
        <div className="flex flex-col items-center gap-5 max-w-[600px] w-full text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium leading-[50px] sm:leading-[60px] text-red-600">
            Get a qualified teacher for your Child
          </h1>

          <ul className="flex flex-col gap-4 p-0 list-none">
            <li className="flex items-center text-xl sm:text-2xl md:text-3xl font-medium text-left">
              <img
                src={navIcon}
                alt="icon"
                className="w-8 h-8 sm:w-10 sm:h-10 filter brightness-0 saturate-100 mr-2.5"
              />
              Teaching and learning made easy.
            </li>
            <li className="flex items-center text-xl sm:text-2xl md:text-3xl font-medium text-left">
              <img
                src={navIcon}
                alt="icon"
                className="w-8 h-8 sm:w-10 sm:h-10 filter brightness-0 saturate-100 mr-2.5"
              />
              Socialize your study
            </li>
            <li className="flex items-center text-xl sm:text-2xl md:text-3xl font-medium text-left">
              <img
                src={navIcon}
                alt="icon"
                className="w-8 h-8 sm:w-10 sm:h-10 filter brightness-0 saturate-100 mr-2.5"
              />
              Quiz Presentation
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Layout;
