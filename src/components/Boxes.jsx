import PropTypes from "prop-types";
import "../App.css";

const Box = ({ title, description, bgColor, style }) => {
  // Split the title into the main part and the last word
  const titleParts = title.split(" ");
  const mainTitle = titleParts.slice(0, -1).join(" ");
  const lastWord = titleParts[titleParts.length - 1];

  return (
    <div
      className={`p-10 ${bgColor} rounded-[18px] flex flex-col justify-between items-start`}
      style={{
        ...style,
        width: "390px",
        height: "auto",
        minHeight: "396px",
        gap: "0px",
        opacity: 1,
        overflow: "hidden",
      }}
    >
      <h3
        className="text-left font-outfit font-medium text-white"
        style={{
          fontSize: style?.fontSize || "48px",
          fontWeight: style?.fontWeight || "500",
          height: "auto",
          gap: "0px",
          wordWrap: "break-word",
        }}
      >
        {mainTitle} <br />
        <span className="underline">{lastWord}</span>
      </h3>

      <p
        className="text-left font-outfit font-normal mt-4 text-white"
        style={{
          fontSize: style?.fontSize || "30px",
          fontWeight: style?.fontWeight || "400",
          width: "100%",
          height: "auto",
          gap: "0px",
          wordWrap: "break-word",
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
