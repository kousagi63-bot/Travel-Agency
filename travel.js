// ===============================
// TRAVELX WEBSITE SCRIPT
// ===============================

// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
});

// ===============================
// 404 POPUP
// ===============================

const errorLinks = document.querySelectorAll(".error-link");
const popup = document.querySelector(".popup");
const backBtn = document.getElementById("backBtn");

errorLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        popup.classList.add("active");
        document.body.style.overflow = "hidden";
    });
});

backBtn.addEventListener("click", () => {
    popup.classList.remove("active");
    document.body.style.overflow = "auto";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.classList.remove("active");
        document.body.style.overflow = "auto";
    }
});

// ===============================
// HEADER SCROLL EFFECT
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 80) {
        header.style.background = "#0f172a";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";
    } else {
        header.style.background = "rgba(0,0,0,0.2)";
        header.style.boxShadow = "none";
    }
});

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
    ".destination-card, .package-card, .feature-box, .gallery img, .counter-box, .testimonial"
);

function reveal() {

    revealElements.forEach((el) => {

        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("show");
        }
    });
}

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all .8s ease";
});

window.addEventListener("scroll", reveal);

window.addEventListener("load", () => {

    reveal();

    document.querySelectorAll(".show").forEach(el => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
    });
});

window.addEventListener("scroll", () => {

    document.querySelectorAll(".show").forEach(el => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
    });
});

// ===============================
// HERO TEXT ANIMATION
// ===============================

const heroTitle = document.querySelector(".hero-content h1");

const texts = [
    "Discover Amazing Places Around The World",
    "Create Unforgettable Memories",
    "Travel Beyond Your Dreams",
    "Adventure Starts With TravelX"
];

let current = 0;

setInterval(() => {

    heroTitle.style.opacity = "0";

    setTimeout(() => {

        current++;

        if (current >= texts.length) {
            current = 0;
        }

        heroTitle.textContent = texts[current];

        heroTitle.style.opacity = "1";

    }, 500);

}, 4000);

// ===============================
// NEWSLETTER SUBSCRIBE
// ===============================

const subscribeBtn = document.querySelector(".subscribe button");
const emailInput = document.querySelector(".subscribe input");

subscribeBtn.addEventListener("click", () => {

    const email = emailInput.value.trim();

    if (email === "") {

        alert("Please enter your email address.");

    } else {

        alert(
            "Thank you for subscribing to TravelX!"
        );

        emailInput.value = "";
    }
});

// ===============================
// SEARCH BUTTON
// ===============================

const searchBtn = document.querySelector(".search-card button");

searchBtn.addEventListener("click", () => {

    alert(
        "Search feature demo completed successfully!"
    );
});

// ===============================
// GALLERY HOVER EFFECT
// ===============================

const galleryImages =
document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {

    img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.08)";
    });

    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
    });
});

// ===============================
// COUNTER ANIMATION
// ===============================

const counters = document.querySelectorAll(".counter-box h2");

counters.forEach(counter => {

    const targetText = counter.innerText;

    const target =
    parseInt(targetText.replace(/\D/g, ""));

    let count = 0;

    const updateCounter = () => {

        const increment = target / 100;

        if (count < target) {

            count += increment;

            counter.innerText =
            Math.ceil(count) + "+";

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = targetText;
        }
    };

    updateCounter();
});

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ===============================
// PAGE LOADER EFFECT
// ===============================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";
});

document.body.style.opacity = "0";
document.body.style.transition = "opacity 1s";

// ===============================
// CONSOLE MESSAGE
// ===============================

console.log("TravelX Website Loaded Successfully ✈️");
// =========================
// LOADER ANIMATION
// =========================

window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide-loader");

    }, 2500);

});