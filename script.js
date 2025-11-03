// Menu mobile toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

menuBtn?.addEventListener('click', () => mobileMenu.classList.add('show'));
closeMenu?.addEventListener('click', () => mobileMenu.classList.remove('show'));

// Smooth scroll
document.querySelectorAll('a[href^=\"#\"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      mobileMenu.classList.remove('show');
      document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
      link.classList.add('active');
    }
  });
});
