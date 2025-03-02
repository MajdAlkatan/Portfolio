import "./AboutSection.css";
import lines from "../../assets/skillsline.png";
import plants from "../../assets/smallearth.png"; // The image containing all planets

function AboutSection() {
  return (
    <section id="about">
      <div className="about-section">
      <div className="about-content">
          <h1 className="about-title">About Our Team</h1>
          <h2 className="about-subtitle">
            We are a diverse group of professionals passionate about creating exceptional digital experiences. Our team combines technical expertise with creative thinking to deliver solutions that exceed expectations.
          </h2>

          {/* Skills List with Planet Sprites */}
          <ul className="about-skills">
            <img src={plants} alt=""  className="about-plant"/>
            <div className="aboutli">
            <li>
              <span className="skill-icon planet1"></span>
              Innovative problem solvers
            </li>
            <li>
              <span className="skill-icon planet2"></span>
              Collaborative approach
            </li>
            <li>
              <span className="skill-icon planet3"></span>
              Client-focused solutions
            </li>
            <li>
              <span className="skill-icon planet4"></span>
              Cutting-edge technology
            </li>
            <li>
              <span className="skill-icon planet5"></span>
              Team Management
            </li>
            </div>
          </ul>
        </div>
        <img src={lines} alt="Decorative lines" className="about-img" />

       
      </div>
    </section>
  );
}

export default AboutSection;
