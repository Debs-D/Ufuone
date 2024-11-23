import navIcon from "../assets/images/Vector (1).svg";
import downloadIcon from "../assets/images/Component 2.svg";

const SectionStudy = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-[#005cb3] text-white p-10 mt-16 text-center">
      <h2 className="text-7xl mb-5">Study Smart! Play Hard!</h2>
      <p className="text-2xl mb-10 w-[820px] max-w-[90%]">
        Stop spending hours re-reading and re-copying your notes!
      </p>
      <ul className="grid grid-cols-2 gap-6 w-[820px] max-w-[90%] p-0 list-none">
        <li className="flex items-center text-2xl">
          <img src={navIcon} alt="icon" className="w-9 h-9 mr-4" />
          Study Smart on the go
        </li>
        <li className="flex items-center text-2xl">
          <img src={navIcon} alt="icon" className="w-9 h-9 mr-4" />
          Boost learning retention
        </li>
        <li className="flex items-center text-2xl">
          <img src={navIcon} alt="icon" className="w-9 h-9 mr-4" />
          Socialize your study
        </li>
        <li className="flex items-center text-2xl">
          <img src={navIcon} alt="icon" className="w-9 h-9 mr-4" />
          Quiz Presentation
        </li>
      </ul>

      <img
        src={downloadIcon}
        alt="Download Icon"
        className="mt-10 w-[206px] h-[60px]"
      />
    </div>
  );
};

export default SectionStudy;
