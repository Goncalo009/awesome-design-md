// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// ===================================
// Mobile Navigation Toggle
// ===================================
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');

// Show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

// ===================================
// Active Link on Scroll
// ===================================
const sections = document.querySelectorAll('section[id]');

function highlightLink() {
    let scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightLink);

// ===================================
// GSAP Animations
// ===================================

// Hero Section Animations
const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

heroTimeline
    .from('.hero__subtitle', {
        duration: 1,
        y: 30,
        opacity: 0,
        delay: 0.2
    })
    .from('.hero__title', {
        duration: 1,
        y: 30,
        opacity: 0
    }, '-=0.6')
    .from('.hero__description', {
        duration: 1,
        y: 30,
        opacity: 0
    }, '-=0.6')
    .from('.hero__buttons', {
        duration: 1,
        y: 30,
        opacity: 0
    }, '-=0.6')
    .from('.hero__image', {
        duration: 1.2,
        x: 50,
        opacity: 0
    }, '-=0.8');

// Scroll-triggered animations for section headers
gsap.utils.toArray('.gs-reveal-up').forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
});

// Reveal from left
gsap.utils.toArray('.gs-reveal-left').forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
});

// Reveal from right
gsap.utils.toArray('.gs-reveal-right').forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
});

// Scale up animation for menu items
gsap.utils.toArray('.gs-scale-up').forEach((element, index) => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: 'back.out(1.7)',
        delay: index * 0.1
    });
});

// Zoom in animation for gallery items
gsap.utils.toArray('.gs-zoom-in').forEach((element, index) => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: index * 0.1
    });
});

// Slide left animation for testimonials
gsap.utils.toArray('.gs-slide-left').forEach((element, index) => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: index * 0.2
    });
});

// Stagger animation for features
gsap.from('.feature', {
    scrollTrigger: {
        trigger: '.about__features',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: 'power3.out'
});

// Menu tabs animation
gsap.from('.menu__tab', {
    scrollTrigger: {
        trigger: '.menu__tabs',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
    },
    y: 20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out'
});

// Contact cards animation
gsap.from('.contact__card', {
    scrollTrigger: {
        trigger: '.contact__info',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    x: -30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
});

// Social links animation
gsap.from('.contact__social-link', {
    scrollTrigger: {
        trigger: '.contact__social',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
    },
    scale: 0,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'back.out(1.7)'
});

// Form animation
gsap.from('.form__group', {
    scrollTrigger: {
        trigger: '.contact__form',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    y: 30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power3.out'
});

// Footer animation
gsap.from('.footer__brand, .footer__links, .footer__newsletter', {
    scrollTrigger: {
        trigger: '.footer__content',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
});

// ===================================
// Menu Tabs Functionality
// ===================================
const menuTabs = document.querySelectorAll('.menu__tab');
const menuGrids = document.querySelectorAll('.menu__grid');

menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and grids
        menuTabs.forEach(t => t.classList.remove('active'));
        menuGrids.forEach(g => g.classList.remove('active'));

        // Add active class to clicked tab
        tab.classList.add('active');

        // Show corresponding grid
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');

        // Animate menu items
        const activeGrid = document.getElementById(tabId);
        const menuItems = activeGrid.querySelectorAll('.menu__item');
        
        gsap.fromTo(menuItems, 
            { scale: 0.8, opacity: 0 },
            { 
                scale: 1, 
                opacity: 1, 
                duration: 0.6, 
                stagger: 0.1, 
                ease: 'back.out(1.7)' 
            }
        );
    });
});

// ===================================
// Smooth Scroll for Anchor Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Header Background on Scroll
// ===================================
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// ===================================
// Parallax Effect for Hero Image
// ===================================
gsap.to('.hero__img', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    },
    y: 100,
    ease: 'none'
});

// ===================================
// Counter Animation (if needed)
// ===================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// ===================================
// Form Submission Handler
// ===================================
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        
        // Show success message (you can customize this)
        alert('Obrigado! Sua reserva foi enviada com sucesso. Entraremos em contato em breve.');
        
        // Reset form
        contactForm.reset();
        
        // Animate form reset
        gsap.from('.contact__form', {
            scale: 0.95,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
}

// ===================================
// Image Lazy Loading Enhancement
// ===================================
const images = document.querySelectorAll('img[data-src]');
const imageOptions = {
    threshold: 0,
    rootMargin: '0px 0px 200px 0px'
};

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        
        observer.unobserve(img);
    });
}, imageOptions);

images.forEach(img => imageObserver.observe(img));

// ===================================
// Add Hover Effect to Menu Items with GSAP
// ===================================
document.querySelectorAll('.menu__item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            y: -10,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// ===================================
// Gallery Item Hover Effect
// ===================================
document.querySelectorAll('.gallery__item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item.querySelector('.gallery__caption'), {
            y: 0,
            duration: 0.4,
            ease: 'power3.out'
        });
    });
    
    item.addEventListener('mouseleave', () => {
        gsap.to(item.querySelector('.gallery__caption'), {
            y: 20,
            duration: 0.4,
            ease: 'power3.out'
        });
    });
});

console.log('🔥 Fogo & Brasa - Website carregado com sucesso!');
