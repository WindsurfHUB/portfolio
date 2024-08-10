const smMenuBtn = document.querySelector(".main-header__sm-scr-nav-btn");
const smMenu = document.querySelector(".main-header__sm-menu");
const smMenuCloseBtn = document.querySelector(".main-header__sm-menu-close");

const smMenuLinks = document.querySelectorAll(".main-header__sm-menu-link");
const smMenuLink1 = document.querySelector(".main-header__sm-menu-link--1");
const smMenuLink2 = document.querySelector(".main-header__sm-menu-link--2");
const smMenuLink3 = document.querySelector(".main-header__sm-menu-link--3");
const smMenuLink4 = document.querySelector(".main-header__sm-menu-link--4");

smMenuBtn.addEventListener("click", () => {
  smMenu.style.transitionDelay = "0s";
  smMenu.classList.add("main-header__sm-menu--active");

  smMenuLink1.style.transitionDelay = ".5s";
  smMenuLink1.style.transform = "translateY(0)";
  smMenuLink1.style.opacity = "1";

  smMenuLink2.style.transitionDelay = ".8s";
  smMenuLink2.style.transform = "translateY(0)";
  smMenuLink2.style.opacity = "1";

  smMenuLink3.style.transitionDelay = "1.1s";
  smMenuLink3.style.transform = "translateY(0)";
  smMenuLink3.style.opacity = "1";

  smMenuLink4.style.transitionDelay = "1.4s";
  smMenuLink4.style.transform = "translateY(0)";
  smMenuLink4.style.opacity = "1";
});

smMenuLinks.forEach((ele) => {
  ele.addEventListener("click", () => {
    smMenuLink4.style.transitionDelay = "0s";
    smMenuLink4.style.transform = "translateY(50px)";
    smMenuLink4.style.opacity = "0";

    smMenuLink3.style.transitionDelay = ".3s";
    smMenuLink3.style.transform = "translateY(50px)";
    smMenuLink3.style.opacity = "0";

    smMenuLink2.style.transitionDelay = ".6s";
    smMenuLink2.style.transform = "translateY(50px)";
    smMenuLink2.style.opacity = "0";

    smMenuLink1.style.transitionDelay = ".9s";
    smMenuLink1.style.transform = "translateY(50px)";
    smMenuLink1.style.opacity = "0";

    smMenu.style.transitionDelay = "1.2s";
    smMenu.classList.remove("main-header__sm-menu--active");

    setTimeout(() => {
      document.getElementById(ele.name).scrollIntoView();
    }, 1300);
  });
});

smMenuCloseBtn.addEventListener("click", () => {
  smMenuLink4.style.transitionDelay = "0s";
  smMenuLink4.style.transform = "translateY(50px)";
  smMenuLink4.style.opacity = "0";

  smMenuLink3.style.transitionDelay = ".3s";
  smMenuLink3.style.transform = "translateY(50px)";
  smMenuLink3.style.opacity = "0";

  smMenuLink2.style.transitionDelay = ".6s";
  smMenuLink2.style.transform = "translateY(50px)";
  smMenuLink2.style.opacity = "0";

  smMenuLink1.style.transitionDelay = ".9s";
  smMenuLink1.style.transform = "translateY(50px)";
  smMenuLink1.style.opacity = "0";

  smMenu.style.transitionDelay = "1.2s";
  smMenu.classList.remove("main-header__sm-menu--active");
});

// Text changing functionality
const greetings = [
  "Hello 👋", // English
  "Hola 👋", // Spanish
  "你好 👋", // Mandarin
  "Bonjour 👋", // French
  "Olá 👋", // Portuguese
  "こんにちは 👋", // Japanese
  "안녕하세요 👋", // Korean
  "Guten Tag 👋", // German
  "Ciao 👋", // Italian
  "สวัสดี 👋", // Thai
];

const texts = [
  `Welcome, I'm Windsurf! MERN-stack Full-stack Developer`, // English
  `¡Bienvenido, soy Windsurf! Desarrollador Full-stack MERN`, // Spanish
  `欢迎，我是 Windsurf! MERN 全栈开发者`, // Mandarin
  `Bienvenue, je suis Windsurf! Développeur Full-stack MERN`, // French
  `Bem-vindo, eu sou Windsurf! Desenvolvedor Full-stack MERN`, // Portuguese
  `ようこそ、私は Windsurf です！ MERNフルスタック開発者`, // Japanese
  `환영합니다, 저는 Windsurf입니다! MERN 풀스택 개발자`, // Korean
  `Willkommen, ich bin Windsurf! MERN-Stack Full-Stack-Entwickler`, // German
  `Benvenuto, sono Windsurf! Sviluppatore Full-stack MERN`, // Italian
  `ยินดีต้อนรับ, ฉันคือ Windsurf! นักพัฒนา Full-stack MERN`, // Thai
];

const changingGreeting = document.getElementById("changing-greeting");
const changingText = document.getElementById("changing-text");

let currentGreetingIndex = 0;
let currentTextIndex = 0;

const changeGreeting = () => {
  currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
  changingGreeting.textContent = greetings[currentGreetingIndex];
};

const changeText = () => {
  currentTextIndex = (currentTextIndex + 1) % texts.length;
  changingText.textContent = texts[currentTextIndex];
};

setInterval(changeGreeting, 1500);
setInterval(changeText, 1500);
