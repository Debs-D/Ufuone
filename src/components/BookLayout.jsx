import navIcon from "../assets/images/Vector (1).svg";
import img from "../assets/images/New_landing_page_sjb9df 1.svg";

const BookLayout = () => {
  return (
    <div className="flex flex-col flex-wrap justify-between min-h-screen bg-[#005cb3] text-white">
      <div className="flex flex-wrap items-center justify-evenly w-full py-10 px-5 gap-10">
        {/* Text Section */}
        <div className="flex flex-col items-start gap-6 max-w-[600px]">
          <h1 className="text-[58px] font-normal leading-tight text-left md:text-[64px] md:text-left md:leading-tight md:max-w-full">
            Transforming Africa through Innovation:{" "}
          </h1>
          <ul className="flex flex-col gap-5 p-0 list-none text-left md:text-left">
            <li className="flex items-center text-[30px] font-medium gap-4 md:text-[30px]">
              <img src={navIcon} alt="Icon" className="w-10 h-10" />
              Access books and comics
            </li>
            <li className="flex items-center text-[30px] font-medium gap-4 md:text-[30px]">
              <img src={navIcon} alt="Icon" className="w-10 h-10" />
              Fun quizzes and material by teachers
            </li>
            <li className="flex items-center text-[30px] font-medium gap-4 md:text-[30px]">
              <img src={navIcon} alt="Icon" className="w-10 h-10" />
              School Assessment made easy.
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <img
          src={img}
          alt="Main Visual"
          className="w-full max-w-full md:h-[700px] md:w-auto"
        />
      </div>
    </div>
  );
};

export default BookLayout;
