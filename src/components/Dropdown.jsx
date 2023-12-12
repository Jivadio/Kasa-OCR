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
            <li key={index} className="text-[#FF6060]">
              {item}
            </li>
          ))}
        </ul>
      );
    }
    return <p className="text-[#FF6060]">{answer}</p>;
  };

  return (
    <div>
      <div
        className={`bg-[#FF6060] container mx-auto rounded-lg p-2.5 cursor-pointer ${className}`}
      >
        <div
          className="flex items-center justify-between"
          onClick={toggleDropdown}
        >
          <h2 className="text-white text-lg">{question}</h2>
          {isOpen ? (
            <ChevronUpIcon className="text-white w-8" />
          ) : (
            <ChevronDownIcon className="text-white w-8" />
          )}
        </div>
      </div>
      {isOpen && (
        <div
          className={`bg-[#F6F6F6] container mx-auto rounded-b-lg p-2.5 ${className}`}
        >
          {renderAnswer()}
        </div>
      )}
    </div>
  );
}
