import React from 'react';
import '../styles/footer.css'; // Ensure this CSS file contains your styling for footer

const Footer = () => {
  const socialLinks = [
    { icon: 'fab fa-github', name: 'GitHub', url: 'https://github.com/your-username' },
    { icon: 'fab fa-linkedin', name: 'LinkedIn', url: 'https://www.linkedin.com/in/your-username/' },
    { icon: 'fab fa-twitter', name: 'Twitter', url: 'https://twitter.com/your-username' },
    { icon: 'fab fa-instagram', name: 'Instagram', url: 'https://www.instagram.com/your-username' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        //<h3>Contact Me := </h3>
        {socialLinks.map((social, index) => (
          <div key={index} className="social-item">
            <a href={social.url} target="_blank" rel="noopener noreferrer" className="social-link">
              <div className="social-icon">
                <i className={social.icon}></i>
              </div>
              <span className="social-name">{social.name}</span>
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
