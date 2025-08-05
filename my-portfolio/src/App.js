// import React, { useState, useEffect } from 'react';
// import Navbar from './components/Navbar';
// import Hero from './pages/Home';
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
// import './styles/Portfolio.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   const [activeSection, setActiveSection] = useState('home');

//   const scrollToSection = (sectionId) => {
//     setActiveSection(sectionId);
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="App">
//       <Navbar 
//         activeSection={activeSection} 
//         scrollToSection={scrollToSection} 
//       />
//       <Hero scrollToSection={scrollToSection} />
//       <About />
//       <Projects />
//       <Contact />
//     </div>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './styles/Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;