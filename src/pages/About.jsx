import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";

const About = () => {
  return (
    <div className="about-container">
      <Banner background="about_background.png" />
      <div className="dropdown-spacing">
        <Dropdown
          question="Fiabilité"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam"
        />
        <Dropdown
          question="Respect"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam"
        />
        <Dropdown
          question="Service"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam"
        />
        <Dropdown
          question="Sécurité"
          answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam"
        />
      </div>
    </div>
  );
};

export default About;
