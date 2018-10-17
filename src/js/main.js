document.addEventListener("DOMContentLoaded", ()=>{
    let hamburgerIcon = document.querySelector(".hamburger-display");
    let hamburgerMenu = document.querySelector(".small-menu");
    hamburgerIcon.addEventListener("click", ()=>{
        hamburgerMenu.classList.toggle("hamburger-menu");
        hamburgerMenu.classList.toggle("small-menu");
    })
})
