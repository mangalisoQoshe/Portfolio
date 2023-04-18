const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navList = document.querySelector(".nav-list");
const modeButton = document.querySelector(".mode-button");

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

modeButton.addEventListener("click", ()=>{
  alert("Under Construction! 😂")
})