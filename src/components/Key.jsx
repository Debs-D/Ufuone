import navIcon from "../assets/images/Vector (1).svg";

const Key = () => {
  const features = [
    {
      title: "Streamlined Operations",
      description:
        "Manage academic, cultural, sports, and wellbeing information on one platform.",
    },
    {
      title: "User-Friendly Interface",
      description:
        "Tailored portals for teachers, parents, and students for real-time data.",
    },
    {
      title: "Behavioral Monitoring",
      description:
        "Track student behavior, attendance, and overall well-being.",
    },
    {
      title: "Streamlined Operations",
      description: "Streamlined operations peculiar to your workplace.",
    },
  ];

  return (
    <div className="bg-[#005cb3] text-white py-16 px-10 flex justify-center items-center">
      <div className="text-center w-full max-w-4xl">
        <h2 className="text-7xl font-medium mb-6">Key Features</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-12 mx-auto">
          {features.map((feature, index) => (
            <li key={index} className="flex flex-col items-start text-left">
              {/* Title with Icon */}
              <div className="flex items-center justify-start text-2xl mb-4">
                <img src={navIcon} alt="icon" className="w-9 h-9 mr-4" />
                {feature.title}
              </div>

              {/* Description Text */}
              <p className="text-[24px] leading-[30.24px] font-normal">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Key;
