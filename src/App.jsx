import React from 'react';

// components
import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Spacer from './components/Spacer';
// import Confetti from './components/Confetti';

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Banner />
      <Header />
      <About />
      <Resume />
      <Projects />
      <Spacer />
      <Contact />
      <Footer />

      <div className="h-fit"></div>
    </div>
  );
};

export default App;
