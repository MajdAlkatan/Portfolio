import { useState, useEffect } from "react";
import "./TeamSection.css";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
// import person from "../../assets/person1.png";
// import person2 from "../../assets/person2.png";
// import person3 from "../../assets/person3.png";
// import person4 from "../../assets/person4.png";
import car from "../../assets/spacecarskills.png";
import circle from "../../assets/circles.png";
import pdf1 from "../../assets/Majd-Alkatan-ReactJs-Developer.pdf";
import pdf2 from "../../assets/mohamad-ammis-flutter-developer.pdf"
import pdf3 from "../../assets/Karam_Almadani_laravel.pdf"
import pdf4 from "../../assets/Engineering Resume in Black and White Simple Lined Style.pdf"
const teamMembers = [
  {
    name: "Majd Alkatan",
    role: "Front-End Web Developer using ReactJS + Vite",
    image: "person",
    experience: "3+ years of experience in front-end development with React and modern web technologies.",
    achievements: "Built several scalable web applications, contributed to open-source projects.",
    github: "https://github.com/majdalkatan",
    linkedin: "https://linkedin.com/in/majdalkatan",
    cv: pdf1
  },
  {
    name: "Mohamad Amis",
    role: "Flutter Front-End Developer",
    image: "person2",
    experience: "2 years of experience in building cross-platform mobile apps using Flutter.",
    achievements: "Developed and deployed multiple mobile apps across Android and iOS.",
    github: "https://github.com/Mohamad-Ammis",
    linkedin: "https://linkedin.com/in/mohamadamis",
    cv: pdf2
  },
  {
    name: "Karam Almadani",
    role: "Junior Laravel Developer (Back-End)",
    image: "person3",
    experience: "1 year of experience specializing in back-end development using Laravel.",
    achievements: "Implemented APIs and optimized database queries for high performance.",
    github: "https://github.com/KaramMad",
    linkedin: "https://linkedin.com/in/karamalmadani",
    cv: pdf3
  },
  {
    name: "Qusai Albonnai",
    role: "Back-End Developer",
    image: "person4",
    experience: "2 years of experience in server-side development and database management.",
    achievements: "Contributed to large-scale back-end systems and improved system reliability.",
    github: "https://github.com/QusaiAlbonni",
    linkedin: "https://linkedin.com/in/qusaialbonnai",
    cv: pdf4
  },
];

function TeamSection() {
  const [currentMember, setCurrentMember] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setCurrentMember((prev) => (prev + 1) % teamMembers.length);
        setIsExiting(false);
      }, 1500);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const { name, role, image, experience, achievements, github, linkedin, cv } = teamMembers[currentMember];

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section id="team" className="team-section">
      <div className={`team-image-wrapper ${isExiting ? "fade-out" : "fade-in"}`}>
        <img src={image} alt="" className="team-image" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      </div>
      <div className={`team-content ${isExiting ? "fade-out" : "fade-in"}`}>
        <h1 className="team-title">{name}</h1>
        <h2 className="team-subtitle">{role}</h2>
        <div className="team-info">
          <div className="experience">
            <h3 className="section-title">YEAR OF EXPERIENCE</h3>
            <p className="section-text">{experience}</p>
          </div>
          <div className="achievements">
            <h3 className="section-title"> ACHIEVEMENTS</h3>
            <p className="section-text">{achievements}</p>
          </div>
        </div>
        <div className="team-links">
          <a href={github} target="_blank" rel="noopener noreferrer" className="team-icon github" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <FaGithub />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="team-icon linkedin" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <FaLinkedin />
          </a>
          <a href={cv} download className="download-cv-btn" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <FaDownload /> Download CV
          </a>
        </div>
      </div>
      <img className="team-circles" src={circle} alt="" />
      <img className="car" src={car} alt="" />
    </section>
  );
}

export default TeamSection;
