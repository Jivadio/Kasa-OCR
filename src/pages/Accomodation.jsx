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
    <div className="accomodation-container">
      <Gallery images={logement.pictures} />
      <div className="accomodation-info">
        <div className="accomodation-info-title-container">
          <h1 className="accomodation-info-title">{logement.title}</h1>
          <p className="accomodation-info-location">{logement.location}</p>
          <div className="accomodation-info-tags">
            {logement.tags.map((tag, index) => (
              <Tag key={index} name={tag} />
            ))}
          </div>
        </div>
        <div className="accomodation-info-host-container">
          <Stars rating={Number(logement.rating)} />
          <div className="accomodation-info-host">
            <p className="accomodation-info-host-name">{logement.host.name}</p>
            <img
              src={logement.host.picture}
              alt="avatar"
              className="accomodation-info-host-picture"
            />
          </div>
        </div>
      </div>
      <div className="dropdown-section">
        <div className="dropdown-section-item">
          <Dropdown question="Description" answer={logement.description} />
        </div>
        <div className="dropdown-section-item">
          <Dropdown question="Equipements" answer={logement.equipments} />
        </div>
      </div>
    </div>
  );
};

export default Accomodation;
