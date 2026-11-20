document.addEventListener("DOMContentLoaded", function () {

    // 1. Visitor Counter
    const visitorCountElement = document.getElementById("visitor-count");

    if (visitorCountElement) {
        try {
            let visits = Number(localStorage.getItem("resumeVisitorCount")) || 0;

            visits++;

            localStorage.setItem("resumeVisitorCount", visits);

            visitorCountElement.textContent = visits.toLocaleString();

        } catch (error) {
            visitorCountElement.textContent = "Unavailable";
            console.warn("Could not save visitor count:", error);
        }
    }

    // 2. Automatically Update Copyright Year
    const copyright = Array.from(document.querySelectorAll("footer p"))
        .find(function (paragraph) {
            return paragraph.textContent.includes("©");
        });

    if (copyright) {
        copyright.textContent = "© " + new Date().getFullYear() + " Sougato Patra";
    }

    // 3. Disable Empty Links
    document.querySelectorAll('a[href=""]').forEach(function (link) {

        link.addEventListener("click", function (event) {
            event.preventDefault();
        });

        link.setAttribute("aria-disabled", "true");
        link.title = "Link not available yet";

    });

});