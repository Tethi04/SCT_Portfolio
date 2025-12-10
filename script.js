document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to Tethi's Matcha Portfolio! 🍵");

    // Add a simple fade-in effect for cards on scroll (optional for mobile)
    const cards = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        // Initial state for JS animation
        // (The CSS animation handles the floating, this handles entrance)
        observer.observe(card);
    });
});
