const body = document.querySelector("body");
const header = document.querySelector("header");
const sideNav = document.querySelector(".side-nav");
const close = document.querySelector(".close");
const themeSwitch = document.querySelector(".theme-switch");

sideNav.onclick = () => {
    header.classList.toggle("active");
}

close.onclick = () => {
    header.classList.toggle("active");
}

themeSwitch.onclick = () => {
    body.classList.toggle("dark");
    themeSwitch.classList.toggle("active");
}

