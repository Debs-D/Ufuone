import Box from "./Box";
import "../App.css";

const About = () => {
  const boxData = [
    {
      image:
        "https://www.shutterstock.com/image-vector/back-school-cartoon-vector-kids-260nw-2493305457.jpg",
      title: "Ufuon at School",
      description:
        "Engage with clients and team members seamlessly in group learning and distance learning.",
      bgColor: "bg-yellow-100",
    },
    {
      image: "https://watermark.lovepik.com/photo/50088/5838.jpg_wh1200.jpg",
      title: "Ufuon at Home",
      description:
        "Learning apps for book reading, games, and fun for family at home.",
      bgColor: "bg-red-100",
    },
    {
      image:
        "https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-shopping-mall-supermarket-selection-merchandise-poster-background-material-image_133225.jpg",
      title: "Ufuon Store",
      description:
        "Access curated STEM content. Shop our extensive collection of STEM products.",
      bgColor: "bg-blue-200",
    },
  ];

  return (
    <section className="w-full h-auto min-h-screen flex flex-col items-center justify-center p-6 md:p-10 pb-16">
      <div
        style={{
          backgroundColor: "rgba(254, 226, 226, 164)",
        }}
        className="flex items-center justify-center text-center shadow-md w-full md:w-[95%] lg:w-[1213px] h-[308px] mx-auto rounded-[69px]"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[36px] md:leading-[42px] lg:leading-[51px]">
          Explore Ufuon Services
        </h2>
        <div className="w-full md:w-[60%] h-auto">
          <img
            src="https://edukoya.com/images/interactive.png"
            alt="img"
            className="w-full h-auto object-contain"
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
