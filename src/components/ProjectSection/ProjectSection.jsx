import "./ProjectSection.css";
import laptop from "../../assets/laptop.png";
import { useState, useEffect } from "react";

function ProjectSection() {
    const Projects = [
        {
            title: "Project 1: E-Commerce Website",
            subtitle: "Full-stack E-Commerce Platform",
            image: "",
            desc: "A fully functional e-commerce website built with React for the front-end and Node.js for the back-end.",
            tools: "React, Node.js, Express, MongoDB, Stripe API",
            view: "#",
        },
        {
            title: "Project 2: Portfolio Website",
            subtitle: "Personal Portfolio Website",
            image: "",
            desc: "A personal portfolio website showcasing my work and skills. Built with React and hosted on Netlify.",
            tools: "React, CSS, Netlify",
            view: "#",
        },
        {
            title: "Project 3: Mobile Expense Tracker",
            subtitle: "Mobile App for Expense Management",
            image: "",
            desc: "A mobile app built using Flutter to help users track their expenses and manage budgets.",
            tools: "Flutter, Dart, Firebase",
            view: "#",
        },
        {
            title: "Project 4: Blogging Platform",
            subtitle: "Platform for Writing and Sharing Blogs",
            image: "",
            desc: "A blogging platform built with Laravel and Vue.js for managing and publishing blogs.",
            tools: "Laravel, Vue.js, MySQL",
            view: "#",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [animationClass, setAnimationClass] = useState("");

    const goToNextProject = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setAnimationClass("fades-out");
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Projects.length);
            setAnimationClass("fades-in");
        }, 1000);
    };

    const goToPreviousProject = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setAnimationClass("fades-out");
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + Projects.length) % Projects.length);
            setAnimationClass("fades-in");
        }, 1000);
    };

    useEffect(() => {
        if (animationClass === "fades-in") {
            setTimeout(() => setIsTransitioning(false), 300);
        }
    }, [animationClass]);

    return (
        <section id="project">
            <div className="project-section">
                <div className={`project-content ${animationClass}`}>
                    <div className="project-info">
                        <h2 className="project-title">{Projects[currentIndex].title}</h2>
                        <p className="project-subtitle">{Projects[currentIndex].subtitle}</p>
                        <p className="project-desc">{Projects[currentIndex].desc}</p>
                        <p className="project-tools">{Projects[currentIndex].tools}</p>
                        <a 
                            href={Projects[currentIndex].view} 
                            className="view-project-btn" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            View Project ⚡
                        </a>
                    </div>
                    <div className="project-image">
                        <img
                            src={Projects[currentIndex].image || laptop}
                            alt={Projects[currentIndex].title}
                            className="project-img"
                        />
                    </div>
                </div>
                <div className="project-navigation">
                    <button 
                        className="nav-arrow prev" 
                        onClick={goToPreviousProject}
                        disabled={isTransitioning}
                    >
                        &#8592;
                    </button>
                    <button 
                        className="nav-arrow next" 
                        onClick={goToNextProject}
                        disabled={isTransitioning}
                    >
                        &#8594;
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;
