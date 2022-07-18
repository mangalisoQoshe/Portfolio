const humburger = document.querySelector(".humburger");
const navMenu = document.querySelector(".nav-menu");
var scroll = new SmoothScroll('.nav a[href*="#"]',{
    speed:800
});



humburger.addEventListener("click",()=>{
    humburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click",()=>{
    humburger.classList.remove("active");
    navMenu.classList.remove("active");
   
}))