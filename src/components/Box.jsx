import PropTypes from "prop-types";
import "../App.css";

const Box = ({
  image,
  imgUrl,
  title,
  subtitle,
  description,
  bgColor,
  style,
}) => {
  const defaultStyles = {
    container: {
      width: style?.width || "350px",
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
    subtitle: {
      fontSize: style?.fontSize || "18px",
      fontWeight: "400",
      color: style?.subtitleColor || "gray",
      margin: "4px 0",
    },
    description: {
      fontSize: style?.fontSize || "16px",
      fontWeight: style?.fontWeight || "400",
      lineHeight: "1.5",
    },
  };

  return (
    <div
      className={`p-6 ${bgColor} rounded-[18px] flex flex-col items-start shadow-lg`}
      style={defaultStyles.container}
    >
      <div style={defaultStyles.imageWrapper}>
        <img
          src={image || imgUrl}
          alt={title}
          className="object-cover rounded-[18px]"
          style={defaultStyles.image}
        />
      </div>

      <h3
        className="text-left font-outfit font-medium"
        style={defaultStyles.title}
      >
        {title}
      </h3>

      {subtitle && (
        <h4 className="text-left font-outfit" style={defaultStyles.subtitle}>
          {subtitle}
        </h4>
      )}

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
  image: PropTypes.string,
  imgUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Box;
