const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "bx bx-menu" : "bx bx-menu");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "bx bx-menu");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 800,
};

ScrollReveal().reveal(".header-container img", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header-container h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header-container p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header-btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".project-card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".experience-list li", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".footer-container h2", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".footer-container p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".footer-container .mail-to", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".footer-socials", {
  ...scrollRevealOption,
  delay: 1500,
});
