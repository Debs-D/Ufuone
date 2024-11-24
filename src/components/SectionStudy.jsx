import navIcon from "../assets/images/Vector (1).svg";

const SectionStudy = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[634px] bg-[#005cb3] text-white p-10 mt-16 text-center">
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

      <button className="flex items-center justify-center py-2 px-4 bg-[#fe0804] text-white w-[206px] h-[60px] rounded-lg cursor-pointer border-none text-[30px] hover:bg-[#e00703] hover:scale-105 transition-transform duration-300">
        Download
      </button>
    </div>
  );
};

export default SectionStudy;
