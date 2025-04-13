
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (mobileMenuToggle && mobileNav) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
      
      // Change the icon
      if (mobileNav.classList.contains('active')) {
        mobileMenuToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>`;
      } else {
        mobileMenuToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>`;
      }
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (this.getAttribute('href') !== '#') {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          if (mobileNav && mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
            mobileMenuToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>`;
          }
        }
      }
    });
  });
  
  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulate form submission
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.innerHTML;
      
      submitButton.disabled = true;
      submitButton.innerHTML = 'Pošiljanje...';
      
      // Simulate API call
      setTimeout(() => {
        // Reset form
        contactForm.reset();
        
        // Show success message
        alert('Hvala za vaše sporočilo! Odgovorili vam bomo v najkrajšem možnem času.');
        
        // Reset button
        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
      }, 1500);
    });
  }
  
  // Cookie consent
  const cookieConsent = document.getElementById('cookie-consent');
  const acceptAll = document.getElementById('accept-all');
  const acceptEssential = document.getElementById('accept-essential');
  
  // Check if user has already consented
  const hasConsented = localStorage.getItem('cookie-consent');
  
  if (!hasConsented && cookieConsent) {
    // Show cookie consent after a short delay
    setTimeout(() => {
      cookieConsent.classList.remove('hidden');
      cookieConsent.classList.add('show');
    }, 1000);
    
    // Handle cookie consent buttons
    if (acceptAll) {
      acceptAll.addEventListener('click', () => {
        localStorage.setItem('cookie-consent', 'accepted');
        localStorage.setItem('analytics-cookies', 'accepted');
        localStorage.setItem('marketing-cookies', 'accepted');
        cookieConsent.classList.remove('show');
        setTimeout(() => {
          cookieConsent.classList.add('hidden');
        }, 300);
      });
    }
    
    if (acceptEssential) {
      acceptEssential.addEventListener('click', () => {
        localStorage.setItem('cookie-consent', 'essential');
        cookieConsent.classList.remove('show');
        setTimeout(() => {
          cookieConsent.classList.add('hidden');
        }, 300);
      });
    }
  }
  
  // Set current year in copyright text
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
  
  // Simple animation for elements as they come into view
  function animateOnScroll() {
    const elements = document.querySelectorAll('.stat-card, .benefit-card, .blog-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          // Unobserve after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    elements.forEach(element => {
      observer.observe(element);
    });
  }
  
  // Initialize animations
  animateOnScroll();
  
  // Animate logo carousel
  function animateLogoCarousel() {
    const logoSlider = document.querySelector('.logo-slider');
    
    if (logoSlider) {
      // Clone the logo items to create an infinite scroll effect
      const logoItems = logoSlider.querySelectorAll('.logo-item');
      const clonedItems = [];
      
      logoItems.forEach(item => {
        const clone = item.cloneNode(true);
        clonedItems.push(clone);
        logoSlider.appendChild(clone);
      });
    }
  }
  
  animateLogoCarousel();
});
