// import React, { useState, useEffect } from 'react';

// const Navbar = ({ activeSection, scrollToSection }) => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`navbar navbar-expand-lg fixed-top navbar-custom ${isScrolled ? 'navbar-scrolled' : ''}`}>
//       <div className="container">
//         <a className="navbar-brand" href="#home" onClick={() => scrollToSection('home')}>
//           ADITYA
//         </a>
//         <button 
//           className="navbar-toggler" 
//           type="button" 
//           data-bs-toggle="collapse" 
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav" 
//           aria-expanded="false" 
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <span 
//                 className={`nav-link-custom ${activeSection === 'home' ? 'nav-link-active' : ''}`}
//                 onClick={() => scrollToSection('home')}
//               >
//                 HOME
//               </span>
//             </li>
//             <li className="nav-item">
//               <span 
//                 className={`nav-link-custom ${activeSection === 'about' ? 'nav-link-active' : ''}`}
//                 onClick={() => scrollToSection('about')}
//               >
//                 ABOUT
//               </span>
//             </li>
//             <li className="nav-item">
//               <span 
//                 className={`nav-link-custom ${activeSection === 'projects' ? 'nav-link-active' : ''}`}
//                 onClick={() => scrollToSection('projects')}
//               >
//                 PROJECTS
//               </span>
//             </li>
//             <li className="nav-item">
//               <span 
//                 className={`nav-link-custom ${activeSection === 'contact' ? 'nav-link-active' : ''}`}
//                 onClick={() => scrollToSection('contact')}
//               >
//                 CONTACT
//               </span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top navbar-custom ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          ADITYA
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link-custom ${isActive('/') ? 'nav-link-active' : ''}`}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/about" 
                className={`nav-link-custom ${isActive('/about') ? 'nav-link-active' : ''}`}
              >
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/projects" 
                className={`nav-link-custom ${isActive('/projects') ? 'nav-link-active' : ''}`}
              >
                PROJECTS
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/contact" 
                className={`nav-link-custom ${isActive('/contact') ? 'nav-link-active' : ''}`}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;