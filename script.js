// ================= NAVBAR SCROLL EFFECT =================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// ================= TYPING EFFECT =================
const roles = [
    "web applications",
    "frontend interfaces",
    "digital experiences"
];

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
        number: { value: 80 },
        size: { value: 3 },
        move: { speed: 1.8 },
        line_linked: {
            enable: true,
            distance: 140,
            color: "#000000",
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
    image: "img/project/weather.png"
  },
  portfolio: {
    title: "Portfolio Website",
    description: "Fully responsive portfolio built using modern UI/UX principles.",
    link: "https://touhid-khan.github.io/portfolio-website/",
    image: "img/project/portfolio.png"
  },
  calculator: {
    title: "Calculator App",
    description: "Interactive calculator with operator logic and clean UI.",
    link: "https://touhid-khan.github.io/calculator-app/",
    image: "img/project/calculator.png"
  }
};

/* ================= MODAL ================= */

projectCards.forEach(card => {
  card.addEventListener("click", () => {
    const project = card.getAttribute("data-project");

    modalTitle.textContent = projectData[project].title;
    modalDescription.textContent = projectData[project].description;
    modalLink.href = projectData[project].link;
    modalImage.src = projectData[project].image;

    modal.classList.add("active");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

/* ================= FILTERING ================= */

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    projectCards.forEach(card => {
      const category = card.getAttribute("data-category");

      if (filter === "all" || category.includes(filter)) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });

  });
});