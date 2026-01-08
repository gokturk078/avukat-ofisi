// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
  });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', function() {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('active');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function() {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('active');
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const target = document.querySelector(targetId);
    if (target) {
      const navbarHeight = navbar.offsetHeight;
      const targetPosition = target.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Form validation
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formSuccess = document.getElementById('form-success');

function showError(fieldId, message) {
  const errorEl = document.getElementById(fieldId + '-error');
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.classList.remove('hidden');
  }
  const inputEl = document.getElementById(fieldId);
  if (inputEl) {
    inputEl.classList.add('border-red-500');
  }
}

function clearError(fieldId) {
  const errorEl = document.getElementById(fieldId + '-error');
  if (errorEl) {
    errorEl.classList.add('hidden');
  }
  const inputEl = document.getElementById(fieldId);
  if (inputEl) {
    inputEl.classList.remove('border-red-500');
  }
}

function clearAllErrors() {
  ['name', 'phone', 'email', 'subject', 'message'].forEach(clearError);
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  clearAllErrors();
  
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value.trim();
  const kvkk = document.getElementById('kvkk').checked;
  
  let isValid = true;
  
  // Validate name
  if (!name) {
    showError('name', 'Lütfen adınızı ve soyadınızı girin.');
    isValid = false;
  }
  
  // Validate phone
  const phoneClean = phone.replace(/\s/g, '');
  if (!phone || !/^05\d{9}$/.test(phoneClean)) {
    showError('phone', 'Geçerli bir telefon numarası girin (05XX XXX XX XX)');
    isValid = false;
  }
  
  // Validate email
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError('email', 'Geçerli bir e-posta adresi girin.');
    isValid = false;
  }
  
  // Validate subject
  if (!subject) {
    showError('subject', 'Lütfen bir konu seçin.');
    isValid = false;
  }
  
  // Validate message
  if (!message || message.length < 20) {
    showError('message', 'Mesajınız en az 20 karakter olmalıdır.');
    isValid = false;
  }
  
  // Validate KVKK
  if (!kvkk) {
    alert('KVKK onayı vermeniz gerekmektedir.');
    isValid = false;
  }
  
  if (isValid) {
    // Show loading state
    submitBtn.textContent = 'Gönderiliyor...';
    submitBtn.classList.add('btn-loading');
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(function() {
      submitBtn.textContent = 'Gönder';
      submitBtn.classList.remove('btn-loading');
      submitBtn.disabled = false;
      
      formSuccess.classList.remove('hidden');
      form.reset();
      
      // Hide success message after 5 seconds
      setTimeout(function() {
        formSuccess.classList.add('hidden');
      }, 5000);
    }, 1500);
  }
});

// Clear error on input
['name', 'phone', 'email', 'subject', 'message'].forEach(function(fieldId) {
  const el = document.getElementById(fieldId);
  if (el) {
    el.addEventListener('input', function() {
      clearError(fieldId);
    });
  }
});
