import navIcon from "../assets/images/Vector (1).svg";
import img from "../assets/images/New_landing_page_sjb9df 1.svg";

const BookLayout = () => {
  return (
    <div className="flex flex-col flex-wrap justify-between min-h-screen bg-[#005cb3] text-white">
      <div className="flex flex-wrap items-center justify-evenly w-full py-10 px-5 gap-10">
        <div className="flex flex-col items-start gap-6 max-w-[600px]">
          <h1 className="text-[64px] font-medium leading-tight text-left">
            Educative Books For Your Kid
          </h1>
          <ul className="flex flex-col gap-5 p-0 list-none">
            <li className="flex items-center text-[30px] font-medium gap-4">
              <img src={navIcon} alt="Icon" className="w-10 h-10" />
              Access books and comics
            </li>
            <li className="flex items-center text-[30px] font-medium gap-4">
              <img src={navIcon} alt="Icon" className="w-10 h-10" />
              Fun quizzes and material by teachers
            </li>
            <li className="flex items-center text-[30px] font-medium gap-4">
              <img src={navIcon} alt="Icon" className="w-10 h-10" />
              School Assessment made easy.
            </li>
          </ul>
        </div>

        <img src={img} alt="Main Visual" className="md:h-[700px] max-w-full" />
      </div>
    </div>
  );
};

export default BookLayout;
