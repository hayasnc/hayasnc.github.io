import CONFIG from './js/config.js';

// Function to populate content from config
function populateContent() {
    // Update page title
    document.getElementById('page-title').textContent = CONFIG.personal.name;
    
    // Update hero section
    document.getElementById('hero-name').textContent = CONFIG.personal.name;
    document.getElementById('hero-title').textContent = CONFIG.personal.title;
    document.getElementById('hero-tagline').textContent = CONFIG.personal.tagline;
    
    // Update about section
    document.getElementById('about-content').textContent = CONFIG.sections.about.content;
    
    // Update technologies intro
    document.getElementById('tech-intro').textContent = CONFIG.sections.technologies.intro;

    // Update copyright
    document.getElementById('copyright').textContent = CONFIG.personal.copyright;
}

document.addEventListener('DOMContentLoaded', () => {
    // Populate content from config
    populateContent();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Navigation highlight on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    function highlightNav() {
        const scrollPos = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNav);

    // Animate technology cards on scroll
    const techCards = document.querySelectorAll('.tech-category');
    
    // Add initial state class to all cards
    techCards.forEach(card => {
        card.classList.add('tech-card-hidden');
    });

    // Create intersection observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered delay based on card index
                setTimeout(() => {
                    entry.target.classList.add('tech-card-visible');
                }, index * 100); // 100ms delay between each card
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe each tech card
    techCards.forEach(card => {
        cardObserver.observe(card);
    });

    // Add hover effect for tech card items
    techCards.forEach(card => {
        const items = card.querySelectorAll('li');
        items.forEach((item, index) => {
            item.style.setProperty('--item-index', index);
        });
    });
});
