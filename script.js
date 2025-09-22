document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close the menu when a link is clicked
    navLinks.addEventListener('click', function() {
        navLinks.classList.remove('active');
    });

    // Close the menu if the user clicks anywhere outside of it
    document.addEventListener('click', function(event) {
        if (!menuIcon.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });
});
