// ===========================
// LOADER
// ===========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 800);

});

// ===========================
// DARK / LIGHT MODE
// ===========================

const themeBtn = document.getElementById("themeToggle");

const body = document.body;

if (localStorage.getItem("theme") === "dark") {

    body.classList.add("dark");

    themeBtn.innerHTML = '<i class="ri-sun-line"></i>';

}

themeBtn.addEventListener("click", () => {

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

        themeBtn.innerHTML = '<i class="ri-sun-line"></i>';

    } else {

        localStorage.setItem("theme", "light");

        themeBtn.innerHTML = '<i class="ri-moon-line"></i>';

    }

});

// ===========================
// MOBILE MENU
// ===========================

const menuBtn = document.getElementById("menuBtn");

const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {

        menuBtn.innerHTML = '<i class="ri-close-line"></i>';

    } else {

        menuBtn.innerHTML = '<i class="ri-menu-3-line"></i>';

    }

});

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuBtn.innerHTML = '<i class="ri-menu-3-line"></i>';

    });

});

// ===========================
// TYPING EFFECT
// ===========================

const typing = document.getElementById("typing");

const words = [

    "Aspiring Data Analyst",

    "Python Developer",

    "Power BI Enthusiast",

    "SQL Learner",

    "MCA (AI & ML) Student"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect() {

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === current.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.textContent = current.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 120);

}

typeEffect();

// ===========================
// SCROLL REVEAL
// ===========================

const reveals = document.querySelectorAll(".reveal");

function revealSection() {

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        const height = window.innerHeight;

        if (top < height - 120) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSection);

revealSection();

// ===========================
// ACTIVE NAV LINK
// ===========================

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

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===========================
// HEADER EFFECT
// ===========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "none";

    }

});

// ===========================
// BACK TO TOP
// ===========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

        topBtn.style.alignItems = "center";

        topBtn.style.justifyContent = "center";

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

// ===========================
// CONTACT FORM
// ===========================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();

});

// ===========================
// SMOOTH SCROLL
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ===========================
// PARALLAX PROFILE
// ===========================

const profile = document.querySelector(".profile-card");

window.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 40;

    const y = (window.innerHeight / 2 - e.clientY) / 40;

    profile.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;

});

window.addEventListener("mouseleave", () => {

    profile.style.transform = "rotateY(0deg) rotateX(0deg)";

});

// ===========================
// CURRENT YEAR
// ===========================

const footer = document.querySelector("footer p");

footer.innerHTML = `© ${new Date().getFullYear()} Sanchali Dhote | Designed with ❤️`;