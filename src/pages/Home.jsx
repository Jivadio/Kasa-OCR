import Banner from "../components/Banner";
import data from "../data/logements.json";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="p-5 sm:p-0 container mx-auto">
      <Banner
        background="home_background.png"
        title="Chez vous, partout et ailleurs"
      />
      <div className="sm:bg-[#F6F6F6] sm:p-12 rounded-3xl my-5 sm:my-11">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-16">
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
