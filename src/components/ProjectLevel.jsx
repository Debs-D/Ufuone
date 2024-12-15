import PropTypes from "prop-types"; // Import PropTypes for prop validation

const ProjectLevel = ({ title, description, imageSrc, onClick }) => {
  return (
    <div className="text-center w-full flex flex-col items-center gap-12">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{title}</h1>
      <p className="text-xl text-gray-600 mb-6">{description}</p>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full max-w-5xl">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={imageSrc}
            alt={`${title} Project`}
            className="w-full max-w-sm h-auto object-cover rounded-lg transition-transform hover:scale-105"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center gap-6">
          <button
            onClick={onClick}
            className="py-3 px-5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-transform hover:scale-105"
          >
            {title} Project
          </button>
        </div>
      </div>
    </div>
  );
};

// Prop validation
ProjectLevel.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProjectLevel;
