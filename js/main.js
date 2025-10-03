/* COVETEN - Main JavaScript Functions */

// DOM Elements
const header = document.getElementById('header');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const backToTop = document.getElementById('back-to-top');
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initScrollEffects();
    initDarkMode();
    initForms();
    initAnimations();
    initProductFilters();
    initFAQ();
    initSmoothScroll();
});

// Navigation Functions
function initNavigation() {
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
            navToggle.classList.toggle('active');
            
            // Change hamburger to X
            const icon = navToggle.querySelector('i');
            if (navMenu.classList.contains('show')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
            navToggle.classList.remove('active');
            
            if (navToggle) {
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('show');
            navToggle.classList.remove('active');
            
            if (navToggle) {
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
}

// Scroll Effects
function initScrollEffects() {
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;

        // Header background on scroll
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        }

        // Back to top button
        if (scrollTop > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }

        // Animate elements on scroll
        animateOnScroll();
    });

    // Back to top functionality
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Dark Mode Functions
function initDarkMode() {
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Update dark mode toggle icon
    updateDarkModeIcon(currentTheme);

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            const theme = document.documentElement.getAttribute('data-theme');
            const newTheme = theme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateDarkModeIcon(newTheme);
        });
    }
}

function updateDarkModeIcon(theme) {
    if (!darkModeToggle) return;
    
    const icon = darkModeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Form Functions
function initForms() {
    // Initialize all forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        initFormValidation(form);
        initFormSubmission(form);
    });

    // Initialize newsletter forms
    const newsletterForms = document.querySelectorAll('#newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', handleNewsletterSubmission);
    });
}

function initFormValidation(form) {
    const inputs = form.querySelectorAll('.form__input, .form__textarea, .form__select');
    
    inputs.forEach(input => {
        // Real-time validation
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => clearFieldError(input));
        
        // Floating label effect
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
        
        // Initialize focused state for pre-filled inputs
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });
}

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let message = '';

    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        message = 'This field is required';
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            message = 'Please enter a valid email address';
        }
    }
    
    // Phone validation
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(value.replace(/\s/g, ''))) {
            isValid = false;
            message = 'Please enter a valid phone number';
        }
    }

    // Display validation result
    showFieldValidation(field, isValid, message);
    return isValid;
}

function showFieldValidation(field, isValid, message) {
    const formGroup = field.closest('.form__group');
    const existingError = formGroup.querySelector('.form__error');
    
    // Remove existing error
    if (existingError) {
        existingError.remove();
    }
    
    // Add error styling and message
    if (!isValid) {
        field.style.borderColor = '#e74c3c';
        
        const errorElement = document.createElement('span');
        errorElement.className = 'form__error';
        errorElement.textContent = message;
        errorElement.style.cssText = `
            color: #e74c3c;
            font-size: 1.2rem;
            margin-top: 0.5rem;
            display: block;
        `;
        formGroup.appendChild(errorElement);
    } else {
        field.style.borderColor = '#27ae60';
    }
}

function clearFieldError(field) {
    const formGroup = field.closest('.form__group');
    const error = formGroup.querySelector('.form__error');
    if (error) {
        error.remove();
        field.style.borderColor = '';
    }
}

function initFormSubmission(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validate all fields
        const inputs = form.querySelectorAll('.form__input, .form__textarea, .form__select');
        let isFormValid = true;
        
        inputs.forEach(input => {
            if (!validateField(input)) {
                isFormValid = false;
            }
        });
        
        if (isFormValid) {
            handleFormSubmission(form);
        } else {
            // Scroll to first error
            const firstError = form.querySelector('.form__error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });
}

function handleFormSubmission(form) {
    const submitBtn = form.querySelector('.form__submit');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
        
        // Reset form
        form.reset();
        
        // Remove focused states
        const formGroups = form.querySelectorAll('.form__group');
        formGroups.forEach(group => {
            group.classList.remove('focused');
        });
        
    }, 2000);
}

function handleNewsletterSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    const emailInput = form.querySelector('input[type="email"]');
    const submitBtn = form.querySelector('button');
    
    if (!emailInput.value || !validateField(emailInput)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;
    
    // Simulate subscription
    setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        showNotification('Successfully subscribed to newsletter!', 'success');
        form.reset();
    }, 1500);
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <div class="notification__content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification__close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 1.5rem 2rem;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        z-index: 1000;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
    
    // Manual close
    notification.querySelector('.notification__close').addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
}

// Animation Functions
function initAnimations() {
    // Animate elements on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Initial animation check
    animateOnScroll();
}

function animateOnScroll() {
    const elements = document.querySelectorAll('[data-aos]');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('fade-in');
        }
    });
}

// Product Filter Functions
function initProductFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const productCategories = document.querySelectorAll('.product-category');
    
    if (filterTabs.length === 0) return;
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const filter = tab.getAttribute('data-filter');
            
            // Update active tab
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Filter products
            productCategories.forEach(category => {
                const categoryType = category.getAttribute('data-category');
                
                if (filter === 'all' || filter === categoryType) {
                    category.style.display = 'block';
                    category.classList.add('fade-in');
                } else {
                    category.style.display = 'none';
                }
            });
        });
    });
}

// FAQ Functions
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
}

// Smooth Scroll
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility Functions
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Performance optimized scroll handler
window.addEventListener('scroll', throttle(() => {
    const scrollTop = window.pageYOffset;
    
    // Header effects
    if (scrollTop > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}, 10));

// Add CSS animations
const animationCSS = `
@keyframes slideInRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideOutRight {
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(100%);
        opacity: 0;
    }
}

.notification__content {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.notification__close {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.5rem;
    margin-left: auto;
}

.header.scrolled {
    background: rgba(255, 255, 255, 0.98) !important;
    backdrop-filter: blur(20px) !important;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
}

[data-theme="dark"] .header.scrolled {
    background: rgba(18, 18, 18, 0.98) !important;
}
`;

// Inject animations CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = animationCSS;
document.head.appendChild(styleSheet);

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
});

// Handle resize events
window.addEventListener('resize', debounce(() => {
    // Close mobile menu on resize
    if (window.innerWidth > 992) {
        navMenu.classList.remove('show');
        navToggle.classList.remove('active');
        
        if (navToggle) {
            const icon = navToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
}, 250));