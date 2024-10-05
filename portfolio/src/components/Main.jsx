/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";

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
        <div className="main-header__logo-container">
          <div className="main-header__logo-img-cont">
            {/* If using import, replace src with {profileImg} */}
            <img
              src="/assets/profile.jpg" // Ensure the image is placed in public/assets/
              alt="Logo"
              className="main-header__logo-img"
            />
          </div>
          <h4 className="main-header__logo-text">
            Thananarin Saisornthananant
          </h4>
        </div>

        {/* Navigation Links */}
        <nav className="main-header__navigation">
          <ul className="main-header__navigation-links">
            <li className="main-header__navigation-link">
              <a href="#home-hero">Home</a>
            </li>
            <li className="main-header__navigation-link">
              <a href="#certificates">Certificate</a>
            </li>
            <li className="main-header__navigation-link">
              <a href="#about">About</a>
            </li>
            <li className="main-header__navigation-link">
              <a href="#projects">Projects</a>
            </li>
            <li className="main-header__navigation-link">
              <a
                href="https://drive.google.com/file/d/1nlJJ8Yaj-Vn1da7dwJVgnwn0g4WI3Vvt/view?usp=sharing"
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
                href="#certificates"
                onClick={(e) => handleMenuLinkClick(e, "certificates")}
              >
                Certificate
              </a>
            </li>
            <li>
              <a
                className="main-header__sm-menu-link main-header__sm-menu-link--3"
                href="#about"
                onClick={(e) => handleMenuLinkClick(e, "about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="main-header__sm-menu-link main-header__sm-menu-link--4"
                href="#projects"
                onClick={(e) => handleMenuLinkClick(e, "projects")}
              >
                Projects
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

      {/* About Section */}
      <section id="about" className="about main-section">
        <div className="main-container">
          <h2 className="heading-secondary projects__heading-secondary">
            <span className="heading-secondary__sm"> About 🏄‍♂️</span>
            <span className="heading-secondary__main">
              Here you will find more information about me, what I do, and list
              of my current skills in programming
            </span>
          </h2>
          <div className="main-section__content">
            <div className="about__info">
              <div className="about__main-info">
                <h3 className="heading-quaternary about__heading-quaternary">
                  My Story
                </h3>
                <p className="text-primary about__text-primary">
                  <span>
                    Hi, I'm Windsurf, an 18-year-old passionate junior
                    full-stack developer based in Chiang Mai. My journey into
                    software development began during the pandemic while I was
                    playing games and wanted to create one myself. I initially
                    pursued studies at NFE after COVID-19 and later completed my
                    General Educational Development (GED). Following this, I
                    took the IELTS test and enrolled at Singapore Institute of
                    Management in September 2023 to study a Bachelor of Computer
                    Science (Game and Mobile Development) from the University of
                    Wollongong. Unfortunately, I had to drop out in January 2024
                    due to financial difficulties.
                  </span>
                  <span>
                    In April 2024, I joined the Junior Software Development
                    Bootcamp Thailand (JSD7), where I discovered my love for
                    coding and immersed myself in learning the MERN stack from
                    scratch. This intensive program allowed me to hone my skills
                    in MongoDB, Express.js, React, and Node.js.
                  </span>
                  <span>
                    During the bootcamp, I tackled various projects that
                    strengthened my understanding of both front-end and back-end
                    development. One of my proudest achievements was developing
                    a dynamic e-commerce platform using React and integrating it
                    with a MongoDB database. This project taught me valuable
                    lessons in scalability, user experience design, and
                    effective data management.
                  </span>
                  <span>
                    I am passionate about leveraging technology to solve
                    real-world problems and improve user experiences. I thrive
                    in collaborative environments where creativity and
                    innovation are encouraged, and I enjoy exploring new
                    technologies to expand my skill set.
                  </span>
                  <span>
                    Looking ahead, I aspire to deepen my expertise in full-stack
                    development and contribute to impactful projects that make a
                    difference. I am eager to explore opportunities where I can
                    apply my skills in a dynamic team environment, pushing
                    boundaries and delivering exceptional solutions.
                  </span>
                </p>
              </div>
              <div className="about__skill-info">
                <h3 className="heading-quaternary about__heading-quaternary">
                  My Skills
                </h3>
                <ul className="about__skills">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects main-section">
        <div className="main-container">
          <h2 className="heading-secondary projects__heading-secondary">
            <span className="heading-secondary__sm"> Projects 🛠️</span>
            <span className="heading-secondary__main">
              Here you will find some of the personal and group projects that I
              created
            </span>
          </h2>
          <div className="main-section__content">
            <div className="projects__list">
              {/* Project 1 */}
              <div className="projects__list-item">
                <div className="projects__list-item-count">
                  <span className="projects__list-item-count-num">1</span>
                  <span className="projects__list-item-count-line"></span>
                  <span className="projects__list-item-count-end-dot"></span>
                </div>
                <div className="projects__list-item-details">
                  <div className="projects__list-item-img-cont">
                    <img
                      src="/assets/task-manager.png" // Ensure the image is in public/assets/
                      alt="Task Manager Project"
                      className="projects__list-item-img"
                    />
                  </div>
                  <h3 className="heading-tertiary projects__list-item-heading-tertiary">
                    Task Manager
                  </h3>
                  <p className="text-primary projects__list-item-text-primary">
                    <span>Note your task and see when it's due</span>
                  </p>
                  <div className="projects__buttons">
                    <button className="btn btn-theme projects__btn-theme">
                      <a
                        href="https://task-manager-web-app-mauve.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Link
                      </a>
                    </button>
                    <button className="btn btn-inv projects__btn-inv">
                      <a
                        href="https://github.com/WindsurfHUB/task-manager-web-app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code Link
                      </a>
                    </button>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="projects__list-item projects__list-item--inv">
                <div className="projects__list-item-details">
                  <div className="projects__list-item-img-cont">
                    <img
                      src="/assets/potion-cafe.png" // Ensure the image is in public/assets/
                      alt="Potion Cafe Project"
                      className="projects__list-item-img"
                    />
                  </div>
                  <h3 className="heading-tertiary projects__list-item-heading-tertiary">
                    Potion Cafe
                  </h3>
                  <p className="text-primary projects__list-item-text-primary">
                    <span>E-commerce coffee shop</span>
                  </p>
                  <div className="projects__buttons">
                    <button className="btn btn-theme projects__btn-theme">
                      <a
                        href="https://group1-frontend.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Link
                      </a>
                    </button>
                  </div>
                </div>
                <div className="projects__list-item-count">
                  <span className="projects__list-item-count-num">2</span>
                  <span className="projects__list-item-count-line"></span>
                  <span className="projects__list-item-count-end-dot"></span>
                </div>
              </div>

              {/* Add more projects as needed following the same structure */}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="projects main-section">
        <div className="main-container">
          <h2 className="heading-secondary projects__heading-secondary">
            <span className="heading-secondary__sm">
              {" "}
              Archive &amp; certificates 🏆
            </span>
            <span className="heading-secondary__main">
              Here you will find some of my certificate !
            </span>
          </h2>
          <div className="main-section__content">
            <div className="projects__list">
              <div className="projects__list-item">
                <div className="projects__list-item-count">
                  <span className="projects__list-item-count-num"> 1 </span>
                  <span className="projects__list-item-count-line"> </span>
                  <span className="projects__list-item-count-end-dot"> </span>
                </div>
                <div className="projects__list-item-details">
                  <div className="projects__list-item-img-cont">
                    <img
                      src="./assets/GED_certificate.jpg"
                      alt="Project Image"
                      className="projects__list-item-img"
                    />
                  </div>
                  <h3 className="heading-tertiary projects__list-item-heading-tertiary">
                    GED certificate
                  </h3>
                  {/* <hr class="projects__title-text-divider" /> */}
                  <p className="text-primary projects__list-item-text-primary">
                    <span>
                      Completion certificate of General Education
                      Development(GED)
                    </span>
                  </p>
                </div>
                <div className="projects__list-item-details">
                  <div className="projects__list-item-img-cont">
                    <img
                      src="./assets/Thananarin-Saisornthananant.png"
                      alt="Project Image"
                      className="projects__list-item-img"
                    />
                  </div>
                  <h3 className="heading-tertiary projects__list-item-heading-tertiary">
                    Junior Software Developer Certificate
                  </h3>
                  {/* <hr class="projects__title-text-divider" /> */}
                  <p className="text-primary projects__list-item-text-primary">
                    <span>
                      Completion certificate of junior software developer at
                      Generation Thailand
                    </span>
                  </p>
                </div>
                <div className="projects__list-item-details">
                  <div className="projects__list-item-img-cont">
                    <img
                      src="./assets/windsurf2024_s-profile-_-Codecademy_JS.png"
                      alt="Project Image"
                      className="projects__list-item-img"
                    />
                  </div>
                  <h3 className="heading-tertiary projects__list-item-heading-tertiary">
                    Codecademy JavaScript Course certificate
                  </h3>
                  {/* <hr class="projects__title-text-divider" /> */}
                  <p className="text-primary projects__list-item-text-primary">
                    <span>
                      Completion certificate of JavaScript course at Codecademy
                    </span>
                  </p>
                </div>
                <div className="projects__list-item-details">
                  <div className="projects__list-item-img-cont">
                    <img
                      src="./assets/windsurf2024_s-profile-_-Codecademy_SQL.png"
                      alt="Project Image"
                      className="projects__list-item-img"
                    />
                  </div>
                  <h3 className="heading-tertiary projects__list-item-heading-tertiary">
                    Codecademy SQL Course certificate
                  </h3>
                  {/* <hr class="projects__title-text-divider" /> */}
                  <p className="text-primary projects__list-item-text-primary">
                    <span>
                      Completion certificate of SQL Course at Codecademy
                    </span>
                  </p>
                </div>
                <div className="projects__list-item-details">
                  <div className="projects__list-item-img-cont">
                    <img
                      src="./assets/windsurf2024_s-profile-_-Codecademy_CSs.png"
                      alt="Project Image"
                      className="projects__list-item-img"
                    />
                  </div>
                  <h3 className="heading-tertiary projects__list-item-heading-tertiary">
                    Codecademy CSS Course certificate
                  </h3>
                  {/* <hr class="projects__title-text-divider" /> */}
                  <p className="text-primary projects__list-item-text-primary">
                    <span>
                      Completion certificate of CSS Course at Codecademy
                    </span>
                  </p>
                </div>
                <div className="projects__list-item-details">
                  <div className="projects__list-item-img-cont">
                    <img
                      src="./assets/certificate_51610_1260087-1260087-17234003144403.jpg"
                      alt="Project Image"
                      className="projects__list-item-img"
                    />
                  </div>
                  <h3 className="heading-tertiary projects__list-item-heading-tertiary">
                    Chula Mooc certificate
                  </h3>
                  {/* <hr class="projects__title-text-divider" /> */}
                  <p className="text-primary projects__list-item-text-primary">
                    <span>
                      Completion certificate of Learn Coding Basic with
                      Block-coding at CHULA MOOC
                    </span>
                  </p>
                </div>
                <div className="projects__list-item-details">
                  <div className="projects__list-item-img-cont">
                    <img
                      src="./assets//certificate_56361_1260087-1260087-17233055177081.jpg"
                      alt="Project Image"
                      className="projects__list-item-img"
                    />
                  </div>
                  <h3 className="heading-tertiary projects__list-item-heading-tertiary">
                    Chula Mooc certificate
                  </h3>
                  {/* <hr class="projects__title-text-divider" /> */}
                  <p className="text-primary projects__list-item-text-primary">
                    <span>
                      Completion certificate of Computational Thinking and My
                      first code at CHULA MOOC
                    </span>
                  </p>
                </div>
                <div className="projects__list-item-details">
                  <div className="projects__list-item-img-cont">
                    <img
                      src="../assets/windsurf2024_s-profile-_-Codecademy_HTML.png"
                      alt="Project Image"
                      className="projects__list-item-img"
                    />
                  </div>
                  <h3 className="heading-tertiary projects__list-item-heading-tertiary">
                    Codecademy HTML Course certificate
                  </h3>
                  {/* <hr class="projects__title-text-divider" /> */}
                  <p className="text-primary projects__list-item-text-primary">
                    <span>
                      Completion certificate of HTML Course at Codecademy
                    </span>
                  </p>
                </div>
              </div>
              <div className="projects__list-item projects__list-item--inv">
                <div className="projects__list-item-count">
                  <span className="projects__list-item-count-num"> 2 </span>
                  <span className="projects__list-item-count-line"> </span>
                  <span className="projects__list-item-count-end-dot"> </span>
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
              <li className="main-footer__link">
                <a href="#home-hero">Home</a>
              </li>
              <li className="main-footer__link">
                <a href="#about">About</a>
              </li>
              <li className="main-footer__link">
                <a href="#projects">Projects</a>
              </li>
            </ul>
            <div className="main-footer__mid-line"></div>
            <div className="main-footer__socials">
              <a
                href="https://github.com/WindsurfHUB/"
                className="main-footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png"
                  alt="GitHub"
                  className="main-footer__social-link-icon"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/thananarin-s-588446306/"
                className="main-footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png"
                  alt="LinkedIn"
                  className="main-footer__social-link-icon"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="main-footer__bottom">
          <div className="main-container">
            <p className="main-footer__bottom-txt">
              <a
                target="_blank"
                href="https://github.com/rammcodes/wowfolio"
                rel="noopener noreferrer"
              >
                WowFolio
              </a>{" "}
              Open-Source Template. Made by{" "}
              <a
                target="_blank"
                href="https://rammaheshwari.com"
                rel="noopener noreferrer"
              >
                Ram Maheshwari
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Main;
