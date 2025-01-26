import image1 from "../assets/images/Frame 85 (1).svg";
import image2 from "../assets/images/Frame 82.svg";

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-auto py-10 px-8 box-border overflow-y-auto">
      {/* First section */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-[1000px] h-auto px-5 box-border gap-10 mb-10">
        {/* Text on left */}
        <div className="flex flex-col justify-between w-full md:w-1/2 pr-5 text-left">
          <h1 className="text-[32px] md:text-[40px] font-medium m-0">
            Who are we?
          </h1>
          <p className="text-[16px] md:text-[18px] my-2 leading-relaxed">
            We’re witnessing a generation that asks questions, has opinions and
            takes initiative to make the world a better place.
          </p>
          <p className="text-[16px] md:text-[18px] my-2 leading-relaxed">
            As Ufone, we’re catalysts of education for this generation.
          </p>
        </div>
        {/* Image on right */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={image1}
            alt="Who are we?"
            className="w-[300px] md:w-[400px] object-contain"
          />
        </div>
      </div>

      {/* Second section */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-[1000px] h-auto px-5 box-border gap-10 mb-10">
        {/* Image on left */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={image2}
            alt="What do we do?"
            className="w-[300px] md:w-[400px] object-contain"
          />
        </div>
        {/* Text on right */}
        <div className="flex flex-col justify-between w-full md:w-1/2 pr-5 text-left">
          <h1 className="text-[32px] md:text-[40px] font-medium m-0">
            What do we do?
          </h1>
          <p className="text-[16px] md:text-[18px] my-2 leading-relaxed">
            We enable people. To become the best version of themselves, to
            up-skill and, to teach. We work tirelessly towards making the youth
            more employable and skilled. And we have the time of our lives doing
            it.
          </p>
          <ul className="list-none pl-0 space-y-2">
            <li>
              <a href="#" className="text-red-500 font-semibold underline">
                Our Courses
              </a>{" "}
              are designed to prepare you for the future and give you the
              practical, raw knowledge that only an industry expert can deliver.
            </li>
            <li>
              <a href="#" className="text-red-500 font-semibold underline">
                Careers at Unschool
              </a>{" "}
              is a place for the passionate, the misfits, and the crazy. If you
              believe in making a change, we believe in you.
            </li>
            <li>
              <a href="#" className="text-red-500 font-semibold underline">
                Our Coaches
              </a>{" "}
              are the essence of bringing about the revolution needed to make
              learning fun, meaningful and outcome-based.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
