const hamburgerBtn = document.getElementById("hamburgerButton");
const navLinks = document.getElementById("nav-links");

hamburgerBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
        document.body.style.overflow = "hidden"; // Disable scrolling
        document.body.style.position = "fixed"; // Prevents moving the page
        document.body.style.width = "100%"; // Ensures layout doesn't break
    } else {
        document.body.style.overflow = ""; // Restore scrolling
        document.body.style.position = ""; // Reset position
        document.body.style.width = "";
    }
});
