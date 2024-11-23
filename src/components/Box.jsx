import PropTypes from "prop-types";
import "../App.css";

const Box = ({ title, description, bgColor, style }) => {
  return (
    <div
      className={`p-10 ${bgColor} rounded-[18px] flex  flex-col justify-center items-start`}
      style={{
        ...style,
        width: "567px",
        height: "396.15px",
        gap: "0px",
        opacity: 1,
      }}
    >
      <h3
        className="text-left font-outfit font-medium"
        style={{
          fontSize: style?.fontSize || "48px",
          fontWeight: style?.fontWeight || "500",
          height: "160.46px",
          gap: "0px",
        }}
      >
        {title.split(" ")[0]} <br />
        {title.split(" ").slice(1).join(" ")}
      </h3>

      <p
        className="text-left font-outfit font-normal mt-4"
        style={{
          fontSize: style?.fontSize || "30px",
          fontWeight: style?.fontWeight || "400",
          width: "402px",
          height: "70.2px",
          gap: "0px",
        }}
      >
        <p className="box-description">{description}</p>
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
