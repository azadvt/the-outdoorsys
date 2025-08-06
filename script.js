// Simple JavaScript for THE OUTDOORSYS Travel Agency

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effects to category items
    const categoryItems = document.querySelectorAll('.categories .item');
    categoryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add loading animation for images (excluding hero image)
    const images = document.querySelectorAll('img:not(.hero .image)');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });

    // Simple scroll-based animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Update current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // Handle hero image loading
    const heroImage = document.querySelector('.hero .image');
    if (heroImage) {
        // Add error handling for image
        heroImage.addEventListener('error', function() {
            console.log('Hero image failed to load, using fallback gradient');
            this.style.display = 'none';
        });
        
        // Add load event to confirm image loaded
        heroImage.addEventListener('load', function() {
            console.log('Hero image loaded successfully');
        });
    }
    
    // Console welcome message
    console.log('🌏 Welcome to THE OUTDOORSYS - Incredible India Travel Agency!');
    console.log('Ready to explore the wonders of India? Contact us at info@theoutdoorsys.com');
}); 