const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const links = document.querySelector("#navLinks");

function toggleNav() {
  links.classList.toggle("active");
}
menu.addEventListener("click", toggleNav);
close.addEventListener("click", toggleNav);
