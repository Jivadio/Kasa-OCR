import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default function Card({ title, image, id }) {
  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%), url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <Link to={`/accomodation/${id}`}>
      <div className="w-full relative">
        <div
          className="w-full rounded-lg"
          style={{ paddingTop: "100%", ...backgroundImageStyle }}
        >
          <div className="text-white px-5 pb-5 absolute bottom-0 left-0 right-0 text-lg">
            {title}
          </div>
        </div>
      </div>
    </Link>
  );
}
