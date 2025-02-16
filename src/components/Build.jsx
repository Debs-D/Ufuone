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
          <div className="min-h-screen w-full px-4 sm:px-6 lg:px-12 py-8">
            <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-6">
              {/* Text Section */}
              <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-4 px-4">
                <h1 className="text-gray-800 text-center lg:text-left font-normal sm:text-5xl md:text-6xl">
                  Welcome to Build with UFUON{" "}
                </h1>

                <p className="text-gray-600 text-left font-medium text-lg sm:text-xl md:text-2xl">
                  Bring your ideas/theories to LIFE with expert support!
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
                <p className="text-lg font-medium leading-8 text-left ">
                  Are you a beginner? Learn and build your first project
                </p>
                <button
                  onClick={() => setView("low")}
                  className="py-2 px-4 bg-red-600 mt-3 text-white rounded-lg font-medium text-sm hover:bg-green-700 transition-transform hover:scale-105 "
                >
                  Low Level Project
                </button>
              </div>

              {/* High Level Project */}
              <div
                className="flex-1 p-6 rounded-lg shadow-lg text-center border border-white-500 max-w-lg"
                style={{ background: "rgba(244, 244, 244, 1)" }}
              >
                <p className="text-lg font-medium leading-8 text-left ">
                  A student engineer or tech enthusiast looking to SHOP, or
                  BUILD A PROJECT?
                </p>
                <button
                  onClick={() => setView("high")}
                  className="py-2 px-4 bg-red-600 text-white rounded-lg font-medium text-sm hover:bg-green-700 transition-transform hover:scale-105 "
                >
                  High Level Project
                </button>
              </div>
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
                className="text-gray-800 text-center lg:text-left font-normal leading-[80px]"
                style={{ fontSize: "75px" }}
              >
                Welcome to Low Level{" "}
              </h1>

              <p
                className="text-xl text-black-600 text-center font-normal lg:text-left"
                style={{ fontSize: "28px" }}
              >
                We are excited to help you bring your project ideas to life!{" "}
              </p>
              <p className="text-xl text-black-600 text-center font-normal lg:text-left">
                Choose an option to start
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
              <p className="text-lg font-medium leading-8 text-left ">
                New to project-building? Do not worry, we are here to guide you!{" "}
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
              <p className="text-lg font-medium leading-8 text-left ">
                University students or innovators, let us collaborate with you!
              </p>
              <button
                onClick={() =>
                  window.open("https://www.store.ufuon.com/project", "_blank")
                }
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
                className="text-gray-800 text-center lg:text-left font-normal leading-[85px]"
                style={{ fontSize: "75px" }}
              >
                Welcome to High-level{" "}
              </h1>

              <p
                className="text-xl text-black-600 text-center font-semibold lg:text-left"
                style={{ fontSize: "25px" }}
              >
                We are excited to help you bring your project ideas to life!
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
                onClick={() => navigate("/advanced-project")}
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
