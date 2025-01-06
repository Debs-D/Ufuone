import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imgFront from "../assets/images/Mask group.svg";
import lowImg from "../assets/images/Mask group (1).svg";

const Build = () => {
  const navigate = useNavigate();
  const [view, setView] = useState("build");

  return (
    <div className="min-h-screen w-full p-6">
      {/* Build View */}
      {view === "build" && (
        <>
          <div className="w-full max-w-5xl flex justify-center ml-56 lg:flex-row items-center gap-8">
            {/* Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6">
              <h1
                className="text-gray-800 text-center lg:text-left font-semibold leading-[101.42px]"
                style={{ fontSize: "80.83px", fontWeight: "600" }}
              >
                Welcome to Build
              </h1>

              <p
                className="text-xl text-black-600 text-center font-semibold lg:text-left"
                style={{ fontSize: "30.16px", fontWeight: "500" }}
              >
                Choose your project level and start building something amazing!
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={imgFront}
                alt="Build Project"
                className="w-full max-w-sm h-auto object-cover rounded-lg transition-transform hover:scale-105"
              />
            </div>
          </div>

          {/* Button Section */}
          <div className="flex flex-col lg:flex-row gap-8 justify-center mt-8">
            {/* Low Level Project */}
            <div
              className="flex-1 p-6  rounded-lg shadow-lg text-center border border-white-500 max-w-lg"
              style={{ background: "rgba(244, 244, 244, 1)" }}
            >
              <p className="text-xl font-medium leading-8 text-left ">
                Do you want to learn and build your own <br />
                project?
              </p>
              <button
                onClick={() => setView("low")}
                className="py-2 px-4 bg-red-600 text-white rounded-lg font-medium text-sm hover:bg-green-700 transition-transform hover:scale-105 "
              >
                Low Level Project
              </button>
            </div>

            {/* High Level Project */}
            <div
              className="flex-1 p-6 rounded-lg shadow-lg text-center border border-white-500 max-w-lg"
              style={{ background: "rgba(244, 244, 244, 1)" }}
            >
              <p className="text-xl font-medium leading-8 text-left ">
                Are you a university student and want to build a project with
                us?
              </p>
              <button
                onClick={() => setView("high")}
                className="py-2 px-4 bg-red-600 text-white rounded-lg font-medium text-sm hover:bg-green-700 transition-transform hover:scale-105 "
              >
                High Level Project
              </button>
            </div>
          </div>
        </>
      )}

      {/* Low Level View */}
      {view === "low" && (
        <>
          <div className="w-full max-w-5xl flex justify-center ml-56 lg:flex-row items-center gap-8">
            {/* Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6">
              <h1
                className="text-gray-800 text-center lg:text-left font-semibold leading-[101.42px]"
                style={{ fontSize: "80.83px", fontWeight: "600" }}
              >
                Welcome to Low level
              </h1>

              <p
                className="text-xl text-black-600 text-center font-semibold lg:text-left"
                style={{ fontSize: "30.16px", fontWeight: "500" }}
              >
                Choose your project level and start building your skills.
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={lowImg}
                alt="Build Project"
                className="w-full max-w-sm h-auto object-cover rounded-lg transition-transform hover:scale-105"
              />
            </div>
          </div>

          {/* Button Section */}
          <div className="flex flex-col lg:flex-row gap-8 justify-center mt-8">
            {/* Low Level Project */}
            <div
              className="flex-1 p-6  rounded-lg shadow-lg text-center border border-white-500 max-w-lg"
              style={{ background: "rgba(244, 244, 244, 1)" }}
            >
              <p className="text-xl font-medium leading-8 text-left ">
                Will you like to build your first project and do not know how?
              </p>
              <button
                onClick={() => navigate("/low-project")}
                className="py-2 px-4 bg-red-600 text-white rounded-lg font-medium text-sm hover:bg-green-700 transition-transform hover:scale-105 "
              >
                Beginner Project
              </button>
            </div>

            {/* High Level Project */}
            <div
              className="flex-1 p-6 rounded-lg shadow-lg text-center border border-white-500 max-w-lg"
              style={{ background: "rgba(244, 244, 244, 1)" }}
            >
              <p className="text-xl font-medium leading-8 text-left ">
                Are you a university student and want to build a project with
                us?
              </p>
              <button
                onClick={() => navigate("https://www.store.ufuon.com/")}
                className="py-2 px-4 bg-red-600 text-white rounded-lg font-medium text-sm hover:bg-green-700 transition-transform hover:scale-105 "
              >
                Intermediate Project
              </button>
            </div>
          </div>
        </>
      )}
      {/* High Level View */}
      {view === "high" && (
        <>
          <div className="w-full max-w-5xl flex justify-center ml-56 lg:flex-row items-center gap-8">
            {/* Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6">
              <h1
                className="text-gray-800 text-center lg:text-left font-semibold leading-[101.42px]"
                style={{ fontSize: "80.83px", fontWeight: "600" }}
              >
                Welcome to high level
              </h1>

              <p
                className="text-xl text-black-600 text-center font-semibold lg:text-left"
                style={{ fontSize: "30.16px", fontWeight: "500" }}
              >
                Are you a University student and will liked to build a project
                with us?{" "}
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={imgFront}
                alt="Build Project"
                className="w-full max-w-sm h-auto object-cover rounded-lg transition-transform hover:scale-105"
              />
            </div>
          </div>

          {/* Button Section */}
          <div className="flex flex-col lg:flex-row gap-8 justify-center mt-8">
            {/* Low Level Project */}
            <div
              className="flex-1 p-6  rounded-lg shadow-lg text-center border border-white-500 max-w-lg"
              style={{ background: "rgba(244, 244, 244, 1)" }}
            >
              <p className="text-xl font-medium leading-8 text-left ">
                Will you like to build your first project and do not know how?
              </p>
              <button
                onClick={() => navigate("/high-level")}
                className="py-2 px-4 bg-red-600 text-white rounded-lg font-medium text-sm hover:bg-green-700 transition-transform hover:scale-105 "
              >
                High Level Project
              </button>
            </div>

            {/* High Level Project */}
            <div
              className="flex-1 p-6 rounded-lg shadow-lg text-center border border-white-500 max-w-lg"
              style={{ background: "rgba(244, 244, 244, 1)" }}
            >
              <p className="text-xl font-medium leading-8 text-left ">
                Will you like to build your first project and do not know how?
              </p>
              <button
                onClick={() => navigate("/register")}
                className="py-2 px-4 bg-red-600 text-white rounded-lg font-medium text-sm hover:bg-green-700 transition-transform hover:scale-105 "
              >
                Advanced Project
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Build;
