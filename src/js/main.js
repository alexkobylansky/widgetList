document.addEventListener('DOMContentLoaded', () => {

  document.querySelector(".toggle-menu-btn").addEventListener("click", () => {
    document.querySelector(".toggle-menu-btn").classList.toggle("close");
    document.querySelector(".navbar-collapse").classList.toggle("collapse");
    document.querySelector(".navbar-mobile").classList.toggle("black");
    document.querySelector("nav");
  });
});