const Package = () => {
  const boxData = [
    {
      title: "Comprehensive",
      subTitle: "School Management",
      description:
        "Manage assignments, create lessons, and quizzes for kids easily and efficiently.",
      bgColor: "rgba(0, 92, 179, 1)",
    },
    {
      title: "Real-Time Data",
      subTitle: "Access",
      description:
        "Dedicated portals for teachers, students, and parents, enabling instant access to vital information such as attendance, grades, and updates.",
      bgColor: "rgba(0, 92, 179, 1)",
    },
    {
      title: "Efficiency and Communication",
      description:
        "Enhance school efficiency, improve communication channels between parents, teachers, and students, and create a supportive learning environment.",
      bgColor: "rgba(0, 92, 179, 1)",
    },
  ];

  return (
    <div className="py-12">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-[500] text-gray-900">
          Package Highlights
        </h2>
        <p className="mt-4 text-[24px] font-normal text-gray-900">
          Explore the key features and tools designed to enhance your
          experience.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-5xl space-y-6">
        {/* Flex container for boxes */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {boxData.slice(0, 2).map((box, index) => (
            <div
              key={index}
              style={{
                backgroundColor: box.bgColor,
                borderRadius: "69px 69px 0px 69px",
              }}
              className="flex flex-col justify-center p-6 text-white shadow-md w-full md:w-[45%] lg:w-[585px] h-[308px]"
            >
              <h3 className="text-[32px] lg:text-[48px] leading-[36px] lg:leading-[51px] font-medium">
                {box.title}
              </h3>
              {box.subTitle && (
                <h4 className="text-[32px] lg:text-[48px] leading-[36px] lg:leading-[51px] font-medium">
                  {box.subTitle}
                </h4>
              )}
              <p className="mt-4 text-[16px] lg:text-[20px]">
                {box.description}
              </p>
            </div>
          ))}
        </div>

        {/* Third box */}
        <div className="flex justify-center">
          <div
            style={{
              backgroundColor: "rgba(0, 92, 179, 1)",
              borderRadius: "69px 69px 0px 69px",
            }}
            className="flex items-center justify-center text-center text-white shadow-md w-full md:w-[95%] lg:w-[1213px] h-[308px]"
          >
            <div>
              <h3 className="text-[32px] lg:text-[48px] leading-[36px] lg:leading-[51px] font-medium">
                {boxData[2].title}
              </h3>
              <p className="mt-4 text-[16px] lg:text-[24px] leading-[24px] lg:leading-[30.24px] font-normal max-w-xl">
                {boxData[2].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
