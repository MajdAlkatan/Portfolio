import "./HeroSection.css";
import astro1 from "../../assets/astro1.png";
import earth1 from "../../assets/earth1.png";
import circle from "../../assets/circles.png";
import line from "../../assets/lines1.png";

function HeroSection() {
  const buttonscrollToSection = (sectionid) => {
   const section = document.getElementById(sectionid);
   if (section){
    section.scrollIntoView({behavior: 'smooth'})
   }
  };
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">We Build Amazing Digital Experiences</h1>
        <h2 className="hero-subtitle">
          Our team of talented professionals creates innovative solutions that drive
        </h2>
        <p className="hero-text">Our motto is to make the effort</p>
        <button onClick={()=> buttonscrollToSection('project')} className="hero-button">Our Work</button> {/* New Button */}
        <button onClick={()=> buttonscrollToSection('team')} className="hero-button">Meet the Team</button> {/* New Button */}
      </div>
      <img src={earth1} alt="Earth" className="hero-earth" />
      <img src={line} alt="lines" className="hero-lines" />
      <img src={astro1} alt="Astronaut" className="hero-astronaut" />
      <img className="hero-circles" src={circle} alt="" />
    </section>
  );
}

export default HeroSection;
