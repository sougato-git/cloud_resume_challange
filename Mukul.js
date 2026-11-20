
document.addEventListener("DOMContentLoaded", () => {

    // 1. Website Visitor Counter
    const visitorCount = document.getElementById("visitor-count");

    // Replace this URL with your AWS API Gateway URL
    const API_URL = "YOUR_API_GATEWAY_URL";

    async function updateVisitorCount() {

        if (!visitorCount) return;

        try {
            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error("Unable to fetch visitor count");
            }

            const data = await response.json();

            // Supports either response format
            const count = data.count ?? data.visitorCount;

            visitorCount.textContent =
                Number(count).toLocaleString("en-IN");

        } catch (error) {
            console.error("Visitor Counter Error:", error);
            visitorCount.textContent = "Unavailable";
        }
    }

    updateVisitorCount();


    // 2. Dynamic Footer Year
    const footer = document.querySelector("footer p:last-child");

    if (footer) {
        footer.textContent =
            `© ${new Date().getFullYear()} Mukul Hazra. All Rights Reserved.`;
    }


    // 3. Smooth Scroll Animation
    const sections = document.querySelectorAll("section");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        sections.forEach(section => {
            observer.observe(section);
        });

    } else {
        sections.forEach(section => {
            section.classList.add("visible");
        });
    }


    // 4. Console Welcome Message
    console.log("Welcome to Mukul Hazra's Cloud Resume Website!");

});