import Banner from "../components/Banner";
import data from "../data/logements.json";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="home-container">
      <Banner
        background="home_background.png"
        title="Chez vous, partout et ailleurs"
      />
      <div className="cards-container">
        <div className="cards-grid">
          {data.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              image={logement.cover}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
