const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navList = document.querySelector(".nav-list");
const modeButton = document.querySelector(".mode-button");
const sunIcon = document.querySelector(".sun-icon");
const moonIcon = document.querySelector(".moon-icon");
const Footer = document.querySelector(".footer");
const primaryHeader = document.querySelector(".primary-header");
const root = document.documentElement;

var scroll = new SmoothScroll('.nav a[href*="#"]', {
  speed: 100,
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
  modeButton.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
    modeButton.classList.remove("active");
  })
);

modeButton.addEventListener("click", () => {
  
  if (root.getAttribute('color-scheme') === 'dark') {
    root.setAttribute('color-scheme', 'light');
    sunIcon.classList.remove("visually-exposed")
    moonIcon.classList.remove("visually-hidden")
    Footer.classList.add("active")
    primaryHeader.classList.add("active")
  } else {
    root.setAttribute('color-scheme', 'dark');
    sunIcon.classList.add("visually-exposed")
    moonIcon.classList.add("visually-hidden")
    moonIcon.classList.remove("visually-exposed")
    Footer.classList.remove("active")
    primaryHeader.classList.remove("active")
  }
});
