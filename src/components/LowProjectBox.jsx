import { useNavigate } from "react-router-dom";

const LowProjectBox = () => {
  const navigate = useNavigate();
  const courses = [
    {
      id: 1,
      name: "Robotics Online Courses",
      Including: "Including Robotics Kit",
      dis: "Learn Robotics in a hands-on manner by building projects...",
      data: [
        {
          name: "Popular Robotics (Career Building Course)",
          dis: "Exciting career in Robotics",
          amount: 30000,
        },
      ],
    },
    {
      id: 2,
      name: "Electronic Online Courses",
      Including: "Including Electronic Kit",
      dis: "Learn Electronics in a hands-on manner by building projects...",
      data: [
        {
          name: "Popular Electronics (Career Building Course)",
          dis: "Exciting career in Electronics",
          amount: 25000,
        },
      ],
    },
    {
      id: 3,
      name: "Raspberry Pi Online Courses",
      Including: "Including Raspberry Pi Kit",
      dis: "Learn Raspberry Pi in a hands-on manner by building projects...",
      data: [
        {
          name: "Popular Raspberry Pi Projects",
          dis: "Exciting career in IoT and Computing",
          amount: 20000,
        },
      ],
    },
    {
      id: 4,
      name: "Career Building Online Courses",
      Including: "Including Career Building Kit",
      dis: "Learn Career Building in a hands-on manner by building projects...",
      data: [
        {
          name: "Career Accelerator Program",
          dis: "Build essential career skills",
          amount: 30000,
        },
      ],
    },
    {
      id: 5,
      name: "IoT (Internet of Things) Online Courses",
      Including: "Including Internet of Things Kit",
      dis: "Learn IoT with practical, hands-on projects...",
      data: [
        {
          name: "IoT Starter Kit",
          dis: "Beginner-friendly IoT projects",
          amount: 4000,
        },
      ],
    },
    {
      id: 6,
      name: "Machine Learning Online Courses",
      Including: "Including Machine Learning Kit",
      dis: "Learn Machine Learning in a hands-on manner by building projects...",
      data: [
        {
          name: "ML Foundation Program",
          dis: "Exciting career in AI and Data Science",
          amount: 35000,
        },
      ],
    },
  ];

  return (
    <div className=" w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 p-6 flex flex-wrap gap-6 justify-center items-center">
      {courses.map((course) => (
        <div
          key={course.id}
          onClick={() => navigate(`/course/${course.id}`)} // Navigate to the course details page
          className="p-6 bg-white rounded-lg shadow-lg w-full max-w-sm transform transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {course.name}
          </h2>
          <p className="text-sm text-gray-700 font-semibold mb-4">
            {course.Including}
          </p>
          <p className="text-gray-600 mb-4">{course.dis}</p>
          <div className="mt-4">
            {course.data.map((detail, index) => (
              <div key={index} className="text-gray-800 text-sm">
                <span className="font-bold">{detail.name}: </span>
                <span>₦{detail.amount}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LowProjectBox;
