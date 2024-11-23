import image1 from "../assets/images/Frame 85 (1).svg";
import image2 from "../assets/images/Frame 82.svg";
import image3 from "../assets/images/Frame 86.svg";

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-[1652px] py-10 px-8 box-border overflow-y-auto">
      {/* Block 1 */}
      <div className="flex justify-center items-center w-full max-w-[1000px] h-[400px] px-5 box-border gap-10 mb-10">
        <div className="flex flex-col justify-between w-1/2 pr-5 text-left">
          <h1 className="text-[54px] font-medium m-0">
            Develop skills from anywhere
          </h1>
          <p className="text-[24px] my-2">
            Get kits to your doorstep. Build using online tutorials/ live
            classes.
          </p>
          <button className="py-4 px-8 bg-[#fe0804] text-white w-[452.48px] h-[87.3px] rounded-lg cursor-pointer border-none text-[36px]">
            Start free demo
          </button>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={image1}
            alt="image"
            className="w-[568.72px] h-[303.43px] object-contain"
          />
        </div>
      </div>

      {/* Block 2 */}
      <div className="flex justify-center items-center w-full max-w-[1000px] h-[400px] px-5 box-border gap-10 mb-10">
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={image2}
            alt="image"
            className="w-[568.72px] h-[303.43px] object-contain"
          />
        </div>
        <div className="flex flex-col justify-between w-1/2 pr-5 text-left">
          <h1 className="text-[54px] font-medium m-0">
            Earn by sharing your skills through Ufuon
          </h1>
          <p className="text-[24px] my-2">
            Join us, share your knowledge and help students learn innovative
            technologies.
          </p>
          <button className="py-4 px-8 bg-[#fe0804] text-white w-[452.48px] h-[87.3px] rounded-lg cursor-pointer border-none text-[36px]">
            Start free demo
          </button>
        </div>
      </div>

      {/* Block 3 */}
      <div className="flex justify-center items-center w-full max-w-[1000px] h-[400px] px-5 box-border gap-10 mb-10">
        <div className="flex flex-col justify-between w-1/2 pr-5 text-left">
          <h1 className="text-[54px] font-medium m-0">
            Organize our workshops in your college/ school
          </h1>
          <p className="text-[24px] my-2">
            Our experts will visit your campus and provide hands-on training.
          </p>
          <button className="py-4 px-8 bg-[#fe0804] text-white w-[452.48px] h-[87.3px] rounded-lg cursor-pointer border-none text-[36px]">
            Start free demo
          </button>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={image3}
            alt="image"
            className="w-[568.72px] h-[303.43px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
