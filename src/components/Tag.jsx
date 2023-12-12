import PropTypes from "prop-types";

Tags.propTypes = {
  name: PropTypes.string.isRequired,
};

export default function Tags({ name }) {
  return (
    <div className="sm:px-5 px-2 py-0.5 bg-[#FF6060] text-white w-fit rounded-2xl text-xs sm:text-base">
      {name}
    </div>
  );
}
