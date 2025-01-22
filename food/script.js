document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = window.location.href;
    const menuItems = document.querySelectorAll('nav ul li a');

    menuItems.forEach(item => {
        if (currentLocation.includes(item.getAttribute('href'))) {
            item.classList.add('active');
        }
    });
});
