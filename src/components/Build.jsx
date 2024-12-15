import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Build = () => {
  const navigate = useNavigate();
  const [view, setView] = useState("build");

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-gray-100 via-blue-200 to-gray-100 p-6 flex flex-col items-center justify-center">
      {/* Build View */}
      {view === "build" && (
        <div className="text-center w-full flex flex-col items-center gap-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Welcome to Build
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Choose your project level and start building something amazing!
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full max-w-5xl">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src="https://via.placeholder.com/300"
                alt="Build Project"
                className="w-full max-w-sm h-auto object-cover rounded-lg transition-transform hover:scale-105"
              />
            </div>

            {/* Button Section */}
            <div className="w-full lg:w-1/2 flex flex-col items-center gap-6">
              <div className="w-full p-4 bg-white rounded-lg shadow-lg text-center border border-gray-300">
                <p className="text-lg text-gray-600 mb-3">
                  Do you want to learn and build your own project?
                </p>
                <button
                  onClick={() => setView("low")}
                  className="py-2 px-2 bg-red-600 text-white rounded-lg font-medium text-xs hover:bg-green-700 transition-transform hover:scale-105"
                  aria-label="Navigate to Low Level Project"
                >
                  Low Level Project
                </button>
              </div>

              <div className="w-full p-4 bg-blue-100 rounded-lg shadow-lg text-center border border-blue-200">
                <p className="text-lg text-gray-800 mb-3">
                  Are you a university student and want to build a project with
                  us?
                </p>
                <button
                  onClick={() => setView("high")}
                  className="py-2 px-2 bg-red-600 text-white rounded-lg font-medium text-xs hover:bg-green-700 transition-transform hover:scale-105"
                  aria-label="Navigate to High Level Project"
                >
                  High Level Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Low Level View */}
      {view === "low" && (
        <div className="text-center w-full flex flex-col items-center gap-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Welcome to Low Level
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Choose your project type and start building your skills!
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full max-w-5xl">
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src="https://via.placeholder.com/300"
                alt="Low Level Project"
                className="w-full max-w-sm h-auto object-cover rounded-lg transition-transform hover:scale-105"
              />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col items-center gap-6">
              <button
                onClick={() => navigate("/low-project")}
                className="py-3 px-5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-transform hover:scale-105"
                aria-label="Navigate to Beginner Project"
              >
                Beginner Project
              </button>
              <button
                onClick={() => navigate("/register")}
                className="py-3 px-5 bg-yellow-600 text-white rounded-lg font-medium hover:bg-yellow-700 transition-transform hover:scale-105"
                aria-label="Navigate to Intermediate Project"
              >
                Intermediate Project
              </button>
            </div>
          </div>
        </div>
      )}

      {/* High Level View */}
      {view === "high" && (
        <div className="text-center w-full flex flex-col items-center gap-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Welcome to High Level
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Are you a university student and want to build a project with us?
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full max-w-5xl">
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src="https://via.placeholder.com/300"
                alt="High Level Project"
                className="w-full max-w-sm h-auto object-cover rounded-lg transition-transform hover:scale-105"
              />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col items-center gap-6">
              <button
                onClick={() => navigate("/register")}
                className="py-3 px-5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-transform hover:scale-105"
                aria-label="Navigate to High Level Project"
              >
                High-Level Project
              </button>
              <button
                onClick={() => navigate("/advanced")}
                className="py-3 px-5 bg-green-600 text-white rounded-lg font-medium hover:bg-yellow-700 transition-transform hover:scale-105"
                aria-label="Navigate to Advanced Project"
              >
                Advanced Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Build;
