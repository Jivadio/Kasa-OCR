import { useParams, Navigate } from "react-router-dom";
import data from "../data/logements.json";
import Gallery from "../components/Gallery";

const Accomodation = () => {
  const { id } = useParams();

  const logement = data.find((logement) => logement.id === id);

  if (!logement) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="container mx-auto">
      <Gallery images={logement.pictures} />
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl text-[#FF6060] mt-8">{logement.title}</h1>
          <p className="text-[#FF6060] text-lg">{logement.location}</p>
        </div>
        <div className="flex items-center space-x-2.5">
          <p className="text-[#FF6060] text-lg">{logement.host.name}</p>
          <img src={logement.host.picture} alt="avatar" className="w-16 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Accomodation;
