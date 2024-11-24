import navIcon from "../assets/images/Vector (1).svg";

const SectionStudy = () => {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center w-full h-auto bg-[#005cb3] text-white py-16 px-10 text-center">
      <h2 className="text-7xl mb-6 font-500">Study Smart! Play Hard!</h2>

      <p className="text-2xl mb-12 w-[820px] max-w-[90%] leading-relaxed">
        Stop spending hours re-reading and re-copying your notes!
      </p>

      <ul className="grid grid-cols-2 gap-8 w-[820px] max-w-[90%]">
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

      <button className="mt-12 py-3 px-8 bg-[#fe0804] text-white rounded-lg text-[24px] font-semibold hover:bg-[#e00703] hover:scale-105 transition-transform duration-300">
        Download
      </button>
    </div>
  );
};

export default SectionStudy;
