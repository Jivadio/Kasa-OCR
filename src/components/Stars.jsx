import PropTypes from "prop-types";
import { StarIcon } from "@heroicons/react/24/solid";

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default function Stars({ rating }) {
  const stars = Array.from({ length: 5 }, (_, index) => {
    return index < rating ? (
      <StarIcon className="text-[#FF6060] w-4 sm:w-9 h-4 sm:h-9" />
    ) : (
      <StarIcon className="text-[#E3E3E3] w-4 sm:w-9 h-4 sm:h-9" />
    );
  });

  return <div className="flex sm:mt-14">{stars}</div>;
}
