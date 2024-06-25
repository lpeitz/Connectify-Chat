// JavaScript, um den aktiven Tab basierend auf der Scroll-Position zu markieren
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(function(navLink) {
            navLink.classList.remove('active');
            if (navLink.getAttribute('href').includes(current)) {
                navLink.classList.add('active');
            }
        });
    });
});
