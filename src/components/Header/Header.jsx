// src/components/Header.js
import './Header.css'; // Import the CSS file

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="navLinks">
        <h1 className='team-name'>Tech Gaints</h1>
        <nav>
          <ul className="navList">
            <li><button onClick={() => scrollToSection('about')} className="button">About</button></li>
            <li><button onClick={() => scrollToSection('team')} className="button">Team</button></li>
            <li><button onClick={() => scrollToSection('project')} className="button">Project</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="button">Contact</button></li>
            {/* New Get In Touch Button */}
            <li><button onClick={() => scrollToSection('contact')} className=" get-in-touch">Get In Touch</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
