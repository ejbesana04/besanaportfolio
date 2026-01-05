/* ================= MOBILE NAVBAR ================= */
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuIcon.classList.toggle('bx-x'); // change hamburger to X
    });

    // Close menu when clicking a nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        });
    });
}

/* ================= DARK MODE ================= */
function toggleDark() {
    document.body.classList.toggle("dark");

    const icon = document.querySelector(".theme-toggle");

    if (!icon) return;

    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}
