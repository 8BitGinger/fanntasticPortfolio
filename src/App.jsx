import React from 'react';

// components
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Spacer from './components/Spacer';

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Banner />
      <NavBar />
      <About />
      <Resume />
      <Projects />
      <Spacer />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
