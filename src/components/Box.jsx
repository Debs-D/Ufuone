import PropTypes from "prop-types";
import "../App.css";

const Box = ({ image, title, description, bgColor, style }) => {
  const defaultStyles = {
    container: {
      width: "350px",
      height: "auto",
      ...style,
    },
    imageWrapper: {
      width: "100%",
      height: "160px",
      overflow: "hidden",
      borderRadius: "12px",
      marginBottom: "12px",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    title: {
      fontSize: style?.fontSize || "24px",
      fontWeight: style?.fontWeight || "500",
      lineHeight: "1.2",
      margin: "12px 0",
    },
    description: {
      fontSize: style?.fontSize || "16px",
      fontWeight: style?.fontWeight || "400",
      lineHeight: "1.5",
    },
  };

  return (
    <div
      className={` ${bgColor} rounded-[18px] flex flex-col items-start shadow-lg`}
      style={defaultStyles.container}
    >
      <div style={defaultStyles.imageWrapper}>
        <img
          src={image}
          alt={title}
          className="object-cover rounded-lg"
          style={defaultStyles.image}
        />
      </div>

      <h3
        className="text-left font-outfit font-medium"
        style={defaultStyles.title}
      >
        {title}
      </h3>

      <p
        className="text-left font-outfit font-normal"
        style={defaultStyles.description}
      >
        {description}
      </p>
    </div>
  );
};

Box.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Box;
