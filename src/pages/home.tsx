import Callout from "../components/Callout/Callout";
import ControlPanel from "../components/ControlPanel";
import DomainBlock from "../components/DomainBlock/DomainBlock";
import Footer from "../components/Footer/Footer";
import HeroBlock from "../components/HeroBlock/HeroBlock";
import NavBar from "../components/NavBar/NavBar";
import Plan from "../components/Plan/Plan";
import Service from "../components/Service/Service";
import Testimonial from "../components/Testimonial/Testimonial";
import SignIn from "./sign-in";

const Home = () => {
  const onMenuItemClick = (value: string) => {};
  return (
    <>
      <NavBar onMenuItemClick={onMenuItemClick} />
      <HeroBlock />
      <DomainBlock />
      <Plan />
      <Service />
      <ControlPanel />
      <Testimonial />
      <Callout />
      <Footer />
    </>
  );
};

export default Home;
