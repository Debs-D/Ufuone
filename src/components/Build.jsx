import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Build = () => {
  const navigate = useNavigate();
  const [view, setView] = useState("build"); // Track current view: build, low, high

  const handleLowLevelClick = () => {
    setView("low");
  };

  const handleHighLevelClick = () => {
    setView("high");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-gray-100 via-blue-200 to-gray-100 p-6 flex flex-col items-center justify-center">
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
                src="https://s3-alpha-sig.figma.com/img/1dab/4b11/c1ed7785121b6aa885d763c0940f7bbf?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WDoqHKib8RSY8BToKEJLMWDYz4d9oYNszUnFWAAUosiDbu09ACV24Yos6lVJnKalYa1Z7VagXqJLzZWuKm-roMP2BN4Ac1yDTcEiPhyJPP6vVZCyJysz6RvveUMnPi-u~hSH7QApFkxLyipe~TtyjeN7sjWvxHJzU8aXFIHd6MeNGkQQjn4oNgR7GEwF44ECoTyim1zmjtt-hUJBuWJDhcx1LFiQePrlVdtZZmflTPn6yUKxuFWOwpG7iDjzOd4JLolpVakLdLSOXlBL0-fEL4t9yvdbqC6oLA5dWOk5VjW2DSnvrj3jOmE4n5YCaWhyaFp7HJKFi08GljYdeCGTxQ__"
                alt="Build Project"
                className="w-full max-w-sm h-auto object-cover rounded-lg transition-all transform hover:scale-105"
              />
            </div>

            {/* Button Section */}
            <div className="w-full lg:w-1/2 flex flex-col items-center gap-6">
              {/* Low Level Button with Text Inside a Container */}
              <div
                className="w-full p-4 bg-white rounded-lg shadow-lg text-center border border-gray-300"
                onClick={handleLowLevelClick}
              >
                <p className="text-lg text-gray-600 mb-3">
                  Do you want to learn and build your own project?
                </p>
                <button
                  onClick={handleLowLevelClick}
                  className="py-2 px-2 bg-red-600 text-white rounded-lg font-medium text-xs hover:bg-green-700 transition transform hover:scale-105"
                >
                  Low Level Project
                </button>
              </div>

              {/* High Level Button with Text Inside a Container */}
              <div
                className="w-full p-4 bg-blue-100 rounded-lg shadow-lg text-center border border-blue-200"
                onClick={handleHighLevelClick}
              >
                <p className="text-lg text-gray-800 mb-3">
                  Are you a university student and want to build a project with
                  us?
                </p>
                <button
                  onClick={handleHighLevelClick}
                  className="py-2 px-2 bg-red-600 text-white rounded-lg  text-xs font-medium hover:bg-green-700 transition transform hover:scale-105"
                >
                  High Level Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {view === "low" && (
        <div className="text-center w-full flex flex-col items-center gap-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Welcome to Low Level
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Choose your project type and start building your skills!
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full max-w-5xl">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/5e38/96f3/47ce21082b8ad90137f549bd8aa584b2?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cpysbJIQzZa6y6N9K1lxEfJ~YnRftqg-CQgKhYQ05IhQuoUkI8dfmDTz6W7TvAJ8K75N~chpASUzov4JkcQnCLtG3Y0~LTfRWRbtD2g~nUR9b2aY6RL1ZfLiFbp44wJxIztPqr8f~foxDuTlP7Rx9rmx1kbHr1vXDSyk1p~2yzfTgDc8xcDUI7HQQJ0DcZ0sHGudwF1PYe7tsvwUfPttthvXgSns3OVYdkZx5ql07VXL3zoriTAgrGDc08UyAzGRfOvS-fRu9i2cip-txTvBFC1yA0sAR3pbyxEfVBuRrgPdGKAwJbfsA02lPCp01Bcnp68MfGlfhPb9GFblpahOuQ__"
                alt="Low Level Project"
                className="w-full max-w-sm h-auto object-cover rounded-lg transition-all transform hover:scale-105"
              />
            </div>

            {/* Buttons */}
            <div className="w-full lg:w-1/2 flex flex-col items-center gap-6">
              <button
                onClick={() => navigate("/register")}
                className="py-3 px-5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition transform hover:scale-105"
              >
                Beginner Project
              </button>
              <button
                onClick={() => navigate("/register")}
                className="py-3 px-5 bg-yellow-600 text-white rounded-lg font-medium hover:bg-yellow-700 transition transform hover:scale-105"
              >
                Intermediate Project
              </button>
            </div>
          </div>
        </div>
      )}

      {view === "high" && (
        <div className="text-center w-full flex flex-col items-center gap-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Welcome to High Level
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Are you a university student and want to build a project with us?
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full max-w-5xl">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/4488/f0e5/e96b6ced2ac9ec030d0540019fa50369?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BBieVurOEeiiQ7YHyuk63wABqSqAcaA~kFy9dVGfkTfa-STE-x5zUpHU7veV-HV85W~b0U0IuaUGdkt0J5louioRil9Uk5ih~y-WO9DhBH0afflg9ClAh2QQNLTTn-GDn7rFtSSaR66hroyaZbvKOnEk~DvVI2lM-58EOLbtaBVBVLQaVUSAKzp6JNS2-LTqOCqd1RpU6wI7But-wBYeNlgOJCVamPV2daeQvLh1qdGsn8c67h2-~5w43JKfdPzR0~OTjnt-50RPBz-w-WYfBfgA0KHh~AdZfoC0niHl3x~fK7wNjIgH2fzHtnMF7f8g0rLRRl3AhVbzjCQ__"
                alt="High Level Project"
                className="w-full max-w-sm h-auto object-cover rounded-lg transition-all transform hover:scale-105"
              />
            </div>

            {/* High-level buttons */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6 items-center">
              <button
                onClick={() => navigate("/register")}
                className="py-3 px-5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition transform hover:scale-105"
              >
                High-Level Project
              </button>
              <button
                onClick={() => navigate("/register")}
                className="py-3 px-5 bg-yellow-600 text-white rounded-lg font-medium hover:bg-yellow-700 transition transform hover:scale-105"
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
