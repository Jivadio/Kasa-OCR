import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="p-5 sm:p-0">
      <Banner
        background="home_background.png"
        title="Chez vous, partout et ailleurs"
      />
      <h1>Home</h1>
    </div>
  );
};

export default Home;
