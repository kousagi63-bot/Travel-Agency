// ===============================
// TRAVELX WEBSITE SCRIPT
// ===============================

// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    if(nav.classList.contains("active")){

        menuBtn.innerHTML =
        '<i class="fas fa-times"></i>';

    }else{

        menuBtn.innerHTML =
        '<i class="fas fa-bars"></i>';

    }

});

// ===============================
// 404 POPUP
// ===============================

const popup = document.querySelector(".popup");
const backBtn = document.getElementById("backBtn");

// ALL LINKS AND BUTTONS WITH error-link CLASS

document.querySelectorAll(".error-link").forEach(item => {

    item.addEventListener("click", function(e){

        e.preventDefault();

        popup.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});

// GO BACK HOME BUTTON

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

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target =
    +counter.getAttribute("data-target");

    let count = 0;

    const updateCounter = () => {

        const increment = target / 100;

        if(count < target){

            count += increment;

            counter.innerText =
            Math.ceil(count) + "+";

            requestAnimationFrame(updateCounter);

        }else{

            counter.innerText =
            target + "+";

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