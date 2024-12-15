const LowProjectBox = () => {
  const courses = [
    {
      name: "Robotics Online Courses",
      Including: "Including Robotics Kit",
      dis: "Learn Robotics in a hands-on manner by building projects...",
      data: [
        {
          name: "Popular Robotics (Career Building Course)",
          dis: "Exciting career in Robotics",
          amount: 30000,
        },
        {
          name: "Animatronic Hand",
          dis: "Build your own robotic hand",
          amount: 5000,
        },
      ],
    },

    {
      name: "IOT (Internet of Things Online Courses)",
      Including: "Including Internet of Things Kit",
      dis: "Learn Internet of Things...",
      data: [
        {
          name: "IOT Starter Kit",
          dis: "Beginner-friendly IoT projects",
          amount: 4000,
        },
        {
          name: "Advanced IoT",
          dis: "In-depth IoT applications",
          amount: 8000,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 p-6 flex flex-wrap gap-6 justify-center items-center">
      {courses.map((course, index) => (
        <div
          key={index}
          className="p-4 bg-white rounded-lg shadow-lg w-full max-w-sm"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            {course.name}
          </h2>
          <p className="text-sm text-gray-600 mb-4">{course.Including}</p>
          <p className="text-gray-500">{course.dis}</p>
          <ul className="mt-4">
            {course.data.map((item, idx) => (
              <li key={idx} className="mb-2">
                <span className="font-medium text-gray-800">{item.name}</span> -{" "}
                <span className="text-gray-600">${item.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default LowProjectBox;
