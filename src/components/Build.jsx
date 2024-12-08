import { useNavigate } from "react-router-dom";

const Build = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-gray-100 via-blue-200 to-gray-100 p-8 flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-700 mb-4">
          Welcome to Build
        </h1>
        <p className="text-lg text-gray-600">
          Choose your project level and start building something amazing!
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-start gap-12 w-full max-w-5xl">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="https://s3-alpha-sig.figma.com/img/1dab/4b11/c1ed7785121b6aa885d763c0940f7bbf?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WDoqHKib8RSY8BToKEJLMWDYz4d9oYNszUnFWAAUosiDbu09ACV24Yos6lVJnKalYa1Z7VagXqJLzZWuKm-roMP2BN4Ac1yDTcEiPhyJPP6vVZCyJysz6RvveUMnPi-u~hSH7QApFkxLyipe~TtyjeN7sjWvxHJzU8aXFIHd6MeNGkQQjn4oNgR7GEwF44ECoTyim1zmjtt-hUJBuWJDhcx1LFiQePrlVdtZZmflTPn6yUKxuFWOwpG7iDjzOd4JLolpVakLdLSOXlBL0-fEL4t9yvdbqC6oLA5dWOk5VjW2DSnvrj3jOmE4n5YCaWhyaFp7HJKFi08GljYdeCGTxQ__"
            alt="Build Project"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Boxes Section */}
        <div className="w-full md:w-1/2 flex gap-6">
          {/* Low Level Project Box */}
          <div className="flex-1 bg-blue-100 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              Low Level Project
            </h3>
            <p className="text-gray-600 mb-4 text-center">
              Perfect for beginners to build a strong foundation.
            </p>
            <button
              onClick={() => navigate("/register")} // Navigate to register page
              className="py-3 px-6 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition"
            >
              Get Started
            </button>
          </div>

          {/* High Level Project Box */}
          <div className="flex-1 bg-green-100 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold text-green-700 mb-4">
              High Level Project
            </h3>
            <p className="text-gray-600 mb-4 text-center">
              Take your skills to the next level with advanced projects.
            </p>
            <button className="py-3 px-6 bg-green-600 text-white rounded-lg font-medium hover:bg-green-500 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Build;
