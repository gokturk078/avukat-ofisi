// =====================================================
// YILMAZ HUKUK BÜROSU - PREMIUM JAVASCRIPT
// =====================================================

document.addEventListener('DOMContentLoaded', function () {
  // Initialize all components
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initCounterAnimation();
  initScrollAnimations();
  initCookieBanner();
});

// =====================================================
// NAVBAR
// =====================================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  let lastScroll = 0;

  window.addEventListener('scroll', function () {
    const currentScroll = window.scrollY;

    // Add shadow on scroll
    if (currentScroll > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }

    lastScroll = currentScroll;
  });
}

// =====================================================
// MOBILE MENU
// =====================================================
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-overlay');

  if (!menuBtn || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.add('active');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', function () {
    if (mobileMenu.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  // Close menu on link click
  const menuLinks = mobileMenu.querySelectorAll('a');
  menuLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
}

// =====================================================
// SMOOTH SCROLL
// =====================================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navbar = document.getElementById('navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = target.offsetTop - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// =====================================================
// COUNTER ANIMATION
// =====================================================
function initCounterAnimation() {
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length === 0) return;

  const animateCounter = function (counter) {
    const target = parseInt(counter.getAttribute('data-count'));
    const duration = 2000;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * easeOut);

      counter.textContent = current.toLocaleString('tr-TR');

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target.toLocaleString('tr-TR');
      }
    }

    requestAnimationFrame(updateCounter);
  };

  // Intersection Observer for triggering animation
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach(function (counter) {
    observer.observe(counter);
  });
}

// =====================================================
// SCROLL ANIMATIONS
// =====================================================
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in, [data-stagger]');
  if (animatedElements.length === 0) return;

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(function (el) {
    observer.observe(el);
  });

  // Also trigger for elements already in view
  setTimeout(function () {
    animatedElements.forEach(function (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible');
      }
    });
  }, 100);
}

// =====================================================
// COOKIE BANNER
// =====================================================
function initCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');
  const rejectBtn = document.getElementById('reject-cookies');

  if (!banner) return;

  // Check if user has already made a choice
  const cookieChoice = localStorage.getItem('cookie-consent');

  if (!cookieChoice) {
    // Show banner after a short delay
    setTimeout(function () {
      banner.classList.add('active');
    }, 1500);
  }

  if (acceptBtn) {
    acceptBtn.addEventListener('click', function () {
      localStorage.setItem('cookie-consent', 'accepted');
      banner.classList.remove('active');
    });
  }

  if (rejectBtn) {
    rejectBtn.addEventListener('click', function () {
      localStorage.setItem('cookie-consent', 'rejected');
      banner.classList.remove('active');
    });
  }
}

// =====================================================
// FORM VALIDATION (for contact pages)
// =====================================================
function initFormValidation() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const submitBtn = document.getElementById('submitBtn');
  const formSuccess = document.getElementById('form-success');

  function showError(fieldId, message) {
    const errorEl = document.getElementById(fieldId + '-error');
    const inputEl = document.getElementById(fieldId);

    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.remove('hidden');
    }
    if (inputEl) {
      inputEl.style.borderColor = 'var(--color-crimson)';
    }
  }

  function clearError(fieldId) {
    const errorEl = document.getElementById(fieldId + '-error');
    const inputEl = document.getElementById(fieldId);

    if (errorEl) {
      errorEl.classList.add('hidden');
    }
    if (inputEl) {
      inputEl.style.borderColor = '';
    }
  }

  function clearAllErrors() {
    ['name', 'phone', 'email', 'subject', 'message'].forEach(clearError);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearAllErrors();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();
    const kvkk = document.getElementById('kvkk');

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
    if (kvkk && !kvkk.checked) {
      alert('KVKK onayı vermeniz gerekmektedir.');
      isValid = false;
    }

    if (isValid && submitBtn) {
      // Show loading state
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Gönderiliyor...';
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.7';

      // Simulate form submission
      setTimeout(function () {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = '';

        if (formSuccess) {
          formSuccess.classList.remove('hidden');
        }
        form.reset();

        // Hide success message after 5 seconds
        setTimeout(function () {
          if (formSuccess) {
            formSuccess.classList.add('hidden');
          }
        }, 5000);
      }, 1500);
    }
  });

  // Clear error on input
  ['name', 'phone', 'email', 'subject', 'message'].forEach(function (fieldId) {
    const el = document.getElementById(fieldId);
    if (el) {
      el.addEventListener('input', function () {
        clearError(fieldId);
      });
    }
  });
}

// Initialize form validation if form exists
document.addEventListener('DOMContentLoaded', initFormValidation);
