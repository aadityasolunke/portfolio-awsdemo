// import React from 'react';
// import { projectsData } from '../data/projectsData';

// const Projects = () => {
//   return (
//     <section id="projects" className="section-padding">
//       <div className="container">
//         <h2 className="section-title">MY PROJECTS</h2>
//         <div className="row">
//           {projectsData.map((project, index) => (
//             <div key={index} className="col-lg-6 col-md-6 mb-4">
//               <div className="project-card">
//                 <div className="project-header">
//                   <h4 className="project-title">{project.title}</h4>
//                   <span className="project-category">{project.category}</span>
//                 </div>
//                 <div className="project-body">
//                   <p>{project.description}</p>
//                   <div className="mt-3">
//                     <h6 className="mb-2">Technologies Used:</h6>
//                     {project.technologies.map((tech, techIndex) => (
//                       <span key={techIndex} className="tech-badge">{tech}</span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


import React, { useState } from 'react';
import { projectsData, projectCategories } from '../data/projectsData';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    if (category === 'all') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === category));
    }
  };

  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="projects-hero-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-8 mx-auto">
              <h1 className="page-title">My Projects</h1>
              <p className="page-subtitle">
                A showcase of my work in AI/ML, Computer Vision, and Web Development. 
                Each project represents a unique challenge solved with innovative technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="filter-buttons text-center">
                {projectCategories.map((category) => (
                  <button
                    key={category.value}
                    className={`filter-btn ${activeFilter === category.value ? 'active' : ''}`}
                    onClick={() => handleFilterChange(category.value)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            {filteredProjects.map((project, index) => (
              <div key={index} className="col-lg-6 mb-5">
                <div className="project-card-detailed">
                  <div className="project-header">
                    <div className="project-category-badge">{project.category}</div>
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                  
                  <div className="project-body">
                    <p className="project-description">{project.description}</p>
                    
                    {/* Project Highlights */}
                    {project.highlights && (
                      <div className="project-highlights">
                        <h6>Key Features:</h6>
                        <ul>
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Technologies */}
                    <div className="project-technologies">
                      <h6>Technologies Used:</h6>
                      <div className="tech-tags">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-badge-detailed">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="project-footer">
                    <button className="btn-project-detail">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center">
              <p className="text-muted">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-8 mx-auto">
              <h2>Interested in Working Together?</h2>
              <p>I'm always open to discussing new opportunities and innovative projects.</p>
              <a href="/contact" className="btn-custom">Get In Touch</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;