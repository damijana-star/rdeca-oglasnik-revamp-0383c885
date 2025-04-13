
document.addEventListener('DOMContentLoaded', function() {
  // Header scroll functionality
  const header = document.querySelector('.sticky-header');
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  
  // Scroll event for header
  window.addEventListener('scroll', function() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  mobileMenuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileNav.classList.toggle('active');
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      e.preventDefault();
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        mobileMenuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
      }
    });
  });
  
  // Partner logo carousel
  const logoContainer = document.querySelector('.partner-logos');
  const logos = [
    "/lovable-uploads/a70fa581-c6f8-44d5-be1c-5589ca8626f6.png",
    "/lovable-uploads/6be61759-c181-4565-8130-35b4715fe1e1.png",
    "/lovable-uploads/476b5c5f-85c3-4193-8d88-f3571eb24335.png",
    "/lovable-uploads/9f35d68a-2f69-4a48-9b93-76657d6bc122.png",
    "/lovable-uploads/a5bc1e9d-7a5b-40b2-9dfc-8feca77f7102.png",
    "/lovable-uploads/432954bc-cf7d-42c7-b309-b20b3289108f.png",
    "/lovable-uploads/20277a73-c415-415e-b538-75410ff05226.png",
    "/lovable-uploads/d066daf3-4428-47ee-b210-1f61b489f618.png",
    "/lovable-uploads/484d7273-fbb0-40e2-8d02-c09f1e06b15f.png",
    "/lovable-uploads/b4bcb7c2-72d2-4e47-8549-2a1a57436add.png",
    "/lovable-uploads/96e57270-837b-4917-adde-f0154b82a599.png",
    "/lovable-uploads/a95d5fec-41d0-4daf-904a-707c45aefb65.png",
    "/lovable-uploads/fbbe3b71-7014-40f5-8c70-ebfe802f9329.png",
    "/lovable-uploads/c7debcb6-84a6-440a-bc84-865cd2dfe300.png"
  ];
  
  if (logoContainer) {
    const logoTrack = document.createElement('div');
    logoTrack.className = 'logo-track';
    logoTrack.style.display = 'flex';
    logoTrack.style.gap = '2rem';
    logoTrack.style.animation = 'scroll 30s linear infinite';
    
    // Create the animation
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      
      .logo-track {
        display: flex;
        width: fit-content;
      }
      
      .logo-item {
        flex: 0 0 auto;
        height: 60px;
        filter: brightness(0) invert(1);
        opacity: 0.8;
        transition: opacity 0.3s ease;
      }
      
      .logo-item:hover {
        opacity: 1;
      }
    `;
    document.head.appendChild(styleSheet);
    
    // Double the logos for continuous scrolling
    const allLogos = [...logos, ...logos];
    
    allLogos.forEach(logo => {
      const img = document.createElement('img');
      img.src = logo;
      img.alt = 'Partner logo';
      img.className = 'logo-item';
      logoTrack.appendChild(img);
    });
    
    logoContainer.appendChild(logoTrack);
  }
  
  // Form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // In a real implementation, you would send this data to a server
      console.log('Form submitted:', { name, email, phone, subject, message });
      
      // Show success message
      alert('Vaše sporočilo je bilo uspešno poslano. Hvala!');
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // Cookie consent
  const cookieConsent = document.getElementById('cookieConsent');
  const acceptCookiesBtn = document.getElementById('acceptCookies');
  const rejectCookiesBtn = document.getElementById('rejectCookies');
  
  // Check if user has already made a choice
  const cookiesAccepted = localStorage.getItem('cookiesAccepted');
  
  if (cookiesAccepted === null && cookieConsent) {
    // User hasn't made a choice yet, show the banner
    cookieConsent.style.display = 'block';
  }
  
  if (acceptCookiesBtn) {
    acceptCookiesBtn.addEventListener('click', function() {
      localStorage.setItem('cookiesAccepted', 'true');
      if (cookieConsent) cookieConsent.style.display = 'none';
    });
  }
  
  if (rejectCookiesBtn) {
    rejectCookiesBtn.addEventListener('click', function() {
      localStorage.setItem('cookiesAccepted', 'false');
      if (cookieConsent) cookieConsent.style.display = 'none';
    });
  }
  
  // Create benefit icons
  const iconPlaceholders = {
    'icon-target': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23e32530' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Ccircle cx='12' cy='12' r='6'%3E%3C/circle%3E%3Ccircle cx='12' cy='12' r='2'%3E%3C/circle%3E%3C/svg%3E",
    'icon-pin': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23e32530' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z'%3E%3C/path%3E%3Ccircle cx='12' cy='10' r='3'%3E%3C/circle%3E%3C/svg%3E",
    'icon-money': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23e32530' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='1' x2='12' y2='23'%3E%3C/line%3E%3Cpath d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'%3E%3C/path%3E%3C/svg%3E",
    'icon-design': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23e32530' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m2 12 5 9 14-9-5-9Z'%3E%3C/path%3E%3Cpath d='M14 2 9 6l5 9 5-4Z'%3E%3C/path%3E%3C/svg%3E",
    'icon-phone': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'%3E%3C/path%3E%3C/svg%3E",
    'icon-email': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='20' height='16' x='2' y='4' rx='2'%3E%3C/rect%3E%3Cpath d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'%3E%3C/path%3E%3C/svg%3E",
    'icon-location': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z'%3E%3C/path%3E%3Ccircle cx='12' cy='10' r='3'%3E%3C/circle%3E%3C/svg%3E",
    'icon-home': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'%3E%3C/path%3E%3Cpolyline points='9 22 9 12 15 12 15 22'%3E%3C/polyline%3E%3C/svg%3E",
    'icon-file': "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'%3E%3C/path%3E%3Cpolyline points='14 2 14 8 20 8'%3E%3C/polyline%3E%3Cline x1='16' y1='13' x2='8' y2='13'%3E%3C/line%3E%3Cline x1='16' y1='17' x2='8' y2='17'%3E%3C/line%3E%3Cline x1='10' y1='9' x2='8' y2='9'%3E%3C/line%3E%3C/svg%3E"
  };
  
  // Apply icon background images
  Object.keys(iconPlaceholders).forEach(iconClass => {
    const elements = document.querySelectorAll('.' + iconClass);
    elements.forEach(el => {
      el.style.backgroundImage = `url('${iconPlaceholders[iconClass]}')`;
      el.style.backgroundSize = 'contain';
      el.style.backgroundRepeat = 'no-repeat';
      el.style.backgroundPosition = 'center';
    });
  });
  
  // Add PDF functionality to view-pdf.html if on that page
  const pdfPlaceholder = document.querySelector('.pdf-placeholder');
  const loadPdfBtn = pdfPlaceholder && pdfPlaceholder.querySelector('button');
  const prevPageBtn = document.querySelector('.control-btn:first-child');
  const nextPageBtn = document.querySelector('.control-btn:last-child');
  const pageNumber = document.querySelector('.page-number');
  
  if (loadPdfBtn) {
    // Simulating PDF loading (just showing a different message, in a real implementation you'd load a PDF)
    loadPdfBtn.addEventListener('click', function() {
      pdfPlaceholder.innerHTML = `
        <div class="pdf-icon">📄</div>
        <p class="pdf-message">PDF uspešno naložen! Tu bi bil prikazan dejanski PDF.</p>
        <p class="pdf-message">Uporabljajte kontrole spodaj za navigacijo po straneh.</p>
      `;
    });
    
    if (prevPageBtn && nextPageBtn && pageNumber) {
      let currentPage = 1;
      const totalPages = 20;
      
      updatePageNumber();
      
      prevPageBtn.addEventListener('click', function() {
        if (currentPage > 1) {
          currentPage--;
          updatePageNumber();
        }
      });
      
      nextPageBtn.addEventListener('click', function() {
        if (currentPage < totalPages) {
          currentPage++;
          updatePageNumber();
        }
      });
      
      function updatePageNumber() {
        pageNumber.textContent = `Stran ${currentPage} od ${totalPages}`;
      }
    }
  }
});
