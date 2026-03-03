// ================= NAVBAR SCROLL =================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);

    // Scroll progress
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    document.querySelector(".scroll-progress").style.width = progress + "%";
});

// ================= TYPING EFFECT =================
const roles = ["web applications", "frontend interfaces", "digital experiences"];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const typingElement = document.getElementById("typing");
    const current = roles[index];

    if (!isDeleting) {
        typingElement.textContent = current.substring(0, charIndex++);
        if (charIndex > current.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        typingElement.textContent = current.substring(0, charIndex--);
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
        number: { value: 70 },
        size: { value: 3 },
        move: { speed: 1.5 },
        line_linked: {
            enable: true,
            distance: 130,
            color: "#3b82f6",
            opacity: 0.2,
            width: 1
        }
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
                bar.style.width = bar.dataset.width;
            });
            skillObserver.disconnect();
        }
    });
}, { threshold: 0.4 });

skillObserver.observe(skillSection);

// ================= PROJECT MODAL + FILTER =================
const projectCards = document.querySelectorAll(".project-card");
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalLink = document.getElementById("modalLink");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close-modal");
const filterButtons = document.querySelectorAll(".filter-btn");

const projectData = {
    weather: {
        title: "Weather App",
        description: "Real-time weather app using API integration and dynamic DOM updates.",
        link: "https://touhid-khan.github.io/weather-app/",
        image: "img/weather.png"
    },
    portfolio: {
        title: "Portfolio Website",
        description: "Fully responsive portfolio built using modern UI/UX principles.",
        link: "https://touhid-khan.github.io/portfolio-website/",
        image: "img/portfolio.png"
    },
    calculator: {
        title: "Calculator App",
        description: "Interactive calculator with operator logic and clean UI.",
        link: "https://touhid-khan.github.io/calculator-app/",
        image: "img/calculator.png"
    }
};

projectCards.forEach(card => {
    card.addEventListener("click", () => {
        const project = card.dataset.project;
        const data = projectData[project];

        modalTitle.textContent = data.title;
        modalDescription.textContent = data.description;
        modalLink.href = data.link;
        modalImage.src = data.image;

        modal.classList.add("active");
    });
});

closeModal.addEventListener("click", () => modal.classList.remove("active"));

window.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("active");
});

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {
            const category = card.dataset.category;

            if (filter === "all" || category.includes(filter)) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }
        });
    });
});