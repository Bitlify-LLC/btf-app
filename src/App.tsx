import NavBar from "./components/NavBar/NavBar";
// import { RouterProvider } from "react-router-dom";
// import router from "./routing/routes";
import Footer from "./components/Footer/Footer";

import HeroBlock from "./components/HeroBlock/HeroBlock";
import DomainBlock from "./components/DomainBlock/DomainBlock";
import Plan from "./components/Plan/Plan";
import Service from "./components/Service/Service";
import ControlPanel from "./components/ControlPanel";
import Testimonial from "./components/Testimonial/Testimonial";
import Callout from "./components/Callout/Callout";
// import Form from "./common/form";

function App() {
  const onMenuItemClick = (value: string) => {};

  return (
    <>
      <NavBar onMenuItemClick={onMenuItemClick} />
      <HeroBlock />
      {/* <Form /> */}
      <DomainBlock />
      <Plan />
      <Service />
      <ControlPanel />
      <Testimonial />
      <Callout />
      <Footer />
    </>
  );
}

export default App;
