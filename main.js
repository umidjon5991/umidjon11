const elHumbergerBtn = document.querySelector(".btn-hamburger");
const elHeader = document.querySelector(".header");

elHumbergerBtn.addEventListener("click", function () {
  elHeader.classList.toggle("header--adaptive");
});
