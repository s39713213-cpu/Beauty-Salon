// ==========================
// PRELOADER
// ==========================

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        preloader.style.display = "none";
    }, 800);
});


// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    if (navLinks.style.display === "flex") {

        navLinks.style.display = "none";

    } else {

        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "80px";
        navLinks.style.left = "0";
        navLinks.style.width = "100%";
        navLinks.style.background = "#ffffff";
        navLinks.style.padding = "20px";
        navLinks.style.gap = "20px";
        navLinks.style.textAlign = "center";
    }

});


// ==========================
// SCROLL TO TOP BUTTON
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


// ==========================
// BOOKING FORM
// ==========================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = form.querySelector("input").value;

    alert("✨ Thank you " + name + "! Your appointment request has been submitted.");

    form.reset();

});


// ==========================
// SCROLL ANIMATION
// ==========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.2});

sections.forEach((section)=>{

section.style.opacity="0";
section.style.transform="translateY(50px)";
section.style.transition="0.8s";

observer.observe(section);

});


// ==========================
// GALLERY IMAGE EFFECT
// ==========================

const images=document.querySelectorAll(".gallery-container img");

images.forEach((img)=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});


// ==========================
// CONSOLE MESSAGE
// ==========================

console.log("🌸 Premium Glow Salon Website Loaded Successfully!");