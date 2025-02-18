import Box from "./Box";
import "../App.css";
import img1 from "../assets/images/pexels-thisisengineering-19895722 1.svg";
import img2 from "../assets/images/store.png";
import img3 from "../assets/images/school.png";
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
      {/* Hero Section */}
      <div className="bg-blue-100 flex flex-col md:flex-row items-center justify-between text-center md:text-left shadow-md w-full md:w-[95%] lg:w-[1213px] h-auto md:h-[308px] rounded-[29px] px-6 md:px-8 py-6">
        <div className="flex-1 mx-4 md:mx-6">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-medium leading-relaxed text-gray-800">
            Explore <span className="text-blue-600 font-bold">Ufuon’s</span>{" "}
            comprehensive support, resources, and{" "}
            <span className="text-red-600 font-bold">edu-tech expertise</span>{" "}
            to help you bring your innovative edu-tech ideas to life.
          </h2>
          <button className="mt-4 py-2 px-4 md:py-2 md:px-6 bg-[#fe0804] text-white rounded-lg text-sm md:text-base font-medium hover:bg-[#e00703] transition-transform duration-300">
            Learn More
          </button>
        </div>
        <div className="flex-shrink-0 mt-4 md:mt-0 ml-0 md:ml-6">
          <img
            src={img4}
            alt="Ufuon Services"
            className="w-[130px] md:w-[200px] lg:w-[350px] h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Grid of Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
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
