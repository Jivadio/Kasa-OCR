import { useParams, Navigate } from "react-router-dom";
import data from "../data/logements.json";
import Gallery from "../components/Gallery";
import Tag from "../components/Tag";
import Stars from "../components/Stars";
import Dropdown from "../components/Dropdown";

const Accomodation = () => {
  const { id } = useParams();

  const logement = data.find((logement) => logement.id === id);

  if (!logement) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="container mx-auto px-5 mb-6">
      <Gallery images={logement.pictures} />
      <div className="flex flex-col sm:flex-row items-center justify-between mt-5">
        <div className="w-full sm:w-auto">
          <h1 className="text-lg sm:text-4xl text-[#FF6060] mt-4 sm:mt-8">
            {logement.title}
          </h1>
          <p className="text-[#FF6060] text-base sm:text-lg mt-1 sm:mt-0">
            {logement.location}
          </p>
          <div className="flex items-center space-x-2.5 mt-2 sm:mt-5">
            {logement.tags.map((tag, index) => (
              <Tag key={index} name={tag} />
            ))}
          </div>
        </div>
        <div className="flex items-center sm:items-end space-x-2.5 mt-2 sm:mt-0 sm:flex-col-reverse justify-between sm:justify-normal w-full sm:w-auto">
          <Stars rating={Number(logement.rating)} />
          <div className="flex items-center space-x-2.5">
            <p className="text-[#FF6060] text-xs sm:text-lg">
              {logement.host.name}
            </p>
            <img
              src={logement.host.picture}
              alt="avatar"
              className="w-8 sm:w-16 rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col space-y-6 sm:space-y-0 sm:space-x-20 mt-6">
        <div className="w-full sm:w-1/2">
          <Dropdown question="Description" answer={logement.description} />
        </div>
        <div className="w-full sm:w-1/2">
          <Dropdown question="Equipements" answer={logement.equipments} />
        </div>
      </div>
    </div>
  );
};

export default Accomodation;
