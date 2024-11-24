import navIcon from "../assets/images/Vector (1).svg";
import img from "../assets/images/New_landing_page_sjb9df 1.svg";

const BookLayout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-[#005cb3]">
      {/* Main Content Section */}
      <div className="flex flex-wrap items-center justify-evenly w-full py-10 px-5 gap-5">
        {/* Text Content */}
        <div className="flex flex-col items-start gap-5 max-w-[600px]">
          <h1 className="text-white text-[69.47px] font-medium leading-[87.53px] font-outfit text-left">
            Educative Books For Your Kid
          </h1>
          <ul className="flex flex-col gap-4 p-0 list-none">
            <li className="flex items-center text-white text-[33px] font-medium leading-[53.2px] gap-3">
              <img src={navIcon} alt="Icon" className="w-[40px] h-[40px]" />
              Access books and comics
            </li>
            <li className="flex items-center text-white text-[33px] font-medium leading-[53.2px] gap-3">
              <img src={navIcon} alt="Icon" className="w-[40px] h-[40px]" />
              Fun quizzes and material by teachers
            </li>
            <li className="flex items-center text-white text-[33px] font-medium leading-[53.2px] gap-3">
              <img src={navIcon} alt="Icon" className="w-[40px] h-[40px]" />
              School Assessment made easy.
            </li>
          </ul>
        </div>

        <img src={img} alt="Main Visual" className="md:h-[700px]" />
      </div>

      {/* Footer Section with Button */}
      <div className="flex justify-right pl-50 mb-20 py-5 bg-[#005cb3]">
        <button className="flex items-center justify-center py-2 px-4 bg-[#fe0804] text-white w-[206px] h-[60px] rounded-lg cursor-pointer border-none text-[30px] hover:bg-[#e00703] hover:scale-105 transition-transform duration-300">
          Download
        </button>
      </div>
    </div>
  );
};

export default BookLayout;
