/* ==========================================
   ROHIT BILWAL PORTFOLIO
   JavaScript
========================================== */


console.log("Rohit Portfolio Loaded Successfully");



/* ==========================================
   SMOOTH NAVIGATION
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }


        const target = document.querySelector(targetId);


        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});



/* ==========================================
   CURRENT YEAR
========================================== */

const copyright = document.querySelector(".copyright");


if (copyright) {

    copyright.textContent =
        `© ${new Date().getFullYear()} Rohit Bilwal. Built with HTML, CSS & JavaScript.`;

}