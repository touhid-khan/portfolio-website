// ================= NAVBAR SCROLL EFFECT =================
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "#0b1220";
    } else {
        navbar.style.background = "#0f172a";
    }
});


// ================= FADE-IN ANIMATION =================
const faders = document.querySelectorAll(".fade-in");

const appearOnScroll = new IntersectionObserver(
    function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        });
    },
    { threshold: 0.3 }
);

faders.forEach(fader => appearOnScroll.observe(fader));


// ================= TYPING EFFECT =================
const roles = ["Web Developer", "Frontend Developer", "Programmer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const typingElement = document.getElementById("typing");
    const currentRole = roles[index];

    if (!isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex++);
        if (charIndex > currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            index = (index + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


// ================= PARTICLES =================
particlesJS("particles-js", {
    particles: {
        number: { value: 60 },
        size: { value: 3 },
        move: { speed: 2 },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#3b82f6",
            opacity: 0.4,
            width: 1
        }
    }
});


// ================= CUSTOM CURSOR =================
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
});


// ================= MODAL =================
function openModal() {
    document.getElementById("projectModal").style.display = "block";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

// Close modal when clicking outside
window.addEventListener("click", function (e) {
    const modal = document.getElementById("projectModal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// ================= HAMBURGER =================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ================= SKILL ANIMATION =================
const skillSection = document.querySelector("#services");
const progressBars = document.querySelectorAll(".progress-fill");

const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            progressBars.forEach(bar => {
                bar.style.width = bar.getAttribute("data-width");
            });
            skillObserver.unobserve(skillSection);
        }
    });
}, { threshold: 0.5 });

skillObserver.observe(skillSection);

// ================= SCROLL PROGRESS =================
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;

    document.querySelector(".scroll-progress").style.width = progress + "%";
});