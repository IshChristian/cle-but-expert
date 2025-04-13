document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (document.querySelector(targetId)) {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
                navLinks.classList.remove('show');
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Reveal animation
    function revealElements() {
        const reveals = document.querySelectorAll('.reveal');
        const windowHeight = window.innerHeight;
        
        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                element.classList.add('animate-fade-in');
            }
        });
    }
    
    // Initial check for elements in view on page load
    revealElements();
    
    // Check for elements on scroll
    window.addEventListener('scroll', revealElements);
    
    // Form validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            if (!name.value.trim()) {
                isValid = false;
                name.style.borderColor = 'red';
            } else {
                name.style.borderColor = '';
            }
            
            if (!email.value.trim() || !isValidEmail(email.value)) {
                isValid = false;
                email.style.borderColor = 'red';
            } else {
                email.style.borderColor = '';
            }
            
            if (!message.value.trim()) {
                isValid = false;
                message.style.borderColor = 'red';
            } else {
                message.style.borderColor = '';
            }
            
            if (isValid) {
                // Show loading state
                const submitBtn = this.querySelector('button[type="submit"]');
                submitBtn.classList.add('btn-loading');
                submitBtn.innerHTML = '<div class="spinner"></div><span>Sending...</span>';
                
                // Simulate form submission (would be replaced with actual API call)
                setTimeout(() => {
                    submitBtn.classList.remove('btn-loading');
                    submitBtn.innerHTML = 'Message Sent!';
                    submitBtn.disabled = true;
                    
                    // Reset form
                    setTimeout(() => {
                        contactForm.reset();
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = 'Send Message';
                    }, 3000);
                }, 1500);
            }
        });
    }
    
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});
