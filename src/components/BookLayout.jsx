import navIcon from "../assets/images/Vector (1).svg";
import img from "../assets/images/africa.png";

const BookLayout = () => {
  return (
    <div className="flex flex-col flex-wrap justify-between min-h-screen bg-[#005cb3] text-white p-5">
      <div className="flex max-lg:flex-wrap items-center justify-evenly w-full py-10 px-5 gap-10">
        {/* Text Section */}
        <div className="flex flex-col items-start gap-6 max-w-[600px]">
          <h1 className="text-[40px] font-normal leading-tight text-left md:text-[50px] md:text-left md:leading-tight md:max-w-full max-sm:text-[30px]">
            Transforming Africa through Innovation:{" "}
          </h1>
          <ul className="flex flex-col gap-5 p-0 list-none text-left md:text-left">
            <li className="flex items-center text-[20px] font-medium gap-4 md:text-[20px] max-sm:text-[18px]">
              <img src={navIcon} alt="Icon" className="w-8 mb-8 h-8" />
              Ufuon is educating and empowering young minds in electronics, AI,
              and tech.
            </li>
            <li className="flex items-center text-[20px] font-medium gap-4 md:text-[20px] max-sm:text-[18px]">
              <img src={navIcon} alt="Icon" className="w-8 mb-8 h-8" />
              Collaborate with us as we build the Africa of our tomorrow.{" "}
            </li>
            <li className="flex items-center text-[20px] font-medium gap-4 md:text-[20px] max-sm:text-[18px]">
              <img src={navIcon} alt="Icon" className="w-8 mb-12 h-8" />
              Organize our workshops in your college/ school: replace the start
              demo with Book a slot{" "}
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <img
          src={img}
          alt="Main Visual"
          className="w-[90%] max-w-full md:h-[500px] md:w-auto max-sm:w-[0%]"
        />
      </div>
    </div>
  );
};

export default BookLayout;
