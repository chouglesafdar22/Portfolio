// nav bar
// JavaScript to add smooth scrolling to the navigation links
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('nav ul li a');
    for (const link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});
// JavaScript to toggle navigation on mobile
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector('.menu-button');
    const navUl = document.querySelector('nav .right ul');
    const links = document.querySelectorAll('nav ul li a');

    menuButton.addEventListener('click', function () {
        navUl.classList.toggle('active');
    });

    for (const link of links) {
        link.addEventListener('click', function () {
            navUl.classList.remove('active');
        });
    }
});

// home
// JavaScript for adding any interactive functionality if needed
document.addEventListener("DOMContentLoaded", function () {
    const downloadButton = document.querySelector('.rightsec .btn');

    downloadButton.addEventListener('click', function () {
        alert('You have clicked on CV Button...');
    });
});

// about
// JavaScript for adding any interactive functionality
document.addEventListener("DOMContentLoaded", function () {
    // For demonstration, fade in text on page load
    const rightSec = document.querySelector('.rightsec');
    rightSec.style.opacity = '1';
});

// services
// JavaScript to trigger animations on scroll
document.addEventListener("DOMContentLoaded", function () {
    const services = document.querySelectorAll('.service');

    function checkPosition() {
        const triggerBottom = window.innerHeight / 5 * 4;

        services.forEach(service => {
            const serviceTop = service.getBoundingClientRect().top;

            if (serviceTop < triggerBottom) {
                service.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', checkPosition);
    checkPosition(); // Initial check
});

// projects
document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});

// resume
document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scroll for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for Animations on Scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .profile, .skills li, .experience li, .education li').forEach(section => {
        observer.observe(section);
    });

    // Download Counter for CV Button
    const downloadBtn = document.querySelector('.download-btn');
    let downloadCount = localStorage.getItem('downloadCount') || 0;

    downloadBtn.addEventListener('click', () => {
        downloadCount++;
        localStorage.setItem('downloadCount', downloadCount);
        alert(`You have clicked on CV Button...`);
    });
});

// contact_me
// JavaScript for advanced functionality
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Contact form validation and submission
    const form = document.querySelector('.contact-form form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Simple validation
        if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Simulate form submission
        alert('Thank you for your message!');
        form.reset();
    });

    // Add event listeners for form fields to provide immediate feedback
    [nameInput, emailInput, messageInput].forEach(input => {
        input.addEventListener('input', function () {
            if (this.value.trim() !== '') {
                this.style.borderColor = '#1a73e8';
            } else {
                this.style.borderColor = '#ccc';
            }
        });
    });

    // Social media link hover effect with JavaScript
    const socialLinks = document.querySelectorAll('.social-media a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.2)';
            this.style.transition = 'transform 0.3s ease';
        });

        link.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });

    // Animate the contact container on scroll
    const contactContainer = document.querySelector('.contact-container');
    window.addEventListener('scroll', function () {
        const rect = contactContainer.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            contactContainer.style.transform = 'translateY(0)';
            contactContainer.style.opacity = '1';
        } else {
            contactContainer.style.transform = 'translateY(50px)';
            contactContainer.style.opacity = '0';
        }
    });

    // Initialize the animations on load
    contactContainer.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    contactContainer.style.transform = 'translateY(50px)';
    contactContainer.style.opacity = '0';
    window.dispatchEvent(new Event('scroll'));
});

// footer
// JavaScript for smooth scrolling on navigation links
document.addEventListener("DOMContentLoaded", function () {
    const socialLinks = document.querySelectorAll('.sm a');

    socialLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            const platform = this.getAttribute('href');
            alert(`You clicked on the link: ${platform}`);
        });
    });

    const navLinks = document.querySelectorAll('.nb ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});