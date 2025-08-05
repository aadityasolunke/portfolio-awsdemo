// import React from 'react';

// const About = () => {
//   const skills = [
//     'Python', 'Java', 'Machine Learning', 'Computer Vision', 'Data Analysis',
//     'Web Development', 'HTML/CSS', 'SQL', 'Power BI', 'WordPress', 'Django/DRF',
//     'PyTorch', 'Hugging Face', 'Azure OpenAI', 'Natural Language Processing'
//   ];

//   return (
//     <section id="about" className="section-padding bg-light">
//       <div className="container">
//         <h2 className="section-title">ABOUT ME</h2>
//         <div className="row">
//           <div className="col-lg-6 mb-4">
//             <div className="about-card">
//               <h3 className="mb-3" style={{color: '#667eea'}}>Education & Background</h3>
//               <div className="mb-3">
//                 <h5>B.Tech in AI & Machine Learning</h5>
//                 <p className="text-muted">Symbiosis Institute of Technology, Lavale (2025)</p>
//               </div>
//               <div className="mb-3">
//                 <h5>Diploma in Computer Science</h5>
//                 <p className="text-muted">MIT-WPU, Kothrud (2021)</p>
//               </div>
//               <p>
//                 I thrive in collaborative environments and contribute effectively as a team member. 
//                 Known for active listening skills, I excel in group projects by fostering open 
//                 communication and cooperation.
//               </p>
//             </div>
//           </div>
//           <div className="col-lg-6 mb-4">
//             <div className="about-card">
//               <h3 className="mb-3" style={{color: '#667eea'}}>Current Experience</h3>
//               <div className="mb-3">
//                 <h5>The Data Tech Labs - Internship</h5>
//                 <p className="text-muted">Backend Developer & AI Model Developer (Feb 2025 - Present)</p>
//               </div>
//               <p>
//                 Currently working on HRMaAS (Human Resource Management as a Service) and SAVIC AI, 
//                 developing scalable RESTful APIs and intelligent agentic AI systems for enterprise clients.
//               </p>
//               <div className="mt-3">
//                 <h6>Leadership Experience:</h6>
//                 <ul>
//                   <li>Joint Sports Secretary (2022) - MIT Polytechnic</li>
//                   <li>Member of Student Council - MIT Polytechnic</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <div className="row mt-4">
//           <div className="col-12">
//             <div className="about-card">
//               <h3 className="mb-4 text-center" style={{color: '#667eea'}}>Technical Skills</h3>
//               <div className="text-center">
//                 {skills.map((skill, index) => (
//                   <span key={index} className="skill-badge">{skill}</span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from 'react';

const About = () => {
  const skills = [
    'Python', 'Java', 'SQL', 'Django', 'RESTful APIs', 'HTML', 'CSS', 'WordPress',
    'Power BI', 'Pandas', 'NumPy', 'Data Cleaning', 'EDA', 'Machine Learning', 
    'Computer Vision', 'PyTorch', 'Hugging Face Transformers', 'BERT', 'GPT-2',
    'FAISS', 'Azure OpenAI', 'Databricks', 'JWT Authentication'
  ];

  const certificates = [
    'Python For Data Science and Visualization',
    'Data Visualization',
    'Web Development'
  ];

  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="page-title">About Me</h1>
              <p className="page-subtitle">
                Passionate AI/ML Developer with expertise in building intelligent systems 
                and scalable backend solutions.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="about-image-placeholder">
                <div className="profile-card">
                  <h3>Aditya Solunke</h3>
                  <p>AI/ML Developer</p>
                  <p>📍 Pune, Maharashtra</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="education-card">
                <div className="education-header">
                  <h4>B.Tech in Artificial Intelligence and Machine Learning</h4>
                  <span className="duration">2022 – 2025</span>
                </div>
                <p className="institution">Symbiosis Institute of Technology, Pune</p>
                <p className="description">
                  Specializing in AI/ML with focus on deep learning, computer vision, 
                  and natural language processing. Active in research projects and 
                  practical implementations.
                </p>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="education-card">
                <div className="education-header">
                  <h4>Diploma in Computer Science</h4>
                  <span className="duration">2019 – 2022</span>
                </div>
                <p className="institution">MIT-WPU, Kothrud, Pune</p>
                <p className="description">
                  Strong foundation in programming, data structures, and software development. 
                  Gained leadership experience as Joint Sports Secretary and Student Council Member.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>The Data Tech Labs</h4>
                <span className="timeline-date">Feb 2025 - Present</span>
                
                {/* Backend Developer Role */}
                <div className="role-section mb-4">
                  <h5 className="role-title">Backend Developer – HRMaAS</h5>
                  <ul className="role-responsibilities">
                    <li>Built secure, scalable RESTful APIs using Django/DRF, digitizing HR workflows (employee data, leave, attendance, payroll)</li>
                    <li>Implemented JWT authentication and role-based access control for Admin, HR, and Employee roles</li>
                    <li>Integrated date filtering, timezone support, and reporting for real-time HR analytics, reducing paper-based processes</li>
                  </ul>
                </div>

                {/* AI Model Developer Role */}
                <div className="role-section">
                  <h5 className="role-title">AI Model Developer – SAVIC AI</h5>
                  <ul className="role-responsibilities">
                    <li>Developed agentic AI systems using PyTorch, Hugging Face Transformers, Azure OpenAI for real-time enterprise decision support</li>
                    <li>Designed cognitive agents capable of semantic retrieval, summarization, and reasoning using FAISS and Azure embeddings</li>
                    <li>Deployed scalable pipelines on Databricks and Azure, enabling automated, data-driven decision-making for clients</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="skill-category">
                <h5>Programming</h5>
                <div className="skill-tags">
                  <span className="skill-badge">Python</span>
                  <span className="skill-badge">Java</span>
                  <span className="skill-badge">SQL</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="skill-category">
                <h5>Web Development</h5>
                <div className="skill-tags">
                  <span className="skill-badge">Django</span>
                  <span className="skill-badge">RESTful APIs</span>
                  <span className="skill-badge">HTML</span>
                  <span className="skill-badge">CSS</span>
                  <span className="skill-badge">WordPress</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="skill-category">
                <h5>Data Analysis</h5>
                <div className="skill-tags">
                  <span className="skill-badge">Power BI</span>
                  <span className="skill-badge">Pandas</span>
                  <span className="skill-badge">NumPy</span>
                  <span className="skill-badge">Data Cleaning</span>
                  <span className="skill-badge">EDA</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="skill-category">
                <h5>AI & Machine Learning</h5>
                <div className="skill-tags">
                  <span className="skill-badge">Machine Learning</span>
                  <span className="skill-badge">Computer Vision</span>
                  <span className="skill-badge">PyTorch</span>
                  <span className="skill-badge">Hugging Face</span>
                  <span className="skill-badge">Azure OpenAI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Certificates */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <h3 className="mb-4">Leadership Experience</h3>
              <div className="leadership-item">
                <h5>Joint Sports Secretary</h5>
                <p className="text-muted">MIT Polytechnic, Pune (2022)</p>
                <p>Led sports activities and organized inter-collegiate events, developing team management and organizational skills.</p>
              </div>
              <div className="leadership-item">
                <h5>Student Council Member</h5>
                <p className="text-muted">MIT Polytechnic, Pune</p>
                <p>Represented student interests and contributed to academic and extracurricular policy decisions.</p>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <h3 className="mb-4">Certifications</h3>
              {certificates.map((cert, index) => (
                <div key={index} className="certificate-item">
                  <div className="certificate-icon">🏆</div>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;