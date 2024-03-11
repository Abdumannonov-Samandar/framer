let elHiddenHeader = document.querySelector(".hidden-header");
let elMenuBtn = document.querySelector(".menu-btn");
let elCloseBtn = document.querySelector(".close-btn");

elMenuBtn.addEventListener("click", () => {
  elHiddenHeader.classList.remove("-translate-y-[150%]");
});


elCloseBtn.addEventListener("click", () => {
  elHiddenHeader.classList.add("-translate-y-[150%]");
});