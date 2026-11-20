
// Mobile Navigation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    menuBtn.textContent = navLinks.classList.contains("active")
        ? "✕"
        : "☰";
});

// Close menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});

// Dark / Light Mode
const themeToggle = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀";
}

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "☾";
    }

});

// Current Year
document.getElementById("currentYear").textContent =
    new Date().getFullYear();

// Print / Download Resume
function printResume() {
    window.print();
}
