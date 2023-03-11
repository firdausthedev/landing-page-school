document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".hamburger").classList.toggle("open");
  document.querySelector("nav .nav-wrapper ul").classList.toggle("open");
  document.querySelector("nav div:last-child").classList.toggle("open");
});
