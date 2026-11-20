// Simple visitor counter (stored in browser)

let visitors = localStorage.getItem("visitors");

if (visitors === null) {
    visitors = 1;
} else {
    visitors = Number(visitors) + 1;
}

localStorage.setItem("visitors", visitors);

document.getElementById("visitor-count").innerText = visitors;