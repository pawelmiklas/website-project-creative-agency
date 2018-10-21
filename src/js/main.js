document.addEventListener("DOMContentLoaded", () => {
  let hamburgerIcon = document.querySelector(".hamburger-display");
  let hamburgerMenu = document.querySelector(".small-menu");
  let cross = document.querySelector("#cross");
  let main = document.querySelector("#main");
  let hamburgerLink = document.querySelectorAll(".hamburger-link");
  hamburgerIcon.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("hamburger-menu");
    hamburgerIcon.classList.toggle("hamburger-display-none");
    hamburgerMenu.classList.toggle("small-menu");
    main.style.display = "none";
  });
  cross.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("hamburger-menu");
    hamburgerIcon.classList.toggle("hamburger-display-none");
    hamburgerMenu.classList.toggle("small-menu");
    main.style.display = "block";
  });
  for (let i = 0; i < hamburgerLink.length; i++) {
    hamburgerLink[i].addEventListener("click", () => {
      main.style.display = "block";
      hamburgerMenu.classList.toggle("hamburger-menu");
      hamburgerIcon.classList.toggle("hamburger-display-none");
      hamburgerMenu.classList.toggle("small-menu");
    });
  }
});
