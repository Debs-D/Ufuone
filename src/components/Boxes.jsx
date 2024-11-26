import PropTypes from "prop-types";
import "../App.css";

const Box = ({ title, description, bgColor, style }) => {
  const titleParts = title.split(" ");
  const mainTitle = titleParts.slice(0, -1).join(" ");
  const lastWord = titleParts[titleParts.length - 1];

  return (
    <div
      className={`flex flex-col items-center justify-between ${bgColor} text-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105`}
      style={{
        ...style,
        width: "300px", // Ensure boxes are of equal width
        maxWidth: "100%", // Responsive width on smaller screens
        margin: "0 10px", // Add spacing between boxes
      }}
    >
      <h3
        className="text-left font-outfit font-semibold text-2xl leading-tight mb-4"
        style={{
          wordWrap: "break-word",
          overflow: "hidden", // Ensure no overflow
          textOverflow: "ellipsis", // Prevent text from spilling out
          display: "block",
        }}
      >
        {mainTitle} <br />
        <span className="underline text-lg">{lastWord}</span>
      </h3>

      <p
        className="text-left font-outfit text-lg font-light"
        style={{
          wordWrap: "break-word",
          overflow: "hidden", // Ensure no overflow
          textOverflow: "ellipsis", // Prevent text from spilling out
          display: "block",
        }}
      >
        {description}
      </p>
    </div>
  );
};

Box.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Box;
