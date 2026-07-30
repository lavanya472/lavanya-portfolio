// Smooth Scroll

document.querySelectorAll('nav a').forEach(anchor => {

anchor.addEventListener('click', function(e) {

e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({

behavior:'smooth'

});

});

});

// Navbar Shadow

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.15)";

}

else{

header.style.boxShadow="0 5px 20px rgba(0,0,0,.08)";

}

});

console.log("Lavanya Portfolio Ready");
// Active Navigation

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 150;

if (pageYOffset >= sectionTop) {
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") == "#" + current) {

link.classList.add("active");

}

});

});
// Scroll Reveal

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

const hiddenElements=document.querySelectorAll(

".hero,.about,.projects,.skills,.education,.contact"

);

hiddenElements.forEach((el)=>{

el.classList.add("hidden");

observer.observe(el);

});