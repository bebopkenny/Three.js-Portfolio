import React from 'react';
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx"; // Import Hero component
import About from "./sections/About.jsx"; // Import About component
import Projects from './sections/Projects.jsx'; // Import Projects component
import Clients from './sections/Clients.jsx';
import Contacts from './sections/Contacts.jsx';
import Footer from './sections/Footer.jsx';
import Experience from './sections/Experience.jsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About /> 
      <Projects />
      <Clients />
      <Experience />
      <Contacts />
      <Footer />   
    </main>
  );
};

export default App;
