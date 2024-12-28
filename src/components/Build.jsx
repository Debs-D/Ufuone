import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imgFront from "../assets/images/Mask group.svg";

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
                src="https://s3-alpha-sig.figma.com/img/5e38/96f3/47ce21082b8ad90137f549bd8aa584b2"
                alt="Low Level Project"
                className="w-full max-w-sm h-auto object-cover rounded-lg transition-transform hover:scale-105"
              />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col items-center gap-6">
              <button
                onClick={() => navigate("/low-project")}
                className="py-3 px-5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-transform hover:scale-105 w-full"
              >
                Beginner Project
              </button>
              <button
                onClick={() => navigate("https://www.store.ufuon.com/")}
                className="py-3 px-5 bg-yellow-600 text-white rounded-lg font-medium hover:bg-yellow-700 transition-transform hover:scale-105 w-full"
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
                src="https://s3-alpha-sig.figma.com/img/4488/f0e5/e96b6ced2ac9ec030d0540019fa50369"
                alt="High Level Project"
                className="w-full max-w-sm h-auto object-cover rounded-lg transition-transform hover:scale-105"
              />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col items-center gap-6">
              <button
                onClick={() => navigate("/register")}
                className="py-3 px-5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-transform hover:scale-105 w-full"
              >
                High-Level Project
              </button>
              <button
                onClick={() => navigate("/advanced")}
                className="py-3 px-5 bg-green-600 text-white rounded-lg font-medium hover:bg-yellow-700 transition-transform hover:scale-105 w-full"
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
