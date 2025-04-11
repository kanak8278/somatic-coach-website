document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real implementation, you would send the form data to a server here
            // For now, we'll just show a success message
            
            const formData = new FormData(contactForm);
            const formValues = {};
            
            for (let [key, value] of formData.entries()) {
                formValues[key] = value;
            }
            
            console.log('Form submitted with values:', formValues);
            
            // Clear the form
            contactForm.reset();
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = `
                <p>Thank you for reaching out, ${formValues.name}!</p>
                <p>Your message has been received. I'll get back to you shortly.</p>
            `;
            
            // Replace the form with the success message
            contactForm.style.display = 'none';
            contactForm.parentNode.appendChild(successMessage);
            
            // Style the success message
            successMessage.style.backgroundColor = 'var(--color-secondary)';
            successMessage.style.padding = 'var(--spacing-md)';
            successMessage.style.borderRadius = 'var(--border-radius)';
            successMessage.style.marginTop = 'var(--spacing-md)';
            successMessage.style.textAlign = 'center';
        });
    }
    
    // Simple manual testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonialIndex = 0;
    
    if (testimonials.length > 1) {
        // Hide all testimonials except the first one
        for (let i = 1; i < testimonials.length; i++) {
            testimonials[i].style.display = 'none';
        }
        
        // Create navigation for testimonials
        const testimonialSlider = document.querySelector('.testimonial-slider');
        
        if (testimonialSlider) {
            const navContainer = document.createElement('div');
            navContainer.className = 'testimonial-nav';
            navContainer.style.display = 'flex';
            navContainer.style.justifyContent = 'center';
            navContainer.style.marginTop = 'var(--spacing-md)';
            
            // Create prev button
            const prevButton = document.createElement('button');
            prevButton.innerHTML = '&larr;';
            prevButton.className = 'testimonial-nav-btn';
            prevButton.style.background = 'var(--color-primary)';
            prevButton.style.color = 'white';
            prevButton.style.border = 'none';
            prevButton.style.padding = '0.5rem 1rem';
            prevButton.style.margin = '0 0.5rem';
            prevButton.style.borderRadius = 'var(--border-radius)';
            prevButton.style.cursor = 'pointer';
            
            // Create next button
            const nextButton = document.createElement('button');
            nextButton.innerHTML = '&rarr;';
            nextButton.className = 'testimonial-nav-btn';
            nextButton.style.background = 'var(--color-primary)';
            nextButton.style.color = 'white';
            nextButton.style.border = 'none';
            nextButton.style.padding = '0.5rem 1rem';
            nextButton.style.margin = '0 0.5rem';
            nextButton.style.borderRadius = 'var(--border-radius)';
            nextButton.style.cursor = 'pointer';
            
            navContainer.appendChild(prevButton);
            navContainer.appendChild(nextButton);
            testimonialSlider.appendChild(navContainer);
            
            // Add event listeners for navigation
            prevButton.addEventListener('click', function() {
                testimonials[currentTestimonialIndex].style.display = 'none';
                currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
                testimonials[currentTestimonialIndex].style.display = 'block';
            });
            
            nextButton.addEventListener('click', function() {
                testimonials[currentTestimonialIndex].style.display = 'none';
                currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
                testimonials[currentTestimonialIndex].style.display = 'block';
            });
        }
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if the link is an anchor link
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Account for fixed header
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.9)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    });
});
