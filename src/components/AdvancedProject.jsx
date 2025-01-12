const AdvancedProject = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to the Advanced Project
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-3xl">
        This is the advanced project section. Here, you can explore more complex
        projects and learn advanced skills to elevate your coding expertise.
      </p>
      <button
        onClick={() =>
          window.open("https://www.store.ufuon.com/advanced", "_blank")
        }
        className="mt-6 py-2 px-6 bg-blue-600 text-white rounded-lg font-medium text-sm hover:bg-blue-700 transition-transform hover:scale-105"
      >
        Explore Advanced Projects
      </button>
    </div>
  );
};

export default AdvancedProject;
