
// import React, { useState } from 'react';
// import '../assets/img1.jpeg';
// import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Submitted:', formData);
//     // Add your form submission logic here (e.g., email sending API)
//   };

//   return (
//     <section className="contact-us">
//       <div className="contact-details">
//         <h2>Get in Touch</h2>
//         <p>Have a question or want to work together? Drop us a message!</p>
//         <p><strong>Email:</strong> guthasahithchowdary@gmail.com</p>
//         <p><strong>Location:</strong> Madanapalle, Andhra Pradesh 517325</p>
//       </div>

//       <div className="contact-form">
//         <h3>Contact Form</h3>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             placeholder="Your Name"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             placeholder="Your Email"
//             required
//           />
//           <input
//             type="text"
//             name="subject"
//             value={formData.subject}
//             onChange={handleInputChange}
//             placeholder="Subject"
//             required
//           />
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleInputChange}
//             placeholder="Your Message"
//             required
//           />
//           <button type="submit">Send Message</button>
//         </form>

//         <div className="social-media-icons">
//           <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
//             <FaGithub size={30} />
//           </a>
//           <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
//             <FaFacebook size={30} />
//           </a>
//           <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
//             <FaInstagram size={30} />
//           </a>
//           <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
//             <FaLinkedin size={30} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;









// import React, { useState } from 'react';
// import '../styles/ContactUs.css';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Submitted:', formData);
//     // Add your form submission logic here (e.g., email sending API)
//   };

//   return (
//     <section className="contact-us">
//       <div className="contact-details">
//         <h2>Get in Touch</h2>
//         <p>Have a question or want to work together? Drop us a message!</p>
//         <p><strong>Email:</strong> guthasahithchowdary@gmail.com</p>
//         <p><strong>Location:</strong> Madanapalle, Andhra Pradesh 517325</p>
//       </div>

//       <div className="contact-form">
//         <h3>Contact Form</h3>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             placeholder="Your Name"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             placeholder="Your Email"
//             required
//           />
//           <input
//             type="text"
//             name="subject"
//             value={formData.subject}
//             onChange={handleInputChange}
//             placeholder="Subject"
//             required
//           />
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleInputChange}
//             placeholder="Your Message"
//             required
//           />
//           <button type="submit">Send Message</button>
//         </form>

//         <div className="social-media-icons">
//           <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-github"></i>
//           </a>
//           <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-facebook"></i>
//           </a>
//           <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-instagram"></i>
//           </a>
//           <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-linkedin"></i>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;














// import React, { useState } from 'react';
// import '../styles/ContactUs.css';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Submitted:', formData);
//     // Add your form submission logic here (e.g., email sending API)
//   };

//   return (
//     <section className="contact-us">
//       <div className="contact-details">
//         <h2>Get in Touch</h2>
//         <p>Have a question or want to work together? Drop us a message!</p>
//         <p><strong>Email:</strong> guthasahithchowdary@gmail.com</p>
//         <p><strong>Location:</strong> Madanapalle, Andhra Pradesh 517325</p>
//       </div>

//       <div className="contact-form-container">
//         <div className="contact-form">
//           <h3>Contact Form</h3>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               placeholder="Your Name"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="Your Email"
//               required
//             />
//             <input
//               type="text"
//               name="subject"
//               value={formData.subject}
//               onChange={handleInputChange}
//               placeholder="Subject"
//               required
//             />
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleInputChange}
//               placeholder="Your Message"
//               required
//             />
//             <button type="submit">Send Message</button>
//           </form>
//         </div>

//         <div className="social-media-icons">
//           <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-github"></i>
//           </a>
//           <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-facebook"></i>
//           </a>
//           <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-instagram"></i>
//           </a>
//           <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-linkedin"></i>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;












// import React, { useState } from 'react';
// import '../styles/ContactUs.css';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Submitted:', formData);
//     // Add your form submission logic here (e.g., email sending API)
//   };

//   return (
//     <section className="contact-us">
//       {/* Left side with full background and centered text */}
//       <div className="contact-details">
//         <div className="details-content">
//           <h2>Get in Touch</h2>
//           <p>Have a question or want to work together? Drop us a message!</p>
//           <p><strong>Email:</strong> guthasahithchowdary@gmail.com</p>
//           <p><strong>Location:</strong> Madanapalle, Andhra Pradesh 517325</p>
//         </div>
//       </div>

//       {/* Right side with Contact Form and Social Media Icons */}
//       <div className="contact-form-container">
//         {/* Contact Form */}
//         <div className="contact-form">
//           <h3>Contact Form</h3>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               placeholder="Your Name"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="Your Email"
//               required
//             />
//             <input
//               type="text"
//               name="subject"
//               value={formData.subject}
//               onChange={handleInputChange}
//               placeholder="Subject"
//               required
//             />
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleInputChange}
//               placeholder="Your Message"
//               required
//             />
//             <button type="submit">Send Message</button>
//           </form>
//         </div>

//         {/* Social Media Icons */}
//         <div className="social-media-icons">
//           <div className="social-media-item github">
//             <i className="fab fa-github"></i>
//             <span>GitHub</span>
//           </div>
//           <div className="social-media-item facebook">
//             <i className="fab fa-facebook"></i>
//             <span>Facebook</span>
//           </div>
//           <div className="social-media-item instagram">
//             <i className="fab fa-instagram"></i>
//             <span>Instagram</span>
//           </div>
//           <div className="social-media-item linkedin">
//             <i className="fab fa-linkedin"></i>
//             <span>LinkedIn</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;












// import React from "react";
// import "../../styles/ContactUs.css";

// const ContactUs = () => {
//   return (
//     <section className="contact-section">
//      <div className="contact-left">
//   <div className="left-content">
//     <h2>Get in Touch</h2>
//     <p className="info-text">Have a question or want to work together? Drop us a message!</p>
//     <p className="info-text"><strong>Email:</strong> guthasahithchowdary@gmail.com</p>
//     <p className="info-text"><strong>Location:</strong> Madanapalle, Andhra Pradesh 517325</p>

//     <div className="social-icons">
//       <div className="icon-wrapper" data-tooltip="GitHub">
//         <a href="https://github.com" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-github"></i>
//         </a>
//       </div>
//       <div className="icon-wrapper" data-tooltip="Facebook">
//         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-facebook"></i>
//         </a>
//       </div>
//       <div className="icon-wrapper" data-tooltip="Instagram">
//         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-instagram"></i>
//         </a>
//       </div>
//       <div className="icon-wrapper" data-tooltip="LinkedIn">
//         <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-linkedin"></i>
//         </a>
//       </div>
//     </div>
//   </div>
// </div>


//       <div className="contact-right">
//         <form>
//           <input type="text" name="name" placeholder="Your Name" required />
//           <input type="email" name="email" placeholder="Your Email" required />
//           <input type="text" name="subject" placeholder="Subject" required />
//           <textarea name="message" placeholder="Your Message" required></textarea>
//           <button type="submit">Send Message</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;



















// import React from "react";
// import "../../styles/ContactUs.css";

// const ContactUs = () => {
//   return (
//     <section className="contact-section">
//       {/* Left Side */}
//       <div className="contact-left">
//         <div className="left-content">
//           <h2>Get in Touch</h2>
//           <p className="info-text">
//             Have a question or want to work together? Drop us a message!
//           </p>
//           <p className="info-text">
//             <strong>Email:</strong> guthasahithchowdary@gmail.com
//           </p>
//           <p className="info-text">
//             <strong>Location:</strong> Madanapalle, Andhra Pradesh 517325
//           </p>
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className="contact-right">
//         <form>
//           <input type="text" name="name" placeholder="Your Name" required />
//           <input type="email" name="email" placeholder="Your Email" required />
//           <input type="text" name="subject" placeholder="Subject" required />
//           <textarea name="message" placeholder="Your Message" required></textarea>
//           <button type="submit">Send Message</button>
//         </form>
//       </div>

//       {/* Social Media Bottom Section */}
//       <div className="social-footer">
//         <div className="icon-wrapper" data-tooltip="GitHub">
//           <a href="https://github.com" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-github"></i>
//           </a>
//         </div>
//         <div className="icon-wrapper" data-tooltip="Facebook">
//           <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-facebook"></i>
//           </a>
//         </div>
//         <div className="icon-wrapper" data-tooltip="Instagram">
//           <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-instagram"></i>
//           </a>
//         </div>
//         <div className="icon-wrapper" data-tooltip="LinkedIn">
//           <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-linkedin"></i>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;













import React from "react";
import "../../styles/ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-heading">Get in Touch</h2>

      {/* Bottom Content Wrapper */}
      <div className="contact-bottom">
        {/* Left Side - Personal Info */}
        <div className="contact-left">
          <div className="left-content">
            <p className="info-text">
              Have a question or want to work together? Drop us a message!
            </p>
            <p className="info-text">
              <strong>Email:</strong> rahimdudekula@gmail.com
            </p>
            <p className="info-text">
              <strong>Location:</strong> Markapur, Andhra Pradesh 523316.
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-right">
          <form>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* Social Footer */}
      <div className="social-footer">
        <div className="icon-wrapper" data-tooltip="GitHub">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="icon-wrapper" data-tooltip="Facebook">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
        <div className="icon-wrapper" data-tooltip="Instagram">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="icon-wrapper" data-tooltip="LinkedIn">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
