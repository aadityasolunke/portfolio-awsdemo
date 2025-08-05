// import React from 'react';

// const Contact = () => {
//   return (
//     <section id="contact" className="section-padding contact-section">
//       <div className="container">
//         <h2 className="section-title text-white">GET IN TOUCH</h2>
//         <div className="row justify-content-center">
//           <div className="col-lg-4 col-md-6 mb-4">
//             <div className="contact-card">
//               <div className="contact-icon">📧</div>
//               <h4>Email</h4>
//               <p>Solunkeaditya17@gmail.com</p>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 mb-4">
//             <div className="contact-card">
//               <div className="contact-icon">📱</div>
//               <h4>Phone</h4>
//               <p>8275854876</p>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6 mb-4">
//             <div className="contact-card">
//               <div className="contact-icon">📍</div>
//               <h4>Location</h4>
//               <p>Pune, Maharashtra</p>
//             </div>
//           </div>
//         </div>
//         <div className="row justify-content-center mt-4">
//           <div className="col-lg-6 text-center">
//             <div className="contact-card">
//               <div className="contact-icon">💼</div>
//               <h4>GitHub</h4>
//               <p>github.com/aadityasolunke</p>
//               <a 
//                 href="https://github.com/aadityasolunke" 
//                 className="btn-custom mt-3" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 View Projects
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="page-content">
      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-8 mx-auto">
              <h1 className="page-title text-white">Get In Touch</h1>
              <p className="page-subtitle text-white">
                Open to WOrk! Let's discuss how we can work together 
                to bring your ideas to life with cutting-edge Technologies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      {/* <section className="section-padding bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-info-card">
                <div className="contact-icon">📧</div>
                <h4>Email</h4>
                <p>solunkeaditya17@gmail.com</p>
                <a href="mailto:solunkeaditya17@gmail.com" className="contact-link">Send Email</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-info-card">
                <div className="contact-icon">📱</div>
                <h4>Phone</h4>
                <p>+91-8275854876</p>
                <a href="tel:+918275854876" className="contact-link">Call Now</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="contact-info-card">
                <div className="contact-icon">📍</div>
                <h4>Location</h4>
                <p>Pune, Maharashtra, India</p>
                <span className="contact-link">Available for Remote Work</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Form & Social Links */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            {/* Contact Form */}
            <div className="col-lg-8 mb-5">
              <div className="contact-form-card">
                <h3 className="mb-4">Send Me a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-custom">Send Message</button>
                </form>
              </div>
            </div>

            {/* Social Links & Additional Info */}
            <div className="col-lg-4">
              <div className="social-links-card">
                <h3 className="mb-4">Connect With Me</h3>
                
                <div className="social-item">
                  <div className="social-icon">💼</div>
                  <div>
                    <h5>GitHub</h5>
                    <p>Check out my latest projects and code</p>
                    <a 
                      href="https://github.com/aadityasolunke" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-link"
                    >
                      github
                    </a>
                  </div>
                </div>

                <div className="social-item">
                  <div className="social-icon">🎓</div>
                  <div>
                    <h5>LinkedIn</h5>
                    <p>Professional network and career updates</p>
                    <a 
                      href="https://www.linkedin.com/in/aditya-solunke-83030531a/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-link"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>

                {/* <div className="availability-card mt-4">
                  <h4>Current Availability</h4>
                  <div className="availability-status">
                    <span className="status-indicator available"></span>
                    <span>Available for new projects</span>
                  </div>
                  <p className="mt-2">
                    Currently pursuing B.Tech and working as an intern. 
                    Open to freelance projects and full-time opportunities post-graduation.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      {/* <section className="section-padding bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-8 mx-auto">
              <h2 className="mb-4">What I Can Help You With</h2>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="service-item">
                    <div className="service-icon">🤖</div>
                    <h5>AI/ML Solutions</h5>
                    <p>Custom machine learning models, computer vision systems, and NLP applications</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="service-item">
                    <div className="service-icon">🖥️</div>
                    <h5>Backend Development</h5>
                    <p>Scalable APIs, database design, and enterprise-grade backend systems</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="service-item">
                    <div className="service-icon">📊</div>
                    <h5>Data Analysis</h5>
                    <p>Data visualization, business intelligence, and actionable insights from data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;