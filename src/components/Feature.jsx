import Box from "./Boxes";

const Feature = () => {
  const boxData = [
    {
      title: "Create Lessons and Quiz",
      description:
        "Manage assignments creating lessons, and quizzes for kids in your comfort and easily and efficiently",
      bgColor: "bg-blue-900",
    },
    {
      title: "Schedule Lessons or Class",
      description:
        "Scheduling lessons for both kids and tutors is very easy with just a few clicks.",
      bgColor: "bg-blue-900",
    },
    {
      title: "Get Tutor for Lessons",
      description:
        "You can easily find a suitable tutor for your kids in the shortest possible time and ways your kid learns.",
      bgColor: "bg-blue-900",
    },
    {
      title: "Create Lessons and Quiz",
      description:
        "Manage assignments creating lessons, and quizzes for kids in your comfort and easily and efficiently",
      bgColor: "bg-blue-900",
    },
    {
      title: "Create Lessons and Quiz",
      description:
        "Manage assignments creating lessons, and quizzes for kids in your comfort and easily and efficiently",
      bgColor: "bg-blue-900",
    },
    {
      title: "Create Lessons and Quiz",
      description:
        "Manage assignments creating lessons, and quizzes for kids in your comfort and easily and efficiently",
      bgColor: "bg-blue-900",
    },
  ];

  const boxStyle = {
    width: "380px",
    height: "396px",
    gap: "0px",
    borderRadius: "69px 69px 0px 69px",
    opacity: "1",
    transform: "rotate(0deg)",
  };

  return (
    <section className="p-6 flex flex-col items-center justify-center">
      <div className="text-center mb-10">
        <h3 className="text-[48px] leading-[59px] font-normal text-black m-0">
          Included Features
        </h3>
        <p className="text-[30px] leading-[37.8px] font-normal text-black m-0">
          Explore the key features and tools designed to enhance your
          experience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {boxData.map((box, index) => (
          <Box
            key={index}
            title={box.title}
            description={box.description}
            bgColor={box.bgColor}
            style={boxStyle}
          />
        ))}
      </div>
    </section>
  );
};

export default Feature;
