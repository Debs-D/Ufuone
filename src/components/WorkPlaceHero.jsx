import funImg from "../assets/images/african-business-lady-smiling-working-laptop-white-wall 2.svg";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(0,_92,_179,_0.15)_0%,_rgba(0,_40,_77,_0)_100%)]">
      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center w-full max-w-[1440px] mx-auto px-6 space-y-4 md:space-y-0">
        {/* Image Section */}
        <div className="w-full md:w-[662.5px] flex justify-center">
          <img
            src={funImg}
            alt="Illustration"
            className="w-[80%] md:w-full max-w-[500px] md:max-w-[662.5px] h-auto object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start w-full md:w-[603px] space-y-4">
          <h3 className="font-outfit text-[32px] md:text-[54px] font-medium text-[rgba(254,0,0,1)] leading-[79.9px] text-center md:text-left">
            Ufuon for the Modern Workplace{" "}
          </h3>
          <p className="font-outfit text-[16px] md:text-[30px] font-normal text-black leading-[37.8px] text-center md:text-left">
            Empower your workplace with dynamic tools for delivering training,
            presentations, meetings, and events in-person or virtually.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
