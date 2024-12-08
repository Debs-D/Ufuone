const Success = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 p-8">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        Congratulations!
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        You have successfully registered your project.
      </p>
      <a
        href="https://www.store.ufuon.com/project"
        target="_blank"
        rel="noopener noreferrer"
        className="py-3 px-6 bg-green-600 text-white rounded-lg font-medium hover:bg-green-500 transition"
      >
        Get Started
      </a>
    </div>
  );
};

export default Success;
