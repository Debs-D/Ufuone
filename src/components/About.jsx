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
    <section className="flex flex-wrap justify-center items-center gap-6">
      {boxData.map((box, index) => (
        <Box
          key={index}
          title={box.title}
          image={box.image}
          description={box.description}
          bgColor={box.bgColor}
        />
      ))}
    </section>
  );
};

export default About;
