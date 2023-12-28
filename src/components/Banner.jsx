import PropTypes from "prop-types";

Banner.propTypes = {
  background: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default function Banner({ background, title }) {
  const bannerStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
  };

  return (
    <div className="banner-container banner-overlay" style={bannerStyle}>
      <div className="banner-title">
        <h1>{title}</h1>
      </div>
    </div>
  );
}
