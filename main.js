const nav = document.querySelector("nav");
const menuIcon = document.querySelector(".wrapper .menu-icon");
const closeIcon = document.querySelector(".mobilemenucontainer .wrapper .closeicon");
const mobileMenu = document.querySelector(".mobilemenucontainer");

menuIcon.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });

closeIcon.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});