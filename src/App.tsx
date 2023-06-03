import NavBar from './components/NavBar';
import HeroBlock from './components/HeroBlock';
import DomainBlock from './components/DomainBlock';
import Plan from './components/Plan';
import Service from './components/Service';
import ControlPanel from './components/ControlPanel';
import Testimonial from './components/Testimonial';
import Callout from './components/Callout';
import Footer from './components/Footer';

function App() {
  return (
    <>
        <NavBar />
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
}

export default App;
