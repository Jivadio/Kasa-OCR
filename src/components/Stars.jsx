import PropTypes from "prop-types";
import { StarIcon } from "@heroicons/react/24/solid";

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default function Stars({ rating }) {
  const stars = Array.from({ length: 5 }, (_, index) => {
    return (
      <StarIcon
        key={index}
        className={`star-icon ${index < rating ? "star-icon-active" : ""}`}
      />
    );
  });

  return <div className="stars-container">{stars}</div>;
}
