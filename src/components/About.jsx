import Box from "./Box";
import "../App.css";
import img1 from "../assets/images/pexels-vanessa-loring-7869049 1.svg";
import img2 from "../assets/images/pexels-pavel-danilyuk-8294681 2.svg";
import img3 from "../assets/images/pexels-thisisengineering-19895722 1.svg";
import img4 from "../assets/images/pngwing.com (45) 1.svg";

const About = () => {
  const boxData = [
    {
      image: img1,
      title: "Ufuon Build",
      description:
        "Get full aid, expert guidance or mentorship to build low-level or high-level electronics and robotics projects.",
      bgColor: "bg-red-100",
    },
    {
      image: img2,
      title: "Ufuon Store ",
      description:
        "Shop on our extensive collection of electronic products to use for your project",
      bgColor: "bg-blue-100",
    },
    {
      image: img3,
      title: "Ufuon for school",
      description:
        " Explore STEM education covering electronics and robotics with a school-advanced management system",
      bgColor: "bg-yellow-100",
    },
  ];

  return (
    <section className="w-full h-auto min-h-screen flex flex-col items-center justify-center p-6 md:p-10 pb-16">
      <div className="bg-blue-100 flex items-center justify-around text-center shadow-md w-full md:w-[95%] lg:w-[1213px] h-[308px] rounded-[29px] px-6 md:px-8">
        <div className="flex-1 text-left mx-9">
          <h2 className="text-4xl md:text-4xl lg:text-6xl font-medium leading-[36px] md:leading-[42px] lg:leading-[71px] text-gray-800">
            Explore Ufuon <br /> Services
          </h2>
          <button className="mt-4 py-2 px-4 bg-[#fe0804] text-white rounded-lg text-base font-medium hover:bg-[#e00703] transition-transform duration-300">
            Learn More
          </button>
        </div>
        <div className="flex-shrink-0 ml-4 md:ml-6 mx-5">
          <img
            src={img4}
            alt="Ufuon Services"
            className="w-[150px] md:w-[200px] lg:w-[350px] h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Grid of boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {boxData.map((box, index) => (
          <Box
            key={index}
            title={box.title}
            image={box.image}
            description={box.description}
            bgColor={box.bgColor}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
