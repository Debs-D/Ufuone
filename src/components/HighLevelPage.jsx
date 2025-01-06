import ButtonNavbar from "../components/ButtonNavbar";

const HighLevelPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Render ButtonNavbar */}
      <ButtonNavbar />

      {/* Page Content */}
      <div className="flex-grow w-full p-6">
        {/* Header */}
        <header className="text-center my-8">
          <h1 className="text-8xl font-semibold">We Offer Variety</h1>
        </header>

        {/* Button Containers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Button 1 */}
          <div
            className="p-6 rounded-lg shadow-lg "
            style={{
              background: "rgba(244, 244, 244, 1)",
              width: "488px",
            }}
          >
            <h2 className="text-4xl font-semibold ">Build it Yourself</h2>
            <p className="text-gray-700 mb-4">
              Get access to schematics, component designs, and all the relevant
              information you need to build your project independently.
            </p>
            <button className="py-2 px-4 bg-red-600 text-white rounded-lg font-medium hover:bg-blue-700">
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
              Lets Build it for You{" "}
            </h2>
            <p className="text-gray-700 mb-4">
              Leave the hard work to us! We’ll build your project from start to
              finish, tailored to your needs.
            </p>
            <button className="py-2 px-4 bg-red-600 text-white rounded-lg font-medium hover:bg-blue-700">
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
            Lets Build it Together
          </h2>
          <p className="text-gray-700 mb-4">
            Collaborate with an expert assistant to bring your project to life
            while gaining hands-on experience.
          </p>
          <button className="py-2 px-4 bg-red-600 text-white rounded-lg font-medium hover:bg-blue-700">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default HighLevelPage;
