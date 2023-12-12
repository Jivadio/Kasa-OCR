import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";

const About = () => {
  return (
    <div className="p-5 sm:p-0">
      <Banner background="about_background.png" />
      <div className="space-y-8 my-9">
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
