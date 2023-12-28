import PropTypes from "prop-types";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

Dropdown.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  className: PropTypes.string,
};

export default function Dropdown({ question, answer, className }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const renderAnswer = () => {
    if (Array.isArray(answer)) {
      return (
        <ul>
          {answer.map((item, index) => (
            <li key={index} className="dropdown-text">
              {item}
            </li>
          ))}
        </ul>
      );
    }
    return <p className="dropdown-text">{answer}</p>;
  };

  return (
    <div>
      <div
        className={`dropdown-container ${className}`}
        onClick={toggleDropdown}
      >
        <div className="dropdown-title">
          <h2>{question}</h2>
          {isOpen ? (
            <ChevronUpIcon className="dropdown-icon" />
          ) : (
            <ChevronDownIcon className="dropdown-icon" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className={`dropdown-content ${className}`}>{renderAnswer()}</div>
      )}
    </div>
  );
}
