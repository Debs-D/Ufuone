import PropTypes from "prop-types";
import "../App.css";

// eslint-disable-next-line react/prop-types
const Box = ({ image, imgUrl, title, subtitle, description, style, customHeight }) => {
  const defaultStyles = {
    container: {
      width: style?.width || "350px",
      height: customHeight || "auto",
      background: "rgba(0, 92, 179, 1)", // Background color
      borderRadius: "18px",
      padding: "24px",
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      color: "#fff", // Ensure text color contrasts with the background
      ...style,
    },
    contentWrapper: {
      display: "flex",
      alignItems: "center", // Align image and text horizontally
      gap: "16px", // Space between the image and text
      marginBottom: "12px",
    },
    imageWrapper: {
      flexShrink: 0, // Prevent the image from shrinking
      width: "80px",
      height: "80px",
      overflow: "hidden",
      borderRadius: "50%", // Make the image circular
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    textWrapper: {
      flex: 1, // Allow the text to take up remaining space
    },
    title: {
      fontSize: style?.fontSize || "20px",
      fontWeight: style?.fontWeight || "500",
      lineHeight: "1.2",
      margin: "0",
    },
    subtitle: {
      fontSize: style?.fontSize || "16px",
      fontWeight: "400",
      color: "rgba(255, 255, 255, 0.8)", // Slightly lighter subtitle color
      margin: "4px 0",
    },
    description: {
      fontSize: style?.fontSize || "16px",
      fontWeight: style?.fontWeight || "400",
      lineHeight: "1.5",
      marginTop: "12px",
    },
  };

  return (
    <div style={defaultStyles.container}>
      {/* Image and Text beside each other */}
      <div style={defaultStyles.contentWrapper}>
        <div style={defaultStyles.imageWrapper}>
          <img src={image || imgUrl} alt={title} style={defaultStyles.image} />
        </div>
        <div style={defaultStyles.textWrapper}>
          <h3 style={defaultStyles.title}>{title}</h3>
          {subtitle && <h4 style={defaultStyles.subtitle}>{subtitle}</h4>}
        </div>
      </div>

      {/* Description below */}
      <p style={defaultStyles.description}>{description}</p>
    </div>
  );
};

Box.propTypes = {
  image: PropTypes.string,
  imgUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Box;
