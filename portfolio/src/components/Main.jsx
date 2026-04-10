/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Main() {
  // State for Small Screen Menu
  const [isSmMenuActive, setIsSmMenuActive] = useState(false);

  // State for Text Changing Functionality
  const greetings = [
    "Hello 👋",
    "Hola 👋",
    "你好 👋",
    "Bonjour 👋",
    "Olá 👋",
    "こんにちは 👋",
    "안녕하세요 👋",
    "Guten Tag 👋",
    "Ciao 👋",
    "สวัสดี 👋",
  ];

  const texts = [
    `Welcome, I'm Windsurf! MERN-stack Full-stack Developer`,
    `¡Bienvenido, soy Windsurf! Desarrollador Full-stack MERN`,
    `欢迎，我是 Windsurf! MERN 全栈开发者`,
    `Bienvenue, je suis Windsurf! Développeur Full-stack MERN`,
    `Bem-vindo, eu sou Windsurf! Desenvolvedor Full-stack MERN`,
    `ようこそ、私は Windsurf です！ MERNフルスタック開発者`,
    `환영합니다, 저는 Windsurf입니다! MERN 풀스택 개발자`,
    `Willkommen, ich bin Windsurf! MERN-Stack Full-Stack-Entwickler`,
    `Benvenuto, sono Windsurf! Sviluppatore Full-stack MERN`,
    `ยินดีต้อนรับ, ฉันคือ Windsurf! นักพัฒนา Full-stack MERN`,
  ];

  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Effect for Changing Texts
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreetingIndex(
        (prevIndex) => (prevIndex + 1) % greetings.length
      );
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [greetings.length, texts.length]);

  // Handlers for Small Screen Menu
  const handleMenuToggle = () => {
    setIsSmMenuActive(true);
  };

  const handleMenuClose = () => {
    setIsSmMenuActive(false);
  };

  const handleMenuLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsSmMenuActive(false);

    // Delay to allow menu closing animation
    setTimeout(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 1200); // Matches the CSS transition duration
  };

  return (
    <div>
      {/* Header Section */}
      <header className="main-header">
        {/* Logo Container */}
        <Link to="/profile" className="main-header__logo-container">
          <div className="main-header__logo-img-cont">
            <img
              src="/profile.jpg"
              alt="Logo"
              className="main-header__logo-img"
            />
          </div>
          <h4 className="main-header__logo-text">Thananarin S.</h4>
        </Link>

        {/* Navigation Links */}
        <nav className="main-header__navigation">
          <ul className="main-header__navigation-links">
            <li className="main-header__navigation-link">
              <a href="#home-hero">Home</a>
            </li>
            <li className="main-header__navigation-link">
              <a href="#experience">Experience</a>
            </li>
            <li className="main-header__navigation-link">
              <a href="#self-development">Self-Development</a>
            </li>
            <li className="main-header__navigation-link">
              <a href="#awards">Awards</a>
            </li>
            <li className="main-header__navigation-link">
              <a href="#leadership">Leadership</a>
            </li>
            <li className="main-header__navigation-link">
              <a
                href="https://drive.google.com/file/d/1UlrnNcTbKCeXGnqxMgHYx_5bUaTBSyzY/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        {/* Small Screen Menu Button */}
        <div
          className="main-header__sm-scr-nav-btn"
          onClick={handleMenuToggle}
          aria-label="Open Menu"
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleMenuToggle();
          }}
        >
          <div className="main-header__sm-scr-nav-btn-line" />
          <div className="main-header__sm-scr-nav-btn-line" />
          <div className="main-header__sm-scr-nav-btn-line" />
        </div>

        {/* Small Screen Menu */}
        <div
          className={`main-header__sm-menu ${
            isSmMenuActive ? "main-header__sm-menu--active" : ""
          }`}
        >
          <div
            className="main-header__sm-menu-close"
            onClick={handleMenuClose}
            aria-label="Close Menu"
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleMenuClose();
            }}
          >
            &times;
          </div>
          <ul className="main-header__sm-menu-links">
            <li>
              <a
                className="main-header__sm-menu-link main-header__sm-menu-link--1"
                href="#home-hero"
                onClick={(e) => handleMenuLinkClick(e, "home-hero")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="main-header__sm-menu-link main-header__sm-menu-link--2"
                href="#experience"
                onClick={(e) => handleMenuLinkClick(e, "experience")}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className="main-header__sm-menu-link main-header__sm-menu-link--3"
                href="#self-development"
                onClick={(e) => handleMenuLinkClick(e, "self-development")}
              >
                Self-Development
              </a>
            </li>
            <li>
              <a
                className="main-header__sm-menu-link main-header__sm-menu-link--4"
                href="#awards"
                onClick={(e) => handleMenuLinkClick(e, "awards")}
              >
                Awards
              </a>
            </li>
            <li>
              <a
                className="main-header__sm-menu-link main-header__sm-menu-link--4"
                href="#leadership"
                onClick={(e) => handleMenuLinkClick(e, "leadership")}
              >
                Leadership
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* Home Hero Section */}
      <section id="home-hero" className="home-hero">
        <div className="home-hero__content">
          <div className="home-hero__info">
            <h1 className="heading-primary home-hero__heading-primary">
              <span id="changing-greeting" className="heading-primary__sm">
                {greetings[currentGreetingIndex]}
              </span>
              <span className="heading-primary__main">
                <span id="changing-text">{texts[currentTextIndex]}</span>
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="projects main-section">
        <div className="main-container">
          <h2 className="heading-secondary projects__heading-secondary">
            <span className="heading-secondary__sm"> 1. Professional Experience 🛠️</span>
            <span className="heading-secondary__main">
              Showcasing my technical projects across various domains.
            </span>
          </h2>

          <div className="main-section__content">
            {/* 1.1 Production Projects */}
            <h3 className="heading-quaternary" style={{ marginBottom: "2rem", color: "rgba(var(--themeColor), 1)", fontWeight: "bold" }}>
              1.1 Production Projects
            </h3>
            <p className="text-primary mb-12">Projects developed for real organizations or clients.</p>
            <div className="projects__list">
              <div className="text-primary italic">No production projects to display yet. Eager to contribute to real-world impact!</div>
            </div>

            {/* 1.2 Competition Projects */}
            <h3 className="heading-quaternary" style={{ marginTop: "6rem", marginBottom: "2rem", color: "rgba(var(--themeColor), 1)", fontWeight: "bold" }}>
              1.2 Competition Projects
            </h3>
            <p className="text-primary mb-12">Projects submitted to hackathons and competitions.</p>
            <div className="projects__list">
              <div className="text-primary italic">Coming soon! Preparing for upcoming hackathons.</div>
            </div>

            {/* 1.3 Academic Projects */}
            <h3 className="heading-quaternary" style={{ marginTop: "6rem", marginBottom: "2rem", color: "rgba(var(--themeColor), 1)", fontWeight: "bold" }}>
              1.3 Academic Projects
            </h3>
            <p className="text-primary mb-12">Coursework and bootcamp projects.</p>
            <div className="projects__list">
              <div className="projects__list-item">
                <div className="projects__list-item-details">
                  <div className="projects__list-item-img-cont">
                    <img
                      src="/potion-cafe.png"
                      alt="Potion Cafe Project"
                      className="projects__list-item-img"
                    />
                  </div>
                  <h3 className="heading-tertiary projects__list-item-heading-tertiary">
                    Potion Cafe (JSD7 Bootcamp)
                  </h3>
                  <div className="text-primary projects__list-item-text-primary">
                    <p><strong>Role:</strong> Full-stack Developer (Frontend Focus)</p>
                    <p><strong>Description:</strong> 
                      <br/>- <strong>Target:</strong> Users seeking a seamless online cafe ordering experience.
                      <br/>- <strong>Problem:</strong> Fragmented ordering processes in small cafe environments.
                    </p>
                    <p><strong>Lessons:</strong> Mastered team collaboration using Git and gained critical insights into NoSQL database architecture and state management.</p>
                  </div>
                  <div className="projects__buttons">
                    <button className="btn btn-theme projects__btn-theme">
                      <a href="https://group1-frontend.vercel.app" target="_blank" rel="noopener noreferrer">Live Link</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 1.4 Personal Projects */}
            <h3 className="heading-quaternary" style={{ marginTop: "6rem", marginBottom: "2rem", color: "rgba(var(--themeColor), 1)", fontWeight: "bold" }}>
              1.4 Personal Projects
            </h3>
            <p className="text-primary mb-12">Independently initiated projects.</p>
            <div className="projects__list">
              <div className="projects__list-item">
                <div className="projects__list-item-details">
                  <div className="projects__list-item-img-cont">
                    <img
                      src="/task-manager.png"
                      alt="Task Manager Project"
                      className="projects__list-item-img"
                    />
                  </div>
                  <h3 className="heading-tertiary projects__list-item-heading-tertiary">
                    Task Manager
                  </h3>
                  <div className="text-primary projects__list-item-text-primary">
                    <p><strong>Role:</strong> Sole Developer</p>
                    <p><strong>Description:</strong> 
                      <br/>- <strong>Target:</strong> Individuals looking for simple and effective productivity tools.
                      <br/>- <strong>Problem:</strong> Managing daily tasks and deadlines without complex overhead.
                    </p>
                    <p><strong>Lessons:</strong> Enhanced skills in UI/UX design and local state management in React.</p>
                  </div>
                  <div className="projects__buttons">
                    <button className="btn btn-theme projects__btn-theme">
                      <a href="https://task-manager-web-app-mauve.vercel.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
                    </button>
                    <button className="btn btn-inv projects__btn-inv">
                      <a href="https://github.com/WindsurfHUB/task-manager-web-app" target="_blank" rel="noopener noreferrer">Code Link</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 1.5 Open Source / Contributions */}
            <h3 className="heading-quaternary" style={{ marginTop: "6rem", marginBottom: "2rem", color: "rgba(var(--themeColor), 1)", fontWeight: "bold" }}>
              1.5 Open Source / Contributions
            </h3>
            <p className="text-primary mb-12">Bug fixes and library contributions on GitHub.</p>
            <div className="projects__list">
              <div className="text-primary italic">Active contributor in the making. Exploring open-source projects!</div>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Development Section */}
      <section id="self-development" className="about main-section">
        <div className="main-container">
          <h2 className="heading-secondary projects__heading-secondary">
            <span className="heading-secondary__sm"> 2. Self-Development 📚</span>
            <span className="heading-secondary__main">
              Continuous learning through certifications and specialized courses.
            </span>
          </h2>
          
          <div className="main-section__content">
            <h3 className="heading-quaternary mb-10">Technical Skills & Tools</h3>
            <ul className="about__skills mb-20">
              <li className="about__skill">HTML</li>
              <li className="about__skill">CSS</li>
              <li className="about__skill">JavaScript</li>
              <li className="about__skill">React.js</li>
              <li className="about__skill">Node.js</li>
              <li className="about__skill">Git</li>
              <li className="about__skill">VSCode</li>
              <li className="about__skill">MongoDB</li>
              <li className="about__skill">Express.js</li>
              <li className="about__skill">GitHub</li>
            </ul>

            <h3 className="heading-quaternary mb-10">Certifications & Online Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
              {/* JSD7 */}
              <div className="projects__list-item-details" style={{ margin: 0 }}>
                <div className="projects__list-item-img-cont">
                  <img src="/Thananarin-Saisornthananant.png" alt="JSD7" className="projects__list-item-img" />
                </div>
                <h3 className="heading-tertiary projects__list-item-heading-tertiary">Junior Software Developer</h3>
                <p className="text-primary projects__list-item-text-primary">
                  <span><strong>Institution:</strong> Generation Thailand JSD7 Bootcamp</span>
                </p>
              </div>

              {/* GED */}
              <div className="projects__list-item-details" style={{ margin: 0 }}>
                <div className="projects__list-item-img-cont">
                  <img src="/GED_certificate.jpg" alt="GED" className="projects__list-item-img" />
                </div>
                <h3 className="heading-tertiary projects__list-item-heading-tertiary">GED Certificate</h3>
                <p className="text-primary projects__list-item-text-primary">
                  <span><strong>Institution:</strong> General Education Development (High School Equivalency)</span>
                </p>
              </div>

              {/* JS Codecademy */}
              <div className="projects__list-item-details" style={{ margin: 0 }}>
                <div className="projects__list-item-img-cont">
                  <img src="/windsurf2024_s-profile-_-Codecademy_JS.png" alt="JS" className="projects__list-item-img" />
                </div>
                <h3 className="heading-tertiary projects__list-item-heading-tertiary">JavaScript Course</h3>
                <p className="text-primary projects__list-item-text-primary">
                  <span><strong>Institution:</strong> Codecademy</span>
                </p>
              </div>

              {/* SQL Codecademy */}
              <div className="projects__list-item-details" style={{ margin: 0 }}>
                <div className="projects__list-item-img-cont">
                  <img src="/windsurf2024_s-profile-_-Codecademy_SQL.png" alt="SQL" className="projects__list-item-img" />
                </div>
                <h3 className="heading-tertiary projects__list-item-heading-tertiary">SQL & Database</h3>
                <p className="text-primary projects__list-item-text-primary">
                  <span><strong>Institution:</strong> Codecademy</span>
                </p>
              </div>

              {/* CSS Codecademy */}
              <div className="projects__list-item-details" style={{ margin: 0 }}>
                <div className="projects__list-item-img-cont">
                  <img src="/windsurf2024_s-profile-_-Codecademy_CSs.png" alt="CSS" className="projects__list-item-img" />
                </div>
                <h3 className="heading-tertiary projects__list-item-heading-tertiary">Advanced CSS</h3>
                <p className="text-primary projects__list-item-text-primary">
                  <span><strong>Institution:</strong> Codecademy</span>
                </p>
              </div>

              {/* HTML Codecademy */}
              <div className="projects__list-item-details" style={{ margin: 0 }}>
                <div className="projects__list-item-img-cont">
                  <img src="./windsurf2024_s-profile-_-Codecademy_HTML.png" alt="HTML" className="projects__list-item-img" />
                </div>
                <h3 className="heading-tertiary projects__list-item-heading-tertiary">HTML Fundamentals</h3>
                <p className="text-primary projects__list-item-text-primary">
                  <span><strong>Institution:</strong> Codecademy</span>
                </p>
              </div>

              {/* Chula MOOC 1 */}
              <div className="projects__list-item-details" style={{ margin: 0 }}>
                <div className="projects__list-item-img-cont">
                  <img src="/certificate_51610_1260087-1260087-17234003144403.jpg" alt="Chula MOOC" className="projects__list-item-img" />
                </div>
                <h3 className="heading-tertiary projects__list-item-heading-tertiary">Block-coding Basics</h3>
                <p className="text-primary projects__list-item-text-primary">
                  <span><strong>Institution:</strong> Chulalongkorn University (MOOC)</span>
                </p>
              </div>

              {/* Chula MOOC 2 */}
              <div className="projects__list-item-details" style={{ margin: 0 }}>
                <div className="projects__list-item-img-cont">
                  <img src="/certificate_56361_1260087-1260087-17233055177081.jpg" alt="Chula MOOC" className="projects__list-item-img" />
                </div>
                <h3 className="heading-tertiary projects__list-item-heading-tertiary">Computational Thinking</h3>
                <p className="text-primary projects__list-item-text-primary">
                  <span><strong>Institution:</strong> Chulalongkorn University (MOOC)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Achievements Section */}
      <section id="awards" className="projects main-section bg-white">
        <div className="main-container">
          <h2 className="heading-secondary projects__heading-secondary">
            <span className="heading-secondary__sm"> 3. Awards & Achievements 🏆</span>
            <span className="heading-secondary__main">
              Recognitions and honors received for academic and professional excellence.
            </span>
          </h2>
          <div className="main-section__content">
            <div className="text-primary italic">Record of achievements is being updated. Stay tuned!</div>
          </div>
        </div>
      </section>

      {/* Leadership & Volunteer Section */}
      <section id="leadership" className="about main-section">
        <div className="main-container">
          <h2 className="heading-secondary projects__heading-secondary">
            <span className="heading-secondary__sm"> 4. Leadership & Volunteer 🤝</span>
            <span className="heading-secondary__main">
              Roles and activities beyond coding that shaped my soft skills.
            </span>
          </h2>
          <div className="main-section__content">
            <div className="about__info">
              <div className="about__main-info">
                <h3 className="heading-quaternary mb-6">Roles & Activities</h3>
                <div className="text-primary mb-10">
                  <p>Participating in collaborative environments and contributing to the community.</p>
                </div>
                
                <h3 className="heading-quaternary mb-6">Soft Skills</h3>
                <ul className="about__skills">
                  <li className="about__skill">Teamwork</li>
                  <li className="about__skill">Communication</li>
                  <li className="about__skill">Problem Solving</li>
                  <li className="about__skill">Adaptability</li>
                  <li className="about__skill">Time Management</li>
                </ul>
              </div>
              <div className="about__skill-info flex flex-col justify-center">
                <p className="text-primary mb-10">
                  Want to see my complete personal journey and growth?
                </p>
                <div className="center">
                  <Link to="/Chronicles">
                    <button className="learn-more">
                      <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                      </span>
                      <span className="button-text">My Chronicles</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="main-footer">
        <div className="main-footer__upper">
          <div className="main-container">
            <ul className="main-footer__links">
              <li className="main-footer__link"><a href="#home-hero">Home</a></li>
              <li className="main-footer__link"><a href="#experience">Experience</a></li>
              <li className="main-footer__link"><a href="#self-development">Self-Development</a></li>
            </ul>
            <div className="main-footer__mid-line"></div>
            <div className="main-footer__socials">
              <a href="https://github.com/WindsurfHUB/" className="main-footer__social-link" target="_blank" rel="noopener noreferrer">
                <img src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png" alt="GitHub" className="main-footer__social-link-icon" />
              </a>
              <a href="https://www.linkedin.com/in/thananarin-s-588446306/" className="main-footer__social-link" target="_blank" rel="noopener noreferrer">
                <img src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png" alt="LinkedIn" className="main-footer__social-link-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="main-footer__bottom">
          <div className="main-container">
            <p className="main-footer__bottom-txt">
              Template by <a target="_blank" href="https://rammaheshwari.com" rel="noopener noreferrer">Ram Maheshwari</a>
            </p>
          </div>
        </div>
      </footer>
    </div>

  );
}

export default Main;
