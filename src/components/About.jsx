import Box from "./Box";
import "../App.css";

const About = () => {
  const boxData = [
    {
      title: "Ufuon at Work",
      description:
        "Deliver training, presentations, meetings, and events in-person and more.",
      bgColor: "bg-red-100",
    },
    {
      title: "Ufuon at School",
      description:
        "Engage with clients and team members seamlessly in group learning and distance learning.",
      bgColor: "bg-yellow-100",
    },
    {
      title: "Ufuon at Home",
      description:
        "Learning apps for book reading, games, and fun for family at home.",
      bgColor: "bg-red-900",
    },
    {
      title: "Ufuon Store",
      description:
        "Access curated STEM content. Shop our extensive collection of STEM products.",
      bgColor: "bg-blue-700",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
      {boxData.map((box, index) => (
        <Box
          key={index}
          title={box.title}
          description={box.description}
          bgColor={box.bgColor}
          style={{
            marginBottom: "50px",
          }}
        />
      ))}
    </section>
  );
};

export default About;
