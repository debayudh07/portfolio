document.addEventListener('DOMContentLoaded', (event) => {
    const menuIcon = document.querySelector('#menu-icon');
    const navMenu = document.querySelector('#nav-menu');

    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuIcon.classList.toggle('bx-x');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.navbar a').forEach(n => n.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    }));
});