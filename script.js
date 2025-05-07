document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcomeMessage');
    const changeMessageBtn = document.getElementById('changeMessageBtn');
    const toggleStyleBtn = document.getElementById('toggleStyleBtn');
    const addTestimonialBtn = document.getElementById('addTestimonialBtn');
    const removeTestimonialBtn = document.getElementById('removeTestimonialBtn');
    const testimonialsContainer = document.getElementById('testimonialsContainer');
    let testimonialCount = 6;

    // Change welcome message
    changeMessageBtn.addEventListener('click', () => {
        welcomeMessage.textContent = `Enjoy our specials today at ${new Date().toLocaleTimeString()}!`;
    });

    // Toggle menu section style
    toggleStyleBtn.addEventListener('click', () => {
        const menuSections = document.querySelectorAll('.menu-section');
        menuSections.forEach(section => {
            section.style.backgroundColor = 
                section.style.backgroundColor === '#f9f5e8' ? '' : '#f9f5e8';
            section.style.padding = 
                section.style.padding === '30px' ? '20px' : '30px';
        });
    });

    // Add new testimonial
    addTestimonialBtn.addEventListener('click', () => {
        const newTestimonial = document.createElement('div');
        newTestimonial.className = 'testimonial';
        newTestimonial.innerHTML = `
            <p>"Amazing experience #${++testimonialCount}!"</p>
            <p>- Guest ${testimonialCount}</p>
        `;
        testimonialsContainer.appendChild(newTestimonial);
    });

    // Remove last testimonial
    removeTestimonialBtn.addEventListener('click', () => {
        const lastTestimonial = testimonialsContainer.querySelector('.testimonial:last-child');
        if (lastTestimonial && testimonialsContainer.children.length > 1) {
            lastTestimonial.remove();
            testimonialCount--;
        }
    });
});