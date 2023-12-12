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
    <div
      className="container w-full mx-auto h-28 sm:h-56 flex justify-center items-center relative banner-overlay rounded-3xl"
      style={bannerStyle}
    >
      <div className="z-10">
        <h1 className="text-2xl sm:text-5xl text-white px-4 py-8 sm:px-0 sm:py-0">
          {title}
        </h1>
      </div>
    </div>
  );
}
