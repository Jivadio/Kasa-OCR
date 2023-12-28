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
      <div className="card-container">
        <div className="card-background" style={backgroundImageStyle}>
          <div className="card-title">{title}</div>
        </div>
      </div>
    </Link>
  );
}
