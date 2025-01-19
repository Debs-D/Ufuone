import ButtonNavbar from "../components/ButtonNavbar";
import { useNavigate } from "react-router-dom";

const HighLevelPage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Render ButtonNavbar */}
      <ButtonNavbar />

      <button
        onClick={() => navigate(-1)} // This will take the user to the previous page
        className="p-4 bg-orange-700 hover:bg-orange-500 text-white rounded-lg ml-5 mt-3  left-4 flex items-center justify-center"
      >
        <span className="text-xl">&larr;</span> {/* Left Arrow */}
      </button>

      <div className="min-h-screen flex flex-col">
        {/* Page Content */}
        <div className="flex-grow w-full p-6">
          {/* Header */}
          <header className="text-center">
            <h1 className="text-7xl mb-7 font-semibold">We Offer Variety</h1>
          </header>

          {/* Button Containers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Button 1 */}
            <div
              className="p-6 rounded-lg shadow-lg"
              style={{
                background: "rgba(244, 244, 244, 1)",
                width: "488px",
              }}
            >
              <h2 className="text-4xl font-semibold">Build it Yourself</h2>
              <p className="text-gray-700 mb-4">
                Get access to schematics, component designs, and all the
                relevant information you need to build your project
                independently.
              </p>
              <button
                onClick={() => navigate("/register")} // Navigate to /register
                className="py-2 px-4 bg-red-600 text-white rounded-lg font-medium hover:bg-blue-700"
              >
                Register
              </button>
            </div>

            {/* Button 2 */}
            <div
              className="p-6 rounded-lg shadow-lg"
              style={{
                background: "rgba(244, 244, 244, 1)",
                width: "488px",
              }}
            >
              <h2 className="text-4xl font-semibold mb-4">
                Let Us Build it for You
              </h2>
              <p className="text-gray-700 mb-4">
                Leave the hard work to us! We’ll build your project from start
                to finish, tailored to your needs.
              </p>
              <button
                onClick={() => navigate("/register")} // Navigate to /register
                className="py-2 px-4 bg-red-600 text-white rounded-lg font-medium hover:bg-blue-700"
              >
                Register
              </button>
            </div>
          </div>

          {/* Button 3 (Bottom Button) */}
          <div
            className="p-6 rounded-lg shadow-lg mx-auto mt-8"
            style={{
              background: "rgba(244, 244, 244, 1)",
              width: "488px",
            }}
          >
            <h2 className="text-4xl font-semibold mb-4">
              Let’s Build it Together
            </h2>
            <p className="text-gray-700 mb-4">
              Collaborate with an expert assistant to bring your project to life
              while gaining hands-on experience.
            </p>
            <button
              onClick={() => navigate("/register")} // Navigate to /register
              className="py-2 px-4 bg-red-600 text-white rounded-lg font-medium hover:bg-blue-700"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HighLevelPage;
