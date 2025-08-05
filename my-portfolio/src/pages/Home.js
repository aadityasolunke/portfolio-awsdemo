// import React from 'react';

// const Home = ({ scrollToSection }) => {
//   return (
//     <section id="home" className="hero-section">
//       <div className="floating-elements"></div>
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-lg-8 hero-content">
//             <h1 className="hero-title">
//               HELLO<br/>I AM ADITYA SOLUNKE
//             </h1>
//             <p className="hero-subtitle">AI/ML DEVELOPER & DATA ENTHUSIAST</p>
//             <p className="hero-description">
//               A dedicated B.Tech student with a passion for continuous learning and artificial intelligence. 
//               I specialize in machine learning, computer vision, and backend development, with hands-on experience 
//               in building intelligent systems and scalable applications.
//             </p>
//             <div className="mt-4">
//               <button 
//                 className="btn-custom" 
//                 onClick={() => scrollToSection('contact')}
//               >
//                 HIRE ME
//               </button>
//               <button 
//                 className="btn-outline-custom" 
//                 onClick={() => scrollToSection('about')}
//               >
//                 LEARN MORE
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;


import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="hero-section">
      <div className="floating-elements"></div>
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-8 hero-content">
            <h1 className="hero-title">
              HELLO<br/>I AM ADITYA SOLUNKE
            </h1>
            <p className="hero-subtitle">AI/ML DEVELOPER & DATA ENTHUSIAST</p>
            <p className="hero-description">
              A dedicated B.Tech student in Artificial Intelligence and Machine Learning at Symbiosis Institute of Technology. 
              I specialize in building intelligent systems, computer vision applications, and scalable backend solutions. 
              Currently working as an AI Model Developer and Backend Developer, passionate about transforming data into actionable insights.
            </p>
            <div className="mt-4">
              <Link to="/contact" className="btn-custom">
                Get in Touch
              </Link>
              <Link to="/about" className="btn-outline-custom">
                Download Resume
              </Link>
            </div>
            
            {/* Quick Stats */}
            {/* <div className="row mt-5">
              <div className="col-md-4 text-center mb-3">
                <div className="stat-item">
                  <h3 className="stat-number">3+</h3>
                  <p className="stat-label">Years Experience</p>
                </div>
              </div>
              <div className="col-md-4 text-center mb-3">
                <div className="stat-item">
                  <h3 className="stat-number">5+</h3>
                  <p className="stat-label">Projects Completed</p>
                </div>
              </div>
              <div className="col-md-4 text-center mb-3">
                <div className="stat-item">
                  <h3 className="stat-number">10+</h3>
                  <p className="stat-label">Technologies Mastered</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;