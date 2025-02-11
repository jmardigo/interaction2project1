function openMenu() {
    navExpanded.classList.toggle("navExpandedDown");
}

function closeMenu() {
    navExpandedDown.classList.toggle("navExpanded");
}

let navExpandedDown = document.querySelector(".navExpandedDown");
let navExpanded = document.querySelector(".navExpanded");

navExpanded.addEventListener("mouseenter", openMenu);
navExpandedDown.addEventListener("mouseleave", closeMenu);