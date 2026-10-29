
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.innerHTML = isOpen
    ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
    : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
});

mainNav.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 992) {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
  }
});

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled")
    }
})

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight - 200
  ) {
    current = "contact";
  }

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

document.getElementById("projectsBtn").addEventListener("click", () => {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
});

document.getElementById("contactBtn").addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
});

document.getElementById("linkedinBtn").addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/yaman-kareh-01214a444?utm_source=share_via&utm_content=profile&utm_medium=member_ios", "_blank");
});

const emailBtn = document.getElementById("emailBtn");

emailBtn.addEventListener("click", function () {
  window.open("https://mail.google.com/mail/?view=cm&fs=1&to=karehyaman@gmail.com", "_blank");
});

document.getElementById("callBtn").addEventListener("click", function () {
  window.location.href = "tel:+963959417958";
});

document.getElementById("whatsappBtn").addEventListener("click", function () {
  window.open("https://wa.me/963959417958", "_blank");
});

document.getElementById("linkedinBtn2").addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/yaman-kareh-01214a444?utm_source=share_via&utm_content=profile&utm_medium=member_ios", "_blank");
});