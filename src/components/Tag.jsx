import PropTypes from "prop-types";

Tags.propTypes = {
  name: PropTypes.string.isRequired,
};

export default function Tags({ name }) {
  return <div className="tag-container">{name}</div>;
}
