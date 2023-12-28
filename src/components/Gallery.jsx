import PropTypes from "prop-types";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function Gallery({ images }) {
  const galleryRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const showChevron = images.length > 1;

  return (
    <div ref={galleryRef} className="gallery-container">
      {showChevron && (
        <ChevronLeftIcon
          className="gallery-chevron gallery-chevron--left"
          onClick={() =>
            setCurrentImageIndex(
              currentImageIndex === 0
                ? images.length - 1
                : currentImageIndex - 1
            )
          }
        />
      )}
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex}`}
        className="gallery-image"
      />
      {showChevron && (
        <ChevronRightIcon
          className="gallery-chevron gallery-chevron--right"
          onClick={() =>
            setCurrentImageIndex(
              currentImageIndex === images.length - 1
                ? 0
                : currentImageIndex + 1
            )
          }
        />
      )}
      {showChevron && (
        <div className="gallery-pagination sm:block hidden">
          {currentImageIndex + 1}/{images.length}
        </div>
      )}
    </div>
  );
}
