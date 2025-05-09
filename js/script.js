document.addEventListener('DOMContentLoaded', () => {

    // Smooth scroll for anchor links (if you add any)
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         document.querySelector(this.getAttribute('href')).scrollIntoView({
    //             behavior: 'smooth'
    //         });
    //     });
    // });

    // Fade-in sections on scroll
    const animatedSections = document.querySelectorAll('.fade-in-section');

    if (animatedSections.length > 0) {
        const observer = new IntersectionObserver((entries, observerRef) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observerRef.unobserve(entry.target); // Stop observing once animated
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        animatedSections.forEach(section => {
            observer.observe(section);
        });
    }

    // Navbar shrink/style on scroll (optional subtle effect)
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }
});

// Add this to your style.css for the navbar scroll effect if you use it:
/*
.navbar-scrolled {
    background-color: rgba(253, 253, 253, 0.95) !important; 
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
*/