document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll('.navbar-link');
    var currentPage = window.location.href;
    
    navLinks.forEach(function(link) {
        if (link.href === currentPage) {
            link.classList.add('active');
        }
    });
});