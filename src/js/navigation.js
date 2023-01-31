/*
*Created by Sofia Widholm. 
*Webbutveckling III, Webbutveckling, Mittuniversitetet.
*Last update 2022-06-02
*/

/* Code to show and hide mobile navigation */

// Variables that stores the ul element in nav element and a button that toggles mobile menu
const primaryNav = document.querySelector(".menu");
const navToggle = document.querySelector(".mobile-nav-toggle");

// Add an event listener on button, calls function showNavigation when triggered
navToggle.addEventListener("click", showNavigation, false);

function showNavigation() {
    const visibility = primaryNav.getAttribute("data-visible");
    // If statement to change attributes on nav element and toggle for mobile menu depending of if it's open or closed
    if (visibility === "false" || visibility === null) {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
}