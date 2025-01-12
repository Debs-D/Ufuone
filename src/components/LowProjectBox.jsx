import { useNavigate } from "react-router-dom";
import ButtonNavbar from "../components/ButtonNavbar";

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
    <div>
      {/* Render ButtonNavbar */}
      <ButtonNavbar />

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)} // This will take the user to the previous page
        className="p-4 bg-gray-800 text-white rounded-full ml-5 mt-3  left-4 flex items-center justify-center"
      >
        <span className="text-xl">&larr;</span> {/* Left Arrow */}
      </button>

      {/* Courses Section */}
      <div className="w-full bg-gradient-to-r p-6 flex flex-wrap gap-6 justify-center items-center">
        {courses.map((course) => (
          <div
            key={course.id}
            onClick={() => navigate(`/course/${course.id}`)}
            className="p-6 rounded-lg shadow-lg w-full max-w-sm transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer"
            style={{
              background: "rgba(244, 244, 244, 1)",
              border: "1px solid rgba(0, 0, 0, 1)",
            }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {course.name}
            </h2>
            <p className="text-sm text-gray-700 font-semibold mb-4">
              {course.Including}
            </p>
            <p className="text-gray-600 mb-4">{course.dis}</p>
            <div className="mt-4">
              {course.data.map((detail, index) => (
                <div key={index} className="text-gray-800 text-sm mb-2">
                  <span className="font-bold">{detail.name}: </span>
                  <div className="text-red-600 font-bold">₦{detail.amount}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LowProjectBox;
