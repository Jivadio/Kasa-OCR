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
      className="container w-full mx-auto h-56 flex justify-center items-center relative banner-overlay rounded-3xl"
      style={bannerStyle}
    >
      <div className="z-10">
        {" "}
        {/* Assurez-vous que le contenu est au-dessus du pseudo-élément */}
        <h1 className="text-5xl text-white">{title}</h1>
      </div>
    </div>
  );
}
