import React from 'react';
import NavBar from './components/navBar';
import HeroBlock from './components/heroBlock';
import DomainBlock from './components/domainBlock';
import Plan from './components/plan';
import Service from './components/service';
import ControlPanel from './components/controlPanel';
import Testimonial from './components/testimonial';
import Callout from './components/callout';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <body>
        <HeroBlock />
        <DomainBlock />
        <Plan />
        <Service />
        <ControlPanel />
        <Testimonial />
        <Callout />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
