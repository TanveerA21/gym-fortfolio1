// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const icon = darkModeToggle.querySelector('i');
  if (body.classList.contains('dark-mode')) {
    icon.className = 'fas fa-sun';
    localStorage.setItem('darkMode', 'enabled');
  } else {
    icon.className = 'fas fa-moon';
    localStorage.setItem('darkMode', 'disabled');
  }
});

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  darkModeToggle.querySelector('i').className = 'fas fa-sun';
}

// Hamburger Menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Smooth Scrolling
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
    // Close mobile menu if open
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// Form Validation and WhatsApp Redirect
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const plan = document.getElementById('plan').value;
  const message = document.getElementById('message').value.trim();

  // Validate all fields are filled
  if (!name || !phone || !email || !plan || !message) {
    alert('Please fill in all required fields.');
    return;
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Basic phone validation (Indian mobile numbers)
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(phone.replace(/\s+/g, ''))) {
    alert('Please enter a valid 10-digit mobile number.');
    return;
  }

  // Prepare WhatsApp message
  const whatsappNumber = '919876543210'; // Replace with actual number
  const whatsappMessage = `Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0APreferred Plan: ${plan}%0AMessage: ${message}`;

  // Redirect to WhatsApp
  window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');

  // Reset form
  contactForm.reset();
});

// Sticky Navbar
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});