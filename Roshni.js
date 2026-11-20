// Visitor Counter
let count = localStorage.getItem("visitors");

count = count ? Number(count) + 1 : 1;

localStorage.setItem("visitors", count);

document.getElementById("visitor-count").innerText = count;