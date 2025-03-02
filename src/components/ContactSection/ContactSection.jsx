import "./ContactSection.css";
import earth from "../../assets/earth1.png";
import line from "../../assets/lines2.png";
import astro from "../../assets/astronun2.png";
import { FaEnvelope, FaPhone, FaHome } from "react-icons/fa";

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <img src={earth} alt="Earth" className="earth" />
      <div className="contact-content">
        <ul className="contact-list">
          <li>
            <FaEnvelope className="contact-icon" />
            majdalkatan989@gmail.com
          </li>
          <li>
            <FaPhone className="contact-icon" />
            +963 988 365 145
          </li>
          <li>
            <FaHome className="contact-icon" />
            Jarama-al baldiah street
          </li>
        </ul>
      </div>
      <div className="contact-form-container">
        <h2>Get in Touch</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <img src={line} alt="Motion Lines" className="lines-contact" />
      <img src={astro} alt="Astronaut" className="astro-contact" />
    </section>
  );
}

export default ContactSection;
