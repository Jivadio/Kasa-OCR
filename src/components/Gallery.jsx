import PropTypes from "prop-types";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useRef, useState, useEffect } from "react";

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function Gallery({ images }) {
  const galleryRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const showChevron = images.length > 1;

  return (
    <div
      ref={galleryRef}
      className="container mx-auto relative h-[255px] sm:h-[456px]"
    >
      {showChevron && (
        <ChevronLeftIcon
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-6 sm:w-16 text-white cursor-pointer"
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
        className="rounded-3xl h-full w-full object-cover"
      />
      {showChevron && (
        <ChevronRightIcon
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-6 sm:w-16 text-white cursor-pointer"
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
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white p-4 text-lg sm:block hidden">
          {currentImageIndex + 1}/{images.length}
        </div>
      )}
    </div>
  );
}
